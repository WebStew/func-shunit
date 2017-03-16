
/**
 * @module 		prompt
 * @description Alert and confirmation prompt actions and assertions
 */
module.exports = {

	/**
	 * @function 	close
	 * @description Handle a modal
	 * @param 		{String} 	action 	Action to perform on the modal (accept, dismiss, text)
	 * @param 		{String} 	type 	Type of modal (alertbox, confirmbox, prompt)
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	close : (
		action 	, 
		type 	, 
		done
	) => {

		let command = `alert${action.slice ( 0 , 1 ).toUpperCase ()}${action.slice ( 1 )}`;

		/**
		 * Alert boxes can't be dismissed, this causes Chrome to crash during tests
		 */
		if ( type === 'alertbox' ) {

			command = 'alertAccept';
		}

		browser [ command ] ();
		done ();
	} ,

	/**
	 * @function 	contains
	 * @description Check the text of a modal
	 * @param 		{String} 	type 	The type of modal that is expected ( alertbox, confirmbox or prompt )
	 * @param 		{String} 	not 	Whether to check if the text matches or not
	 * @param 		{String} 	value 	The text to check against
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	contains : (
		type 	, 
		not 	, 
		value 	, 
		done
	) => {

		try {

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
	} ,
		
	/**
	 * @function 	opened
	 * @description Check if a browser prompt was opened
	 * @param 		{String} 	type 	The type of modal that is expected ( alert box, confirm box or prompt )
	 * @param 		{String} 	not 	Whether to check if the modal was opened or not
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	opened : (
		type 	, 
		not 	, 
		done
	) => {

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
	} ,
		
	/**
	 * @function 	set
	 * @description Set the text of the current prompt
	 * @param 		{String} 	value 	The text to set to the prompt
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	set : (
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
	}
};
