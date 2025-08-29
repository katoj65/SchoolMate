<script>
import Ask from './api/Ask';
import Skeleton from './templates/Skeleton.vue';

export default {

components:{
Skeleton,
},


data(){
return{
title:'Ask Question',
subtitle:'Your question should be brief and precise.',

isLoading:false,

form:{
input:''
},

inputResponse:null,
chat:[],




}},



methods:{

async submit(){
if(this.form.input){
this.isLoading = true;
const api = new Ask();
const insert = await api.postQuestion(this.form.input);

if(insert){
if(insert.statusCode===201){
const response=JSON.parse(insert.content);
response.forEach(element => {
this.inputResponse=element;
});

this.getUserChatHistroy();

}else{
console.log(insert.statusCode);
}
}else{
console.log(insert.statusCode);
}

this.isLoading=false;
this.form.input='';

}
},

async getUserChatHistroy(){
this.isLoading=true;
const api = new Ask();
const response= await api.getUserChat();
if(!response){return;}
this.isLoading=false;
if(response.statusCode===200){
const data=JSON.parse(response.content);
this.chat=data;

}else{
console.log('Error fetching chat history');
}

}













},

mounted(){
this.getUserChatHistroy();

}






}
</script>
<template>
<Page actionBarHidden="true" class="page">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<!-- Header -->
<StackLayout padding="20" backgroundColor="#f0f2f5">
<Label :text="title" fontSize="22" fontWeight="bold" color="#2C3E50"/>
<Label :text="subtitle" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>
<!-- Chat layout -->
<GridLayout rows="*, auto" backgroundColor="#F9FAFB">
<!-- Chat messages -->
<ScrollView row="0" orientation="vertical">

<StackLayout v-if="isLoading==false">
<StackLayout padding="20" verticalAlignment="bottom" v-if="chat.length>0">

<!-- Example messages -->
<StackLayout horizontalAlignment="left" marginBottom="10" v-for="(message, index) in chat" :key="index">
<Label :text="message.message" backgroundColor="#E5E7EB" padding="10" borderRadius="12" />
</StackLayout>




<!-- <StackLayout horizontalAlignment="right" marginBottom="10">
<Label text="I'm good, thanks!" backgroundColor="#2563EB" color="white" padding="10" borderRadius="12" />
</StackLayout>






<StackLayout horizontalAlignment="left" marginBottom="10">
<Label text="Are you coming to class today?" backgroundColor="#E5E7EB" padding="10" borderRadius="12" />
</StackLayout>
 -->



</StackLayout>
</StackLayout>
<Skeleton v-else margin="20"/>

</ScrollView>
<!-- Input area fixed at bottom -->
<FlexboxLayout
row="1"
width="100%"
minHeight="60"
backgroundColor="#FFFFFF"
padding="8"
flexDirection="row"
alignItems="center"
justifyContent="space-between"
>

<!-- Multiline input (reduced height) -->
<TextView
hint="Type a question..."
width="75%"
minHeight="40"
maxHeight="100"
borderRadius="12"
padding="10"
backgroundColor="#F3F4F6"
class="no-underline"
editable="true"
borderWidth="1"
borderColor="white"
v-model="form.input"
/>

<!-- Send button -->
<StackLayout
width="40"
height="40"
borderRadius="30"
backgroundColor="black"
justifyContent="center"
alignItems="center"
fontSize="10"
padding="10"
@tap="submit"
>
<Label text.decode="&#xf1d8;" class="fas" color="white" fontSize="13" textAlignment="center"/>
</StackLayout>
</FlexboxLayout>


</GridLayout>
</StackLayout>
</Page>


</template>