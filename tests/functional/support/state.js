
/**
 * @module 				state
 * @description 		State actions and assertions
 */
module.exports = {

	/**
	 * @function 			attribute
	 * @description 		Check the given attribute of the given element
	 * @param {String} 		css 		Whether to check for a CSS property or an attribute
	 * @param {String} 		attribute 	The name of the attribute to check
	 * @param {String} 		element 	Element selector
	 * @param {String} 		not 		Whether to check if the value of the attribute matches or not
	 * @param {String} 		value 		The value to match against
	 * @param {Function} 	done 		Function to execute when finished
	 */
	attribute : (
		css 		, 
		attribute 	, 
		element 	, 
		not 		, 
		value 		, 
		done
	) => {

		const command 	= css ? 'getCssProperty' 	: 'getAttribute' ,
			attrType 	= css ? 'CSS attribute' 	: 'Attribute';

		let attributeValue = browser [ command ] ( 
			element , 
			attribute 
		);

		if ( attribute.indexOf ( 'color' ) > -1 ) {

			attributeValue = attributeValue.value;
		}

		if ( not) {

			value.should.not.equal (
				attributeValue ,
				`${attrType} of element "${element}" should not contain ` + `"${attributeValue}"`
			);
		} 
		
		else {
			value.should.equal (
				attributeValue ,
				`${attrType} of element "${element}" should not contain ` + `"${attributeValue}", but "${value}"`
			);
		}

		done ();	
	} ,

	/**
	 * @function 	class
	 * @description Check if the given element has the given class.
	 * @param 		{String} 	element Element selector
	 * @param 		{String} 	not 	Whether to check for the class to exist or not
	 * @param 		{String} 	name 	The class name to check
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	class : ( 
		element , 
		not 	, 
		name 	, 
		done 
	) => {
		
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
	} ,

	/**
	 * @function 	enabled
	 * @description Check if the given element is enabled
	 * @param 		{String} 	element Element selector
	 * @param 		{String} 	not 	Whether to check if the given element is enabled or not
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	enabled : (
		element , 
		not 	, 
		done
	) => {

		const enabled = browser.enabled ( element );

		if ( not ) {

			enabled.should.not.equal ( 
				true , 
				`expected element "${element}" not to be enabled`
			);
		}
		
		else {
			enabled.should.equal ( 
				true , 
				`expected element "${element}" to be enabled`
			);
		}

		done ();		
	} ,
	
	/**
	 * @function 	exists
	 * @description Check if the given element exists in the current DOM
	 * @param 		{String} 	element Element element
	 * @param 		{String} 	not 	Whether to check if the element exists or not
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	exists : (
		element , 
		not 	, 
		done
	) => {

		const elements = browser.elements ( element ).value;

		if ( not ) {

			expect ( elements ).to.have.length ( 
				0 , 
				`expected element "${elements}" not to exist`
			);
		}

		else {

			expect ( elements ).to.have.length.above ( 
				0 , 
				`expected element "${elements}" to exist`
			);
		}

		done ();	
	} ,
		
	/**
	 * @function 	focused
	 * @description Check if the given element has focus
	 * @param 		{String} 	element Element selector
	 * @param 		{String} 	not 	Whether to check if the given element has focus or not
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	focused : (
		element , 
		not 	, 
		done
	) => {

		const hasFocus = browser.hasFocus ( element );

		if ( not ) {

			hasFocus.should.not.equal (
				true , 
				'Expected element to not be focused, but it is'
			);
		}
		
		else {

			hasFocus.should.equal ( 
				true , 
				'Expected element to be focused, but it is not'
			);
		}

		done ();	
	} ,
	
	/**
	 * @function 	offset
	 * @description Check the offset of the given element
	 * @param 		{String} 	element 	Element selector
	 * @param 		{String} 	not 		Whether to check if the offset matches or not
	 * @param 		{String} 	position 	The position to check against
	 * @param 		{String} 	axis 		The axis to check on (x or y)
	 * @param 		{Function} 	done 		Function to execute when finished
	 */
	offset : (
		element 	, 
		not 		, 
		position 	, 
		axis 		, 
		done
	) => {

		const 	location = browser.getLocation ( 
					element , 
					axis
				) ,
				intPosition = parseInt ( 
					position , 
					10
				);

		if ( not ) {

			location.should.not.equal (
				intPosition ,
				`element "${element}" should not be positioned at ` + `${intPosition}px on the x axis`
			);
		}
		
		else {
			location.should.equal (
				intPosition ,
				`element "${element}" should be positioned at ` + `${intPosition}px on the x axis, but was found at ` + `${location}px`
			);
		}

		done ();	
	} ,
	
	/**
	 * @function 	onscreen
	 * @description Check if the given element is visible inside the current viewport
	 * @param 		{String} 	element Element selector
	 * @param 		{String} 	not 	Whether to check if the element is visible within the current viewport or not
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	onscreen : (
		element , 
		not 	, 
		done
	) => {
		
		const isVisible = browser.isVisibleWithinViewport ( element );

		if ( not ) {

			isVisible.should.not.equal (
				true ,
				`Expected element "${element}" to be outside the viewport`
			);
		}
		
		else {
			isVisible.should.equal (
				true ,
				`Expected element "${element}" to be inside the viewport`
			);
		}

		done ();
	} ,
	
	/**
	 * @function 	size
	 * @description Check the size of the given element
	 * @param 		{String} 	element 	Element selector
	 * @param 		{String} 	not 		Whether to check if the dimensions match or not
	 * @param 		{String} 	size 		Expected size
	 * @param 		{String} 	dimension 	Dimension to check (width or height)
	 * @param 		{Function} 	done 		Function to execute when finished
	 */
	size : (
		element 	, 
		not 		, 
		size 		, 
		dimension 	, 
		done
	) => {

		const 	elementSize 	= browser.getElementSize ( element ) ,
				intExpectedSize = parseInt ( size , 10 );

		let origionalSize 	= elementSize.height ,
			label 			= 'height';

		if ( dimension === 'broad' ) {

			origionalSize 	= elementSize.width;
			label 			= 'width';
		}

		if ( not ) {

			origionalSize.should.not.equal (
				intExpectedSize ,
				`element "${element}" should not have a ${label} of ` + `${intExpectedSize}px`
			);
		}
		
		else {
			origionalSize.should.equal (
				intExpectedSize ,
				`Element "${element}" should have a ${label} of ` + `${intExpectedSize}px, but is ${origionalSize}px`
			);
		}

		done ();
	} ,
		
	/**
	 * @function 	visible
	 * @description Check if the given element is (not) visible
	 * @param 		{String} 	element Element selector
	 * @param 		{String} 	not 	Check for a visible or a hidden element
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	visible : (
		element , 
		not 	, 
		done
	) => {

		const visible = browser.visible ( element );

		if ( not ) {

			visible.should.not.equal ( 
				true , 
				`expected element "${element}" not to be visible`
			);
		}
		
		else {

			visible.should.equal ( 
				true , 
				`expected element "${element}" to be visible`
			);
		}

		done ();
	}
};
