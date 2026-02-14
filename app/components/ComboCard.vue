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
  tags: {
    type: Array as () => string[],
    required: true,
  },
})
</script>

<template>
  <div class="combo-card">
    <h4 class="combo-title">{{ props.title }}</h4>
    <p class="combo-description">{{ props.description }}</p>
    <div class="combo-tags">
      <span v-for="tag in props.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
.combo-card {
  background-color: var(--component-bg-color);
  padding: 0 1.5rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-basis: 300px;
  text-align: left;
  transition: transform 0.2s ease-in-out;
}

.combo-card:hover {
    transform: translateY(-5px);
}

.combo-title {
  font-size: 1.4rem;
  color: var(--primary-accent-color);
  margin-bottom: 0.5rem;
}

.combo-description {
  font-size: 0.95rem;
  color: var(--text-color-secondary);
  margin-bottom: 1rem;
}

.combo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: rgba(134, 229, 255, 0.2); /* secondary-accent-color with transparency */
  color: var(--secondary-accent-color);
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
