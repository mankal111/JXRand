'use strict';

const expect = require('chai').expect;
const JXRand = require('../index');

//Not sure if this is the right way to test functions that return a random number,
//since even with an implementation error the tests may randomly pass...
describe('getInteger', () => {
    it('should return an integer', () => {
        const result = JXRand.getInteger(0, 10);
        expect(Number.isInteger(result)).to.equal(true);
    });
    it('should return an integer in the given range', () => {
        const max = 20;
        const min = 10;
        const result = JXRand.getInteger(min, max);
        expect(result).to.not.be.below(min);
        expect(result).to.not.be.above(max);
    });
});

describe('getFloat', () => {
    it('should return a number', () => {
        const result = JXRand.getFloat(0, 10);
        expect(result).to.be.a('number');
    });
    it('should return an integer in the given range', () => {
        const max = 20;
        const min = 10;
        const result = JXRand.getFloat(min, max);
        expect(result).to.not.be.below(min);
        expect(result).to.not.be.above(max);
    });
});