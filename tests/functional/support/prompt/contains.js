
/**
 * @module 		prompt/contains
 * @description Check the text of a modal
 * @param 		{String} 	type 	The type of modal that is expected ( alertbox, confirmbox or prompt )
 * @param 		{String} 	not 	Whether to check if the text matches or not
 * @param 		{String} 	value 	The text to check against
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	type 	, 
	not 	, 
	value 	, 
	done
) => {

	try {

		/**
		 * @description The text of the current modal
		 * @type 		{String}
		 */
		const text = browser.alertText ();

		if ( not ) {

			text.should.not.equal ( value );
		}
		
		else {
			text.should.equal ( value );
		}
	}
	
	catch ( error ) {

		assert(
			error ,
			`A ${type} was not opened when it should have been opened`
		);
	}

	done ();

};
