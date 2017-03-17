
const called = require( "./called.js" );

console.log( called( function test( number, string ){
	return string;
} )( 123, "hello world" ) );


console.log( called( function callback( error, result ){
	//do nothing
}, true )( null, "hello yeah" ) );
