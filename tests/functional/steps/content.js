
import any 		from '../support/content/any';
import compare 	from '../support/content/compare';
import contains from '../support/content/contains';

/** 
 * @module 		Content
 * @description Content actions, assertions and steps to build feature files with 
 */
module.exports = function () {
	
	/**
	 * @function 	any
	 * @description Check to see if an element contains any text value
	 * @param 		{String} element 	The element type of the selector
	 * 									must be either "element" or "input"
	 * @param 		{String} selector 	The element selector to get the text from
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example 	Given | When | Then the "{element}" "{selector}" does [{not}] contain any text
	 */
	this.Given (
		/^the "(element|input)" "([^"]*)?" does( not)* contain any text$/ ,
		any
	);

	/**
	 * @function 	compare
	 * @description Compare an elements text content against another elements text content
	 * @param 		{String} selector1 	The element selector to get the text from
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @param 		{String} selector2 	The element selector to test the text against
	 * @example 	Given the element "{selector1}" contains [{not}] the same text as element "{selector2}"
	 */
	this.Given (
		/^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/ ,
		compare
	);
	
	/**
	 * @function 	contains
	 * @description Check to see if an element contains a text value
	 * @param 		{String} element 	The element type of the selector
	 * 									must be either "element" or "input"
	 * @param 		{String} selector 	The element selector to get the text from
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @param 		{String} value 		The value the text should be
	 * @example 	Given | When | Then the "{element}" "{selector}" does [{not}] contain the text "{value}"
	 */
	this.Given (
		/^the "(element|input)" "([^"]*)?" does( not)* contain the text "([^"]*)?"$/ ,
		contains
	);
};