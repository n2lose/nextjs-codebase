import {render, screen} from '@testing-library/react'
import {expect} from '@jest/globals'
import Home from '@/page'

describe('Home Page', () => {
	it('renders login link', () => {
		render(<Home />)
		const heading = screen.getByText('Home page')
		expect(heading).toBeInTheDocument()
	})
})
