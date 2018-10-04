#JXRand [![Build Status](https://travis-ci.org/mankal111/JXRand.svg?branch=master)](https://travis-ci.org/mankal111/JXRand) [![Coverage Status](https://coveralls.io/repos/github/mankal111/JXRand/badge.svg?branch=master)](https://coveralls.io/github/mankal111/JXRand?branch=master)
=========
Javascript eXtended Random number generator

## Installation

    `npm i jxrand`

## Usage

    var JXRand = require('JXRand');

    var randomInt = JXRand.getInteger(0, 10); // A random integer in the interval [0, 1]
    var randomFloat = JXRand.getFloat(0, 2); // A random float in the interval [0, 2]

## Tests

    `npm test`