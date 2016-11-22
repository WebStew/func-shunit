
const shell 	= require ( 'shelljs' 						) ,
	messages 	= require ( '../../configuration/strings' 	) ,
	log 		= require ( '../../utilities/log' 			) ,
	string 		= require ( '../../utilities/string' 		) ,
	strings 	= {
		clean 		: 'Cleaning Unit Test Results Documentation' 			,
		generate 	: 'Generating Unit Test Suite Results Documentation' 	, 
		off 		: string.setUCFirst ( messages.finished ) 				,
		on 			: string.setUCFirst ( messages.started 	)
	};

// Clean the unit test results folder
log.set 	( strings.on , strings.clean );
log.end 	(); 
shell.exec 	( 'rimraf ./documentation/tests/unit/results'	);
log.set 	( strings.off , strings.clean , 'success' 		);
log.end 	();

// Generate the unit test results documentation
log.set 	( strings.on , strings.generate );
log.end 	();
shell.exec 	( 'mocha tests/unit/helpers/browser.js tests/unit/specs/*.spec.js --colors --reporter mochawesome --reporter-options reportDir=documentation/tests/unit/results,reportName=index,reportTitle=Results,inlineAssets=true' );
log.end 	();
log.set 	( strings.off , strings.generate , 'success' );
log.end 	();
