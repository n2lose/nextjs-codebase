import {AntdRegistry} from '@/libs/registry'
import {ConfigProvider} from 'antd'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import themeDefault from '@/styles/theme/themeConfig'
import {ReactQueryProvider} from '@/QueryProvider'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Next App Base',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AntdRegistry>
					<ConfigProvider theme={themeDefault}>
						<ReactQueryProvider>{children}</ReactQueryProvider>
					</ConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	)
}
