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

module.exports = [{"title":"The Lakes Distillery","description":"Opened in 2014, The Lakes Distillery is England's largest whisky distillery, receiving over 100,000 visitors annually and has sold over 160,000 bottles of their premium gin, vodka, and blended whisky; voted one of the top 5 best new distilleries in the world by Time Out USA.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","page":"https://www.crowdcube.com/companies/the-lakes-distillery/pitches/bk9Eel","target":1000000,"raised":681700,"equity":"2.21%","investors":841,"updated_at":"2017-11-08 00:17:47","expires_at":"2017-12-02 23:59:59","categories":["AU","BU"],"stage":"Seed"},{"title":"Movem","description":"Movem is an online property portal, allowing tenants to review their rental experiences, whilst building their own digital rental profile, known as a Movem Passport. Agents and landlords can pay to instantly download a tenant's full reference, designed to be cheaper, quicker, and less open to fraud.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/crowdcubelogo_bb49b8102828754627b6a910c6fd0eca.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","page":"https://www.crowdcube.com/companies/movem-1/pitches/b6QpXZ","target":300000,"raised":327000,"equity":"11.99%","investors":292,"updated_at":"2017-10-08 00:17:47","expires_at":"2017-12-20 23:59:59","categories":["CO"],"stage":"Seed"},{"title":"SilverSurfers","description":"With one of the UK’s largest online communities for the young at heart over 50's, Silversurfers has over half a million followers. The company has achieved £860k+ revenue from advertising, social media and commission-related partnerships with major brands such as Allianz and Nestle.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cc-ss-logo_3f4131525d8d00150894943fd55123a9.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21553/201709/5db906d7296905c778d2512029f442f6.jpg","page":"https://www.crowdcube.com/companies/silversurfers/pitches/l8VN2b","target":300000,"raised":52750,"equity":"3.61%","investors":42,"updated_at":"2017-11-29 00:17:47","expires_at":"2017-11-30 23:59:59","categories":["CN"],"stage":"Early"},{"title":"Crowdfunder","description":"The UK’s #1 rewards-based crowdfunding platform, Crowdfunder, now has grown to an online community of over 600,000, and has worked with over 80,000 projects to raise £40 million since 2014. Now EBITDA positive with plans to disrupt the £5.6bn grant giving sector.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cf_square_b2bb538ea35a97c57479c205ef45ee64.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","page":"https://www.crowdcube.com/companies/crowdfunder-1/pitches/b2dm2l","target":750000,"raised":723030,"equity":"4.27%","investors":674,"updated_at":"2017-11-01 00:00:40","expires_at":"2017-12-20 23:59:59","categories":["ED"],"stage":"Early"},{"title":"Rightangled","description":"Backed by NHS England, Rightangled is a CQC registered healthcare provider for genetic testing. Having designed their Cardiac genetic test and filed a patent already, the team now seek to expand their testing and telemedicine service into new tests and markets. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201708/ra_logo-_crowdcube_cd6ed104b7534e4bcab22ea9502a2363.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","page":"https://www.crowdcube.com/companies/rightangled-limited/pitches/qBy5Eb","target":100000,"raised":263950,"equity":"14.96%","investors":495,"updated_at":"2017-09-23 00:13:22","expires_at":"2018-02-02 23:59:59","categories":["EN"],"stage":"Growth"},{"title":"Shaw Academy","description":"Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg","page":"https://www.crowdcube.com/companies/shaw-education-group-plc/pitches/ZNa5dl","target":2194000,"raised":2399130,"equity":"2.79%","investors":1686,"updated_at":"2017-07-22 00:10:22","expires_at":"2017-12-02 23:59:59","categories":["FI"],"stage":"Growth"},{"title":"Loose Ends App","description":"Loose Ends is a new app designed to help people get together effortlessly. 60% of Britons want to socialise more often, but organising nights out can be complicated: many planned meetups never happen. Loose Ends is a one-stop social solution, targeting a market worth £60bn per annum in the UK alone.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/hi-res-logo-v2-large_34601eeb3a31625bbcf73317b0bf4597.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21686/201710/2ad35aa66c1ada81a406c5a7974c8dde.jpg","page":"https://www.crowdcube.com/companies/loose-ends-app/pitches/lKkoJl","target":100000,"raised":33160,"equity":"10.00%","investors":20,"updated_at":"2017-10-23 00:13:22","expires_at":"2018-03-02 23:59:59","categories":["FO"],"stage":"Growth"},{"title":"Housers","description":"Launched in 2016 and based in Madrid, Spain, Housers is a real estate crowdfunding platform that makes it easy for investors to invest in European real estate both for rental income and capital gain. They currently manage €32m in investment and now plan to expand their product offering &amp; coverage. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/00_perfil_crowdcube6_abc76d17bddc7bb9288fc087bb84106c.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21638/201709/02_cover_crowdcube_montaje_2_8cf542f62c819492f4e23eff46fd4f07.jpg","page":"https://www.crowdcube.com/companies/loose-ends-app/pitches/lKkoJl","target":850000,"raised":820430,"equity":"2.22%","investors":937,"updated_at":"2017-09-26 00:13:22","expires_at":"2018-01-01 23:59:59","categories":["HE"],"stage":"Seed"},{"title":"passingboxes","description":"passingboxes aims to be the world’s most comprehensive website for dealing with death. It provides services to help secure your digital legacy and pass on the things that really matter. passingboxes aims to have 500,000 members by 2022 in an industry that is worth £1.7 billion per annum.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_for_crowdcube_505014dd986949ba29fb27493d703532.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21612/201709/header_image_20170920_2c1b0e9c7c94db54af9d3004445f0137.jpg","page":"https://www.crowdcube.com/companies/passingboxes/pitches/boaGpl","target":150000,"raised":71590,"equity":"5.00%","investors":111,"updated_at":"2017-11-07 00:13:22","expires_at":"2018-12-25 23:59:59","categories":["IT","LE","MN"],"stage":"Seed"}]

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
//Mongo.populateDB();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWYxYzA2NDk2YmI5YmMxNmMwNzQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NhdGVnb3JpZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2lkZWFzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvaWRlYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9jYXRlZ29yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvcG9wdWxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaWRlYVJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3J5Um91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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IG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFmMWMwNjQ5NmJiOWJjMTZjMDc0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbmdvb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtBUFBfRU5WfSBmcm9tICcuL2Vudic7XG5leHBvcnQgY29uc3QgY29uZmlnID0gcmVxdWlyZShgLi9jb25maWcvJHtBUFBfRU5WfS5qc29uYCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy50cyIsIm1vZHVsZS5leHBvcnRzID0gW3tcImNhdGVnb3J5Q29kZVwiOlwiQVVcIixcImRlc2NyaXB0aW9uXCI6XCJBdXRvbW90aXZlXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiQlVcIixcImRlc2NyaXB0aW9uXCI6XCJCdXNpbmVzcyBzZXJ2aWNlc1wifSx7XCJjYXRlZ29yeUNvZGVcIjpcIkNPXCIsXCJkZXNjcmlwdGlvblwiOlwiQ29uc3VtZXIgZ29vZHNcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJDTlwiLFwiZGVzY3JpcHRpb25cIjpcIkNvbnN1bWVyIGludGVybmV0XCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiRURcIixcImRlc2NyaXB0aW9uXCI6XCJFZHVjYXRpb25cIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJFTlwiLFwiZGVzY3JpcHRpb25cIjpcIkVudGFydGFpbm1lbnQgYW5kIG1lZGlhXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiRklcIixcImRlc2NyaXB0aW9uXCI6XCJGaXRuZXNzICYgc3BvcnRzXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiRk9cIixcImRlc2NyaXB0aW9uXCI6XCJGb29kICYgYmV2ZXJhZ2UgKEZNQ0cpXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiSEVcIixcImRlc2NyaXB0aW9uXCI6XCJIZWFsdGh0ZWNoICYgaGVhbHRoY2FyZVwifSx7XCJjYXRlZ29yeUNvZGVcIjpcIklUXCIsXCJkZXNjcmlwdGlvblwiOlwiSVQgJiBUZWxlY29tbXVuaWNhdGlvbnNcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJMRVwiLFwiZGVzY3JpcHRpb25cIjpcIkxlaXN1cmUgYW5kIHRvdXJpc21cIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJNTlwiLFwiZGVzY3JpcHRpb25cIjpcIk1hbnVmYWN0dXJpbmdcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJSRVwiLFwiZGVzY3JpcHRpb25cIjpcIlJlc3RhdXJhbnRzLCBjYWZlcyBhbmQgYmFyc1wifV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvY2F0ZWdvcmllcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcInRpdGxlXCI6XCJUaGUgTGFrZXMgRGlzdGlsbGVyeVwiLFwiZGVzY3JpcHRpb25cIjpcIk9wZW5lZCBpbiAyMDE0LCBUaGUgTGFrZXMgRGlzdGlsbGVyeSBpcyBFbmdsYW5kJ3MgbGFyZ2VzdCB3aGlza3kgZGlzdGlsbGVyeSwgcmVjZWl2aW5nIG92ZXIgMTAwLDAwMCB2aXNpdG9ycyBhbm51YWxseSBhbmQgaGFzIHNvbGQgb3ZlciAxNjAsMDAwIGJvdHRsZXMgb2YgdGhlaXIgcHJlbWl1bSBnaW4sIHZvZGthLCBhbmQgYmxlbmRlZCB3aGlza3k7IHZvdGVkIG9uZSBvZiB0aGUgdG9wIDUgYmVzdCBuZXcgZGlzdGlsbGVyaWVzIGluIHRoZSB3b3JsZCBieSBUaW1lIE91dCBVU0EuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzEwL3RoZV9sYWtlc19kaXN0aWxsZXJ5Xy1fbmF0aW9uYWxfcGFya19sb2dvXy1fYmxhY2tfc3F1YXJlXzlmYzgwMDJhMWU4NTY2YjFjZTQ3MGIzNmE1OWU0YWFjLmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTg4LzIwMTcxMC91bnRpdGxlZF85NmUzNDExZmIwMzRjYjBmZjUyOTRiOTU1Yzc3YjJiNC5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL3RoZS1sYWtlcy1kaXN0aWxsZXJ5L3BpdGNoZXMvYms5RWVsXCIsXCJ0YXJnZXRcIjoxMDAwMDAwLFwicmFpc2VkXCI6NjgxNzAwLFwiZXF1aXR5XCI6XCIyLjIxJVwiLFwiaW52ZXN0b3JzXCI6ODQxLFwidXBkYXRlZF9hdFwiOlwiMjAxNy0xMS0wOCAwMDoxNzo0N1wiLFwiZXhwaXJlc19hdFwiOlwiMjAxNy0xMi0wMiAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkFVXCIsXCJCVVwiXSxcInN0YWdlXCI6XCJTZWVkXCJ9LHtcInRpdGxlXCI6XCJNb3ZlbVwiLFwiZGVzY3JpcHRpb25cIjpcIk1vdmVtIGlzIGFuIG9ubGluZSBwcm9wZXJ0eSBwb3J0YWwsIGFsbG93aW5nIHRlbmFudHMgdG8gcmV2aWV3IHRoZWlyIHJlbnRhbCBleHBlcmllbmNlcywgd2hpbHN0IGJ1aWxkaW5nIHRoZWlyIG93biBkaWdpdGFsIHJlbnRhbCBwcm9maWxlLCBrbm93biBhcyBhIE1vdmVtIFBhc3Nwb3J0LiBBZ2VudHMgYW5kIGxhbmRsb3JkcyBjYW4gcGF5IHRvIGluc3RhbnRseSBkb3dubG9hZCBhIHRlbmFudCdzIGZ1bGwgcmVmZXJlbmNlLCBkZXNpZ25lZCB0byBiZSBjaGVhcGVyLCBxdWlja2VyLCBhbmQgbGVzcyBvcGVuIHRvIGZyYXVkLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC9jcm93ZGN1YmVsb2dvX2JiNDliODEwMjgyODc1NDYyN2I2YTkxMGM2ZmQwZWNhLmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTg4LzIwMTcxMC91bnRpdGxlZF85NmUzNDExZmIwMzRjYjBmZjUyOTRiOTU1Yzc3YjJiNC5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL21vdmVtLTEvcGl0Y2hlcy9iNlFwWFpcIixcInRhcmdldFwiOjMwMDAwMCxcInJhaXNlZFwiOjMyNzAwMCxcImVxdWl0eVwiOlwiMTEuOTklXCIsXCJpbnZlc3RvcnNcIjoyOTIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTEwLTA4IDAwOjE3OjQ3XCIsXCJleHBpcmVzX2F0XCI6XCIyMDE3LTEyLTIwIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiQ09cIl0sXCJzdGFnZVwiOlwiU2VlZFwifSx7XCJ0aXRsZVwiOlwiU2lsdmVyU3VyZmVyc1wiLFwiZGVzY3JpcHRpb25cIjpcIldpdGggb25lIG9mIHRoZSBVS+KAmXMgbGFyZ2VzdCBvbmxpbmUgY29tbXVuaXRpZXMgZm9yIHRoZSB5b3VuZyBhdCBoZWFydCBvdmVyIDUwJ3MsIFNpbHZlcnN1cmZlcnMgaGFzIG92ZXIgaGFsZiBhIG1pbGxpb24gZm9sbG93ZXJzLiBUaGUgY29tcGFueSBoYXMgYWNoaWV2ZWQgwqM4NjBrKyByZXZlbnVlIGZyb20gYWR2ZXJ0aXNpbmcsIHNvY2lhbCBtZWRpYSBhbmQgY29tbWlzc2lvbi1yZWxhdGVkIHBhcnRuZXJzaGlwcyB3aXRoIG1ham9yIGJyYW5kcyBzdWNoIGFzIEFsbGlhbnogYW5kIE5lc3RsZS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvY2Mtc3MtbG9nb18zZjQxMzE1MjVkOGQwMDE1MDg5NDk0M2ZkNTUxMjNhOS5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTU1My8yMDE3MDkvNWRiOTA2ZDcyOTY5MDVjNzc4ZDI1MTIwMjlmNDQyZjYuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9zaWx2ZXJzdXJmZXJzL3BpdGNoZXMvbDhWTjJiXCIsXCJ0YXJnZXRcIjozMDAwMDAsXCJyYWlzZWRcIjo1Mjc1MCxcImVxdWl0eVwiOlwiMy42MSVcIixcImludmVzdG9yc1wiOjQyLFwidXBkYXRlZF9hdFwiOlwiMjAxNy0xMS0yOSAwMDoxNzo0N1wiLFwiZXhwaXJlc19hdFwiOlwiMjAxNy0xMS0zMCAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkNOXCJdLFwic3RhZ2VcIjpcIkVhcmx5XCJ9LHtcInRpdGxlXCI6XCJDcm93ZGZ1bmRlclwiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBVS+KAmXMgIzEgcmV3YXJkcy1iYXNlZCBjcm93ZGZ1bmRpbmcgcGxhdGZvcm0sIENyb3dkZnVuZGVyLCBub3cgaGFzIGdyb3duIHRvIGFuIG9ubGluZSBjb21tdW5pdHkgb2Ygb3ZlciA2MDAsMDAwLCBhbmQgaGFzIHdvcmtlZCB3aXRoIG92ZXIgODAsMDAwIHByb2plY3RzIHRvIHJhaXNlIMKjNDAgbWlsbGlvbiBzaW5jZSAyMDE0LiBOb3cgRUJJVERBIHBvc2l0aXZlIHdpdGggcGxhbnMgdG8gZGlzcnVwdCB0aGUgwqM1LjZibiBncmFudCBnaXZpbmcgc2VjdG9yLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9jZl9zcXVhcmVfYjJiYjUzOGVhMzVhOTdjNTc0NzljMjA1ZWY0NWVlNjQucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NDEvMjAxNzA5L2NjX3BpdGNoX3BhZ2VfYmFubmVyXzlmMzdkNDA5YjliOTg3NDdiNmZmOTlhNmZiM2U4OGJkLmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvY3Jvd2RmdW5kZXItMS9waXRjaGVzL2IyZG0ybFwiLFwidGFyZ2V0XCI6NzUwMDAwLFwicmFpc2VkXCI6NzIzMDMwLFwiZXF1aXR5XCI6XCI0LjI3JVwiLFwiaW52ZXN0b3JzXCI6Njc0LFwidXBkYXRlZF9hdFwiOlwiMjAxNy0xMS0wMSAwMDowMDo0MFwiLFwiZXhwaXJlc19hdFwiOlwiMjAxNy0xMi0yMCAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkVEXCJdLFwic3RhZ2VcIjpcIkVhcmx5XCJ9LHtcInRpdGxlXCI6XCJSaWdodGFuZ2xlZFwiLFwiZGVzY3JpcHRpb25cIjpcIkJhY2tlZCBieSBOSFMgRW5nbGFuZCwgUmlnaHRhbmdsZWQgaXMgYSBDUUMgcmVnaXN0ZXJlZCBoZWFsdGhjYXJlIHByb3ZpZGVyIGZvciBnZW5ldGljIHRlc3RpbmcuIEhhdmluZyBkZXNpZ25lZCB0aGVpciBDYXJkaWFjIGdlbmV0aWMgdGVzdCBhbmQgZmlsZWQgYSBwYXRlbnQgYWxyZWFkeSwgdGhlIHRlYW0gbm93IHNlZWsgdG8gZXhwYW5kIHRoZWlyIHRlc3RpbmcgYW5kIHRlbGVtZWRpY2luZSBzZXJ2aWNlIGludG8gbmV3IHRlc3RzIGFuZCBtYXJrZXRzLiBcIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDgvcmFfbG9nby1fY3Jvd2RjdWJlX2NkNmVkMTA0Yjc1MzRlNGJjYWIyMmVhOTUwMmEyMzYzLnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjQxLzIwMTcwOS9jY19waXRjaF9wYWdlX2Jhbm5lcl85ZjM3ZDQwOWI5Yjk4NzQ3YjZmZjk5YTZmYjNlODhiZC5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL3JpZ2h0YW5nbGVkLWxpbWl0ZWQvcGl0Y2hlcy9xQnk1RWJcIixcInRhcmdldFwiOjEwMDAwMCxcInJhaXNlZFwiOjI2Mzk1MCxcImVxdWl0eVwiOlwiMTQuOTYlXCIsXCJpbnZlc3RvcnNcIjo0OTUsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTA5LTIzIDAwOjEzOjIyXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE4LTAyLTAyIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiRU5cIl0sXCJzdGFnZVwiOlwiR3Jvd3RoXCJ9LHtcInRpdGxlXCI6XCJTaGF3IEFjYWRlbXlcIixcImRlc2NyaXB0aW9uXCI6XCJGb3VuZGVkIGluIDIwMTQsIFNoYXcgQWNhZGVteSBpcyBhbiBvbmxpbmUgZWR1Y2F0aW9uIHByb3ZpZGVyIHdoaWNoIHRlYWNoZXMgYSB2YXJpZXR5IG9mIHN1YmplY3RzIGxpdmUgdGhyb3VnaCB0aGVpciBiZXNwb2tlIHNvZnR3YXJlIHBsYXRmb3JtLiBIYXZpbmcgdGF1Z2h0IG92ZXIgNCwwMDAsMDAwIHN0dWRlbnRzIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLCB0aGV5IGFyZSBjdXJyZW50bHkgZ3Jvd2luZyBieSAyNTAsMDAwIG5ldyBzdHVkZW50cyBhIG1vbnRoIGFuZCBub3cgcGxhbiB0byBzY2FsZSBnbG9iYWxseS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvbG9nb19pbnZlcnRlZF9ibHVlX3N0eWxlXzJfMWQwMzkwMGE0ODRmZDczMDg0ZTIwYTQ5Njg5MzA4YzYuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NzIvMjAxNzA5L2Rlc2t0b3Bfb3B0Ml83YmQ4NmQwMTZiZDY1MThiYzVhMDM5Y2RlMThmMTJiOC5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL3NoYXctZWR1Y2F0aW9uLWdyb3VwLXBsYy9waXRjaGVzL1pOYTVkbFwiLFwidGFyZ2V0XCI6MjE5NDAwMCxcInJhaXNlZFwiOjIzOTkxMzAsXCJlcXVpdHlcIjpcIjIuNzklXCIsXCJpbnZlc3RvcnNcIjoxNjg2LFwidXBkYXRlZF9hdFwiOlwiMjAxNy0wNy0yMiAwMDoxMDoyMlwiLFwiZXhwaXJlc19hdFwiOlwiMjAxNy0xMi0wMiAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkZJXCJdLFwic3RhZ2VcIjpcIkdyb3d0aFwifSx7XCJ0aXRsZVwiOlwiTG9vc2UgRW5kcyBBcHBcIixcImRlc2NyaXB0aW9uXCI6XCJMb29zZSBFbmRzIGlzIGEgbmV3IGFwcCBkZXNpZ25lZCB0byBoZWxwIHBlb3BsZSBnZXQgdG9nZXRoZXIgZWZmb3J0bGVzc2x5LiA2MCUgb2YgQnJpdG9ucyB3YW50IHRvIHNvY2lhbGlzZSBtb3JlIG9mdGVuLCBidXQgb3JnYW5pc2luZyBuaWdodHMgb3V0IGNhbiBiZSBjb21wbGljYXRlZDogbWFueSBwbGFubmVkIG1lZXR1cHMgbmV2ZXIgaGFwcGVuLiBMb29zZSBFbmRzIGlzIGEgb25lLXN0b3Agc29jaWFsIHNvbHV0aW9uLCB0YXJnZXRpbmcgYSBtYXJrZXQgd29ydGggwqM2MGJuIHBlciBhbm51bSBpbiB0aGUgVUsgYWxvbmUuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzEwL2hpLXJlcy1sb2dvLXYyLWxhcmdlXzM0NjAxZWViM2EzMTYyNWJiY2Y3MzMxN2IwYmY0NTk3LnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjg2LzIwMTcxMC8yYWQzNWFhNjZjMWFkYTgxYTQwNmM1YTc5NzRjOGRkZS5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL2xvb3NlLWVuZHMtYXBwL3BpdGNoZXMvbEtrb0psXCIsXCJ0YXJnZXRcIjoxMDAwMDAsXCJyYWlzZWRcIjozMzE2MCxcImVxdWl0eVwiOlwiMTAuMDAlXCIsXCJpbnZlc3RvcnNcIjoyMCxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMTAtMjMgMDA6MTM6MjJcIixcImV4cGlyZXNfYXRcIjpcIjIwMTgtMDMtMDIgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJGT1wiXSxcInN0YWdlXCI6XCJHcm93dGhcIn0se1widGl0bGVcIjpcIkhvdXNlcnNcIixcImRlc2NyaXB0aW9uXCI6XCJMYXVuY2hlZCBpbiAyMDE2IGFuZCBiYXNlZCBpbiBNYWRyaWQsIFNwYWluLCBIb3VzZXJzIGlzIGEgcmVhbCBlc3RhdGUgY3Jvd2RmdW5kaW5nIHBsYXRmb3JtIHRoYXQgbWFrZXMgaXQgZWFzeSBmb3IgaW52ZXN0b3JzIHRvIGludmVzdCBpbiBFdXJvcGVhbiByZWFsIGVzdGF0ZSBib3RoIGZvciByZW50YWwgaW5jb21lIGFuZCBjYXBpdGFsIGdhaW4uIFRoZXkgY3VycmVudGx5IG1hbmFnZSDigqwzMm0gaW4gaW52ZXN0bWVudCBhbmQgbm93IHBsYW4gdG8gZXhwYW5kIHRoZWlyIHByb2R1Y3Qgb2ZmZXJpbmcgJmFtcDsgY292ZXJhZ2UuIFwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS8wMF9wZXJmaWxfY3Jvd2RjdWJlNl9hYmM3NmQxN2JkZGM3YmI5Mjg4ZmMwODdiYjg0MTA2Yy5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTYzOC8yMDE3MDkvMDJfY292ZXJfY3Jvd2RjdWJlX21vbnRhamVfMl84Y2Y1NDJmNjJjODE5NDkyZjRlMjNlZmY0NmZkNGYwNy5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL2xvb3NlLWVuZHMtYXBwL3BpdGNoZXMvbEtrb0psXCIsXCJ0YXJnZXRcIjo4NTAwMDAsXCJyYWlzZWRcIjo4MjA0MzAsXCJlcXVpdHlcIjpcIjIuMjIlXCIsXCJpbnZlc3RvcnNcIjo5MzcsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTA5LTI2IDAwOjEzOjIyXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE4LTAxLTAxIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiSEVcIl0sXCJzdGFnZVwiOlwiU2VlZFwifSx7XCJ0aXRsZVwiOlwicGFzc2luZ2JveGVzXCIsXCJkZXNjcmlwdGlvblwiOlwicGFzc2luZ2JveGVzIGFpbXMgdG8gYmUgdGhlIHdvcmxk4oCZcyBtb3N0IGNvbXByZWhlbnNpdmUgd2Vic2l0ZSBmb3IgZGVhbGluZyB3aXRoIGRlYXRoLiBJdCBwcm92aWRlcyBzZXJ2aWNlcyB0byBoZWxwIHNlY3VyZSB5b3VyIGRpZ2l0YWwgbGVnYWN5IGFuZCBwYXNzIG9uIHRoZSB0aGluZ3MgdGhhdCByZWFsbHkgbWF0dGVyLiBwYXNzaW5nYm94ZXMgYWltcyB0byBoYXZlIDUwMCwwMDAgbWVtYmVycyBieSAyMDIyIGluIGFuIGluZHVzdHJ5IHRoYXQgaXMgd29ydGggwqMxLjcgYmlsbGlvbiBwZXIgYW5udW0uXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2xvZ29fZm9yX2Nyb3dkY3ViZV81MDUwMTRkZDk4Njk0OWJhMjlmYjI3NDkzZDcwMzUzMi5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTYxMi8yMDE3MDkvaGVhZGVyX2ltYWdlXzIwMTcwOTIwXzJjMWIwZTljN2M5NGRiNTRhZjlkMzAwNDQ0NWYwMTM3LmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvcGFzc2luZ2JveGVzL3BpdGNoZXMvYm9hR3BsXCIsXCJ0YXJnZXRcIjoxNTAwMDAsXCJyYWlzZWRcIjo3MTU5MCxcImVxdWl0eVwiOlwiNS4wMCVcIixcImludmVzdG9yc1wiOjExMSxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMTEtMDcgMDA6MTM6MjJcIixcImV4cGlyZXNfYXRcIjpcIjIwMTgtMTItMjUgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJJVFwiLFwiTEVcIixcIk1OXCJdLFwic3RhZ2VcIjpcIlNlZWRcIn1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2lkZWFzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgaWRlYVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGFyZ2V0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJhaXNlZDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGVxdWl0eToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbnZlc3RvcnM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdXBkYXRlZF9hdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBleHBpcmVzX2F0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHBhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2F0ZWdvcmllczogW3tcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1dLFxuICAgIHN0YWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gICAgXG59KVxuZXhwb3J0IGNvbnN0IElkZWEgPSBtb25nb29zZS5tb2RlbCgnSWRlYScsIGlkZWFTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9kZWwvaWRlYS50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGNhdGVnb3J5U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgY2F0ZWdvcnlDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgICBcbn0pXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBtb25nb29zZS5tb2RlbCgnQ2F0ZWdvcnknLCBjYXRlZ29yeVNjaGVtYSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb2RlbC9jYXRlZ29yeS50cyIsImltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xuaW1wb3J0IE1vbmdvIGZyb20gJy4vc3RvcmFnZS9tb25nbyc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7VmVyaWZ5VXNlcn0gZnJvbSAnLi92ZXJpZnktdXNlcic7XG5cbmxldCBzZXJ2ZXIgPSBTZXJ2ZXIuZ2V0SW5zdGFuY2UoKTtcbk1vbmdvLmNvbm5lY3QoKTtcbi8vTW9uZ28ucG9wdWxhdGVEQigpO1xuXG5zZXJ2ZXIudXNlKCcvYXBpL2lkZWFzJywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvaWRlYVJvdXRlcycpKTtcbnNlcnZlci51c2UoJy9hcGkvY2F0ZWdvcmllcycsIFZlcmlmeVVzZXIsIHJlcXVpcmUoJy4vcm91dGVzL2NhdGVnb3J5Um91dGVzJykpO1xuXG4vL2dlbmVyaWMgZXJyb3IgaGFuZGxlclxuc2VydmVyLnVzZSgoZXJyOiBFcnJvciwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICBlcnJvcjogNTAwXG4gICAgfSlcbn0pIFxuXG5zZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JULCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApO1xufSlcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2NvcnNNaWRkbGV3YXJlfSBmcm9tICcuL2NvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2ZXIge1xuICAgIHN0YXRpYyBpbnN0YW5jZTogZXhwcmVzcy5FeHByZXNzO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cbiAgICBwcml2YXRlIHN0YXRpYyBpbml0KCl7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZSA9IGV4cHJlc3MoKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShjb3JzTWlkZGxld2FyZSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UobW9yZ2FuKCdkZXYnKSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHNlcnZlclxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYoIVNlcnZlci5pbnN0YW5jZSl7XG4gICAgICAgICAgICBTZXJ2ZXIuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTZXJ2ZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIHB1YmxpYyB1c2UobWlkZGxld2FyZTogZXhwcmVzcy5SZXF1ZXN0SGFuZGxlciB8IGV4cHJlc3MuRXJyb3JSZXF1ZXN0SGFuZGxlcil7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UobWlkZGxld2FyZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5leHBvcnQgY29uc3QgY29yc01pZGRsZXdhcmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCByZXEuaGVhZGVyKCdvcmlnaW4nKSB8fCByZXEuaGVhZGVyKCd4LWZvcndhcmRlZC1ob3N0JykgfHwgJyonKTtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCwgT1BUSU9OUywgUFVULCBQQVRDSCwgREVMRVRFJyk7XG5cbiAgICBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcnMudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7cG9wdWxhdGVEQn0gZnJvbSAnLi9wb3B1bGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvIHtcblxuICAgIHN0YXRpYyBkYjogbW9uZ29vc2UuQ29ubmVjdGlvbjtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgLyoqXG4gICAgICogcG9wdWxhdGUgbW9uZ28gZGIgd2l0aCBzb21lIG1vY2sgZGF0YVxuICAgICAqL1xuICAgIHN0YXRpYyBwb3B1bGF0ZURCKCl7XG4gICAgICAgIHBvcHVsYXRlREIoTW9uZ28uZGIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIG1vbmdvb3NlLkNvbm5lY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgY29ubmVjdCgpIDptb25nb29zZS5Db25uZWN0aW9uIHtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChjb25maWcubW9uZ28udXJpLCB7IHVzZU1vbmdvQ2xpZW50OiB0cnVlIH0pO1xuICAgICAgICBNb25nby5kYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgICAgIE1vbmdvLmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcicpKTtcbiAgICAgICAgTW9uZ28uZGIub25jZSgnb3BlbicsIGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3RlZCBjb3JyZWN0bHkgdG8gbW9uZ28gZGInKSk7XG4gICAgICAgIHJldHVybiBNb25nby5kYjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJleHBvcnQgY29uc3QgQVBQX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudi50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYXRlZ29yaWVzLmpzb25cIjogMyxcblx0XCIuL2RldmVsb3BtZW50Lmpzb25cIjogMTUsXG5cdFwiLi9pZGVhcy5qc29uXCI6IDQsXG5cdFwiLi9wcm9kdWN0aW9uLmpzb25cIjogMTZcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxNDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjkwMDJ9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo4MDgwfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHNjcmlwdCBmb3IgaW5pdGlhbCBkYiBwb3B1bGF0aW9uXG4gKi9cbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7SWRlYX0gZnJvbSAnLi9tb2RlbC9pZGVhJztcbmltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gJy4vbW9kZWwvY2F0ZWdvcnknO1xuY29uc3QgaWRlYXMgPSByZXF1aXJlKCcuLi9jb25maWcvaWRlYXMuanNvbicpO1xuY29uc3QgY2F0ZWdvcmllcyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jYXRlZ29yaWVzLmpzb24nKTtcblxuY29uc3QgY2xlYXJDb2xsZWN0aW9uID0gKGNvbGxlY3Rpb246IG1vbmdvb3NlLk1vZGVsPGFueT4sIGNsYjogYW55KSA9PiB7XG4gICAgY29sbGVjdGlvbi5yZW1vdmUoe30sIGNsYik7XG59XG5cbmV4cG9ydCBjb25zdCBwb3B1bGF0ZURCID0gKGRiOiBtb25nb29zZS5Db25uZWN0aW9uKSA9PiB7XG4gICAgY2xlYXJDb2xsZWN0aW9uKENhdGVnb3J5LCAoKSA9PiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICdDYXRlZ29yeSBjb2xsZWN0aW9uIGNsZWFyZWQnKSk7XG4gICAgQ2F0ZWdvcnkuY3JlYXRlKGNhdGVnb3JpZXMsIChlcnIsIGNhdGVnb3JpZXMpID0+IHtcbiAgICAgICAgY2xlYXJDb2xsZWN0aW9uKElkZWEsICgpID0+IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ0lkZWEgY29sbGVjdGlvbiBjbGVhcmVkJykpO1xuICAgICAgICBJZGVhLmNyZWF0ZShpZGVhcywgKGVyciwgaWRlYXMpID0+IHtcbiAgICAgICAgICAgIGlmKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RiIHBvcHVsYXRlZCBjb3JyZWN0bHknKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIFxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9wb3B1bGF0ZS50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbi8qKlxuICogTWlkZGxld2FyZSB0byBhdXRoZW50aWNhdGUgYSB1c2VyXG4gKiBAcGFyYW0gcmVxXG4gKiBAcGFyYW0gcmVzIFxuICogQHBhcmFtIG5leHQgXG4gKi9cblxuZXhwb3J0IGNvbnN0IFZlcmlmeVVzZXIgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcblxuICAgIC8vaGVyZSB0aGVyZSBzaG91bGQgYmUgYW4gYXV0aGVudGljYXRpb24gbWVjaGFuaXNtIHRvIGF1dGhlbnRpY2F0ZSBlYWNoIHJlcXVlc3QgYmVmb3JlIHRyaWdnZXIgdGhlIG5leHRcbiAgICAvL21pZGRsZXdhcmUsIGZvciB0aGlzIHNhbXBsZSBwcm9qZWN0IGkganVzdCBjYWxsIHRoZSBuZXh0IG1pZGRsZXdhcmUgaW4gdGhlIGNoYWluIHdpdGhvdXQgZG9pbmcgYW55XG4gICAgLy9hdXRoZW50aWNhdGlvblxuXG4gICAgcmV0dXJuIG5leHQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVyaWZ5LXVzZXIudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtJZGVhfSBmcm9tICcuLi9zdG9yYWdlL21vZGVsL2lkZWEnO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIElkZWEuZmluZCh7fSwgKGVycjogbW9uZ29vc2UuRXJyb3IsIGlkZWFzOiBhbnkpID0+IHtcbiAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oaWRlYXMpO1xuICAgIH0pXG59KVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvaWRlYVJvdXRlcy50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tICcuLi9zdG9yYWdlL21vZGVsL2NhdGVnb3J5JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBDYXRlZ29yeS5maW5kKHt9LCAoZXJyOiBtb25nb29zZS5FcnJvciwgY2F0ZWdvcmllczogYW55KSA9PiB7XG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNhdGVnb3JpZXMpO1xuICAgIH0pXG59KVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvY2F0ZWdvcnlSb3V0ZXMudHMiXSwic291cmNlUm9vdCI6IiJ9