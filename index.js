'use strict';

/**
 * Returns a random integer
 * @param {number} minimum
 * @param {number} maximum
 * @return {number}
 */
const getInteger = (min, max) => 
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

/**
 * Return a random float
 * @param {number} minimum
 * @param {number} maximum
 * @return {number}
 */
const getFloat = (min, max) =>
    Math.random() * (max - min) + min;

const JXRand = {
    getInteger,
    getFloat
}

module.exports = JXRand;