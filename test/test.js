const { expect } = require('chai');
const { describe, it } = require('mocha');
const JXRand = require('../index');

// Not sure if this is the right way to test functions that return a random number,
// since even with an implementation error the tests may randomly pass...

describe('getNumber', () => {
  it('should throw an error if it is called without parameters', () => {
    expect(() => JXRand.getNumber()).to.throw(TypeError, "Parameter's type is 'undefined' but it should be 'object'.");
  });

  it("should throw an error if any of the 'min' and 'max' parameters is not a number", () => {
    expect(() => JXRand.getNumber({ min: 'a', max: 'z' }))
      .to.throw(TypeError, "The parameters 'min' and 'max' have values 'a' and 'z' respectively, but they should both be numbers.");
  });

  it("should throw an error if 'min' is greater than 'max'", () => {
    expect(() => JXRand.getNumber({ min: 10, max: 0 }))
      .to.throw(Error, "The parameter 'min' (value:10) is greater than 'max' (value:0) but 'min' should be less or equal than 'max'");
  });

  it('should return a number of the given type', () => {
    let result = JXRand.getNumber({ min: 0, max: 10, type: 'float' });
    expect(result).to.be.a('number');

    result = JXRand.getNumber({ min: 0, max: 10, type: 'integer' });
    expect(Number.isInteger(result)).to.equal(true);
  });

  it('should return a number in the given range', () => {
    const max = 20;
    const min = 10;
    const result = JXRand.getNumber({ min, max });
    expect(result).to.not.be.below(min);
    expect(result).to.not.be.above(max);
  });

  it("should throw an error if 'type' is not supported", () => {
    expect(() => JXRand.getInterval({ min: 0, max: 10, type: 'burger' }))
      .to.throw(RangeError, "'burger' is not a supported type");
  });
});

describe('getInterval', () => {
  it('should throw an error if it is called without parameters', () => {
    expect(() => JXRand.getInterval()).to.throw(TypeError, "Parameter's type is 'undefined' but it should be 'object'.");
  });

  it("should throw an error if any of the 'min' and 'max' parameters is not a number", () => {
    expect(() => JXRand.getInterval({ min: 'a', max: 'z' }))
      .to.throw(TypeError, "The parameters 'min' and 'max' have values 'a' and 'z' respectively, but they should both be numbers.");
  });

  it("should throw an error if 'min' is greater than 'max'", () => {
    expect(() => JXRand.getInterval({ min: 10, max: 0 }))
      .to.throw(Error, "The parameter 'min' (value:10) is greater than 'max' (value:0) but 'min' should be less or equal than 'max'");
  });

  it('should return an array', () => {
    const result = JXRand.getInterval({ min: 0, max: 10 });
    expect(result).to.be.an('array');
  });

  it('should return an array of length 2', () => {
    const result = JXRand.getInterval({ min: 0, max: 10 });
    expect(result.length).to.equal(2);
  });

  it('should return endpoints in the given range', () => {
    const max = 20;
    const min = 10;
    const result = JXRand.getInterval({ min, max });
    expect(result[0]).to.not.be.below(min);
    expect(result[0]).to.not.be.above(max);
    expect(result[1]).to.not.be.below(min);
    expect(result[1]).to.not.be.above(max);
  });

  it('should return endpoints in the given type', () => {
    let result = JXRand.getInterval({ min: 0, max: 10, type: 'float' });
    expect(result[0]).to.be.a('number');
    expect(result[1]).to.be.a('number');

    result = JXRand.getInterval({ min: 0, max: 10, type: 'integer' });
    expect(Number.isInteger(result[0])).to.equal(true);
    expect(Number.isInteger(result[1])).to.equal(true);
  });

  it('should return interval length in the given range', () => {
    const maxLength = 50;
    const minLength = 10;
    const result = JXRand.getInterval({
      min: 0, max: 100, minLength, maxLength,
    });
    expect(result[1] - result[0]).to.not.be.below(minLength);
    expect(result[1] - result[0]).to.not.be.above(maxLength);
  });

  it("should throw an error if 'type' is not supported", () => {
    expect(() => JXRand.getInterval({ min: 0, max: 10, type: 'burger' }))
      .to.throw(RangeError, "'burger' is not a supported type");
  });
});

describe('getNumber', () => {
  it('should throw an error if it is called without parameters', () => {
    expect(() => JXRand.getRandomElement(1)).to.throw(TypeError, "Parameter's type is 'number' but it should be 'array'.");
  });

  it('should return an element of the given array', () => {
    const givenArray = [1, 2, 3];
    expect(givenArray.includes(JXRand.getRandomElement(givenArray))).to.equal(true);
  });
});
