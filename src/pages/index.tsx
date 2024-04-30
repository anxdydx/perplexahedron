import React from "react";
import Section from "../../Components/Shared/Section";

const HeroSection = () => {
  return (
    <>
      <main>
        <Section
          className="pt-[12rem] -mt-[5.25]"
          crosses
          crossOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="hero"
        >
          <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
              <h1 className="h1 mb-6">Explore your creativity in VFX ~ gameDev. and unleash ~! 🕴</h1>
              <span className="inline-block relative">Perplexahedron</span>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
