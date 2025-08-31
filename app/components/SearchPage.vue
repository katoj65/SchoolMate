<script>
import { isAndroid, isIOS } from "@nativescript/core";
import Search from "./api/search";
export default {
data(){return{
form:{
search:''
}


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

const api = new Search();
const response = await api.searchSubTopic(search);
console.log(response);


}else{
return;
}
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




<!-- Example search result -->


<StackLayout padding="15" backgroundColor="white" borderRadius="10" elevation="2">
<Label text="Mathematics - Algebra" fontSize="16" fontWeight="bold" color="#111827"/>
<Label text="Equations and functions basics" fontSize="14" color="#6B7280" marginTop="4"/>
</StackLayout>





</StackLayout>
</ScrollView>

</GridLayout>
</Page>
</template>


