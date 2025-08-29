<script>
import * as ApplicationSettings from '@nativescript/core/application-settings';
import AppLayout from './Layout/AppLayout.vue';
import Timetable from './templates/Timetable.vue';
import UserProfile from './UserProfile.vue';
import SpinnerButton from './templates/SpinnerButton.vue';
import Auth from './api/authApi';
import FormError from './templates/FormError.vue';
import CompleteRegistration from './CompleteRegistration.vue';
//get modals
import SelectGender from './modals/SelectGender.vue';
import SelectClass from './modals/SelectClass.vue';
import AskPage from './AskPage.vue';


export default {
components:{
AppLayout,
Timetable,
SelectClass,
SelectGender,
FormError,
UserProfile,
SpinnerButton,
CompleteRegistration,
AskPage

},



data(){return{
status:null,

error:null,
fname: null,
lname: null,
email: null,


isLaoding:false,


form:{
gender:'Select',
year:'1990',
month:'12',
day:'26',
class:'Select',
school:'Kikaaya College School',
tel:'0752567534'
},








}},


methods:{

getUser() {
this.status=ApplicationSettings.getString('status','completed');
const user = ApplicationSettings.getString('user', null);
const data = user ? JSON.parse(user) : null;
if (data) {
this.fname = data.first_name;
this.lname = data.last_name;
this.email = data.email;
}
},


selectGenderModal(){
this.$showModal(SelectGender).then((gender)=>{
this.form.gender=gender;
});
},



selectClassModal(){
this.$showModal(SelectClass).then((response)=>{
this.form.class=response;
});
},



async submit(){
this.error=null;
if(!this.form.year || !this.form.month || !this.form.day || !this.form.school || !this.form.tel){
this.error='Fill in all fields';
return;
}

if(this.form.gender=='Select' || this.form.class=='Select'){
this.error='Fill in all fields';
return;
}

this.isLaoding=true;
const input = {
gender:this.form.gender,
day:this.form.day,
month:this.form.month,
year:this.form.year,
tel:this.form.tel,
class:this.form.class,
school:this.form.school,
};

const api = new Auth();
const update = await api.updateUserMetadata(input);
this.isLaoding = false;
if(!update){
return;
}

if(update.statusCode==200){

const user = update.content.toJSON();
const metadata = user.user_metadata;
ApplicationSettings.setString('user',JSON.stringify(metadata));
ApplicationSettings.setString('status','completed');
this.$navigateTo(CompleteRegistration);

}else{
console.log(update);
this.error='Error has occurred.';
}
},





askNav(){
 this.$navigateTo(AskPage);
}












},


mounted(){
this.getUser();
},
















}
</script>
<template>
<Page actionBarHidden="true">
<GridLayout rows="*" columns="*">
<StackLayout row="0" col="0" backgroundColor="#F9FAFB" height="100%">
<app-layout>
<StackLayout v-if="status=='registered'">
<ScrollView height="100%">


<StackLayout verticalAlignment="top" horizontalAlignment="center" spacing="20" marginTop="40">

<!-- Avatar -->
<StackLayout
width="80"
height="80"
borderRadius="40"
backgroundColor="#D8DCDE"
horizontalAlignment="center"
verticalAlignment="center"
justifyContent="center"
alignItems="center">
<Label text.decode="&#xf007;" class="fas" fontWeight="900" fontSize="36" color="black" textAlignment="center"/>
</StackLayout>

<!-- User Info -->
<StackLayout spacing="6" horizontalAlignment="center">
<Label :text="fname + ' ' + lname" fontSize="20" fontWeight="bold" textAlignment="center" style="text-transform: capitalize;" />
<Label :text="email" fontSize="14" color="#666666" textAlignment="center" />
<Label text="Student" fontSize="14" color="#888888" textAlignment="center" />
</StackLayout>


<StackLayout padding="35" borderRadius="20" marginTop="20" backgroundColor="#f0f2f5">
<form-error :error="error"/>



