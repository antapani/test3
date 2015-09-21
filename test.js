var op = require('./');

describe ('Hello Module', function () {
	
	// set of test
	it ('should return result of two numbers', function() {
		var result = op.add(1, 2);
		result.should.equal(3);
	});
	
	// set of test
	it ('should return result of two numbers', function() {
		var result = op.substract(1, 2);
		result.should.equal(-1);
	});
	
	// set of test
	it ('should return result of two numbers', function() {
		var result = op.multiple(1, 2);
		result.should.equal(2);
	});

});
