import { useNavigate } from "react-router-dom";
import useMovies from "../../../hooks/useMovies";
import styles from "./Home.module.scss";
import HomeSlider from "./HomeSlider/HomeSlider";
import PromoContent from "./PromoContent/PromoContent";

const Home = () => {
	const { movies } = useMovies()
	const navigate = useNavigate()
	const categories = ["ужасы"]

	const goToMovie = (path: string) => navigate(path)

	return (
		<>
			<PromoContent id="2"/>
			<section className={styles.home}>
				{categories.map((category, index) => (
					<HomeSlider category={category} key={index}/>
				))}
				{movies && movies.map((movie, index) => (
					<div className="" key={index} onClick={() => goToMovie(`/movie/${movie.types.join("_")}/${movie.id}`)}>
						<img loading="lazy" src={movie.assets.previewImage} alt=""/>
					</div>
				))}
			</section>
		</>
	)
}

export default Home