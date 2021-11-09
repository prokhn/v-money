(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VMoney"] = factory();
	else
		root["VMoney"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  prefix: '',
  suffix: '',
  thousands: ',',
  decimal: '.',
  precision: 2,
  allowBlank: false,
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcb3B0aW9ucy5qcyJdLCJuYW1lcyI6WyJwcmVmaXgiLCJzdWZmaXgiLCJ0aG91c2FuZHMiLCJkZWNpbWFsIiwicHJlY2lzaW9uIiwiYWxsb3dCbGFuayIsIm1pbiIsIk51bWJlciIsIk1JTl9TQUZFX0lOVEVHRVIiLCJtYXgiLCJNQVhfU0FGRV9JTlRFR0VSIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2JBLFVBQVEsRUFESztBQUViQyxVQUFRLEVBRks7QUFHYkMsYUFBVyxHQUhFO0FBSWJDLFdBQVMsR0FKSTtBQUtiQyxhQUFXLENBTEU7QUFNYkMsY0FBWSxLQU5DO0FBT2JDLE9BQUtDLE9BQU9DLGdCQVBDO0FBUWJDLE9BQUtGLE9BQU9HO0FBUkMsQ0FBZiIsImZpbGUiOiJvcHRpb25zLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1Byb2tobi9EZXNrdG9wL0Zyb250c3RhcnRQcm9qZWN0cy92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBwcmVmaXg6ICcnLFxuICBzdWZmaXg6ICcnLFxuICB0aG91c2FuZHM6ICcsJyxcbiAgZGVjaW1hbDogJy4nLFxuICBwcmVjaXNpb246IDIsXG4gIGFsbG93Qmxhbms6IGZhbHNlLFxuICBtaW46IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLFxuICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG59XG4iXX0=

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["a"] = (function (el, binding) {
  if (!binding.value) return;
  var opt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assign__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */], binding.value);

  // v-money used on a component that's not a input
  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    var els = el.getElementsByTagName('input');
    if (els.length !== 1) {
      // throw new Error("v-money requires 1 input, found " + els.length)
    } else {
      el = els[0];
    }
  }

  el.onkeydown = function (e) {
    var backspacePressed = e.which == 8 || e.which == 46;
    var atEndPosition = el.value.length - el.selectionEnd === 0;
    if (opt.allowBlank && backspacePressed && atEndPosition && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* unformat */])(el.value, 0) === 0) {
      el.value = '';
      el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* event */])('change')); // v-model.lazy
    }
  };

  el.oninput = function () {
    var positionFromEnd = el.value.length - el.selectionEnd;
    el.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* format */])(el.value, opt);
    positionFromEnd = Math.max(positionFromEnd, opt.suffix.length); // right
    positionFromEnd = el.value.length - positionFromEnd;
    positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1); // left
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* setCursor */])(el, positionFromEnd);
    el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* event */])('change')); // v-model.lazy
  };

  el.onfocus = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* setCursor */])(el, el.value.length - opt.suffix.length);
  };

  if (el.value !== '') {
    el.oninput();
    el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* event */])('input')); // force format after initialization
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImZvcm1hdCIsInVuZm9ybWF0Iiwic2V0Q3Vyc29yIiwiZXZlbnQiLCJhc3NpZ24iLCJkZWZhdWx0cyIsImVsIiwiYmluZGluZyIsInZhbHVlIiwib3B0IiwidGFnTmFtZSIsInRvTG9jYWxlVXBwZXJDYXNlIiwiZWxzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJvbmtleWRvd24iLCJlIiwiYmFja3NwYWNlUHJlc3NlZCIsIndoaWNoIiwiYXRFbmRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZCIsImFsbG93QmxhbmsiLCJkaXNwYXRjaEV2ZW50Iiwib25pbnB1dCIsInBvc2l0aW9uRnJvbUVuZCIsIk1hdGgiLCJtYXgiLCJzdWZmaXgiLCJwcmVmaXgiLCJvbmZvY3VzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxNQUFULEVBQWlCQyxRQUFqQixFQUEyQkMsU0FBM0IsRUFBc0NDLEtBQXRDLFFBQW1ELFNBQW5EO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7O0FBRUEsZUFBZSxVQUFVQyxFQUFWLEVBQWNDLE9BQWQsRUFBdUI7QUFDcEMsTUFBSSxDQUFDQSxRQUFRQyxLQUFiLEVBQW9CO0FBQ3BCLE1BQUlDLE1BQU1MLE9BQU9DLFFBQVAsRUFBaUJFLFFBQVFDLEtBQXpCLENBQVY7O0FBRUE7QUFDQSxNQUFJRixHQUFHSSxPQUFILENBQVdDLGlCQUFYLE9BQW1DLE9BQXZDLEVBQWdEO0FBQzlDLFFBQUlDLE1BQU1OLEdBQUdPLG9CQUFILENBQXdCLE9BQXhCLENBQVY7QUFDQSxRQUFJRCxJQUFJRSxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDcEI7QUFDRCxLQUZELE1BRU87QUFDTFIsV0FBS00sSUFBSSxDQUFKLENBQUw7QUFDRDtBQUNGOztBQUVETixLQUFHUyxTQUFILEdBQWUsVUFBVUMsQ0FBVixFQUFhO0FBQzFCLFFBQUlDLG1CQUFtQkQsRUFBRUUsS0FBRixJQUFXLENBQVgsSUFBZ0JGLEVBQUVFLEtBQUYsSUFBVyxFQUFsRDtBQUNBLFFBQUlDLGdCQUFpQmIsR0FBR0UsS0FBSCxDQUFTTSxNQUFULEdBQWtCUixHQUFHYyxZQUF0QixLQUF3QyxDQUE1RDtBQUNBLFFBQUlYLElBQUlZLFVBQUosSUFBa0JKLGdCQUFsQixJQUFzQ0UsYUFBdEMsSUFBd0RsQixTQUFTSyxHQUFHRSxLQUFaLEVBQW1CLENBQW5CLE1BQTBCLENBQXRGLEVBQTBGO0FBQ3hGRixTQUFHRSxLQUFILEdBQVcsRUFBWDtBQUNBRixTQUFHZ0IsYUFBSCxDQUFpQm5CLE1BQU0sUUFBTixDQUFqQixFQUZ3RixDQUV0RDtBQUNuQztBQUNGLEdBUEQ7O0FBU0FHLEtBQUdpQixPQUFILEdBQWEsWUFBWTtBQUN2QixRQUFJQyxrQkFBa0JsQixHQUFHRSxLQUFILENBQVNNLE1BQVQsR0FBa0JSLEdBQUdjLFlBQTNDO0FBQ0FkLE9BQUdFLEtBQUgsR0FBV1IsT0FBT00sR0FBR0UsS0FBVixFQUFpQkMsR0FBakIsQ0FBWDtBQUNBZSxzQkFBa0JDLEtBQUtDLEdBQUwsQ0FBU0YsZUFBVCxFQUEwQmYsSUFBSWtCLE1BQUosQ0FBV2IsTUFBckMsQ0FBbEIsQ0FIdUIsQ0FHd0M7QUFDL0RVLHNCQUFrQmxCLEdBQUdFLEtBQUgsQ0FBU00sTUFBVCxHQUFrQlUsZUFBcEM7QUFDQUEsc0JBQWtCQyxLQUFLQyxHQUFMLENBQVNGLGVBQVQsRUFBMEJmLElBQUltQixNQUFKLENBQVdkLE1BQVgsR0FBb0IsQ0FBOUMsQ0FBbEIsQ0FMdUIsQ0FLNEM7QUFDbkVaLGNBQVVJLEVBQVYsRUFBY2tCLGVBQWQ7QUFDQWxCLE9BQUdnQixhQUFILENBQWlCbkIsTUFBTSxRQUFOLENBQWpCLEVBUHVCLENBT1c7QUFDbkMsR0FSRDs7QUFVQUcsS0FBR3VCLE9BQUgsR0FBYSxZQUFZO0FBQ3ZCM0IsY0FBVUksRUFBVixFQUFjQSxHQUFHRSxLQUFILENBQVNNLE1BQVQsR0FBa0JMLElBQUlrQixNQUFKLENBQVdiLE1BQTNDO0FBQ0QsR0FGRDs7QUFJQSxNQUFJUixHQUFHRSxLQUFILEtBQWEsRUFBakIsRUFBcUI7QUFDbkJGLE9BQUdpQixPQUFIO0FBQ0FqQixPQUFHZ0IsYUFBSCxDQUFpQm5CLE1BQU0sT0FBTixDQUFqQixFQUZtQixDQUVjO0FBQ2xDO0FBQ0YiLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1Byb2tobi9EZXNrdG9wL0Zyb250c3RhcnRQcm9qZWN0cy92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0LCB1bmZvcm1hdCwgc2V0Q3Vyc29yLCBldmVudCB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgYXNzaWduIGZyb20gJy4vYXNzaWduJ1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vb3B0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsLCBiaW5kaW5nKSB7XG4gIGlmICghYmluZGluZy52YWx1ZSkgcmV0dXJuXG4gIHZhciBvcHQgPSBhc3NpZ24oZGVmYXVsdHMsIGJpbmRpbmcudmFsdWUpXG5cbiAgLy8gdi1tb25leSB1c2VkIG9uIGEgY29tcG9uZW50IHRoYXQncyBub3QgYSBpbnB1dFxuICBpZiAoZWwudGFnTmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpICE9PSAnSU5QVVQnKSB7XG4gICAgdmFyIGVscyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpXG4gICAgaWYgKGVscy5sZW5ndGggIT09IDEpIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcInYtbW9uZXkgcmVxdWlyZXMgMSBpbnB1dCwgZm91bmQgXCIgKyBlbHMubGVuZ3RoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGVsc1swXVxuICAgIH1cbiAgfVxuXG4gIGVsLm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGJhY2tzcGFjZVByZXNzZWQgPSBlLndoaWNoID09IDggfHwgZS53aGljaCA9PSA0NlxuICAgIHZhciBhdEVuZFBvc2l0aW9uID0gKGVsLnZhbHVlLmxlbmd0aCAtIGVsLnNlbGVjdGlvbkVuZCkgPT09IDBcbiAgICBpZiAob3B0LmFsbG93QmxhbmsgJiYgYmFja3NwYWNlUHJlc3NlZCAmJiBhdEVuZFBvc2l0aW9uICYmICh1bmZvcm1hdChlbC52YWx1ZSwgMCkgPT09IDApKSB7XG4gICAgICBlbC52YWx1ZSA9ICcnXG4gICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KCdjaGFuZ2UnKSkgLy8gdi1tb2RlbC5sYXp5XG4gICAgfVxuICB9XG5cbiAgZWwub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zaXRpb25Gcm9tRW5kID0gZWwudmFsdWUubGVuZ3RoIC0gZWwuc2VsZWN0aW9uRW5kXG4gICAgZWwudmFsdWUgPSBmb3JtYXQoZWwudmFsdWUsIG9wdClcbiAgICBwb3NpdGlvbkZyb21FbmQgPSBNYXRoLm1heChwb3NpdGlvbkZyb21FbmQsIG9wdC5zdWZmaXgubGVuZ3RoKSAvLyByaWdodFxuICAgIHBvc2l0aW9uRnJvbUVuZCA9IGVsLnZhbHVlLmxlbmd0aCAtIHBvc2l0aW9uRnJvbUVuZFxuICAgIHBvc2l0aW9uRnJvbUVuZCA9IE1hdGgubWF4KHBvc2l0aW9uRnJvbUVuZCwgb3B0LnByZWZpeC5sZW5ndGggKyAxKSAvLyBsZWZ0XG4gICAgc2V0Q3Vyc29yKGVsLCBwb3NpdGlvbkZyb21FbmQpXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCgnY2hhbmdlJykpIC8vIHYtbW9kZWwubGF6eVxuICB9XG5cbiAgZWwub25mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRDdXJzb3IoZWwsIGVsLnZhbHVlLmxlbmd0aCAtIG9wdC5zdWZmaXgubGVuZ3RoKVxuICB9XG5cbiAgaWYgKGVsLnZhbHVlICE9PSAnJykge1xuICAgIGVsLm9uaW5wdXQoKVxuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQoJ2lucHV0JykpIC8vIGZvcmNlIGZvcm1hdCBhZnRlciBpbml0aWFsaXphdGlvblxuICB9XG59XG4iXX0=

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options__ = __webpack_require__(0);


