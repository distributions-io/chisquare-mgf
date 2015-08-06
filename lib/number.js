'use strict';

// FUNCTIONS //

var pow = Math.pow;


// MGF //

/**
* FUNCTION: mgf( x, k )
*	Evaluates the moment-generating function (MGF) for a Chi-squared distribution with degrees of freedom `k` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} k - degrees of freedom
* @returns {Number} evaluated MGF
*/
function mgf( t, k ) {
	if ( t >= 0.5 ) {
		return NaN;
	}
	return pow( 1 - 2*t, -k/2 );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
