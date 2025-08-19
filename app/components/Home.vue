<script>
import AppLayout from './Layout/AppLayout.vue';
import Timetable from './templates/Timetable.vue';
export default {
components:{
AppLayout,
Timetable
 }

}
</script>
<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">
<app-layout>

<timetable/>


</app-layout>
</StackLayout>
</Page>
</template>