function format(input) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0__options__["a" /* default */];

  if (opt.allowBlank && input == '') {
    return '';
  }

  if (typeof input === 'number') {
    if (input > opt.max) {
      input = opt.max;
    } else if (input < opt.min) {
      input = opt.min;
    }
    input = input.toFixed(fixed(opt.precision));
  }
  var negative = input.indexOf('-') >= 0 ? '-' : '';

  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, opt.precision);
  var parts = toStr(currency).split('.');
  var integer = parts[0];
  var decimal = parts[1];
  integer = addThousandSeparator(integer, opt.thousands);
  return opt.prefix + negative + joinIntegerAndDecimal(integer, decimal, opt.decimal) + opt.suffix;
}

function unformat(input, precision) {
  var negative = input.indexOf('-') >= 0 ? -1 : 1;
  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, precision);
  return parseFloat(currency) * negative;
}

function onlyNumbers(input) {
  return toStr(input).replace(/\D+/g, '') || '0';
}

// Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed(precision) {
  return between(0, precision, 20);
}

function between(min, n, max) {
  return Math.max(min, Math.min(n, max));
}

function numbersToCurrency(numbers, precision) {
  var exp = Math.pow(10, precision);
  var float = parseFloat(numbers) / exp;
  return float.toFixed(fixed(precision));
}

