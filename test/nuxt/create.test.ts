import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

// component imports
import Create from '../../app/pages/create.vue'

describe('CreatePage', () => {
  it('should submit the form with the correct values', async () => {
    const wrapper = await mountSuspended(Create)
    const consoleSpy = vi.spyOn(console, 'log')

    await wrapper.find('#foodOne').setValue('Marmite')
    await wrapper.find('#foodTwo').setValue('Cheese')
    await wrapper.find('#description').setValue('A classic savory delight.')

    // Simulate adding tags
    const tagInput = wrapper.find('#tags')
    await tagInput.setValue('savory')
    await tagInput.trigger('keydown', { key: ',' })
    await tagInput.setValue('classic')
    await tagInput.trigger('keydown', { key: 'Enter' })

    await wrapper.find('form').trigger('submit.prevent')

    expect(consoleSpy).toHaveBeenCalledWith('New Combo Data:', {
      foodOne: 'Marmite',
      foodTwo: 'Cheese',
      description: 'A classic savory delight.',
      tags: ['savory', 'classic'],
    })
  })

  it('should not add duplicate tags', async () => {
    const wrapper = await mountSuspended(Create)
    const tagInput = wrapper.find('#tags')

    await tagInput.setValue('sweet')
    await tagInput.trigger('keydown', { key: ',' })
    await tagInput.setValue('sweet')
    await tagInput.trigger('keydown', { key: ',' })

    const tags = wrapper.findAll('.tag-pill')
    expect(tags.length).toBe(1)
    expect(tags[0].text()).toContain('sweet')
  })

  it('should not add more than 5 tags', async () => {
    const wrapper = await mountSuspended(Create)
    const tagInput = wrapper.find('#tags')

    for (let i = 1; i <= 6; i++) {
      await tagInput.setValue(`tag${i}`)
      await tagInput.trigger('keydown', { key: ',' })
    }

    const tags = wrapper.findAll('.tag-pill')
    expect(tags.length).toBe(5)
  })

  it('should remove a tag when the remove button is clicked', async () => {
    const wrapper = await mountSuspended(Create)
    const tagInput = wrapper.find('#tags')

    await tagInput.setValue('spicy')
    await tagInput.trigger('keydown', { key: ',' })

    expect(wrapper.findAll('.tag-pill').length).toBe(1)

    await wrapper.find('.remove-tag').trigger('click')

    expect(wrapper.findAll('.tag-pill').length).toBe(0)
  })
})
