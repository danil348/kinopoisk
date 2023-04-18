import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
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
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: false,
  variableWidth: true,
  rows: 1
};

const sliderParameters = {
  sliderWidth: 340,
  sliderOffsetLeft: 170,
  sliderMargin: 5,
  slidesOnScreen: 5
}

const HomeSlider: React.FC<HomeSliderProps> = ({category}) => {
	const { getMovieByType } = useMovie()
	const [movies, setMovies] = useState<Object | null>(null)
  const sliderRef = useRef() as React.RefObject<Slider>;
	const navigate = useNavigate()
  const [slider, setSlider] = useState(sliderParameters)
  
	useEffect(() => {
		category && getMovieByType(category, 1, 10).then((res) => {
			setMovies(res)
		})

    changeSliderSize()
    window.addEventListener("resize", changeSliderSize)

    return () => {
      window.removeEventListener("resize", changeSliderSize)
    }
	}, [])

  useEffect(() => {
    setSlider((prev) => ({...prev, sliderOffsetLeft: prev.sliderWidth / 2 - prev.sliderMargin * prev.slidesOnScreen}))
  }, [slider.sliderWidth])

  const changeSliderSize = () => {
    setSlider((prev) => ({...prev, sliderWidth: window.innerWidth > 1040 ? window.innerWidth / slider.slidesOnScreen : 208}))
  }

  const gotoNext = () => sliderRef.current?.slickNext();
  const gotoPrev = () => sliderRef.current?.slickPrev();

  return (
		<div className="home-slider">
      <div className="home-slider__wrapper" style={{paddingLeft: slider.sliderOffsetLeft}}>
        <Slider {...sliderSettings} className="home-slider__container" ref={sliderRef}>
          {movies && Object.entries(movies).map((movie: any, index: number) => {
            return (
              <div className="home-slider__slide" key={index} style={{width: slider.sliderWidth}} >
                {index != 0 && index % 4 == 0 && 
                  <div className="home-slider__buttons" >
                    <div className="home-slider__button" onClick={gotoNext}>
                      <BsChevronCompactRight size={60}/>
                    </div>
                    <div className="home-slider__button" onClick={gotoPrev}>
                      <BsChevronCompactLeft size={60}/>
                    </div>
                  </div>
                }
                <img loading="lazy" src={movie[1].assets.previewImage} alt=""/>
              </div>
            )
          })}
          <div className="">
			      {<button onClick={() => navigate(`/movie/${category}`)}>ужасы</button>}
          </div>
        </Slider>
      </div>
		</div>
	)
}

export default HomeSlider