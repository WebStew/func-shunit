
/**
 * @module 		actions/click
 * @description Perform an click action on the given element
 * @param 		{String} 	action 	The action to perform (click or double click)
 * @param 		{String} 	type 	Type of the element (link or selector)
 * @param 		{String} 	element Element selector
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	action 	, 
	type 	, 
	element , 
	done
) => {

	/**
	 * @description Element to perform the action on
	 * @type 		{String}
	 */
	const elem = type === 'link' ? `=${element}` : element;

	/**
	 * @description The method to call on the browser object
	 * @type 		{String}
	 */
	const method = action === 'click' ? 'click' : 'doubleClick';

	browser [ method ] ( elem );
	done ();
	
};
