/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Check whether an element is `NaN`
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	partial = require( './../lib/partial.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'partial mgf', function tests() {

	var	validationData = require( './fixtures/partial.json' ),
		data = validationData.data,
		expected = validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		}),
		k = validationData.k;

	it( 'should export a function', function test() {
		expect( partial ).to.be.a( 'function' );
	});

	it( 'should partially apply the moment-generating function for given parameter values', function test() {
		var mgf;
		mgf = partial( k );
		expect( mgf ).to.be.a( 'function' );
	});

	it( 'should return a function which evaluates the moment-generating function', function test() {
		var mgf, actual;
		mgf = partial(  k );
		for ( var i = 0; i < data.length; i++ ) {
			actual = mgf( data[ i ] );
			if ( isFiniteNumber( actual ) && isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual, expected[ i ] , 1e-14 );
			}
		}
	});

	it( 'function should return `NaN` if provided `NaN` as input', function test() {
		var mgf = partial(  k );
		assert.isTrue( isnan( mgf( NaN ) ) );
	});

	it( 'function should return `NaN` if `t >= 0.5`', function test() {
		var mgf = partial(  k );
		assert.isTrue( isnan( mgf( 0.5, k ) ) );
		assert.isTrue( isnan( mgf( 0.7, k ) ) );
	});

});
