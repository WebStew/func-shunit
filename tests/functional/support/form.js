
/**
 * @module 		form
 * @description Form actions and assertions for forms
 */
module.exports = {
	
	/**
	 * @function 	clear
	 * @description Clear a given input field
	 * @param 		{String} 	element Element selector
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	clear : (
		element , 
		done 
	) => {

		browser.clearElement ( element );
		done ();
	} ,

	/**
	 * @function 	input 
	 * @description Set the value of the given input field to a new value or add a value to the
	 * 				current element value
	 * @param 		{String} 	method 	The method to use (add or set)
	 * @param 		{String} 	value 	The value to set the element to
	 * @param 		{String} 	element Element selector
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	input : (
		method 	, 
		value 	, 
		element , 
		done 
	) => {

		const command = method === 'add' ? 'addValue' : 'setValue';

		browser [ command ] ( 
			element , 
			value 
		);

		done ();	
	} ,

	/**
	 * @function 	select-by-index
	 * @description Select a option from a select element by it's index
	 * @param 		{String} 	index 		The index of the option
	 * @param 		{String} 	obsolete 	The ordinal indicator of the index (unused)
	 * @param 		{String} 	element 	Element selector
	 * @param 		{Function} 	done 		Function to execute when finished
	 * @todo  merge with selectOption
	 */
	selectByIndex : (
		index 		, 
		obsolete 	, 
		element 	, 
		done
	) => {

		const optionIndex = parseInt ( index , 10 );

		browser.selectByIndex ( 
			element , 
			optionIndex 
		);

		done ();	
	} ,

	/**
	 * @function 	select 
	 * @description Select an option of a select element
	 * @param 		{String} 	type  	Type of method to select by (name, value or text)
	 * @param 		{String} 	value 	Value to select by
	 * @param 		{String} 	element Element selector
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	select : (
		type 	, 
		value 	, 
		element , 
		done
	) => {

		const 	commandArguments = [
					element ,
					value 	,
				] ,
				select = browser.element ( element );

		let 	command = '';

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
	} ,
	
	/**
	 * @function 	selected
	 * @description Check the selected / checked state of the given element
	 * @param 		{String} 	element Element selector
	 * @param 		{String} 	not 	Whether to check if the element is selected or not
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	selected : (
		element , 
		not 	, 
		done
	) => {

		const selected = browser.isSelected ( element );

		if ( not ) {

			selected.should.not.equal(
				true , 
				`"${element}" should not be selected`
			);
		}
		
		else {

			selected.should.equal ( 
				true , 
				`"${element}" should be selected`
			);
		}

		done ();	
	} ,
		
	/**
	 * @function 	submit
	 * @description Submit the given form
	 * @param 		{String} 	form Form element selector
	 * @param 		{Function} 	done Function to execute when finished
	 */
	submit : (
		form , 
		done
	) => {

		browser.submitForm ( form );
		done ();
	}
};
