<script setup lang="ts">
import { ref } from 'vue'

const foodOne = ref('')
const foodTwo = ref('')
const description = ref('')
const tagInput = ref('')
const tags = ref<string[]>([])

const handleTagInput = (event: KeyboardEvent) => {
  if (event.key === ',' || event.key === 'Enter') {
    event.preventDefault()
    const newTag = tagInput.value.trim()
    if (newTag && !tags.value.includes(newTag) && tags.value.length < 5) {
      tags.value.push(newTag)
    }
    tagInput.value = ''
  }
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const handleSubmit = () => {
  if (!foodOne.value || !foodTwo.value || !description.value) {
    alert('Please fill out all required fields.')
    return
  }

  const comboData = {
    foodOne: foodOne.value,
    foodTwo: foodTwo.value,
    description: description.value,
    tags: tags.value,
  }

  console.log('New Combo Data:', comboData)

  // Clear form
  foodOne.value = ''
  foodTwo.value = ''
  description.value = ''
  tags.value = []
  tagInput.value = ''
}
</script>

<template>
  <div class="create-page">
    <h1 class="page-title">Create a New Combo</h1>
    <form @submit.prevent="handleSubmit" class="create-form">
      <div class="form-group">
        <label for="foodOne">Food One</label>
        <input
          id="foodOne"
          v-model="foodOne"
          type="text"
          required
        />
      </div>
      <div class="form-group">
        <label for="foodTwo">Food Two</label>
        <input
          id="foodTwo"
          v-model="foodTwo"
          type="text"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags</label>
        <input
          id="tags"
          v-model="tagInput"
          type="text"
          placeholder="e.g. sweet, savory, crunchy"
          @keydown="handleTagInput"
        />
        <div class="tags-pills">
          <div
            v-for="(tag, index) in tags"
            :key="tag"
            class="tag-pill"
          >
            {{ tag }}
            <button
              type="button"
              class="remove-tag"
              @click="removeTag(index)"
            >
              &times;
            </button>
          </div>
        </div>
        <small v-if="tags.length >= 5"
          >You have reached the maximum of 5 tags.</small
        >
      </div>
      <button type="submit" class="btn submit-btn">Create Combo</button>
    </form>
  </div>
</template>

<style scoped>
.tags-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.tag-pill {
  display: flex;
  align-items: center;
  background-color: var(--component-bg-color);
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-color);
}

.remove-tag {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 6px;
  font-size: 18px;
  padding: 0;
  line-height: 1;
  color: var(--text-color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-tag:hover {
  color: var(--primary-accent-color);
}

.tag-pill:hover {
  border-color: var(--primary-accent-color);
}

.form-group small {
  display: block;
  margin-top: 8px;
  color: var(--primary-accent-color);
  font-size: 0.85rem;
  font-style: italic;
}
</style>
