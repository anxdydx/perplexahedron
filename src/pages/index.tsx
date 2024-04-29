import React from "react";

const HeroSection = () => {
  return (
    <>
      <main className="hero-section flex flex-col justify-center items-start text-start h-[90vh] ">
        {/* <video
          src="/videos/home.mp4"
          className=" h-screen -z-10 absolute top-0 left-0 w-full
          object-cover"
          autoPlay
          loop
        /> */}
       
        <video
          autoPlay
          className=" h-screen -z-10 absolute top-0 left-0 w-full object-cover"
          loop
          playsInline
        >
          <source src="/videos/home.mp4" type="video/mp4" />
        </video>
      </main>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className="container-full flex flex-col w-full">
        <div className="header-section">
          <HeroSection />
        </div>
        <br />
        <div className="w-full h-screen second-container">
          <h1>Sometehing</h1>
        </div>
        <div className="w-full h-screen second-container">
          <h1>Sometehing</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
