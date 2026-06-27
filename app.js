const express=require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../model/Lisitng.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/test";

main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("This is root");
});

app.get("/testListing",(req,res)=>{
    let sampleListing = new Listing({
        title: "My new Villa",
        description: "By the beach",
        price: 1200,
        location: "calangute, Goa",
        country: "India",
    });

await sampleListing.save();
console.log("sample was saved");
res.send("successful testing");
});
app.listen(3030,()=>{
    console.log("server is listening to port 3030");
});