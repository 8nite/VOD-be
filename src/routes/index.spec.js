import request from 'supertest'
import { noCallThru } from 'proxyquire'
import express from 'express'
import expect from 'expect'

const proxyquire = noCallThru().noPreserveCache();
const ProxyFunc = proxyquire('./', {}).default;

describe('Router Index functions', () => {
    let app

    beforeEach(() => {
        app = express();
        app.use(ProxyFunc)
    });

    it('check get on default url', (done) => {
        request(app).get('/').send({})
            .expect(200)
            .end(done)
    })

    it('Return Json', (done) => {
        request(app).get('/')
            .send({})
            .expect('Content-Type', /json/)
            .end(done)
    })

    it('Check Filter', (done) => {
        request(app).get('/?filter=movies-comedy')
            .send()
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.body.entries.every((entry) => entry.categories.some((category) => category.id === 'movies-comedy'))).toEqual(true) 
                done()
            })
    })
})