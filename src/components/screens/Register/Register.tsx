import { useEffect, useState } from "react"
import { userType } from "../../../types/user.interface"

const Register = () => {
	const [user, setUser] = useState(userType)

	const handleChange = (e: any) => {
		setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	useEffect(() => {
		console.log(user)
	}, [user])

	return (
		<div>
			<input type="text" name="name" onChange={handleChange} placeholder="name" />
			<input type="email" name="email" onChange={handleChange} placeholder="email" />
			<input type="password" name="password" onChange={handleChange} placeholder="password" />
		</div>
	)
}

export default Register