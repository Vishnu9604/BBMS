const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/bbmsDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.error(`No connection: ${e.message}`);
});