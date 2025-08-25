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
user:null,
status:null,




}},

methods:{
getUser(){
const user=ApplicationSettings.getString('user',null);
const user_data=JSON.parse(user);
this.user=user_data;
this.status=user_data.profile_status;

},





},



mounted(){
this.getUser();

},


computed:{
userStatus(){
const user=ApplicationSettings.getString('user',null);
const user_data=JSON.parse(user);
return user_data.profile_status;
},





}








}
</script>
<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">
<app-layout>

<create-user-profile v-if="userStatus=='registered'"/>
<timetable v-else /> 


</app-layout>
</StackLayout>
</Page>
</template>