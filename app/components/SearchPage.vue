<script>
import { isAndroid, isIOS } from "@nativescript/core";
import Skeleton from "./templates/Skeleton.vue";
import Search from "./api/search";
export default {
components:{
Skeleton
},
data(){
return{
isLoading:false,
form:{
search:''
},

row:[],
topic:[],
subject:[],



}},


methods: {
onPageReady() {
this.$nextTick(() => {
const tf = this.$refs.searchInput?.nativeView;
if (!tf) {
return;
}
tf.focus();
if (isAndroid) {
const imm = tf._context.getSystemService(
android.content.Context.INPUT_METHOD_SERVICE
);
imm.showSoftInput(
tf.android,
android.view.inputmethod.InputMethodManager.SHOW_IMPLICIT
);
} else if (isIOS) {
tf.ios.becomeFirstResponder();
}
});
},


async submit(){
const search = this.form.search;
if(search.length > 2){
try{
this.isLoading=true;
const api = new Search();
const response = await api.searchSubTopic(search);
if(!response)return;

if(response.statusCode==200){
const data=JSON.parse(response.content);
this.row=data;

//search topic
const topic= await api.searchTopic(search);
if(!topic)return;

if(topic.statusCode==200){
this.topic=JSON.parse(topic.content);

//search subject
const subject= await api.searchSubject(search);
if(!subject)return;
if(subject.statusCode==200){
this.subject=JSON.parse(subject.content);

console.log(this.subject);

}else{
console.log(subject.statusCode);
}


}else{
console.log(topic.statusCode);
}

}else{
console.log(response.statusCode);
}

this.createSearchLog(search);
this.isLoading=false;

}catch(error){
console.log(error);
}

}
},

searchResultNav(obj){
this.$navigateTo(TopicPage,{props:{topic_id:obj.topic.id}});
},


//create search log
async createSearchLog(input){
const api = new Search();
const response = await api.postSearchLog(input);
if(!response) return;
console.log(response);



}







},



};


</script>
<template>
<Page actionBarHidden="true" backgroundColor="#F9FAFB" @navigatedTo="onPageReady">

<GridLayout rows="auto, *" backgroundColor="#F9FAFB">
<!-- Header with SearchBar -->
<StackLayout row="0" padding="5" elevation="0" backgroundColor="#f0f2f5">
<TextField
hint="Search..."
fontSize="16"
borderRadius="8"
padding="10"
backgroundColor="white"
hintColor="#9CA3AF"
color="#111827"
android:background="@null"
borderWith="1"
borderColor="white"
ref="searchInput"
keyboardType="text"
returnKeyType="done"
v-model="form.search"
@textChange="submit"

/>
</StackLayout>

<!-- Search Results -->
<ScrollView row="1">
<StackLayout spacing="12" padding="15">



<StackLayout v-if="isLoading==false">
<!-- Example search result -->


<StackLayout padding="15" backgroundColor="white" borderRadius="10" elevation="2" v-for="(r,key) in row" :key="key">
<Label :text="r.name" fontSize="16" fontWeight="bold" color="#111827"/>
<Label :text="r.description" fontSize="14" color="#6B7280" marginTop="4"/>
<Label :text="r.topic.subject.name+' - '+r.topic.name" color="silver"/>
</StackLayout>









</StackLayout>
<Skeleton v-else/>






</StackLayout>
</ScrollView>
</GridLayout>
</Page>
</template>


