<script>
import AppLayout from './Layout/AppLayout.vue';
export default {
components:{ AppLayout }

}
</script>
<template>
<Page actionBarHidden="true">
    <StackLayout backgroundColor="#F9FAFB" height="100%">
<app-layout>


<Label text="some information"></Label>

</app-layout>
</StackLayout>
</Page>
</template>