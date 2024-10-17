const WhatWeOffer = () => {
    const offers = [
      {
        id: 1,
        title: "Special Party",
        description: "Celebrate your special occasions with us!",
        image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=250&dpr=1",
      },
      {
        id: 2,
        title: "Live Music",
        description: "Enjoy live performances every weekend.",
        image: "https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=250&dpr=1",
      },
      {
        id: 3,
        title: "Happy Hours",
        description: "Get the best deals on drinks during our happy hours.",
        image: "https://images.pexels.com/photos/9961871/pexels-photo-9961871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=250&dpr=1",
      },
      {
        id: 4,
        title: "Private Events",
        description: "Book private events for your corporate gatherings.",
        image: "https://images.pexels.com/photos/28385131/pexels-photo-28385131/free-photo-of-karaoke-on-new-year-s-eve.jpeg?auto=compress&cs=tinysrgb&w=1260&h=250&dpr=1",
      },
    ];
  
    return (
      <div className="relative py-12 bg-white mt-6 border-2" id="offers">
        <h2 className="text-3xl text-center font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white shadow-lg rounded-md overflow-hidden 
            hover:cursor-pointer hover:translate-y-[-4px] transition-all ease-in-out duration-200">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-fill" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WhatWeOffer;
  