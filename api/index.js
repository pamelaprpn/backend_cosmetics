import express from "express";
import connectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import 'dotenv/config';

const conexao = await connectaNaDatabase();

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log("Servidor executando");
});

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})


routes(app);

export default app;