const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

mongoose.connect(process.env.MONGO_DB,{ useNewUrlParser: true })
.then(console.log('connecting DB'))
.catch((err) => console.log(err));


const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
});