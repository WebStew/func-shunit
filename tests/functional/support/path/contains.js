
/**
 * @module 		path/contains
 * @description Check if the given string is in the URL path
 * @param 		{String} 	not 	Whether to check if the given string is in the URL path or not
 * @param 		{String} 	string The string to check for
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	not 	, 
	string 	, 
	done
) => {

	/**
	 * @description The URL of the current browser window
	 * @type 		{String}
	 */
	const url = browser.url ().value;

	if ( not ) {

		url.should.not.contain (
			string ,
			`Expected URL "${url}" not to contain ` + `"${string}"`
		);
	}
	
	else {

		url.should.contain (
			string ,
			`Expected URL "${url}" to contain "${string}"`
		);
	}

	done ();
	
};
