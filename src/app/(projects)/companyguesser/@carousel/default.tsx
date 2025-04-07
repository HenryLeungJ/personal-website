"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./dotbuttons";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = () => {
  //   const { slides, options } = props
  const options: EmblaOptionsType = {};
  const initialSource = "/companyguesser/";
  const slides = ["signin.png", "game.png", "game2.png", "leaderboard.png"].map(
    (val) => {
      return initialSource + val;
    }
  ); //pictures go here
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((photo, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={photo}
                alt={"photos of my project"}
                className="rounded-xl mt-12 lg:mt-32"
                style={{
                  aspectRatio: "1918/917",
                  imageRendering: "crisp-edges",
                  width: "90%",
                }}
              />
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
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Button variant="outline" disabled={true} asChild>
          <Link href="https://company-guesser.vercel.app/">Go To Website</Link>
        </Button>
      </div>
    </section>
  );
};

export default EmblaCarousel;
