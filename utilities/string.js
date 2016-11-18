
/**
 * @module 		utilities/string
 * @description Utility functions for string types
 */

/**
 * @function 	setUCFirst
 * @description Set the first letter of a string to uppercase.
 * @param 		{String} string The string to manipulate.
 * @return 		{String} The string with first letter uppercased.
 * @example
 * 		strings.setUCFirst();
 */
exports.setUCFirst = function ( string ) {

	return string.charAt ( 0 ).toUpperCase () + string.slice ( 1 );

};
