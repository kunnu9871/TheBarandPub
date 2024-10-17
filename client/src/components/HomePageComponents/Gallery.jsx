import imageData from "../../store/imageData.js";

const Gallery = () => {
  return (
    <>  
      <div className="py-12 bg-white" id="menu"> 
        <h2 className="text-3xl text-center font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-4">
          {imageData.map(({id, imageUrl})=> <div key={id} className="bg-white shadow-lg rounded-md overflow-hidden
          hover:cursor-pointer hover:translate-y-[-4px] transition-all ease-in-out duration-200">
            <img
              src={imageUrl}
              alt="Food Item"
              className="w-full h-60 object-cover"
            />
          </div>)}            
        </div>
      </div>
    </>
  );
};

export default Gallery;
