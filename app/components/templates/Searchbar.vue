<script>
import SearchPage from '../SearchPage.vue';
export default {

components:{
SearchPage
},


data(){return{
form:{
input:''
}




}},

methods:{
searchNav(){
this.$navigateTo(SearchPage);
},

},

mounted(){



},
computed:{

}


}
</script>
<template>
<GridLayout
columns="auto, *"
padding="0"
margin="0"
borderRadius="8"
backgroundColor="#F3F4F6"
verticalAlignment="center"
width="100%"
horizontalAlignment="center"

>

<!-- Search Icon -->
<Label
text.decode="&#xf002;"
class="fas"
fontSize="18"
color="#6B7280"
col="0"
verticalAlignment="center"
marginLeft="10" @tap="searchNav()"/>

<!-- Search Input -->
<TextField
hint="Search for subjects, topics..."
col="1"
fontSize="16"
color="#111827"
hintColor="#9CA3AF"
borderWidth="0"
backgroundColor="transparent"
android:background="@null"
marginLeft="8"
verticalAlignment="center" @tap="searchNav()"/>
</GridLayout>
</template>