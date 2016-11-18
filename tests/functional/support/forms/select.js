
/**
 * @module 		forms/select 
 * @description Select an option of a select element
 * @param 		{String} 	type  	Type of method to select by (name, value or text)
 * @param 		{String} 	value 	Value to select by
 * @param 		{String} 	element Element selector
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	type 	, 
	value 	, 
	element , 
	done
) => {

	/**
	 * @description Arguments to pass to the selection method
	 * @type 		{Array}
	 */
	const commandArguments = [
		element ,
		value 	,
	];

	/**
	 * @description The select element
	 * @type 		{Object}
	 */
	const select = browser.element ( element );

	/**
	 * @description The method to use for selecting the option
	 * @type 		{String}
	 */
	let command = '';

	switch ( type ) {

		case 'name' 	: {
			command = 'selectByAttribute';

			// The selectByAttribute command expects the attribute name as it
			// second argument so let's add it
			commandArguments.splice ( 
				1 , 
				0 , 
				'name'
			);
			break;
		}

		case 'value' 	: {
			command = 'selectByValue';
			break;
		}

		case 'text' 	: {
			command = 'selectByVisibleText';
			break;
		}

		default 		: {
			throw new Error ( `Unknown selection type "${type}"` );
		}
	}

	select [ command ].apply ( 
		this , 
		commandArguments
	);

	done ();
	
};
