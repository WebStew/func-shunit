
/**
 * @module 		window/resize
 * @description Resize the browser window
 * @param 		{String} 	width 	The width of the window to resize to
 * @param 		{String} 	height 	The height of the window to resize to
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	width 	, 
	height 	, 
	done
) => {

	browser.windowHandleSize ({
		width 	: parseInt ( width 	, 10 ),
		height 	: parseInt ( height , 10 )
	});

	done ();

};
