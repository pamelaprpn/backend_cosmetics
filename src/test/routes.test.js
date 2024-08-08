import { afterEach, beforeEach, describe, expect, it } from '@jest/globals';
import app from '../app.js';
import supertest from 'supertest';

const request = supertest;

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach( () => {
    server.close();
})

describe('GET em /produtos', () => {
    it('Deve retornar uma lista de produtos', async () => {
        const resposta = await request(app)
        .get('/produtos')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);

    expect(resposta.body[0].name).toEqual('Sabonete Líquido Casa 214 Gardênia Imperial 400ml');
    });
})

let idResposta;
describe('POST em /produtos', () => {
    it('Deve adicionar um novo produto', async () => {
        const resposta = await request(app)
            .post('/produtos')
            .send({
                name: "Açúcar Esfoliante Óleo Desodorante Nativa SPA Ameixa 200g",
                priceOld: 77.90,
                priceActual: 57.50,
                image: "./assets/produtos/esfoliante.svg",
                avaliacao: "./assets/Estrelinhas4.svg",
                categoria: "Skincare",
                lancamento: true,
            })
            .expect(201);

        idResposta = resposta._body.produto._id;
        console.log(resposta)
    });

    it('Deve adicionar nada ao passar body vazio', async () => {
        await request(app)
        .post('/produtos')
        .send({})
        .expect(400);
    })
    
});

describe('GET em /produtos/id', () => {
    it('Deve retornar o produto selecionado', async () => {
        await request(app)
        .get(`/produtos/${idResposta}`)
        .expect(200);
    })
});

describe('PUT em /produtos/id', () => {
    it('DEve alterar o campo nome', async () => {
        await request(app)
        .put(`/produtos/${idResposta}`)
        .send({name: 'Produto teste'})
        .expect(204);
    })
})

describe('DELETE em /produtos/id', () => {
    it('Deletar o produto adicionado', async () => {
        await request(app)
        .delete(`/produtos/${idResposta}`)
        .expect(200);
    })
})


