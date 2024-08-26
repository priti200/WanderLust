const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log("Connected to DB");
}).catch(err =>{
    console.log(err);
})

//--------Basic API -------------
app.get("/",(req,res) => {
    res.send("Hi, I am root");
})


app.get("/testListing",async(req,res) => {
    let sampleListing = new Listing({
        title:"My Sweet Home",
        description:" A place where your heart smile.",
        price:1200,
        location:"Krishnanagar",
        country:"Nepal",
    });

   await sampleListing.save();
   console.log("sample was saved");
   res.send("Successful testing");
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});

