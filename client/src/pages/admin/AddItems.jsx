import { useState } from "react";
import { addItem } from "../../api/items";

const AddItems = () => {
  const initialState = {
    itemName: "",
    drinkType: "",
    alcoholType: "",
    size: [],
    itemImage: "",
  };
  const [itemDetails, setItemDetails] = useState(initialState);


  const availableQuantity = ["30ml", "60ml", "180ml", "half", "full"];

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === "file") {
      setItemDetails({ ...itemDetails, [name]: files[0] });
    } else {
      if (type === "checkbox") {
        if (checked) {
          setItemDetails((prevState) => ({
            ...prevState,
            size: [...prevState.size, value],
          }));
        } else {
          setItemDetails((prevState) => ({
            ...prevState,
            size: prevState.size.filter((size) => size !== value),
          }));
        }
      } else {
        setItemDetails({
          ...itemDetails,
          [name]: value,
        });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!itemDetails.itemName ||!itemDetails.drinkType ||!itemDetails.alcoholType || itemDetails.size.length === 0 ||!itemDetails.itemImage) {
      alert("Please fill in all required fields");
      return;
    }

    const formDataToSend = new FormData();
    for (let key in itemDetails) {
      if (key === "size") {
        formDataToSend.append(key, JSON.stringify(itemDetails[key]));
      } else {
        formDataToSend.append(key, itemDetails[key]);
      }
    }

    const response = await addItem(formDataToSend);
    if(response.status) {
      setItemDetails(initialState)
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center mt-10">
      <div className=" w-[550px] bg-white border border-gray-300 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add Drink Item
        </h2>

        <div className="mb-4">
          <label
            htmlFor="itemName"
            className="block text-gray-700 font-medium mb-2"
          >
            Item Name
          </label>
          <input
            name="itemName"
            type="text"
            value={itemDetails.itemName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            placeholder="Enter item name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="drinkType"
            className="block text-gray-700 font-medium mb-2"
          >
            Drink Type
          </label>
          <select
            name="drinkType"
            value={itemDetails.drinkType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          >
            <option value="" disabled>
              Select a drink type
            </option>
            <option value="alcohol">Alcohol</option>
            <option value="non-alcohol">Non Alcohol</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="alcoholType"
            className="block text-gray-700 font-medium mb-2"
          >
            Alcohol Type
          </label>
          <select
            name="alcoholType"
            value={itemDetails.alcoholType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          >
            <option value="" disabled>
              Select an alcohol type
            </option>
            <option value="whiskey">Whiskey</option>
            <option value="beer">Beer</option>
            <option value="softDrink">Soft Drink</option>
          </select>
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 font-medium mb-2">Size</p>
          <div className="flex gap-8">
            {availableQuantity.map((qty, index) => (
              <div key={index} className="flex gap-2">
                <p>{qty}</p>
                <input
                  onChange={handleChange}
                  type="checkBox"
                  name={qty}
                  value={qty}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="itemImage"
            className="block text-gray-700 font-medium mb-2"
          >
            Upload Image
          </label>
          <input
            type="file"
            name="itemImage"
            accept="png, jpeg, jpg"
            id="itemImage"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
        </div>

        <button
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddItems;
