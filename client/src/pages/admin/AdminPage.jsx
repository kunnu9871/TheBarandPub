import { useState } from "react"
import { addItem } from "../../api/items"

const AdminPage = () => {

    // NOTE:- must add required field to every input after testing................

    const initialState = {
        itemName : "",
        drinkType: "",
        alcoholType: "",
        quantity : [],
        imageUrl: ""
    }
    const [itemDetails, setItemDetails]= useState(initialState);

    const [availableQuantity, setAvailableQuantity] = useState({
        30 : false,
        60 : false,
        180: false,
        half : false,
        full: false
    })

    console.log(itemDetails)
    const handleChange = (event)=>{
        const id = event.target.id;
        const value = event.target.value;
        setItemDetails({
            ...itemDetails, [id]: value
        });

        console.log(id, value)
    };

    const handleSubmit = async ()=>{
        const response = await addItem(itemDetails);
        console.log(response);
    }

  return (
    <div className="w-full h-screen flex items-center justify-center mt-10">
  <div className=" w-[550px] bg-white border border-gray-300 shadow-lg rounded-lg p-8">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Drink Item</h2>
    
    <div className="mb-4">
      <label htmlFor="itemName" className="block text-gray-700 font-medium mb-2">Item Name</label>
      <input 
        id="itemName" 
        type="text" 
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
        placeholder="Enter item name"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="drinkType" className="block text-gray-700 font-medium mb-2">Drink Type</label>
      <select 
        id="drinkType" 
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
      > 
        <option value="" disabled selected>Select a drink type</option>
        <option value="alcohol">Alcohol</option>
        <option value="non-alcohol">Non Alcohol</option>
      </select>
    </div>

    <div className="mb-4">
      <label htmlFor="alcoholType" className="block text-gray-700 font-medium mb-2">Alcohol Type</label>
      <select 
        id="alcoholType"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
      >
        <option value="" disabled selected>Select a alcohol type</option>
        <option value="whiskey">Whiskey</option>
        <option value="beer">Beer</option>
      </select>
    </div>

    <div className="mb-4">
      <span className="block text-gray-700 font-medium mb-2">Quantity</span>
      <label htmlFor="quantity"> 60ml
      <input 
        type="checkbox"
        id="quantity" 
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
      />
      </label>
    </div>

    <div className="mb-4">
      <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">Image URL</label>
      <input 
        id="imageUrl" 
        type="text" 
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
        placeholder="Enter image URL"
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

  )
}

export default AdminPage