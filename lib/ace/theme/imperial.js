define(function (require, exports, module) {
  "use strict";

  exports.isDark = true;
  exports.cssClass = "ace-tm";
  exports.cssText = require("../requirejs/text!./imperial.css");
  exports.$id = "ace/theme/imperial";

  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});
