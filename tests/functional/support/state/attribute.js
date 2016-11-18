
/**
 * @module 				state/attribute
 * @description 		Check the given attribute of the given element
 * @param {String} 		css 		Whether to check for a CSS property or an attribute
 * @param {String} 		attribute 	The name of the attribute to check
 * @param {String} 		element 	Element selector
 * @param {String} 		not 		Whether to check if the value of the attribute matches or not
 * @param {String} 		value 		The value to match against
 * @param {Function} 	done 		Function to execute when finished
 */
module.exports = (
	css 		, 
	attribute 	, 
	element 	, 
	not 		, 
	value 		, 
	done
) => {

	/**
	 * @description The command to use for fetching the expected value
	 * @type 		{String}
	 */
	const command = css ? 'getCssProperty' : 'getAttribute';

	/**
	 * @description The label to identify the attribute by
	 * @type 		{String}
	 */
	const attrType = css ? 'CSS attribute' : 'Attribute';

	/**
	 * @description The actual attribute value
	 * @type 		{Mixed}
	 */
	let attributeValue = browser [ command ] ( 
		element , 
		attribute 
	);

	/**
	 * when getting something with a color WebdriverIO returns a color
	 * object but we want to assert against a string
	 */
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
	
};
