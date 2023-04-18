import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useMovie } from "../../../../hooks/useMovie";

interface HomeSliderProps {
	category: string
}

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  variableWidth: true,
  rows: 1
};

const HomeSlider: React.FC<HomeSliderProps> = ({category}) => {
	const { getMovieByType } = useMovie()
	const [movies, setMovies] = useState<Object | null>(null)
  const sliderRef = useRef() as React.RefObject<Slider>;
	const navigate = useNavigate()
  
	useEffect(() => {
		category && getMovieByType(category, 1, 10).then((res) => {
			setMovies(res)
		})
	}, [])

  const gotoNext = () => {
    sliderRef.current?.slickNext();
  }

  return (
		<div className="home-slider">
      <div className="home-slider__wrapper">
        <Slider {...sliderSettings} className="home-slider__container" ref={sliderRef}>
          {movies && Object.entries(movies).map((movie: any, index: number) => {
            return (
              <div className="home-slider__slide" key={index} >
                <img loading="lazy" src={movie[1].assets.previewImage} alt=""/>
              </div>
            )
          })}
          <div className="">
            <h3 onClick={gotoNext} >1</h3>
          </div>
        </Slider>
      </div>
			{/*<button onClick={() => navigate(`/movie/${category}`)}>ужасы</button>*/}
		</div>
	)
}

export default HomeSlider