
/**
 * @module 		state/focused
 * @description Check if the given element has focus
 * @param 		{String} 	element Element selector
 * @param 		{String} 	not 	Whether to check if the given element has focus or not
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	element , 
	not 	, 
	done
) => {

	/**
	 * @description Value of the hasFocus function for the given element
	 * @type 		{Boolean}
	 */
	const hasFocus = browser.hasFocus ( element );

	if ( not ) {

		hasFocus.should.not.equal (
			true , 
			'Expected element to not be focused, but it is'
		);
	}
	
	else {

		hasFocus.should.equal ( 
			true , 
			'Expected element to be focused, but it is not'
		);
	}

	done ();
	
};
