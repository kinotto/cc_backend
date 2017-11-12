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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = __webpack_require__(10);
exports.config = __webpack_require__(11)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(18);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(5);
var mongo_1 = __webpack_require__(9);
var config_1 = __webpack_require__(2);
var verify_user_1 = __webpack_require__(15);
var server = server_1.default.getInstance();
mongo_1.default.connect();
mongo_1.default.populateDB();
server.use('/api', verify_user_1.VerifyUser, __webpack_require__(16));
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var morgan = __webpack_require__(6);
var bodyParser = __webpack_require__(7);
var cors_1 = __webpack_require__(8);
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.init = function () {
        Server.instance = express();
        Server.instance.use(cors_1.corsMiddleware);
        Server.instance.use(morgan('dev'));
        Server.instance.use(bodyParser.json());
        Server.instance.use(bodyParser.urlencoded({ extended: false }));
    };
    /**
     * @returns an instance of server
     */
    Server.getInstance = function () {
        if (!Server.instance) {
            Server.init();
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.header('origin') || req.header('x-forwarded-host') || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var config_1 = __webpack_require__(2);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.NODE_ENV || 'development';


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 12,
	"./ideas.json": 13,
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
webpackContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = [{"title":"The Lakes Distillery","description":"Opened in 2014, The Lakes Distillery is England's largest whisky distillery, receiving over 100,000 visitors annually and has sold over 160,000 bottles of their premium gin, vodka, and blended whisky; voted one of the top 5 best new distilleries in the world by Time Out USA.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","page":"https://www.crowdcube.com/companies/the-lakes-distillery/pitches/bk9Eel","target":1000000,"raised":681700,"equity":"2.21%","investors":841,"daysLeft":28},{"title":"Movem","description":"Movem is an online property portal, allowing tenants to review their rental experiences, whilst building their own digital rental profile, known as a Movem Passport. Agents and landlords can pay to instantly download a tenant's full reference, designed to be cheaper, quicker, and less open to fraud.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","page":"https://www.crowdcube.com/companies/movem-1/pitches/b6QpXZ","target":300000,"raised":327000,"equity":"11.99%","investors":292,"daysLeft":14},{"title":"SilverSurfers","description":"With one of the UK’s largest online communities for the young at heart over 50's, Silversurfers has over half a million followers. The company has achieved £860k+ revenue from advertising, social media and commission-related partnerships with major brands such as Allianz and Nestle.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cc-ss-logo_3f4131525d8d00150894943fd55123a9.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21553/201709/5db906d7296905c778d2512029f442f6.jpg","page":"https://www.crowdcube.com/companies/silversurfers/pitches/l8VN2b","target":300000,"raised":52750,"equity":"3.61%","investors":42,"daysLeft":20},{"title":"Crowdfunder","description":"The UK’s #1 rewards-based crowdfunding platform, Crowdfunder, now has grown to an online community of over 600,000, and has worked with over 80,000 projects to raise £40 million since 2014. Now EBITDA positive with plans to disrupt the £5.6bn grant giving sector.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cf_square_b2bb538ea35a97c57479c205ef45ee64.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","page":"https://www.crowdcube.com/companies/crowdfunder-1/pitches/b2dm2l","target":750000,"raised":723030,"equity":"4.27%","investors":674,"daysLeft":23},{"title":"Rightangled","description":"Backed by NHS England, Rightangled is a CQC registered healthcare provider for genetic testing. Having designed their Cardiac genetic test and filed a patent already, the team now seek to expand their testing and telemedicine service into new tests and markets. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201708/ra_logo-_crowdcube_cd6ed104b7534e4bcab22ea9502a2363.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","page":"https://www.crowdcube.com/companies/rightangled-limited/pitches/qBy5Eb","target":100000,"raised":263950,"equity":"14.96%","investors":495,"daysLeft":22},{"title":"Shaw Academy","description":"Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg","page":"https://www.crowdcube.com/companies/shaw-education-group-plc/pitches/ZNa5dl","target":2194000,"raised":2399130,"equity":"2.79%","investors":1686,"daysLeft":10},{"title":"Loose Ends App","description":"Loose Ends is a new app designed to help people get together effortlessly. 60% of Britons want to socialise more often, but organising nights out can be complicated: many planned meetups never happen. Loose Ends is a one-stop social solution, targeting a market worth £60bn per annum in the UK alone.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/hi-res-logo-v2-large_34601eeb3a31625bbcf73317b0bf4597.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21686/201710/2ad35aa66c1ada81a406c5a7974c8dde.jpg","page":"https://www.crowdcube.com/companies/loose-ends-app/pitches/lKkoJl","target":100000,"raised":33160,"equity":"10.00%","investors":20,"daysLeft":11},{"title":"Housers","description":"Launched in 2016 and based in Madrid, Spain, Housers is a real estate crowdfunding platform that makes it easy for investors to invest in European real estate both for rental income and capital gain. They currently manage €32m in investment and now plan to expand their product offering &amp; coverage. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/00_perfil_crowdcube6_abc76d17bddc7bb9288fc087bb84106c.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21638/201709/02_cover_crowdcube_montaje_2_8cf542f62c819492f4e23eff46fd4f07.jpg","page":"https://www.crowdcube.com/companies/loose-ends-app/pitches/lKkoJl","target":850000,"raised":820430,"equity":"2.22%","investors":937,"daysLeft":20},{"title":"passingboxes","description":"passingboxes aims to be the world’s most comprehensive website for dealing with death. It provides services to help secure your digital legacy and pass on the things that really matter. passingboxes aims to have 500,000 members by 2022 in an industry that is worth £1.7 billion per annum.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_for_crowdcube_505014dd986949ba29fb27493d703532.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21612/201709/header_image_20170920_2c1b0e9c7c94db54af9d3004445f0137.jpg","page":"https://www.crowdcube.com/companies/passingboxes/pitches/boaGpl","target":150000,"raised":71590,"equity":"5.00%","investors":111,"daysLeft":14}]

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var idea_1 = __webpack_require__(17);
var router = express.Router();
router.get('/', function (req, res, next) {
    idea_1.Idea.find({}, function (err, ideas) {
        if (err) {
            return next(err);
        }
        res.status(200).json(ideas);
    });
});
module.exports = router;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
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
    daysLeft: {
        type: Number,
        required: true
    },
    page: {
        type: String,
        required: true
    }
});
exports.Idea = mongoose.model('Idea', ideaSchema);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(19);
var nodeExternals = __webpack_require__(20);

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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNmYmQ1ZTliZDY2MzYwZjZkNzAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pZGVhcy5qc29uIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uIiwid2VicGFjazovLy8uL3NyYy92ZXJpZnktdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FwaVJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9pZGVhLnRzIiwid2VicGFjazovLy8uL3dlYnBhY2suY29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzZmJkNWU5YmQ2NjM2MGY2ZDcwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbmdvb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtBUFBfRU5WfSBmcm9tICcuL2Vudic7XG5leHBvcnQgY29uc3QgY29uZmlnID0gcmVxdWlyZShgLi9jb25maWcvJHtBUFBfRU5WfS5qc29uYCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy50cyIsImltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xuaW1wb3J0IE1vbmdvIGZyb20gJy4vc3RvcmFnZS9tb25nbyc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7VmVyaWZ5VXNlcn0gZnJvbSAnLi92ZXJpZnktdXNlcic7XG5cbmxldCBzZXJ2ZXIgPSBTZXJ2ZXIuZ2V0SW5zdGFuY2UoKTtcbk1vbmdvLmNvbm5lY3QoKTtcbk1vbmdvLnBvcHVsYXRlREIoKTtcblxuc2VydmVyLnVzZSgnL2FwaScsIFZlcmlmeVVzZXIsIHJlcXVpcmUoJy4vcm91dGVzL2FwaVJvdXRlcycpKTtcblxuXG5cbi8vZ2VuZXJpYyBlcnJvciBoYW5kbGVyXG5zZXJ2ZXIudXNlKChlcnI6IEVycm9yLCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIHJlcy5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgIGVycm9yOiA1MDBcbiAgICB9KVxufSkgXG5cbnNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlQsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coIGBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgICR7cHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlR9YCk7XG59KVxuXG5cbi8vc2VydmVyLmxpc3RlbigpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2NvcnNNaWRkbGV3YXJlfSBmcm9tICcuL2NvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2ZXIge1xuICAgIHN0YXRpYyBpbnN0YW5jZTogZXhwcmVzcy5FeHByZXNzO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cbiAgICBwcml2YXRlIHN0YXRpYyBpbml0KCl7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZSA9IGV4cHJlc3MoKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShjb3JzTWlkZGxld2FyZSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UobW9yZ2FuKCdkZXYnKSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHNlcnZlclxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYoIVNlcnZlci5pbnN0YW5jZSl7XG4gICAgICAgICAgICBTZXJ2ZXIuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTZXJ2ZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIHB1YmxpYyB1c2UobWlkZGxld2FyZTogZXhwcmVzcy5SZXF1ZXN0SGFuZGxlciB8IGV4cHJlc3MuRXJyb3JSZXF1ZXN0SGFuZGxlcil7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UobWlkZGxld2FyZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmV4cG9ydCBjb25zdCBjb3JzTWlkZGxld2FyZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIHJlcS5oZWFkZXIoJ29yaWdpbicpIHx8IHJlcS5oZWFkZXIoJ3gtZm9yd2FyZGVkLWhvc3QnKSB8fCAnKicpO1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NULCBPUFRJT05TLCBQVVQsIFBBVENILCBERUxFVEUnKTtcblxuICAgIG5leHQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29ycy50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtwb3B1bGF0ZURCfSBmcm9tICcuL3BvcHVsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZ28ge1xuXG4gICAgc3RhdGljIGRiOiBtb25nb29zZS5Db25uZWN0aW9uO1xuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG5cbiAgICAvKipcbiAgICAgKiBwb3B1bGF0ZSBtb25nbyBkYiB3aXRoIHNvbWUgbW9jayBkYXRhXG4gICAgICovXG4gICAgc3RhdGljIHBvcHVsYXRlREIoKXtcbiAgICAgICAgLy9wb3B1bGF0ZURCKE1vbmdvLmRiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBtb25nb29zZS5Db25uZWN0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGNvbm5lY3QoKSA6bW9uZ29vc2UuQ29ubmVjdGlvbiB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLm1vbmdvLnVyaSwgeyB1c2VNb25nb0NsaWVudDogdHJ1ZSB9KTtcbiAgICAgICAgTW9uZ28uZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuICAgICAgICBNb25nby5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3InKSk7XG4gICAgICAgIE1vbmdvLmRiLm9uY2UoJ29wZW4nLCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICdjb25uZWN0ZWQgY29ycmVjdGx5IHRvIG1vbmdvIGRiJykpO1xuICAgICAgICByZXR1cm4gTW9uZ28uZGI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwiZXhwb3J0IGNvbnN0IEFQUF9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnYudHMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV2ZWxvcG1lbnQuanNvblwiOiAxMixcblx0XCIuL2lkZWFzLmpzb25cIjogMTMsXG5cdFwiLi9wcm9kdWN0aW9uLmpzb25cIjogMTRcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxMTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjkwMDJ9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJ0aXRsZVwiOlwiVGhlIExha2VzIERpc3RpbGxlcnlcIixcImRlc2NyaXB0aW9uXCI6XCJPcGVuZWQgaW4gMjAxNCwgVGhlIExha2VzIERpc3RpbGxlcnkgaXMgRW5nbGFuZCdzIGxhcmdlc3Qgd2hpc2t5IGRpc3RpbGxlcnksIHJlY2VpdmluZyBvdmVyIDEwMCwwMDAgdmlzaXRvcnMgYW5udWFsbHkgYW5kIGhhcyBzb2xkIG92ZXIgMTYwLDAwMCBib3R0bGVzIG9mIHRoZWlyIHByZW1pdW0gZ2luLCB2b2RrYSwgYW5kIGJsZW5kZWQgd2hpc2t5OyB2b3RlZCBvbmUgb2YgdGhlIHRvcCA1IGJlc3QgbmV3IGRpc3RpbGxlcmllcyBpbiB0aGUgd29ybGQgYnkgVGltZSBPdXQgVVNBLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC90aGVfbGFrZXNfZGlzdGlsbGVyeV8tX25hdGlvbmFsX3BhcmtfbG9nb18tX2JsYWNrX3NxdWFyZV85ZmM4MDAyYTFlODU2NmIxY2U0NzBiMzZhNTllNGFhYy5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTU4OC8yMDE3MTAvdW50aXRsZWRfOTZlMzQxMWZiMDM0Y2IwZmY1Mjk0Yjk1NWM3N2IyYjQuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy90aGUtbGFrZXMtZGlzdGlsbGVyeS9waXRjaGVzL2JrOUVlbFwiLFwidGFyZ2V0XCI6MTAwMDAwMCxcInJhaXNlZFwiOjY4MTcwMCxcImVxdWl0eVwiOlwiMi4yMSVcIixcImludmVzdG9yc1wiOjg0MSxcImRheXNMZWZ0XCI6Mjh9LHtcInRpdGxlXCI6XCJNb3ZlbVwiLFwiZGVzY3JpcHRpb25cIjpcIk1vdmVtIGlzIGFuIG9ubGluZSBwcm9wZXJ0eSBwb3J0YWwsIGFsbG93aW5nIHRlbmFudHMgdG8gcmV2aWV3IHRoZWlyIHJlbnRhbCBleHBlcmllbmNlcywgd2hpbHN0IGJ1aWxkaW5nIHRoZWlyIG93biBkaWdpdGFsIHJlbnRhbCBwcm9maWxlLCBrbm93biBhcyBhIE1vdmVtIFBhc3Nwb3J0LiBBZ2VudHMgYW5kIGxhbmRsb3JkcyBjYW4gcGF5IHRvIGluc3RhbnRseSBkb3dubG9hZCBhIHRlbmFudCdzIGZ1bGwgcmVmZXJlbmNlLCBkZXNpZ25lZCB0byBiZSBjaGVhcGVyLCBxdWlja2VyLCBhbmQgbGVzcyBvcGVuIHRvIGZyYXVkLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC90aGVfbGFrZXNfZGlzdGlsbGVyeV8tX25hdGlvbmFsX3BhcmtfbG9nb18tX2JsYWNrX3NxdWFyZV85ZmM4MDAyYTFlODU2NmIxY2U0NzBiMzZhNTllNGFhYy5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTU4OC8yMDE3MTAvdW50aXRsZWRfOTZlMzQxMWZiMDM0Y2IwZmY1Mjk0Yjk1NWM3N2IyYjQuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9tb3ZlbS0xL3BpdGNoZXMvYjZRcFhaXCIsXCJ0YXJnZXRcIjozMDAwMDAsXCJyYWlzZWRcIjozMjcwMDAsXCJlcXVpdHlcIjpcIjExLjk5JVwiLFwiaW52ZXN0b3JzXCI6MjkyLFwiZGF5c0xlZnRcIjoxNH0se1widGl0bGVcIjpcIlNpbHZlclN1cmZlcnNcIixcImRlc2NyaXB0aW9uXCI6XCJXaXRoIG9uZSBvZiB0aGUgVUvigJlzIGxhcmdlc3Qgb25saW5lIGNvbW11bml0aWVzIGZvciB0aGUgeW91bmcgYXQgaGVhcnQgb3ZlciA1MCdzLCBTaWx2ZXJzdXJmZXJzIGhhcyBvdmVyIGhhbGYgYSBtaWxsaW9uIGZvbGxvd2Vycy4gVGhlIGNvbXBhbnkgaGFzIGFjaGlldmVkIMKjODYwaysgcmV2ZW51ZSBmcm9tIGFkdmVydGlzaW5nLCBzb2NpYWwgbWVkaWEgYW5kIGNvbW1pc3Npb24tcmVsYXRlZCBwYXJ0bmVyc2hpcHMgd2l0aCBtYWpvciBicmFuZHMgc3VjaCBhcyBBbGxpYW56IGFuZCBOZXN0bGUuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2NjLXNzLWxvZ29fM2Y0MTMxNTI1ZDhkMDAxNTA4OTQ5NDNmZDU1MTIzYTkuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1NTMvMjAxNzA5LzVkYjkwNmQ3Mjk2OTA1Yzc3OGQyNTEyMDI5ZjQ0MmY2LmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvc2lsdmVyc3VyZmVycy9waXRjaGVzL2w4Vk4yYlwiLFwidGFyZ2V0XCI6MzAwMDAwLFwicmFpc2VkXCI6NTI3NTAsXCJlcXVpdHlcIjpcIjMuNjElXCIsXCJpbnZlc3RvcnNcIjo0MixcImRheXNMZWZ0XCI6MjB9LHtcInRpdGxlXCI6XCJDcm93ZGZ1bmRlclwiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBVS+KAmXMgIzEgcmV3YXJkcy1iYXNlZCBjcm93ZGZ1bmRpbmcgcGxhdGZvcm0sIENyb3dkZnVuZGVyLCBub3cgaGFzIGdyb3duIHRvIGFuIG9ubGluZSBjb21tdW5pdHkgb2Ygb3ZlciA2MDAsMDAwLCBhbmQgaGFzIHdvcmtlZCB3aXRoIG92ZXIgODAsMDAwIHByb2plY3RzIHRvIHJhaXNlIMKjNDAgbWlsbGlvbiBzaW5jZSAyMDE0LiBOb3cgRUJJVERBIHBvc2l0aXZlIHdpdGggcGxhbnMgdG8gZGlzcnVwdCB0aGUgwqM1LjZibiBncmFudCBnaXZpbmcgc2VjdG9yLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9jZl9zcXVhcmVfYjJiYjUzOGVhMzVhOTdjNTc0NzljMjA1ZWY0NWVlNjQucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NDEvMjAxNzA5L2NjX3BpdGNoX3BhZ2VfYmFubmVyXzlmMzdkNDA5YjliOTg3NDdiNmZmOTlhNmZiM2U4OGJkLmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvY3Jvd2RmdW5kZXItMS9waXRjaGVzL2IyZG0ybFwiLFwidGFyZ2V0XCI6NzUwMDAwLFwicmFpc2VkXCI6NzIzMDMwLFwiZXF1aXR5XCI6XCI0LjI3JVwiLFwiaW52ZXN0b3JzXCI6Njc0LFwiZGF5c0xlZnRcIjoyM30se1widGl0bGVcIjpcIlJpZ2h0YW5nbGVkXCIsXCJkZXNjcmlwdGlvblwiOlwiQmFja2VkIGJ5IE5IUyBFbmdsYW5kLCBSaWdodGFuZ2xlZCBpcyBhIENRQyByZWdpc3RlcmVkIGhlYWx0aGNhcmUgcHJvdmlkZXIgZm9yIGdlbmV0aWMgdGVzdGluZy4gSGF2aW5nIGRlc2lnbmVkIHRoZWlyIENhcmRpYWMgZ2VuZXRpYyB0ZXN0IGFuZCBmaWxlZCBhIHBhdGVudCBhbHJlYWR5LCB0aGUgdGVhbSBub3cgc2VlayB0byBleHBhbmQgdGhlaXIgdGVzdGluZyBhbmQgdGVsZW1lZGljaW5lIHNlcnZpY2UgaW50byBuZXcgdGVzdHMgYW5kIG1hcmtldHMuIFwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOC9yYV9sb2dvLV9jcm93ZGN1YmVfY2Q2ZWQxMDRiNzUzNGU0YmNhYjIyZWE5NTAyYTIzNjMucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NDEvMjAxNzA5L2NjX3BpdGNoX3BhZ2VfYmFubmVyXzlmMzdkNDA5YjliOTg3NDdiNmZmOTlhNmZiM2U4OGJkLmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvcmlnaHRhbmdsZWQtbGltaXRlZC9waXRjaGVzL3FCeTVFYlwiLFwidGFyZ2V0XCI6MTAwMDAwLFwicmFpc2VkXCI6MjYzOTUwLFwiZXF1aXR5XCI6XCIxNC45NiVcIixcImludmVzdG9yc1wiOjQ5NSxcImRheXNMZWZ0XCI6MjJ9LHtcInRpdGxlXCI6XCJTaGF3IEFjYWRlbXlcIixcImRlc2NyaXB0aW9uXCI6XCJGb3VuZGVkIGluIDIwMTQsIFNoYXcgQWNhZGVteSBpcyBhbiBvbmxpbmUgZWR1Y2F0aW9uIHByb3ZpZGVyIHdoaWNoIHRlYWNoZXMgYSB2YXJpZXR5IG9mIHN1YmplY3RzIGxpdmUgdGhyb3VnaCB0aGVpciBiZXNwb2tlIHNvZnR3YXJlIHBsYXRmb3JtLiBIYXZpbmcgdGF1Z2h0IG92ZXIgNCwwMDAsMDAwIHN0dWRlbnRzIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLCB0aGV5IGFyZSBjdXJyZW50bHkgZ3Jvd2luZyBieSAyNTAsMDAwIG5ldyBzdHVkZW50cyBhIG1vbnRoIGFuZCBub3cgcGxhbiB0byBzY2FsZSBnbG9iYWxseS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvbG9nb19pbnZlcnRlZF9ibHVlX3N0eWxlXzJfMWQwMzkwMGE0ODRmZDczMDg0ZTIwYTQ5Njg5MzA4YzYuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NzIvMjAxNzA5L2Rlc2t0b3Bfb3B0Ml83YmQ4NmQwMTZiZDY1MThiYzVhMDM5Y2RlMThmMTJiOC5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL3NoYXctZWR1Y2F0aW9uLWdyb3VwLXBsYy9waXRjaGVzL1pOYTVkbFwiLFwidGFyZ2V0XCI6MjE5NDAwMCxcInJhaXNlZFwiOjIzOTkxMzAsXCJlcXVpdHlcIjpcIjIuNzklXCIsXCJpbnZlc3RvcnNcIjoxNjg2LFwiZGF5c0xlZnRcIjoxMH0se1widGl0bGVcIjpcIkxvb3NlIEVuZHMgQXBwXCIsXCJkZXNjcmlwdGlvblwiOlwiTG9vc2UgRW5kcyBpcyBhIG5ldyBhcHAgZGVzaWduZWQgdG8gaGVscCBwZW9wbGUgZ2V0IHRvZ2V0aGVyIGVmZm9ydGxlc3NseS4gNjAlIG9mIEJyaXRvbnMgd2FudCB0byBzb2NpYWxpc2UgbW9yZSBvZnRlbiwgYnV0IG9yZ2FuaXNpbmcgbmlnaHRzIG91dCBjYW4gYmUgY29tcGxpY2F0ZWQ6IG1hbnkgcGxhbm5lZCBtZWV0dXBzIG5ldmVyIGhhcHBlbi4gTG9vc2UgRW5kcyBpcyBhIG9uZS1zdG9wIHNvY2lhbCBzb2x1dGlvbiwgdGFyZ2V0aW5nIGEgbWFya2V0IHdvcnRoIMKjNjBibiBwZXIgYW5udW0gaW4gdGhlIFVLIGFsb25lLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC9oaS1yZXMtbG9nby12Mi1sYXJnZV8zNDYwMWVlYjNhMzE2MjViYmNmNzMzMTdiMGJmNDU5Ny5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY4Ni8yMDE3MTAvMmFkMzVhYTY2YzFhZGE4MWE0MDZjNWE3OTc0YzhkZGUuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9sb29zZS1lbmRzLWFwcC9waXRjaGVzL2xLa29KbFwiLFwidGFyZ2V0XCI6MTAwMDAwLFwicmFpc2VkXCI6MzMxNjAsXCJlcXVpdHlcIjpcIjEwLjAwJVwiLFwiaW52ZXN0b3JzXCI6MjAsXCJkYXlzTGVmdFwiOjExfSx7XCJ0aXRsZVwiOlwiSG91c2Vyc1wiLFwiZGVzY3JpcHRpb25cIjpcIkxhdW5jaGVkIGluIDIwMTYgYW5kIGJhc2VkIGluIE1hZHJpZCwgU3BhaW4sIEhvdXNlcnMgaXMgYSByZWFsIGVzdGF0ZSBjcm93ZGZ1bmRpbmcgcGxhdGZvcm0gdGhhdCBtYWtlcyBpdCBlYXN5IGZvciBpbnZlc3RvcnMgdG8gaW52ZXN0IGluIEV1cm9wZWFuIHJlYWwgZXN0YXRlIGJvdGggZm9yIHJlbnRhbCBpbmNvbWUgYW5kIGNhcGl0YWwgZ2Fpbi4gVGhleSBjdXJyZW50bHkgbWFuYWdlIOKCrDMybSBpbiBpbnZlc3RtZW50IGFuZCBub3cgcGxhbiB0byBleHBhbmQgdGhlaXIgcHJvZHVjdCBvZmZlcmluZyAmYW1wOyBjb3ZlcmFnZS4gXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5LzAwX3BlcmZpbF9jcm93ZGN1YmU2X2FiYzc2ZDE3YmRkYzdiYjkyODhmYzA4N2JiODQxMDZjLnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjM4LzIwMTcwOS8wMl9jb3Zlcl9jcm93ZGN1YmVfbW9udGFqZV8yXzhjZjU0MmY2MmM4MTk0OTJmNGUyM2VmZjQ2ZmQ0ZjA3LmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvbG9vc2UtZW5kcy1hcHAvcGl0Y2hlcy9sS2tvSmxcIixcInRhcmdldFwiOjg1MDAwMCxcInJhaXNlZFwiOjgyMDQzMCxcImVxdWl0eVwiOlwiMi4yMiVcIixcImludmVzdG9yc1wiOjkzNyxcImRheXNMZWZ0XCI6MjB9LHtcInRpdGxlXCI6XCJwYXNzaW5nYm94ZXNcIixcImRlc2NyaXB0aW9uXCI6XCJwYXNzaW5nYm94ZXMgYWltcyB0byBiZSB0aGUgd29ybGTigJlzIG1vc3QgY29tcHJlaGVuc2l2ZSB3ZWJzaXRlIGZvciBkZWFsaW5nIHdpdGggZGVhdGguIEl0IHByb3ZpZGVzIHNlcnZpY2VzIHRvIGhlbHAgc2VjdXJlIHlvdXIgZGlnaXRhbCBsZWdhY3kgYW5kIHBhc3Mgb24gdGhlIHRoaW5ncyB0aGF0IHJlYWxseSBtYXR0ZXIuIHBhc3Npbmdib3hlcyBhaW1zIHRvIGhhdmUgNTAwLDAwMCBtZW1iZXJzIGJ5IDIwMjIgaW4gYW4gaW5kdXN0cnkgdGhhdCBpcyB3b3J0aCDCozEuNyBiaWxsaW9uIHBlciBhbm51bS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvbG9nb19mb3JfY3Jvd2RjdWJlXzUwNTAxNGRkOTg2OTQ5YmEyOWZiMjc0OTNkNzAzNTMyLmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjEyLzIwMTcwOS9oZWFkZXJfaW1hZ2VfMjAxNzA5MjBfMmMxYjBlOWM3Yzk0ZGI1NGFmOWQzMDA0NDQ1ZjAxMzcuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9wYXNzaW5nYm94ZXMvcGl0Y2hlcy9ib2FHcGxcIixcInRhcmdldFwiOjE1MDAwMCxcInJhaXNlZFwiOjcxNTkwLFwiZXF1aXR5XCI6XCI1LjAwJVwiLFwiaW52ZXN0b3JzXCI6MTExLFwiZGF5c0xlZnRcIjoxNH1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2lkZWFzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjgwODB9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbi8qKlxuICogTWlkZGxld2FyZSB0byBhdXRoZW50aWNhdGUgYSB1c2VyXG4gKiBAcGFyYW0gcmVxXG4gKiBAcGFyYW0gcmVzIFxuICogQHBhcmFtIG5leHQgXG4gKi9cblxuZXhwb3J0IGNvbnN0IFZlcmlmeVVzZXIgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcblxuICAgIC8vaGVyZSB0aGVyZSBzaG91bGQgYmUgYW4gYXV0aGVudGljYXRpb24gbWVjaGFuaXNtIHRvIGF1dGhlbnRpY2F0ZSBlYWNoIHJlcXVlc3QgYmVmb3JlIHRyaWdnZXIgdGhlIG5leHRcbiAgICAvL21pZGRsZXdhcmUsIGZvciB0aGlzIHNhbXBsZSBwcm9qZWN0IGkganVzdCBjYWxsIHRoZSBuZXh0IG1pZGRsZXdhcmUgaW4gdGhlIGNoYWluIHdpdGhvdXQgZG9pbmcgYW55XG4gICAgLy9hdXRoZW50aWNhdGlvblxuXG4gICAgcmV0dXJuIG5leHQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVyaWZ5LXVzZXIudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtJZGVhfSBmcm9tICcuLi9zdG9yYWdlL21vZGVsL2lkZWEnO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIElkZWEuZmluZCh7fSwgKGVycjogbW9uZ29vc2UuRXJyb3IsIGlkZWFzOiBhbnkpID0+IHtcbiAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oaWRlYXMpO1xuICAgIH0pXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2FwaVJvdXRlcy50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGlkZWFTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBsb2dvOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRhcmdldDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByYWlzZWQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBlcXVpdHk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW52ZXN0b3JzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGRheXNMZWZ0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHBhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgICBcbn0pXG5leHBvcnQgY29uc3QgSWRlYSA9IG1vbmdvb3NlLm1vZGVsKCdJZGVhJywgaWRlYVNjaGVtYSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb2RlbC9pZGVhLnRzIiwidmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgbm9kZUV4dGVybmFscyA9IHJlcXVpcmUoJ3dlYnBhY2stbm9kZS1leHRlcm5hbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZW50cnk6ICcuL3NyYy9pbmRleC50cycsXG4gICAgZGV2dG9vbDogJ2lubGluZS1zb3VyY2UtbWFwJyxcbiAgICBvdXRwdXQ6IHtcbiAgICAgICAgcHVibGljUGF0aDogXCIvXCIsXG4gICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdidWlsZCcpLFxuICAgICAgICBmaWxlbmFtZTogJ2J1bmRsZS5qcydcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgZXh0ZW5zaW9uczogWycudHMnXSAvL3Jlc29sdmUgYWxsIHRoZSBtb2R1bGVzIG90aGVyIHRoYW4gaW5kZXgudHNcbiAgICB9LFxuICAgIG1vZHVsZToge1xuICAgICAgICBydWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRlcjogJ3RzLWxvYWRlcicsXG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLnRzPyQvXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHN0YXRzOiB7XG4gICAgICAgIGNvbG9yczogdHJ1ZSxcbiAgICAgICAgbW9kdWxlczogdHJ1ZSxcbiAgICAgICAgcmVhc29uczogdHJ1ZSxcbiAgICAgICAgZXJyb3JEZXRhaWxzOiB0cnVlXG4gICAgICB9LFxuICAgIHRhcmdldDogJ25vZGUnLFxuICAgIGV4dGVybmFsczogW25vZGVFeHRlcm5hbHMoKV0sXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93ZWJwYWNrLmNvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==