import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../../hooks/useMovie";
import styles from "./MoviesPage.module.scss";

const pageConfig = {
	fetch: true,
	page: 0,
	pageCount: 0
}

const MoviesPage = () => {
	const {category} = useParams()
	const [movies, setMovies] = useState([])
	const [pages, setPages] = useState(pageConfig)
	const { getMovieByType } = useMovie()

	useEffect(() => {
		if(category && pages.fetch){
			getMovieByType(category, pages.page).then((res) => {
				setMovies([...movies, ...(res as [])])
				setPages((prev) => ({...prev, page: prev.page + 1}))
			}).finally(() => {
				setPages((prev) => ({...prev, fetch: false}))
			})
		}
	}, [pages.fetch])

	useEffect(() => {
		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const handleScroll = (e: any) => {
		if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
			setPages((prev) => ({...prev, fetch: true}))
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