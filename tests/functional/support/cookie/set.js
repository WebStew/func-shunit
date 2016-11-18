
/**
 * @module 		cookie/set
 * @description Set a given cookie to a given value. When the cookie does not exist it will be created
 * @param 		{String} 	name 	The name of the cookie
 * @param 		{String} 	value 	The value of the cookie
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	name 	, 
	value 	, 
	done
) => {

	browser.setCookie ({
		name 	: name ,
		value 	: value
	});

	done ();
	
};
