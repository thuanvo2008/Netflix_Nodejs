const express = require('express');
const app = express();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_)
  .then(console.log('connecting DB')
  .catch((err) => console.log(err)));
}

const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
});