import "babel-polyfill"
import Vue from "vue"
import APP from "./complex-title.vue"


new Vue({
    el: '#app',
    render: h => h(APP)
})