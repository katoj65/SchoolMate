<script>
import subjectApi from './api/subjectApi';
import Skeleton from './templates/Skeleton.vue';
import TopicPage from './TopicPage.vue';

export default {
components:{
Skeleton,
TopicPage
},

props:{

subject_id : Number

},

data(){
return{

isLoading:false,
topics:[],
title:'',




}},

methods:{
async getSubject(){
const id=this.subject_id;
if(!id){return;}

try{
this.isLoading=true;
const api=new subjectApi();
const response=await api.getSubject(id);
if(!response){return;}
this.isLoading=false;
if(response.statusCode==200){
const data=JSON.parse(response.content);
if(data.length==0){return;}

data.forEach(element => {
this.title=element.name;
this.topics=element.topic;
});


}else{
console.log(response.statusCode);
}

}catch(error){
console.log(error);
}

},



//navigate to topic
topicNav(id){
this.$navigateTo(TopicPage,{props:{topic_id:id}});
}




},

mounted(){
this.getSubject();
}





}
</script>

<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">


<StackLayout padding="20" backgroundColor="#F0F2F5">
<Label :text="title" fontSize="22" fontWeight="bold" color="#1F2937" textAlignment="left"/>
<Label text="Topics Overview" fontSize="14" color="#6B7280" textAlignment="left" marginTop="6"/>
</StackLayout>





<ScrollView height="100%" v-if="isLoading==false">
<StackLayout padding="10" spacing="16" v-if="topics.length>0">

<StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" v-for="(t,key) in topics" :key="key" @tap="topicNav(t.id)">
<Label :text="t.name" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
<Label :text="t.description" fontSize="14" color="#4B5563" textWrap="true"/>
</StackLayout>

</StackLayout>

<StackLayout v-else>
<Label text="No results" padding="20"/>
</StackLayout>

</ScrollView>
<skeleton v-else/>
</StackLayout>
</Page>
</template>