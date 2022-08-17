const express = require("express");
const app = express();

const dotenv = require('dotenv');
// dotenv.Load();
const databaseURL = process.env.DATABASE_URL;

const {MongoClient} = require("mongodb");
const createRouter = require("./helpers/create_router.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

MongoClient.connect(databaseURL, {useUnifiedTopology: true})
.then((client) => {
    const db = client.db("bookings");
    const bookingCollection = db.collection("bookings")
    const bookingRouter = createRouter(bookingCollection);
    app.use("/api/bookings", bookingRouter)
})
.catch(console.error);

app.listen(9000, function(){
    console.log(`listening on port ${ this.address().port }`)
});

