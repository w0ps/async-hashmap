var assert = require('assert'),
	mh = require('./index.js'),
	testArr = ['foo', 'bar'];

mh.mapHash( testArr, testFun, collectResults);

function testFun(val, cb){
	setTimeout(callCb);

	function callCb(){
		cb(null, val + '!');
	}
}

function collectResults(err, results){
	assert(!err);
	assert(results.foo == 'foo!');
	assert(results.bar == 'bar!');
}