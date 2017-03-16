
import path from '../support/path';

/**  
 * @module 		Path
 * @description Path assertions to build feature files with
 */
module.exports = function () {

	/**
	 * @function 	contains
	 * @description Check to see if the URL path contains a string
	 * @param 		{String} [not] Add "not" for false case check
	 * @param 		{String} value The value to check within the URL
	 * @example 	Given | When | Then I expect the url to [{not}] contain "{value}"
	 */
	this.Given (
		/^I expect the url to( not)* contain "([^"]*)?"$/ ,
		path.contains
	);

	/**
	 * @function 	matches
	 * @description Check to see if the URL path is matches a value
	 * @param 		{String} [not] Add "not" for false case check
	 * @param 		{String} value The value to check the URL path against
	 * @example 	Given | When | Then I expect that the path is [{not}] "{value}"	
	 */
	this.Given (
		/^I expect that the path is( not)* "([^"]*)?"$/ ,
		path.matches
	);

};