import React from "react";
import Section from "../../Components/Shared/Section";
import Button from "../../Components/Shared/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <main>
        <Section
          className="pt-[4rem] -mt-[2.25rem]"
          crosses
          crossOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="hero"
        >
          <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
              <h1 className="h1 mb-6">
                Not just <span>community</span>, It's a family of{" "}
                <span>
                  New age{" "}
                  <span
                    className="
                animate-pulse text-purple-400 
                "
                  >
                    Creators
                  </span>{" "}
                  and{" "}
                  <span className="animate-pulse text-violet-500">Devs</span>
                </span>
              </h1>
              <p className="body-1 max-w-3xl mx-auto mb-6 text-sm text-n-2 lg:mb-8">
                Perplexahedron is a open-suite for new age video editors, VFX
                artists, game developers, and creative thinkers. We network,
                think and build together. <span>And grow financially</span>
              </p>
              <Button href="/pricing" white>
                Get started
              </Button>
            </div>
            {/* imagery section */}
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-22">
              <div className="relative z-1 p-[0.1rem] rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                  <div className="h-[1.4rem] bg-n-10 rounded-t-[0.8rem]" />
                  <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <img
                      src="/images/hero/robot.jpg"
                      alt="Ai"
                      className="w-full scale-1.7 translate-y-[8%] md:scale-1 md:-translate-y-[10%] lg:-translate-y-[33%]"
                      width={1024}
                      height={490}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-[74%] left-1/2 w-[100%] -translate-x-1/2 md:-top-[46%] md:w-[138% lg:-top-[104%]">
                <img
                  src="/images/hero/hero-background.jpg"
                  alt="hero background"
                  className="w-full "
                />
              </div>
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
