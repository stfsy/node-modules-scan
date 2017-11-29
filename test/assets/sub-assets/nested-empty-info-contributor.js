'use strict'

const BaseContributor = require('../base-info-contributor')

/**
 * 
 * @private
 */
class NestedEmptyInfoContributor extends BaseContributor {

    /**
     * 
     * @returns {string} the name of this information contributor
     */
    getName() {
        return "nested-empty"
    }

    /**
     * 
     * @returns {string} the context this instance contributes information to
     */
    getContext() {
        return "nirvana"
    }

    /**
     * 
     * @returns {object} an object containing arbitrary information
     */
    getInfo() {
        return {}
    }
}

module.exports = NestedEmptyInfoContributor