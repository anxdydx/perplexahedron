import React from "react";
import Section from "../../Components/Shared/Section";

const pricing = () => {
  return (
    <Section className="container h-auto">
      <img
        className="m-auto aspect-[33/40] h-[80%] w-[80%] object-cover"
        src="https://wallpapers.com/images/hd/johnny-sins-tearing-shirt-tw0ott4omlhnjyk1.jpg"
        alt=""
      />
      <div className="container mt-12 text-center items-center flex flex-col">
        <h1 className="h1">Pricing</h1>
        <h1 className="h1">30 Million Dolarrr.... $</h1>
      </div>
    </Section>
  );
};

export default pricing;
