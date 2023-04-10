import useMovies from "../../../hooks/useMovies";
import useUsers from "../../../hooks/useUsers";
import styles from "./Home.module.scss";

const Home = () => {
	const { users } = useUsers()
	const { movies } = useMovies()

	return (
		<div className={styles.home}>
			
			{users && users.map((user, index) => (
				<div className="user" key={index}>
					<div className={styles.userName}>{user.name}</div>
				</div>
			))}

			{movies && movies.map((movie, index) => (
				<div className="" key={index}>
					<img loading="lazy" src={movie.assets.previewImage} alt=""/>
				</div>
			))}
		</div>
	)
}

export default Home