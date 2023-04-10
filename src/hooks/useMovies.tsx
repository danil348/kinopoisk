import axios from "axios"
import { useEffect, useState } from "react"

const useMovies = () => {
	const [movies, setMovies] =useState<any[]>([])

	const fetchUsers = async () => {
		const response = await axios.get("http://localhost:3333/movies")

		if(response && response.data){
			setMovies(response.data)
		}
	}

	useEffect(() => {
		fetchUsers()
	},[])

	return {movies}
}
export default useMovies