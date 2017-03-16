
import form from '../support/form';

/** 
 * @module 		Forms
 * @description Form actions and steps to build feature files with 
 */
module.exports = function () {

	/**
	 * @function 	checked
	 * @description Check to see if an radio of checkbox is in checked state
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example 	Given | When | Then the checkbox "{selector}" is [{not}] checked
	 */
	this.Given (
		/^the checkbox "([^"]*)?" is( not)* checked$/ ,
		form.selected
	);

	/**
	 * @function 	clear
	 * @description Clear a form input value
	 * @param 		{String} selector The element selector to test against
	 * @example 	Given | When | Then I clear the input "{selector}"
	 */
	this.Given (
		/^I clear the input "([^"]*)?"$/ ,
		form.clear
	);
	
	/**
	 * @function 	input
	 * @description Set an input value
	 * @param 		{String} action 	The user action.
	 * 									Must be "add" or "set"
	 * @param 		{String} value 		The value to set on the input
	 * @param 		{String} selector 	The element selector to test against
	 * @example 	Given | When | Then I "{action}" "{value}" to the input "{selector}"
	 */
	this.Given (
		/^I (add|set) "([^"]*)?" to the input "([^"]*)?"$/ ,
		form.input
	);

	/**
	 * @function 	select
	 * @description Select form option by name, value or text
	 * @param 		{String} attribute 	The attribute to match the option by.
	 * 									Must be "name", "value" or "text"
	 * @param 		{String} value 		The value of the attribute to match the option by
	 * @param 		{String} selector 	The element selector to select from
	 * @example 	Given | When | Then I select the option with the "{attribute}" "{value}" from element "{selector}"	
	 */
	this.Given (
		/^I select the option with the "(name|value|text)" "([^"]*)?" from element "([^"]*)?"$/ ,
		form.select
	);
	
	/**
	 * @function 	selected
	 * @description Check to see if an option has been selected
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example 	Given | When | Then the element "{selector}" is [{not}] selected
	 */
	this.Given (
		/^the element "([^"]*)?" is( not)* selected$/ ,
		form.selected
	);

	/**
	 * @function 	selectByIndex
	 * @description Select a form option by index number
	 * @param 		{String} type 	The options index to select.
	 * 								Must be "number" and "st", "nd", "rd" or "th"
	 * @example 	Given | When | Then I select the "{type}" option for element "{selector}"
	 */
	this.Given (
		/^I select the "(\d+)(st|nd|rd|th)" option for element "([^"]*)?"$/ ,
		form.selectByIndex
	);

	/**
	 * @function 	submit
	 * @description Submit a form
	 * @param 		{String} selector The form element selector to submit
	 * @example 	Given | When | Then I submit the form "{selector}"
	 */
	this.Given (
		/^I submit the form "([^"]*)?"$/ ,
		form.submit
	);
};
