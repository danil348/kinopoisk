import axios from "axios"
import { useEffect, useState } from "react"

const useMovies = () => {
	const [movies, setMovies] =useState<any[]>([])

	useEffect(() => {
		const cancelToken = axios.CancelToken.source()
		axios.get("http://localhost:3333/movies", {cancelToken: cancelToken.token})
			.then((res) => {
				setMovies(res.data)
			}).catch((error) => {
				if(axios.isCancel(error)){
					console.log("request cancelled")
				}else{

				}
			})

		return () => {
			cancelToken.cancel()
		}
	},[])

	return {movies}
}
export default useMovies