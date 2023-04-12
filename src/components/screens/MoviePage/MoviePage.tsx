import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useMovie } from "../../../hooks/useMovie"

const MoviePage = () => {
	const {id} = useParams()
	const [movie, setMovie] = useState<any>(null)
	const { getMovieById } = useMovie()

	useEffect(() => {
		id && getMovieById(id).then((movie) => setMovie(movie))
	},[id])

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