import {
    createApp
} from 'vue'
import './index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'sun-form-v3/dist/style.css'
import 'element-plus/dist/index.css'
import './assets/styles/element/index.scss'
import * as echarts from 'echarts/core'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Http from './utils/http'
import sunFormV3 from 'sun-form-v3';
import {
    ElMessage,
    ElMessageBox
} from 'element-plus'
// import {
//     VxeUI,
//     VxeTable,
//     VxeColumn,
//     VxeColgroup,
// } from 'vxe-table'
import VxeUITable from 'vxe-table'
// import { VxeUI } from 'vxe-table'
// import {
//     VxeIcon,
//     VxeLoading,
//     VxeModal,
//     VxePager,
// } from 'vxe-pc-ui'
// ...

// 导入主题变量，也可以重写主题变量
import 'vxe-table/lib/style.css'
// import 'vxe-pc-ui/lib/style.css'

// 导入默认的语言
// import zhCN2 from 'vxe-pc-ui/lib/language/zh-CN'
import XEUtils from 'xe-utils'
// VxeUI.setI18n('zh-CN', zhCN2)
// VxeUI.setLanguage('zh-CN')

// function LazyVxeTable(app) {
//     app.use(VxeTable)
//     app.use(VxeColumn)
//     app.use(VxeColgroup)
// }

// function LazyVxeUI(app) {
//     app.use(VxeIcon)
//     app.use(VxeLoading)
//     app.use(VxeModal)
//     app.use(VxePager)
// }
window.app = {
    "$message": ElMessage,
    "$confirm": ElMessageBox.confirm,
    "$router": router,
    "$store": store,
    "$utils":XEUtils,
}

window.app.$http = new Http({
    baseUrl: "/lowcode",
    httpSuccessHandle:(res)=>{
    },
    httpErrorHandle:(err)=>{
        if(err.response.status==401){
            store.commit('logout')
        }
    }
})
if (document.body.clientWidth < 1536) {
    window.app.isSmall = true
} else {
    window.app.isSmall = false
}
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(sunFormV3);
import syComponents from './commonComponent/index'
app.use(syComponents)
app.use(router).use(ElementPlus, {
    locale: zhCn,
}).use(VxeUITable).mount('#app')
