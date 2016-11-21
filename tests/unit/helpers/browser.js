
require ( 'babel-register' 	) ();

var jsdom 	= require ( 'jsdom' ).jsdom ,
	globals = [
		'window' 	, 
		'navigator' , 
		'document'
	];

global.document = jsdom ( '' );
global.window 	= document.defaultView;

Object.keys ( document.defaultView ).forEach (( property ) => {

	if ( typeof global [ property ] === 'undefined' ) {

		globals.push ( property );
		global [ property ] = document.defaultView [ property ];
	}
});

global.navigator = {
	userAgent : 'node.js'
};

documentRef = document;