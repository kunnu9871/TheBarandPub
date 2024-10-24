import Carousel from "../components/HomePageComponents/Carousel";
import WhatWeOffer from "../components/HomePageComponents/WhatWeOffer";
import Gallery from "../components/HomePageComponents/Gallery";

const Home = () => {
  return (
    <>
      <div>
        <Carousel />
        <WhatWeOffer />
        <Gallery />
      </div>
    </>
  );
};

export default Home;
