<script>
import * as ApplicationSettings from '@nativescript/core/application-settings';
export default {
data() {
return {
fname: null,
lname: null,
email: null,

isLaoding:false,
form:{
gender:'Select',
year:'',
month:'',
day:'',
class:'Select',
school:'',
tel:''
},












}
},

methods: {
getUser() {
const user = ApplicationSettings.getString('user', null);
const data = user ? JSON.parse(user) : null;
if (data) {
this.fname = data.first_name;
this.lname = data.last_name;
this.email = data.email;
}
}
},

mounted() {
this.getUser();
}
}
</script>

<template>
<Page actionBarHidden="true">
<ScrollView height="100%">
<!-- Parent container -->
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








<Button text="Save" class="btn-primary" marginTop="10"/>










</StackLayout>
</StackLayout>
</ScrollView>
</Page>
</template>
