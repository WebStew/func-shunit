
/**
 * @module 		prompt/set
 * @description Set the text of the current prompt
 * @param 		{String} 	value 	The text to set to the prompt
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	value , 
	done
) => {
	
	try {

		browser.alertText ( value );
	}
	
	catch ( error ) {

		assert (
			error , 
			'A prompt was not open when it should have been open'
		);
	}

	done ();
	
};
