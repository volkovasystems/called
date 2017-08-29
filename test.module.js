"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "called",
			"path": "called/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/called.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"called": "called"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const called = require( "./called.js" );
//: @end-server

//: @client:
const called = require( "./called.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "called", ( ) => {

	describe( "`called( function test( number, string ){ return string } )`", ( ) => {
		it( "should return 'hello world'", ( ) => {

			let test = called( function test( number, string ){
				return string;
			} );

			assert.equal( test( 123, "hello world" ), "hello world" );

			assert.equal( test( "yeah", "sample" ), "hello world" );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "called", ( ) => {

	describe( "`called( function test( number, string ){ return string } )`", ( ) => {
		it( "should return 'hello world'", ( ) => {

			let test = called( function test( number, string ){
				return string;
			} );

			assert.equal( test( 123, "hello world" ), "hello world" );

			assert.equal( test( "yeah", "sample" ), "hello world" );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "called", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`called( function test( number, string ){ return string } )`", ( ) => {
		it( "should return 'hello world'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test = called( function test( number, string ){
						return string;
					} );

					let result1 = test( 123, "hello world" );
					let result2 = test( "yeah", "sample" );

					return result1 == result2;

				}

			).value;

			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
