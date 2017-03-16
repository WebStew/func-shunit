
const shell 	= require ( 'shelljs' 						) ,
	messages 	= require ( '../../configuration/strings' 	) ,
	log 		= require ( '../../utilities/log' 			) ,
	string 		= require ( '../../utilities/string' 		) ,
	strings 	= {
		task 	: 'Running JavaScript Vulnerability Test Suite' , 
		off 	: string.setUCFirst ( messages.finished ) 		,
		on 		: string.setUCFirst ( messages.started 	)
	};

// Run the unit tests
log.set 	( strings.on , strings.task );
log.end 	();
shell.exec 	( 'retire -c --outputformat=text --outputpath=documentation/tests/vulnerabilities/javascript.txt -c' );
log.end 	();
log.set 	( strings.off , strings.task , 'success' );
log.end 	();
