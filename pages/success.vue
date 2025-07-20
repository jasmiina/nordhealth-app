<script setup lang="ts">
const route = useRoute();

const optedIn = computed(() => route.query.updates === "true");
</script>

<template>
  <BaseCard>
    <BaseText element="h2">Success</BaseText>
    <AppMessage type="success">You have successfully signed up!</AppMessage>
    <AppMessage v-if="optedIn">You have opted to reveive product updates and announcements.</AppMessage>
  </BaseCard>
</template>
