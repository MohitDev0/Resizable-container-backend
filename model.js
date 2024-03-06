const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
    heading: {
        type: String
    },
    paragraph: {
        type: String
    }
});

const componentModel = mongoose.model("ComponentData", componentSchema);
module.exports = componentModel;