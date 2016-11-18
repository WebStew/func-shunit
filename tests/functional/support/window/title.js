
/**
 * @module 		window/title
 * @description Check the title of the current browser window
 * @param 		{Type} 		not 	Whether to check if the title matches the expected value or not
 * @param 		{Type} 		value 	The expected title
 * @param 		{Function} 	done 	Function to execute when finished
 */
module.exports = (
	not 	, 
	value 	, 
	done
) => {

	/**
	 * @description The title of the current browser window
	 * @type 		{String}
	 */
	const title = browser.getTitle ();

	if ( not ) {

		title.should.not.equal(
			value ,
			`expected title not to be "${value}"`
		);
	}
	
	else {
		
		title.should.equal(
			value ,
			`expected title to be "${value}" but found "${title}"`
		);
	}

	done ();
	
};
