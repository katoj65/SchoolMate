<script>
export default {
data(){return{

}},


methods:{
navBack(){
this.$navigateBack();
}

}

}
</script>
<template>
<Page actionBarHidden="true" backgroundColor="#F9FAFB">
<GridLayout rows="auto, *" height="100%">

<!-- Custom Modern Action Bar -->
<GridLayout row="0" columns="auto, *, auto" padding="15" backgroundColor="#f0f2f5"
borderBottomLeftRadius="20" borderBottomRightRadius="20" elevation="4">

<!-- Back Icon -->
<Label text.decode="&#xf060;" class="fas" col="0" fontSize="20" verticalAlignment="center" @tap="navBack"/>

<!-- Title -->
<StackLayout col="1" verticalAlignment="center" paddingLeft="25">
<Label text="Today's Study Plan" fontSize="18" fontWeight="bold"/>
<Label text="Friday, 29 September 2025" fontSize="13" color="#6B7280"/>
</StackLayout>

<!-- Menu/Options Icon -->
<Label text.decode="&#xf142;" class="fas" col="2" fontSize="20" verticalAlignment="center"/>

</GridLayout>

<!-- Content -->
<ScrollView row="1">
<StackLayout padding="20" spacing="15">




<!-- Subject card -->
<GridLayout rows="auto, auto" columns="*, auto" backgroundColor="white"
borderRadius="16" padding="15" elevation="3" v-for="(s,key) in 30" :key="key">

<!-- Subject name -->
<Label text="Mathematics" col="0" fontSize="18" fontWeight="bold" color="#111827"/>
<!-- Time aligned to right -->
<Label text="08:00 AM" col="1" fontSize="14" color="#6B7280" verticalAlignment="center"/>
<!-- Details -->
<Label text="Read Algebra: Chapter 5 - Linear Equations" row="1" colSpan="2"
fontSize="14" color="#4B5563" marginTop="5"/>
</GridLayout>







</StackLayout>
</ScrollView>

</GridLayout>
</Page>






</template>