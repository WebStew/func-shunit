
const shell = require ( 'shelljs' );

shell.exec ( 'npm run test:unit' 		);
shell.exec ( 'npm run test:functional' 	);

shell.exec ( 'npm run document:test:functional:results' 		);
shell.exec ( 'npm run document:test:functional:suite:steps' 	);
shell.exec ( 'npm run document:test:functional:suite:support' 	);
