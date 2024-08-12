import express from "express";
import produtos from "./produtosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Produtos"));

    app.use(express.json(), produtos);
};

export default routes;