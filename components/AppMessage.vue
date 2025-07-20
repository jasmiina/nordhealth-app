<script setup lang="ts">
interface MessageProps {
  type?: MessageType;
}

const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
});
</script>

<template>
  <div :class="[$style.container, $style[type]]">
    <nord-icon
      v-if="type === 'info'"
      name="interface-warning-small"
      color="var(--n-color-status-info)"
    ></nord-icon>
    <nord-icon
      v-else-if="type === 'success'"
      name="interface-checked"
      color="var(--n-color-status-success)"
    ></nord-icon>
    <nord-icon
      v-else
      name="interface-warning"
      color="var(--n-color-status-danger)"
    ></nord-icon>
    <BaseText><slot></slot></BaseText>
  </div>
</template>

<style module>
.container {
  width: 100%;
  height: 100%;
  padding: var(--n-space-m) var(--n-space-l);
  border-radius: var(--n-border-radius);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--n-space-m);
  line-height: 100%;
  align-items: center;
}

.info {
  border: 1px solid var(--n-color-border-info);
  background-color: var(--n-color-status-info-weak);
}

.success {
  border: 1px solid var(--n-color-border-success);
  background-color: var(--n-color-status-success-weak);
}

.error {
  border: 1px solid var(--n-color-border-danger);
  background-color: var(--n-color-status-danger-weak);
}
</style>
