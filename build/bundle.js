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
var env_1 = __webpack_require__(8);
exports.config = __webpack_require__(9)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(3);
var mongo_1 = __webpack_require__(6);
var config_1 = __webpack_require__(1);
var verify_user_1 = __webpack_require__(13);
var server = server_1.default.getInstance();
mongo_1.default.connect();
mongo_1.default.populateDB();
server.use('/api', verify_user_1.VerifyUser, __webpack_require__(15));
//generic error handler
server.use(function (err, req, res, next) {
    res.json({
        message: err.message,
        error: 500
    });
});
server.listen(process.env.PORT || config_1.config.server.PORT, function (req, res) {
    console.log("server listening on port  " + (process.env.PORT || config_1.config.server.PORT));
});
//server.listen();


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
        Server.instance.use(morgan('dev'));
        Server.instance.use(bodyParser.json());
        Server.instance.use(bodyParser.urlencoded({ extended: false }));
    }
    /**
     * @returns an instance of server
     */
    Server.getInstance = function () {
        if (!Server.instance) {
            Server.instance = express();
        }
        return Server.instance;
    };
    Server.prototype.use = function (middleware) {
        Server.instance.use(middleware);
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
var mongoose = __webpack_require__(7);
var config_1 = __webpack_require__(1);
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    /**
     * populate mongo db with some mock data
     */
    Mongo.populateDB = function () {
        //populateDB(Mongo.db);
    };
    /**
     * @returns an instance of mongoose.Connection
     */
    Mongo.connect = function () {
        mongoose.connect(config_1.config.mongo.uri, { useMongoClient: true });
        Mongo.db = mongoose.connection;
        Mongo.db.on('error', console.error.bind(console, 'connection error'));
        Mongo.db.once('open', console.log.bind(console, 'connected correctly to mongo db'));
        return Mongo.db;
    };
    return Mongo;
}());
exports.default = Mongo;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.NODE_ENV || 'development';


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 10,
	"./ideas.json": 11,
	"./production.json": 12
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
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [{"title":"The Lakes Distillery","description":"Opened in 2014, The Lakes Distillery is England's largest whisky distillery, receiving over 100,000 visitors annually and has sold over 160,000 bottles of their premium gin, vodka, and blended whisky; voted one of the top 5 best new distilleries in the world by Time Out USA.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","target":1000000,"raised":681700,"equity":"2.21%","investors":841},{"title":"Movem","description":"Movem is an online property portal, allowing tenants to review their rental experiences, whilst building their own digital rental profile, known as a Movem Passport. Agents and landlords can pay to instantly download a tenant's full reference, designed to be cheaper, quicker, and less open to fraud.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","target":300000,"raised":327000,"equity":"11.99%","investors":292},{"title":"SilverSurfers","description":"With one of the UK’s largest online communities for the young at heart over 50's, Silversurfers has over half a million followers. The company has achieved £860k+ revenue from advertising, social media and commission-related partnerships with major brands such as Allianz and Nestle.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cc-ss-logo_3f4131525d8d00150894943fd55123a9.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21553/201709/5db906d7296905c778d2512029f442f6.jpg","target":300000,"raised":52750,"equity":"3.61%","investors":42},{"title":"Crowdfunder","description":"The UK’s #1 rewards-based crowdfunding platform, Crowdfunder, now has grown to an online community of over 600,000, and has worked with over 80,000 projects to raise £40 million since 2014. Now EBITDA positive with plans to disrupt the £5.6bn grant giving sector.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cf_square_b2bb538ea35a97c57479c205ef45ee64.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","target":750000,"raised":723030,"equity":"4.27%","investors":674},{"title":"Rightangled","description":"Backed by NHS England, Rightangled is a CQC registered healthcare provider for genetic testing. Having designed their Cardiac genetic test and filed a patent already, the team now seek to expand their testing and telemedicine service into new tests and markets. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201708/ra_logo-_crowdcube_cd6ed104b7534e4bcab22ea9502a2363.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","target":100000,"raised":263950,"equity":"14.96%","investors":495},{"title":"Shaw Academy","description":"Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg","target":2194000,"raised":2399130,"equity":"2.79%","investors":1686},{"title":"Loose Ends App","description":"Loose Ends is a new app designed to help people get together effortlessly. 60% of Britons want to socialise more often, but organising nights out can be complicated: many planned meetups never happen. Loose Ends is a one-stop social solution, targeting a market worth £60bn per annum in the UK alone.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/hi-res-logo-v2-large_34601eeb3a31625bbcf73317b0bf4597.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21686/201710/2ad35aa66c1ada81a406c5a7974c8dde.jpg","target":100000,"raised":33160,"equity":"10.00%","investors":20},{"title":"Housers","description":"Launched in 2016 and based in Madrid, Spain, Housers is a real estate crowdfunding platform that makes it easy for investors to invest in European real estate both for rental income and capital gain. They currently manage €32m in investment and now plan to expand their product offering &amp; coverage. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/00_perfil_crowdcube6_abc76d17bddc7bb9288fc087bb84106c.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21638/201709/02_cover_crowdcube_montaje_2_8cf542f62c819492f4e23eff46fd4f07.jpg","target":850000,"raised":820430,"equity":"2.22%","investors":937},{"title":"passingboxes","description":"passingboxes aims to be the world’s most comprehensive website for dealing with death. It provides services to help secure your digital legacy and pass on the things that really matter. passingboxes aims to have 500,000 members by 2022 in an industry that is worth £1.7 billion per annum.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_for_crowdcube_505014dd986949ba29fb27493d703532.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21612/201709/header_image_20170920_2c1b0e9c7c94db54af9d3004445f0137.jpg","target":150000,"raised":71590,"equity":"5.00%","investors":111}]

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware to authenticate a user
 * @param req
 * @param res
 * @param next
 */
