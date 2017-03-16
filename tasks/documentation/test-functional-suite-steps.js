
const shell 	= require ( 'shelljs' 						) ,
	messages 	= require ( '../../configuration/strings' 	) ,
	log 		= require ( '../../utilities/log' 			) ,
	string 		= require ( '../../utilities/string' 		) ,
	strings 	= {
		clean 		: 'Cleaning Functional Test Suite Steps Documentation' 		,
		generate 	: 'Generating Functional Test Suite Steps Documentation' 	, 
		off 		: string.setUCFirst ( messages.finished ) 					,
		on 			: string.setUCFirst ( messages.started 	)
	};

// Clean the functional test suite folder
log.set 	( strings.on , strings.clean 							);
log.end 	();
shell.exec 	( 'rimraf ./documentation/tests/functional/suite/steps'	);
log.set 	( strings.off , strings.clean , 'success' 				);
log.end 	();

// Generate the functional test suite documentation for steps
log.set 	( strings.on , strings.generate );
log.end 	();
shell.exec 	( 'jsdoc -c ./configuration/documentation/jsdoc-steps.json' );
log.end 	();
log.set 	( strings.off , strings.generate , 'success' );
log.end 	();
