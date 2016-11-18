
/**
 * @module 		prompt/opened
 * @description Check if a browser prompt was opened
 * @param 		{String} 	type 	The type of modal that is expected ( alert box, confirm box or prompt )
 * @param 		{String} 	not 	Whether to check if the modal was opened or not
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	type 	, 
	not 	, 
	done
) => {

	/**
	 * @description The text of the prompt
	 * @type 		{String}
	 */
	let text = '';

	try {
		text = browser.alertText ();

		if ( not ) {

			text.not.to.equal (
				null ,
				`A ${type} was opened when it shouldn't`
			);
		}
	} 
	
	catch ( error ) {

		if ( !not ) {
			assert(
				( text === null ) ,
				`A ${type} was not opened when it should have been opened`
			);
		}
	}

	done ();

};
