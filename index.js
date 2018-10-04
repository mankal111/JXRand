'use strict';

/**
 * Returns a random integer
 * @param {number} minimum
 * @param {number} maximum
 * @return {number}
 */
const getInteger = (min, max) => 
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

const JXRand = {
    getInteger: (min, max) => getInteger(min, max)
}

export default { JXRand };