
const assert = require( "assert" );
const called = require( "./called.js" );

let test = called( function test( number, string ){
	return string;
} );
assert.equal( test( 123, "hello world" ), "hello world" );

assert.equal( test( "yeah", "sample" ), "hello world" );

console.log( "ok" );
