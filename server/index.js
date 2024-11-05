import connectDb from "./app/connection/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL;



// Data Base connection.....
connectDb(DATABASE_URL)
.then(()=>{
    app.on("error", (error)=>{
        console.log("Error: ", error);
        throw error;
    })

    app.listen(PORT, ()=>{
        console.log(`server is listening at PORT: ${PORT}`)
    });
})
.catch((err)=>{
    console.log(`There is some error failed to connect DB: ${err}`)
});

