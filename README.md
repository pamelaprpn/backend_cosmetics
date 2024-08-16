



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
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
  <b>Projeto desenvolvido durante o programa Desenvolve da Boticario. Se trata de um site de vendas de produtos de cosméticos e produtos de beleza </b>
</p>

<h2 id="started">🚀 Getting started</h2>


<h3>Pré - Requisitos</h3>

- [NodeJS]


<h2 id="routes">📍 API Endpoints</h2>

<p>Endpoint: https://backend-cosmetics-sepia.vercel.app/produtos.</p>

​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /produtos</kbd>     | retrieves user info see [response details](#get-auth-detail)
| <kbd>POST /produtos</kbd>     | authenticate user into the api see [request details](#post-auth-detail)
| <kbd>PUT /produtos</kbd>     | authenticate user into the api see [request details](#put-auth-detail)
| <kbd>DELETE /produtos</kbd>     | authenticate user into the api see [request details](#delete-auth-detail)

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
  {
    "name": "Açúcar Esfoliante Óleo Desodorante Nativa SPA Ameixa 200g",
    "priceOld": 77.90,
    "priceActual": 57.50,
    "image": "./assets/produtos/esfoliante.svg",
    "avaliacao": "./assets/Estrelinhas4.svg",
    "categoria": "Skincare",
    "lancamento": true
}
}
```

**RESPONSE**
```json
{
   "message": "Criado com sucesso",
}
```

