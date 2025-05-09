import React, { useEffect, useRef, useState } from "react";
import arrowBlack from "../../assets/arrow_black.svg"

interface CarouselItems{
    image: string;
    link: string;
}

interface ImageCarouselProps {
  items: CarouselItems[];
  reverse?: boolean;
  speed?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  items,
  reverse = false,
  speed = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationName = reverse ? "slide-loop-reverse" : "slide-loop";

  useEffect(() => {
    if (containerRef.current) {
      const firstSet = containerRef.current.querySelector(
        ".carousel-set"
      ) as HTMLDivElement;

      if (firstSet) {
        setTrackWidth(firstSet.offsetWidth);
      }
    }
  }, [items]);

  return (
    <div className="w-screen overflow-hidden select-none my-10">
      <div
        ref={containerRef}
        className="flex flex-row gap-10 whitespace-nowrap will-change-transform leading-none w-max"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          "--slide-distance": `-${trackWidth}px`,
          animationPlayState: isHovered ? "paused" : "running",
        } as React.CSSProperties}
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...Array(2)].map((_, i) => (
          <div className="carousel-set flex flex-row gap-10" key={i}>
            {items.map((item, index) => (
              <div
                  key={`${i}-${index}`}
                  className="group relative flex min-w-[450px] min-h-[300px] bg-[#C7D0D9] py-12 px-10 flex-shrink-0 rounded-sm"
                  >
                  <img
                      src={item.image}
                      alt={`Project preview ${index}`}
                      className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                  <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row bg-white text-black px-4 py-2 rounded gap-2 items-center"
                  >
                      Visit the Project
                      <img src={arrowBlack} alt="Arrow icon" />
                  </a>
                  </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;



