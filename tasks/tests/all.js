
const shell = require ( 'shelljs' );

// Test
shell.exec ( 'npm run test:unit' 			);
shell.exec ( 'npm run test:functional' 		);

// Document
shell.exec ( 'npm run document:javascripts:vulnerabilities' 	);
shell.exec ( 'npm run document:javascripts:complexity' 			);
shell.exec ( 'npm run document:tests:unit:results' 				);
shell.exec ( 'npm run document:tests:unit:coverage' 			);
shell.exec ( 'npm run document:tests:functional:results' 		);
shell.exec ( 'npm run document:tests:functional:suite:steps' 	);
shell.exec ( 'npm run document:tests:functional:suite:support' 	);
