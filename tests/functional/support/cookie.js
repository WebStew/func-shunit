
/**
 * @module 		cookie
 * @description Cookie actions and assertions
 */
module.exports = {

	/**
	 * @function 	contains
	 * @description Check the value of a cookie against a given value
	 * @param 		{String} 	name 	The name of the cookie
	 * @param 		{String} 	not 	Whether or not to check if the value matches or not
	 * @param 		{String} 	value 	The value to check against
	 * @param 		{Function} 	done 	Function to execute when finished
	 */	
	contains : (
		name 	,
		not 	,
		value 	,
		done
	) => {

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
	} ,
	
	/**
	 * @function 	exists
	 * @description Check if a cookie with the given name exists
	 * @param 		{String} 	name 	The name of the cookie
	 * @param 		{String} 	not 	Whether or not to check if the cookie exists or not
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	exists : (
		name 	, 
		not 	, 
		done
	) => {

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
	} ,
	
	/**
	 * @function 	reset
	 * @description Delete a cookie
	 * @param 		{String} 	name The name of the cookie to delete
	 * @param 		{Function} 	done Function to execute when finished
	 */
	reset : (
		name , 
		done
	) => {

		browser.deleteCookie ( name );
		done ();
	} ,
	
	/**
	 * @function 	set
	 * @description Set a given cookie to a given value. When the cookie does not exist it will be created
	 * @param 		{String} 	name 	The name of the cookie
	 * @param 		{String} 	value 	The value of the cookie
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	set : (
		name 	, 
		value 	, 
		done
	) => {

		browser.setCookie ({
			name 	: name ,
			value 	: value
		});

		done ();
		
	}
};
