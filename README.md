# JXRand [![Build Status](https://travis-ci.org/mankal111/JXRand.svg?branch=master)](https://travis-ci.org/mankal111/JXRand) [![Coverage Status](https://coveralls.io/repos/github/mankal111/JXRand/badge.svg?branch=master)](https://coveralls.io/github/mankal111/JXRand?branch=master) [![npm version](https://badge.fury.io/js/jxrand.svg)](https://badge.fury.io/js/jxrand)

Javascript eXtended Random number generator

## Installation
```
    npm i jxrand
```

## Usage
```js
    var JXRand = require('jxrand');
```

### getNumber
To get a random integer between 10 and 20:

```js
    var randomInt = JXRand.getNumber({min: 10, max: 20, type: 'integer'});
```

The `type` property is optional with a default value of `float`.
For now the supported types are `integer` and `float`.

### getInterval
To get a random interval, with integer endpoints between 0 and 100 and length between 10 and 50:

```js
    var randomInterval = JXRand.getInterval({
        min: 0,
        max: 100,
        minLength: 10,
        maxLength: 50,
        type: 'integer'
    });
```

A possible value of `randomInterval` is `[43, 75]`.

The `minLength`, `maxLength` and `type` properties are optional.

### getElement
To get a random element from a given array:

```js
    var randomElement = JXRand.getRandomElement([1, 2, 3]);
```

The `randomElement` should now contain one random element of the array.

### getRandomValuesObject
In case we want to create an object with random values in custom keys, we can use `getRandomValuesObject`.

We are using an array of objects as an argument where each object should contain the `name` of the key and the `type` of the random value.

```js
    var randomValuesObject = JXRand.getRandomValuesObject([
        { name: 'randVal1', type: { min: 1, max: 3, type: 'integer' } },
        { name: 'randVal2', type: { min: 4, max: 6, type: 'integer' } },
    ]);
```

A possible `randomValuesObject` of the preceding example is `{ randVal1: 3, randVal2: 5 }`.

## Tests
```
    npm test
```
