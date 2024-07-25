import express from "express";
import connectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();

routes(app);





app.delete("/produtos/:id", (req, res) => {
    const index = buscaProduto(req.params.id);
    produtos.splice(index, 1);
    res.status(200).send("Produto deletado");
})



export default app;