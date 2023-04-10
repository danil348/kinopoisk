import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MoviePage = () => {
	const {id} = useParams()
	const [movie, setMovie] = useState<any>(null)

	useEffect(() => {
		const cancelToken = axios.CancelToken.source()
		axios.get(`http://localhost:3333/movies/${id}`, {cancelToken: cancelToken.token})
			.then((res) => {
				setMovie(res.data)
			}).catch((error) => {
				if(axios.isCancel(error)){
					console.log("request cancelled")
				}else{

				}
			})

		return () => {
			cancelToken.cancel()
		}
	},[id])

	useEffect(() => {
		console.log(movie)
	},[movie])

	return (
		<div>
			<div className="">{movie?.name}</div>
			<div className="">{movie?.id}</div>
			<div className="">{movie?.duration}</div>
			<div className="">{movie?.viewsNumber}</div>
			<div className="">{movie?.year}</div>
		</div>
	)
}

export default MoviePage