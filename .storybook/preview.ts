import {Preview} from '@storybook/react'
import {themes} from '@storybook/theming'

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.light,
		},
	},
}

export default preview
