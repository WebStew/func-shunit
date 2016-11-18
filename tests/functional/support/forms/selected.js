
/**
 * @module 		forms/selected
 * @description Check the selected / checked state of the given element
 * @param 		{String} 	element Element selector
 * @param 		{String} 	not 	Whether to check if the element is selected or not
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	element , 
	not 	, 
	done
) => {
	
	/**
	 * @description The selected state
	 * @type 		{Boolean}
	 */
	const selected = browser.isSelected ( element );

	if ( not ) {

		selected.should.not.equal(
			true , 
			`"${element}" should not be selected`
		);
	}
	
	else {

		selected.should.equal ( 
			true , 
			`"${element}" should be selected`
		);
	}

	done ();
	
};
