const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://idrusbasha:basha@cluster0.9rih3zh.mongodb.net/?retryWrites=true&w=majority", {
    
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})