
/**
 * @module 		state/onscreen
 * @description Check if the given element is visible inside the current viewport
 * @param 		{String} 	element Element selector
 * @param 		{String} 	not 	Whether to check if the element is visible within the current viewport or not
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	element , 
	not 	, 
	done
) => {
	
	/**
	 * @description The state of visibility of the given element inside the viewport
	 * @type 		{Boolean}
	 */
	const isVisible = browser.isVisibleWithinViewport ( element );

	if ( not ) {

		isVisible.should.not.equal (
			true ,
			`Expected element "${element}" to be outside the viewport`
		);
	}
	
	else {
		isVisible.should.equal (
			true ,
			`Expected element "${element}" to be inside the viewport`
		);
	}

	done ();
	
};
