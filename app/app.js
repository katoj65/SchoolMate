import Vue from 'nativescript-vue';
import Home from './components/Home';
import Login from './components/Login.vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';






//set navigation bar color for android
import { Application, Color, isAndroid } from '@nativescript/core';
Application.on(Application.launchEvent, function () {
if (global.isAndroid) {
const activity = Application.android.startActivity || Application.android.foregroundActivity;
const window = activity.getWindow();
window.setNavigationBarColor(new Color("#030712").android);
}
});

//set status bar backgroud color
if (isAndroid) {
Application.android.on(Application.AndroidApplication.activityStartedEvent, function (args) {
if (args.activity) {
const window = args.activity.getWindow();
// Set status bar color (hex, rgba, or Color object)
window.setStatusBarColor(new Color("#f0f2f5").android);
const decorView = window.getDecorView();
decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);



}
});
}


//ApplicationSettings.clear();
import { FloatingActionButton } from "@nativescript-community/ui-material-floatingactionbutton";
Vue.registerElement('Fab', () => FloatingActionButton);



new Vue({
render: (h) => h('frame', [h(ApplicationSettings.getBoolean('session',false)==false?Login:Home)]),
}).$start();
