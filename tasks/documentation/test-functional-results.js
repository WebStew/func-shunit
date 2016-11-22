
const shell 	= require ( 'shelljs' 						) ,
	messages 	= require ( '../../configuration/strings' 	) ,
	log 		= require ( '../../utilities/log' 			) ,
	string 		= require ( '../../utilities/string' 		) ,
	strings 	= {
		clean 		: 'Cleaning Functional Test Suite Results' 		,
		generate 	: 'Generating Functional Test Suite Results' 	, 
		off 		: string.setUCFirst ( messages.finished 	) 	,
		on 			: string.setUCFirst ( messages.started 		)
	};

// Clean the functional test results folder
log.set 	( strings.on , strings.clean 							);
log.end 	();
shell.exec 	( 'rimraf ./documentation/tests/functional/results'		);
log.set 	( strings.off , strings.clean , 'success' 				);
log.end 	();

// Generate the functional test results
log.set 	( strings.on , strings.generate );
log.end 	();
shell.exec 	( 'allure generate tests/functional/reports/ -o documentation/tests/functional/results' );
log.end 	();
log.set 	( strings.off , strings.generate , 'success' );
log.end 	();