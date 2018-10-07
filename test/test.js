'use strict';

const expect = require('chai').expect;
const JXRand = require('../index');

//Not sure if this is the right way to test functions that return a random number,
//since even with an implementation error the tests may randomly pass...
describe('getInteger', () => {
    it('should throw an error if it is called without parameters',() =>{
        expect(() => JXRand.getInteger()).to.throw('Parameter is not a number!');
    });
    it('should throw an error if at least one of the two parameters is not a number',() =>{
        expect(() => JXRand.getInteger('a','z')).to.throw('Parameter is not a number!');
    });
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
    it('should throw an error if it is called without parameters',() =>{
        expect(() => JXRand.getFloat()).to.throw('Parameter is not a number!');
    });
    it('should throw an error if at least one of the two parameters is not a number',() =>{
        expect(() => JXRand.getFloat('a','z')).to.throw('Parameter is not a number!');
    });
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

describe('getNumber', () => {
    it('should throw an error if it is called without parameters',() =>{
        expect(() => JXRand.getNumber()).to.throw('Parameter is not an object');
    });

    it("should throw an error if any of the 'min' and 'max' parameters is not a number",() =>{
        expect(() => JXRand.getNumber({min: 'a', max: 'z'}))
            .to.throw("Parameter property 'min' or 'max' is not a number");
    });

    it("should throw an error if 'min' is greater than 'max'",() =>{
        expect(() => JXRand.getNumber({min: 10, max: 0}))
            .to.throw("Parameter property 'min' should be less or equal than 'max'");
    });

    it('should return a number of the given type', () => {
        let result = JXRand.getNumber({min: 0, max: 10, type: 'float'});
        expect(result).to.be.a('number');

        result = JXRand.getNumber({min: 0, max: 10, type: 'integer'});
        expect(Number.isInteger(result)).to.equal(true);
    });

    it('should return a number in the given range', () => {
        const max = 20;
        const min = 10;
        const result = JXRand.getNumber({min, max});
        expect(result).to.not.be.below(min);
        expect(result).to.not.be.above(max);
    });

    it("should throw an error if 'type' is not supported",() =>{
        expect(() => JXRand.getInterval({min: 0, max: 10, type: 'burger'}))
            .to.throw("Not supported type");
    });
});

describe('getInterval', () => {
    it('should throw an error if it is called without parameters',() =>{
        expect(() => JXRand.getInterval()).to.throw('Parameter is not an object');
    });
    it("should throw an error if any of the 'min' and 'max' parameters is not a number",() =>{
        expect(() => JXRand.getInterval({min: 'a', max: 'z'}))
            .to.throw("Parameter property 'min' or 'max' is not a number");
    });
    it("should throw an error if 'min' is greater than 'max'",() =>{
        expect(() => JXRand.getInterval({min: 10, max: 0}))
            .to.throw("Parameter property 'min' should be less or equal than 'max'");
    });
    it('should return an array', () => {
        const result = JXRand.getInterval({min: 0, max: 10});
        expect(result).to.be.an('array');
    });
    it('should return an array of length 2', () => {
        const result = JXRand.getInterval({min: 0, max: 10});
        expect(result.length).to.equal(2);
    });
    it('should return endpoints in the given range', () => {
        const max = 20;
        const min = 10;
        const result = JXRand.getInterval({min, max});
        expect(result[0]).to.not.be.below(min);
        expect(result[0]).to.not.be.above(max);
        expect(result[1]).to.not.be.below(min);
        expect(result[1]).to.not.be.above(max);
    });
    it('should return endpoints in the given type', () => {
        let result = JXRand.getInterval({min: 0, max: 10, type: 'float'});
        expect(result[0]).to.be.a('number');
        expect(result[1]).to.be.a('number');

        result = JXRand.getInterval({min: 0, max: 10, type: 'integer'});
        expect(Number.isInteger(result[0])).to.equal(true);
        expect(Number.isInteger(result[1])).to.equal(true);
    });
    it('should return interval length in the given range', () => {
        const maxLength = 50;
        const minLength = 10;
        const result = JXRand.getInterval({min: 0, max: 100, minLength, maxLength});
        expect(result[1] - result[0]).to.not.be.below(minLength);
        expect(result[1] - result[0]).to.not.be.above(maxLength);
    });
    it("should throw an error if 'type' is not supported",() =>{
        expect(() => JXRand.getInterval({min: 0, max: 10, type: 'burger'}))
            .to.throw("Not supported type");
    });
});