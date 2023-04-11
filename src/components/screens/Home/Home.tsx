import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import useMovies from "../../../hooks/useMovies";
import styles from "./Home.module.scss";

const Home = () => {
	const { movies } = useMovies()
  const userContext = useContext(AuthContext)
	const navigate = useNavigate()

	const goToMovie = (path: string) => navigate(path)

	useEffect(() => {
		console.log(userContext.currentUser)
	},[userContext.currentUser])

	return (
		<section className={styles.home}>
			{movies && movies.map((movie, index) => (
				<div className="" key={index} onClick={() => goToMovie(`/movie/${movie.types.join("_")}/${movie.id}`)}>
					<img loading="lazy" src={movie.assets.previewImage} alt=""/>
				</div>
			))}
		</section>
	)
}

export default Home