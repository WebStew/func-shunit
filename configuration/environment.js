	
var environment 	= process.env.ENVIROMENT || 'development',
	environments 	= {
		environment : environment 		, 
		development : {
			host : 'http://google.com' 	,
			port : 80
		}
	};

module.exports  =  environments [ environment ];
