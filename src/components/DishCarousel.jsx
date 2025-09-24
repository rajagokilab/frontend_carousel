import React, { useState, useEffect, useRef } from "react";

const dishes = [
  { name: "Pasta", image: "/IMG1.jpg" },
  { name: "Smoked Meat", image: "/IMG3.jpg" },
  { name: "Burger", image: "/IMG2.jpg" },
];

const DishCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const totalSlides = dishes.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(nextSlide, 2000);
  };
  const stopAutoPlay = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#202d06] py-8 overflow-auto">
      <div
        className="relative w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 max-w-[1600px] overflow-hidden rounded-xl"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {dishes.map((dish, idx) => (
            <div key={idx} className="flex-shrink-0 w-full p-4 relative">
              <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-96 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-cover"
                />
                {/* Dish title */}
                <div className="absolute top-0 w-full p-4 text-center text-white font-bold text-lg sm:text-xl bg-black/40">
                  {dish.name}
                </div>

                {/* Arrows for the active slide */}
                {currentIndex === idx && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg text-2xl z-10 transition-opacity duration-300 opacity-70 hover:opacity-100"
                    >
                      ‹
                    </button>

                    <button
                      onClick={nextSlide}
                      className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg text-2xl z-10 transition-opacity duration-300 opacity-70 hover:opacity-100"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishCarousel;
