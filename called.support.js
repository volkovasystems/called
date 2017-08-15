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
                                                                                                                                                                                                                                                                                                                			"eMail": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                                                                                                                			"contributors": [
                                                                                                                                                                                                                                                                                                                				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                                                                                                                				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                                                                                                                			],
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

	if (falzy(method) || typeof method != "function") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxlZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImJ1cm5lIiwicmVxdWlyZSIsImZhbHp5IiwiaGFyZGVuIiwia2xvYWsiLCJtcmtkIiwicmF6ZSIsInplbGYiLCJDQUxMRUQiLCJDQUxMRURfT05DRSIsIlJFU1VMVCIsImNhbGxlZCIsIm1ldGhvZCIsInNlbGYiLCJwcm9jZWR1cmUiLCJyZXN1bHQiLCJFcnJvciIsInN0YWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnVEFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTU8sU0FBUyxtQkFBWSxRQUFaLENBQWY7QUFDQSxJQUFNQyxjQUFjLHNCQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZDOzs7Ozs7Ozs7QUFTQSxLQUFJQyxPQUFPTixLQUFNLElBQU4sQ0FBWDs7QUFFQSxLQUFJTCxNQUFPVSxNQUFQLEtBQW1CLE9BQU9BLE1BQVAsSUFBaUIsVUFBeEMsRUFBb0Q7QUFDbkRBLFdBQVMsU0FBU0EsTUFBVCxHQUFrQixDQUFFLE9BQU9DLElBQVAsQ0FBYyxDQUEzQztBQUNBOztBQUVELEtBQUlSLEtBQU1JLFdBQU4sRUFBbUJHLE1BQW5CLEVBQTJCLElBQTNCLENBQUosRUFBdUM7QUFDdEMsU0FBT0EsTUFBUDtBQUNBOztBQUVELEtBQUlFLFlBQVksU0FBU0EsU0FBVCxHQUFxQjtBQUNwQyxNQUFJVCxLQUFNRyxNQUFOLEVBQWNNLFNBQWQsRUFBeUIsSUFBekIsQ0FBSixFQUFxQztBQUNwQyxPQUFJQyxVQUFTRCxVQUFXSixNQUFYLENBQWI7O0FBRUEsT0FBSUssbUJBQWtCQyxLQUF0QixFQUE2QjtBQUM1QixVQUFNLElBQUlBLEtBQUosaUNBQTBDRCxRQUFPRSxLQUFqRCxDQUFOO0FBQ0E7O0FBRUQsVUFBT0YsT0FBUDtBQUNBOztBQUVEZixRQUFPUSxNQUFQLEVBQWVNLFNBQWY7O0FBRUEsTUFBSUMsU0FBU0YsSUFBYjtBQUNBLE1BQUc7QUFDRjs7Ozs7O0FBTUFFLFlBQVNILE9BQU9NLEtBQVAsQ0FBY0wsSUFBZCxFQUFvQlAsS0FBTWEsU0FBTixDQUFwQixDQUFUOztBQUVBLEdBVEQsQ0FTQyxPQUFPQyxLQUFQLEVBQWM7QUFDZEwsWUFBU0ssS0FBVDtBQUNBOztBQUVEakIsU0FBUU8sTUFBUixFQUFnQkssTUFBaEIsRUFBd0JELFNBQXhCOztBQUVBLE1BQUlDLGtCQUFrQkMsS0FBdEIsRUFBNkI7QUFDNUIsU0FBTSxJQUFJQSxLQUFKLGlDQUEwQ0QsT0FBT0UsS0FBakQsQ0FBTjtBQUNBOztBQUVELFNBQU9GLE1BQVA7QUFDQSxFQWxDRDs7QUFvQ0FYLE9BQU9RLE1BQVAsRUFBZUUsU0FBZixFQUEwQkwsV0FBMUI7O0FBRUEsUUFBT0ssU0FBUDtBQUNBLENBM0REOztBQTZEQU8sT0FBT0MsT0FBUCxHQUFpQlgsTUFBakIiLCJmaWxlIjoiY2FsbGVkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImNhbGxlZFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJjYWxsZWQvY2FsbGVkLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImNhbGxlZC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImNhbGxlZFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9jYWxsZWQuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImNhbGxlZC10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdENhbGwgdGhlIG1ldGhvZCBvbmNlIGJ1dCBiZXR0ZXIuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJidXJuZVwiOiBcImJ1cm5lXCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxyXG5cdFx0XHRcImtsb2FrXCI6IFwia2xvYWtcIixcclxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxyXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXHJcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYnVybmUgPSByZXF1aXJlKCBcImJ1cm5lXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xyXG5jb25zdCBrbG9hayA9IHJlcXVpcmUoIFwia2xvYWtcIiApO1xyXG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XHJcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xyXG5cclxuY29uc3QgQ0FMTEVEID0gU3ltYm9sLmZvciggXCJjYWxsZWRcIiApO1xyXG5jb25zdCBDQUxMRURfT05DRSA9IFN5bWJvbCggXCJjYWxsZWQtb25jZVwiICk7XHJcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xyXG5cclxuY29uc3QgY2FsbGVkID0gZnVuY3Rpb24gY2FsbGVkKCBtZXRob2QgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm1ldGhvZDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XCJkZWZlclwiOiBcImJvb2xlYW5cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xyXG5cclxuXHRpZiggZmFsenkoIG1ldGhvZCApIHx8IHR5cGVvZiBtZXRob2QgIT0gXCJmdW5jdGlvblwiICl7XHJcblx0XHRtZXRob2QgPSBmdW5jdGlvbiBtZXRob2QoICl7IHJldHVybiBzZWxmOyB9O1xyXG5cdH1cclxuXHJcblx0aWYoIG1ya2QoIENBTExFRF9PTkNFLCBtZXRob2QsIHRydWUgKSApe1xyXG5cdFx0cmV0dXJuIG1ldGhvZDtcclxuXHR9XHJcblxyXG5cdGxldCBwcm9jZWR1cmUgPSBmdW5jdGlvbiBwcm9jZWR1cmUoICl7XHJcblx0XHRpZiggbXJrZCggQ0FMTEVELCBwcm9jZWR1cmUsIHRydWUgKSApe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gcHJvY2VkdXJlWyBSRVNVTFQgXTtcclxuXHJcblx0XHRcdGlmKCByZXN1bHQgaW5zdGFuY2VvZiBFcnJvciApe1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGZhaWxlZCBjYWxsZWQgb25jZSBtZXRob2QsICR7IHJlc3VsdC5zdGFjayB9YCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGJ1cm5lKCBDQUxMRUQsIHByb2NlZHVyZSApO1xyXG5cclxuXHRcdGxldCByZXN1bHQgPSBzZWxmO1xyXG5cdFx0dHJ5e1xyXG5cdFx0XHQvKjtcclxuXHRcdFx0XHRAbm90ZTpcclxuXHRcdFx0XHRcdERvIG5vdCBtb2RpZnkgdGhpcyBhcHBseSBjYWxsIGhlcmUsIHdlIGNhbm5vdCB1c2UgYmluZCBzaW5jZSBpdCB3aWxsXHJcblx0XHRcdFx0XHRcdHRyeSB0byBoYXJkIG92ZXJyaWRlIHRoZSBjb250ZXh0LlxyXG5cdFx0XHRcdEBlbmQtbm90ZVxyXG5cdFx0XHQqL1xyXG5cdFx0XHRyZXN1bHQgPSBtZXRob2QuYXBwbHkoIHNlbGYsIHJhemUoIGFyZ3VtZW50cyApICk7XHJcblxyXG5cdFx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0XHRyZXN1bHQgPSBlcnJvcjtcclxuXHRcdH1cclxuXHJcblx0XHRoYXJkZW4oIFJFU1VMVCwgcmVzdWx0LCBwcm9jZWR1cmUgKTtcclxuXHJcblx0XHRpZiggcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgKXtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgZmFpbGVkIGNhbGxlZCBvbmNlIG1ldGhvZCwgJHsgcmVzdWx0LnN0YWNrIH1gICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHRrbG9hayggbWV0aG9kLCBwcm9jZWR1cmUsIENBTExFRF9PTkNFICk7XHJcblxyXG5cdHJldHVybiBwcm9jZWR1cmU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGxlZDtcclxuIl19
//# sourceMappingURL=called.support.js.map
