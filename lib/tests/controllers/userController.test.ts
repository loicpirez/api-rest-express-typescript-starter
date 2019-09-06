import app from '../../app'
import { request, expect, use } from 'chai'
import chaiHttp = require('chai-http')
import 'mocha'

use(chaiHttp)

describe('UserController', () => {
  it('should return message on call', () => {
    return request(app).get('/')
      .then(res => {
        expect(res.body.message).to.eql('GET REQUEST OK')
      })
  })
})
