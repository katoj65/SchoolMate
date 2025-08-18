import Vue from 'nativescript-vue';
import Home from './components/Home';
import Login from './components/Login.vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';





//ApplicationSettings.clear();

new Vue({
render: (h) => h('frame', [h(ApplicationSettings.getBoolean('session',false)==false?Login:Home)]),
}).$start();
