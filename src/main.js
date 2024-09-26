import {
    createApp
} from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'sun-form-v3/dist/style.css'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import sunFormV3 from 'sun-form-v3';
import VxeUITable from 'vxe-table'

import 'vxe-table/lib/style.css'

import XEUtils from 'xe-utils'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(sunFormV3);
app.use(ElementPlus, {
    locale: zhCn,
}).use(VxeUITable).mount('#app')