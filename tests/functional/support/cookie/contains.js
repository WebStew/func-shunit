
/**
 * @module 		cookie/contains
 * @description Check the value of a cookie against a given value
 * @param 		{String} 	name 	The name of the cookie
 * @param 		{String} 	not 	Whether or not to check if the value matches or not
 * @param 		{String} 	value 	The value to check against
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	name 	,
	not 	,
	value 	,
	done
) => {

	/**
	 * @description The cookie retrieved from the browser object
	 * @type 		{Object}
	 */
	const cookie = browser.getCookie ( name );

	cookie.name.should.equals ( name , `no cookie found with the name "${name}"` );

	if ( not ) {

		cookie.value.should.not.equal (
			value ,
			`expected cookie "${name}" not to have value ${value}`
		);
	} 
	
	else {

		cookie.value.should.equal (
			value ,
			`expected cookie "${name}" to have value ${value}
			but got ${cookie.value}`
		);
	}

	done ();
	
};
