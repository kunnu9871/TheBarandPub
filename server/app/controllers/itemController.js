import { itemModal } from "../models/Item.model.js";

const allItems = async (req, res)=>{
    try {

        const dbResponse = await itemModal.find();

        res.status(200).json(dbResponse);
        
    } catch (error) {
        console.log("the error is:- ", error);
    }
};

const addItemData = async (req, res)=>{
    try {
        const {itemName,drinkType,alcoholType,quantity, imageUrl } = req.body;
        const itemDetails = {
            itemName,
            drinkType,
            alcoholType,
            quantity,
            imageUrl
        };

        if(!itemName || !drinkType || !alcoholType || !quantity || !imageUrl){
            return res.status(400).json({
                status : 'failed to add',
                message : "all fields are required"
            });
        };

        const dbRes = await itemModal.create(itemDetails);

        if(dbRes){
            return res.status(200).json(dbRes);
        }

    } catch (error) {
        return res.status(501).json({
            status: "failed",
            message: `failed to add item there is some error- ${error}`
        })
    }
};


export  {addItemData, allItems};