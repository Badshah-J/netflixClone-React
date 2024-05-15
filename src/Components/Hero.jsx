import React from "react";
import InputBtn from "./InputBtn";

function Hero() {
  return (
    <div className=" md:my-48 my-42 text-white text-center">
      <h1 className="text-3xl lg:text-5xl font-black">
        Unlimited movies, TV shows and more
      </h1>
      <p className="text-xl my-5">Watch anywhere. Cancel anytime.</p>
      <InputBtn />
    </div>
  );
}

export default Hero;
