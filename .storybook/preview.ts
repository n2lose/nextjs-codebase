import type {Preview} from '@storybook/react'

import {themes} from '@storybook/theming'

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.normal,
		},
	},
}

export default preview
