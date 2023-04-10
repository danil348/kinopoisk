import axios from "axios"
import { useEffect, useState } from "react"

const useUsers = () => {
	const [users, setUsers] =useState<any[]>([])

	const fetchUsers = async () => {
		const response = await axios.get("http://localhost:3333/users")

		if(response && response.data){
			setUsers(response.data)
		}
	}

	useEffect(() => {
		fetchUsers()
	},[])

	return {users}
}
export default useUsers