function addThousandSeparator(integer, separator) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, '$1' + separator);
}

function currencyToIntegerAndDecimal(float) {
  return toStr(float).split('.');
}

function joinIntegerAndDecimal(integer, decimal, separator) {
  return decimal ? integer + separator + decimal : integer;
}

function toStr(value) {
  return value ? value.toString() : '';
}

function setCursor(el, position) {
  var setSelectionRange = function setSelectionRange() {
    el.setSelectionRange(position, position);
  };
  if (el === document.activeElement) {
    setSelectionRange();
    setTimeout(setSelectionRange, 1); // Android Fix
  }
}

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event(name) {
  var evt = document.createEvent('Event');
  evt.initEvent(name, true, true);
  return evt;
}


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdXRpbHMuanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJmb3JtYXQiLCJpbnB1dCIsIm9wdCIsImFsbG93QmxhbmsiLCJtYXgiLCJtaW4iLCJ0b0ZpeGVkIiwiZml4ZWQiLCJwcmVjaXNpb24iLCJuZWdhdGl2ZSIsImluZGV4T2YiLCJudW1iZXJzIiwib25seU51bWJlcnMiLCJjdXJyZW5jeSIsIm51bWJlcnNUb0N1cnJlbmN5IiwicGFydHMiLCJ0b1N0ciIsInNwbGl0IiwiaW50ZWdlciIsImRlY2ltYWwiLCJhZGRUaG91c2FuZFNlcGFyYXRvciIsInRob3VzYW5kcyIsInByZWZpeCIsImpvaW5JbnRlZ2VyQW5kRGVjaW1hbCIsInN1ZmZpeCIsInVuZm9ybWF0IiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJiZXR3ZWVuIiwibiIsIk1hdGgiLCJleHAiLCJwb3ciLCJmbG9hdCIsInNlcGFyYXRvciIsImN1cnJlbmN5VG9JbnRlZ2VyQW5kRGVjaW1hbCIsInZhbHVlIiwidG9TdHJpbmciLCJzZXRDdXJzb3IiLCJlbCIsInBvc2l0aW9uIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJuYW1lIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFFBQVAsTUFBcUIsV0FBckI7O0FBRUEsU0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsRUFBd0M7QUFBQSxNQUFoQkMsR0FBZ0IsdUVBQVZILFFBQVU7O0FBQ3RDLE1BQUlHLElBQUlDLFVBQUosSUFBa0JGLFNBQVMsRUFBL0IsRUFBbUM7QUFDakMsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFFBQUlBLFFBQVFDLElBQUlFLEdBQWhCLEVBQXFCO0FBQ2pCSCxjQUFRQyxJQUFJRSxHQUFaO0FBQ0gsS0FGRCxNQUVPLElB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QU4sRUFBUixHQUEyQixFQUFsQztBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBb0JDLEVBQXBCLEVBQXdCQyxRQUF4QixFQUFrQztBQUNoQyxNQUFJQyxvQkFBb0IsU0FBcEJBLGlCQUFvQixHQUFZO0FBQUVGLE9BQUdFLGlCQUFILENBQXFCRCxRQUFyQixFQUErQkEsUUFBL0I7QUFBMEMsR0FBaEY7QUFDQSxNQUFJRCxPQUFPRyxTQUFTQyxhQUFwQixFQUFtQztBQUNqQ0Y7QUFDQUcsZUFBV0gsaUJBQVgsRUFBOEIsQ0FBOUIsRUFGaUMsQ0FFQTtBQUNsQztBQUNGOztBQUVEO0FBQ0EsU0FBU0ksS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDcEIsTUFBSUMsTUFBTUwsU0FBU00sV0FBVCxDQUFxQixPQUFyQixDQUFWO0FBQ0FELE1BQUlFLFNBQUosQ0FBY0gsSUFBZCxFQUFvQixJQUFwQixFQUEwQixJQUExQjtBQUNBLFNBQU9DLEdBQVA7QUFDRDs7QUFFRCxTQUNFL0MsTUFERixFQUVFeUIsUUFGRixFQUdFYSxTQUhGLEVBSUVPLEtBSkYiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUHJva2huL0Rlc2t0b3AvRnJvbnRzdGFydFByb2plY3RzL3YtbW9uZXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9vcHRpb25zJ1xuXG5mdW5jdGlvbiBmb3JtYXQgKGlucHV0LCBvcHQgPSBkZWZhdWx0cykge1xuICBpZiAob3B0LmFsbG93QmxhbmsgJiYgaW5wdXQgPT0gJycpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKGlucHV0ID4gb3B0Lm1heCkge1xuICAgICAgICBpbnB1dCA9IG9wdC5tYXhcbiAgICB9IGVsc2UgaWYgKGlucHV0IDwgb3B0Lm1pbikge1xuICAgICAgICBpbnB1dCA9IG9wdC5taW5cbiAgICB9XG4gICAgaW5wdXQgPSBpbnB1dC50b0ZpeGVkKGZpeGVkKG9wdC5wcmVjaXNpb24pKVxuICB9XG4gIHZhciBuZWdhdGl2ZSA9IGlucHV0LmluZGV4T2YoJy0nKSA+PSAwID8gJy0nIDogJydcblxuICB2YXIgbnVtYmVycyA9IG9ubHlOdW1iZXJzKGlucHV0KVxuICB2YXIgY3VycmVuY3kgPSBudW1iZXJzVG9DdXJyZW5jeShudW1iZXJzLCBvcHQucHJlY2lzaW9uKVxuICB2YXIgcGFydHMgPSB0b1N0cihjdXJyZW5jeSkuc3BsaXQoJy4nKVxuICB2YXIgaW50ZWdlciA9IHBhcnRzWzBdXG4gIHZhciBkZWNpbWFsID0gcGFydHNbMV1cbiAgaW50ZWdlciA9IGFkZFRob3VzYW5kU2VwYXJhdG9yKGludGVnZXIsIG9wdC50aG91c2FuZHMpXG4gIHJldHVybiBvcHQucHJlZml4ICsgbmVnYXRpdmUgKyBqb2luSW50ZWdlckFuZERlY2ltYWwoaW50ZWdlciwgZGVjaW1hbCwgb3B0LmRlY2ltYWwpICsgb3B0LnN1ZmZpeFxufVxuXG5mdW5jdGlvbiB1bmZvcm1hdCAoaW5wdXQsIHByZWNpc2lvbikge1xuICB2YXIgbmVnYXRpdmUgPSBpbnB1dC5pbmRleE9mKCctJykgPj0gMCA/IC0xIDogMVxuICB2YXIgbnVtYmVycyA9IG9ubHlOdW1iZXJzKGlucHV0KVxuICB2YXIgY3VycmVuY3kgPSBudW1iZXJzVG9DdXJyZW5jeShudW1iZXJzLCBwcmVjaXNpb24pXG4gIHJldHVybiBwYXJzZUZsb2F0KGN1cnJlbmN5KSAqIG5lZ2F0aXZlXG59XG5cbmZ1bmN0aW9uIG9ubHlOdW1iZXJzIChpbnB1dCkge1xuICByZXR1cm4gdG9TdHIoaW5wdXQpLnJlcGxhY2UoL1xcRCsvZywgJycpIHx8ICcwJ1xufVxuXG4vLyBVbmNhdWdodCBSYW5nZUVycm9yOiB0b0ZpeGVkKCkgZGlnaXRzIGFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyMCBhdCBOdW1iZXIudG9GaXhlZFxuZnVuY3Rpb24gZml4ZWQgKHByZWNpc2lvbikge1xuICByZXR1cm4gYmV0d2VlbigwLCBwcmVjaXNpb24sIDIwKVxufVxuXG5mdW5jdGlvbiBiZXR3ZWVuIChtaW4sIG4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihuLCBtYXgpKVxufVxuXG5mdW5jdGlvbiBudW1iZXJzVG9DdXJyZW5jeSAobnVtYmVycywgcHJlY2lzaW9uKSB7XG4gIHZhciBleHAgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKVxuICB2YXIgZmxvYXQgPSBwYXJzZUZsb2F0KG51bWJlcnMpIC8gZXhwXG4gIHJldHVybiBmbG9hdC50b0ZpeGVkKGZpeGVkKHByZWNpc2lvbikpXG59XG5cbmZ1bmN0aW9uIGFkZFRob3VzYW5kU2VwYXJhdG9yIChpbnRlZ2VyLCBzZXBhcmF0b3IpIHtcbiAgcmV0dXJuIGludGVnZXIucmVwbGFjZSgvKFxcZCkoPz0oPzpcXGR7M30pK1xcYikvZ20sIGAkMSR7c2VwYXJhdG9yfWApXG59XG5cbmZ1bmN0aW9uIGN1cnJlbmN5VG9JbnRlZ2VyQW5kRGVjaW1hbCAoZmxvYXQpIHtcbiAgcmV0dXJuIHRvU3RyKGZsb2F0KS5zcGxpdCgnLicpXG59XG5cbmZ1bmN0aW9uIGpvaW5JbnRlZ2VyQW5kRGVjaW1hbCAoaW50ZWdlciwgZGVjaW1hbCwgc2VwYXJhdG9yKSB7XG4gIHJldHVybiBkZWNpbWFsID8gaW50ZWdlciArIHNlcGFyYXRvciArIGRlY2ltYWwgOiBpbnRlZ2VyXG59XG5cbmZ1bmN0aW9uIHRvU3RyICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogJydcbn1cblxuZnVuY3Rpb24gc2V0Q3Vyc29yIChlbCwgcG9zaXRpb24pIHtcbiAgdmFyIHNldFNlbGVjdGlvblJhbmdlID0gZnVuY3Rpb24gKCkgeyBlbC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pIH1cbiAgaWYgKGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgc2V0U2VsZWN0aW9uUmFuZ2UoKVxuICAgIHNldFRpbWVvdXQoc2V0U2VsZWN0aW9uUmFuZ2UsIDEpIC8vIEFuZHJvaWQgRml4XG4gIH1cbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvRXZlbnRzL0NyZWF0aW5nX2FuZF90cmlnZ2VyaW5nX2V2ZW50cyNUaGVfb2xkLWZhc2hpb25lZF93YXlcbmZ1bmN0aW9uIGV2ZW50IChuYW1lKSB7XG4gIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpXG4gIHJldHVybiBldnRcbn1cblxuZXhwb3J0IHtcbiAgZm9ybWF0LFxuICB1bmZvcm1hdCxcbiAgc2V0Q3Vyc29yLFxuICBldmVudFxufVxuIl19

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(0);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return __WEBPACK_IMPORTED_MODULE_0__component___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VMoney", function() { return __WEBPACK_IMPORTED_MODULE_1__directive__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return __WEBPACK_IMPORTED_MODULE_2__options__["a"]; });



