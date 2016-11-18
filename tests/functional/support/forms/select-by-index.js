
/**
 * @module 		forms/select-by-index
 * @description Select a option from a select element by it's index
 * @param 		{String} 	index 		The index of the option
 * @param 		{String} 	obsolete 	The ordinal indicator of the index (unused)
 * @param 		{String} 	element 	Element selector
 * @param 		{Function} 	done 		Function to execute when finished
 * @todo  merge with selectOption
 */
module.exports = (
	index 		, 
	obsolete 	, 
	element 	, 
	done
) => {

	/**
	 * @description The index of the option to select
	 * @type 		{Int}
	 */
	const optionIndex = parseInt ( index , 10 );

	browser.selectByIndex ( 
		element , 
		optionIndex 
	);

	done ();
	
};
