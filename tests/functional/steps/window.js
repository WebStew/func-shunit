
import window from '../support/window';

/** 
 * @module 		Window
 * @description Window actions and steps to build feature files with
 */
module.exports = function () {

	/**
	 * @function 	close
	 * @description Close the last opened tab or window
	 * @param 		{String} type 	The type of window to close.
	 * 								Must be "window" or "tab"
	 * @example 	Given | When | Then I close the last opened "{type}"
	 */
	this.Given (
		/^I close the last opened "(window|tab)"$/ ,
		window.close
	);

	/**
	 * @function 	closeAll
	 * @description Close all windows and tabs apart from the first one
	 * @param 		{String} type The type of window to close "window" or "tab"
	 * @example 	Given | When | Then  I have closed all but the first "{type}"
	 */
	this.Given (
		/^I have closed all but the first "(window|tab)"$/ ,
		window.closeAll
	);

	/**
	 * @function 	focus
	 * @description Focus on the last opened window or tab
	 * @param 		{String} type 	The type of window to close.
	 * 								Must be "window" or "tab"
	 * @example 	Given | When | Then I focus the last opened "{type}"
	 */
	this.Given (
		/^I focus the last opened "(window|tab)"$/ ,
		window.focus
	);

	/**
	 * @function 	navigate
	 * @description Navigate to a URL
	 * @param 		{type} 		type	The type of address to navigate to. 
	 * 									Must be are "url" or "site"
	 * @param 		{String} 	address The path or URL you wish the test suite to navigate to
	 * @example 	Given | When | Then I open the "{type}" "{address}"
	 */
	this.Given (
		/^I open the "(url|site)" "([^"]*)?"$/ ,
		window.navigate
	);

	/**
	 * @function 	opened
	 * @description Check to see if a new tab or window opened
	 * @param 		{String} type 	The type of window. Must be "window" or "tab"
	 * @param 		{String} [not] 	Add "not" for false case check
	 * @example 	Given | Then | When a new "{type}" has [{not}] been opened
	 */
	this.Given (
		/^a new "(tab|window)" has( not)* been opened$/ ,
		window.opened
	);

	/**
	 * @function 	resize
	 * @description Resize the browser window to a custom resolution
	 * @param 		{String} width 	The width the screen should be
	 * @param 		{String} height The height the screen should be
	 * @example 	Given | When | Then I have a screen that is "{width}" by "{height}" pixels
	 */
	this.Given (
		/^I resize the screen to "([\d]+)" by "([\d]+)" pixels$/ ,
		window.resize
	);

	/**
	 * @function 	scroll
	 * @description Scroll to an element ont the page
	 * @param 		{String} selector The element selector to scroll to
	 * @example 	Given | When | Then I scroll to element "{selector}"
	 */
	this.Given (
		/^I scroll to element "([^"]*)?"$/ ,
		window.scroll
	);

	/**
	 * @function 	title
	 * @description Check the title of the current window
	 * @param 		{String} [not] Add "not" for false case check
	 * @param 		{String} title The element selector to test against
	 * @example 	Given the title is [{not}] "{title}"
	 */
	this.Given (
		/^the title is( not)* "([^"]*)?"$/ ,
		window.title
	);

	/**
	 * @example 	Given | When | Then the page url is [{not}] "{value}"
	 * @description Check the current URL of the window
	 * @function 	url
	 * @param 		{String} [not] Add "not" for false case check
	 * @param 		{String} value The value to check the URL against	
	 */
	this.Given (
		/^the page url is( not)* "([^"]*)?"$/ ,
		window.url
	);
	
	/**
	 * @function 	window
	 * @description Check to see if a URL opened in a new tab or window
	 * @param 		{String} url 	The value of the URL
	 * @param 		{String} type 	The type of window. Must be "window" or "tab"
	 * @example 	Given | When | Then I expect the url "{url}" is opened in a new "{type}"
	 */
	this.Given (
		/^I expect the url "([^"]*)?" is opened in a new "(tab|window)"$/ ,
		window.tab
	);

};