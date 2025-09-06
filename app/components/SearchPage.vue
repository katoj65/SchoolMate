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
if(search.length<3){
this.row=[];
this.topic=[];
this.subject=[];
return;
}
if(search.length > 2){
try{
this.isLoading=true;
const api = new Search();
const response = await api.searchSubTopic(search);
if(!response)return;

if(response.statusCode==200){
const data=JSON.parse(response.content);
this.row=data;
console.log(data);

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

// this.createSearchLog(search);
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



<StackLayout v-if="row.length > 0">
<StackLayout padding="15" backgroundColor="white" borderRadius="10" elevation="2" v-for="(r,key) in row" :key="key">
<Label :text="r.name" fontSize="16" fontWeight="bold" color="#111827"/>
<Label :text="r.description" fontSize="14" color="#6B7280" marginTop="4"/>
<Label :text="r.topic.subject.name+' - '+r.topic.name" color="silver"/>
</StackLayout>
</StackLayout>





<StackLayout v-if="topic.length > 0" marginTop="10" spacing="10">
<StackLayout v-for="(t,key) in topic" :key="key" padding="15" backgroundColor="white" borderRadius="10" elevation="2">
<Label :text="t.name" fontSize="16" fontWeight="bold" color="#111827"/>
<Label :text="t.description" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="Topic" color="silver"/>
</StackLayout>
</StackLayout>





<StackLayout v-if="subject.length > 0" marginTop="10" spacing="10">
<StackLayout v-for="(s,key) in subject" :key="key" padding="15" backgroundColor="white" borderRadius="10" elevation="2">
<Label :text="s.name" fontSize="16" fontWeight="bold" color="#111827"/>
<Label :text="s.description" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="Subject" color="silver"/>
</StackLayout>
</StackLayout>









</StackLayout>
<Skeleton v-else/>






</StackLayout>
</ScrollView>
</GridLayout>
</Page>
</template>


