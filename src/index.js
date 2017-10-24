import VueDataLoading from './components/vue-data-loading.vue'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vue-data-loading', VueDataLoading)
}

export default VueDataLoading