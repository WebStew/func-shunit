
/**
 * @module 		state/exists
 * @description Check if the given element exists in the current DOM
 * @param 		{String} 	element Element element
 * @param 		{String} 	not 	Whether to check if the element exists or not
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	element , 
	not 	, 
	done
) => {

	/**
	 * @description Elements found in the DOM
	 * @type 		{Object}
	 */
	const elements = browser.elements ( element ).value;

	if ( not ) {

		expect ( elements ).to.have.length ( 
			0 , 
			`expected element "${elements}" not to exist`
		);
	}

	else {

		expect ( elements ).to.have.length.above ( 
			0 , 
			`expected element "${elements}" to exist`
		);
	}

	done ();
	
};
