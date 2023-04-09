import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			<img loading="lazy" src="http://localhost:3333/assets/images/test.jpg" alt=""/>
		</div>
	)
}

export default Home