exports.VerifyUser = function (req, res, next) {
    //here there should be an authentication mechanism to authenticate each request before trigger the next
    //middleware, for this sample project i just call the next middleware in the chain without doing any
    //authentication
    return next();
};


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var idea_1 = __webpack_require__(16);
var router = express.Router();
router.get('/', function (req, res, next) {
    idea_1.Idea.find({}, function (err, ideas) {
        if (err) {
            return next(err);
        }
        res.status(200).json(ideas);
    });
});
router.post('/:id', function (req, res) {
});
router.delete('/:id', function (req, res) {
});
//c
module.exports = router;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(7);
var ideaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    raised: {
        type: Number,
        default: 0
    },
    equity: {
        type: String,
        required: true
    },
    investors: {
        type: Number,
        required: true
    },
});
exports.Idea = mongoose.model('Idea', ideaSchema);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmQwMmE1M2U3N2ZhNzU4MzcwZWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb25nby50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pZGVhcy5qc29uIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uIiwid2VicGFjazovLy8uL3NyYy92ZXJpZnktdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FwaVJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9pZGVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FB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RSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0NBRUosQ0FBQztBQUNXLFlBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmQwMmE1M2U3N2ZhNzU4MzcwZWYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7QVBQX0VOVn0gZnJvbSAnLi9lbnYnO1xyXG5leHBvcnQgY29uc3QgY29uZmlnID0gcmVxdWlyZShgLi9jb25maWcvJHtBUFBfRU5WfS5qc29uYCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy50cyIsImltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xyXG5pbXBvcnQgTW9uZ28gZnJvbSAnLi9zdG9yYWdlL21vbmdvJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHtWZXJpZnlVc2VyfSBmcm9tICcuL3ZlcmlmeS11c2VyJztcclxuXHJcbmxldCBzZXJ2ZXIgPSBTZXJ2ZXIuZ2V0SW5zdGFuY2UoKTtcclxuTW9uZ28uY29ubmVjdCgpO1xyXG5Nb25nby5wb3B1bGF0ZURCKCk7XHJcblxyXG5zZXJ2ZXIudXNlKCcvYXBpJywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvYXBpUm91dGVzJykpO1xyXG5cclxuXHJcblxyXG4vL2dlbmVyaWMgZXJyb3IgaGFuZGxlclxyXG5zZXJ2ZXIudXNlKChlcnI6IEVycm9yLCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgIGVycm9yOiA1MDBcclxuICAgIH0pXHJcbn0pIFxyXG5cclxuc2VydmVyLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5zZXJ2ZXIuUE9SVCwgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApO1xyXG59KVxyXG5cclxuXHJcbi8vc2VydmVyLmxpc3RlbigpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyIHtcclxuICAgIHN0YXRpYyBpbnN0YW5jZTogZXhwcmVzcy5FeHByZXNzO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1vcmdhbignZGV2JykpO1xyXG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBzZXJ2ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKCFTZXJ2ZXIuaW5zdGFuY2Upe1xyXG4gICAgICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UgPSBleHByZXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTZXJ2ZXIuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXNlKG1pZGRsZXdhcmU6IGV4cHJlc3MuUmVxdWVzdEhhbmRsZXIgfCBleHByZXNzLkVycm9yUmVxdWVzdEhhbmRsZXIpe1xyXG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UobWlkZGxld2FyZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7cG9wdWxhdGVEQn0gZnJvbSAnLi9wb3B1bGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nbyB7XHJcblxyXG4gICAgc3RhdGljIGRiOiBtb25nb29zZS5Db25uZWN0aW9uO1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBvcHVsYXRlIG1vbmdvIGRiIHdpdGggc29tZSBtb2NrIGRhdGFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBvcHVsYXRlREIoKXtcclxuICAgICAgICAvL3BvcHVsYXRlREIoTW9uZ28uZGIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgbW9uZ29vc2UuQ29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29ubmVjdCgpIDptb25nb29zZS5Db25uZWN0aW9uIHtcclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5tb25nby51cmksIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgTW9uZ28uZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG4gICAgICAgIE1vbmdvLmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcicpKTtcclxuICAgICAgICBNb25nby5kYi5vbmNlKCdvcGVuJywgY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnY29ubmVjdGVkIGNvcnJlY3RseSB0byBtb25nbyBkYicpKTtcclxuICAgICAgICByZXR1cm4gTW9uZ28uZGI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb25nby50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgQVBQX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudi50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc29uXCI6IDEwLFxuXHRcIi4vaWRlYXMuanNvblwiOiAxMSxcblx0XCIuL3Byb2R1Y3Rpb24uanNvblwiOiAxMlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjkwMDJ9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJ0aXRsZVwiOlwiVGhlIExha2VzIERpc3RpbGxlcnlcIixcImRlc2NyaXB0aW9uXCI6XCJPcGVuZWQgaW4gMjAxNCwgVGhlIExha2VzIERpc3RpbGxlcnkgaXMgRW5nbGFuZCdzIGxhcmdlc3Qgd2hpc2t5IGRpc3RpbGxlcnksIHJlY2VpdmluZyBvdmVyIDEwMCwwMDAgdmlzaXRvcnMgYW5udWFsbHkgYW5kIGhhcyBzb2xkIG92ZXIgMTYwLDAwMCBib3R0bGVzIG9mIHRoZWlyIHByZW1pdW0gZ2luLCB2b2RrYSwgYW5kIGJsZW5kZWQgd2hpc2t5OyB2b3RlZCBvbmUgb2YgdGhlIHRvcCA1IGJlc3QgbmV3IGRpc3RpbGxlcmllcyBpbiB0aGUgd29ybGQgYnkgVGltZSBPdXQgVVNBLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC90aGVfbGFrZXNfZGlzdGlsbGVyeV8tX25hdGlvbmFsX3BhcmtfbG9nb18tX2JsYWNrX3NxdWFyZV85ZmM4MDAyYTFlODU2NmIxY2U0NzBiMzZhNTllNGFhYy5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTU4OC8yMDE3MTAvdW50aXRsZWRfOTZlMzQxMWZiMDM0Y2IwZmY1Mjk0Yjk1NWM3N2IyYjQuanBnXCIsXCJ0YXJnZXRcIjoxMDAwMDAwLFwicmFpc2VkXCI6NjgxNzAwLFwiZXF1aXR5XCI6XCIyLjIxJVwiLFwiaW52ZXN0b3JzXCI6ODQxfSx7XCJ0aXRsZVwiOlwiTW92ZW1cIixcImRlc2NyaXB0aW9uXCI6XCJNb3ZlbSBpcyBhbiBvbmxpbmUgcHJvcGVydHkgcG9ydGFsLCBhbGxvd2luZyB0ZW5hbnRzIHRvIHJldmlldyB0aGVpciByZW50YWwgZXhwZXJpZW5jZXMsIHdoaWxzdCBidWlsZGluZyB0aGVpciBvd24gZGlnaXRhbCByZW50YWwgcHJvZmlsZSwga25vd24gYXMgYSBNb3ZlbSBQYXNzcG9ydC4gQWdlbnRzIGFuZCBsYW5kbG9yZHMgY2FuIHBheSB0byBpbnN0YW50bHkgZG93bmxvYWQgYSB0ZW5hbnQncyBmdWxsIHJlZmVyZW5jZSwgZGVzaWduZWQgdG8gYmUgY2hlYXBlciwgcXVpY2tlciwgYW5kIGxlc3Mgb3BlbiB0byBmcmF1ZC5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MTAvdGhlX2xha2VzX2Rpc3RpbGxlcnlfLV9uYXRpb25hbF9wYXJrX2xvZ29fLV9ibGFja19zcXVhcmVfOWZjODAwMmExZTg1NjZiMWNlNDcwYjM2YTU5ZTRhYWMuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1ODgvMjAxNzEwL3VudGl0bGVkXzk2ZTM0MTFmYjAzNGNiMGZmNTI5NGI5NTVjNzdiMmI0LmpwZ1wiLFwidGFyZ2V0XCI6MzAwMDAwLFwicmFpc2VkXCI6MzI3MDAwLFwiZXF1aXR5XCI6XCIxMS45OSVcIixcImludmVzdG9yc1wiOjI5Mn0se1widGl0bGVcIjpcIlNpbHZlclN1cmZlcnNcIixcImRlc2NyaXB0aW9uXCI6XCJXaXRoIG9uZSBvZiB0aGUgVUvigJlzIGxhcmdlc3Qgb25saW5lIGNvbW11bml0aWVzIGZvciB0aGUgeW91bmcgYXQgaGVhcnQgb3ZlciA1MCdzLCBTaWx2ZXJzdXJmZXJzIGhhcyBvdmVyIGhhbGYgYSBtaWxsaW9uIGZvbGxvd2Vycy4gVGhlIGNvbXBhbnkgaGFzIGFjaGlldmVkIMKjODYwaysgcmV2ZW51ZSBmcm9tIGFkdmVydGlzaW5nLCBzb2NpYWwgbWVkaWEgYW5kIGNvbW1pc3Npb24tcmVsYXRlZCBwYXJ0bmVyc2hpcHMgd2l0aCBtYWpvciBicmFuZHMgc3VjaCBhcyBBbGxpYW56IGFuZCBOZXN0bGUuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2NjLXNzLWxvZ29fM2Y0MTMxNTI1ZDhkMDAxNTA4OTQ5NDNmZDU1MTIzYTkuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1NTMvMjAxNzA5LzVkYjkwNmQ3Mjk2OTA1Yzc3OGQyNTEyMDI5ZjQ0MmY2LmpwZ1wiLFwidGFyZ2V0XCI6MzAwMDAwLFwicmFpc2VkXCI6NTI3NTAsXCJlcXVpdHlcIjpcIjMuNjElXCIsXCJpbnZlc3RvcnNcIjo0Mn0se1widGl0bGVcIjpcIkNyb3dkZnVuZGVyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIFVL4oCZcyAjMSByZXdhcmRzLWJhc2VkIGNyb3dkZnVuZGluZyBwbGF0Zm9ybSwgQ3Jvd2RmdW5kZXIsIG5vdyBoYXMgZ3Jvd24gdG8gYW4gb25saW5lIGNvbW11bml0eSBvZiBvdmVyIDYwMCwwMDAsIGFuZCBoYXMgd29ya2VkIHdpdGggb3ZlciA4MCwwMDAgcHJvamVjdHMgdG8gcmFpc2UgwqM0MCBtaWxsaW9uIHNpbmNlIDIwMTQuIE5vdyBFQklUREEgcG9zaXRpdmUgd2l0aCBwbGFucyB0byBkaXNydXB0IHRoZSDCozUuNmJuIGdyYW50IGdpdmluZyBzZWN0b3IuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2NmX3NxdWFyZV9iMmJiNTM4ZWEzNWE5N2M1NzQ3OWMyMDVlZjQ1ZWU2NC5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY0MS8yMDE3MDkvY2NfcGl0Y2hfcGFnZV9iYW5uZXJfOWYzN2Q0MDliOWI5ODc0N2I2ZmY5OWE2ZmIzZTg4YmQuanBnXCIsXCJ0YXJnZXRcIjo3NTAwMDAsXCJyYWlzZWRcIjo3MjMwMzAsXCJlcXVpdHlcIjpcIjQuMjclXCIsXCJpbnZlc3RvcnNcIjo2NzR9LHtcInRpdGxlXCI6XCJSaWdodGFuZ2xlZFwiLFwiZGVzY3JpcHRpb25cIjpcIkJhY2tlZCBieSBOSFMgRW5nbGFuZCwgUmlnaHRhbmdsZWQgaXMgYSBDUUMgcmVnaXN0ZXJlZCBoZWFsdGhjYXJlIHByb3ZpZGVyIGZvciBnZW5ldGljIHRlc3RpbmcuIEhhdmluZyBkZXNpZ25lZCB0aGVpciBDYXJkaWFjIGdlbmV0aWMgdGVzdCBhbmQgZmlsZWQgYSBwYXRlbnQgYWxyZWFkeSwgdGhlIHRlYW0gbm93IHNlZWsgdG8gZXhwYW5kIHRoZWlyIHRlc3RpbmcgYW5kIHRlbGVtZWRpY2luZSBzZXJ2aWNlIGludG8gbmV3IHRlc3RzIGFuZCBtYXJrZXRzLiBcIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDgvcmFfbG9nby1fY3Jvd2RjdWJlX2NkNmVkMTA0Yjc1MzRlNGJjYWIyMmVhOTUwMmEyMzYzLnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjQxLzIwMTcwOS9jY19waXRjaF9wYWdlX2Jhbm5lcl85ZjM3ZDQwOWI5Yjk4NzQ3YjZmZjk5YTZmYjNlODhiZC5qcGdcIixcInRhcmdldFwiOjEwMDAwMCxcInJhaXNlZFwiOjI2Mzk1MCxcImVxdWl0eVwiOlwiMTQuOTYlXCIsXCJpbnZlc3RvcnNcIjo0OTV9LHtcInRpdGxlXCI6XCJTaGF3IEFjYWRlbXlcIixcImRlc2NyaXB0aW9uXCI6XCJGb3VuZGVkIGluIDIwMTQsIFNoYXcgQWNhZGVteSBpcyBhbiBvbmxpbmUgZWR1Y2F0aW9uIHByb3ZpZGVyIHdoaWNoIHRlYWNoZXMgYSB2YXJpZXR5IG9mIHN1YmplY3RzIGxpdmUgdGhyb3VnaCB0aGVpciBiZXNwb2tlIHNvZnR3YXJlIHBsYXRmb3JtLiBIYXZpbmcgdGF1Z2h0IG92ZXIgNCwwMDAsMDAwIHN0dWRlbnRzIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLCB0aGV5IGFyZSBjdXJyZW50bHkgZ3Jvd2luZyBieSAyNTAsMDAwIG5ldyBzdHVkZW50cyBhIG1vbnRoIGFuZCBub3cgcGxhbiB0byBzY2FsZSBnbG9iYWxseS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvbG9nb19pbnZlcnRlZF9ibHVlX3N0eWxlXzJfMWQwMzkwMGE0ODRmZDczMDg0ZTIwYTQ5Njg5MzA4YzYuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NzIvMjAxNzA5L2Rlc2t0b3Bfb3B0Ml83YmQ4NmQwMTZiZDY1MThiYzVhMDM5Y2RlMThmMTJiOC5qcGdcIixcInRhcmdldFwiOjIxOTQwMDAsXCJyYWlzZWRcIjoyMzk5MTMwLFwiZXF1aXR5XCI6XCIyLjc5JVwiLFwiaW52ZXN0b3JzXCI6MTY4Nn0se1widGl0bGVcIjpcIkxvb3NlIEVuZHMgQXBwXCIsXCJkZXNjcmlwdGlvblwiOlwiTG9vc2UgRW5kcyBpcyBhIG5ldyBhcHAgZGVzaWduZWQgdG8gaGVscCBwZW9wbGUgZ2V0IHRvZ2V0aGVyIGVmZm9ydGxlc3NseS4gNjAlIG9mIEJyaXRvbnMgd2FudCB0byBzb2NpYWxpc2UgbW9yZSBvZnRlbiwgYnV0IG9yZ2FuaXNpbmcgbmlnaHRzIG91dCBjYW4gYmUgY29tcGxpY2F0ZWQ6IG1hbnkgcGxhbm5lZCBtZWV0dXBzIG5ldmVyIGhhcHBlbi4gTG9vc2UgRW5kcyBpcyBhIG9uZS1zdG9wIHNvY2lhbCBzb2x1dGlvbiwgdGFyZ2V0aW5nIGEgbWFya2V0IHdvcnRoIMKjNjBibiBwZXIgYW5udW0gaW4gdGhlIFVLIGFsb25lLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC9oaS1yZXMtbG9nby12Mi1sYXJnZV8zNDYwMWVlYjNhMzE2MjViYmNmNzMzMTdiMGJmNDU5Ny5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY4Ni8yMDE3MTAvMmFkMzVhYTY2YzFhZGE4MWE0MDZjNWE3OTc0YzhkZGUuanBnXCIsXCJ0YXJnZXRcIjoxMDAwMDAsXCJyYWlzZWRcIjozMzE2MCxcImVxdWl0eVwiOlwiMTAuMDAlXCIsXCJpbnZlc3RvcnNcIjoyMH0se1widGl0bGVcIjpcIkhvdXNlcnNcIixcImRlc2NyaXB0aW9uXCI6XCJMYXVuY2hlZCBpbiAyMDE2IGFuZCBiYXNlZCBpbiBNYWRyaWQsIFNwYWluLCBIb3VzZXJzIGlzIGEgcmVhbCBlc3RhdGUgY3Jvd2RmdW5kaW5nIHBsYXRmb3JtIHRoYXQgbWFrZXMgaXQgZWFzeSBmb3IgaW52ZXN0b3JzIHRvIGludmVzdCBpbiBFdXJvcGVhbiByZWFsIGVzdGF0ZSBib3RoIGZvciByZW50YWwgaW5jb21lIGFuZCBjYXBpdGFsIGdhaW4uIFRoZXkgY3VycmVudGx5IG1hbmFnZSDigqwzMm0gaW4gaW52ZXN0bWVudCBhbmQgbm93IHBsYW4gdG8gZXhwYW5kIHRoZWlyIHByb2R1Y3Qgb2ZmZXJpbmcgJmFtcDsgY292ZXJhZ2UuIFwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS8wMF9wZXJmaWxfY3Jvd2RjdWJlNl9hYmM3NmQxN2JkZGM3YmI5Mjg4ZmMwODdiYjg0MTA2Yy5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTYzOC8yMDE3MDkvMDJfY292ZXJfY3Jvd2RjdWJlX21vbnRhamVfMl84Y2Y1NDJmNjJjODE5NDkyZjRlMjNlZmY0NmZkNGYwNy5qcGdcIixcInRhcmdldFwiOjg1MDAwMCxcInJhaXNlZFwiOjgyMDQzMCxcImVxdWl0eVwiOlwiMi4yMiVcIixcImludmVzdG9yc1wiOjkzN30se1widGl0bGVcIjpcInBhc3Npbmdib3hlc1wiLFwiZGVzY3JpcHRpb25cIjpcInBhc3Npbmdib3hlcyBhaW1zIHRvIGJlIHRoZSB3b3JsZOKAmXMgbW9zdCBjb21wcmVoZW5zaXZlIHdlYnNpdGUgZm9yIGRlYWxpbmcgd2l0aCBkZWF0aC4gSXQgcHJvdmlkZXMgc2VydmljZXMgdG8gaGVscCBzZWN1cmUgeW91ciBkaWdpdGFsIGxlZ2FjeSBhbmQgcGFzcyBvbiB0aGUgdGhpbmdzIHRoYXQgcmVhbGx5IG1hdHRlci4gcGFzc2luZ2JveGVzIGFpbXMgdG8gaGF2ZSA1MDAsMDAwIG1lbWJlcnMgYnkgMjAyMiBpbiBhbiBpbmR1c3RyeSB0aGF0IGlzIHdvcnRoIMKjMS43IGJpbGxpb24gcGVyIGFubnVtLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9sb2dvX2Zvcl9jcm93ZGN1YmVfNTA1MDE0ZGQ5ODY5NDliYTI5ZmIyNzQ5M2Q3MDM1MzIuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2MTIvMjAxNzA5L2hlYWRlcl9pbWFnZV8yMDE3MDkyMF8yYzFiMGU5YzdjOTRkYjU0YWY5ZDMwMDQ0NDVmMDEzNy5qcGdcIixcInRhcmdldFwiOjE1MDAwMCxcInJhaXNlZFwiOjcxNTkwLFwiZXF1aXR5XCI6XCI1LjAwJVwiLFwiaW52ZXN0b3JzXCI6MTExfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvaWRlYXMuanNvblxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6ODA4MH0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbi8qKlxyXG4gKiBNaWRkbGV3YXJlIHRvIGF1dGhlbnRpY2F0ZSBhIHVzZXJcclxuICogQHBhcmFtIHJlcVxyXG4gKiBAcGFyYW0gcmVzIFxyXG4gKiBAcGFyYW0gbmV4dCBcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgVmVyaWZ5VXNlciA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG5cclxuICAgIC8vaGVyZSB0aGVyZSBzaG91bGQgYmUgYW4gYXV0aGVudGljYXRpb24gbWVjaGFuaXNtIHRvIGF1dGhlbnRpY2F0ZSBlYWNoIHJlcXVlc3QgYmVmb3JlIHRyaWdnZXIgdGhlIG5leHRcclxuICAgIC8vbWlkZGxld2FyZSwgZm9yIHRoaXMgc2FtcGxlIHByb2plY3QgaSBqdXN0IGNhbGwgdGhlIG5leHQgbWlkZGxld2FyZSBpbiB0aGUgY2hhaW4gd2l0aG91dCBkb2luZyBhbnlcclxuICAgIC8vYXV0aGVudGljYXRpb25cclxuXHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlcmlmeS11c2VyLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHtJZGVhfSBmcm9tICcuLi9zdG9yYWdlL21vZGVsL2lkZWEnO1xyXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBJZGVhLmZpbmQoe30sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBpZGVhczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oaWRlYXMpO1xyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvOmlkJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuXHJcbn0pXHJcblxyXG5cclxucm91dGVyLmRlbGV0ZSgnLzppZCcsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcblxyXG59KVxyXG5cclxuLy9jXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvYXBpUm91dGVzLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCBpZGVhU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcmFpc2VkOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH0sXHJcbiAgICBlcXVpdHk6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbnZlc3RvcnM6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNvbnN0IElkZWEgPSBtb25nb29zZS5tb2RlbCgnSWRlYScsIGlkZWFTY2hlbWEpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb2RlbC9pZGVhLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==