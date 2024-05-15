import { render, screen } from '@testing-library/react'

import App from '@modules/App'

it('renders App component', () => {
  render(<App />)
  expect(screen.getByText('Home')).toBeInTheDocument()
})
