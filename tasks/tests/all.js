
const shell = require ( 'shelljs' );

shell.exec ( 'npm run test:unit' 		);
shell.exec ( 'npm run test:functional' 	);

shell.exec ( 'npm run document:tests:functional:results' 		);
shell.exec ( 'npm run document:tests:functional:suite:steps' 	);
shell.exec ( 'npm run document:tests:functional:suite:support' 	);
