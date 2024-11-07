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
      console.log(apiResponse);
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

    if (action === "increment") {
      if (existingItem) {
        setQuantity((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setQuantity((prev) => [...prev, { id: id, quantity: 1 }]);
      }
    } else {
      if (existingItem) {
        setQuantity((prev) =>
          prev.map((item) =>
            item.id === existingItem.id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      }
    }
  };

  const handleAddToCart = (id) => {
    const selectedItem = items.find((item) => item._id === id);
    const selectedQuantity =
      quantity.find((item) => item.id === id)?.quantity || 0;
    const selectedSize = size.find((item) => item.id === id)?.size || "";

    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    if (selectedQuantity > 0) {
      dispatch(
        addToCart({
          id: selectedItem._id,
          name: selectedItem.itemName,
          itemImage: selectedItem.itemImage,
          selectedQuantity,
          selectedSize,
        })
      );
    } else {
      alert("Please select at least one quantity before adding to the cart.");
    }
  };

  return (
    <div id="menuPage" className="w-full bg-cWhite flex gap-12">
      <aside
        className="bg-white shadow-lg sm:min-w-[300px] sm:min-h-[400px] sticky top-20 sm:max-h-[600px] 
         mt-8 ml-8 rounded-3xl flex-col justify-center pt-4 px-4"
      >
        <p className="text-center font-bold text-2xl text-black mb-4">
          Category
          
        </p>

        <div id="drinks" className="mb-6">
          <p className="font-semibold text-lg text-black mb-2 bg-gray-100 rounded-md p-1">Drinks</p>
          <button className="block w-full py-2 px-4 mb-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
            Whiskey
          </button>
          <button className="block w-full py-2 px-4 mb-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
            Beer
          </button>
          <button className="block w-full py-2 px-4 mb-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
            Vodka
          </button>
          <button className="block w-full py-2 px-4 rounded-lg bg-white text-black hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
            Soft Drinks
          </button>
        </div>

        <div id="food">
          <p className="font-semibold text-lg text-black mb-2 bg-gray-100 rounded-md p-1">Food</p>
          <button className="block w-full py-2 px-4 mb-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
            Chakhna
          </button>
          <button className="block w-full py-2 px-4 mb-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
            Starter
          </button>
          <button className="block w-full py-2 px-4 mb-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
            Main Course
          </button>
          <button className="block w-full py-2 px-4 rounded-lg bg-white text-black hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
            Desserts
          </button>
        </div>
      </aside>

      {/* menu section */}
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        className="w-[80%] grid gap-6 justify-center overflow-hidden p-8"
      >
        {items.map((data) => (
          <div
            id={data._id}
            key={data._id}
            className="w-[300px] rounded-2xl overflow-hidden shadow-xl bg-white hover:-translate-y-1.5 ease-in-out duration-300 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                className="w-full h-40 object-cover object-center"
                src={data.itemImage}
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
                    {quantity.find((item) => item.id === data._id)?.quantity ||
                      0}
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
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded"
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
