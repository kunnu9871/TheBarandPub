import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { menuItems } from "../api/items.js";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState([{}]);

  console.log(orderQuantity)

  const [type, setType] = useState("Veg");
  const isVeg = type === "Veg";

  

 const memo = useMemo(()=>{
  const apiCalling = async () => {
    // console.log('api called');
    const apiResponse = await menuItems();
    setItems(apiResponse);
  }
  return apiCalling;
 },[setItems]);

  useEffect(() => {
    memo();
  }, []);

  const manageQuantity = (id, action )=>{
    console.log(action)
    // setOrderQuantity((prevQuantity)=>{
    //     const currentQuantity = prevQuantity[id] || 0;

    //     if(action === "increment"){
    //       return {
    //        ...currentQuantity , [id]: currentQuantity + 1
    //       }
    //     };

    //     if(action === "decrement" && prevQuantity[id] > 0){

    //       return {
    //         ...currentQuantity , [id] : prevQuantity[id] - 1
    //       }
    //     };

    //     return prevQuantity;
    // })
  };

  

  // const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    // console.log(event.target);
    // dispatch(
    //   addToCart({
    //     id: event.target.id,
    //   })
    // );
  };

  return (
    <div
      id="menuPage"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      className="relative top-16 mt-2 w-full bg-cWhite grid gap-6 justify-center overflow-hidden p-8"
    >
      {items.map((data) => (
        <div
          id={data}
          key={data._id}
          className="w-full rounded-2xl overflow-hidden shadow-xl bg-white hover:-translate-y-1.5 
          ease-in-out duration-300 cursor-pointer"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              className="w-full h-40 object-fit object-center"
              src={data.imageUrl}
              alt={data.itemName}
            />
            {/* Price */}
            <div className="absolute top-2 right-2 bg-white text-gray-800 font-bold py-1 px-3 rounded shadow-md">
              ₹750
            </div>
          </div>

          <div className="p-4">
            <h2 className="font-semibold text-lg text-gray-800">
              {data.itemName}
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
                    {data.size.map((size, index) => (
                      <option key={index} value="">
                        {size}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="border-b border-gray-300 mb-4"></div>

              <div className="border-b border-gray-300 mb-4"></div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex justify-center">
              <button
                name="decrement"
                onClick={(event)=>manageQuantity(data._id, event.target.name)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                -
              </button>
              <span>{orderQuantity[data._id] || 0}</span>
              <button
                name="increment"
                onClick={(event)=>manageQuantity(data._id, event)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                +
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
