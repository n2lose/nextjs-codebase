type GeoLocation = {
	lat: string
	lng: string
}

type Address = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: GeoLocation
}

type Company = {
	name: string
	catchPhrase: string
	bs: string
}

export type UserDto = {
	id: number
	name: string
	username: string
	email: string
	address: Address
	phone: string
	website: string
	company: Company
}

export const getUsers = async () => {
	return (await fetch('https://jsonplaceholder.typicode.com/users').then(res =>
		res.json(),
	)) as UserDto[]
}
