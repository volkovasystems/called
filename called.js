"use strict";

/*:
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
			"harden": "harden",
			"raze": "raze"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var harden = require( "harden" );
	var raze = require( "raze" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

var called = function called( procedure ){
	/*:
		@meta-configuration:
			{
				"procedure:required": "function"
			}
		@end-meta-configuration
	*/

	procedure = procedure || function procedure( ){ return this; };

	if( typeof procedure != "function" ){
		throw new Error( "invalid procedure" );
	}

	if( typeof procedure._procedure == "function" &&
 		procedure._procedure.CALLED_ONCE === "called-once" )
	{
		return procedure._procedure;
	}

	var _procedure = ( function _procedure( ){
		if( _procedure.CALLED === "called" ){
			if( !called.silent ){
				console.log( "warning, procedure is called again", procedure.name );
			}

			return this;
		}

		harden( "CALLED", "called", _procedure );

		return procedure.apply( this, raze( arguments ) );
	} ).bind( this );

	harden( "CALLED_ONCE", "called-once", _procedure );
	harden( "_procedure", _procedure, procedure );

	return _procedure;
};

called.silent = true;

called.setSilent = function setSilent( silent ){
	called.silent = silent;
};

if( typeof module != "undefined" ){
	module.exports = called;
}
