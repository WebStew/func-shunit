
import cookie from '../support/cookie';

/** 
 * @module 		Cookies
 * @description Cookie actions and steps to build feature files with 
 */
module.exports = function () {

	/**
	 * @function 	contains
	 * @description Check to see if a named cookie has a certain value
	 * @param 		{String} name 	The name of the cookie
	 * @param 		{String} [not] 	Add "not" for false case check
	 * @param 		{String} value 	The value to check the cookie against
	 * @example 	Given | When | Then the cookie "{name}" does [{not}] contain the value "{value}"
	 */
	this.Given (
		/^the cookie "([^"]*)?" does( not)* contain the value "([^"]*)?"$/ ,
		cookie.contains
	);

	/**
	 * @function 	exists
	 * @description Check to see if a cookie exists
	 * @param 		{String} name 	The name of the cookie
	 * @param 		{String} [not] 	Add "not" for false case check
	 * @example 	Given | When | Then the cookie "{name} does [{not}] exist
	 */
	this.Given (
		/^the cookie "([^"]*)?" does( not)* exist$/ ,
		cookie.exists
	);
	
	/**
	 * @function 	reset
	 * @description Delete a named cookie
	 * @param 		{String} name The name of the cookie to delete
	 * @example 	Given | When | Then I delete the cookie "{name}"
	 */
	this.Given (
		/^I delete the cookie "([^"]*)?"$/ ,
		cookie.reset
	);

	/**
	 * @function 	set
	 * @description Set a named cookie with a custom value
	 * @param 		{String} name 	The name of the cookie to set
	 * @param 		{String} value 	The value to set on the cookie
	 * @example 	Given | When | Then I set a cookie "{name}" with the content "{value}"
	 */
	this.Given (
		/^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/ ,
		cookie.set
	);

};