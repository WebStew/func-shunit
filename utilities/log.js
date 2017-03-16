
const colors = require ( 'colours' );

/**
 * @module 		utilities/log
 * @description Available logging utility functions witin the application
 */

/**
 * @function 	break
 * @description Prints an empty line break
 */
exports.break = function () {
	
	console.log ();

};

/**
 * @function 	end
 * @description Prints an end of section horizitnal 
 * 				line break to the console
 */
exports.end = function () {
	
	console.log ();
	console.log ( colors.grey( '.......................................................' ));
	console.log ();

};

/**
 * @function 	set
 * @description Logs a coloured term and description message into the console
 * @param 		{String} type 			The type of message. warning | error
 * @param 		{String} term 			The term of the message
 * @param 		{String} description 	The description of the message
 */
exports.set = function ( term , description , type ) {

	let message = '';
	type 		= type || 'warning';

	switch ( type ) {

	case 'error' :
		message += colors.red ( term 		);
		message += ' : ';
		message += colors.red ( description );
		break;

	case 'success' :
		message += colors.green ( term 			);
		message += ' : ';
		message += colors.grey 	( description 	);
		break;

	case 'warning' :
		message += colors.yellow 	( term 			);
		message += ' : ';
		message += colors.grey 		( description 	);
		break;

	}

	console.log ( message );
}
	
