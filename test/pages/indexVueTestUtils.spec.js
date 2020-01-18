import { mount } from '@vue/test-utils'
import Vue from 'vue'
import PagesIndex from '~/pages/index.vue'

describe('Pages index spec by vue test utils', () => {
  test('should have increment feature stuff', async () => {
    const wrapper = mount(PagesIndex)
    expect(wrapper.text()).toContain('Hello, world')
    const button = wrapper.find('button')
    button.trigger('click')
    button.trigger('click')
    await Vue.nextTick()
    expect(wrapper.text()).toContain('You already click the button 2 times')
  })
})
