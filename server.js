import "dotenv/config"
import app from "./api/src/index.js";

const PORT = 3000;


app.listen(PORT, () => {
    console.log("Servidor executando");
});