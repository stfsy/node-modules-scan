'use strict'

const Module = require('../../lib/index')

const expect = require('chai').expect

describe('Module', () => {
    it('should export one key', () => {
        expect(Object.keys(Module).length).to.equal(1)
    })
    it('should export byType function', () => {
        expect(Module.byType).not.to.be.undefined
    })
})