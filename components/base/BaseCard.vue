<script setup lang="ts"></script>

<template>
  <div :class="$style.card"><slot></slot></div>
</template>

<style module>
.card {
  width: 100%;
  max-width: 380px;
  height: 100%;
  background-color: var(--n-color-surface);
  padding: var(--n-space-l);
  border-radius: var(--n-border-radius);
  border: 1px solid var(--n-color-border);
  display: flex;
  flex-direction: column;
  gap: var(--n-space-m);
}
</style>
