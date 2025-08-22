<script>
import topicApi from './api/topicApi';
import Skeleton from './templates/Skeleton.vue';
import SubtopicExplanation from './SubtopicExplanation.vue';
export default {
components:{
Skeleton,
SubtopicExplanation,
},

props:{
topic_id : Number

},

data(){return{
title:null,
subtopics:[],
isLoading:false,
subtitle:null,
subject:'Topic',

}},


methods:{
async getTopics(){
const id=this.topic_id;
if(!id){return;}
try{
this.isLoading=true;
const api=new topicApi();
const response=await api.getTopic(id);
if(!response){return;}

this.isLoading=false;

if(response.statusCode==200){
const data=JSON.parse(response.content);
if(data.length==0){return;}

data.forEach(element => {
this.title=element.name;
this.subtitle=element.description;
this.subtopics=element.sub_topic;
this.subject='Topic in '+element.subject.name;

});

}else{
console.log(response.statusCode);
}

}catch(error){
console.log(error);
}
},


explanationNav(obj){
this.$navigateTo(SubtopicExplanation,{
props : {
subtopic : obj,
subject : this.subject
}
});
}








},
mounted(){
this.getTopics();
}









}
</script>
<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">


<StackLayout padding="20" backgroundColor="#f0f2f5">
<Label :text="title" fontSize="22" fontWeight="bold" color="#2C3E50"/>
<Label :text="subject" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>



<ScrollView height="100%">
<StackLayout padding="20" spacing="15">

<Label :text="subtitle"
fontSize="14"
color="#2C3E50"
textWrap="true"
marginBottom="10"
/>


<StackLayout v-if="!isLoading">
<StackLayout v-if="subtopics.length > 0" spacing="10">

<StackLayout
    padding="15"
    backgroundColor="white"
    borderRadius="15"
    shadowColor="#00000033"
    shadowOpacity="0.1"
    shadowRadius="4"
    v-for="(i,key) in subtopics"
    :key="key"
    @tap="explanationNav(i)"
    orientation="horizontal">


<Label text.decode="&#xf111;" class="fas" width="8%" fontSize="8" color="#1F2937"/>
<Label :text="i.name" fontSize="16"  color="#1F2937" width="92%" />


    <!-- <Label :text="i.description" fontSize="14" marginTop="4" textWrap="true" color="#1F2937" /> -->

</StackLayout>

</StackLayout>
<StackLayout v-else>
<Label padding="10" text="No content"></Label>
</StackLayout>

</StackLayout>
<Skeleton v-else padding="15"/>

</StackLayout>
</ScrollView>









</StackLayout>
</Page>
</template>