/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"ate": "ate",
			"harden": "harden",
			"protype": "protype",
			"raze": "raze",
			"vound": "vound",
			"zelf": "zelf"
		}
	@end-include
*/

const ate = require( "ate" );
const harden = require( "harden" );
const protype = require( "protype" );
const raze = require( "raze" );
const vound = require( "vound" );
const zelf = require( "zelf" );

harden( "CALLED", "called" );
harden( "CALLED_ONCE", "called-once" );

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
		if( procedure.CALLED === CALLED ){
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

	procedure = vound( procedure, self, method.name );

	/*;
		@note:
			This will override the method imposed by vound to
				the original method.
		@end-note
	*/
	ate( "method", method, procedure );

	harden( "CALLED_ONCE", CALLED_ONCE, procedure );

	return procedure;
};

module.exports = called;
