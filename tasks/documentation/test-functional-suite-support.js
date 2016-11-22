
const shell 	= require ( 'shelljs' 						) ,
	messages 	= require ( '../../configuration/strings' 	) ,
	log 		= require ( '../../utilities/log' 			) ,
	string 		= require ( '../../utilities/string' 		) ,
	strings 	= {
		clean 		: 'Cleaning Functional Test Suite Support Documentation' 	,
		generate 	: 'Generating Functional Test Suite Support Documentation' 	, 
		off 		: string.setUCFirst ( messages.finished ) 					,
		on 			: string.setUCFirst ( messages.started 	)
	};

// Clean the functional test suite folder
log.set 	( strings.on , strings.clean 								);
log.end 	(); 
shell.exec 	( 'rimraf ./documentation/tests/functional/suite/support'	);
log.set 	( strings.off , strings.clean , 'success' 					);
log.end 	();

// Generate the functional test suite documentation for steps
log.set 	( strings.on , strings.generate );
log.end 	();
shell.exec 	( 'jsdoc -c ./configuration/documentation/tests/functional/suite/jsdoc-support.json' );
log.end 	();
log.set 	( strings.off , strings.generate , 'success' );
log.end 	();
