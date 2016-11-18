
/**
 * @module 		actions/wait-for-visible
 * @description Wait for the given element to become visible
 * @param 		{String} 	element Element selector
 * @param 		{String} 	not 	Whether or not to expect a visible or hidden state
 * @param 		{Function} 	done 	Function to execute when finished
 * @todo  		merge with waitfor
 */
module.exports = (
	element , 
	not 	, 
	done
) => {

	/**
	 * @description Maximum number of milliseconds to wait for
	 * @type 		{Int}
	 */
	const time = 10000;

	/**
	 * @description The element to wait for
	 * @type 		{Object}
	 */
	const elem = browser.element ( element );
	elem.waitForVisible ( 
		time , 
		not 
	);

	done ();
	
};
