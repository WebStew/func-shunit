
/**
 * @module 		window/url
 * @description Check the URL of the current window
 * @param 		{String} 	not 	Whether to check if the URL matches the expected value or not
 * @param 		{String} 	value 	The expected URL to check against
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	not 	, 
	value 	, 
	done
) => {

	/**
	 * @description The current browser window's URL
	 * @type 		{String}
	 */
	const url = browser.url ().value;

	if ( not ) {

		url.should.not.equal ( 
			value , 
			`expected url not to be "${url}`
		);
	}
	
	else {
		url.should.equal (
			value ,
			`expected url to be "${value}" but found "${url}"`
		);
	}

	done ();
	
};
