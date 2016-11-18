
/**
 * @module 		actions/pause
 * @description Pause execution for a given number of milliseconds
 * @param 		{String} 	time Number of milliseconds to pause
 * @param 		{Function} 	done Function to execute when finished
 */
module.exports = (
	time , 
	done
) => {

	/**
	 * @description Number of milliseconds
	 * @type 		{Int}
	 */
	const intTime = parseInt ( time , 10 );

	browser.pause ( intTime );
	done ();
	
};