<StackLayout padding="0" marginBottom="20">
<!-- Label -->
<Label
text="Gender"
fontWeight="bold"
color="black"
fontSize="16"
marginBottom="10"
/>
<!-- Selector with arrows -->
<FlexboxLayout
flexDirection="row"
justifyContent="space-between"
alignItems="center"
backgroundColor="#ffffff"
borderRadius="12"
height="50"
paddingLeft="12"
paddingRight="12"
class="input"
@tap="selectGenderModal"


>

<!-- Previous Button -->
<!-- Selected Class Display -->
<Label

fontSize="16"
fontWeight="bold"
color="#333"
width="100%"
textAlignment="center"
horizontalAlignment="center"
:text="form.gender"
/>

<!-- Next Button -->
</FlexboxLayout>
</StackLayout>







<!-- Date of Birth -->
<StackLayout padding="0" marginBottom="20">
<!-- Label -->
<Label
text="Date of Birth"
fontWeight="bold"
color="black"
fontSize="16"
marginBottom="6"
/>

<!-- Inline Fields -->
<FlexboxLayout
flexDirection="row"
justifyContent="space-between"
alignItems="center"
gap="12"
>
<!-- Day -->
<TextField
hint="DD"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
width="30%"
keyboardType="number"
margin="0"
maxLength="2"
v-model="form.day"
class="input"
/>

<!-- Month -->
<TextField
hint="MM"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
class="input"
width="30%"
keyboardType="number"
margin="0"
maxLength="2"
v-model="form.month"
/>

<!-- Year -->
<TextField
hint="YYYY"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
class="input"
width="30%"
keyboardType="number"
margin="0"
maxLength="4"
v-model="form.year"
/>
</FlexboxLayout>
</StackLayout>





<!-- Phone Number -->
<StackLayout padding="0" marginBottom="20">
<Label
text="Phone Number"
fontWeight="bold"
color="black"
fontSize="16"
marginBottom="6"
/>
<TextField
hint="Enter phone number"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
class="input"
height="50"
keyboardType="phone"
margin="0"
v-model="form.tel"
/>
</StackLayout>


<!-- School -->
<StackLayout padding="0" marginBottom="20">
<Label
text="School"
fontWeight="bold"
color="black"
fontSize="16"
marginBottom="6"
/>
<TextField
hint="Enter school name"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
class="input"
height="50"
autocorrect="false"
autocapitalizationType="none"
margin="0"
v-model="form.school"
/>
</StackLayout>


<StackLayout padding="0" marginBottom="20">
<!-- Label -->
<Label
text="Class"
fontWeight="bold"
color="black"
fontSize="16"
marginBottom="10"
/>
<!-- Selector with arrows -->
<FlexboxLayout
flexDirection="row"
justifyContent="space-between"
alignItems="center"
backgroundColor="#ffffff"
borderRadius="12"
height="50"
paddingLeft="12"
paddingRight="12"
class="input"
@tap="selectClassModal"


>

<!-- Previous Button -->
<!-- Selected Class Display -->
<Label

fontSize="16"
fontWeight="bold"
color="#333"
width="100%"
textAlignment="center"
horizontalAlignment="center"
:text="form.class"
/>

<!-- Next Button -->
</FlexboxLayout>
</StackLayout>






<StackLayout padding="0" marginTop="10">
<Button text="SAVE" class="btn-primary" margin="0" @tap="submit" v-if="isLaoding==false" />
<spinner-button :title="'SAVE'" v-else/>
</StackLayout>



</StackLayout>
</StackLayout>



</ScrollView>
</StackLayout>
<StackLayout v-else>
<timetable/>
</StackLayout>
</app-layout>
</StackLayout>

<!-- FAB at bottom right -->
<Button
row="0"
col="0"
text.decode="&#xf1d8;"
class="fab fas"
@tap="askNav"
/>
</GridLayout>
</Page>
</template>

<style scoped>
.fab {
width: 60;
height: 60;
border-radius: 30;
background-color:black;
color: white;
font-size: 20;
text-align: center;
vertical-align: middle;
/* Absolute positioning */
horizontal-align: right;
vertical-align: bottom;
margin-right: 20;
margin-bottom: 20;
/* Shadow */
elevation: 8;
}

</style>