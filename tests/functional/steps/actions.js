
import click 			from '../support/actions/click';
import drag 			from '../support/actions/drag';
import keypress 		from '../support/actions/keypress';
import move 			from '../support/actions/move';
import pause 			from '../support/actions/pause';
import wait 			from '../support/actions/wait';
import waitForVisible 	from '../support/actions/wait-for-visible';

/** 
 * @module 		Actions
 * @description User actions and steps to build feature files with
 */
module.exports = function () {

	/**
	 * @function 	click
	 * @description Click on an element
	 * @param 		{String} event 		The event to trigger.
	 * 									Must be "click" or "doubleClick"
	 * @param 		{String} element 	The type of element to click on.
	 * 									Must be "link", "button" or "element"
	 * @param 		{String} selector 	The element selector to test against
	 * @example 	Given | When | Then I "{event}" on the "{type}" "{selector}"
	 */
	this.Given (
		/^I "(click|double click)" on the "(link|button|element)" "([^"]*)?"$/ ,
		click
	);

	/**
	 * @function 	drag
	 * @description Drag an element to another element
	 * @param 		{String} selector 	The element selector to drag
	 * @param 		{String} target 	The target element to drag the selector to
	 * @example 	Given | When | Then I drag element "{selector}" to element "{target}"
	 */
	this.Given (
		/^I drag element "([^"]*)?" to element "([^"]*)?"$/ ,
		drag
	);


	/**
	 * @function 	keypress
	 * @description Press a key on the keyboard
	 * @param 		{String} keycode The keycode of the keyboard button to press
	 * @example 	Given | When | Then I press "{keycode}"
	 */
	this.Given (
		/^I press "([^"]*)?"$/ ,
		keypress
	);

	/**
	 * @function 	move
	 * @description Move to a certain element with an option offset
	 * @param 		{String} selector 	The element selector to move
	 * @param 		{String} [offset] 	If an offset is required add the following
	 * 									" with an offset of Number, Number"
	 * @example 	Given | When | Then I move to element "{selector}" [{offset}]
	 */
	this.Given (
		/^I move to element "([^"]*)?"( with an offset of (\d+), (\d+))*$/ ,
		move
	);
	
	/**
	 * @function 	pause
	 * @description Pause for a certain amount of milliseconds
	 * @param 		{String} time The amount of milliseconds to pause for
	 * @example 	Given | When | Then I pause for "{time}" milliseconds
	 */
	this.Given (
		/^I pause for "(\d+)" milliseconds$/ ,
		pause
	);

	/**
	 * @function 	wait
	 * @description Wait for element to update to a required state
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [time] 	The amount of time to wait for. Must be in format "for 2000ms"
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @param 		{String} option 	The condition to wait for. Must be
	 * 									"be checked"
	 * 									"be enabled"
	 * 									"be selected"
	 * 									"be visible"
	 * 									"contain a text"
	 * 									"contain a value"
	 * 									"exist"
	 * @example 	Given | When | Then I wait on element "{selector}" [{time}] to [{not}] {option} 
	 */
	this.Given (
		/^I wait on element "([^"]*)?"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/ ,
		wait
	);

	/**
	 * @function 	waitForVisible
	 * @description Expect an element to be visible
	 * @param 		{String} selector 	The element selector to test against
	 * @param 		{String} [not] 		Add "not" for false case check
	 * @example 	Given | When | Then I expect that element "{selector}" to [{not}] become visible
	 */
	this.Given (
		/^I expect that element "([^"]*)?" to( not)* become visible$/ ,
		waitForVisible
	);

};