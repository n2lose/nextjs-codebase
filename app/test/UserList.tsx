'use client'
import React from 'react'
import {UserDto, getUsers} from '@/libs/api/users/users.api'
import {useQuery} from '@tanstack/react-query'

export default function UserList() {
	const {data, isLoading} = useQuery<UserDto[]>({
		queryKey: ['FETCH_USERS'],
		queryFn: () => getUsers(),
		staleTime: 5 * 1000,
	})

	return (
		<>
			{
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr 1fr 1fr',
						gap: 20,
					}}
				>
					{isLoading && <p>Loading...</p>}
					{Array.isArray(data) &&
						data.map((user: UserDto) => (
							<div
								key={user.id}
								style={{border: '1px solid #ccc', textAlign: 'center'}}
							>
								<img
									src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
									alt={user.name}
									style={{width: 180, height: 180}}
								/>
								<h3>{user.name}</h3>
							</div>
						))}
				</div>
			}
		</>
	)
}
