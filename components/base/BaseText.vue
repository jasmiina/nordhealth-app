<script setup lang="ts">
interface TextProps {
  element?: BaseTextElement;
  srOnly?: boolean;
}

const props = withDefaults(defineProps<TextProps>(), {
  element: "span",
});
</script>

<template>
  <component
    :is="element"
    :class="[$style.text, $style[element], srOnly && $style.hidden]"
  >
    <slot></slot>
  </component>
</template>

<style module>
.text {
  font-family: var(--n-font-family);
  color: var(--n-color-text);
  font-size: var(--n-font-size-m);
}

.hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}

.label {
  font-weight: var(--n-font-weight-heading);
}

.h1 {
  font-size: var(--n-font-size-xxl);
}

.h2 {
  margin-top: 0;
  font-size: var(--n-font-size-xl);
}
</style>
