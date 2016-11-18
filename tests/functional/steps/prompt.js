
import close 	from '../support/prompt/close';
import contains from '../support/prompt/contains';
import opened 	from '../support/prompt/opened';
import set 		from '../support/prompt/set';

/**  
 * @module 		Prompt
 * @description Prompt actions and steps to build feature files with
 */
module.exports = function () {

	/** 
	 * @function 	action
	 * @description Accept or cancel a brower prompt
	 * @param 		{String} action The action on the prompt.
	 * 								Must be "accept" or "dismiss"
	 * @param 		{string} type 	The type of prompt.
	 * 								Must be "alert box", "confirmation box" or "prompt"
	 * @example 	Given | When | Then I "{action}" the "{type}"
	 */
	this.Given (
		/^I "(accept|dismiss)" the "(alert box|confirmation box|prompt)"$/ ,
		close
	);

	/**
	 * @function 	contains
	 * @description Check to see if a browser prompt contains a certain text value
	 * @param 		{String} type 	The type of modal to be opened 
	 * 								Must be "alert box" "confirmation box" or "prompt"
	 * @param 		{String} [not] 	Add "not" for false case check
	 * @param 		{String} value 	The value of the text string
	 * @example 	Given | When | Then the "{type}" does [{not}] contain the text "{value}"
	 */
	this.Given (
		/^the "(alert box|confirm box|prompt)" does( not)* contain the text "([^"]*)?"$/ ,
		contains
	);

	/**
	 * @function 	opened
	 * @description Check to see if a browser prompt was opened
	 * @param 		{String} type 	The type of modal to test against. 
	 * 								Must be "alert box" or "confirm box" or "prompt"
	 * @param 		{String} [not] 	Add "not" for false case check
	 * @example 	Given | When | Then a "{type}" is [{not}] opened
	 */
	this.Given (
		/^a "(alert box|confirm box|prompt)" is( not)* opened$/ ,
		opened
	);

	/**
	 * @function 	set
	 * @description Open a browser prompt with custom text value
	 * @param 		{String} value The text value to insert into the modal
	 * @example 	Given | When | Then I enter "{value}" into the prompt
	 */
	this.Given (
		/^I enter "([^"]*)?" into the prompt$/ ,
		set
	);

};