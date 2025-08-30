<script>
export default {
data(){return{






}},





}
</script>
<template>
<Page actionBarHidden="true">
<GridLayout rows="auto, *, auto" backgroundColor="#F9FAFB" height="100%">



<!-- Header section with today's date -->
<StackLayout row="0" padding="20" backgroundColor="#f0f2f5" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label text="September 2025" fontSize="20"  fontWeight="bold"/>
<Label text="Friday, 29" fontSize="14"  marginTop="5" color="#6B7280"/>
</StackLayout>







<!-- Event list -->
<ScrollView row="1">
<StackLayout padding="20" spacing="15">




<!-- Modern event card -->
<GridLayout columns="auto, *" backgroundColor="white" borderRadius="16" padding="15" elevation="3">
<StackLayout width="8" backgroundColor="#2563EB" borderRadius="4" />
<StackLayout col="1" marginLeft="10">
<Label text="Math Exam" fontSize="18" fontWeight="bold" color="#111827"/>
<Label text="Monday, Sep 1, 9:00 AM" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="Classroom 4B" fontSize="13" color="#4B5563" marginTop="2"/>
</StackLayout>
</GridLayout>




<GridLayout columns="auto, *" backgroundColor="white" borderRadius="16" padding="15" elevation="3">
<StackLayout width="8" backgroundColor="#10B981" borderRadius="4" />
<StackLayout col="1" marginLeft="10">
<Label text="Science Fair" fontSize="18" fontWeight="bold" color="#111827"/>
<Label text="Tuesday, Sep 2, 2:00 PM" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="Main Hall" fontSize="13" color="#4B5563" marginTop="2"/>
</StackLayout>
</GridLayout>





<GridLayout columns="auto, *" backgroundColor="white" borderRadius="16" padding="15" elevation="3">
<StackLayout width="8" backgroundColor="#F59E0B" borderRadius="4" />
<StackLayout col="1" marginLeft="10">
<Label text="Sports Day" fontSize="18" fontWeight="bold" color="#111827"/>
<Label text="Friday, Sep 5, 10:00 AM" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="School Grounds" fontSize="13" color="#4B5563" marginTop="2"/>
</StackLayout>
</GridLayout>






</StackLayout>
</ScrollView>

<!-- Floating Action Button -->
<GridLayout row="1" verticalAlignment="bottom" horizontalAlignment="right" margin="20">
<StackLayout
width="60"
height="60"
borderRadius="30"
backgroundColor="#2563EB"
justifyContent="center"
alignItems="center"
elevation="6"
>
<Label text="+" color="white" fontSize="28" fontWeight="bold"/>
</StackLayout>
</GridLayout>

</GridLayout>

</Page>
</template>