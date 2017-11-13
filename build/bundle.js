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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
var env_1 = __webpack_require__(13);
exports.config = __webpack_require__(14)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [{"categoryCode":"AU","description":"Automotive"},{"categoryCode":"BU","description":"Business services"},{"categoryCode":"CO","description":"Consumer goods"},{"categoryCode":"CN","description":"Consumer internet"},{"categoryCode":"ED","description":"Education"},{"categoryCode":"EN","description":"Entartainment and media"},{"categoryCode":"FI","description":"Fitness & sports"},{"categoryCode":"FO","description":"Food & beverage (FMCG)"},{"categoryCode":"HE","description":"Healthtech & healthcare"},{"categoryCode":"IT","description":"IT & Telecommunications"},{"categoryCode":"LE","description":"Leisure and tourism"},{"categoryCode":"MN","description":"Manufacturing"},{"categoryCode":"RE","description":"Restaurants, cafes and bars"}]

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [{"title":"The Lakes Distillery","description":"Opened in 2014, The Lakes Distillery is England's largest whisky distillery, receiving over 100,000 visitors annually and has sold over 160,000 bottles of their premium gin, vodka, and blended whisky; voted one of the top 5 best new distilleries in the world by Time Out USA.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","page":"https://www.crowdcube.com/companies/the-lakes-distillery/pitches/bk9Eel","target":1000000,"raised":681700,"equity":"2.21%","investors":841,"updated_at":"2017-11-08 00:17:47","expires_at":"2017-12-02 23:59:59","categories":["AU","BU"],"stage":"Seed"},{"title":"Movem","description":"Movem is an online property portal, allowing tenants to review their rental experiences, whilst building their own digital rental profile, known as a Movem Passport. Agents and landlords can pay to instantly download a tenant's full reference, designed to be cheaper, quicker, and less open to fraud.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","page":"https://www.crowdcube.com/companies/movem-1/pitches/b6QpXZ","target":300000,"raised":327000,"equity":"11.99%","investors":292,"updated_at":"2017-10-08 00:17:47","expires_at":"2017-12-20 23:59:59","categories":["CO"],"stage":"Seed"},{"title":"SilverSurfers","description":"With one of the UK’s largest online communities for the young at heart over 50's, Silversurfers has over half a million followers. The company has achieved £860k+ revenue from advertising, social media and commission-related partnerships with major brands such as Allianz and Nestle.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cc-ss-logo_3f4131525d8d00150894943fd55123a9.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21553/201709/5db906d7296905c778d2512029f442f6.jpg","page":"https://www.crowdcube.com/companies/silversurfers/pitches/l8VN2b","target":300000,"raised":52750,"equity":"3.61%","investors":42,"updated_at":"2017-11-29 00:17:47","expires_at":"2017-11-30 23:59:59","categories":["CN"],"stage":"Early"},{"title":"Crowdfunder","description":"The UK’s #1 rewards-based crowdfunding platform, Crowdfunder, now has grown to an online community of over 600,000, and has worked with over 80,000 projects to raise £40 million since 2014. Now EBITDA positive with plans to disrupt the £5.6bn grant giving sector.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cf_square_b2bb538ea35a97c57479c205ef45ee64.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","page":"https://www.crowdcube.com/companies/crowdfunder-1/pitches/b2dm2l","target":750000,"raised":723030,"equity":"4.27%","investors":674,"updated_at":"2017-11-01 00:00:40","expires_at":"2017-12-20 23:59:59","categories":["ED"],"stage":"Early"},{"title":"Rightangled","description":"Backed by NHS England, Rightangled is a CQC registered healthcare provider for genetic testing. Having designed their Cardiac genetic test and filed a patent already, the team now seek to expand their testing and telemedicine service into new tests and markets. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201708/ra_logo-_crowdcube_cd6ed104b7534e4bcab22ea9502a2363.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","page":"https://www.crowdcube.com/companies/rightangled-limited/pitches/qBy5Eb","target":100000,"raised":263950,"equity":"14.96%","investors":495,"updated_at":"2017-09-23 00:13:22","expires_at":"2018-02-02 23:59:59","categories":["EN"],"stage":"Growth"},{"title":"Shaw Academy","description":"Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg","page":"https://www.crowdcube.com/companies/shaw-education-group-plc/pitches/ZNa5dl","target":2194000,"raised":2399130,"equity":"2.79%","investors":1686,"updated_at":"2017-07-22 00:10:22","expires_at":"2017-12-02 23:59:59","categories":["FI"],"stage":"Growth"},{"title":"Loose Ends App","description":"Loose Ends is a new app designed to help people get together effortlessly. 60% of Britons want to socialise more often, but organising nights out can be complicated: many planned meetups never happen. Loose Ends is a one-stop social solution, targeting a market worth £60bn per annum in the UK alone.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/hi-res-logo-v2-large_34601eeb3a31625bbcf73317b0bf4597.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21686/201710/2ad35aa66c1ada81a406c5a7974c8dde.jpg","page":"https://www.crowdcube.com/companies/loose-ends-app/pitches/lKkoJl","target":100000,"raised":33160,"equity":"10.00%","investors":20,"updated_at":"2017-10-23 00:13:22","expires_at":"2018-03-02 23:59:59","categories":["FO"],"stage":"Growth"},{"title":"Housers","description":"Launched in 2016 and based in Madrid, Spain, Housers is a real estate crowdfunding platform that makes it easy for investors to invest in European real estate both for rental income and capital gain. They currently manage €32m in investment and now plan to expand their product offering &amp; coverage. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/00_perfil_crowdcube6_abc76d17bddc7bb9288fc087bb84106c.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21638/201709/02_cover_crowdcube_montaje_2_8cf542f62c819492f4e23eff46fd4f07.jpg","page":"https://www.crowdcube.com/companies/loose-ends-app/pitches/lKkoJl","target":850000,"raised":820430,"equity":"2.22%","investors":937,"updated_at":"2017-09-26 00:13:22","expires_at":"2018-01-01 23:59:59","categories":["HE"],"stage":"Seed"},{"title":"passingboxes","description":"passingboxes aims to be the world’s most comprehensive website for dealing with death. It provides services to help secure your digital legacy and pass on the things that really matter. passingboxes aims to have 500,000 members by 2022 in an industry that is worth £1.7 billion per annum.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_for_crowdcube_505014dd986949ba29fb27493d703532.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21612/201709/header_image_20170920_2c1b0e9c7c94db54af9d3004445f0137.jpg","page":"https://www.crowdcube.com/companies/passingboxes/pitches/boaGpl","target":150000,"raised":71590,"equity":"5.00%","investors":111,"updated_at":"2017-11-07 00:13:22","expires_at":"2018-12-25 23:59:59","categories":["IT","LE","MN"],"stage":"Seed"}]

