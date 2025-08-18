<template>
<StackLayout padding="20" spacing="15">

<!-- Card Container -->
<StackLayout backgroundColor="white" borderRadius="16" padding="20"
shadowColor="#00000033" shadowOpacity="0.05" shadowRadius="4" shadowOffsetHeight="2" spacing="12">

<!-- Row: Contact -->
<GridLayout columns="*, auto" paddingTop="4" paddingBottom="4">
<Label text="Phone" fontSize="14" color="#6B7280" col="0"/>
<Label text="+256 700 123456" fontSize="16" color="#374151" col="1"/>
</GridLayout>

<!-- Divider -->
<StackLayout height="1" backgroundColor="#E5E7EB" marginTop="4" marginBottom="4"/>

<!-- Row: Email -->
<GridLayout columns="*, auto" paddingTop="4" paddingBottom="4">
<Label text="Email" fontSize="14" color="#6B7280" col="0"/>
<Label text="johndoe@email.com" fontSize="16" color="#374151" col="1"/>
</GridLayout>

<!-- Divider -->
<StackLayout height="1" backgroundColor="#E5E7EB" marginTop="4" marginBottom="4"/>

<!-- Row: School -->
<GridLayout columns="*, auto" paddingTop="4" paddingBottom="4">
<Label text="School" fontSize="14" color="#6B7280" col="0"/>
<Label text="Green Valley High" fontSize="16" color="#374151" col="1"/>
</GridLayout>

<!-- Divider -->
<StackLayout height="1" backgroundColor="#E5E7EB" marginTop="4" marginBottom="4"/>

<!-- Row: Class -->
<GridLayout columns="*, auto" paddingTop="4" paddingBottom="4">
<Label text="Class" fontSize="14" color="#6B7280" col="0"/>
<Label text="Senior 4 - Science" fontSize="16" color="#374151" col="1"/>
</GridLayout>

<!-- Divider -->
<StackLayout height="1" backgroundColor="#E5E7EB" marginTop="4" marginBottom="4"/>

<!-- Row: Status -->
<GridLayout columns="*, auto" paddingTop="4" paddingBottom="4">
<Label text="Status" fontSize="14" color="#6B7280" col="0"/>
<Label text="Active" fontSize="16" color="#10B981" col="1"/>
</GridLayout>

</StackLayout>

</StackLayout>
</template>