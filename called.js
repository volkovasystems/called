/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "called",
			"path": "called/called.js",
			"file": "called.js",
			"module": "called",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/called.git",
			"test": "called-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Call the callback once but better.

		We will follow the standard conventional callback parameter structure
			`callback( error, result, [ parameter... ] )`
	@end-module-documentation

	@include:
		{
			"dephall": "dephall",
			"harden": "harden",
			"kloak": "kloak",
			"raze": "raze",
			"wichevr": "wichevr",
			"zelf": "zelf"
		}
	@end-include
*/

const depher = require( "depher" );
const harden = require( "harden" );
const kloak = require( "kloak" );
const raze = require( "raze" );
const wichevr = require( "wichevr" );
const zelf = require( "zelf" );

const CALLED = "called";
const CALLED_ONCE = "called-once";

const called = function called( method, defer ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"defer": "boolean"
			}
		@end-meta-configuration
	*/

	let self = zelf( this );

	let parameter = raze( arguments );
	method = depher( parameter, FUNCTION, function method( ){ return self; } );
	defer = depher( parameter, BOOLEAN, false );

	if( method.CALLED_ONCE === CALLED_ONCE ){
		return method;
	}

	let procedure = function procedure( ){
		if( procedure.called( ) ){
			return procedure.result;
		}

		harden( "CALLED", CALLED, procedure );

		let parameter = raze( arguments );

		/*;
			@note:
				Do not modify this apply call here, we cannot use bind since it will
					try to hard override the context.
			@end-note
		*/
		let result = method.apply( self, parameter );

		/*;
			@note:
				If defer is activated, it will follow the standard conventional
					callback parameter structure and will defer for result and error
					if the method does not return a result.
			@end-note
		*/
		if( defer ){
			result = wichevr( result, parameter[ 1 ], parameter[ 0 ] );
		}

		harden( "result", result, procedure );

		return result;
	};

	kloak( method, procedure, CALLED_ONCE );

	/*;
		@note:
			This will let you check if the procedure has been called.
		@end-note
	*/
	harden( "called", function called( ){
		return procedure.CALLED === CALLED;
	}, procedure );

	return procedure;
};

module.exports = called;
