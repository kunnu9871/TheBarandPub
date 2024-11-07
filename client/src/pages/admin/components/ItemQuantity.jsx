import { useEffect, useState } from "react";

const ItemQuantity = ({setItemDetails}) => {
  const [quantity, setQuantity] = useState("");
  const [finalQuantity, setFinalQuantity] = useState([]);
  console.log('inside item quantity component')

  const onChangeHandler = (event) => {
    const input = event.target.value;
    const { key } = event

    if (key === "Enter" && input.length > 0) {
      setFinalQuantity((prev) => [...prev, input.trim()]);
      setQuantity("");
    } else {
      setQuantity(input.trim());
    } 
  };
  
  const removeHandler = (e) => {
    setFinalQuantity((prev) => prev.filter((_, i) => i!== Number(e.target.id)));
  };

  useEffect(() => {
    setItemDetails((prev)=> ({...prev, size : finalQuantity}));
  },[finalQuantity, setItemDetails])
  

  return (
    <div>
      <input
        type="text"
        value={quantity}
        selected = {true}
        onChange={onChangeHandler}
        onKeyDown={onChangeHandler}
        placeholder="Enter the value and press enter"
        className="w-full p-2 border outline-none rounded-md focus:ring-2 focus:ring-cyan-600"
      />
      <div className="flex flex-wrap"
        onClick={removeHandler}
      >
        {finalQuantity.length > 0 &&
          finalQuantity.map((item, index) => (
            <p key={index} className="m-2 border w-20 p-1 text-center flex justify-between gap-1 rounded-lg px-2 bg-slate-50 font-semibold">
              {item} <span id={index} 
              className="cursor-pointer border rounded-lg px-1 bg-slate-200"
              >X</span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ItemQuantity;
