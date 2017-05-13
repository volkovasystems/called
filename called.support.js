"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                                                                                                                                		Call the method once but better.
                                                                                                                                                                                                                                                                                                                	@end-module-documentation
                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                	@include:
                                                                                                                                                                                                                                                                                                                		{
                                                                                                                                                                                                                                                                                                                			"burne": "burne",
                                                                                                                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                                                                                                                			"harden": "harden",
                                                                                                                                                                                                                                                                                                                			"kloak": "kloak",
                                                                                                                                                                                                                                                                                                                			"mrkd": "mrkd",
                                                                                                                                                                                                                                                                                                                			"protype": "protype",
                                                                                                                                                                                                                                                                                                                			"raze": "raze",
                                                                                                                                                                                                                                                                                                                			"zelf": "zelf"
                                                                                                                                                                                                                                                                                                                		}
                                                                                                                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                                                                                                                */

var burne = require("burne");
var falzy = require("falzy");
var harden = require("harden");
var kloak = require("kloak");
var mrkd = require("mrkd");
var protype = require("protype");
var raze = require("raze");
var zelf = require("zelf");

var CALLED = (0, _for2.default)("called");
var CALLED_ONCE = (0, _symbol2.default)("called-once");
var RESULT = (0, _symbol2.default)("result");

var called = function called(method) {
	/*;
                                      	@meta-configuration:
                                      		{
                                      			"method:required": "function",
                                      			"defer": "boolean"
                                      		}
                                      	@end-meta-configuration
                                      */

	var self = zelf(this);

	if (falzy(method) || !protype(method, FUNCTION)) {
		method = function method() {return self;};
	}

	if (mrkd(CALLED_ONCE, method, true)) {
		return method;
	}

	var procedure = function procedure() {
		if (mrkd(CALLED, procedure, true)) {
			var _result = procedure[RESULT];

			if (_result instanceof Error) {
				throw new Error("failed called once method, " + _result.stack);
			}

			return _result;
		}

		burne(CALLED, procedure);

		var result = self;
		try {
			/*;
       	@note:
       		Do not modify this apply call here, we cannot use bind since it will
       			try to hard override the context.
       	@end-note
       */
			result = method.apply(self, raze(arguments));

		} catch (error) {
			result = error;
		}

		harden(RESULT, result, procedure);

		if (result instanceof Error) {
			throw new Error("failed called once method, " + result.stack);
		}

		return result;
	};

	kloak(method, procedure, CALLED_ONCE);

	return procedure;
};

module.exports = called;

//# sourceMappingURL=called.support.js.map