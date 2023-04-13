import React, { useEffect, useState } from "react"
import { useMovie } from "../../../../hooks/useMovie"

interface HomeSliderProps {
	category: string
}

const HomeSlider: React.FC<HomeSliderProps> = ({category}) => {
	const { getMovieByType } = useMovie()
	const [movies, setMovies] = useState([])

	useEffect(() => {
		if(category){
			getMovieByType(category, 1, 10).then((res) => {
				setMovies([...movies, ...(res as [])])
			})
		}
	}, [])

	return (
		<div className="home-slider">
			
		</div>
	)
}

export default HomeSlider