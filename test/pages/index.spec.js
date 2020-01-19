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

  test('working good with emitting stuff', async () => {
    const { getByText, getByLabelText } = render(PagesIndex)
    const usernameInput = getByLabelText(/username/i)
    await fireEvent.update(usernameInput, 'Kokomi')
    await fireEvent.keyUp(usernameInput)
    getByText('Hello, Kokomi')
  })
})
