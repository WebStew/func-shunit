
/**
 * @module 		state/visible
 * @description Check if the given element is (not) visible
 * @param 		{String} 	element Element selector
 * @param 		{String} 	not 	Check for a visible or a hidden element
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	element , 
	not 	, 
	done
) => {

	/**
	 * @description Visible state of the give element
	 * @type 		{String}
	 */
	const visible = browser.visible ( element );

	if ( not ) {

		visible.should.not.equal ( 
			true , 
			`expected element "${element}" not to be visible`
		);
	}
	
	else {

		visible.should.equal ( 
			true , 
			`expected element "${element}" to be visible`
		);
	}

	done ();
	
};
