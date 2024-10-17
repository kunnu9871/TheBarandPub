import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Menu = () => {
  const demoArr = [1,2,3,4,5,6,7,8]
  const [size, setSize] = useState("Half");
  const [type, setType] = useState("Veg");
  const isVeg = type === "Veg";

  const dispatch = useDispatch()

  const handleAddToCart = (event)=>{
    console.log(event.target)
      dispatch(addToCart({
        id : event.target.id
      }))
  }

  return (
    <div id="menuPage"
      className="relative top-16 mt-2 w-full bg-cWhite flex flex-wrap justify-around"
    >
      {demoArr.map((data)=> (
        <div  
        id={data}  
          key={data}
          className="w-[20%] rounded-2xl overflow-hidden shadow-lg bg-white hover:-translate-y-1.5 
          ease-in-out duration-300 my-5 mx-5 cursor-pointer">
        {/* Image Section */}
        <div className="relative">
          <img
            className="w-full h-40 object-cover"
            src="https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/b3e47f55-8b08-4e2b-af36-0826e2ca734e_Primavera.jpg"
            alt="Primavera Gourmet Pizza"
          />
          {/* Price Tag */}
          <div className="absolute top-2 right-2 bg-white text-gray-800 font-bold py-1 px-3 rounded shadow-md">
            ₹549
          </div>
          {/* Favorite Icon (Placeholder) */}
          <div className="absolute top-2 left-2 text-gray-400">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 1 .11 7.77L12 21.23l-8.95-8.85a5.5 5.5 0 1 1 7.78-7.78l1.21 1.2 1.2-1.2a5.5 5.5 0 0 1 7.78 0z"></path>
            </svg>
          </div>
        </div>

        {/* Pizza Details */}
        <div className="p-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Primavera Gourmet-Pizza
          </h2>

          {/* Size Selection */}
          <div className="mt-4">
            <div className="text-gray-700 font-medium mb-2">Quantity</div>
            <div className="flex items-center mb-4">
              {/* Half Size Option */}
              <label className="inline-flex items-center mr-4">
                <select
                  name=""
                  id="quantity"
                  className="block w-full bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                >
                  <option value="">Half</option>
                  <option value="">Full</option>
                </select>
              </label>
            </div>
            <div className="border-b border-gray-300 mb-4"></div>

            {/* Veg/Non-Veg Section */}
            <div className="flex justify-between items-center mb-2">
              {/* Veg/Non-Veg Indicator */}
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    isVeg ? "bg-green-500" : "bg-red-500"
                  } mr-2`}
                ></div>
                <span className="text-gray-800">
                  {isVeg ? "Veg" : "Non-Veg"}
                </span>
              </div>

              {/* Select Type Dropdown */}
              <div className="relative">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="block w-full bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                >
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                  </svg>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 mb-4"></div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex justify-center">
            <button 
             onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Menu;
