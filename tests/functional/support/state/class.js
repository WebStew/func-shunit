
/**
 * @module 		state/class
 * @description Check if the given element has the given class.
 * @param 		{String} 	element Element selector
 * @param 		{String} 	not 	Whether to check for the class to exist or not
 * @param 		{String} 	name 	The class name to check
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports =  ( 
	element , 
	not 	, 
	name 	, 
	done 
) => {
	
	/**
	 * @description List of all the classes of the element
	 * @type 		{Array}
	 */
	const classesList = browser.getAttribute ( element , 'className' ).split ( ' ' );

	if ( not ) {

		expect ( classesList ).to.not.include (
			name ,
			`Element ${element} should not have the class ${name}`
		);
	} 
	
	else {

		expect ( classesList ).to.include (
			name ,
			`Element ${element} should have the class ${name}`
		);
	}

	done ();
};
