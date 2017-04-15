
const called = require( "./called.js" );

let test = called( function test( number, string ){
	return string;
} );
console.log( test( 123, "hello world" ) );

console.log( test( "yeah", "sample" ) );

console.log( called( function callback( error, result ){
	//do nothing
}, true )( null, "hello yeah" ) );
