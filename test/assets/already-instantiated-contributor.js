'use strict'

const BaseContributor = require('./another-base-type')

class Instance extends BaseContributor {
    hello() {
        return 'world'
    }
}

module.exports = new Instance()