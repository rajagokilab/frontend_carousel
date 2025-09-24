import React from "react";
import DishCarousel from "./components/DishCarousel";

function App() {
  return (
    <div className="min-h-screen bg-olive-950 flex flex-col items-center py-5">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-0">
        Dishes Carousel
      </h1>
      <DishCarousel />
    </div>
  );
}

export default App;
