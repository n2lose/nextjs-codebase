import {render, screen} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import Home from '@/app/page'

describe('Home Page', () => {
	it('renders login link', () => {
		render(<Home />)
		const heading = screen.getByText('Home page')
		expect(heading).toBeInTheDocument()
	})
})
