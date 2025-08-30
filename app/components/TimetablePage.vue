<script>
import Timetable from './api/Timetable';
import TimetableDay from './TimetableDay.vue';
import Skeleton from './templates/Skeleton.vue';
import CalendarPage from './CalendarPage.vue';
import TimetableContentPage from './TimetableContentPage.vue';

export default {
components:{
TimetableDay,
Skeleton,
CalendarPage,
TimetableContentPage
},

data(){return{
isLoading:false,
row:[],



}},




methods:{
timeTableDayModal(){
this.$showModal(TimetableDay);
},

async getTimetable(){
try{
this.isLoading=true;
const api = new Timetable();
const response = await api.revisionTimetable();
if(!response){return;}
if(response.statusCode==200){
const data=JSON.parse(response.content);
this.row=data;
}else{
console.log(response.statusCode);
}
this.isLoading=false;
}catch(error){
console.log(error);
}




},

calendarNav(){
this.$navigateTo(CalendarPage);
},

timetableContentNav(){
this.$navigateTo(TimetableContentPage);
},






},


mounted(){
this.getTimetable();
}








}
</script>
<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<StackLayout orientation="horizontal" backgroundColor="#f0f2f5" padding="10">
<Label text="Revision Timetable" width="85%" fontSize="20" fontWeight="bold" color="#2C3E50"/>
<Label text.decode="&#xf073;" width="15%" class="fas icon-color" fontSize="23" @tap="calendarNav"/>
</StackLayout>




<ScrollView>

<StackLayout padding="15" spacing="15" v-if="isLoading==false">

<!-- Day Card -->
<StackLayout v-for="(d,key) in row"
:key="key"
borderRadius="12"
backgroundColor="white"
padding="15"
marginBottom="10"
>

<!-- Day Title -->
<Label :text="d.day" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="8" style="text-transform:capitalize;" @tap="timetableContentNav()"/>

<!-- Subject Row -->
<GridLayout columns="*, auto" rows="auto" marginBottom="4">
<Label text="Subject: Mathematics" col="0" fontSize="14" color="#374151"/>
<Label text.decode="&#xf017;" class="fas" col="1" fontSize="16" color="#B7BCC2" horizontalAlignment="right"/>
</GridLayout>

<!-- Time -->
<Label text="Time: 8:00 AM - 9:00 AM" fontSize="14" color="#6B7280"/>
</StackLayout>

</StackLayout>
<StackLayout v-else padding="15" spacing="15">
<skeleton/>
</StackLayout>

</ScrollView>

</StackLayout>
</Page>
</template>