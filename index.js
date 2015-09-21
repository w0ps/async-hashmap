var async = require( 'async' );

function mapHash( mapFun, array, iterator, cb ) {
	return async.waterfall( [map, collectResults], cb);

	function map( cb ){
		return mapFun( array, iterator, cb );
	}

	function collectResults( results, cb ){
		var hash = {};

		results.forEach( setProperty );

		return cb( null, hash );

		function setProperty( value, index ){
			hash[ array[index] ] = value;
		}
	}
}

module.exports = {
	mapHash: mapHash.bind(null, async.map),
	mapHashSeries: mapHash.bind(null, async.mapSeries)
};