<script>
import * as ApplicationSettings from '@nativescript/core/application-settings';


export default {
data(){return{
fname:null,
lname:null,
dob:null,
user_class:null,
school:null,
email:null,
tel:null,
gender:null,

}},

methods:{
getUser(){
let user=ApplicationSettings.getString('user',null);
user=JSON.parse(user);
this.user_class=user.class;
this.fname=user.first_name;
this.lname=user.last_name;
this.dob=user.dob;
this.email=user.email;
this.school=user.school;
this.tel=user.tel;
this.gender=user.gender;

},

homeNav(){
this.$navigateTo(require('./Home.vue').default,{ clearHistory: true });
}


},


mounted(){
this.getUser();

},




}
</script>
<template>
<Page actionBarHidden="true" backgroundColor="#F9FAFB">
<StackLayout backgroundColor="#F9FAFB" height="100%">


<StackLayout orientation="horizontal" backgroundColor="#f0f2f5" paddingBottom="20">
<Label text="User Profile" width="90%" textAlignment="center" fontWeight="bold" fontSize="20"/>
<Label text.decode="&#xf044;" width="10%" class="fas" fontSize="23" color="#B7BCC2"/>
</StackLayout>



<ScrollView backgroundColor="#F9FAFB" height="100%">

    <StackLayout backgroundColor="#F3F4F6" spacing="20">
    <!-- Profile Header -->
    <StackLayout padding="10" horizontalAlignment="center" spacing="10">
    <StackLayout width="80" height="80" borderRadius="50" backgroundColor="#374151"
    horizontalAlignment="center" verticalAlignment="center">
    <Label text.decode="&#xf007;" class="fas" fontSize="30" color="#FFFFFF" horizontalAlignment="center" verticalAlignment="center"/>
    </StackLayout>
    <Label :text="fname+' '+lname" fontSize="20" fontWeight="bold" horizontalAlignment="center" style="text-transform:capitalize"/>
    <Label text="Student" fontSize="14" horizontalAlignment="center"/>
    </StackLayout>

    <!-- Profile Info Section -->
    <StackLayout padding="5" spacing="15">



<StackLayout shadowRadius="4" backgroundColor="white" padding="10" borderRadius="10">



    <!-- Each row of info -->
    <GridLayout columns="auto, *" padding="10" backgroundColor="white" borderRadius="10" shadowColor="#00000033" shadowOpacity="0.05" shadowRadius="4" shadowOffsetHeight="2">
    <Label  text.decode="&#xf183;" class="fas" fontSize="18" color="#6B7280" col="0" marginRight="10"/>
    <Label :text="gender" fontSize="16" color="#374151" col="1"/>
    </GridLayout>



    <GridLayout columns="auto, *" padding="10" backgroundColor="white" borderRadius="10" shadowColor="#00000033" shadowOpacity="0.05" shadowRadius="4" shadowOffsetHeight="2">
    <Label  text.decode="&#xf073;" class="fas" fontSize="18" color="#6B7280" col="0" marginRight="10"/>
    <Label :text="dob" fontSize="16" color="#374151" col="1"/>
    </GridLayout>


    <GridLayout columns="auto, *" padding="10" backgroundColor="white" borderRadius="10" shadowColor="#00000033" shadowOpacity="0.05" shadowRadius="4" shadowOffsetHeight="2">
    <Label  text.decode="&#xf095;" class="fas" fontSize="18" color="#6B7280" col="0" marginRight="10"/>
    <Label :text="tel" fontSize="16" color="#374151" col="1"/>
    </GridLayout>

    <GridLayout columns="auto, *" padding="10" backgroundColor="white" borderRadius="10" shadowColor="#00000033" shadowOpacity="0.05" shadowRadius="4" shadowOffsetHeight="2">
    <Label text.decode="&#xf0e0;" class="fas" fontSize="18" color="#6B7280" col="0" marginRight="10"/>
    <Label :text="email" fontSize="16" color="#374151" col="1"/>
    </GridLayout>

    <GridLayout columns="auto, *" padding="10" backgroundColor="white" borderRadius="10" shadowColor="#00000033" shadowOpacity="0.05" shadowRadius="4" shadowOffsetHeight="2">
    <Label text.decode="&#xf19d;" class="fas" fontSize="18" color="#6B7280" col="0" marginRight="10"/>
    <Label :text="school" fontSize="16" color="#374151" col="1"/>
    </GridLayout>

    <GridLayout columns="auto, *" padding="10" backgroundColor="white" borderRadius="10" shadowColor="#00000033" shadowOpacity="0.05" shadowRadius="4" shadowOffsetHeight="2">
    <Label text.decode="&#xf02d;" class="fas" fontSize="18" color="#6B7280" col="0" marginRight="10"/>
    <Label :text="user_class" fontSize="16" color="#374151" col="1"/>
    </GridLayout>







<GridLayout columns="auto, *" padding="10" backgroundColor="black" borderRadius="10" shadowColor="#00000033" shadowOpacity="0.05" shadowRadius="4" shadowOffsetHeight="2" marginTop="20" @tap="homeNav">
<Label text="Finish" fontSize="16" color="white" col="1" textAlignment="center"/>
</GridLayout>







</StackLayout>






    </StackLayout>
    </StackLayout>
    </ScrollView>




</StackLayout>
</Page>
</template>
