import { App } from '@app/components/App'
import { render, screen } from '@app/tests'
import userEvent from '@testing-library/user-event'

test('App renders correctly', () => {
  render(<App />)
  expect(screen.getByRole('button')).toHaveTextContent('count is: 0')
})

test('App handles click correctly', () => {
  render(<App />)
  userEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('button')).toHaveTextContent('count is: 1')
  userEvent.click(screen.getByRole('button'))
  userEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('button')).toHaveTextContent('count is: 3')
})
