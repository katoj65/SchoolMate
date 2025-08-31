<script>
export default {
form:{
search:''
}
}
</script>
<template>
<GridLayout
columns="auto, *"
padding="0"
margin="0"
borderRadius="25"
backgroundColor="#F3F4F6"
verticalAlignment="center"
width="100%"
horizontalAlignment="center">

<!-- Search Icon -->
<Label
text.decode="&#xf002;"
class="fas"
fontSize="18"
color="#6B7280"
col="0"
verticalAlignment="center"
marginLeft="10"/>

<!-- Search Input -->
<TextField
hint="Search..."
col="1"
fontSize="16"
color="#111827"
hintColor="#9CA3AF"
borderWidth="0"
backgroundColor="transparent"
android:background="@null"
marginLeft="8"
verticalAlignment="center"/>
</GridLayout>
</template>