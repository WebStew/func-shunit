
import state from '../support/state';

/** 
 * @module 		State
 * @description State actions, assertions and steps to build feature files with 
 */
module.exports = function () {

	/**
	 * @function 	attribute
	 * @description Check the attribute on the element has a certain value
	 * @param 		{String} [css] 		Add "CSS" to check a CSS attribute 	
	 * 									otherwise the test checks an HTML attribute
	 * @param 		{String} attribute 	The CSS/HTML attribute to check against
	 * @param 		{String} selector 	The element selector to get the attribute from
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @param 		{String} value 		The value to check the CSS/HTML attribute against
	 * @example 	Given | When | Then the [{css}] attribute "{attribute}" from element "{selector}" is [{not}] "{value}"	
	 */	
	this.Given (
		/^the( CSS)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/ ,
		state.attribute
	);

	/**
	 * @function 	class
	 * @description Check to see if an element has a certain class
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @param 		{String} value 		The name of the class
	 * @example 	Given | Then | When I expect that element "{selector}" to [{not}] have the class "{value}"
	 */
	this.Given (
		/^I expect that element "([^"]*)?" to( not)* have the class "([^"]*)?"$/ ,
		state.class
	);

	/**
	 * @function 	enabled
	 * @description Check to see if an element is enabled
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example 	Given | When | Then the element "{selector}" is [{not}] enabled
	 */
	this.Given (
		/^the element "([^"]*)?" is( not)* enabled$/ ,
		state.enabled
	);

	/**
	 * @function 	exists 
	 * @description Check to see if an element exists
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example 	Given | When | Then the element "{selector}" does [{not}] exist
	 */
	this.Given (
		/^the element "([^"]*)?" does( not)* exist$/ ,
		state.exists
	);

	/**
	 * @function 	focused
	 * @description Check to see if the element has focus
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example 	Given | When | Then I expect that element "{selector}" is [{not}] focused
	 */
	this.Given (
		/^the element "([^"]*)?" is( not)* focused$/ ,
		state.focused
	);

	/**
	 * @function 	offset
	 * @description Check that an element is at a certain position on the x or y axis
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @param 		{String} value 		The pixel value the offset should be
	 * @param 		{String} axis 		The "x" or "y" to test agaist
	 * @example 	Given | When | Then the element "{selector}" is [{not}] positioned at {value}px on the {axis} axis
	 */
	this.Given (
		/^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/ ,
		state.offset
	);

	/**
	 * @function 	onscreen
	 * @description Check to see if an element is in the viewport
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example 	Given | When | Then the element "{selector}" is [{not}] within the viewport
	 */
	this.Given (
		/^the element "([^"]*)?" is( not)* within the viewport$/ ,
		state.onscreen
	);

	/**
	 * @function 	size
	 * @description Check a width or height size on an element
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @param 		{String} dimension 	Add "height" or "width" dimension to test against
	 * @example 	Given the element "{selector}" is [{not}] {value}px in "{dimension}"
	 */
	this.Given (
		/^the element "([^"]*)?" is( not)* ([\d]+)px in "(height|width)"$/ ,
		state.size
	);

	/**
	 * @function 	visible
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example Given | When | Then the element "{selector}" is [{not}] visible 
	 */
	this.Given (
		/^the element "([^"]*)?" is( not)* visible$/ ,
		state.visible
	);
};