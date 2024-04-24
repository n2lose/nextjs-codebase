'use client'
import {useState} from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)

	return (
		<div style={{marginBottom: '5rem', textAlign: 'center'}}>
			<h4 style={{marginBottom: 20}}>{count}</h4>
			<button onClick={() => setCount(prev => prev + 1)}>increment</button>
			<button
				onClick={() => setCount(prev => prev - 1)}
				style={{marginInline: 16}}
			>
				decrement
			</button>
			<button onClick={() => setCount(0)}>reset</button>
		</div>
	)
}
