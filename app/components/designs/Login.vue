<template>
    <Page actionBarHidden="true">
      <GridLayout rows="auto, *, auto" backgroundColor="#F9FAFB">

        <!-- Bubble Hero Section -->
        <StackLayout
          row="0"
          height="280"
          borderBottomLeftRadius="120"
          borderBottomRightRadius="120"
        >
          <GridLayout backgroundColor="#EEF2FF">
            <AbsoluteLayout>
              <Label text="" width="90" height="90" borderRadius="45" backgroundColor="#BFDBFE" opacity="0.35" left="40" top="40"/>
              <Label text="" width="60" height="60" borderRadius="30" backgroundColor="#C7D2FE" opacity="0.3" left="220" top="60"/>
              <Label text="" width="50" height="50" borderRadius="25" backgroundColor="#E0E7FF" opacity="0.4" left="300" top="120"/>
            </AbsoluteLayout>

            <!-- Logo + Titles -->
            <StackLayout verticalAlignment="center" marginTop="40">
              <!-- App Logo -->
              <Image src="~/assets/logo1.png" height="80" width="80" stretch="aspectFit" horizontalAlignment="center" marginBottom="12"/>

              <Label
                text="Welcome Back"
                fontSize="26"
                fontWeight="bold"
                color="#111827"
                textAlignment="center"
              />
              <Label
                text="Sign in to continue"
                fontSize="15"
                color="#111827"
                textAlignment="center"
                marginTop="6"
              />
            </StackLayout>
          </GridLayout>
        </StackLayout>

        <!-- Floating Login Card -->
        <StackLayout
          row="1"
          margin="20"
          padding="25"
          backgroundColor="white"
          borderRadius="22"
          elevation="6"
          shadowColor="#00000020"
          verticalAlignment="top"
        >
          <!-- Email -->
          <TextField
            hint="Email Address"
            keyboardType="email"
            borderRadius="12"
            backgroundColor="#F3F4F6"
            padding="14"
            fontSize="16"
            color="#111827"
            hintColor="#6B7280"
            android:background="@null"
          />

          <!-- Password -->
          <TextField
            hint="Password"
            secure="true"
            borderRadius="12"
            backgroundColor="#F3F4F6"
            padding="14"
            fontSize="16"
            color="#111827"
            hintColor="#6B7280"
            android:background="@null"
            marginTop="14"
          />

          <!-- Login Button -->
          <StackLayout
            backgroundColor="#3B82F6"
            height="52"
            borderRadius="14"
            justifyContent="center"
            alignItems="center"
            marginTop="20"
            shadowColor="#00000025"
            elevation="4"
          >
            <Label
              text="Login"
              color="#FFFFFF"
              fontSize="17"
              fontWeight="bold"
              textAlignment="center"
              verticalAlignment="middle"
            />
          </StackLayout>

          <!-- Forgot Password -->
          <Label
            text="Forgot Password?"
            fontSize="14"
            color="#111827"
            textAlignment="center"
            marginTop="16"
          />
        </StackLayout>

        <!-- Bottom CTA -->
        <StackLayout row="2" padding="20" verticalAlignment="top">
          <Label text="Don’t have an account?" fontSize="14" color="#111827" textAlignment="center"/>
          <Label text="Sign Up" fontSize="15" color="#3B82F6" textAlignment="center" fontWeight="bold" marginTop="4"/>
        </StackLayout>
      </GridLayout>
    </Page>
  </template>
