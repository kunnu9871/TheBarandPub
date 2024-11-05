
// get all menu items from API......
const menuItems = async () => {
    const allItemsResponse = await fetch('http://localhost:3000/items/allItems', {
        method: 'GET',
        headers: {
            "content-type": "application/json",
          },
    });

    const allItemsJsonResponse = await allItemsResponse.json();

    return allItemsJsonResponse;

};


const addItem = async (formData) =>{
    try {
        const addItemResponse = await fetch("http://localhost:3000/admin/addItem", {
            method: "POST",
            body: formData  
        })

    
        if(!addItemResponse){
             throw new Error (`Error : ${addItemResponse.status}`) 
        };
        
        const addItemJsonResponse = await addItemResponse.json();
    
        return addItemJsonResponse;


    } catch (error) {
        return error.message;
    }
};

export  {menuItems, addItem};