/***/ }),
/* 5 */
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
    updated_at: {
        type: String,
        required: true
    },
    expires_at: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    },
    categories: [{
            type: String,
            required: true
        }],
    stage: {
        type: String,
        required: true
    }
});
exports.Idea = mongoose.model('Idea', ideaSchema);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var categorySchema = new mongoose.Schema({
    categoryCode: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});
exports.Category = mongoose.model('Category', categorySchema);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(8);
var mongo_1 = __webpack_require__(12);
var config_1 = __webpack_require__(2);
var verify_user_1 = __webpack_require__(18);
var server = server_1.default.getInstance();
mongo_1.default.connect();
mongo_1.default.populateDB();
server.use('/api/ideas', verify_user_1.VerifyUser, __webpack_require__(19));
server.use('/api/categories', verify_user_1.VerifyUser, __webpack_require__(20));
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


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var morgan = __webpack_require__(9);
var bodyParser = __webpack_require__(10);
var cors_1 = __webpack_require__(11);
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.header('origin') || req.header('x-forwarded-host') || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var config_1 = __webpack_require__(2);
var populate_1 = __webpack_require__(17);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.NODE_ENV || 'development';


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./categories.json": 3,
	"./development.json": 15,
	"./ideas.json": 4,
	"./production.json": 16
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
webpackContext.id = 14;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idea_1 = __webpack_require__(5);
var category_1 = __webpack_require__(6);
var ideas = __webpack_require__(4);
var categories = __webpack_require__(3);
var clearCollection = function (collection, clb) {
    collection.remove({}, clb);
};
exports.populateDB = function (db) {
    clearCollection(category_1.Category, function () { return console.log.bind(console, 'Category collection cleared'); });
    category_1.Category.create(categories, function (err, categories) {
        clearCollection(idea_1.Idea, function () { return console.log.bind(console, 'Idea collection cleared'); });
        idea_1.Idea.create(ideas, function (err, ideas) {
            if (err) {
                return console.log(err);
            }
            console.log('db populated correctly');
        });
    });
};


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
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
module.exports = router;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var category_1 = __webpack_require__(6);
var router = express.Router();
router.get('/', function (req, res, next) {
    category_1.Category.find({}, function (err, categories) {
        if (err) {
            return next(err);
        }
        res.status(200).json(categories);
    });
});
module.exports = router;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjcxN2ExYzY4NDNjYzgwOWM3YmEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NhdGVnb3JpZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2lkZWFzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvaWRlYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9jYXRlZ29yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvcG9wdWxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaWRlYVJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3J5Um91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxvQzs7Ozs7O0FDQUEscUM7Ozs7Ozs7OztBQ0FBLG9DQUE4QjtBQUNqQixjQUFNLEdBQUcsNEJBQVEsR0FBWSxhQUFPLFVBQU8sQ0FBQyxDQUFDOzs7Ozs7O0FDRDFELG1CQUFtQiwrQ0FBK0MsRUFBRSxzREFBc0QsRUFBRSxtREFBbUQsRUFBRSxzREFBc0QsRUFBRSw4Q0FBOEMsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSwyREFBMkQsRUFBRSw0REFBNEQsRUFBRSw0REFBNEQsRUFBRSx3REFBd0QsRUFBRSxrREFBa0QsRUFBRSxnRUFBZ0UsQzs7Ozs7O0FDQXJ2QixtQkFBbUIsc1BBQXNQLDh2QkFBOHZCLEVBQUUsNCtCQUE0K0IsRUFBRSxnN0JBQWc3QixFQUFFLGc3QkFBZzdCLEVBQUUsZzhCQUFnOEIsRUFBRSwyK0JBQTIrQixFQUFFLCs4QkFBKzhCLEVBQUUscVVBQXFVLGtxQkFBa3FCLEVBQUUsMjlCQUEyOUIsQzs7Ozs7Ozs7O0FDQS9wUixzQ0FBcUM7QUFDckMsSUFBTSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25DLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUNGLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7Q0FFSixDQUFDO0FBQ1csWUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDeER2RCxzQ0FBcUM7QUFDckMsSUFBTSxjQUFjLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsSUFBSTtLQUNmO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtDQUVKLENBQUM7QUFDVyxnQkFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDYm5FLHNDQUE4QjtBQUM5QixzQ0FBb0M7QUFDcEMsc0NBQWdDO0FBRWhDLDRDQUF5QztBQUV6QyxJQUFJLE1BQU0sR0FBRyxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xDLGVBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNoQixlQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7QUFFbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsd0JBQVUsRUFBRSxtQkFBTyxDQUFDLEVBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsd0JBQVUsRUFBRSxtQkFBTyxDQUFDLEVBQXlCLENBQUMsQ0FBQyxDQUFDO0FBRTlFLHVCQUF1QjtBQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVSxFQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUMzRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1FBQ3BCLEtBQUssRUFBRSxHQUFHO0tBQ2IsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCO0lBQzlGLE9BQU8sQ0FBQyxHQUFHLENBQUUsZ0NBQTZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQztBQUN4RixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUN2QkYscUNBQW1DO0FBQ25DLG9DQUFpQztBQUNqQyx5Q0FBMEM7QUFFMUMscUNBQXNDO0FBRXRDO0lBR0k7SUFBc0IsQ0FBQztJQUNSLFdBQUksR0FBbkI7UUFDSSxNQUFNLENBQUMsUUFBUSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFjLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDVyxrQkFBVyxHQUF6QjtRQUNJLEVBQUUsRUFBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBQztZQUNqQixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFDTSxvQkFBRyxHQUFWLFVBQVcsVUFBZ0U7UUFDdkUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQzlCRCxtQzs7Ozs7O0FDQUEsd0M7Ozs7Ozs7OztBQ0NhLHNCQUFjLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDbEcsR0FBRyxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUM1RyxHQUFHLENBQUMsU0FBUyxDQUFDLDhCQUE4QixFQUFFLHdDQUF3QyxDQUFDLENBQUM7SUFFeEYsSUFBSSxFQUFFLENBQUM7QUFDWCxDQUFDOzs7Ozs7Ozs7O0FDTkQsc0NBQXFDO0FBQ3JDLHNDQUFpQztBQUNqQyx5Q0FBc0M7QUFFdEM7SUFHSTtJQUFzQixDQUFDO0lBRXZCOztPQUVHO0lBQ0ksZ0JBQVUsR0FBakI7UUFDSSxxQkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFPLEdBQWQ7UUFDSSxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0QsS0FBSyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUMxQlksZUFBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQzs7Ozs7OztBQ0E3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7Ozs7OztBQ3BCQSxrQkFBa0IsVUFBVSxZQUFZLFVBQVUsc0c7Ozs7OztBQ0FsRCxrQkFBa0IsVUFBVSxZQUFZLFVBQVUsc0c7Ozs7Ozs7OztBQ0lsRCxvQ0FBa0M7QUFDbEMsd0NBQTBDO0FBQzFDLElBQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQyxDQUFDO0FBQzlDLElBQU0sVUFBVSxHQUFHLG1CQUFPLENBQUMsQ0FBMkIsQ0FBQyxDQUFDO0FBRXhELElBQU0sZUFBZSxHQUFHLFVBQUMsVUFBK0IsRUFBRSxHQUFRO0lBQzlELFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFWSxrQkFBVSxHQUFHLFVBQUMsRUFBdUI7SUFDOUMsZUFBZSxDQUFDLG1CQUFRLEVBQUUsY0FBTSxjQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsNkJBQTZCLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQyxDQUFDO0lBQzFGLG1CQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQUcsRUFBRSxVQUFVO1FBQ3hDLGVBQWUsQ0FBQyxXQUFJLEVBQUUsY0FBTSxjQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUseUJBQXlCLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQyxDQUFDO1FBQ2xGLFdBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUs7WUFDMUIsRUFBRSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7QUFFTixDQUFDOzs7Ozs7Ozs7O0FDdkJEOzs7OztHQUtHO0FBRVUsa0JBQVUsR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUU5Rix1R0FBdUc7SUFDdkcsb0dBQW9HO0lBQ3BHLGdCQUFnQjtJQUVoQixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7OztBQ2hCRCxxQ0FBbUM7QUFDbkMsb0NBQTJDO0FBRTNDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUNwRixXQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFDLEdBQW1CLEVBQUUsS0FBVTtRQUMxQyxFQUFFLEVBQUMsR0FBRyxDQUFDLEVBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFHRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7OztBQ2Z4QixxQ0FBbUM7QUFDbkMsd0NBQW1EO0FBRW5ELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUNwRixtQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFtQixFQUFFLFVBQWU7UUFDbkQsRUFBRSxFQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBR0YsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI3MTdhMWM2ODQzY2M4MDljN2JhIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbmdvb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtBUFBfRU5WfSBmcm9tICcuL2Vudic7XG5leHBvcnQgY29uc3QgY29uZmlnID0gcmVxdWlyZShgLi9jb25maWcvJHtBUFBfRU5WfS5qc29uYCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy50cyIsIm1vZHVsZS5leHBvcnRzID0gW3tcImNhdGVnb3J5Q29kZVwiOlwiQVVcIixcImRlc2NyaXB0aW9uXCI6XCJBdXRvbW90aXZlXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiQlVcIixcImRlc2NyaXB0aW9uXCI6XCJCdXNpbmVzcyBzZXJ2aWNlc1wifSx7XCJjYXRlZ29yeUNvZGVcIjpcIkNPXCIsXCJkZXNjcmlwdGlvblwiOlwiQ29uc3VtZXIgZ29vZHNcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJDTlwiLFwiZGVzY3JpcHRpb25cIjpcIkNvbnN1bWVyIGludGVybmV0XCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiRURcIixcImRlc2NyaXB0aW9uXCI6XCJFZHVjYXRpb25cIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJFTlwiLFwiZGVzY3JpcHRpb25cIjpcIkVudGFydGFpbm1lbnQgYW5kIG1lZGlhXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiRklcIixcImRlc2NyaXB0aW9uXCI6XCJGaXRuZXNzICYgc3BvcnRzXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiRk9cIixcImRlc2NyaXB0aW9uXCI6XCJGb29kICYgYmV2ZXJhZ2UgKEZNQ0cpXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiSEVcIixcImRlc2NyaXB0aW9uXCI6XCJIZWFsdGh0ZWNoICYgaGVhbHRoY2FyZVwifSx7XCJjYXRlZ29yeUNvZGVcIjpcIklUXCIsXCJkZXNjcmlwdGlvblwiOlwiSVQgJiBUZWxlY29tbXVuaWNhdGlvbnNcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJMRVwiLFwiZGVzY3JpcHRpb25cIjpcIkxlaXN1cmUgYW5kIHRvdXJpc21cIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJNTlwiLFwiZGVzY3JpcHRpb25cIjpcIk1hbnVmYWN0dXJpbmdcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJSRVwiLFwiZGVzY3JpcHRpb25cIjpcIlJlc3RhdXJhbnRzLCBjYWZlcyBhbmQgYmFyc1wifV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvY2F0ZWdvcmllcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcInRpdGxlXCI6XCJUaGUgTGFrZXMgRGlzdGlsbGVyeVwiLFwiZGVzY3JpcHRpb25cIjpcIk9wZW5lZCBpbiAyMDE0LCBUaGUgTGFrZXMgRGlzdGlsbGVyeSBpcyBFbmdsYW5kJ3MgbGFyZ2VzdCB3aGlza3kgZGlzdGlsbGVyeSwgcmVjZWl2aW5nIG92ZXIgMTAwLDAwMCB2aXNpdG9ycyBhbm51YWxseSBhbmQgaGFzIHNvbGQgb3ZlciAxNjAsMDAwIGJvdHRsZXMgb2YgdGhlaXIgcHJlbWl1bSBnaW4sIHZvZGthLCBhbmQgYmxlbmRlZCB3aGlza3k7IHZvdGVkIG9uZSBvZiB0aGUgdG9wIDUgYmVzdCBuZXcgZGlzdGlsbGVyaWVzIGluIHRoZSB3b3JsZCBieSBUaW1lIE91dCBVU0EuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzEwL3RoZV9sYWtlc19kaXN0aWxsZXJ5Xy1fbmF0aW9uYWxfcGFya19sb2dvXy1fYmxhY2tfc3F1YXJlXzlmYzgwMDJhMWU4NTY2YjFjZTQ3MGIzNmE1OWU0YWFjLmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTg4LzIwMTcxMC91bnRpdGxlZF85NmUzNDExZmIwMzRjYjBmZjUyOTRiOTU1Yzc3YjJiNC5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL3RoZS1sYWtlcy1kaXN0aWxsZXJ5L3BpdGNoZXMvYms5RWVsXCIsXCJ0YXJnZXRcIjoxMDAwMDAwLFwicmFpc2VkXCI6NjgxNzAwLFwiZXF1aXR5XCI6XCIyLjIxJVwiLFwiaW52ZXN0b3JzXCI6ODQxLFwidXBkYXRlZF9hdFwiOlwiMjAxNy0xMS0wOCAwMDoxNzo0N1wiLFwiZXhwaXJlc19hdFwiOlwiMjAxNy0xMi0wMiAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkFVXCIsXCJCVVwiXSxcInN0YWdlXCI6XCJTZWVkXCJ9LHtcInRpdGxlXCI6XCJNb3ZlbVwiLFwiZGVzY3JpcHRpb25cIjpcIk1vdmVtIGlzIGFuIG9ubGluZSBwcm9wZXJ0eSBwb3J0YWwsIGFsbG93aW5nIHRlbmFudHMgdG8gcmV2aWV3IHRoZWlyIHJlbnRhbCBleHBlcmllbmNlcywgd2hpbHN0IGJ1aWxkaW5nIHRoZWlyIG93biBkaWdpdGFsIHJlbnRhbCBwcm9maWxlLCBrbm93biBhcyBhIE1vdmVtIFBhc3Nwb3J0LiBBZ2VudHMgYW5kIGxhbmRsb3JkcyBjYW4gcGF5IHRvIGluc3RhbnRseSBkb3dubG9hZCBhIHRlbmFudCdzIGZ1bGwgcmVmZXJlbmNlLCBkZXNpZ25lZCB0byBiZSBjaGVhcGVyLCBxdWlja2VyLCBhbmQgbGVzcyBvcGVuIHRvIGZyYXVkLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC90aGVfbGFrZXNfZGlzdGlsbGVyeV8tX25hdGlvbmFsX3BhcmtfbG9nb18tX2JsYWNrX3NxdWFyZV85ZmM4MDAyYTFlODU2NmIxY2U0NzBiMzZhNTllNGFhYy5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTU4OC8yMDE3MTAvdW50aXRsZWRfOTZlMzQxMWZiMDM0Y2IwZmY1Mjk0Yjk1NWM3N2IyYjQuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9tb3ZlbS0xL3BpdGNoZXMvYjZRcFhaXCIsXCJ0YXJnZXRcIjozMDAwMDAsXCJyYWlzZWRcIjozMjcwMDAsXCJlcXVpdHlcIjpcIjExLjk5JVwiLFwiaW52ZXN0b3JzXCI6MjkyLFwidXBkYXRlZF9hdFwiOlwiMjAxNy0xMC0wOCAwMDoxNzo0N1wiLFwiZXhwaXJlc19hdFwiOlwiMjAxNy0xMi0yMCAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkNPXCJdLFwic3RhZ2VcIjpcIlNlZWRcIn0se1widGl0bGVcIjpcIlNpbHZlclN1cmZlcnNcIixcImRlc2NyaXB0aW9uXCI6XCJXaXRoIG9uZSBvZiB0aGUgVUvigJlzIGxhcmdlc3Qgb25saW5lIGNvbW11bml0aWVzIGZvciB0aGUgeW91bmcgYXQgaGVhcnQgb3ZlciA1MCdzLCBTaWx2ZXJzdXJmZXJzIGhhcyBvdmVyIGhhbGYgYSBtaWxsaW9uIGZvbGxvd2Vycy4gVGhlIGNvbXBhbnkgaGFzIGFjaGlldmVkIMKjODYwaysgcmV2ZW51ZSBmcm9tIGFkdmVydGlzaW5nLCBzb2NpYWwgbWVkaWEgYW5kIGNvbW1pc3Npb24tcmVsYXRlZCBwYXJ0bmVyc2hpcHMgd2l0aCBtYWpvciBicmFuZHMgc3VjaCBhcyBBbGxpYW56IGFuZCBOZXN0bGUuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2NjLXNzLWxvZ29fM2Y0MTMxNTI1ZDhkMDAxNTA4OTQ5NDNmZDU1MTIzYTkuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1NTMvMjAxNzA5LzVkYjkwNmQ3Mjk2OTA1Yzc3OGQyNTEyMDI5ZjQ0MmY2LmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvc2lsdmVyc3VyZmVycy9waXRjaGVzL2w4Vk4yYlwiLFwidGFyZ2V0XCI6MzAwMDAwLFwicmFpc2VkXCI6NTI3NTAsXCJlcXVpdHlcIjpcIjMuNjElXCIsXCJpbnZlc3RvcnNcIjo0MixcInVwZGF0ZWRfYXRcIjpcIjIwMTctMTEtMjkgMDA6MTc6NDdcIixcImV4cGlyZXNfYXRcIjpcIjIwMTctMTEtMzAgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJDTlwiXSxcInN0YWdlXCI6XCJFYXJseVwifSx7XCJ0aXRsZVwiOlwiQ3Jvd2RmdW5kZXJcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgVUvigJlzICMxIHJld2FyZHMtYmFzZWQgY3Jvd2RmdW5kaW5nIHBsYXRmb3JtLCBDcm93ZGZ1bmRlciwgbm93IGhhcyBncm93biB0byBhbiBvbmxpbmUgY29tbXVuaXR5IG9mIG92ZXIgNjAwLDAwMCwgYW5kIGhhcyB3b3JrZWQgd2l0aCBvdmVyIDgwLDAwMCBwcm9qZWN0cyB0byByYWlzZSDCozQwIG1pbGxpb24gc2luY2UgMjAxNC4gTm93IEVCSVREQSBwb3NpdGl2ZSB3aXRoIHBsYW5zIHRvIGRpc3J1cHQgdGhlIMKjNS42Ym4gZ3JhbnQgZ2l2aW5nIHNlY3Rvci5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvY2Zfc3F1YXJlX2IyYmI1MzhlYTM1YTk3YzU3NDc5YzIwNWVmNDVlZTY0LnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjQxLzIwMTcwOS9jY19waXRjaF9wYWdlX2Jhbm5lcl85ZjM3ZDQwOWI5Yjk4NzQ3YjZmZjk5YTZmYjNlODhiZC5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL2Nyb3dkZnVuZGVyLTEvcGl0Y2hlcy9iMmRtMmxcIixcInRhcmdldFwiOjc1MDAwMCxcInJhaXNlZFwiOjcyMzAzMCxcImVxdWl0eVwiOlwiNC4yNyVcIixcImludmVzdG9yc1wiOjY3NCxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMTEtMDEgMDA6MDA6NDBcIixcImV4cGlyZXNfYXRcIjpcIjIwMTctMTItMjAgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJFRFwiXSxcInN0YWdlXCI6XCJFYXJseVwifSx7XCJ0aXRsZVwiOlwiUmlnaHRhbmdsZWRcIixcImRlc2NyaXB0aW9uXCI6XCJCYWNrZWQgYnkgTkhTIEVuZ2xhbmQsIFJpZ2h0YW5nbGVkIGlzIGEgQ1FDIHJlZ2lzdGVyZWQgaGVhbHRoY2FyZSBwcm92aWRlciBmb3IgZ2VuZXRpYyB0ZXN0aW5nLiBIYXZpbmcgZGVzaWduZWQgdGhlaXIgQ2FyZGlhYyBnZW5ldGljIHRlc3QgYW5kIGZpbGVkIGEgcGF0ZW50IGFscmVhZHksIHRoZSB0ZWFtIG5vdyBzZWVrIHRvIGV4cGFuZCB0aGVpciB0ZXN0aW5nIGFuZCB0ZWxlbWVkaWNpbmUgc2VydmljZSBpbnRvIG5ldyB0ZXN0cyBhbmQgbWFya2V0cy4gXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA4L3JhX2xvZ28tX2Nyb3dkY3ViZV9jZDZlZDEwNGI3NTM0ZTRiY2FiMjJlYTk1MDJhMjM2My5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY0MS8yMDE3MDkvY2NfcGl0Y2hfcGFnZV9iYW5uZXJfOWYzN2Q0MDliOWI5ODc0N2I2ZmY5OWE2ZmIzZTg4YmQuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9yaWdodGFuZ2xlZC1saW1pdGVkL3BpdGNoZXMvcUJ5NUViXCIsXCJ0YXJnZXRcIjoxMDAwMDAsXCJyYWlzZWRcIjoyNjM5NTAsXCJlcXVpdHlcIjpcIjE0Ljk2JVwiLFwiaW52ZXN0b3JzXCI6NDk1LFwidXBkYXRlZF9hdFwiOlwiMjAxNy0wOS0yMyAwMDoxMzoyMlwiLFwiZXhwaXJlc19hdFwiOlwiMjAxOC0wMi0wMiAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkVOXCJdLFwic3RhZ2VcIjpcIkdyb3d0aFwifSx7XCJ0aXRsZVwiOlwiU2hhdyBBY2FkZW15XCIsXCJkZXNjcmlwdGlvblwiOlwiRm91bmRlZCBpbiAyMDE0LCBTaGF3IEFjYWRlbXkgaXMgYW4gb25saW5lIGVkdWNhdGlvbiBwcm92aWRlciB3aGljaCB0ZWFjaGVzIGEgdmFyaWV0eSBvZiBzdWJqZWN0cyBsaXZlIHRocm91Z2ggdGhlaXIgYmVzcG9rZSBzb2Z0d2FyZSBwbGF0Zm9ybS4gSGF2aW5nIHRhdWdodCBvdmVyIDQsMDAwLDAwMCBzdHVkZW50cyBmcm9tIGFsbCBvdmVyIHRoZSB3b3JsZCwgdGhleSBhcmUgY3VycmVudGx5IGdyb3dpbmcgYnkgMjUwLDAwMCBuZXcgc3R1ZGVudHMgYSBtb250aCBhbmQgbm93IHBsYW4gdG8gc2NhbGUgZ2xvYmFsbHkuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2xvZ29faW52ZXJ0ZWRfYmx1ZV9zdHlsZV8yXzFkMDM5MDBhNDg0ZmQ3MzA4NGUyMGE0OTY4OTMwOGM2LmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjcyLzIwMTcwOS9kZXNrdG9wX29wdDJfN2JkODZkMDE2YmQ2NTE4YmM1YTAzOWNkZTE4ZjEyYjguanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9zaGF3LWVkdWNhdGlvbi1ncm91cC1wbGMvcGl0Y2hlcy9aTmE1ZGxcIixcInRhcmdldFwiOjIxOTQwMDAsXCJyYWlzZWRcIjoyMzk5MTMwLFwiZXF1aXR5XCI6XCIyLjc5JVwiLFwiaW52ZXN0b3JzXCI6MTY4NixcInVwZGF0ZWRfYXRcIjpcIjIwMTctMDctMjIgMDA6MTA6MjJcIixcImV4cGlyZXNfYXRcIjpcIjIwMTctMTItMDIgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJGSVwiXSxcInN0YWdlXCI6XCJHcm93dGhcIn0se1widGl0bGVcIjpcIkxvb3NlIEVuZHMgQXBwXCIsXCJkZXNjcmlwdGlvblwiOlwiTG9vc2UgRW5kcyBpcyBhIG5ldyBhcHAgZGVzaWduZWQgdG8gaGVscCBwZW9wbGUgZ2V0IHRvZ2V0aGVyIGVmZm9ydGxlc3NseS4gNjAlIG9mIEJyaXRvbnMgd2FudCB0byBzb2NpYWxpc2UgbW9yZSBvZnRlbiwgYnV0IG9yZ2FuaXNpbmcgbmlnaHRzIG91dCBjYW4gYmUgY29tcGxpY2F0ZWQ6IG1hbnkgcGxhbm5lZCBtZWV0dXBzIG5ldmVyIGhhcHBlbi4gTG9vc2UgRW5kcyBpcyBhIG9uZS1zdG9wIHNvY2lhbCBzb2x1dGlvbiwgdGFyZ2V0aW5nIGEgbWFya2V0IHdvcnRoIMKjNjBibiBwZXIgYW5udW0gaW4gdGhlIFVLIGFsb25lLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC9oaS1yZXMtbG9nby12Mi1sYXJnZV8zNDYwMWVlYjNhMzE2MjViYmNmNzMzMTdiMGJmNDU5Ny5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY4Ni8yMDE3MTAvMmFkMzVhYTY2YzFhZGE4MWE0MDZjNWE3OTc0YzhkZGUuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9sb29zZS1lbmRzLWFwcC9waXRjaGVzL2xLa29KbFwiLFwidGFyZ2V0XCI6MTAwMDAwLFwicmFpc2VkXCI6MzMxNjAsXCJlcXVpdHlcIjpcIjEwLjAwJVwiLFwiaW52ZXN0b3JzXCI6MjAsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTEwLTIzIDAwOjEzOjIyXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE4LTAzLTAyIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiRk9cIl0sXCJzdGFnZVwiOlwiR3Jvd3RoXCJ9LHtcInRpdGxlXCI6XCJIb3VzZXJzXCIsXCJkZXNjcmlwdGlvblwiOlwiTGF1bmNoZWQgaW4gMjAxNiBhbmQgYmFzZWQgaW4gTWFkcmlkLCBTcGFpbiwgSG91c2VycyBpcyBhIHJlYWwgZXN0YXRlIGNyb3dkZnVuZGluZyBwbGF0Zm9ybSB0aGF0IG1ha2VzIGl0IGVhc3kgZm9yIGludmVzdG9ycyB0byBpbnZlc3QgaW4gRXVyb3BlYW4gcmVhbCBlc3RhdGUgYm90aCBmb3IgcmVudGFsIGluY29tZSBhbmQgY2FwaXRhbCBnYWluLiBUaGV5IGN1cnJlbnRseSBtYW5hZ2Ug4oKsMzJtIGluIGludmVzdG1lbnQgYW5kIG5vdyBwbGFuIHRvIGV4cGFuZCB0aGVpciBwcm9kdWN0IG9mZmVyaW5nICZhbXA7IGNvdmVyYWdlLiBcIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvMDBfcGVyZmlsX2Nyb3dkY3ViZTZfYWJjNzZkMTdiZGRjN2JiOTI4OGZjMDg3YmI4NDEwNmMucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2MzgvMjAxNzA5LzAyX2NvdmVyX2Nyb3dkY3ViZV9tb250YWplXzJfOGNmNTQyZjYyYzgxOTQ5MmY0ZTIzZWZmNDZmZDRmMDcuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9sb29zZS1lbmRzLWFwcC9waXRjaGVzL2xLa29KbFwiLFwidGFyZ2V0XCI6ODUwMDAwLFwicmFpc2VkXCI6ODIwNDMwLFwiZXF1aXR5XCI6XCIyLjIyJVwiLFwiaW52ZXN0b3JzXCI6OTM3LFwidXBkYXRlZF9hdFwiOlwiMjAxNy0wOS0yNiAwMDoxMzoyMlwiLFwiZXhwaXJlc19hdFwiOlwiMjAxOC0wMS0wMSAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkhFXCJdLFwic3RhZ2VcIjpcIlNlZWRcIn0se1widGl0bGVcIjpcInBhc3Npbmdib3hlc1wiLFwiZGVzY3JpcHRpb25cIjpcInBhc3Npbmdib3hlcyBhaW1zIHRvIGJlIHRoZSB3b3JsZOKAmXMgbW9zdCBjb21wcmVoZW5zaXZlIHdlYnNpdGUgZm9yIGRlYWxpbmcgd2l0aCBkZWF0aC4gSXQgcHJvdmlkZXMgc2VydmljZXMgdG8gaGVscCBzZWN1cmUgeW91ciBkaWdpdGFsIGxlZ2FjeSBhbmQgcGFzcyBvbiB0aGUgdGhpbmdzIHRoYXQgcmVhbGx5IG1hdHRlci4gcGFzc2luZ2JveGVzIGFpbXMgdG8gaGF2ZSA1MDAsMDAwIG1lbWJlcnMgYnkgMjAyMiBpbiBhbiBpbmR1c3RyeSB0aGF0IGlzIHdvcnRoIMKjMS43IGJpbGxpb24gcGVyIGFubnVtLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9sb2dvX2Zvcl9jcm93ZGN1YmVfNTA1MDE0ZGQ5ODY5NDliYTI5ZmIyNzQ5M2Q3MDM1MzIuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2MTIvMjAxNzA5L2hlYWRlcl9pbWFnZV8yMDE3MDkyMF8yYzFiMGU5YzdjOTRkYjU0YWY5ZDMwMDQ0NDVmMDEzNy5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL3Bhc3Npbmdib3hlcy9waXRjaGVzL2JvYUdwbFwiLFwidGFyZ2V0XCI6MTUwMDAwLFwicmFpc2VkXCI6NzE1OTAsXCJlcXVpdHlcIjpcIjUuMDAlXCIsXCJpbnZlc3RvcnNcIjoxMTEsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTExLTA3IDAwOjEzOjIyXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE4LTEyLTI1IDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiSVRcIixcIkxFXCIsXCJNTlwiXSxcInN0YWdlXCI6XCJTZWVkXCJ9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9pZGVhcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGlkZWFTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBsb2dvOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRhcmdldDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByYWlzZWQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBlcXVpdHk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW52ZXN0b3JzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHVwZGF0ZWRfYXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZXhwaXJlc19hdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNhdGVnb3JpZXM6IFt7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XSxcbiAgICBzdGFnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICAgIFxufSlcbmV4cG9ydCBjb25zdCBJZGVhID0gbW9uZ29vc2UubW9kZWwoJ0lkZWEnLCBpZGVhU2NoZW1hKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vZGVsL2lkZWEudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCBjYXRlZ29yeVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGNhdGVnb3J5Q29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gICAgXG59KVxuZXhwb3J0IGNvbnN0IENhdGVnb3J5ID0gbW9uZ29vc2UubW9kZWwoJ0NhdGVnb3J5JywgY2F0ZWdvcnlTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9kZWwvY2F0ZWdvcnkudHMiLCJpbXBvcnQgU2VydmVyIGZyb20gJy4vc2VydmVyJztcbmltcG9ydCBNb25nbyBmcm9tICcuL3N0b3JhZ2UvbW9uZ28nO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1ZlcmlmeVVzZXJ9IGZyb20gJy4vdmVyaWZ5LXVzZXInO1xuXG5sZXQgc2VydmVyID0gU2VydmVyLmdldEluc3RhbmNlKCk7XG5Nb25nby5jb25uZWN0KCk7XG5Nb25nby5wb3B1bGF0ZURCKCk7XG5cbnNlcnZlci51c2UoJy9hcGkvaWRlYXMnLCBWZXJpZnlVc2VyLCByZXF1aXJlKCcuL3JvdXRlcy9pZGVhUm91dGVzJykpO1xuc2VydmVyLnVzZSgnL2FwaS9jYXRlZ29yaWVzJywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvY2F0ZWdvcnlSb3V0ZXMnKSk7XG5cbi8vZ2VuZXJpYyBlcnJvciBoYW5kbGVyXG5zZXJ2ZXIudXNlKChlcnI6IEVycm9yLCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIHJlcy5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgIGVycm9yOiA1MDBcbiAgICB9KVxufSkgXG5cbnNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlQsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coIGBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgICR7cHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlR9YCk7XG59KVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7Y29yc01pZGRsZXdhcmV9IGZyb20gJy4vY29ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlciB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBleHByZXNzLkV4cHJlc3M7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIHByaXZhdGUgc3RhdGljIGluaXQoKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlID0gZXhwcmVzcygpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGNvcnNNaWRkbGV3YXJlKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtb3JnYW4oJ2RldicpKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2Ygc2VydmVyXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZighU2VydmVyLmluc3RhbmNlKXtcbiAgICAgICAgICAgIFNlcnZlci5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNlcnZlci5pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIHVzZShtaWRkbGV3YXJlOiBleHByZXNzLlJlcXVlc3RIYW5kbGVyIHwgZXhwcmVzcy5FcnJvclJlcXVlc3RIYW5kbGVyKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtaWRkbGV3YXJlKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vcmdhblwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmV4cG9ydCBjb25zdCBjb3JzTWlkZGxld2FyZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIHJlcS5oZWFkZXIoJ29yaWdpbicpIHx8IHJlcS5oZWFkZXIoJ3gtZm9yd2FyZGVkLWhvc3QnKSB8fCAnKicpO1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NULCBPUFRJT05TLCBQVVQsIFBBVENILCBERUxFVEUnKTtcblxuICAgIG5leHQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29ycy50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtwb3B1bGF0ZURCfSBmcm9tICcuL3BvcHVsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZ28ge1xuXG4gICAgc3RhdGljIGRiOiBtb25nb29zZS5Db25uZWN0aW9uO1xuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG5cbiAgICAvKipcbiAgICAgKiBwb3B1bGF0ZSBtb25nbyBkYiB3aXRoIHNvbWUgbW9jayBkYXRhXG4gICAgICovXG4gICAgc3RhdGljIHBvcHVsYXRlREIoKXtcbiAgICAgICAgcG9wdWxhdGVEQihNb25nby5kYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgbW9uZ29vc2UuQ29ubmVjdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBjb25uZWN0KCkgOm1vbmdvb3NlLkNvbm5lY3Rpb24ge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5tb25nby51cmksIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XG4gICAgICAgIE1vbmdvLmRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgTW9uZ28uZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uZWN0aW9uIGVycm9yJykpO1xuICAgICAgICBNb25nby5kYi5vbmNlKCdvcGVuJywgY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnY29ubmVjdGVkIGNvcnJlY3RseSB0byBtb25nbyBkYicpKTtcbiAgICAgICAgcmV0dXJuIE1vbmdvLmRiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb25nby50cyIsImV4cG9ydCBjb25zdCBBUFBfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52LnRzIiwidmFyIG1hcCA9IHtcblx0XCIuL2NhdGVnb3JpZXMuanNvblwiOiAzLFxuXHRcIi4vZGV2ZWxvcG1lbnQuanNvblwiOiAxNSxcblx0XCIuL2lkZWFzLmpzb25cIjogNCxcblx0XCIuL3Byb2R1Y3Rpb24uanNvblwiOiAxNlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJFxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6OTAwMn0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjgwODB9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogc2NyaXB0IGZvciBpbml0aWFsIGRiIHBvcHVsYXRpb25cbiAqL1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHtJZGVhfSBmcm9tICcuL21vZGVsL2lkZWEnO1xuaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSAnLi9tb2RlbC9jYXRlZ29yeSc7XG5jb25zdCBpZGVhcyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9pZGVhcy5qc29uJyk7XG5jb25zdCBjYXRlZ29yaWVzID0gcmVxdWlyZSgnLi4vY29uZmlnL2NhdGVnb3JpZXMuanNvbicpO1xuXG5jb25zdCBjbGVhckNvbGxlY3Rpb24gPSAoY29sbGVjdGlvbjogbW9uZ29vc2UuTW9kZWw8YW55PiwgY2xiOiBhbnkpID0+IHtcbiAgICBjb2xsZWN0aW9uLnJlbW92ZSh7fSwgY2xiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlREIgPSAoZGI6IG1vbmdvb3NlLkNvbm5lY3Rpb24pID0+IHtcbiAgICBjbGVhckNvbGxlY3Rpb24oQ2F0ZWdvcnksICgpID0+IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ0NhdGVnb3J5IGNvbGxlY3Rpb24gY2xlYXJlZCcpKTtcbiAgICBDYXRlZ29yeS5jcmVhdGUoY2F0ZWdvcmllcywgKGVyciwgY2F0ZWdvcmllcykgPT4ge1xuICAgICAgICBjbGVhckNvbGxlY3Rpb24oSWRlYSwgKCkgPT4gY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnSWRlYSBjb2xsZWN0aW9uIGNsZWFyZWQnKSk7XG4gICAgICAgIElkZWEuY3JlYXRlKGlkZWFzLCAoZXJyLCBpZGVhcykgPT4ge1xuICAgICAgICAgICAgaWYoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGIgcG9wdWxhdGVkIGNvcnJlY3RseScpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL3BvcHVsYXRlLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuLyoqXG4gKiBNaWRkbGV3YXJlIHRvIGF1dGhlbnRpY2F0ZSBhIHVzZXJcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXMgXG4gKiBAcGFyYW0gbmV4dCBcbiAqL1xuXG5leHBvcnQgY29uc3QgVmVyaWZ5VXNlciA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuXG4gICAgLy9oZXJlIHRoZXJlIHNob3VsZCBiZSBhbiBhdXRoZW50aWNhdGlvbiBtZWNoYW5pc20gdG8gYXV0aGVudGljYXRlIGVhY2ggcmVxdWVzdCBiZWZvcmUgdHJpZ2dlciB0aGUgbmV4dFxuICAgIC8vbWlkZGxld2FyZSwgZm9yIHRoaXMgc2FtcGxlIHByb2plY3QgaSBqdXN0IGNhbGwgdGhlIG5leHQgbWlkZGxld2FyZSBpbiB0aGUgY2hhaW4gd2l0aG91dCBkb2luZyBhbnlcbiAgICAvL2F1dGhlbnRpY2F0aW9uXG5cbiAgICByZXR1cm4gbmV4dCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZXJpZnktdXNlci50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge0lkZWF9IGZyb20gJy4uL3N0b3JhZ2UvbW9kZWwvaWRlYSc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgSWRlYS5maW5kKHt9LCAoZXJyOiBtb25nb29zZS5FcnJvciwgaWRlYXM6IGFueSkgPT4ge1xuICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihpZGVhcyk7XG4gICAgfSlcbn0pXG5cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9pZGVhUm91dGVzLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gJy4uL3N0b3JhZ2UvbW9kZWwvY2F0ZWdvcnknO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIENhdGVnb3J5LmZpbmQoe30sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBjYXRlZ29yaWVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oY2F0ZWdvcmllcyk7XG4gICAgfSlcbn0pXG5cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9jYXRlZ29yeVJvdXRlcy50cyJdLCJzb3VyY2VSb290IjoiIn0=