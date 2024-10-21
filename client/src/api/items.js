
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


const addItem = async (bodyData) =>{
    try {
        const addItemResponse = await fetch("http://localhost:3000/admin/addItem", {
            method: "POST",
            headers: {
                "content-type": "application/json",
              },
            body: JSON.stringify(bodyData)  
        })
    
        if(!addItemResponse.ok){
             throw new error (`Error : ${addItemResponse.status}`) 
        };
        
        const addItemJsonResponse = await addItemResponse.json();
    
        return addItemJsonResponse;


    } catch (error) {
        return error;
    }
};

export  {menuItems, addItem};