

import square 				from '../../../development/javascripts/example';
import chai , { expect } 	from 'chai';

describe ( 'Example Unit Test' , () => {

	it ( 'This test should pass' , () => {

		expect ( square ( 2 )).to.have.equal ( 4 );
		
	});

});