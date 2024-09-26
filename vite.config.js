import {
  defineConfig
} from 'vite'
import {
  resolve
} from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import {
  lazyImport,
  VxeResolver
} from 'vite-plugin-lazy-import'
export default defineConfig({
  resolve: {
    // 配置'@'路径别名
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  plugins: [vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    Components({
      resolvers: [ElementPlusResolver(), IconsResolver({
        enabledCollections: ['ep'],
      })],
    }), Icons({
      autoInstall: true,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver(), IconsResolver({
        prefix: 'Icon',
      }), ],
    }),
    lazyImport({
      resolvers: [
        VxeResolver({
          libraryName: 'vxe-table'
        }),
        VxeResolver({
          libraryName: 'vxe-pc-ui'
        })
      ]
    })
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'vuex'], // 根据需要添加
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 3833,
    open: true,
    host: true,
    proxy: {
      // '/dwgxzj': { // 将 / 改为 /api
      //   target: 'https://zjzhjg.zhuji.gov.cn:8090/',
      //   changeOrigin: true,
      // }
      '/lowcode': { // 将 / 改为 /api
        target: 'http://localhost:3000/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '') // 重写路径,去掉 /api 前缀
      },
      '/lowcodeApi': { // 将 / 改为 /api
        target: 'http://localhost:3000/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/lowcodeApi/, '') // 重写路径,去掉 /api 前缀
      }
    }
  }
})