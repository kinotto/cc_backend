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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(6);
var mongo_1 = __webpack_require__(10);
var config_1 = __webpack_require__(3);
var verify_user_1 = __webpack_require__(16);
var server = server_1.default.getInstance();
mongo_1.default.connect();
mongo_1.default.populateDB();
server.use('/api', verify_user_1.VerifyUser, __webpack_require__(17));
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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = __webpack_require__(11);
exports.config = __webpack_require__(12)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [{"title":"The Lakes Distillery","description":"Opened in 2014, The Lakes Distillery is England's largest whisky distillery, receiving over 100,000 visitors annually and has sold over 160,000 bottles of their premium gin, vodka, and blended whisky; voted one of the top 5 best new distilleries in the world by Time Out USA.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","target":1000000,"raised":681700,"equity":"2.21%","investors":841},{"title":"Movem","description":"Movem is an online property portal, allowing tenants to review their rental experiences, whilst building their own digital rental profile, known as a Movem Passport. Agents and landlords can pay to instantly download a tenant's full reference, designed to be cheaper, quicker, and less open to fraud.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","target":300000,"raised":327000,"equity":"11.99%","investors":292},{"title":"SilverSurfers","description":"With one of the UK’s largest online communities for the young at heart over 50's, Silversurfers has over half a million followers. The company has achieved £860k+ revenue from advertising, social media and commission-related partnerships with major brands such as Allianz and Nestle.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cc-ss-logo_3f4131525d8d00150894943fd55123a9.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21553/201709/5db906d7296905c778d2512029f442f6.jpg","target":300000,"raised":52750,"equity":"3.61%","investors":42},{"title":"Crowdfunder","description":"The UK’s #1 rewards-based crowdfunding platform, Crowdfunder, now has grown to an online community of over 600,000, and has worked with over 80,000 projects to raise £40 million since 2014. Now EBITDA positive with plans to disrupt the £5.6bn grant giving sector.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cf_square_b2bb538ea35a97c57479c205ef45ee64.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","target":750000,"raised":723030,"equity":"4.27%","investors":674},{"title":"Rightangled","description":"Backed by NHS England, Rightangled is a CQC registered healthcare provider for genetic testing. Having designed their Cardiac genetic test and filed a patent already, the team now seek to expand their testing and telemedicine service into new tests and markets. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201708/ra_logo-_crowdcube_cd6ed104b7534e4bcab22ea9502a2363.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","target":100000,"raised":263950,"equity":"14.96%","investors":495},{"title":"Shaw Academy","description":"Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg","target":2194000,"raised":2399130,"equity":"2.79%","investors":1686},{"title":"Loose Ends App","description":"Loose Ends is a new app designed to help people get together effortlessly. 60% of Britons want to socialise more often, but organising nights out can be complicated: many planned meetups never happen. Loose Ends is a one-stop social solution, targeting a market worth £60bn per annum in the UK alone.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/hi-res-logo-v2-large_34601eeb3a31625bbcf73317b0bf4597.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21686/201710/2ad35aa66c1ada81a406c5a7974c8dde.jpg","target":100000,"raised":33160,"equity":"10.00%","investors":20},{"title":"Housers","description":"Launched in 2016 and based in Madrid, Spain, Housers is a real estate crowdfunding platform that makes it easy for investors to invest in European real estate both for rental income and capital gain. They currently manage €32m in investment and now plan to expand their product offering &amp; coverage. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/00_perfil_crowdcube6_abc76d17bddc7bb9288fc087bb84106c.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21638/201709/02_cover_crowdcube_montaje_2_8cf542f62c819492f4e23eff46fd4f07.jpg","target":850000,"raised":820430,"equity":"2.22%","investors":937},{"title":"passingboxes","description":"passingboxes aims to be the world’s most comprehensive website for dealing with death. It provides services to help secure your digital legacy and pass on the things that really matter. passingboxes aims to have 500,000 members by 2022 in an industry that is worth £1.7 billion per annum.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_for_crowdcube_505014dd986949ba29fb27493d703532.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21612/201709/header_image_20170920_2c1b0e9c7c94db54af9d3004445f0137.jpg","target":150000,"raised":71590,"equity":"5.00%","investors":111}]

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(2);
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(1);
var morgan = __webpack_require__(7);
var bodyParser = __webpack_require__(8);
var cors_1 = __webpack_require__(9);
var Server = /** @class */ (function () {
    function Server() {
        Server.instance.use(cors_1.corsMiddleware);
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.header('origin') || req.header('x-forwarded-host') || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(2);
var config_1 = __webpack_require__(3);
var populate_1 = __webpack_require__(15);
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    /**
     * populate mongo db with some mock data
     */
    Mongo.populateDB = function () {
        populate_1.populateDB(Mongo.db);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.NODE_ENV || 'development';


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 13,
	"./ideas.json": 4,
	"./production.json": 14
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
webpackContext.id = 12;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idea_1 = __webpack_require__(5);
var ideas = __webpack_require__(4);
var clearCollection = function (collection, clb) {
    collection.remove({}, clb);
};
exports.populateDB = function (db) {
    clearCollection(idea_1.Idea, function () { return console.log.bind(console, 'Idea collection cleared'); });
    idea_1.Idea.create(ideas, function (err, ideas) {
        if (err) {
            return console.log(err);
        }
        console.log('db populated correctly');
    });
};


/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(1);
var idea_1 = __webpack_require__(5);
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2EyOWI2YWRkZDg3OGVlNDlkNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pZGVhcy5qc29uIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vZGVsL2lkZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvcG9wdWxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYXBpUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtBQUVoRSxDQUFDLENBQUM7QUFHRixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7QUFFbEUsQ0FBQyxDQUFDO0FBRUYsR0FBRztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYTI5YjZhZGRkODc4ZWU0OWQ2ZCIsImltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xyXG5pbXBvcnQgTW9uZ28gZnJvbSAnLi9zdG9yYWdlL21vbmdvJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHtWZXJpZnlVc2VyfSBmcm9tICcuL3ZlcmlmeS11c2VyJztcclxuXHJcbmxldCBzZXJ2ZXIgPSBTZXJ2ZXIuZ2V0SW5zdGFuY2UoKTtcclxuTW9uZ28uY29ubmVjdCgpO1xyXG5Nb25nby5wb3B1bGF0ZURCKCk7XHJcblxyXG5zZXJ2ZXIudXNlKCcvYXBpJywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvYXBpUm91dGVzJykpO1xyXG5cclxuXHJcblxyXG4vL2dlbmVyaWMgZXJyb3IgaGFuZGxlclxyXG5zZXJ2ZXIudXNlKChlcnI6IEVycm9yLCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgIGVycm9yOiA1MDBcclxuICAgIH0pXHJcbn0pIFxyXG5cclxuc2VydmVyLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5zZXJ2ZXIuUE9SVCwgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApO1xyXG59KVxyXG5cclxuXHJcbi8vc2VydmVyLmxpc3RlbigpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbmdvb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtBUFBfRU5WfSBmcm9tICcuL2Vudic7XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSByZXF1aXJlKGAuL2NvbmZpZy8ke0FQUF9FTlZ9Lmpzb25gKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBbe1widGl0bGVcIjpcIlRoZSBMYWtlcyBEaXN0aWxsZXJ5XCIsXCJkZXNjcmlwdGlvblwiOlwiT3BlbmVkIGluIDIwMTQsIFRoZSBMYWtlcyBEaXN0aWxsZXJ5IGlzIEVuZ2xhbmQncyBsYXJnZXN0IHdoaXNreSBkaXN0aWxsZXJ5LCByZWNlaXZpbmcgb3ZlciAxMDAsMDAwIHZpc2l0b3JzIGFubnVhbGx5IGFuZCBoYXMgc29sZCBvdmVyIDE2MCwwMDAgYm90dGxlcyBvZiB0aGVpciBwcmVtaXVtIGdpbiwgdm9ka2EsIGFuZCBibGVuZGVkIHdoaXNreTsgdm90ZWQgb25lIG9mIHRoZSB0b3AgNSBiZXN0IG5ldyBkaXN0aWxsZXJpZXMgaW4gdGhlIHdvcmxkIGJ5IFRpbWUgT3V0IFVTQS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MTAvdGhlX2xha2VzX2Rpc3RpbGxlcnlfLV9uYXRpb25hbF9wYXJrX2xvZ29fLV9ibGFja19zcXVhcmVfOWZjODAwMmExZTg1NjZiMWNlNDcwYjM2YTU5ZTRhYWMuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1ODgvMjAxNzEwL3VudGl0bGVkXzk2ZTM0MTFmYjAzNGNiMGZmNTI5NGI5NTVjNzdiMmI0LmpwZ1wiLFwidGFyZ2V0XCI6MTAwMDAwMCxcInJhaXNlZFwiOjY4MTcwMCxcImVxdWl0eVwiOlwiMi4yMSVcIixcImludmVzdG9yc1wiOjg0MX0se1widGl0bGVcIjpcIk1vdmVtXCIsXCJkZXNjcmlwdGlvblwiOlwiTW92ZW0gaXMgYW4gb25saW5lIHByb3BlcnR5IHBvcnRhbCwgYWxsb3dpbmcgdGVuYW50cyB0byByZXZpZXcgdGhlaXIgcmVudGFsIGV4cGVyaWVuY2VzLCB3aGlsc3QgYnVpbGRpbmcgdGhlaXIgb3duIGRpZ2l0YWwgcmVudGFsIHByb2ZpbGUsIGtub3duIGFzIGEgTW92ZW0gUGFzc3BvcnQuIEFnZW50cyBhbmQgbGFuZGxvcmRzIGNhbiBwYXkgdG8gaW5zdGFudGx5IGRvd25sb2FkIGEgdGVuYW50J3MgZnVsbCByZWZlcmVuY2UsIGRlc2lnbmVkIHRvIGJlIGNoZWFwZXIsIHF1aWNrZXIsIGFuZCBsZXNzIG9wZW4gdG8gZnJhdWQuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzEwL3RoZV9sYWtlc19kaXN0aWxsZXJ5Xy1fbmF0aW9uYWxfcGFya19sb2dvXy1fYmxhY2tfc3F1YXJlXzlmYzgwMDJhMWU4NTY2YjFjZTQ3MGIzNmE1OWU0YWFjLmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTg4LzIwMTcxMC91bnRpdGxlZF85NmUzNDExZmIwMzRjYjBmZjUyOTRiOTU1Yzc3YjJiNC5qcGdcIixcInRhcmdldFwiOjMwMDAwMCxcInJhaXNlZFwiOjMyNzAwMCxcImVxdWl0eVwiOlwiMTEuOTklXCIsXCJpbnZlc3RvcnNcIjoyOTJ9LHtcInRpdGxlXCI6XCJTaWx2ZXJTdXJmZXJzXCIsXCJkZXNjcmlwdGlvblwiOlwiV2l0aCBvbmUgb2YgdGhlIFVL4oCZcyBsYXJnZXN0IG9ubGluZSBjb21tdW5pdGllcyBmb3IgdGhlIHlvdW5nIGF0IGhlYXJ0IG92ZXIgNTAncywgU2lsdmVyc3VyZmVycyBoYXMgb3ZlciBoYWxmIGEgbWlsbGlvbiBmb2xsb3dlcnMuIFRoZSBjb21wYW55IGhhcyBhY2hpZXZlZCDCozg2MGsrIHJldmVudWUgZnJvbSBhZHZlcnRpc2luZywgc29jaWFsIG1lZGlhIGFuZCBjb21taXNzaW9uLXJlbGF0ZWQgcGFydG5lcnNoaXBzIHdpdGggbWFqb3IgYnJhbmRzIHN1Y2ggYXMgQWxsaWFueiBhbmQgTmVzdGxlLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9jYy1zcy1sb2dvXzNmNDEzMTUyNWQ4ZDAwMTUwODk0OTQzZmQ1NTEyM2E5LmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTUzLzIwMTcwOS81ZGI5MDZkNzI5NjkwNWM3NzhkMjUxMjAyOWY0NDJmNi5qcGdcIixcInRhcmdldFwiOjMwMDAwMCxcInJhaXNlZFwiOjUyNzUwLFwiZXF1aXR5XCI6XCIzLjYxJVwiLFwiaW52ZXN0b3JzXCI6NDJ9LHtcInRpdGxlXCI6XCJDcm93ZGZ1bmRlclwiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBVS+KAmXMgIzEgcmV3YXJkcy1iYXNlZCBjcm93ZGZ1bmRpbmcgcGxhdGZvcm0sIENyb3dkZnVuZGVyLCBub3cgaGFzIGdyb3duIHRvIGFuIG9ubGluZSBjb21tdW5pdHkgb2Ygb3ZlciA2MDAsMDAwLCBhbmQgaGFzIHdvcmtlZCB3aXRoIG92ZXIgODAsMDAwIHByb2plY3RzIHRvIHJhaXNlIMKjNDAgbWlsbGlvbiBzaW5jZSAyMDE0LiBOb3cgRUJJVERBIHBvc2l0aXZlIHdpdGggcGxhbnMgdG8gZGlzcnVwdCB0aGUgwqM1LjZibiBncmFudCBnaXZpbmcgc2VjdG9yLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9jZl9zcXVhcmVfYjJiYjUzOGVhMzVhOTdjNTc0NzljMjA1ZWY0NWVlNjQucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NDEvMjAxNzA5L2NjX3BpdGNoX3BhZ2VfYmFubmVyXzlmMzdkNDA5YjliOTg3NDdiNmZmOTlhNmZiM2U4OGJkLmpwZ1wiLFwidGFyZ2V0XCI6NzUwMDAwLFwicmFpc2VkXCI6NzIzMDMwLFwiZXF1aXR5XCI6XCI0LjI3JVwiLFwiaW52ZXN0b3JzXCI6Njc0fSx7XCJ0aXRsZVwiOlwiUmlnaHRhbmdsZWRcIixcImRlc2NyaXB0aW9uXCI6XCJCYWNrZWQgYnkgTkhTIEVuZ2xhbmQsIFJpZ2h0YW5nbGVkIGlzIGEgQ1FDIHJlZ2lzdGVyZWQgaGVhbHRoY2FyZSBwcm92aWRlciBmb3IgZ2VuZXRpYyB0ZXN0aW5nLiBIYXZpbmcgZGVzaWduZWQgdGhlaXIgQ2FyZGlhYyBnZW5ldGljIHRlc3QgYW5kIGZpbGVkIGEgcGF0ZW50IGFscmVhZHksIHRoZSB0ZWFtIG5vdyBzZWVrIHRvIGV4cGFuZCB0aGVpciB0ZXN0aW5nIGFuZCB0ZWxlbWVkaWNpbmUgc2VydmljZSBpbnRvIG5ldyB0ZXN0cyBhbmQgbWFya2V0cy4gXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA4L3JhX2xvZ28tX2Nyb3dkY3ViZV9jZDZlZDEwNGI3NTM0ZTRiY2FiMjJlYTk1MDJhMjM2My5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY0MS8yMDE3MDkvY2NfcGl0Y2hfcGFnZV9iYW5uZXJfOWYzN2Q0MDliOWI5ODc0N2I2ZmY5OWE2ZmIzZTg4YmQuanBnXCIsXCJ0YXJnZXRcIjoxMDAwMDAsXCJyYWlzZWRcIjoyNjM5NTAsXCJlcXVpdHlcIjpcIjE0Ljk2JVwiLFwiaW52ZXN0b3JzXCI6NDk1fSx7XCJ0aXRsZVwiOlwiU2hhdyBBY2FkZW15XCIsXCJkZXNjcmlwdGlvblwiOlwiRm91bmRlZCBpbiAyMDE0LCBTaGF3IEFjYWRlbXkgaXMgYW4gb25saW5lIGVkdWNhdGlvbiBwcm92aWRlciB3aGljaCB0ZWFjaGVzIGEgdmFyaWV0eSBvZiBzdWJqZWN0cyBsaXZlIHRocm91Z2ggdGhlaXIgYmVzcG9rZSBzb2Z0d2FyZSBwbGF0Zm9ybS4gSGF2aW5nIHRhdWdodCBvdmVyIDQsMDAwLDAwMCBzdHVkZW50cyBmcm9tIGFsbCBvdmVyIHRoZSB3b3JsZCwgdGhleSBhcmUgY3VycmVudGx5IGdyb3dpbmcgYnkgMjUwLDAwMCBuZXcgc3R1ZGVudHMgYSBtb250aCBhbmQgbm93IHBsYW4gdG8gc2NhbGUgZ2xvYmFsbHkuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2xvZ29faW52ZXJ0ZWRfYmx1ZV9zdHlsZV8yXzFkMDM5MDBhNDg0ZmQ3MzA4NGUyMGE0OTY4OTMwOGM2LmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjcyLzIwMTcwOS9kZXNrdG9wX29wdDJfN2JkODZkMDE2YmQ2NTE4YmM1YTAzOWNkZTE4ZjEyYjguanBnXCIsXCJ0YXJnZXRcIjoyMTk0MDAwLFwicmFpc2VkXCI6MjM5OTEzMCxcImVxdWl0eVwiOlwiMi43OSVcIixcImludmVzdG9yc1wiOjE2ODZ9LHtcInRpdGxlXCI6XCJMb29zZSBFbmRzIEFwcFwiLFwiZGVzY3JpcHRpb25cIjpcIkxvb3NlIEVuZHMgaXMgYSBuZXcgYXBwIGRlc2lnbmVkIHRvIGhlbHAgcGVvcGxlIGdldCB0b2dldGhlciBlZmZvcnRsZXNzbHkuIDYwJSBvZiBCcml0b25zIHdhbnQgdG8gc29jaWFsaXNlIG1vcmUgb2Z0ZW4sIGJ1dCBvcmdhbmlzaW5nIG5pZ2h0cyBvdXQgY2FuIGJlIGNvbXBsaWNhdGVkOiBtYW55IHBsYW5uZWQgbWVldHVwcyBuZXZlciBoYXBwZW4uIExvb3NlIEVuZHMgaXMgYSBvbmUtc3RvcCBzb2NpYWwgc29sdXRpb24sIHRhcmdldGluZyBhIG1hcmtldCB3b3J0aCDCozYwYm4gcGVyIGFubnVtIGluIHRoZSBVSyBhbG9uZS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MTAvaGktcmVzLWxvZ28tdjItbGFyZ2VfMzQ2MDFlZWIzYTMxNjI1YmJjZjczMzE3YjBiZjQ1OTcucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2ODYvMjAxNzEwLzJhZDM1YWE2NmMxYWRhODFhNDA2YzVhNzk3NGM4ZGRlLmpwZ1wiLFwidGFyZ2V0XCI6MTAwMDAwLFwicmFpc2VkXCI6MzMxNjAsXCJlcXVpdHlcIjpcIjEwLjAwJVwiLFwiaW52ZXN0b3JzXCI6MjB9LHtcInRpdGxlXCI6XCJIb3VzZXJzXCIsXCJkZXNjcmlwdGlvblwiOlwiTGF1bmNoZWQgaW4gMjAxNiBhbmQgYmFzZWQgaW4gTWFkcmlkLCBTcGFpbiwgSG91c2VycyBpcyBhIHJlYWwgZXN0YXRlIGNyb3dkZnVuZGluZyBwbGF0Zm9ybSB0aGF0IG1ha2VzIGl0IGVhc3kgZm9yIGludmVzdG9ycyB0byBpbnZlc3QgaW4gRXVyb3BlYW4gcmVhbCBlc3RhdGUgYm90aCBmb3IgcmVudGFsIGluY29tZSBhbmQgY2FwaXRhbCBnYWluLiBUaGV5IGN1cnJlbnRseSBtYW5hZ2Ug4oKsMzJtIGluIGludmVzdG1lbnQgYW5kIG5vdyBwbGFuIHRvIGV4cGFuZCB0aGVpciBwcm9kdWN0IG9mZmVyaW5nICZhbXA7IGNvdmVyYWdlLiBcIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvMDBfcGVyZmlsX2Nyb3dkY3ViZTZfYWJjNzZkMTdiZGRjN2JiOTI4OGZjMDg3YmI4NDEwNmMucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2MzgvMjAxNzA5LzAyX2NvdmVyX2Nyb3dkY3ViZV9tb250YWplXzJfOGNmNTQyZjYyYzgxOTQ5MmY0ZTIzZWZmNDZmZDRmMDcuanBnXCIsXCJ0YXJnZXRcIjo4NTAwMDAsXCJyYWlzZWRcIjo4MjA0MzAsXCJlcXVpdHlcIjpcIjIuMjIlXCIsXCJpbnZlc3RvcnNcIjo5Mzd9LHtcInRpdGxlXCI6XCJwYXNzaW5nYm94ZXNcIixcImRlc2NyaXB0aW9uXCI6XCJwYXNzaW5nYm94ZXMgYWltcyB0byBiZSB0aGUgd29ybGTigJlzIG1vc3QgY29tcHJlaGVuc2l2ZSB3ZWJzaXRlIGZvciBkZWFsaW5nIHdpdGggZGVhdGguIEl0IHByb3ZpZGVzIHNlcnZpY2VzIHRvIGhlbHAgc2VjdXJlIHlvdXIgZGlnaXRhbCBsZWdhY3kgYW5kIHBhc3Mgb24gdGhlIHRoaW5ncyB0aGF0IHJlYWxseSBtYXR0ZXIuIHBhc3Npbmdib3hlcyBhaW1zIHRvIGhhdmUgNTAwLDAwMCBtZW1iZXJzIGJ5IDIwMjIgaW4gYW4gaW5kdXN0cnkgdGhhdCBpcyB3b3J0aCDCozEuNyBiaWxsaW9uIHBlciBhbm51bS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvbG9nb19mb3JfY3Jvd2RjdWJlXzUwNTAxNGRkOTg2OTQ5YmEyOWZiMjc0OTNkNzAzNTMyLmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjEyLzIwMTcwOS9oZWFkZXJfaW1hZ2VfMjAxNzA5MjBfMmMxYjBlOWM3Yzk0ZGI1NGFmOWQzMDA0NDQ1ZjAxMzcuanBnXCIsXCJ0YXJnZXRcIjoxNTAwMDAsXCJyYWlzZWRcIjo3MTU5MCxcImVxdWl0eVwiOlwiNS4wMCVcIixcImludmVzdG9yc1wiOjExMX1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2lkZWFzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCBpZGVhU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcmFpc2VkOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH0sXHJcbiAgICBlcXVpdHk6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbnZlc3RvcnM6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNvbnN0IElkZWEgPSBtb25nb29zZS5tb2RlbCgnSWRlYScsIGlkZWFTY2hlbWEpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb2RlbC9pZGVhLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQge2NvcnNNaWRkbGV3YXJlfSBmcm9tICcuL2NvcnMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2ZXIge1xyXG4gICAgc3RhdGljIGluc3RhbmNlOiBleHByZXNzLkV4cHJlc3M7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoY29yc01pZGRsZXdhcmUpO1xyXG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UobW9yZ2FuKCdkZXYnKSk7XHJcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHNlcnZlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCl7XHJcbiAgICAgICAgaWYoIVNlcnZlci5pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIFNlcnZlci5pbnN0YW5jZSA9IGV4cHJlc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNlcnZlci5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1c2UobWlkZGxld2FyZTogZXhwcmVzcy5SZXF1ZXN0SGFuZGxlciB8IGV4cHJlc3MuRXJyb3JSZXF1ZXN0SGFuZGxlcil7XHJcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtaWRkbGV3YXJlKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuZXhwb3J0IGNvbnN0IGNvcnNNaWRkbGV3YXJlID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCByZXEuaGVhZGVyKCdvcmlnaW4nKSB8fCByZXEuaGVhZGVyKCd4LWZvcndhcmRlZC1ob3N0JykgfHwgJyonKTtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NULCBPUFRJT05TLCBQVVQsIFBBVENILCBERUxFVEUnKTtcclxuXHJcbiAgICBuZXh0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29ycy50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7cG9wdWxhdGVEQn0gZnJvbSAnLi9wb3B1bGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nbyB7XHJcblxyXG4gICAgc3RhdGljIGRiOiBtb25nb29zZS5Db25uZWN0aW9uO1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBvcHVsYXRlIG1vbmdvIGRiIHdpdGggc29tZSBtb2NrIGRhdGFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBvcHVsYXRlREIoKXtcclxuICAgICAgICBwb3B1bGF0ZURCKE1vbmdvLmRiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIG1vbmdvb3NlLkNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbm5lY3QoKSA6bW9uZ29vc2UuQ29ubmVjdGlvbiB7XHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChjb25maWcubW9uZ28udXJpLCB7IHVzZU1vbmdvQ2xpZW50OiB0cnVlIH0pO1xyXG4gICAgICAgIE1vbmdvLmRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuICAgICAgICBNb25nby5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3InKSk7XHJcbiAgICAgICAgTW9uZ28uZGIub25jZSgnb3BlbicsIGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3RlZCBjb3JyZWN0bHkgdG8gbW9uZ28gZGInKSk7XHJcbiAgICAgICAgcmV0dXJuIE1vbmdvLmRiO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJleHBvcnQgY29uc3QgQVBQX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudi50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc29uXCI6IDEzLFxuXHRcIi4vaWRlYXMuanNvblwiOiA0LFxuXHRcIi4vcHJvZHVjdGlvbi5qc29uXCI6IDE0XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo5MDAyfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvblxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6ODA4MH0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIHNjcmlwdCBmb3IgaW5pdGlhbCBkYiBwb3B1bGF0aW9uXHJcbiAqL1xyXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7SWRlYX0gZnJvbSAnLi9tb2RlbC9pZGVhJztcclxuY29uc3QgaWRlYXMgPSByZXF1aXJlKCcuLi9jb25maWcvaWRlYXMuanNvbicpO1xyXG5cclxuY29uc3QgY2xlYXJDb2xsZWN0aW9uID0gKGNvbGxlY3Rpb246IG1vbmdvb3NlLk1vZGVsPGFueT4sIGNsYjogYW55KSA9PiB7XHJcbiAgICBjb2xsZWN0aW9uLnJlbW92ZSh7fSwgY2xiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlREIgPSAoZGI6IG1vbmdvb3NlLkNvbm5lY3Rpb24pID0+IHtcclxuICAgIGNsZWFyQ29sbGVjdGlvbihJZGVhLCAoKSA9PiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICdJZGVhIGNvbGxlY3Rpb24gY2xlYXJlZCcpKTtcclxuICAgIElkZWEuY3JlYXRlKGlkZWFzLCAoZXJyLCBpZGVhcykgPT4ge1xyXG4gICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RiIHBvcHVsYXRlZCBjb3JyZWN0bHknKTtcclxuICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvcG9wdWxhdGUudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuLyoqXHJcbiAqIE1pZGRsZXdhcmUgdG8gYXV0aGVudGljYXRlIGEgdXNlclxyXG4gKiBAcGFyYW0gcmVxXHJcbiAqIEBwYXJhbSByZXMgXHJcbiAqIEBwYXJhbSBuZXh0IFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBWZXJpZnlVc2VyID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcblxyXG4gICAgLy9oZXJlIHRoZXJlIHNob3VsZCBiZSBhbiBhdXRoZW50aWNhdGlvbiBtZWNoYW5pc20gdG8gYXV0aGVudGljYXRlIGVhY2ggcmVxdWVzdCBiZWZvcmUgdHJpZ2dlciB0aGUgbmV4dFxyXG4gICAgLy9taWRkbGV3YXJlLCBmb3IgdGhpcyBzYW1wbGUgcHJvamVjdCBpIGp1c3QgY2FsbCB0aGUgbmV4dCBtaWRkbGV3YXJlIGluIHRoZSBjaGFpbiB3aXRob3V0IGRvaW5nIGFueVxyXG4gICAgLy9hdXRoZW50aWNhdGlvblxyXG5cclxuICAgIHJldHVybiBuZXh0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVyaWZ5LXVzZXIudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQge0lkZWF9IGZyb20gJy4uL3N0b3JhZ2UvbW9kZWwvaWRlYSc7XHJcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIElkZWEuZmluZCh7fSwgKGVycjogbW9uZ29vc2UuRXJyb3IsIGlkZWFzOiBhbnkpID0+IHtcclxuICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihpZGVhcyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy86aWQnLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xyXG5cclxufSlcclxuXHJcblxyXG5yb3V0ZXIuZGVsZXRlKCcvOmlkJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuXHJcbn0pXHJcblxyXG4vL2NcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9hcGlSb3V0ZXMudHMiXSwic291cmNlUm9vdCI6IiJ9