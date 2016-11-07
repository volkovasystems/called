"use strict";

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
			"zelf": "zelf"
		}
	@end-include
*/

if( typeof require == "function" ){
	var ate = require( "ate" );
	var harden = require( "harden" );
	var protype = require( "protype" );
	var raze = require( "raze" );
	var zelf = require( "zelf" );
}

if( typeof window != "undefined" &&
	!( "ate" in window ) )
{
	throw new Error( "ate is not defined" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "protype" in window ) )
{
	throw new Error( "protype is not defined" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

if( typeof window != "undefined" &&
	!( "zelf" in window ) )
{
	throw new Error( "zelf is not defined" );
}

harden( "CALLED", "called" );
harden( "CALLED_ONCE", "called-once" );

this.called = function called( procedure ){
	/*;
		@meta-configuration:
			{
				"procedure:required": "function"
			}
		@end-meta-configuration
	*/

	let self = zelf( this );

	procedure = procedure || function procedure( ){ return self; };

	if( procedure.CALLED_ONCE === CALLED_ONCE ){
		return procedure;
	}

	let procedureMethod = procedure.method;
	if( protype( procedureMethod, FUNCTION ) && procedureMethod.CALLED_ONCE === CALLED_ONCE ){
		return procedureMethod;
	}

	let method = function method( ){
		if( method.CALLED === CALLED ){
			return method.result;
		}

		harden( "CALLED", CALLED, method );

		let result = procedure.apply( self, raze( arguments ) );

		harden( "result", result, method );

		return result;
	};

	ate( "name", procedure.name, method );

	method = method.bind( self );

	harden( "CALLED_ONCE", CALLED_ONCE, method );
	harden( "method", method, procedure );

	return method;
};

if( typeof module != "undefined" &&
	typeof module.exports != "undefined" )
{
	module.exports = this.called;
}
