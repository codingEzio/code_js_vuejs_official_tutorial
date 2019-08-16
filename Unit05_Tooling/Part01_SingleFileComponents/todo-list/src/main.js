import Vue from 'vue/dist/vue.js';
import App from './App.vue';

Vue.config.productionTip = false;

// Change `from vue` to `from 'vue/dist/vue.js'`
//  this solution was suggested by the author of Vue.js
//  WHY     you wanna write the init code like `new Vue({..})`
//  LINK    https://github.com/vuejs-templates/webpack/issues/215#issuecomment-238095102

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});
