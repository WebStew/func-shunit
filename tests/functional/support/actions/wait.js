
/**
 * @module 		actions/wait
 * @description Wait for the given element to be checked, enabled, selected, visible, contain
 * 				a text, contain a value or to exist
 * @param 		{String} 	element 	Element selector
 * @param 		{String} 	obsolete 	Duration prefix (unused)
 * @param 		{String} 	time 		Wait duration (optional)
 * @param 		{String} 	waiting 	Wait for a specific state (else wait for existence)
 * @param 		{String} 	not 		Check for opposite state
 * @param 		{String} 	state 		State to check for (default existence)
 * @param 		{Function} 	done 		Function to execute when finished
 */
module.exports = (
	element 	, 
	obsolete 	, 
	time 		, 
	waiting 	, 
	not 		, 
	state 		, 
	done
) => {

	/**
	 * @description Maximum number of milliseconds to wait, default 3000
	 * @type 		{Int}
	 */
	const intTime = parseInt ( time , 10 ) || 3000;

	/**
	 * @description Command to perform on the browser object
	 * @type 		{String}
	 */
	let command = 'waitForExist';

	/**
	 * @description Boolean interpretation of the false state
	 * @type 		{Boolean}
	 */
	let boolNot = !!not;

	/**
	 * @description Parsed interpretation of the state
	 * @type 		{String}
	 */
	let parsedState = '';

	if ( waiting ) {

		parsedState = state.indexOf (' ') > -1
					? state.split (/\s/ ) [ state.split ( /\s/ ).length - 1 ]
					: state;

		// Check box checked state translates to selected state
		if ( parsedState === 'checked' ) {

			parsedState = 'selected';
		}

		command = `waitFor${parsedState [ 0 ].toUpperCase ()}` + `${parsedState.slice ( 1 )}`;
	}

	if ( typeof not === 'undefined' ) {

		boolNot = false;
	}

	browser [ command ] ( 
		element , 
		intTime , 
		boolNot
	);

	done ();
	
};
