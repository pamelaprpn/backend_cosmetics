import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get("/produtos", ProdutoController.listarProdutos);
routes.get("/produtos/:id", ProdutoController.listarProdutosPorId);
routes.post("/produtos", ProdutoController.cadastraProduto);
routes.put("/produtos/:id", ProdutoController.atualizarProduto);
routes.delete("/produtos/:id", ProdutoController.deletarProduto);

export default routes;