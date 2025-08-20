<script>
import subtopicExplanation from './ai/subtopicExplanation.js';
export default {
props:{
subtopic:Object
},



methods:{


async explain(){

   
try{
const ai=new subtopicExplanation();
const data=await ai.explanation('Explain how AI works in a few words in 100 words');

if(!data){return;}

if(data.statusCode==200){

let response=data.content.toJSON();
response=response.candidates;
response=response[0];
response=response.content;
response=response.parts;
const text=response[0];
console.log(text);

}else{
console.log(data.statusCode);
}
}catch(error){
console.log(error);
}



}






},





mounted(){
this.explain();
}





}
</script>
<template>
<Page actionBarHidden="true" backgroundColor="#F9FAFB">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<StackLayout padding="20" backgroundColor="#f0f2f5">
<Label text="Explanation" fontSize="20" fontWeight="bold" color="#2C3E50"/>
<Label text="AI generated explanations" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>
<ScrollView height="100%">


<Label text="AI content goes here"></Label>



</ScrollView>
</StackLayout>
</Page>
</template>