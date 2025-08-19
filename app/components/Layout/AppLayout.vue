<script>
import ClassPage from '../ClassPage.vue';
import SettingsPage from '../SettingsPage.vue';
export default {
components:{
ClassPage,
SettingsPage
},




data(){return{







}},

methods: {
classNav(){
this.$navigateTo(ClassPage);
},

settingsNav(){
this.$navigateTo(SettingsPage);
}







},





}
</script>





<template>
<RootLayout>
      <GridLayout rows="auto, *">
    <!-- Header -->
    <GridLayout
    row="0"
    columns="*, auto, auto"
    backgroundColor="#f0f2f5"
    padding="12">
    <!-- Title -->
    <Label
      col="0"
      text="SchoolMate"
      color="black"
      fontSize="18"
      fontWeight="bold"
      verticalAlignment="middle"
    />

    <!-- First Material Icon -->
    <Label
      col="1"
       text.decode="&#xf0c9;"
      color="black"
      fontSize="24"
      verticalAlignment="middle"
      marginLeft="16"
      class="fas"
        paddingRight="10"
        @tap="classNav"

    />

    <!-- Second Material Icon -->
    <Label
      col="2"
      text.decode="&#xf142;"
      color="black"
      fontSize="24"
      verticalAlignment="middle"
      marginLeft="16"
      class="fas"
      paddingRight="10"
      @tap="settingsNav"

    />
    </GridLayout>

              <!-- Content -->
              <StackLayout row="1" backgroundColor="white" height="100%">
                <ScrollView height="100%">
                  <StackLayout>
                    <slot/>
                  </StackLayout>
                </ScrollView>
              </StackLayout>
            </GridLayout>
    </RootLayout>
    </template>
