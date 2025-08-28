<script>
import Vue from 'nativescript-vue';
Vue.registerElement('HTMLLabel', () => require('@nativescript-community/ui-label').Label);
import subtopicExplanation from './ai/subtopicExplanation.js';
import Skeleton from './templates/Skeleton.vue';
import LearningProgress from './api/LearningProgress';



export default {
components:{
Skeleton,
},

props:{
subtopic : Object,
subject : String,
},

data(){return{
title:'',
isLoading:false,
responseText:null,
explanation:null,
examples:null,

}},


methods:{


async explain(){
const subtopic=this.subtopic;
const title=subtopic.name;
const desc=subtopic.description;
const subject=this.subject;
const input=[
{text:'You are a Ugandan secondary school tutor.'},
{text:' Explain '+title+' in '+subject+','},
{text:'give 2 examples.'},
{text:'Do not include greetings, begin from the explanation'}

];

this.title=title;
this.isLoading=true;



try {




//stop the api fron destroying the page
return;

const ai = new subtopicExplanation();
const data = await ai.explanation(input);
if (!data) return;
this.isLoading = false;
if (data.statusCode == 200) {
let response = JSON.parse(data.content.toString());
let candidate = response.candidates[0].content.parts[0].text;
const parsed = JSON.parse(candidate);
const topic=parsed.topic;
let definition=parsed.definition;
definition=definition.replaceAll(':**',':</b><br/>');
definition=definition.replaceAll('**','<b>');
const examples=parsed.examples || [];
this.explanation=definition;
this.examples=examples;


// console.log(examples.length);
// examples.forEach(element => {
// let item=element;
// item=item.replaceAll(':**',':</b><br/>');
// item=item.replaceAll('**','<b>');



// });




} else {
console.log(data);
}
} catch (error) {
console.log(error);
}



},


async contentLog(){
const id = this.subtopic.id;
const api = new LearningProgress();
const data = await api.subTopicAccess(id);
if(!data){return;}
if(data.statusCode==200){
console.log(data.statusCode);
}else{
console.log(data.statusCode);
}


//console.log(id);





}







},





mounted(){
this.explain();
this.contentLog();
},






computed:{
htmlFormatter(item){
let x=item;
x=x.replaceAll(':**',':</b><br/>');
x=x.replaceAll('**','<b>');
return x;
}


}





}
</script>
<template>
<Page actionBarHidden="true" backgroundColor="#F9FAFB">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<StackLayout padding="20" backgroundColor="#f0f2f5">
<Label :text="title" fontSize="20" fontWeight="bold" color="#2C3E50"/>
<Label text="AI generated explanations" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>
<ScrollView height="100%">


<StackLayout v-if="isLoading==false">
<StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4">
<HTMLLabel :html="explanation" fontSize="16" marginTop="4" lineHeight="30"></HTMLLabel>
</StackLayout>



<StackLayout padding="20" backgroundColor="#f0f2f5">
<StackLayout v-for="(e,key) in examples" :key="key" marginBottom="30">

<HTMLLabel :html="htmlFormatter(e)" fontSize="16" marginTop="4" lineHeight="11"></HTMLLabel>


</StackLayout>
</StackLayout>




</StackLayout>
<skeleton v-else padding="20"/>


</ScrollView>
</StackLayout>
</Page>
</template>
