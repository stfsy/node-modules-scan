'use strict'

const expect = require('chai').expect
const resolve = require('path').resolve

const requireType = require(resolve('lib/require-type'))
const BaseType = require(resolve('test/assets/base-info-contributor'))
const dir = resolve('test/assets')

describe('RequireType', () => {
    it('should return only subtypes', () => {
        const contributors = requireType(dir, BaseType, {excludeBaseType: true}).map(Constructor => new Constructor())
        expect(contributors.length).to.equal(2)
        contributors.forEach((contributor) => {
            expect(contributor.getName()).to.be.oneOf(['nested-empty', 'npm'])
        })
    })
    it('should include the base type, too', () => {
        const contributors = requireType(dir, BaseType).map(Constructor => new Constructor())
        expect(contributors.length).to.equal(3)
        contributors.forEach((contributor) => {
            expect(contributor.getName()).to.be.oneOf(['nested-empty', 'npm', undefined])
        })
    })
    it('should include subtypes and search in nested folders', () => {
        const contributors = requireType(resolve('test'), BaseType, {recursive: true}).map(Constructor => new Constructor())
        expect(contributors.length).to.equal(4)
        contributors.forEach((contributor) => {
            expect(contributor.getName()).to.be.oneOf(['nested-empty', 'npm', undefined])
        })
    })
    it('should not search in nested folders', () => {
        const contributors = requireType(resolve('lib'), BaseType, {recursive: false}).map(Constructor => new Constructor())
        expect(contributors.length).to.equal(0)
    })
})