"use strict";

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

var harden = require("harden");
var kloak = require("kloak");
var protype = require("protype");
var raze = require("raze");
var zelf = require("zelf");

var CALLED = "called";
var CALLED_ONCE = "called-once";

var called = function called(method) {
	/*;
 	@meta-configuration:
 		{
 			"method:required": "function"
 		}
 	@end-meta-configuration
 */

	var self = zelf(this);

	method = method || function method() {
		return self;
	};

	if (method.CALLED_ONCE === CALLED_ONCE) {
		return method;
	}

	if (!protype(method, FUNCTION)) {
		throw new Error("invalid method");
	}

	var procedure = function procedure() {
		if (procedure.called()) {
			return procedure.result;
		}

		harden("CALLED", CALLED, procedure);

		/*;
  	@note:
  		Do not modify this apply call here, we cannot use bind since it will
  			try to hard override the context.
  	@end-note
  */
		var result = method.apply(self, raze(arguments));

		harden("result", result, procedure);

		return result;
	};

	kloak(method, procedure, CALLED_ONCE);

	/*;
 	@note:
 		This will let you check if the procedure has been called.
 	@end-note
 */
	harden("called", function called() {
		return procedure.CALLED === CALLED;
	}, procedure);

	return procedure;
};

module.exports = called;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxlZC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwia2xvYWsiLCJwcm90eXBlIiwicmF6ZSIsInplbGYiLCJDQUxMRUQiLCJDQUxMRURfT05DRSIsImNhbGxlZCIsIm1ldGhvZCIsInNlbGYiLCJGVU5DVElPTiIsIkVycm9yIiwicHJvY2VkdXJlIiwicmVzdWx0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUssU0FBUyxRQUFmO0FBQ0EsSUFBTUMsY0FBYyxhQUFwQjs7QUFFQSxJQUFNQyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZDOzs7Ozs7OztBQVFBLEtBQUlDLE9BQU9MLEtBQU0sSUFBTixDQUFYOztBQUVBSSxVQUFTQSxVQUFVLFNBQVNBLE1BQVQsR0FBa0I7QUFBRSxTQUFPQyxJQUFQO0FBQWMsRUFBckQ7O0FBRUEsS0FBSUQsT0FBT0YsV0FBUCxLQUF1QkEsV0FBM0IsRUFBd0M7QUFDdkMsU0FBT0UsTUFBUDtBQUNBOztBQUVELEtBQUksQ0FBQ04sUUFBU00sTUFBVCxFQUFpQkUsUUFBakIsQ0FBTCxFQUFrQztBQUNqQyxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsWUFBWSxTQUFTQSxTQUFULEdBQXFCO0FBQ3BDLE1BQUlBLFVBQVVMLE1BQVYsRUFBSixFQUF5QjtBQUN4QixVQUFPSyxVQUFVQyxNQUFqQjtBQUNBOztBQUVEZCxTQUFRLFFBQVIsRUFBa0JNLE1BQWxCLEVBQTBCTyxTQUExQjs7QUFFQTs7Ozs7O0FBTUEsTUFBSUMsU0FBU0wsT0FBT00sS0FBUCxDQUFjTCxJQUFkLEVBQW9CTixLQUFNWSxTQUFOLENBQXBCLENBQWI7O0FBRUFoQixTQUFRLFFBQVIsRUFBa0JjLE1BQWxCLEVBQTBCRCxTQUExQjs7QUFFQSxTQUFPQyxNQUFQO0FBQ0EsRUFsQkQ7O0FBb0JBWixPQUFPTyxNQUFQLEVBQWVJLFNBQWYsRUFBMEJOLFdBQTFCOztBQUVBOzs7OztBQUtBUCxRQUFRLFFBQVIsRUFBa0IsU0FBU1EsTUFBVCxHQUFrQjtBQUNuQyxTQUFPSyxVQUFVUCxNQUFWLEtBQXFCQSxNQUE1QjtBQUNBLEVBRkQsRUFFR08sU0FGSDs7QUFJQSxRQUFPQSxTQUFQO0FBQ0EsQ0FyREQ7O0FBdURBSSxPQUFPQyxPQUFQLEdBQWlCVixNQUFqQiIsImZpbGUiOiJjYWxsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiY2FsbGVkL2NhbGxlZC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY2FsbGVkLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NhbGxlZC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImNhbGxlZC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENhbGwgdGhlIGNhbGxiYWNrIG9uY2UgYnV0IGJldHRlci5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImtsb2FrXCI6IFwia2xvYWtcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBrbG9hayA9IHJlcXVpcmUoIFwia2xvYWtcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBDQUxMRUQgPSBcImNhbGxlZFwiO1xuY29uc3QgQ0FMTEVEX09OQ0UgPSBcImNhbGxlZC1vbmNlXCI7XG5cbmNvbnN0IGNhbGxlZCA9IGZ1bmN0aW9uIGNhbGxlZCggbWV0aG9kICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bWV0aG9kID0gbWV0aG9kIHx8IGZ1bmN0aW9uIG1ldGhvZCggKXsgcmV0dXJuIHNlbGY7IH07XG5cblx0aWYoIG1ldGhvZC5DQUxMRURfT05DRSA9PT0gQ0FMTEVEX09OQ0UgKXtcblx0XHRyZXR1cm4gbWV0aG9kO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtZXRob2RcIiApO1xuXHR9XG5cblx0bGV0IHByb2NlZHVyZSA9IGZ1bmN0aW9uIHByb2NlZHVyZSggKXtcblx0XHRpZiggcHJvY2VkdXJlLmNhbGxlZCggKSApe1xuXHRcdFx0cmV0dXJuIHByb2NlZHVyZS5yZXN1bHQ7XG5cdFx0fVxuXG5cdFx0aGFyZGVuKCBcIkNBTExFRFwiLCBDQUxMRUQsIHByb2NlZHVyZSApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0RG8gbm90IG1vZGlmeSB0aGlzIGFwcGx5IGNhbGwgaGVyZSwgd2UgY2Fubm90IHVzZSBiaW5kIHNpbmNlIGl0IHdpbGxcblx0XHRcdFx0XHR0cnkgdG8gaGFyZCBvdmVycmlkZSB0aGUgY29udGV4dC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0bGV0IHJlc3VsdCA9IG1ldGhvZC5hcHBseSggc2VsZiwgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHRcdGhhcmRlbiggXCJyZXN1bHRcIiwgcmVzdWx0LCBwcm9jZWR1cmUgKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0a2xvYWsoIG1ldGhvZCwgcHJvY2VkdXJlLCBDQUxMRURfT05DRSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyB3aWxsIGxldCB5b3UgY2hlY2sgaWYgdGhlIHByb2NlZHVyZSBoYXMgYmVlbiBjYWxsZWQuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJjYWxsZWRcIiwgZnVuY3Rpb24gY2FsbGVkKCApe1xuXHRcdHJldHVybiBwcm9jZWR1cmUuQ0FMTEVEID09PSBDQUxMRUQ7XG5cdH0sIHByb2NlZHVyZSApO1xuXG5cdHJldHVybiBwcm9jZWR1cmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGxlZDtcbiJdfQ==
