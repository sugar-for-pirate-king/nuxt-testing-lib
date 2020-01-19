# nuxt-testing-lib

> Learn and trying to use testing-library to testing my simple nuxt-app

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## What's inside

- Testing increment stuff
- Testing a simple form feature.

#### A test code with testing-library
```js

import { render, fireEvent } from '@testing-library/vue'
import PagesIndex from '~/pages/index.vue'

describe('Pages index page spec', () => {
  test('it has feature increment stuff', async () => {
    const { getByText } = render(PagesIndex)
    getByText('Hello, world')
    const button = getByText('Increment')
    await fireEvent.click(button)
    await fireEvent.click(button)
    getByText('You already click the button 2 times')
  })

  // Testing form stuff (parent -> child)
  test('working good with emitting stuff', async () => {
    const { getByText, getByLabelText } = render(PagesIndex)
    const usernameInput = getByLabelText(/username/i)
    await fireEvent.update(usernameInput, 'Kokomi')
    await fireEvent.keyUp(usernameInput)
    getByText('Hello, Kokomi')
  })
})
```

#### A test code with vue-test-utils
```js
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import PagesIndex from '~/pages/index.vue'

describe('Pages index spec by vue test utils', () => {
  test('should have increment feature stuff', async () => {
    const wrapper = mount(PagesIndex, {
      stubs: ['nuxt-link']
    })
    expect(wrapper.text()).toContain('Hello, world')
    const button = wrapper.find('button')
    button.trigger('click')
    button.trigger('click')
    await Vue.nextTick()
    expect(wrapper.text()).toContain('You already click the button 2 times')
  })

  test('working with emitting stuff', async () => {
    const wrapper = mount(PagesIndex, {
      stubs: ['nuxt-link']
    })
    const usernameField = wrapper.find('#username')
    usernameField.setValue('Kokomi')
    usernameField.trigger('keyup')
    await Vue.nextTick()
    expect(wrapper.text()).toContain('Hello, Kokomi')
  })
})
```