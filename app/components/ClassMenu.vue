<script>
export default {
props:{

},


data(){return{
menu:[
{name:'Learning Progress'},
{name:'Reading Material'},
{name:'Assignments'},
{name:'Past Papers'},
{name:'Practicals'},
{name:'Reading Timetable'},
{name:'Learning Groups'}


]





}}







}
</script>
<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">
<StackLayout padding="20" backgroundColor="#f0f2f5">
<StackLayout orientation="horizontal">
<Label text="Subjects" fontSize="22" fontWeight="bold" color="#2C3E50" width="100%"/>
</StackLayout>
<StackLayout>
<!-- <Label text="Menu" fontSize="14" color="#7F8C8D" marginTop="4" width="100%"/> -->
</StackLayout>
</StackLayout>



<ScrollView width="100%">

<StackLayout padding="10" spacing="10">
<StackLayout v-for="(m,key) in menu" :key="key" orientation="horizontal"
padding="10" backgroundColor="white" borderRadius="12"
verticalAlignment="center" marginBottom="5">

<!-- Item Title -->
<Label :text="m.name"
fontSize="16"
color="#1F2937"
verticalAlignment="left"
width="90%"/>

<!-- Icon -->
<Label text.decode="&#xf054;"  class="fas"
fontSize="16"
color="#6B7280"
verticalAlignment="center"
marginLeft="auto"/>

</StackLayout>

</StackLayout>




</ScrollView>

</StackLayout>
</Page>
</template>