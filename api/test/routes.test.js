import { afterEach, beforeEach, describe, expect, it, test, jest } from '@jest/globals';
import app from '../index.js';
import supertest from 'supertest';

const request = supertest;

let server;
beforeEach(() => {
    const port = 3001;
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
    });

    it('Deve não adicionar nada ao passar body vazio', async () => {
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
    test.each([
        ['nome', { name: "Açúcar Esfoliante Teste" }],
        ['preço antigo', { priceOld: 77.90 }],
        ['preço atual', { priceActual: 57.50 }],
        ['imagem', { image: "./assets/produtos/esfoliante.svg" }],
        ['avaliação', { avaliacao: "./assets/Estrelinhas4.svg" }],
        ['categoria', { categoria: "Skincare" }],
        ['lançamento', { lancamento: true }],
    ])('Deve alterar o campo %s', async (param) => {

        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');
        await requisicao.request(app)
            .put(`/produtos/${idResposta}`)
            .send(param)
            .expect(204);

        expect(spy).toHaveBeenCalled();
    })
})

describe('DELETE em /produtos/id', () => {
    it('Deletar o produto adicionado', async () => {
        await request(app)
        .delete(`/produtos/${idResposta}`)
        .expect(200);
    })
})


