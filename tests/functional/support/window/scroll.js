
/**
 * @module 		window/scroll
 * @description Scroll the page to the given 
 * @param 		{String} 	element Element selector
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	element , 
	done
) => {

	// @TODO remove this
	browser.waitForExist 	( element , 15000 	);
	browser.scroll 			( element 			);

	done ();
	
};
