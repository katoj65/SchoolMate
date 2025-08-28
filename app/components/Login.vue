<script>
import * as ApplicationSettings from '@nativescript/core/application-settings';
import SpinnerButton from './templates/SpinnerButton.vue';
import FormError from './templates/FormError.vue';
import Home from './Home.vue';
import Auth from './api/authApi';



export default {
components:{
SpinnerButton,
FormError,
Home
},


data(){return{

error:null,
isLoading:false,
screen:0,

form:{
email:'katoj65@gmail.com',
password:'1234567890'
},


register:{
fname:'kato',
lname:'joshua',
email:'katoj65@gmail.com',
password:'1234567890'

}










}},


methods: {

changeScreen(item){
this.screen=item;
},





async login(){
this.error=null;
if(!this.form.email || !this.form.password){
this.error='Fill in all fields';
return;
}


try{

this.isLoading=true;
ApplicationSettings.clear();
const auth = new Auth();
const response = await auth.loginApi(this.form.email,this.form.password);
if(response){

this.isLoading=false;

if(response.statusCode==200){
const data=response.content ? response.content.toJSON():{};
const token=data.access_token;
const refresh_token=data.refresh_token;
ApplicationSettings.setString('access_token',token);
ApplicationSettings.setString('refresh_token',refresh_token);
ApplicationSettings.setBoolean('session',true);

//create session.
const userData=await auth.userSession();

if(userData){

if(userData.statusCode==200){
const user=JSON.parse(userData.content);
const metadata=user.user_metadata;
ApplicationSettings.setString('user',JSON.stringify(metadata));
this.$navigateTo(Home, {clearHistory: true});

}else{
this.error='Could not find user';
}

}
}else{
console.log(response.statusCode);
this.error='Invalid user email or password';
}



}else{
console.log(error);
}



}catch(error){
console.log(error);
}






},


async signUp(){

this.error=null;
if(!this.register.fname || !this.register.lname || !this.register.email || !this.register.password){
this.error='Fill in all fields';
return;
}

try{
this.isLoading=true;
const auth=new Auth();
const response=await auth.signupApi(this.register.fname, this.register.lname, this.register.email, this.register.password);
if(!response){
return;
}

if(response.statusCode==200){
const data = response.content ? response.content.toJSON() : {};
const userdata = JSON.stringify(data.user.user_metadata);

const refresh_token = data.refresh_token;
const token = data.access_token;

ApplicationSettings.setString('access_token', token);
ApplicationSettings.setString('refresh_token', refresh_token);
ApplicationSettings.setBoolean('session',true);
ApplicationSettings.setString('user', userdata);
ApplicationSettings.setString('status','registered');

this.$navigateTo(Home,{clearHistory: true});

}else if(response.statusCode=422) {
this.error='User already registered';
}else{
this.error='Registration failed. Please try again.';
console.log(response.statusCode);
}

this.isLoading=false;

}catch(error){
console.log(error);
}









}















},



}
</script>
<template>


<Page actionBarHidden="true">
    <RootLayout  backgroundColor="#f0f2f5">
    <GridLayout rows="auto, *" >
    <!-- Header -->
    <GridLayout
    row="0"
    columns="*, auto, auto"
    backgroundColor="#f0f2f5"
    padding="12">
    <!-- Title -->
    <Label
    text="Curriculum AI"
    color="black"
    fontSize="25"
    fontWeight="bold"
    verticalAlignment="middle"
    textAlignment="center"
    padding="20"
    />
    </GridLayout>

    <StackLayout row="1" backgroundColor="#f0f2f5" height="100%" padding="32" spacing="24" verticalAlignment="center">
    <ScrollView height="100%">
    <StackLayout paddingTop="30%">

    <!-- <Label text.decode="&#xf6d1;" class="fas" fontSize="70" color="black" textAlignment="center"/> -->

    <Image src="~/assets/logo1.png" width="80" height="80" />


<StackLayout v-if="screen==0">

    <Label text="Welcome Back" textAlignment="center" fontSize="20" marginBottom="20" marginTop="20" />

    <form-error :error="error"/>

    <TextField
    v-model="form.email"
    hint="Email"
    keyboardType="email"
    autocorrect="false"
    autocapitalizationType="none"
    class="input"
    marginBottom="10"
    />


    <TextField
    v-model="form.password"
    hint="Password"
    secure="true"
    class="input"
    marginBottom="15"
    />

    <Button text="LOGIN" class="btn-primary" marginBottom="15" v-if="isLoading==false" @tap="login"/>
    <spinner-button v-else title="LOGIN" margin="15"/>


    <Label text="Don't have an account? Sign up" textAlignment="center" color="black" marginBottom="15" @tap="changeScreen(1)"/>
</StackLayout>

<StackLayout v-else>
<form-error :error="error"/>

    <Label text="Create Account" textAlignment="center" fontSize="20" />

    <TextField v-model="register.fname"
    hint="First name"
    autocorrect="false"
    autocapitalizationType="none"
    class="input"
    marginTop="10"
    />


    <TextField v-model="register.lname"
    hint="Last name"
    autocorrect="false"
    autocapitalizationType="none"
    class="input"
    marginTop="10"
    />


    <TextField
    v-model="register.email"
    hint="Email"
    keyboardType="email"
    autocorrect="false"
    autocapitalizationType="none"
    class="input"
    marginTop="10"
    />



    <TextField
    v-model="register.password"
    hint="Password"
    secure="true"
    class="input"
    marginTop="10"
    />

 <Button text="SIGNUP" class="btn-primary" marginTop="10" v-if="isLoading==false" @tap="signUp"/>
 <spinner-button v-else title="SIGNUP" marginTop="10"/>


 <Label text="Have an account? Sign in" textAlignment="center" color="black" marginTop="15" @tap="changeScreen(0)"/>



</StackLayout>






    </StackLayout>
    </ScrollView>
    </StackLayout>
    </GridLayout>
    </RootLayout>
    </Page>





</template>