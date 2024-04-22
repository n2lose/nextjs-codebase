import {create} from '@storybook/theming'

const customTheme = create({
	base: 'light',
	brandTitle: 'My Custom Storybook Theme',
	colorPrimary: '#0421FE',
	colorSecondary: 'green',
})

export default customTheme
