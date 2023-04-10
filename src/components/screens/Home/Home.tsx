import useUsers from "../../../hooks/useUsers";
import styles from "./Home.module.scss";

const Home = () => {
	const { users } = useUsers()

	console.log(users)

	return (
		<div className={styles.home}>
			{users && users.map((user, index) => (
				<div className="user" key={index}>
					<div className={styles.userName}>{user.name}</div>
				</div>
			))}
		</div>
	)
}

export default Home