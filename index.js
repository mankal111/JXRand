/**
 * Checks if options is an object
 * @param {object} options - The options object
 * @returns {boolean} True if options is an object
 */
function checkIfOptionsIsObject(options) {
  if (typeof options === 'object') {
    return true;
  }
  throw new TypeError(`Parameter's type is '${typeof options}' but it should be 'object'.`);
}

/**
 * Checks if min and max have the required values
 * @param {object} options - The properties of the random number
 * @param {number} options.min - Minimum possible number
 * @param {number} options.max - Maximum possible number
 * @returns {boolean} True if the options object is ok
 */
function checkOptionsMinMax(options) {
  if (typeof options.min !== 'number' || typeof options.max !== 'number') {
    throw new TypeError(`The parameters 'min' and 'max' have values '${options.min}' and '${options.max}' respectively, but they should both be numbers.`);
  } else if (options.min > options.max) {
    throw new Error(`The parameter 'min' (value:${options.min}) is greater than 'max' (value:${options.max}) but 'min' should be less or equal than 'max'`);
  } else {
    return true;
  }
}

/**
 * Returns a random number
 * @param {object} options - The properties of the random number
 * @param {number} options.min - Minimum possible number
 * @param {number} options.max - Maximum possible number
 * @param {string} [options.type=float] - The type of the number
 * @returns {number} The random number
 */
function getNumber(options) {
  checkIfOptionsIsObject(options);
  checkOptionsMinMax(options);
  const type = options.type || 'float';
  let result;
  switch (type) {
    case 'float':
      result = Math.random() * (options.max - options.min) + options.min;
      break;
    case 'integer': {
      const max = Math.floor(options.max);
      const min = Math.ceil(options.min);
      result = Math.floor(Math.random() * (max - min + 1)) + min;
      break;
    }
    default:
      throw RangeError(`'${type}' is not a supported type`);
  }
  return result;
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
function getInterval(options) {
  checkIfOptionsIsObject(options);
  checkOptionsMinMax(options);
  const minLength = options.minLength || 0;
  const maxLength = options.maxLength || options.max - options.min;
  const type = options.type || 'float';
  const intervalLength = getNumber({ min: minLength, max: maxLength, type });
  const leftEndpoint = getNumber({ min: options.min, max: options.max - intervalLength, type });
  const rightEndpoint = leftEndpoint + intervalLength;
  return [leftEndpoint, rightEndpoint];
}

const JXRand = {
  getNumber,
  getInterval,
};

module.exports = JXRand;
