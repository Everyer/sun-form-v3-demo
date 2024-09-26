import {
    createApp
} from 'vue'

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
import VxeUITable from 'vxe-table'

import 'vxe-table/lib/style.css'

import XEUtils from 'xe-utils'
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
app.use(syComponents)
app.use(router).use(ElementPlus, {
    locale: zhCn,
}).use(VxeUITable).mount('#app')
