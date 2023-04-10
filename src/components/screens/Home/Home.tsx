import { useContext, useEffect } from "react";
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
				<div className="" key={index}>
					<img loading="lazy" src={movie.assets.previewImage} alt=""/>
				</div>
			))}
		</div>
	)
}

export default Home