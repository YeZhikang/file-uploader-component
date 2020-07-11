import Vue from 'vue'
import uploader from "./components/uploader.vue";

// new Vue({
//     render: (h) => h(uploader,{},[h('div', {
//         style: {
//             fontSize: '12px',
//             color: 'rgb(111,111,111)'
//         }
//     }, '请上传 jpg/png 格式的图片')]),
// }).$mount('#app')

const install = (Vue) => {
    Vue.component('ye-upload', uploader)
}

export default install
