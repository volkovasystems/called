"use strict";

const called = require( "./called.js" );

function resolve( option, callback ){

	option = option || { };

	callback = called.bind( option.self )( callback );

	console.log( "trigger", callback.toString( ) );

	return this;

};

resolve( );
