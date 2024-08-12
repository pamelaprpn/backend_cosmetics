import mongoose  from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    priceOld: {type: Number},
    priceActual: {type: Number},
    image: {type: String},
    avaliacao: {type: String},
    categoria: {type: String},
    lancamento: {type: Boolean}
}, { versionKey: false });

const produto = mongoose.model("produtos", produtoSchema);



export default produto