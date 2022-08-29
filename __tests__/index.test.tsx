import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

// describe("Title", () => {
//   it("it shows title", () => {
//     render(<Home/>)
//     const title = screen.getByTitle("Jia Jun Zhang | Fullstack Developer")
//   })
// })

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})