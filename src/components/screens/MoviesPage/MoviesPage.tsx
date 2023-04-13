import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../../hooks/useMovie";
import styles from "./MoviesPage.module.scss";

const pageConfig = {
	fetch: true,
	page: 0,
	pageCount: 0,
	limit: 10
}

const MoviesPage = () => {
	const {category} = useParams()
	const [movies, setMovies] = useState([])
	const [page, setPage] = useState(pageConfig)
	const { getMovieByType } = useMovie()

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

	return (
		<div>
			{movies && Object.entries(movies).map((movie: any, index) => {
				return (

					<div className={styles.item} key={index}>ad
					{movie[1].id}
					</div>
				)
			})}
		</div>
	)
}

export default MoviesPage