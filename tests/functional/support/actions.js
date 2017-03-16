
/**
 * @module 		actions
 * @description User actions
 */
module.exports = {

	/**
	 * @function 	click
	 * @description Perform an click action on the given element
	 * @param 		{String} 	action 	The action to perform (click or double click)
	 * @param 		{String} 	type 	Type of the element (link or selector)
	 * @param 		{String} 	element Element selector
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	click : (
		action 	, 
		type 	, 
		element , 
		done
	) => {

		const 	elem 	= type 		=== 'link' 	? `=${element}` : element ,
				method 	= action 	=== 'click' ? 'click' 		: 'doubleClick';

		browser [ method ] ( elem );
		done ();
	} ,

	/**
	 * @function 	drag
	 * @description Drag a element to a given destination
	 * @param 		{String} 	source 		The selector for the source element
	 * @param 		{String} 	destination The selector for the destination element
	 * @param 		{Function} 	done 		Function to execute when finished
	 */
	drag : (
		source 		, 
		destination , 
		done
	) => {

		browser.dragAndDrop ( 
			source , 
			destination
		);

		done ();	
	} ,

	/**
	 * @function 	keypress
	 * @description Perform a key press
	 * @param 		{String} 	key 	The key to press
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	keypress : (
		key , 
		done
	) => {

		browser.keys ( key );
		done ();
	} ,
	
	/**
	 * @function 	move
	 * @description Move to the given element with an optional offset on a X and Y position
	 * @param 		{String} 	element 	Element selector
	 * @param 		{String} 	obsolete 	If we need to add an offset this is set
	 * @param 		{String} 	x 			X coordinate to move to
	 * @param 		{String} 	y 			Y coordinate to move to
	 * @param 		{Function} 	done 		Function to execute when finished
	 */
	move : (
		element 	, 
		obsolete 	, 
		x 			, 
		y 			, 
		done
	) => {

		const 	intX = parseInt ( x , 10 ) || undefined ,
				intY = parseInt ( y , 10 ) || undefined;

		browser.moveToObject ( 
			element , 
			intX 	, 
			intY
		);

		done ();
	} ,
	
	/**
	 * @function 	pause
	 * @description Pause execution for a given number of milliseconds
	 * @param 		{String} 	time Number of milliseconds to pause
	 * @param 		{Function} 	done Function to execute when finished
	 */
	pause : (
		time , 
		done
	) => {

		const intTime = parseInt ( time , 10 );

		browser.pause ( intTime );
		done ();
	} ,

	/**
	 * @function 	waitForVisible
	 * @description Wait for the given element to become visible
	 * @param 		{String} 	element Element selector
	 * @param 		{String} 	not 	Whether or not to expect a visible or hidden state
	 * @param 		{Function} 	done 	Function to execute when finished
	 * @todo  		merge with waitfor
	 */
	waitForVisible :  (
		element , 
		not 	, 
		done
	) => {

		const 	time = 10000 ,
				elem = browser.element ( element );

		elem.waitForVisible ( 
			time , 
			not 
		);

		done ();	
	} ,

	/**
	 * @function 	wait
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
	wait : (
		element 	, 
		obsolete 	, 
		time 		, 
		waiting 	, 
		not 		, 
		state 		, 
		done
	) => {

		const intTime = parseInt ( time , 10 ) || 3000;

		let command 	= 'waitForExist' 	,
			boolNot 	= !!not 			,
			parsedState = '' 				;

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
		
	}
};
