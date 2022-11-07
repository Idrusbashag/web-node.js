const mongoose = require("mongoose");

mongoose.connect("mongodb://idrusbasha:basha@ac-dkqtsux-shard-00-00.xp7pfy6.mongodb.net:27017,ac-dkqtsux-shard-00-01.xp7pfy6.mongodb.net:27017,ac-dkqtsux-shard-00-02.xp7pfy6.mongodb.net:27017/?ssl=true&replicaSet=atlas-954rpz-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})