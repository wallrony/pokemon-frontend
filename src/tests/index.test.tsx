import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';
import App from '../pages/index'

describe('App', () => {
  it('Run without crash', () => {
    render(<App />)

    waitFor(() => {
      expect(
        screen.findAllByRole('heading', { name: 'Welcome to Next.js!' })
      ).toBeInTheDocument()
    })
  })
})
