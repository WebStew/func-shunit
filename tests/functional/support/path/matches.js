
/**
 * @module 		path/matches
 * @description Check if the current URL path matches the given path
 * @param 		{String} 	not 	Whether to check if the path matches the expected value or not
 * @param 		{String} 	path 	The expected path to match against
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	not 	, 
	path 	, 
	done
) => {

	/**
	 * @description The URL of the current browser window
	 * @type 		{String}
	 */
	let url = browser.url ().value;

	/**
	 * @description The base URL of the current browser window
	 * @type 		{Object}
	 */
	const domain = browser.options.baseUrl;

	// Remove the domain from the url
	if ( url.indexOf ( domain ) === 0 ) {

		url = url.replace ( 
			domain , 
			'' 
		);
	}

	if ( not ) {

		url.should.not.equal ( 
			path , 
			`expected path not to be "${url}"`
		);
	}
	
	else {
		url.should.equal (
			path ,
			`expected path to be "${path}" but found ` + `"${url}"`
		);
	}

	done ();
	
};
