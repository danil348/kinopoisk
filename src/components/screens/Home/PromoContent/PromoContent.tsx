import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMovie } from "../../../../hooks/useMovie";

interface PromoContentProps {
	id: string
}

const PromoContent: React.FC<PromoContentProps> = ({id}) => {
	const [movie, setMovie] = useState<any>(null)
	const { getMovieById } = useMovie()
	
	useEffect(() => {
		id && getMovieById(id).then((movie) => setMovie(movie))
	},[])

	useEffect(() => {
		console.log(movie)
	}, [movie])

	return (
		<section className='home-page__promoContent promoContent' style={{backgroundImage: `url(${movie?.assets.mainImage})`}} >
			<motion.div className="promoContent__content"
				initial={{  opacity: 1 }}
				animate={{  opacity: 0 }}
				transition={{delay: 3, duration: 0.55}}
			>
				<motion.img loading="lazy" src={movie?.assets.titleImage} alt="" className="promoContent__titleImage"
					initial={{  y: -40, scale: 1.2 }}
					animate={ {  y: 0 , scale: 1}}
					transition={{ease: "circIn", duration: .55}}
				/>
				<motion.h1 className="promoContent__title"
					initial={{  y: 40, scale: 1.2 }}
					animate={ {  y: 0 , scale: 1}}
					transition={{ease: "circIn", duration: .55}}
				>{movie?.annotations}</motion.h1>
			</motion.div>
		</section>
	)
}

export default PromoContent