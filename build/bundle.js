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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(12);


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
var config_1 = __webpack_require__(6);
console.log(config_1.config);
var server = server_1.default.getInstance();
server.use(__webpack_require__(11));
server.listen();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var morgan = __webpack_require__(4);
var bodyParser = __webpack_require__(5);
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
        this.app.listen(9002, function (req, res) { return console.log('server listening'); });
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
var env_1 = __webpack_require__(7);
exports.config = __webpack_require__(8)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.APP_ENV || 'development';


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 9,
	"./production.json": 10
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
webpackContext.id = 8;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"host":""}}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"host":""}}

/***/ }),
/* 11 */
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
module.exports = router;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(13);
var nodeExternals = __webpack_require__(14);

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts?$/
            }
        ]
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
      },
    target: 'node',
    externals: [nodeExternals()],
}
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzc5M2U5YTRjZTM5YTkxYmFhYTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbG9jYXRpb25Sb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FB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QUcsTUFBTSxDQUFDOzs7Ozs7O0FDbkJ4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQzs7Ozs7OztBQzlCQSxpQzs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM3OTNlOWE0Y2UzOWE5MWJhYWEzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKmludGVyZmFjZSBJSG9tZXIge1xyXG4gICAgbmFtZSgpOiBTdHJpbmc7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBIb21lciBpbXBsZW1lbnRzIElIb21lciB7XHJcbiAgICBuYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuICdIb21lciBTaW1wc29uJztcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBuZXcgSG9tZXIoKTtcclxuY29uc29sZS5sb2coaW5zdGFuY2UubmFtZSgpKTtcclxuXHJcbmNvbnNvbGUubG9nKCdjaWFvb29vJyk7XHJcbmxldCBhID0ge2I6IDQsIGM6IDd9O1xyXG5sZXQgY2MgPSB7Li4uYX07XHJcbmNvbnNvbGUubG9nKGNjKTsgLy90ZXN0aW5nIEVTNiBzcHJlYWQgb3BlcmF0b3JcclxuKi9cclxuLypcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJzsgXHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAubGlzdGVuKDkwMDIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXIgbGlzdGVuaW5nJyk7XHJcbn0pIFxyXG5cclxuXHJcbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKCdoZWxsbyB3b3JsZCcpKVxyXG5cclxuKi9cclxuXHJcbi8vY29uc3QgU2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcclxuaW1wb3J0IFNlcnZlciBmcm9tICcuL3NlcnZlcic7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XHJcbmNvbnNvbGUubG9nKGNvbmZpZyk7XHJcbmxldCBzZXJ2ZXIgPSBTZXJ2ZXIuZ2V0SW5zdGFuY2UoKTtcclxuc2VydmVyLnVzZShyZXF1aXJlKCcuL3JvdXRlcy9sb2NhdGlvblJvdXRlJykpO1xyXG5zZXJ2ZXIubGlzdGVuKCk7XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlciB7XHJcbiAgICBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6IFNlcnZlcjtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcclxuICAgICAgICB0aGlzLmFwcC51c2UobW9yZ2FuKCdkZXYnKSk7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBzZXJ2ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKCFTZXJ2ZXIuaW5zdGFuY2Upe1xyXG4gICAgICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UgPSBuZXcgU2VydmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTZXJ2ZXIuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXNlKG1pZGRsZXdhcmU6IGV4cHJlc3MuUmVxdWVzdEhhbmRsZXIpe1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShtaWRkbGV3YXJlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsaXN0ZW4oKXtcclxuICAgICAgICB0aGlzLmFwcC5saXN0ZW4oOTAwMiwgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKCdzZXJ2ZXIgbGlzdGVuaW5nJykpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vcmdhblwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0FQUF9FTlZ9IGZyb20gJy4vZW52JztcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoYC4vY29uZmlnLyR7QVBQX0VOVn0uanNvbmApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWcudHMiLCJleHBvcnQgY29uc3QgQVBQX0VOViA9IHByb2Nlc3MuZW52LkFQUF9FTlYgfHwgJ2RldmVsb3BtZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52LnRzIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldmVsb3BtZW50Lmpzb25cIjogOSxcblx0XCIuL3Byb2R1Y3Rpb24uanNvblwiOiAxMFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjkwMDJ9LFwibW9uZ29cIjp7XCJob3N0XCI6XCJcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6OTAwMn0sXCJtb25nb1wiOntcImhvc3RcIjpcIlwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgSUxvY2F0aW9uIGZyb20gJy4uL21vZGVsL0lMb2NhdGlvbic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKCdjaWFvbmUnKTtcclxuICAgIHJlcy5qc29uKHtwaXBwbzogJ2NpYW8nfSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvOmlkJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuXHJcbn0pXHJcblxyXG5cclxucm91dGVyLmRlbGV0ZSgnLzppZCcsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICBcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvbG9jYXRpb25Sb3V0ZS50cyIsInZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG52YXIgbm9kZUV4dGVybmFscyA9IHJlcXVpcmUoJ3dlYnBhY2stbm9kZS1leHRlcm5hbHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZW50cnk6ICcuL3NyYy9pbmRleC50cycsXHJcbiAgICBkZXZ0b29sOiAnaW5saW5lLXNvdXJjZS1tYXAnLFxyXG4gICAgb3V0cHV0OiB7XHJcbiAgICAgICAgcHVibGljUGF0aDogXCIvXCIsXHJcbiAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2J1aWxkJyksXHJcbiAgICAgICAgZmlsZW5hbWU6ICdidW5kbGUuanMnXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGV4dGVuc2lvbnM6IFsnLnRzJ10gLy9yZXNvbHZlIGFsbCB0aGUgbW9kdWxlcyBvdGhlciB0aGFuIGluZGV4LnRzXHJcbiAgICB9LFxyXG4gICAgbW9kdWxlOiB7XHJcbiAgICAgICAgcnVsZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVyOiAndHMtbG9hZGVyJyxcclxuICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC50cz8kL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHN0YXRzOiB7XHJcbiAgICAgICAgY29sb3JzOiB0cnVlLFxyXG4gICAgICAgIG1vZHVsZXM6IHRydWUsXHJcbiAgICAgICAgcmVhc29uczogdHJ1ZSxcclxuICAgICAgICBlcnJvckRldGFpbHM6IHRydWVcclxuICAgICAgfSxcclxuICAgIHRhcmdldDogJ25vZGUnLFxyXG4gICAgZXh0ZXJuYWxzOiBbbm9kZUV4dGVybmFscygpXSxcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd2VicGFjay5jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=