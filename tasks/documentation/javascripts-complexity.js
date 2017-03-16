

const shell 	= require ( 'shelljs' 						) ,
	messages 	= require ( '../../configuration/strings' 	) ,
	log 		= require ( '../../utilities/log' 			) ,
	string 		= require ( '../../utilities/string' 		) ,
	strings 	= {
		task 	: 'Running JavaScript Complexity Analyser' , 
		off 	: string.setUCFirst ( messages.finished ) 		,
		on 		: string.setUCFirst ( messages.started 	)
	};

// Run the unit tests
log.set 	( strings.on , strings.task );
log.end 	();
shell.exec 	( 'plato -d ./documentation/javascripts/complexity ./development/javascripts/**/*.js' );
log.end 	();
log.set 	( strings.off , strings.task , 'success' );
log.end 	();
