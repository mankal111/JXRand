'use strict';

/**
 * Returns a random integer
 * @param {number} minimum
 * @param {number} maximum
 * @return {number}
 */
const getInteger = (min, max) => {
    if (isNaN(min) || isNaN(max)) {
        throw "Parameter is not a number!";
    } else {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }
}

/**
 * Returns a random float
 * @param {number} minimum
 * @param {number} maximum
 * @return {number}
 */
const getFloat = (min, max) => {
    if (isNaN(min) || isNaN(max)) {
        throw "Parameter is not a number!";
    } else {
        return Math.random() * (max - min) + min;
    }
}

const JXRand = {
    getInteger,
    getFloat
}

module.exports = JXRand;