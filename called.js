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
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"kloak": "kloak",
			"protype": "protype",
			"raze": "raze",
			"zelf": "zelf"
		}
	@end-include
*/

const harden = require( "harden" );
const kloak = require( "kloak" );
const protype = require( "protype" );
const raze = require( "raze" );
const zelf = require( "zelf" );

const CALLED = "called";
const CALLED_ONCE = "called-once";

const called = function called( method ){
	/*;
		@meta-configuration:
			{
				"method:required": "function"
			}
		@end-meta-configuration
	*/

	let self = zelf( this );

	method = method || function method( ){ return self; };

	if( method.CALLED_ONCE === CALLED_ONCE ){
		return method;
	}

	if( !protype( method, FUNCTION ) ){
		throw new Error( "invalid method" );
	}

	let procedure = function procedure( ){
		if( procedure.called( ) ){
			return procedure.result;
		}

		harden( "CALLED", CALLED, procedure );

		/*;
			@note:
				Do not modify this apply call here, we cannot use bind since it will
					try to hard override the context.
			@end-note
		*/
		let result = method.apply( self, raze( arguments ) );

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
