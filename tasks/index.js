
const shell = require ( 'shelljs' );

// Test
shell.exec ( 'npm run test:unit' 			);
shell.exec ( 'npm run test:functional' 		);

// Document application
shell.exec ( 'npm run document:javascripts:application' 		);
shell.exec ( 'npm run document:javascripts:vulnerabilities' 	);
shell.exec ( 'npm run document:javascripts:complexity' 			);

// Document unit test coverage and results
shell.exec ( 'npm run document:tests:unit:results' 				);
shell.exec ( 'npm run document:tests:unit:coverage' 			);

// Document functional test results, step and support API
shell.exec ( 'npm run document:tests:functional:results' 		);
shell.exec ( 'npm run document:tests:functional:suite:steps' 	);
shell.exec ( 'npm run document:tests:functional:suite:support' 	);
