
/**
 * @module 		cookie/exists
 * @description Check if a cookie with the given name exists
 * @param 		{String} 	name 	The name of the cookie
 * @param 		{String} 	not 	Whether or not to check if the cookie exists or not
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	name 	, 
	not 	, 
	done
) => {

	/**
	 * @description The cookie as retrieved from the browser
	 * @type 		{Object}
	 */
	const cookie = browser.getCookie ( name );

	if ( not ) {

		assert.isNull (
			cookie ,
			`A cookie with the name "${name}" was found`
		);
	}
	
	else {

		assert.isNotNull (
			cookie ,
			`A cookie with the name "${name}" was not found`
		);
	}

	done ();
};
