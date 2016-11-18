
/**
 * @module 		state/enabled
 * @description Check if the given element is enabled
 * @param 		{String} 	element Element selector
 * @param 		{String} 	not 	Whether to check if the given element is enabled or not
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	element , 
	not 	, 
	done
) => {

	/**
	 * @description The enabled state of the given element
	 * @type 		{Boolean}
	 */
	const enabled = browser.enabled ( element );

	if ( not ) {

		enabled.should.not.equal ( 
			true , 
			`expected element "${element}" not to be enabled`
		);
	}
	
	else {
		enabled.should.equal ( 
			true , 
			`expected element "${element}" to be enabled`
		);
	}

	done ();
	
};
