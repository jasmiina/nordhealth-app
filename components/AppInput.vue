<script setup lang="ts">
interface InputProps {
  label: string;
  id: string;
  type?: InputType;
  autocomplete: AutoCompleteValue;
  required?: boolean;
  placeholder: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
});

const model = defineModel<string>();

const passwordVisible = ref<boolean>(false);
const inputRef = ref();
const isValid = ref<boolean>(true);

const computedInputType = computed(() => {
  if (props.type === "password") {
    return passwordVisible.value ? "text" : "password";
  }
  return props.type;
});

const togglePasswordVisibility = (value: boolean) => {
  passwordVisible.value = value;
};

const testValidity = () => {
  const value = props.type === "password" ? model.value : model.value?.trim();
  isValid.value = !!(value && value.length > 0);
  return isValid.value;
};

defineExpose({
  togglePasswordVisibility,
  testValidity,
});
</script>

<template>
  <div :class="$style.container">
    <span :class="$style.labelContainer">
      <span>
        <BaseText element="label" :for="id">{{ label }}</BaseText>
        <span v-if="required" :class="$style.star" aria-hidden="true">*</span>
      </span>
      <nord-icon
        v-if="!isValid"
        name="interface-warning"
        color="var(--n-color-status-danger)"
      />
    </span>
    <div :class="$style.inputContainer">
      <input
        v-model="model"
        :class="[
          $style.input,
          !isValid && $style.invalid,
          type === 'password' && $style.passwordInput,
        ]"
        :type="computedInputType"
        :name="id"
        :id="id"
        :autocomplete="autocomplete"
        :aria-required="required"
        :aria-invalid="!isValid"
        aria-describedby="errorMessage"
        ref="inputRef"
        :placeholder="placeholder"
        @blur="testValidity"
        @input="testValidity"
      />
      <button
        v-if="type === 'password'"
        :class="$style.passwordToggle"
        :aria-pressed="passwordVisible"
        aria-label="Toggle password visibility"
        @click.prevent="() => togglePasswordVisibility(!passwordVisible)"
      >
        <nord-icon
          :name="passwordVisible ? 'interface-edit-off' : 'interface-edit-on'"
        ></nord-icon>
      </button>
    </div>
    <BaseText
      v-if="!isValid"
      id="errorMessage"
      aria-live="polite"
      :class="$style.errorMessage"
    >
      This field is required.
    </BaseText>
    <BaseText sr-only aria-live="assertive">{{
      passwordVisible ? "Your password is visible" : "Your password is hidden"
    }}</BaseText>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  gap: var(--n-space-s);
}

.labelContainer {
  display: flex;
  gap: var(--n-space-s);
  justify-content: space-between;
}

.inputContainer {
  position: relative;
}

.input {
  padding: var(--n-space-s) var(--n-space-m);
  border-radius: var(--n-border-radius-s);
  border: 1px solid var(--n-color-border-strong);
  font-family: var(--n-font-family);
  background-color: var(--n-color-background);
  color: var(--n-color-text);
  width: 100%;
  text-overflow: ellipsis;
}

.passwordInput {
  padding-right: var(--n-space-xl);
}

.input:focus-visible {
  outline: 2px solid var(--n-color-accent);
  outline-offset: 1px;
}

.invalid {
  border-color: var(--n-color-text-danger);
}

.passwordToggle {
  border: none;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  padding: var(--n-space-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: var(--n-space-s);
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  cursor: pointer;
}

.passwordToggle:focus-visible {
  outline: 2px solid var(--n-color-accent);
}

.errorMessage {
  color: var(--n-color-text-danger);
}

.star {
  color: var(--n-color-text-danger);
  margin-left: var(--n-space-xs);
}
</style>
