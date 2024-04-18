"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './dotbuttons'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import './base.css'


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel = () => {
//   const { slides, options } = props
  const options:  EmblaOptionsType= {};
  const initialSource = '/chattingbusiness/'
  const slides = ["home.png","setup.png", "call.png"].map((val) => {
    return (initialSource + val)
  }) //pictures go here
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)


  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((photo, index) => (
            <div className="embla__slide" key={index}>
              <img src={photo} alt={'photos of my project'} className="rounded-xl" style={{aspectRatio: "1918/917", imageRendering: "crisp-edges", width: "90%", marginTop: "20%"}}/>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel;