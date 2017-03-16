
/**
 * @module 		content
 * @description Assertions to make against content
 */
module.exports = {

	/**
	 * @function 	any
	 * @description Check if the given elements contains any text or not
	 * @param 		{String} 	type 		Type of element (inputfield or element)
	 * @param 		{String} 	element 	Element selector
	 * @param 		{String} 	not 	Whether to check if the content contains text or not
	 * @param 		{Function} 	done 		Function to execute when finished
	 */
	any : (
		type 	, 
		element , 
		not 	, 
		done
	) => {
		
		const 	command = ( type !== 'inputfield' ) ? 'getText' : 'getValue' ,
				text 	= browser [ command ] ( element );

		if ( not ) {
			expect ( text ).to.not.be.empty ();
		}
		
		else {
			expect ( text ).to.be.empty ();
		}

		done();
	} ,

	/**
	 * @function 	compare
	 * @description Compare the text contents of two elements with each other
	 * @param 		{String} 	element1 	Element selector for the first element
	 * @param 		{String} 	not 		Whether to check if the contents of both elements match or not
	 * @param 		{String} 	element2 	Element selector for the second element
	 * @param 		{Function} 	done 		Function to execute when finished
	 */
	compare : ( 
		element1 	, 
		not 		, 
		element2 	, 
		done
	) => {

		const 	text1 = browser.getText ( element1 ) ,
				text2 = browser.getText ( element2 ) ;

		if ( not ) {

			text1.should.not.equal ( 
				text2 , 
				`expected text not to be "${text1}"`
			);
		}
		
		else {
			text1.should.equal (
				text2 ,
				`expected text to be "${text1}" but found "${text2}"`
			);
		}

		done ();
	} ,
	
	/**
	 * @function 	contains
	 * @description Check if the given elements text is the same as the given text
	 * @param 		{String} 	type 	Type of element (inputfield or element)
	 * @param 		{String} 	element Element selector
	 * @param 		{String} 	not 	Whether to check if the content equals the given text or not
	 * @param 		{String} 	text 	The text to validate against
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	contains : (
		type 	, 
		element ,
		not 	,
		text 	,
		done
	) => {

		const 	command = ( type !== 'inputfield' ) ? 'getText' : 'getValue' ,
				value 	= browser [ command ] ( element );

		let doneCallback 	= done 	,
			expectedText 	= text 	,
			boolnot 		= !!not ;

		// Check for empty element
		if  ( !doneCallback && typeof expectedText === 'function' ) {

			doneCallback 	= expectedText;
			expectedText 	= '';
			boolnot 		= !boolnot;
		}

		if ( expectedText === undefined && not === undefined ) {

			expectedText 	= '';
			boolnot 		= true;
		}

		if ( boolnot ) {

			expectedText.should.not.equal ( value );
		} 
		
		else {
			
			expectedText.should.equal ( value );
		}

		doneCallback ();	
	}
};
