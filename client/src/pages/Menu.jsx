import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/cartSlice";
import { menuItems } from "../api/items.js";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [size, setSize] = useState([]);

  const dispatch = useDispatch();

  const select = useSelector((state) => state.cart);

  const memo = useMemo(() => {
    const apiCalling = async () => {
      const apiResponse = await menuItems();
      setItems(apiResponse);
    };
    return apiCalling;
  }, [setItems]);

  useEffect(() => {
    memo();
  }, [memo]);


  const handleSize = (id, value) => {
    const existingItem = size.find((item) => item.id === id);

    if (existingItem) {
      setSize((prev) =>
        prev.map((item) => (item.id === id ? { ...item, size: value } : item))
      );
    } else {
      setSize((prev) => [...prev, { id: id, size: value }]);
    }
  };

  const handleQuantity = (id, action) => {
    const existingItem = quantity.find((item) => item.id === id);

    if(action === "increment"){
      if (existingItem) {
        setQuantity((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      }else{
         setQuantity((prev)=> [...prev, {id:id, quantity : 1}])
      };
    }else{
      if (existingItem) {
        setQuantity((prev) =>
          prev.map((item) =>
            (item.id === existingItem.id && item.quantity > 0) ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
    }
  };

  const handleAddToCart = (id) => {
    const selectedItem = items.find((item) => item._id === id);
    const selectedQuantity = quantity.find((item) => item.id === id)?.quantity || 0;
    const selectedSize = size.find((item)=> item.id === id)?.size || '';

    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    if (selectedQuantity > 0) {
      dispatch(
        addToCart({
          id: selectedItem._id,
          name: selectedItem.itemName,
          imageUrl: selectedItem.imageUrl,
          selectedQuantity,
          selectedSize,
        })
      );
    } else {
      alert("Please select at least one quantity before adding to the cart.");
    }
  };

  return (
    <div
      id="menuPage"
      className="w-full bg-cWhite flex gap-12"
    >

      {/* left side filter menu */} 
      <aside
        className="border-2 border-black sm:min-w-[300px] sm:min-h-[400px] sticky top-20 sm:max-h-[600px] mt-8 ml-8 rounded-3xl" 
      ></aside>

      {/* menu section */} 
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
        className="sm:w-3/4 grid gap-6 justify-center overflow-hidden p-8"
      >
        {items.map((data) => (
          <div
            id={data._id}
            key={data._id}
            className="w-full rounded-2xl overflow-hidden shadow-xl bg-white hover:-translate-y-1.5 ease-in-out duration-300 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                className="w-full h-40 object-fit object-center"
                src={data.imageUrl}
                alt={data.itemName}
              />
            </div>

            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800">
                {data.itemName}
              </h2>

              {/* Size Selection */}
              <div className="mt-4">
                <div className="text-gray-700 font-medium mb-2">Size</div>
                <div className="flex items-center mb-4">
                  <label className="inline-flex items-center mr-4">
                    <select
                      onChange={(e) => handleSize(data._id, e.target.value)}
                      className="block w-full bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Size</option>
                      {data.size.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              {/* Add / Remove quantity & add to cart button */}
              <div className="flex justify-between">
                <div className="border border-gray-500 min-w-[100px] rounded-2xl flex items-center px-4 justify-between">
                  <button
                    name="decrement"
                    onClick={(e) => handleQuantity(data._id, e.target.name)}
                    className="text-black font-bold text-2xl"
                  >
                    -
                  </button>
                  <span className="text-black font-bold text-xl">
                    {quantity.find((item) => item.id === data._id)?.quantity || 0}
                  </span>
                  <button
                    name="increment"
                    onClick={(e) => handleQuantity(data._id, e.target.name)}
                    className="text-black font-bold text-2xl"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleAddToCart(data._id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
