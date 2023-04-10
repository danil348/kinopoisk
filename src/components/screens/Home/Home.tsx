import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import useMovies from "../../../hooks/useMovies";
import styles from "./Home.module.scss";

const Home = () => {
	const { movies } = useMovies()
  const userContext = useContext(AuthContext)

	useEffect(() => {
		console.log(userContext.currentUser)
	},[])

	return (
		<div className={styles.home}>
			{movies && movies.map((movie, index) => (
				<Link key={index} to={`/movie/${movie.types.join("_")}/${movie.id}`}>
					<div className="" key={index}>
						<img loading="lazy" src={movie.assets.previewImage} alt=""/>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Home