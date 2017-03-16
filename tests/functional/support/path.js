

/**
 * @module 		path
 * @description URL path assertions
 */
module.exports = {
	
	/**
	 * @function 	contains
	 * @description Check if the given string is in the URL path
	 * @param 		{String} 	not 	Whether to check if the given string is in the URL path or not
	 * @param 		{String} 	string The string to check for
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	contains : (
		not 	, 
		string 	, 
		done
	) => {

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
	} ,

	/**
	 * @function 	matches
	 * @description Check if the current URL path matches the given path
	 * @param 		{String} 	not 	Whether to check if the path matches the expected value or not
	 * @param 		{String} 	path 	The expected path to match against
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	matches : (
		not 	, 
		path 	, 
		done
	) => {

		let 	url 	= browser.url ().value;
		const 	domain 	= browser.options.baseUrl;

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
	}
};
