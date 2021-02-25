const app = require('../../server/server.js')
const supertest = require('supertest')
const request = supertest(app)

it('Testing the test endpoint', async done => {
    const res = await request.get('/test')

    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Yay!')
    done()
  })