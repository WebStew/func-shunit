
/**
 * @module 		state/offset
 * @description Check the offset of the given element
 * @param 		{String} 	element 	Element selector
 * @param 		{String} 	not 		Whether to check if the offset matches or not
 * @param 		{String} 	position 	The position to check against
 * @param 		{String} 	axis 		The axis to check on (x or y)
 * @param 		{Function} 	done 		Function to execute when finished
 */
module.exports = (
	element 	, 
	not 		, 
	position 	, 
	axis 		, 
	done
) => {

	/**
	 * @description Get the location of the element on the given axis
	 * @type 		{Object}
	 */
	const location = browser.getLocation ( 
		element , 
		axis
	);

	/**
	 * @description Parsed expected position
	 * @type 		{Int}
	 */
	const intPosition = parseInt ( 
		position , 
		10
	);

	if ( not ) {

		location.should.not.equal (
			intPosition ,
			`element "${element}" should not be positioned at ` + `${intPosition}px on the x axis`
		);
	}
	
	else {
		location.should.equal (
			intPosition ,
			`element "${element}" should be positioned at ` + `${intPosition}px on the x axis, but was found at ` + `${location}px`
		);
	}

	done ();
	
};
