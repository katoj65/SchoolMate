<script>
import * as ApplicationSettings from '@nativescript/core/application-settings';
export default {
data(){return{

fname:null,
lname:null,
email:null,



}},

methods:{
getUser(){
const user=ApplicationSettings.getString(user,null);
const data=JSON.parse(user);
this.fname=data.first_name;
this.lname=data.last_name;
this.email=data.email;

},


loadModal(){
console.log('some information');
}






},

mounted(){
this.getUser();
this.loadModal();
}



}
</script>


<template>

<Page actionBarHidden="true">

    <StackLayout
    width="60"
    height="60"
    borderRadius="45"
    borderWidth="0"
    borderColor="black"
    justifyContent="center"
    alignItems="center"
    backgroundColor="#D8DCDE"
    horizontalAlignment="center"
    marginBottom="16"
    padding="15"
    marginTop="20">
    <Label text.decode="&#xf007;" class="fas" fontWeight="900" fontSize="30" color="black" textAlignment="center"/>
    </StackLayout>












</Page>

</template>