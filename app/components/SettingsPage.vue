<script>
import * as ApplicationSettings from '@nativescript/core/application-settings';
import UserProfile from './UserProfile.vue';
import Auth from './api/authApi';



export default {
components:{
UserProfile,



},

data(){return{
user_class:null,
isLoading:false,

}},

methods:{
userDetails(){
let user=ApplicationSettings.getString('user',null);
user=JSON.parse(user);
this.user_class=user.class;


},

userProfileNav(){
this.$navigateTo(UserProfile);
},



async logout(){
this.isLoading=true;
const auth = new Auth();
const close = await auth.logoutApi();
ApplicationSettings.clear();
this.isLoading=false;
this.$navigateTo(require('./Login.vue').default,{ clearHistory: true });

}









},




mounted(){
this.userDetails();

}




}
</script>

<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<StackLayout padding="20" backgroundColor="#f0f2f5">
<Label text="Settings" fontSize="20" fontWeight="bold" color="#2C3E50"/>
<Label text="Manage your preferences" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>








<StackLayout padding="15" spacing="10">


<StackLayout padding="15" backgroundColor="white" borderRadius="12" @tap="userProfileNav">
<Label text="Profile" fontSize="16" fontWeight="bold" color="#2C3E50"/>
<Label text="Update your personal information" fontSize="14" color="#7F8C8D" marginTop="2"/>
</StackLayout>


<StackLayout padding="15" backgroundColor="white" borderRadius="12">
<Label text="Notifications" fontSize="16" fontWeight="bold" color="#2C3E50"/>
<Label text="Manage push notifications" fontSize="14" color="#7F8C8D" marginTop="2"/>
</StackLayout>


<StackLayout padding="15" backgroundColor="white" borderRadius="12">
<Label text="Class" fontSize="16" fontWeight="bold" color="#2C3E50"/>
<Label :text="'You are in '+user_class" fontSize="14" color="#7F8C8D" marginTop="2"/>
</StackLayout>


<StackLayout padding="15" backgroundColor="white" borderRadius="12">
<Label text="Subscription package" fontSize="16" fontWeight="bold" color="#2C3E50"/>
<Label text="SchoolMate Primee" fontSize="14" color="#7F8C8D" marginTop="2"/>
</StackLayout>


<StackLayout padding="15" borderRadius="12" >
<Button text="LOGOUT" class="btn-primary" marginTop="10" @tap="logout"/>


<!-- <Label text="LogOut" fontSize="16" fontWeight="bold" color="#2C3E50"/> -->
<!-- <Label text="Sign out the application" fontSize="14" color="#7F8C8D" marginTop="2"/> -->
</StackLayout>

<StackLayout v-if="isLoading==true">
<ActivityIndicator busy="true" color="black" />
</StackLayout>




</StackLayout>
</StackLayout>
</Page>
</template>


<style scoped>
StackLayout[backgroundColor="white"] {
  margin-bottom: 10;
  padding: 15;
  border-radius: 12;
  shadow-color: #00000033;
  shadow-opacity: 0.1;
  shadow-radius: 4;
}
</style>
