import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../../hooks/useMovie";

const pageConfig = {
	fetch: true,
	page: 0,
	pageCount: 0,
	limit: 20
}

const MoviesPage = () => {
	const {category} = useParams()
	const [movies, setMovies] = useState([])
	const [page, setPage] = useState(pageConfig)
	const { getMovieByType } = useMovie()
	const ref = useRef<HTMLImageElement | null>(null)

	useEffect(() => {
		if(category && page.fetch){
			getMovieByType(category, page.page, page.limit).then((res) => {
				setMovies([...movies, ...(res as [])])
				setPage((prev) => ({...prev, page: prev.page + 1}))
			}).finally(() => {
				setPage((prev) => ({...prev, fetch: false}))
			})
		}
	}, [page.fetch])

	useEffect(() => {
		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const handleScroll = (e: any) => {
		if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
			setPage((prev) => ({...prev, fetch: true}))
		}
	}

	const handleSelectMovie = (e: any) => {
		ref.current?.classList.remove("_selected")
		ref.current = e.nativeEvent.target
		ref.current?.classList.add("_selected")
	}

	return (
		<div className="movies-page">
			<h1 className="movies-page__title">{category}</h1>
			<div className="movies-page__items">
				{movies && Object.entries(movies).map((movie: any, index) => {
					return (
						<div className="movies-page__item moviesPage-item" key={index} onClick={(e) => handleSelectMovie(e)}>
							<div className="moviesPage-item__border"></div>
							<img loading="lazy" src={movie[1].assets?.previewImage} alt="" />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default MoviesPage