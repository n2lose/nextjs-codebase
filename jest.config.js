const nextJest = require('next/jest')
const createJestConfig = nextJest({
	dir: './',
})

/** @type {import('jest').Config} */
const config = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	preset: 'ts-jest',
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
}

// export default createJestConfig(config)
// Same the issue above, we cannot export default module, workaround use module.exports
module.exports = createJestConfig(config)