var VERSION = "0.9.0";



function install(Vue, globalOptions) {
  if (globalOptions) {
    Object.keys(globalOptions).map(function (key) {
      __WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */][key] = globalOptions[key];
    });
  }
  Vue.directive('money', __WEBPACK_IMPORTED_MODULE_1__directive__["a" /* default */]);
  Vue.component('money', __WEBPACK_IMPORTED_MODULE_0__component___default.a);
}

/* harmony default export */ __webpack_exports__["default"] = (install);

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiTW9uZXkiLCJWTW9uZXkiLCJvcHRpb25zIiwiVkVSU0lPTiIsInByb2NjZXNzIiwiZW52IiwiaW5zdGFsbCIsIlZ1ZSIsImdsb2JhbE9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZGlyZWN0aXZlIiwiY29tcG9uZW50Iiwid2luZG93IiwidXNlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLGFBQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7QUFDQSxJQUFNQyxVQUFVQyxTQUFTQyxHQUFULENBQWFGLE9BQTdCOztBQUVBLFNBQ0VILEtBREYsRUFFRUMsTUFGRixFQUdFQyxPQUhGLEVBSUVDLE9BSkY7O0FBT0EsU0FBU0csT0FBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLGFBQXZCLEVBQXNDO0FBQ3BDLE1BQUlBLGFBQUosRUFBbUI7QUFDakJDLFdBQU9DLElBQVAsQ0FBWUYsYUFBWixFQUEyQkcsR0FBM0IsQ0FBK0IsVUFBU0MsR0FBVCxFQUFhO0FBQzFDVixjQUFRVSxHQUFSLElBQWVKLGNBQWNJLEdBQWQsQ0FBZjtBQUNELEtBRkQ7QUFHRDtBQUNETCxNQUFJTSxTQUFKLENBQWMsT0FBZCxFQUF1QlosTUFBdkI7QUFDQU0sTUFBSU8sU0FBSixDQUFjLE9BQWQsRUFBdUJkLEtBQXZCO0FBQ0Q7O0FBRUQsZUFBZU0sT0FBZjs7QUFFQTtBQUNBLElBQUksT0FBT1MsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT1IsR0FBNUMsRUFBaUQ7QUFDL0NRLFNBQU9SLEdBQVAsQ0FBV1MsR0FBWCxDQUFlVixPQUFmO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUHJva2huL0Rlc2t0b3AvRnJvbnRzdGFydFByb2plY3RzL3YtbW9uZXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9uZXkgZnJvbSAnLi9jb21wb25lbnQnXG5pbXBvcnQgVk1vbmV5IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuY29uc3QgVkVSU0lPTiA9IHByb2NjZXNzLmVudi5WRVJTSU9OXG5cbmV4cG9ydCB7XG4gIE1vbmV5LFxuICBWTW9uZXksXG4gIG9wdGlvbnMsXG4gIFZFUlNJT05cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoVnVlLCBnbG9iYWxPcHRpb25zKSB7XG4gIGlmIChnbG9iYWxPcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMoZ2xvYmFsT3B0aW9ucykubWFwKGZ1bmN0aW9uKGtleSl7XG4gICAgICBvcHRpb25zW2tleV0gPSBnbG9iYWxPcHRpb25zW2tleV1cbiAgICB9KVxuICB9XG4gIFZ1ZS5kaXJlY3RpdmUoJ21vbmV5JywgVk1vbmV5KVxuICBWdWUuY29tcG9uZW50KCdtb25leScsIE1vbmV5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnN0YWxsXG5cbi8vIEluc3RhbGwgYnkgZGVmYXVsdCBpZiBpbmNsdWRlZCBmcm9tIHNjcmlwdCB0YWdcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKGluc3RhbGwpXG59XG4iXX0=

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (defaults, extras) {
  defaults = defaults || {};
  extras = extras || {};
  return Object.keys(defaults).concat(Object.keys(extras)).reduce(function (acc, val) {
    acc[val] = extras[val] === undefined ? defaults[val] : extras[val];
    return acc;
  }, {});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcYXNzaWduLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRzIiwiZXh0cmFzIiwiT2JqZWN0Iiwia2V5cyIsImNvbmNhdCIsInJlZHVjZSIsImFjYyIsInZhbCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxVQUFVQSxRQUFWLEVBQW9CQyxNQUFwQixFQUE0QjtBQUN6Q0QsYUFBV0EsWUFBWSxFQUF2QjtBQUNBQyxXQUFTQSxVQUFVLEVBQW5CO0FBQ0EsU0FBT0MsT0FBT0MsSUFBUCxDQUFZSCxRQUFaLEVBQXNCSSxNQUF0QixDQUE2QkYsT0FBT0MsSUFBUCxDQUFZRixNQUFaLENBQTdCLEVBQWtESSxNQUFsRCxDQUEwRCxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDbkZELFFBQUlDLEdBQUosSUFBV04sT0FBT00sR0FBUCxNQUFnQkMsU0FBaEIsR0FBNEJSLFNBQVNPLEdBQVQsQ0FBNUIsR0FBNENOLE9BQU9NLEdBQVAsQ0FBdkQ7QUFDQSxXQUFPRCxHQUFQO0FBQ0QsR0FITSxFQUdKLEVBSEksQ0FBUDtBQUlEIiwiZmlsZSI6ImFzc2lnbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Qcm9raG4vRGVza3RvcC9Gcm9udHN0YXJ0UHJvamVjdHMvdi1tb25leSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkZWZhdWx0cywgZXh0cmFzKSB7XG4gIGRlZmF1bHRzID0gZGVmYXVsdHMgfHwge31cbiAgZXh0cmFzID0gZXh0cmFzIHx8IHt9XG4gIHJldHVybiBPYmplY3Qua2V5cyhkZWZhdWx0cykuY29uY2F0KE9iamVjdC5rZXlzKGV4dHJhcykpLnJlZHVjZSggZnVuY3Rpb24gKGFjYywgdmFsKSB7XG4gICAgYWNjW3ZhbF0gPSBleHRyYXNbdmFsXSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdHNbdmFsXSA6IGV4dHJhc1t2YWxdXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcbn1cbiJdfQ==

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Money',
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: () => __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].precision
    },
    decimal: {
      type: String,
      default: () => __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].decimal
    },
    thousands: {
      type: String,
      default: () => __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].thousands
    },
    max: {
      type: Number,
      default: () => __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].max
    },
    min: {
      type: Number,
      default: () => __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].min
    },
    prefix: {
      type: String,
      default: () => __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].prefix
    },
    suffix: {
      type: String,
      default: () => __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].suffix
    },
    allowBlank: {
      type: Boolean,
      default: () => __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].allowBlank
    }
  },

  directives: { money: __WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */] },

  data() {
    return {
      formattedValue: ''
    }
  },

  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        var formatted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* format */])(newValue, this.$props)
        if (formatted !== this.formattedValue) {
          this.formattedValue = formatted
        }
      }
    }
  },

  methods: {
    change(evt) {
      if (this.allowBlank) {
        if (evt.target.value === '') {
          this.$emit('input', '')
        } else {
          this.$emit('input', this.masked ? evt.target.value : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* unformat */])(evt.target.value, this.precision).toString())
        }
      } else {
        this.$emit('input', this.masked ? evt.target.value : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* unformat */])(evt.target.value, this.precision))
      }
    }
  },

});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    directives: [{
      name: "money",
      rawName: "v-money",
      value: ({
        precision: _vm.precision,
        decimal: _vm.decimal,
        thousands: _vm.thousands,
        prefix: _vm.prefix,
        suffix: _vm.suffix,
        allowBlank: _vm.allowBlank,
        min: _vm.min,
        max: _vm.max
      }),
      expression: "{precision, decimal, thousands, prefix, suffix, allowBlank, min, max}"
    }],
    staticClass: "v-money",
    domProps: {
      "value": _vm.formattedValue
    },
    on: {
      "input": _vm.change
    }
  })
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});