const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    id: {type: Number},
    title: {type: String},
    description: {type: String, default: "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum a mauris a aliquam. Sed libero mi, hendrerit et magna sit amet, mattis feugiat metus. Curabitur non purus id neque accumsan efficitur. Donec ut turpis tristique, semper odio feugiat, fermentum elit. In eros massa, lobortis a"}
})

const Service = mongoose.model('Service', serviceSchema)
module.exports = Service