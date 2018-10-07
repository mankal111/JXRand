'use strict';

/**
 * Returns a random number
 * @param {object} options - The properties of the random number
 * @param {number} options.min - Minimum possible number
 * @param {number} options.max - Maximum possible number
 * @param {string} [options.type=float] - The type of the number
 * @returns {number} The random number
 */
const getNumber = (options) => {
    if (typeof options !== 'object') {
        throw "Parameter is not an object";
    } else if (isNaN(options.min) || isNaN(options.max)) {
        throw "Parameter property 'min' or 'max' is not a number";
    } else if (options.min > options.max) {
        throw "Parameter property 'min' should be less or equal than 'max'";
    } else {
        const type = options.type || 'float';
        let result;

        switch (type) {
            case 'float':
                result = Math.random() * (options.max - options.min) + options.min;
                break;
            case 'integer':
                const max = Math.floor(options.max);
                const min = Math.ceil(options.min);
                result = Math.floor(Math.random() * (max - min + 1)) + min;
                break;
            default:
                throw "Not supported type";
        }
        return result;
    }
}

/**
 * Returns a random interval
 * @param {object} options - The limits of the random interval
 * @param {number} options.min - Minimum possible endpoint
 * @param {number} options.max - Maximum possible endpoint
 * @param {number} [options.minLength] - Minimum possible length
 * @param {number} [options.maxLength] - Maximum possible length
 * @param {string} [options.type=float] - The type of the endpoints
 * @returns {number[]} Array with the two endpoints of the random interval
 */
const getInterval = (options) => {
    if (typeof options !== 'object') {
        throw "Parameter is not an object";
    } else if (isNaN(options.min) || isNaN(options.max)) {
        throw "Parameter property 'min' or 'max' is not a number";
    } else if (options.min > options.max) {
        throw "Parameter property 'min' should be less or equal than 'max'";
    } else {
        const minLength = options.minLength || 0;
        const maxLength = options.maxLength || options.max - options.min;
        const type = options.type || 'float';
        let getRandomNumberFunction;
        switch (type) {
            case 'float':
                getRandomNumberFunction = getFloat;
                break;
            case 'integer':
                getRandomNumberFunction = getInteger;
                break;
            default:
                throw "Not supported type";
        }
        const intervalLength = getRandomNumberFunction(minLength, maxLength);
        const leftEndpoint = getRandomNumberFunction(options.min, options.max - intervalLength);
        const rightEndpoint = leftEndpoint + intervalLength;
        return [leftEndpoint, rightEndpoint];
    }
}

const JXRand = {
    getInteger,
    getFloat,
    getNumber,
    getInterval
}

module.exports = JXRand;