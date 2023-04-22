import React, { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useMovie } from "../../../../hooks/useMovie";
import { sliderParameters, sliderSettings } from "../../../../types/slider.interface";
interface HomeSliderProps {
	category: string
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
    setSlider((prev) => ({...prev, sliderOffsetLeft:prev.sliderWidth / 3 - prev.sliderMargin * prev.slidesOnScreen}))
  }, [slider.sliderWidth])

  const changeSliderSize = () => {
    setSlider((prev) => ({...prev, sliderWidth: window.innerWidth > 1040 ? window.innerWidth / slider.slidesOnScreen + prev.sliderWidth / 3 / slider.slidesOnScreen : 208}))
  }

  const gotoNext = () => sliderRef.current?.slickNext();
  const gotoPrev = () => sliderRef.current?.slickPrev();

  return (
		<div className="home-slider">
      <div 
        className="home-slider__titleWrapper title-wrapper"
        onClick={() => navigate(`/movie/${category}`)}
      >
        <h2 className="title-wrapper__title" style={{paddingLeft: slider.sliderOffsetLeft}}>{category}</h2>
        <AiOutlineRight size={20} className="title-wrapper__icon"/>
      </div>
      <div className="home-slider__wrapper" style={{paddingLeft: slider.sliderOffsetLeft}}>
        <div className="home-slider__buttons" >
          <div 
            className="home-slider__button" 
            onClick={gotoPrev}
            style={{width: slider.sliderOffsetLeft}}
          >
            <BsChevronCompactLeft size={60}/>
          </div>
          <div 
            className="home-slider__button" 
            onClick={gotoNext}
            style={{width: slider.sliderOffsetLeft + 1}}
          >
            <BsChevronCompactRight size={60}/>
          </div>
        </div>
        <Slider {...sliderSettings} className="home-slider__container" ref={sliderRef}>
          {movies && Object.entries(movies).map((movie: any, index: number) => {
            return (
              <div className="home-slider__slide" key={index} style={{width: slider.sliderWidth}} >
                <div className="home-slider__border"></div>
                <img loading="lazy" src={movie[1].assets.previewImage} alt=""/>
              </div>
            )
          })}
          <div 
            onClick={() => navigate(`/movie/${category}`)}
            className="home-slider__slide home-slider__allMovieSlide slider-allMovieSlide" 
            style={{width: slider.sliderWidth}} 
          >
            <div className="slider-allMovieSlide__content">
              <div className="slider-allMovieSlide__icon">
              <FaArrowRight/>
              </div>
              <div className="slider-allMovieSlide__text">показать все</div>
            </div>
          </div>
        </Slider>
      </div>
		</div>
	)
}

export default HomeSlider