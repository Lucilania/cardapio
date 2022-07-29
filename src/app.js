
const express = require('express');
const cors = require('cors');
const menuRoutes = require("./routes/menuRoutes");
require('dotenv').config();

const app = express();
const database = require('./database/mongoConfig')
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    return res.json({ ok: true });
})
app.use("/menu",menuRoutes)


database.connect()

module.exports=app
