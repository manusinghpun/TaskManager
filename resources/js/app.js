import Vue from 'vue';
import App from './App.vue'
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import bootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
import VueSimpleAlert from "vue-simple-alert";

//autocomplete suggestion
import VueSuggestion from 'vue-suggestion' 
Vue.use(VueSuggestion)


import moment from 'moment';

Vue.use(bootstrapVue);
Vue.use(FlashMessage);
Vue.use(VueSimpleAlert);


// Filter Section

Vue.filter('myDate',function(created){
    return moment(created).format('DD MMMM YYYY');
});
Vue.filter('dayDate',function(created){
    return moment(created).format('dddd');
});
Vue.filter('datetime',function(created){
    return moment(created).format('DD MMM YY HH:mm');
});


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
