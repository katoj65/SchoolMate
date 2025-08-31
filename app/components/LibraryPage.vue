<script>
export default {

}
</script>

<template>
<Page actionBarHidden="true" backgroundColor="#F9FAFB">
<GridLayout rows="auto, *" height="100%">
<!-- Custom Header with Title + Search -->
<StackLayout row="0" padding="20" backgroundColor="#f0f2f5">
<Label text="Library" fontSize="20" fontWeight="bold" color="#111827" marginBottom="10"/>

<TextField
hint="Search books..."
fontSize="16"
borderRadius="8"
padding="10"
backgroundColor="white"
hintColor="#9CA3AF"
color="#111827"
android:background="@null"
borderWidth="1"
borderColor="white"
margin="0"
/>
</StackLayout>

<!-- Library Books -->
<ScrollView row="1">
<StackLayout spacing="12" padding="15">

<!-- Example Book Card -->
<StackLayout padding="15" backgroundColor="white" borderRadius="12" elevation="3">
<Label text="The Great Gatsby" fontSize="16" fontWeight="bold" color="#111827"/>
<Label text="by F. Scott Fitzgerald" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="Category: Literature" fontSize="12" color="#9CA3AF" marginTop="2"/>
</StackLayout>

<StackLayout padding="15" backgroundColor="white" borderRadius="12" elevation="3">
<Label text="Introduction to Physics" fontSize="16" fontWeight="bold" color="#111827"/>
<Label text="by Isaac Newton" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="Category: Science" fontSize="12" color="#9CA3AF" marginTop="2"/>
</StackLayout>

<StackLayout padding="15" backgroundColor="white" borderRadius="12" elevation="3">
<Label text="Organic Chemistry Basics" fontSize="16" fontWeight="bold" color="#111827"/>
<Label text="by Marie Curie" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="Category: Chemistry" fontSize="12" color="#9CA3AF" marginTop="2"/>
</StackLayout>

<StackLayout padding="15" backgroundColor="white" borderRadius="12" elevation="3">
<Label text="Algebra Essentials" fontSize="16" fontWeight="bold" color="#111827"/>
<Label text="by David Hilbert" fontSize="14" color="#6B7280" marginTop="4"/>
<Label text="Category: Mathematics" fontSize="12" color="#9CA3AF" marginTop="2"/>
</StackLayout>

</StackLayout>
</ScrollView>

</GridLayout>
</Page>
</template>

