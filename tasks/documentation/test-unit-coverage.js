
const shell 	= require ( 'shelljs' 						) ,
	messages 	= require ( '../../configuration/strings' 	) ,
	log 		= require ( '../../utilities/log' 			) ,
	string 		= require ( '../../utilities/string' 		) ,
	strings 	= {
		clean 		: 'Cleaning Unit Test Coverage Documentation' 			,
		generate 	: 'Generating Unit Test Suite Coverage Documentation' 	, 
		off 		: string.setUCFirst ( messages.finished ) 				,
		on 			: string.setUCFirst ( messages.started 	)
	};

// Clean the unit test results folder
log.set 	( strings.on , strings.clean );
log.end 	(); 
shell.exec 	( 'rimraf ./documentation/tests/unit/coverage'	);
log.set 	( strings.off , strings.clean , 'success' 		);
log.end 	();

// Generate the unit test results documentation
log.set 	( strings.on , strings.generate );
log.end 	();
shell.exec 	( 'istanbul cover node_modules/mocha/bin/_mocha --colors --dir ./documentation/tests/unit/coverage -- --compilers js:babel-core/register --colors --reporter spec tests/unit/specs' );
log.end 	();
log.set 	( strings.off , strings.generate , 'success' );
log.end 	();
