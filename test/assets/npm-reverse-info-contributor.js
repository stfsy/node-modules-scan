'use strict'

const resolve = require('path').resolve
const NpmInfoContributor = require('./npm-info-contributor')

/**
 * 
 */
class NpmReverseInfoContributor extends NpmInfoContributor {

    /**
     * 
     * @returns {string} the context this instance contributes information to
     */
    getName() {
        return 'npm'
    }

   /**
     * 
     * @returns {string} the context this instance contributes information to
     */
    getContext() {
        return 'build' 
    }

    /**
     * 
     * @returns {object} an object containing arbitrary information
     */
    getInfo() {
        const info = super.getInfo()
        return Object.keys(info).reduce((context, element) => {
            context[element] = info[element].reverse()
            return context
        }, {})
    }
}

module.exports = NpmReverseInfoContributor