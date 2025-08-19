<script>
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Time from '../controllers/time';
import TimetablePage from '../TimetablePage.vue';
export default {
props:{
user:Object
},

components:{
TimetablePage
},

data(){return{
fname:null,
user_class:null,
hours:null,
date:null,
time:null,
greetings:null,
intervalId:null,

timetable:[
{ day: 'Monday', subject: 'Mathematics', time: '8:00 AM - 9:00 AM', status: 'done' },
{ day: 'Tuesday', subject: 'English', time: '9:00 AM - 10:00 AM', status: 'pending' },
{ day: 'Wednesday', subject: 'Biology', time: '10:30 AM - 11:30 AM', status: 'missed' },
{ day: 'Thursday', subject: 'History', time: '8:00 AM - 9:00 AM', status: 'done' },
{ day: 'Friday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM', status: 'pending' },
{ day: 'Saturday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM', status: 'pending' },
{ day: 'Sunday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM', status: 'pending' }
],






}},



methods:{

//timer
timer(){
const t = new Time();
let currentTime = t.getCurrentTime();
this.hours = currentTime.hours;
this.date = currentTime.dateTime;
this.time = currentTime.time;
if (this.hours >= 0 && this.hours < 12) {
this.greetings= 'Good Morning';
} else if (this.hours >= 12 && this.hours < 17) {
this.greetings = 'Good Afternoon';
} else if (this.hours >= 17 && this.hours < 24) {
this.greetings = 'Good Evening';
}
},

userData(){
let user=ApplicationSettings.getString('user',null);
user=JSON.parse(user);
this.fname=user.first_name;
this.user_class=user.class;
},

timeTableNav(){
this.$navigateTo(TimetablePage);
}










},



mounted(){
this.intervalId = setInterval(this.timer, 1000);
this.userData();
},

beforeMount(){
clearInterval(this.intervalId);
}





}
</script>


<template>
<StackLayout padding="20" backgroundColor="#F9FAFB">
<Label
:text="greetings+' '+fname+' 🎉'"
fontSize="24"
fontWeight="bold"
color="#111827"
style="text-transform: capitalize;"
/>


<Label
:text="'Today is '+date+' - '+time"
fontSize="14"
marginTop="5"
color="#6B7280"
/>



<Label marginTop="10" fontSize="15">
<FormattedString>
<Span :text="'You are in  '+user_class+'  '" color="#374151"/>
</FormattedString>
</Label>


<Label
text="Weekly Revision Timetable"
marginTop="20"
fontSize="18"
fontWeight="bold"
color="#111827"
@tap="timeTableNav"
/>

<StackLayout marginTop="15" spacing="15">



<StackLayout padding="15" backgroundColor="#FFFFFF" style="border-radius: 16; elevation: 2;" v-for="(entry, index) in timetable" :key="index" marginBottom="2" @tap="timetableDay">
<GridLayout columns="*, auto" verticalAlignment="center">

<Label fontSize="18" fontWeight="bold" color="#111827">
<FormattedString>
<Span text.decode="&#xf783;" class="fas" fontSize="18" color="#111827"/>
<Span :text="' '+entry.day"/>
</FormattedString>
</Label>

<Label text.decode="&#xf14a;" class="fas" col="1" fontSize="18" color="#E5E7E9"/>
</GridLayout>

<GridLayout columns="auto, *" marginTop="8" verticalAlignment="center">
<Label text.decode="&#xf02d; " class="fas" fontSize="16" color="#6B7280"/>
<Label :text="' '+entry.subject" col="1" fontSize="15" color="#374151"/>
</GridLayout>

<GridLayout columns="auto, *" marginTop="5" verticalAlignment="center">
<Label text.decode="&#xf017;" class="fas" fontSize="16" color="#6B7280"/>
<Label :text="'  ' + entry.time" col="1" fontSize="14" color="#4B5563"/>
</GridLayout>

</StackLayout>





</StackLayout>
</StackLayout>
</template>