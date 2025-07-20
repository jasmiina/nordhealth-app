<script setup lang="ts">
const emailValue = ref<string>("");
const passwordValue = ref<string>("");
const checkboxValue = ref<boolean>(false);
const emailInputRef = ref();
const passwordInputRef = ref();

const router = useRouter();

const handleSubmit = () => {
  if (passwordInputRef.value) {
    passwordInputRef.value.togglePasswordVisibility(false);
  }

  const emailValid = emailInputRef.value.testValidity();
  const passwordValid = passwordInputRef.value.testValidity();

  if (emailValid && passwordValid) {
    router.push({
      path: "/success",
      query: {
        updates: checkboxValue.value.toString(),
      },
    });
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <BaseCard>
      <BaseText element="h2">Sign Up</BaseText>
      <AppInput
        v-model="emailValue"
        label="Email"
        id="my-email"
        autocomplete="email"
        ref="emailInputRef"
        required
        placeholder="Enter your email..."
      ></AppInput>
      <AppInput
        v-model="passwordValue"
        label="Password"
        id="my-password"
        type="password"
        autocomplete="new-password"
        ref="passwordInputRef"
        required
        placeholder="Enter your password..."
      ></AppInput>
      <nord-checkbox
        v-model="checkboxValue"
        type="checkbox"
        label="I wish to receive product updates and announcements"
      ></nord-checkbox>
      <nord-button variant="primary" type="submit">Submit</nord-button>
    </BaseCard>
  </form>
</template>
