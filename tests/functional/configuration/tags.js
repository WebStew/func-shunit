
/**
 * @module 		configuration/tags
 * @description Parse the tags from the CLI to pass to Cucumber
 * @return 		{Array} The tags to process
 */
module.exports = (() => {

	// This is required since this file is not parsed with Babel
	'use strict'; 

	/**
	 * @description The tags to pass to the cucumber options
	 * @type 		{Array}
	 */
	// Always ignore @Pending tags
	let tags = [ '~@Pending' ]; 

	process.argv.forEach (( value ) => {

		if  (value.indexOf ( '--tags=' ) === 0 ) {

			/**
			 * @description The collected tags from the CLI param
			 * @type 		{String}
			 */
			const collected = value.replace ( '--tags=' , '' 	);
			tags 			= tags.concat 	( collected 		);
		}
	});

	return tags;

}) ();
