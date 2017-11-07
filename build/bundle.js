/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = __webpack_require__(6);
exports.config = __webpack_require__(7)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*interface IHomer {
    name(): String;
}


class Homer implements IHomer {
    name(){
        return 'Homer Simpson';
    }
}

const instance = new Homer();
console.log(instance.name());

console.log('ciaoooo');
let a = {b: 4, c: 7};
let cc = {...a};
console.log(cc); //testing ES6 spread operator
*/
/*
import * as express from 'express';

const app = express();

app.listen(9002, () => {
    console.log('server listening');
})


app.get('/', (req, res) => res.send('hello world'))

*/
Object.defineProperty(exports, "__esModule", { value: true });
//const Server = require('./server');
var server_1 = __webpack_require__(3);
var config_1 = __webpack_require__(1);
console.log(config_1.config);
var server = server_1.default.getInstance();
server.use(__webpack_require__(10));
server.listen();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var morgan = __webpack_require__(4);
var bodyParser = __webpack_require__(5);
var config_1 = __webpack_require__(1);
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    /**
     * @returns an instance of server
     */
    Server.getInstance = function () {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    };
    Server.prototype.use = function (middleware) {
        this.app.use(middleware);
    };
    Server.prototype.listen = function () {
        this.app.listen(process.env.PORT || config_1.config.server.PORT, function (req, res) {
            return console.log("server listening on port  " + (process.env.PORT || config_1.config.server.PORT));
        });
    };
    return Server;
}());
exports.default = Server;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.NODE_ENV || 'development';


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 8,
	"./production.json": 9
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"host":""}}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"host":""}}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var router = express.Router();
router.get('/', function (req, res) {
    //res.status(200).send('ciaone');
    res.json({ pippo: 'ciao' });
});
router.post('/:id', function (req, res) {
});
router.delete('/:id', function (req, res) {
});
//c
module.exports = router;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGFmYTA4OTViYWMyOGNlODZjYzAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZW52LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbG9jYXRpb25Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsb0M7Ozs7Ozs7OztBQ0FBLG1DQUE4QjtBQUNqQixjQUFNLEdBQUcsMkJBQVEsR0FBWSxhQUFPLFVBQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7QUNEMUQ7Ozs7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LENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGFmYTA4OTViYWMyOGNlODZjYzAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7QVBQX0VOVn0gZnJvbSAnLi9lbnYnO1xyXG5leHBvcnQgY29uc3QgY29uZmlnID0gcmVxdWlyZShgLi9jb25maWcvJHtBUFBfRU5WfS5qc29uYCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy50cyIsIi8qaW50ZXJmYWNlIElIb21lciB7XHJcbiAgICBuYW1lKCk6IFN0cmluZztcclxufVxyXG5cclxuXHJcbmNsYXNzIEhvbWVyIGltcGxlbWVudHMgSUhvbWVyIHtcclxuICAgIG5hbWUoKXtcclxuICAgICAgICByZXR1cm4gJ0hvbWVyIFNpbXBzb24nO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IG5ldyBIb21lcigpO1xyXG5jb25zb2xlLmxvZyhpbnN0YW5jZS5uYW1lKCkpO1xyXG5cclxuY29uc29sZS5sb2coJ2NpYW9vb28nKTtcclxubGV0IGEgPSB7YjogNCwgYzogN307XHJcbmxldCBjYyA9IHsuLi5hfTtcclxuY29uc29sZS5sb2coY2MpOyAvL3Rlc3RpbmcgRVM2IHNwcmVhZCBvcGVyYXRvclxyXG4qL1xyXG4vKlxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnOyBcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC5saXN0ZW4oOTAwMiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NlcnZlciBsaXN0ZW5pbmcnKTtcclxufSkgXHJcblxyXG5cclxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4gcmVzLnNlbmQoJ2hlbGxvIHdvcmxkJykpXHJcblxyXG4qL1xyXG5cclxuLy9jb25zdCBTZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4vc2VydmVyJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcclxuY29uc29sZS5sb2coY29uZmlnKTtcclxubGV0IHNlcnZlciA9IFNlcnZlci5nZXRJbnN0YW5jZSgpO1xyXG5zZXJ2ZXIudXNlKHJlcXVpcmUoJy4vcm91dGVzL2xvY2F0aW9uUm91dGUnKSk7XHJcbnNlcnZlci5saXN0ZW4oKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyIHtcclxuICAgIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcclxuICAgIHN0YXRpYyBpbnN0YW5jZTogU2VydmVyO1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHNlcnZlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCl7XHJcbiAgICAgICAgaWYoIVNlcnZlci5pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIFNlcnZlci5pbnN0YW5jZSA9IG5ldyBTZXJ2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNlcnZlci5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1c2UobWlkZGxld2FyZTogZXhwcmVzcy5SZXF1ZXN0SGFuZGxlcil7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKG1pZGRsZXdhcmUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxpc3Rlbigpe1xyXG4gICAgICAgIHRoaXMuYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5zZXJ2ZXIuUE9SVCwgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IEFQUF9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnYudHMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV2ZWxvcG1lbnQuanNvblwiOiA4LFxuXHRcIi4vcHJvZHVjdGlvbi5qc29uXCI6IDlcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo5MDAyfSxcIm1vbmdvXCI6e1wiaG9zdFwiOlwiXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjgwODB9LFwibW9uZ29cIjp7XCJob3N0XCI6XCJcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgSUxvY2F0aW9uIGZyb20gJy4uL21vZGVsL0lMb2NhdGlvbic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKCdjaWFvbmUnKTtcclxuICAgIHJlcy5qc29uKHtwaXBwbzogJ2NpYW8nfSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvOmlkJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuXHJcbn0pXHJcblxyXG5cclxucm91dGVyLmRlbGV0ZSgnLzppZCcsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICBcclxufSlcclxuXHJcbi8vY1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2xvY2F0aW9uUm91dGUudHMiXSwic291cmNlUm9vdCI6IiJ9