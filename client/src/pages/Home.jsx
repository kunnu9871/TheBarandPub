import Carousel from "../components/HomePageComponents/Carousel";
import WhatWeOffer from "../components/HomePageComponents/WhatWeOffer";
import Gallery from "../components/HomePageComponents/Gallery"


const Home = () => {
  

  return (
    <>
      <Carousel/>
      <WhatWeOffer/>
      {/* <div className="w-full h-[300px] flex">
        <div
        style={{ width: "calc(100% / 3)"}}  
        className="border-r-2 border-cBlack h-full"></div>
        <div style={{ width: "calc(100% / 3)"}} className="h-full border-r-2 border-cBlack"></div>
        <div style={{ width: "calc(100% / 3)"}} className="h-full border-r-2 border-cBlack"></div> 
      </div> */}
      <Gallery/>
    </>
  );
}

export default Home;
