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
})
