import { useState } from "react";
import { addItem } from "../../api/items";
import ItemQuantity from "./components/ItemQuantity";
import notify from "../../utils/reactTosterNotification";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItems = () => {
  const initialState = {
    itemName: "",
    category: "",
    drinkType: "",
    alcoholType: "",
    size: [],
    itemImage: "",
  };
  const [itemDetails, setItemDetails] = useState(initialState);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      setItemDetails({ ...itemDetails, [name]: files[0] });
    } else {
      setItemDetails({
        ...itemDetails,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !itemDetails.itemName ||
      !itemDetails.drinkType ||
      !itemDetails.alcoholType ||
      itemDetails.size.length === 0 ||
      !itemDetails.itemImage
    ) {
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

    // const response = await addItem(formDataToSend);
    // if (response.status) {
    //   notify("Item added successfully", 2000, "top-center")
    //   setItemDetails(initialState);
    // }

    toast.promise(
        addItem(formDataToSend), 
        {
          pending: "Adding item, please wait...",
          success: "Item added successfully!",
          error: "Failed to add item. Please try again.",
        },
        {
          position : "top-center",
          autoClose: 3000,
          theme: "dark",
        }
      )
      .then(() => {
        setItemDetails(initialState);
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
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
          {/* set item quantity component imported form admin components... */}
          <ItemQuantity
            itemDetails={itemDetails}
            setItemDetails={setItemDetails}
          />
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
            // className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            className="block w-full text-sm rounded-lg border border-gray-300 text-slate-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </div>

        <button
          className="w-full bg-gradient-to-r from-blue-400 to-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-400 transition-all focus:outline-none focus:ring-2 focus:ring-black"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddItems;
