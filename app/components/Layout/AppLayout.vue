<script>
import { StackLayout } from '@nativescript/core';
import ClassPage from '../ClassPage.vue';
import SettingsPage from '../SettingsPage.vue';
import Searchbar from '../templates/Searchbar.vue';
export default {
components:{
ClassPage,
SettingsPage,
Searchbar
},




data(){return{







}},

methods: {
classNav(){
this.$navigateTo(ClassPage);
},

settingsNav(){
this.$navigateTo(SettingsPage);
}







},





}
</script>





<template>
<RootLayout>
<GridLayout rows="auto, *">
<!-- Header -->
<StackLayout backgroundColor="#f0f2f5">
<GridLayout
row="0"
columns="*, auto, auto"
backgroundColor="#f0f2f5"
padding="12">
<!-- Title -->
<Label
col="0"
text="Curriculum AI"
fontSize="20"
fontWeight="bold"
verticalAlignment="middle"
color="#2C3E50"
/>

<!-- First Material Icon -->
<Label
col="1"
text.decode="&#xf0c9;"
color="black"
fontSize="24"
verticalAlignment="middle"
marginLeft="16"
class="fas"
paddingRight="10"
@tap="classNav"

/>

<!-- Second Material Icon -->
<Label
col="2"
text.decode="&#xf142;"
color="black"
fontSize="24"
verticalAlignment="middle"
marginLeft="16"
class="fas"
paddingRight="10"
@tap="settingsNav"

/>

</GridLayout>
<StackLayout padding="0 20" backgroundColor="#f0f2f5">
<Searchbar marginBottom="10"/>
</StackLayout>
</StackLayout>




<!-- Content -->

<StackLayout row="1" backgroundColor="white" height="100%">
<ScrollView height="100%">
<StackLayout>
<slot/>
</StackLayout>
</ScrollView>
</StackLayout>
</GridLayout>
</RootLayout>
</template>
