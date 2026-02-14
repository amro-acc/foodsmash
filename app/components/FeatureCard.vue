<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="feature-card">
    <slot />
    <h3 class="feature-title">{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  background-color: var(--component-bg-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex-basis: 300px;
}

.feature-title {
  font-size: 1.3rem;
  color: var(--secondary-accent-color);
  margin-bottom: 1rem;
}

.feature-icon {
  color: var(--primary-accent-color);
  margin-bottom: 1.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
