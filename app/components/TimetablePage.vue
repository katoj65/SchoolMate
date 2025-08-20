<script>
import TimetableDay from './TimetableDay.vue';
export default {
components:{
TimetableDay
},



methods:{
timeTableDayModal(){
this.$showModal(TimetableDay);
}



}


}
</script>
<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<StackLayout orientation="horizontal" backgroundColor="#f0f2f5" padding="10">
<Label text="Revision Timetable" width="85%" fontSize="22" fontWeight="bold" color="#2C3E50"/>
<Label text.decode="&#xf044;" width="15%" class="fas" fontSize="23" color="#B7BCC2"/>
</StackLayout>






<ScrollView>
<StackLayout padding="15" spacing="15">

<!-- Day Card -->
<StackLayout v-for="day in ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']"
:key="day"
borderRadius="12"
backgroundColor="white"
padding="15"
marginBottom="10"
>

<!-- Day Title -->
<Label :text="day" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="8"/>

<!-- Subject Row -->
<GridLayout columns="*, auto" rows="auto" marginBottom="4">
<Label text="Subject: Mathematics" col="0" fontSize="14" color="#374151"/>
<Label text.decode="&#xf017;" class="fas" col="1" fontSize="16" color="#B7BCC2" horizontalAlignment="right"/>
</GridLayout>

<!-- Time -->
<Label text="Time: 8:00 AM - 9:00 AM" fontSize="14" color="#6B7280"/>
</StackLayout>

</StackLayout>
</ScrollView>





</StackLayout>
</Page>
</template>