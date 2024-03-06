const mongoose = require("mongoose");
// schema for component data
const componentSchema = new mongoose.Schema({
    heading: {
        type: String
    },
    paragraph: {
        type: String
    }
});

// model for component data
const componentModel = mongoose.model("ComponentData", componentSchema);
module.exports = componentModel;