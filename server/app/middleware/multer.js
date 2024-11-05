import multer from "multer";

const storage = multer.diskStorage({
    destination : (req, file, callBack) => {
        callBack(null, "./public/temp")
    },

    filename: (req, file, callBack)=>{
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e4)}`
        callBack(null, `${file.fieldname}-${uniqueName}.${file.originalname.split(".").pop()}`)
    }
});

export const upload = multer({storage,});

