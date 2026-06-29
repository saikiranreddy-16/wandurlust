const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
image: {
    filename: {
        type: String,
        default: "listingimage",
    },
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?v=1",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1501785888041-af3ef285b470?v=1" : v,
    }
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;