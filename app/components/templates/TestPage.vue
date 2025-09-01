<template>
    <Page actionBarHidden="true" backgroundColor="#F9FAFB">
        <ScrollView>
          <StackLayout padding="20" spacing="20">

            <!-- Greeting -->
            <StackLayout>
              <Label text="Good Afternoon, Joshua" fontSize="22" fontWeight="bold" color="#111827"/>
              <Label text="Monday, 1 September 2025" fontSize="14" color="#6B7280" marginTop="4"/>
              <Label text="You are in Senior 3 - Term 2" fontSize="14" color="#374151" marginTop="2"/>
            </StackLayout>

            <!-- Search Bar -->
            <StackLayout backgroundColor="#FFFFFF" borderRadius="25" padding="10" orientation="horizontal" verticalAlignment="center" shadowColor="#000" shadowOpacity="0.05" shadowRadius="5">
              <Label text.decode="&#xf002;" class="fas" fontSize="18" color="#9CA3AF" marginRight="10"/>
              <TextField hint="Search subjects, notes, or topics" fontSize="14" color="#111827" width="100%" borderWidth="0"/>
            </StackLayout>

            <!-- Timetable Header -->
            <Label text="This Week’s Timetable" fontSize="18" fontWeight="bold" color="#111827" marginTop="10"/>

            <!-- Timetable Cards -->
            <StackLayout spacing="12">
              <!-- Monday -->
              <StackLayout backgroundColor="#FFFFFF" borderRadius="16" padding="15" shadowColor="#000" shadowOpacity="0.05" shadowRadius="4">
                <Label text="Monday" fontSize="16" fontWeight="bold" color="#075E54"/>
                <Label text="Subject: Mathematics" fontSize="14" color="#374151" marginTop="4"/>
                <Label text="Time: 08:00 AM - 09:30 AM" fontSize="12" color="#6B7280"/>
              </StackLayout>

              <!-- Tuesday -->
              <StackLayout backgroundColor="#FFFFFF" borderRadius="16" padding="15" shadowColor="#000" shadowOpacity="0.05" shadowRadius="4">
                <Label text="Tuesday" fontSize="16" fontWeight="bold" color="#075E54"/>
                <Label text="Subject: English" fontSize="14" color="#374151" marginTop="4"/>
                <Label text="Time: 09:40 AM - 11:10 AM" fontSize="12" color="#6B7280"/>
              </StackLayout>

              <!-- Wednesday -->
              <StackLayout backgroundColor="#FFFFFF" borderRadius="16" padding="15" shadowColor="#000" shadowOpacity="0.05" shadowRadius="4">
                <Label text="Wednesday" fontSize="16" fontWeight="bold" color="#075E54"/>
                <Label text="Subject: Biology" fontSize="14" color="#374151" marginTop="4"/>
                <Label text="Time: 08:00 AM - 09:30 AM" fontSize="12" color="#6B7280"/>
              </StackLayout>

              <!-- Thursday -->
              <StackLayout backgroundColor="#FFFFFF" borderRadius="16" padding="15" shadowColor="#000" shadowOpacity="0.05" shadowRadius="4">
                <Label text="Thursday" fontSize="16" fontWeight="bold" color="#075E54"/>
                <Label text="Subject: Chemistry" fontSize="14" color="#374151" marginTop="4"/>
                <Label text="Time: 09:40 AM - 11:10 AM" fontSize="12" color="#6B7280"/>
              </StackLayout>

              <!-- Friday -->
              <StackLayout backgroundColor="#FFFFFF" borderRadius="16" padding="15" shadowColor="#000" shadowOpacity="0.05" shadowRadius="4">
                <Label text="Friday" fontSize="16" fontWeight="bold" color="#075E54"/>
                <Label text="Subject: Physics" fontSize="14" color="#374151" marginTop="4"/>
                <Label text="Time: 08:00 AM - 09:30 AM" fontSize="12" color="#6B7280"/>
              </StackLayout>

              <!-- Saturday -->
              <StackLayout backgroundColor="#FFFFFF" borderRadius="16" padding="15" shadowColor="#000" shadowOpacity="0.05" shadowRadius="4">
                <Label text="Saturday" fontSize="16" fontWeight="bold" color="#075E54"/>
                <Label text="Subject: History" fontSize="14" color="#374151" marginTop="4"/>
                <Label text="Time: 10:00 AM - 11:30 AM" fontSize="12" color="#6B7280"/>
              </StackLayout>

              <!-- Sunday -->
              <StackLayout backgroundColor="#FFFFFF" borderRadius="16" padding="15" shadowColor="#000" shadowOpacity="0.05" shadowRadius="4">
                <Label text="Sunday" fontSize="16" fontWeight="bold" color="#075E54"/>
                <Label text="Subject: Geography" fontSize="14" color="#374151" marginTop="4"/>
                <Label text="Time: 09:00 AM - 10:30 AM" fontSize="12" color="#6B7280"/>
              </StackLayout>
            </StackLayout>

          </StackLayout>
        </ScrollView>
      </Page>

</template>