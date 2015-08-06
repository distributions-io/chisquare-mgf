'use strict';

// FUNCTIONS //

var pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( k )
*	Partially applies degrees of freedom `k` and returns a function for evaluating the moment-generating function (MGF) for a Chi-squared distribution.
*
* @param {Number} k - degrees of freedom
* @returns {Function} MGF
*/
function partial( k ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a Chi-squared distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		if ( t >= 0.5 ) {
			return NaN;
		}
		return pow( 1 - 2*t, -k/2 );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
