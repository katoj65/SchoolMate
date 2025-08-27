<script>
import * as ApplicationSettings from '@nativescript/core/application-settings';
import AppLayout from './Layout/AppLayout.vue';
import Timetable from './templates/Timetable.vue';
import CreateUserProfile from './templates/CreateUserProfile.vue';


export default {
components:{
AppLayout,
Timetable,
CreateUserProfile
 },

data(){return{
status:null,

}},


methods:{
getUser(){
this.status=ApplicationSettings.getString('status','completed');
},





},


mounted(){
console.log(this.status);
},

created(){
this.getUser();
},














}
</script>
<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">
<app-layout>

<StackLayout v-if="status=='registered'">
<create-user-profile/>
</StackLayout>
<StackLayout v-else>
<timetable/>
</StackLayout>

</app-layout>
</StackLayout>
</Page>
</template>