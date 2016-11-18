
/**
 * @module 		content/contains
 * @description Check if the given elements text is the same as the given text
 * @param 		{String} 	type 	Type of element (inputfield or element)
 * @param 		{String} 	element Element selector
 * @param 		{String} 	not 	Whether to check if the content equals the given text or not
 * @param 		{String} 	text 	The text to validate against
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	type 	, 
	element ,
	not 	,
	text 	,
	done
) => {

	/**
	 * @description The command to execute on the browser object
	 * @type 		{String}
	 */
	const command = ( type !== 'inputfield' ) ? 'getText' : 'getValue';

	/**
	 * @description The value of the text node on the element
	 * @type 		{String}
	 */
	const value = browser [ command ] ( element );

	/**
	 * @description Function to execute when finished
	 * @type 		{Function}
	 */
	let doneCallback = done;

	/**
	 * @description The expected text to validate against
	 * @type 		{String}
	 */
	let expectedText = text;

	/**
	 * @description Whether to check if the content equals the given text or not
	 * @type 		{Boolean}
	 */
	let boolnot = !!not;

	// Check for empty element
	if  ( !doneCallback && typeof expectedText === 'function' ) {

		doneCallback 	= expectedText;
		expectedText 	= '';
		boolnot 		= !boolnot;
	}

	if ( expectedText === undefined && not === undefined ) {

		expectedText 	= '';
		boolnot 		= true;
	}

	if ( boolnot ) {

		expectedText.should.not.equal ( value );
	} 
	
	else {
		
		expectedText.should.equal ( value );
	}

	doneCallback ();
	
};
