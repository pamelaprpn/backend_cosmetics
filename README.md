



<h1 align="center" style="font-weight: bold;">Dona de Si Cosmetics 💻</h1>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

<p align="center">
 <a href="#started">Getting Started</a> • 
 <a href="#routes">API Endpoints</a> •
 <a href="#colab">Colaboradores</a> 
</p>

<p align="center">
  <b>Projeto desenvolvido durante o programa Desenvolve da Boticário em parceria com a Alura.</b></br>
  O objetivo do desafio foi a criação de um site na seção de produtos de beleza e cosméticos.</br>
  O projeto foi desenvolvido em 3 etapas durante o programa, a primeira etapa foi a construção de site responsivo usando somente HTML e CSS, a segunda etapa a inclusão de interatividade com manipulação do DOM e a terceira etapa foi a construção de uma API e a integração com o front-end e banco de dados. 
</p>

<h2 id="started">🚀 Getting started</h2>


<h3>Pré - Requisitos</h3>

- NodeJS
- Para rodar localmente usar comandos: </br>
    npm i - para baixar dependências </br>
    npm run dev - para carregar servidor e banco de dados </br>
    npm run test - para rodar os testes de integração </br>
    Caso precise do valor da variável MONGODB_URI do arquivo .env entrar em contato </br>
- Repositório do front-end: https://github.com/pamelaprpn/cosmetics-sales.


<h2 id="routes">📍 API Endpoints</h2>

<p>Endpoint: https://backend-cosmetics-sepia.vercel.app/produtos.</p>

​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /produtos</kbd>     | Retorna produtos [response details](#get-auth-detail)
| <kbd>POST /produtos</kbd>     | Insere um novo produto [request details](#post-auth-detail)
| <kbd>PUT /produtos</kbd>     | Altera dados de um produto [request details](#put-auth-detail)
| <kbd>DELETE /produtos</kbd>     | Deleta um produto [response details](#delete-auth-detail)

<h3 id="get-auth-detail">GET /produtos</h3>

**RESPONSE**
```json
{
    "_id": "66a19acd05f961dff7bd8139",
    "name": "Fluido Selador Capilar Match Proteção dos Loiros 100ml",
    "priceOld": 60,
    "priceActual": 59.9,
    "image": "./assets/produtos/fluido_selador.svg",
    "avaliacao": "./assets/Estrelinhas4.svg",
    "categoria": "Cabelos",
    "lancamento": false
}
```

<h3 id="post-auth-detail">POST /produtos</h3>


**REQUEST**
```json
{
  
    "name": "Açúcar Esfoliante Óleo Desodorante Nativa SPA Ameixa 200g",
    "priceOld": 77.90,
    "priceActual": 57.50,
    "image": "./assets/produtos/esfoliante.svg",
    "avaliacao": "./assets/Estrelinhas4.svg",
    "categoria": "Skincare",
    "lancamento": true

}
```

**RESPONSE**
```json
{
   "message": "Criado com sucesso",
   "produto": {
        "name": "Açúcar Esfoliante Óleo Desodorante Nativa SPA Ameixa 200g",
        "priceOld": 77.90,
        "priceActual": 57.50,
        "image": "./assets/produtos/esfoliante.svg",
        "avaliacao": "./assets/Estrelinhas4.svg",
        "categoria": "Skincare",
        "lancamento": true,
        "_id": "66a19b1405f961dff7bd813f"
    }
}
```

<h3 id="put-auth-detail">PUT /produtos</h3>

<p>Endpoint: https://backend-cosmetics-sepia.vercel.app/produtos/id</p>

**REQUEST**
```json
{      
    "priceActual": 57.50,
    "lancamento": true
}
```

**RESPONSE**
```json
{
   "message": "Produto atualizado"
}
```

<h3 id="delete-auth-detail">DELETE /produtos</h3>

<p>Endpoint: https://backend-cosmetics-sepia.vercel.app/produtos/id</p>


**RESPONSE**
```json
{
   "message": "Produto excluído"
}
```

<h2 id="colab">🤝 Colaboradores</h2>

<table>
    <tr>
        <td align="center">
        <a href="#">
            <img src="https://avatars.githubusercontent.com/u/41830544?v=4" width="100px;" alt="Pamela Profile Picture"/><br>
            <sub>
            <b>Pâmela Raiane</b>
            </sub>
        </a>
        </td>
    </tr>
</table>
