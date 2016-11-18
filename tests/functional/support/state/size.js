
/**
 * @module 		state/state
 * @description Check the size of the given element
 * @param 		{String} 	element 	Element selector
 * @param 		{String} 	not 		Whether to check if the dimensions match or not
 * @param 		{String} 	size 		Expected size
 * @param 		{String} 	dimension 	Dimension to check (width or height)
 * @param 		{Function} 	done 		Function to execute when finished
 */
module.exports = (
	element 	, 
	not 		, 
	size 		, 
	dimension 	, 
	done
) => {

	/**
	 * @description The size of the given element
	 * @type 		{Object}
	 */
	const elementSize = browser.getElementSize ( element );

	/**
	 * @description Parsed size to check for
	 * @type 		{Int}
	 */
	const intExpectedSize = parseInt ( size , 10 );

	/**
	 * @description The size property to check against
	 * @type 		{Int}
	 */
	let origionalSize = elementSize.height;

	/**
	 * @description The label of the checked property
	 * @type 		{String}
	 */
	let label = 'height';

	if ( dimension === 'broad' ) {

		origionalSize 	= elementSize.width;
		label 			= 'width';
	}

	if ( not ) {

		origionalSize.should.not.equal (
			intExpectedSize ,
			`element "${element}" should not have a ${label} of ` + `${intExpectedSize}px`
		);
	}
	
	else {
		origionalSize.should.equal (
			intExpectedSize ,
			`Element "${element}" should have a ${label} of ` + `${intExpectedSize}px, but is ${origionalSize}px`
		);
	}

	done ();

};
