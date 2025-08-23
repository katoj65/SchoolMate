<script>
import classApi from './api/classApi';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Skeleton from './templates/Skeleton.vue';
import SubjectPage from './SubjectPage.vue';
import ClassMenu from './ClassMenu.vue';

export default {
components:{
Skeleton,
SubjectPage,
ClassMenu
},


data(){return{
title:null,
subjects:[],
isLoading:false,



}},
methods:{

async subjectApi(){
this.isLoading=true;
let user=ApplicationSettings.getString('user',null);

if(!user){return;}
user = JSON.parse(user);
const myClass=user.class;


try{
const api = new classApi();
const response = await api.userClass(myClass);
if(!response){return;}

this.isLoading=false;

if(response.statusCode==200){
const data=JSON.parse(response.content);

if(data.length>0){

data.forEach(element => {
this.title=element.name+' subjects';
this.subjects=element.subject;
});

}


}else{
console.log(response.statusCode);
}

}catch(error){
console.log(error);
}
},


subjectNav(id){
this.$navigateTo(SubjectPage,{props:{subject_id:id}});
},

classMenuNav(){
this.$navigateTo(ClassMenu,{
});
}




},

mounted(){
this.subjectApi();



}







}
</script>
<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">
<!-- Header -->






<StackLayout padding="20" backgroundColor="#f0f2f5">
<StackLayout orientation="horizontal">
<Label text="Subjects" fontSize="22" fontWeight="bold" color="#2C3E50" width="90%"/>
<Label text.decode="&#xf00b;" width="10%" class="fas" fontSize="25" @tap="classMenuNav"/>
</StackLayout>
<StackLayout>
<Label :text="title" fontSize="14" color="#7F8C8D" marginTop="4" width="100%"/>
</StackLayout>
</StackLayout>



<ScrollView height="100%">
<StackLayout padding="10" spacing="15" v-if="isLoading==false">
<StackLayout v-if="subjects.length>0">
<StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4" v-for="(s,key) in subjects" :key="key" @tap="subjectNav(s.id)">
<Label :text="s.name" fontSize="18" fontWeight="bold" color="#2C3E50"/>
<Label :text="'Subject has no topics'" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>
</StackLayout>
<StackLayout v-else>
<Label text="No data"></Label>
</StackLayout>
</StackLayout>
<skeleton v-else padding="15"/>
</ScrollView>
</StackLayout>
</Page>
</template>