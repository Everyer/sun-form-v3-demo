import {
    createApp
} from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'sun-form-v3/dist/style.css'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts/core'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import sunFormV3 from 'sun-form-v3';
import {
    ElMessage,
    ElMessageBox
} from 'element-plus'
import VxeUITable from 'vxe-table'

import 'vxe-table/lib/style.css'

import XEUtils from 'xe-utils'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(sunFormV3);
app.use(syComponents)
app.use(router).use(ElementPlus, {
    locale: zhCn,
}).use(VxeUITable).mount('#app')