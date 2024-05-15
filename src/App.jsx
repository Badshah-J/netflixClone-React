import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Sections from "./Components/Sections";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

// import './App.css'

function App() {
  return (
    <div className="">
      <div className=' h-[600px] flex flex-col bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg")] bg-cover bg-center'>
        <div className="w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)] grid ">
          <Nav />
          <Hero></Hero>
        </div>
      </div>
      <Sections />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
