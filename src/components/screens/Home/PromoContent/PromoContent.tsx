import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
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
		<motion.section className='home-page__promoContent promoContent' style={{backgroundImage: `url(${movie?.assets.mainImage})`}} 
			initial={{  opacity: 0 }}
			animate={{  opacity: 1 }}
			transition={{delay: 0.5, duration: 0.75}}
		>
			{movie ? 
				<>
					<motion.div className="promoContent__content"
						initial={{  opacity: 1 }}
						animate={{  opacity: 0 }}
						transition={{delay: 3.5, duration: 0.20}}
					>
						<motion.img loading="lazy" src={movie?.assets.titleImage} alt="" className="promoContent__titleImage"
							initial={{  y: -40, scale: 1.2 }}
							animate={ {  y: 0 , scale: 1}}
							transition={{ease: "circIn", duration: .55,delay: 0.8}}
						/>
						<motion.h1 className="promoContent__title"
							initial={{  y: 40, scale: 1.2 }}
							animate={ {  y: 0 , scale: 1}}
							transition={{ease: "circIn", duration: .55,delay: 0.8}}
						>{movie?.annotations}</motion.h1>
					</motion.div>

					<div className="promoContent__bottom promoContent-bottom">
						<div className="promoContent-bottom__image">
							<motion.img loading="lazy" src={movie?.assets.titleImage} alt=""
								initial={{  y: -20, opacity: 0 }}
								animate={ {  y: 0, opacity: 1 }}
								transition={{ease: "easeIn", duration: .55,delay: 3.5}}
							/>
						</div>
						<motion.div className="promoContent-bottom__actions promoContent-actions"
							initial={{  y: 20, opacity: 0 }}
							animate={ {  y: 0, opacity: 1 }}
							transition={{ease: "easeIn", duration: .55,delay: 1.5}}
						>
							<div className="promoContent-actions__left">
								<button className="promoContent-bottom__button promoContent-bottom__buttonOrange"><FaPlay/>Смотреть фильм</button>
								<button className="promoContent-bottom__button promoContent-bottom__buttonDark">О фильме</button>
								<button className="promoContent-bottom__button promoContent-bottom__buttonDark promoContent-bottom__buttonCircle"><BiBookmarkAltPlus size={25}/></button>
							</div>
							<motion.div className="promoContent-actions__right"
								initial={{  y: 20, opacity: 0 }}
								animate={ {  y: 0, opacity: 1 }}
								transition={{ease: "easeIn", duration: .55,delay: 2.8}}
							>
								<button className="promoContent-bottom__button promoContent-bottom__buttonDark promoContent-bottom__buttonCircle"><BiBookmarkAltPlus size={25}/></button>
								<button className="promoContent-bottom__button promoContent-bottom__buttonDark promoContent-bottom__buttonCircle"><BiBookmarkAltPlus size={25}/></button>
							</motion.div>
						</motion.div>
					</div>
				</>
				:
				null
			}
		</motion.section>
	)
}

export default PromoContent