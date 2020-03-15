// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
// 开启debug模式
Vue.config.debug = true

Vue.use(VueCookies)
Vue.use(VueResource)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./i18n/lang/zh'),
    'en': require('./i18n/lang/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: {App},
  template: '<App/>'
})
