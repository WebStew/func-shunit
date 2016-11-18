
/**
 * @module 		window/close-all
 * @description Close all but the first tab
 * @param 		{String} 	type Type of object to close (window or tab)
 * @param 		{Function} 	done Function to execute when finished
 */
module.exports = (
	type , 
	done
) => {

	/**
	 * @description Get all the window handles
	 * @type 		{Object}
	 */
	const windowHandles = browser.windowHandles ().value;

	// Close all tabs but the first one
	windowHandles.forEach (( 
			handle , 
			index
		) => {

			if ( index > 0 ) {
				browser.switchTab ( handle ).close ();
			}
		}
	);

	done ();
	
};
