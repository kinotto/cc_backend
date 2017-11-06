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

module.exports = {"server":{"PORT":8080},"mongo":{"host":""}}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"host":""}}

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
//c
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTBkZDA4NTA3MGU0YWEyOTdlNzYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbG9jYXRpb25Sb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FB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QUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7OztBQ3BCeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5QkEsaUM7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MGRkMDg1MDcwZTRhYTI5N2U3NiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyppbnRlcmZhY2UgSUhvbWVyIHtcclxuICAgIG5hbWUoKTogU3RyaW5nO1xyXG59XHJcblxyXG5cclxuY2xhc3MgSG9tZXIgaW1wbGVtZW50cyBJSG9tZXIge1xyXG4gICAgbmFtZSgpe1xyXG4gICAgICAgIHJldHVybiAnSG9tZXIgU2ltcHNvbic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGluc3RhbmNlID0gbmV3IEhvbWVyKCk7XHJcbmNvbnNvbGUubG9nKGluc3RhbmNlLm5hbWUoKSk7XHJcblxyXG5jb25zb2xlLmxvZygnY2lhb29vbycpO1xyXG5sZXQgYSA9IHtiOiA0LCBjOiA3fTtcclxubGV0IGNjID0gey4uLmF9O1xyXG5jb25zb2xlLmxvZyhjYyk7IC8vdGVzdGluZyBFUzYgc3ByZWFkIG9wZXJhdG9yXHJcbiovXHJcbi8qXHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7IFxyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLmxpc3Rlbig5MDAyLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VydmVyIGxpc3RlbmluZycpO1xyXG59KSBcclxuXHJcblxyXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiByZXMuc2VuZCgnaGVsbG8gd29ybGQnKSlcclxuXHJcbiovXHJcblxyXG4vL2NvbnN0IFNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XHJcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xyXG5jb25zb2xlLmxvZyhjb25maWcpO1xyXG5sZXQgc2VydmVyID0gU2VydmVyLmdldEluc3RhbmNlKCk7XHJcbnNlcnZlci51c2UocmVxdWlyZSgnLi9yb3V0ZXMvbG9jYXRpb25Sb3V0ZScpKTtcclxuc2VydmVyLmxpc3RlbigpO1xyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2ZXIge1xyXG4gICAgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uO1xyXG4gICAgc3RhdGljIGluc3RhbmNlOiBTZXJ2ZXI7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKG1vcmdhbignZGV2JykpO1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2Ygc2VydmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcclxuICAgICAgICBpZighU2VydmVyLmluc3RhbmNlKXtcclxuICAgICAgICAgICAgU2VydmVyLmluc3RhbmNlID0gbmV3IFNlcnZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2VydmVyLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVzZShtaWRkbGV3YXJlOiBleHByZXNzLlJlcXVlc3RIYW5kbGVyKXtcclxuICAgICAgICB0aGlzLmFwcC51c2UobWlkZGxld2FyZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbGlzdGVuKCl7XHJcbiAgICAgICAgdGhpcy5hcHAubGlzdGVuKDkwMDIsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGxpc3RlbmluZycpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtBUFBfRU5WfSBmcm9tICcuL2Vudic7XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSByZXF1aXJlKGAuL2NvbmZpZy8ke0FQUF9FTlZ9Lmpzb25gKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwiZXhwb3J0IGNvbnN0IEFQUF9FTlYgPSBwcm9jZXNzLmVudi5BUFBfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudi50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc29uXCI6IDksXG5cdFwiLi9wcm9kdWN0aW9uLmpzb25cIjogMTBcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo4MDgwfSxcIm1vbmdvXCI6e1wiaG9zdFwiOlwiXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjgwODB9LFwibW9uZ29cIjp7XCJob3N0XCI6XCJcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IElMb2NhdGlvbiBmcm9tICcuLi9tb2RlbC9JTG9jYXRpb24nO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xyXG4gICAgLy9yZXMuc3RhdHVzKDIwMCkuc2VuZCgnY2lhb25lJyk7XHJcbiAgICByZXMuanNvbih7cGlwcG86ICdjaWFvJ30pXHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnLzppZCcsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcblxyXG59KVxyXG5cclxuXHJcbnJvdXRlci5kZWxldGUoJy86aWQnLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xyXG4gICAgXHJcbn0pXHJcblxyXG4vL2NcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9sb2NhdGlvblJvdXRlLnRzIiwidmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbnZhciBub2RlRXh0ZXJuYWxzID0gcmVxdWlyZSgnd2VicGFjay1ub2RlLWV4dGVybmFscycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBlbnRyeTogJy4vc3JjL2luZGV4LnRzJyxcclxuICAgIGRldnRvb2w6ICdpbmxpbmUtc291cmNlLW1hcCcsXHJcbiAgICBvdXRwdXQ6IHtcclxuICAgICAgICBwdWJsaWNQYXRoOiBcIi9cIixcclxuICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnYnVpbGQnKSxcclxuICAgICAgICBmaWxlbmFtZTogJ2J1bmRsZS5qcydcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgZXh0ZW5zaW9uczogWycudHMnXSAvL3Jlc29sdmUgYWxsIHRoZSBtb2R1bGVzIG90aGVyIHRoYW4gaW5kZXgudHNcclxuICAgIH0sXHJcbiAgICBtb2R1bGU6IHtcclxuICAgICAgICBydWxlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZXI6ICd0cy1sb2FkZXInLFxyXG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLnRzPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgc3RhdHM6IHtcclxuICAgICAgICBjb2xvcnM6IHRydWUsXHJcbiAgICAgICAgbW9kdWxlczogdHJ1ZSxcclxuICAgICAgICByZWFzb25zOiB0cnVlLFxyXG4gICAgICAgIGVycm9yRGV0YWlsczogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgdGFyZ2V0OiAnbm9kZScsXHJcbiAgICBleHRlcm5hbHM6IFtub2RlRXh0ZXJuYWxzKCldLFxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93ZWJwYWNrLmNvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==