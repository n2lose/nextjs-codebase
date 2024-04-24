import Counter from './Counter'
import UserList from './UserList'
import {Suspense} from 'react'

export default async function Users() {
	return (
		<main style={{padding: 20}}>
			<Counter />
			<Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
				<UserList />
			</Suspense>
		</main>
	)
}
