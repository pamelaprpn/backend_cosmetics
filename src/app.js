import express from "express";

const app = express();
app.use(express.json());

const produtos = [
    {
        id: 1,
        produto: "sabão"
    },
    {
        id: 2,
        produto: "talco"
    }
]

function buscaProduto(id){
    return produtos.findIndex(produto => {
        return produto.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Cuso de node");
});

app.get("/produtos", (req, res) => {
    res.status(200).json(produtos)
});

app.get("/produtos/:id", (req, res) => {
    const index = buscaProduto(req.params.id);
    res.status(200).json(produtos[index]);
})

app.post("/produtos", (req, res) => {
    produtos.push(req.body);
    res.status(201).send("Produto cadastrado");
});

app.put("/produtos/:id", (req, res) => {
    const index = buscaProduto(req.params.id);
    produtos[index].produto = req.body.produto;
    res.status(200).json(produtos[index]);
})

app.delete("/produtos/:id", (req, res) => {
    const index = buscaProduto(req.params.id);
    produtos.splice(index, 1);
    res.status(200).send("Produto deletado");
})

//mongodb+srv://pamelaprpn:<password>@cluster.khhrhr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster

export default app;