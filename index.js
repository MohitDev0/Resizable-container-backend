const express = require("express");
require('dotenv').config();
require("./mongoDb");
const model = require("./model");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json());

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/", async (req, res) => {
    try {
        const allData = await model.find({});
        res.status(200).json(allData);
    }
    catch (err) {
        res.status(500).json(err, "Error in get api");
    }
})
app.get("/add", async (req, res) => {
    try {
        const addData = new model(req.body);
        await addData.save();
        res.status(200).json(addData);
    }
    catch (err) {
        res.status(500).json(err, "Error in add api");
    }
})

app.put("/update", async (req, res) => {
    try {
        await model.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true });
        const allData = await model.find({});
        res.status(200).json(allData);
    }
    catch (err) {
        res.status(500).json(err, "Error in Update api");
    }
})
app.put("/delete", async (req, res) => {
    try {
        await model.findByIdAndUpdate(req.body._id, { heading: "", paragraph: "" }, { new: true });
        const allData = await model.find({});
        res.status(200).json(allData);
    }
    catch (err) {
        res.status(500).json(err, "Error in Delete api");
    }
})



app.listen(PORT, () => {
    console.log("Backend Connected", PORT);
})
