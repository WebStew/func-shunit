
/**
 * @module 		window
 * @description Window actions and assertions
 */
module.exports = {

	/**
	 * @function 	closeAll
	 * @description Close all but the first tab
	 * @param 		{String} 	type Type of object to close (window or tab)
	 * @param 		{Function} 	done Function to execute when finished
	 */
	closeAll : (
		type , 
		done
	) => {

		/**
		 * @description Get all the window handles
		 * @type 		{Object}
		 */
		const windowHandles = browser.windowHandles ().value;

		// Close all tabs but the first one
		windowHandles.forEach (( 
				handle , 
				index
			) => {

				if ( index > 0 ) {
					browser.switchTab ( handle ).close ();
				}
			}
		);

		done ();
	} ,
	
	/**
	 * @function 	close
	 * @description Close the last opened window
	 * @param 		{String} 	type Type of object to close (window or tab)
	 * @param 		{Function} 	done Function to execute when finished
	 */
	close : (
		type , 
		done 
	) => {

		const last = browser.windowHandles ().value.slice ( -1 ) [ 0 ];

		browser.window 	( last );
		browser.close 	();

		done ();
	} ,
		
	/**
	 * @function 	focus
	 * @description Focus the last opened window
	 * @param 		{String} 	type Type of object to close (window or tab)
	 * @param 		{Function} 	done Function to execute when finished
	 */
	focus : (
		type , 
		done
	) => {

		const last = browser.windowHandles ().value.slice ( -1 ) [ 0 ];

		browser.window 	( last );
		done ();
	} ,
		
	/**
	 * @function 	navigate
	 * @description Open the given URL
	 * @param 		{String} 	type Type of navigation (url or site)
	 * @param 		{String} 	page The URL to navigate to
	 * @param 		{Function} 	done Function to execute when finished
	 */
	navigate : (
		type , 
		page , 
		done
	) => {

		const url = type === 'url' ? page : browser.options.baseUrl + page;

		browser.url ( url );
		done ();	
	} ,
		
	/**
	 * function 	opened
	 * @description Check if a new window or tab is opened
	 * @param 		{String} 	obsolete 	The type of opened object (window or tab)
	 * @param 		{String} 	not 		Whether to check if a new window/tab was opened or not
	 * @param 		{Function} 	done 		Function to execute when finished
	 */
	opened : (
		obsolete 	, 
		not 		, 
		done
	) => {

		const windowHandles = browser.windowHandles ().value;

		if ( not === ' not') {

			windowHandles.length.should.equal ( 
				1 , 
				'A new window should not have not been opened'
			);
		}
		
		else {
			windowHandles.length.should.not.equal ( 
				1 , 
				'A new window has been opened'
			);
		}

		done ();
	} ,
	
	/**
	 * @function 	resize
	 * @description Resize the browser window
	 * @param 		{String} 	width 	The width of the window to resize to
	 * @param 		{String} 	height 	The height of the window to resize to
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	resize : (
		width 	, 
		height 	, 
		done
	) => {

		browser.windowHandleSize ({
			width 	: parseInt ( width 	, 10 ),
			height 	: parseInt ( height , 10 )
		});

		done ();
	} ,
	
	/**
	 * @function 	scroll
	 * @description Scroll the page to the given 
	 * @param 		{String} 	element Element selector
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	scroll : (
		element , 
		done
	) => {

		// @TODO remove this
		browser.waitForExist 	( element , 15000 	);
		browser.scroll 			( element 			);

		done ();	
	} ,

	/**
	* @function 	tab
	* @description 	Check if the given URL was opened in a new window
	* @param 		{String} 	url 		The URL to check for
	* @param 		{String} 	obsolete 	Indicator for the type (window or tab) unused
	* @param 		{Function} 	done 		Function to execute when finished
	*/
	tab : (
		url 		, 
		obsolete 	, 
		done
	) => {

		const windowHandles = browser.windowHandles ().value;

		windowHandles.length.should.not.equal ( 
			1 , 
			'A popup was not opened'
		);

		/**
		 * @description The last opened window handle
		 * @type 		{Object}
		 */
		const lastWindowHandle = windowHandles.slice ( -1 );

		// Make sure we focus on the last opened window handle
		browser.window ( lastWindowHandle [ 0 ]);

		const windowUrl = browser.url ().value;

		windowUrl.should.contain (
			url , 
			'The popup has a incorrect url'
		);

		browser.close ();
		done ();
	} ,
	
	/**
	 * @function 	title
	 * @description Check the title of the current browser window
	 * @param 		{Type} 		not 	Whether to check if the title matches the expected value or not
	 * @param 		{Type} 		value 	The expected title
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	title : (
		not 	, 
		value 	, 
		done
	) => {

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
	} ,
		
	/**
	 * @function 	url
	 * @description Check the URL of the current window
	 * @param 		{String} 	not 	Whether to check if the URL matches the expected value or not
	 * @param 		{String} 	value 	The expected URL to check against
	 * @param 		{Function} 	done 	Function to execute when finished
	 */
	url : (
		not 	, 
		value 	, 
		done
	) => {

		const url = browser.url ().value;

		if ( not ) {

			url.should.not.equal ( 
				value , 
				`expected url not to be "${url}`
			);
		}
		
		else {
			url.should.equal (
				value ,
				`expected url to be "${value}" but found "${url}"`
			);
		}

		done ();	
	}
};
