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

module.exports = [{"title":"The Lakes Distillery","description":"Opened in 2014, The Lakes Distillery is England's largest whisky distillery, receiving over 100,000 visitors annually and has sold over 160,000 bottles of their premium gin, vodka, and blended whisky; voted one of the top 5 best new distilleries in the world by Time Out USA.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","page":"https://www.crowdcube.com/companies/the-lakes-distillery/pitches/bk9Eel","target":1000000,"raised":681700,"equity":"2.21%","investors":841,"updated_at":"2017-11-08 00:17:47","expires_at":"2017-12-02 23:59:59","categories":["AU","BU"],"stage":"Seed"},{"title":"Movem","description":"Movem is an online property portal, allowing tenants to review their rental experiences, whilst building their own digital rental profile, known as a Movem Passport. Agents and landlords can pay to instantly download a tenant's full reference, designed to be cheaper, quicker, and less open to fraud.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/crowdcubelogo_bb49b8102828754627b6a910c6fd0eca.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","page":"https://www.crowdcube.com/companies/movem-1/pitches/b6QpXZ","target":300000,"raised":327000,"equity":"11.99%","investors":292,"updated_at":"2017-10-08 00:17:47","expires_at":"2017-12-20 23:59:59","categories":["CO"],"stage":"Seed"},{"title":"SilverSurfers","description":"With one of the UK’s largest online communities for the young at heart over 50's, Silversurfers has over half a million followers. The company has achieved £860k+ revenue from advertising, social media and commission-related partnerships with major brands such as Allianz and Nestle.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cc-ss-logo_3f4131525d8d00150894943fd55123a9.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21553/201709/5db906d7296905c778d2512029f442f6.jpg","page":"https://www.crowdcube.com/companies/silversurfers/pitches/l8VN2b","target":300000,"raised":52750,"equity":"3.61%","investors":42,"updated_at":"2017-11-29 00:17:47","expires_at":"2017-11-30 23:59:59","categories":["CN"],"stage":"Early"},{"title":"Crowdfunder","description":"The UK’s #1 rewards-based crowdfunding platform, Crowdfunder, now has grown to an online community of over 600,000, and has worked with over 80,000 projects to raise £40 million since 2014. Now EBITDA positive with plans to disrupt the £5.6bn grant giving sector.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cf_square_b2bb538ea35a97c57479c205ef45ee64.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","page":"https://www.crowdcube.com/companies/crowdfunder-1/pitches/b2dm2l","target":750000,"raised":723030,"equity":"4.27%","investors":674,"updated_at":"2017-11-01 00:00:40","expires_at":"2017-12-20 23:59:59","categories":["ED"],"stage":"Early"},{"title":"Rightangled","description":"Backed by NHS England, Rightangled is a CQC registered healthcare provider for genetic testing. Having designed their Cardiac genetic test and filed a patent already, the team now seek to expand their testing and telemedicine service into new tests and markets. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201708/ra_logo-_crowdcube_cd6ed104b7534e4bcab22ea9502a2363.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","page":"https://www.crowdcube.com/companies/rightangled-limited/pitches/qBy5Eb","target":100000,"raised":263950,"equity":"14.96%","investors":495,"updated_at":"2017-09-23 00:13:22","expires_at":"2018-02-02 23:59:59","categories":["EN"],"stage":"Growth"},{"title":"Shaw Academy","description":"Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg","page":"https://www.crowdcube.com/companies/shaw-education-group-plc/pitches/ZNa5dl","target":2194000,"raised":2399130,"equity":"2.79%","investors":1686,"updated_at":"2017-07-22 00:10:22","expires_at":"2017-12-02 23:59:59","categories":["FI"],"stage":"Growth"},{"title":"Loose Ends App","description":"Loose Ends is a new app designed to help people get together effortlessly. 60% of Britons want to socialise more often, but organising nights out can be complicated: many planned meetups never happen. Loose Ends is a one-stop social solution, targeting a market worth £60bn per annum in the UK alone.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/hi-res-logo-v2-large_34601eeb3a31625bbcf73317b0bf4597.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21686/201710/2ad35aa66c1ada81a406c5a7974c8dde.jpg","page":"https://www.crowdcube.com/companies/loose-ends-app/pitches/lKkoJl","target":100000,"raised":33160,"equity":"10.00%","investors":20,"updated_at":"2017-10-23 00:13:22","expires_at":"2018-03-02 23:59:59","categories":["FO"],"stage":"Growth"},{"title":"Housers","description":"Launched in 2016 and based in Madrid, Spain, Housers is a real estate crowdfunding platform that makes it easy for investors to invest in European real estate both for rental income and capital gain. They currently manage €32m in investment and now plan to expand their product offering &amp; coverage. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/00_perfil_crowdcube6_abc76d17bddc7bb9288fc087bb84106c.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21638/201709/02_cover_crowdcube_montaje_2_8cf542f62c819492f4e23eff46fd4f07.jpg","page":"https://www.crowdcube.com/companies/loose-ends-app/pitches/lKkoJl","target":850000,"raised":820430,"equity":"2.22%","investors":937,"updated_at":"2017-09-26 00:13:22","expires_at":"2018-01-01 23:59:59","categories":["HE"],"stage":"Seed"},{"title":"passingboxes","description":"passingboxes aims to be the world’s most comprehensive website for dealing with death. It provides services to help secure your digital legacy and pass on the things that really matter. passingboxes aims to have 500,000 members by 2022 in an industry that is worth £1.7 billion per annum.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_for_crowdcube_505014dd986949ba29fb27493d703532.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21612/201709/header_image_20170920_2c1b0e9c7c94db54af9d3004445f0137.jpg","page":"https://www.crowdcube.com/companies/passingboxes/pitches/boaGpl","target":150000,"raised":71590,"equity":"5.00%","investors":111,"updated_at":"2017-11-07 00:13:22","expires_at":"2018-12-25 23:59:59","categories":["IT","LE","MN"],"stage":"Seed"},{"title":"FullClear","description":"FullClear is a proven beer line cleaning solution, replacing toxic and corrosive chemicals. FullClear aim to establish a new standard of excellence in dispense. Contracted with Hilton, Admiral Taverns &amp; Tokyo Industries, the company is raising funds to expand its operation.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201711/8544e39bd97b603d2b0346831a0b4b8c.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21689/201711/2cca626672a98cd4478894de67c08651.jpg","page":"https://www.crowdcube.com/companies/fullclear-uk-ltd/pitches/Z57Qoq","target":250000,"raised":76400,"equity":"9.09%","investors":62,"updated_at":"2017-11-15 00:13:22","expires_at":"2018-12-29 23:59:59","categories":["IT","MN"],"stage":"Early"},{"title":"SmartPlant","description":"An award-winning app designed to make plant care easy. SmartPlant has over 320,000 downloads &amp; 6 commercial partnerships in the UK &amp; USA. The app allows people to add plants to their virtual garden by scanning the plant barcode to receive bespoke care advice &amp; access to 100 regional experts.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/screen_shot_2017-09-01_at_11.47.07_cropped-2_247686b651ec82c73ff42f01ff67d6f8.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21587/201710/2706fd9f3b57a46bc7d19cf15eaad918.jpg","page":"https://www.crowdcube.com/companies/smartplant/pitches/bd0Emb","target":200000,"raised":175820,"equity":"6.25%","investors":169,"updated_at":"2017-07-17 00:17:22","expires_at":"2018-01-22 23:59:59","categories":["ED"],"stage":"Growth"},{"title":"Borrow a Boat","description":"Striving to be the Airbnb for boat chartering, Borrow A Boat is an online platform designed to allow anyone to hire a boat, and for any boat owner to easily rent out their idle vessel. With 13,000 boats in more than 50 countries now listed, the team are now raising to expand marketing activities.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/d0389abdcb04fc171e1e9ca14132b96a.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21591/201710/8d4224dc84fdab8f021f3803adaf9a3d.jpg","page":"https://www.crowdcube.com/companies/borrow-a-boat-ltd/pitches/qayG8q","target":200000,"raised":233270,"equity":"16.28%","investors":355,"updated_at":"2017-08-01 00:17:22","expires_at":"2018-01-09 23:59:59","categories":["FO"],"stage":"Early"},{"title":"Doctaly","description":"Doctaly is a health-tech marketplace, bringing on-demand, affordable, face-to-face GP appointments to patients and Uber-style flexibility to NHS doctors. Having completed a successful pilot in London, they are poised to expand their service and are in talks with NHS England, Bupa and AXA. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/doctaly_logo_640x640px_cf35c14a50556ab82b47b9964b93cb39.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21702/201710/doctaly_1500x375px_fe30d18363b567a2fd7c582b5f68a1cb.jpg","page":"https://www.crowdcube.com/investment/bdm-medical-limited-21702","target":500000,"raised":227160,"equity":"7.69%","investors":43,"updated_at":"2017-08-10 00:17:22","expires_at":"2018-01-10 23:59:59","categories":["HE"],"stage":"Early"},{"title":"BurningNight group","description":"Launched in 2010 and now in six of the UK’s biggest cities, BurningNight Group’s concept bars, Bierkeller Entertainment Complexes, offer distinct, multi-venue experiences. With sales now topping £19.5m &amp; profits of £595k for 2017, they are now focused on the roll-out of their new brand, Sportskeller.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201711/4eed9167ed03e1bbcb9fda0bd3be8c06.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21357/201711/db0b9a86a92bfb3989bf633cda08e299.jpg","page":"https://www.crowdcube.com/companies/burningnight-limited/pitches/bjjPXb","target":750000,"raised":168230,"equity":"3.61%","investors":139,"updated_at":"2017-10-01 00:17:22","expires_at":"2018-02-10 23:59:59","categories":["AU"],"stage":"Growth"},{"title":"GreenJinn","description":"With the aim to create the next generation of mobile couponing, GreenJinn’s free cashback app allows grocery shoppers to save money on customised product options. Launched in October 2016, the app has over 40,000 users so far saving £100+ monthly and is targeting growth among 11.5m UK Millennials.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201707/logo_crowdcube_2c24317252fffac20a102023fb2b12f3.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21561/201709/84718dd551e4663904ce0d1d3feacfc6.jpg","page":"https://www.crowdcube.com/investment/greenjinn-21561","target":600000,"raised":382000,"equity":"9.84%","investors":189,"updated_at":"2017-11-12 00:17:22","expires_at":"2018-12-24 23:59:59","categories":["BU"],"stage":"Seed"}]

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzUzY2EyZjE0YjY1MDNlNDAyNDciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NhdGVnb3JpZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2lkZWFzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvaWRlYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9jYXRlZ29yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvcG9wdWxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaWRlYVJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3J5Um91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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Q0FBQztJQUNyQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFHRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzUzY2EyZjE0YjY1MDNlNDAyNDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0FQUF9FTlZ9IGZyb20gJy4vZW52JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSByZXF1aXJlKGAuL2NvbmZpZy8ke0FQUF9FTlZ9Lmpzb25gKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wiY2F0ZWdvcnlDb2RlXCI6XCJBVVwiLFwiZGVzY3JpcHRpb25cIjpcIkF1dG9tb3RpdmVcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJCVVwiLFwiZGVzY3JpcHRpb25cIjpcIkJ1c2luZXNzIHNlcnZpY2VzXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiQ09cIixcImRlc2NyaXB0aW9uXCI6XCJDb25zdW1lciBnb29kc1wifSx7XCJjYXRlZ29yeUNvZGVcIjpcIkNOXCIsXCJkZXNjcmlwdGlvblwiOlwiQ29uc3VtZXIgaW50ZXJuZXRcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJFRFwiLFwiZGVzY3JpcHRpb25cIjpcIkVkdWNhdGlvblwifSx7XCJjYXRlZ29yeUNvZGVcIjpcIkVOXCIsXCJkZXNjcmlwdGlvblwiOlwiRW50YXJ0YWlubWVudCBhbmQgbWVkaWFcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJGSVwiLFwiZGVzY3JpcHRpb25cIjpcIkZpdG5lc3MgJiBzcG9ydHNcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJGT1wiLFwiZGVzY3JpcHRpb25cIjpcIkZvb2QgJiBiZXZlcmFnZSAoRk1DRylcIn0se1wiY2F0ZWdvcnlDb2RlXCI6XCJIRVwiLFwiZGVzY3JpcHRpb25cIjpcIkhlYWx0aHRlY2ggJiBoZWFsdGhjYXJlXCJ9LHtcImNhdGVnb3J5Q29kZVwiOlwiSVRcIixcImRlc2NyaXB0aW9uXCI6XCJJVCAmIFRlbGVjb21tdW5pY2F0aW9uc1wifSx7XCJjYXRlZ29yeUNvZGVcIjpcIkxFXCIsXCJkZXNjcmlwdGlvblwiOlwiTGVpc3VyZSBhbmQgdG91cmlzbVwifSx7XCJjYXRlZ29yeUNvZGVcIjpcIk1OXCIsXCJkZXNjcmlwdGlvblwiOlwiTWFudWZhY3R1cmluZ1wifSx7XCJjYXRlZ29yeUNvZGVcIjpcIlJFXCIsXCJkZXNjcmlwdGlvblwiOlwiUmVzdGF1cmFudHMsIGNhZmVzIGFuZCBiYXJzXCJ9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9jYXRlZ29yaWVzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1widGl0bGVcIjpcIlRoZSBMYWtlcyBEaXN0aWxsZXJ5XCIsXCJkZXNjcmlwdGlvblwiOlwiT3BlbmVkIGluIDIwMTQsIFRoZSBMYWtlcyBEaXN0aWxsZXJ5IGlzIEVuZ2xhbmQncyBsYXJnZXN0IHdoaXNreSBkaXN0aWxsZXJ5LCByZWNlaXZpbmcgb3ZlciAxMDAsMDAwIHZpc2l0b3JzIGFubnVhbGx5IGFuZCBoYXMgc29sZCBvdmVyIDE2MCwwMDAgYm90dGxlcyBvZiB0aGVpciBwcmVtaXVtIGdpbiwgdm9ka2EsIGFuZCBibGVuZGVkIHdoaXNreTsgdm90ZWQgb25lIG9mIHRoZSB0b3AgNSBiZXN0IG5ldyBkaXN0aWxsZXJpZXMgaW4gdGhlIHdvcmxkIGJ5IFRpbWUgT3V0IFVTQS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MTAvdGhlX2xha2VzX2Rpc3RpbGxlcnlfLV9uYXRpb25hbF9wYXJrX2xvZ29fLV9ibGFja19zcXVhcmVfOWZjODAwMmExZTg1NjZiMWNlNDcwYjM2YTU5ZTRhYWMuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1ODgvMjAxNzEwL3VudGl0bGVkXzk2ZTM0MTFmYjAzNGNiMGZmNTI5NGI5NTVjNzdiMmI0LmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvdGhlLWxha2VzLWRpc3RpbGxlcnkvcGl0Y2hlcy9iazlFZWxcIixcInRhcmdldFwiOjEwMDAwMDAsXCJyYWlzZWRcIjo2ODE3MDAsXCJlcXVpdHlcIjpcIjIuMjElXCIsXCJpbnZlc3RvcnNcIjo4NDEsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTExLTA4IDAwOjE3OjQ3XCIsXCJleHBpcmVzX2F0XCI6XCIyMDE3LTEyLTAyIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiQVVcIixcIkJVXCJdLFwic3RhZ2VcIjpcIlNlZWRcIn0se1widGl0bGVcIjpcIk1vdmVtXCIsXCJkZXNjcmlwdGlvblwiOlwiTW92ZW0gaXMgYW4gb25saW5lIHByb3BlcnR5IHBvcnRhbCwgYWxsb3dpbmcgdGVuYW50cyB0byByZXZpZXcgdGhlaXIgcmVudGFsIGV4cGVyaWVuY2VzLCB3aGlsc3QgYnVpbGRpbmcgdGhlaXIgb3duIGRpZ2l0YWwgcmVudGFsIHByb2ZpbGUsIGtub3duIGFzIGEgTW92ZW0gUGFzc3BvcnQuIEFnZW50cyBhbmQgbGFuZGxvcmRzIGNhbiBwYXkgdG8gaW5zdGFudGx5IGRvd25sb2FkIGEgdGVuYW50J3MgZnVsbCByZWZlcmVuY2UsIGRlc2lnbmVkIHRvIGJlIGNoZWFwZXIsIHF1aWNrZXIsIGFuZCBsZXNzIG9wZW4gdG8gZnJhdWQuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzEwL2Nyb3dkY3ViZWxvZ29fYmI0OWI4MTAyODI4NzU0NjI3YjZhOTEwYzZmZDBlY2EuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1ODgvMjAxNzEwL3VudGl0bGVkXzk2ZTM0MTFmYjAzNGNiMGZmNTI5NGI5NTVjNzdiMmI0LmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvbW92ZW0tMS9waXRjaGVzL2I2UXBYWlwiLFwidGFyZ2V0XCI6MzAwMDAwLFwicmFpc2VkXCI6MzI3MDAwLFwiZXF1aXR5XCI6XCIxMS45OSVcIixcImludmVzdG9yc1wiOjI5MixcInVwZGF0ZWRfYXRcIjpcIjIwMTctMTAtMDggMDA6MTc6NDdcIixcImV4cGlyZXNfYXRcIjpcIjIwMTctMTItMjAgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJDT1wiXSxcInN0YWdlXCI6XCJTZWVkXCJ9LHtcInRpdGxlXCI6XCJTaWx2ZXJTdXJmZXJzXCIsXCJkZXNjcmlwdGlvblwiOlwiV2l0aCBvbmUgb2YgdGhlIFVL4oCZcyBsYXJnZXN0IG9ubGluZSBjb21tdW5pdGllcyBmb3IgdGhlIHlvdW5nIGF0IGhlYXJ0IG92ZXIgNTAncywgU2lsdmVyc3VyZmVycyBoYXMgb3ZlciBoYWxmIGEgbWlsbGlvbiBmb2xsb3dlcnMuIFRoZSBjb21wYW55IGhhcyBhY2hpZXZlZCDCozg2MGsrIHJldmVudWUgZnJvbSBhZHZlcnRpc2luZywgc29jaWFsIG1lZGlhIGFuZCBjb21taXNzaW9uLXJlbGF0ZWQgcGFydG5lcnNoaXBzIHdpdGggbWFqb3IgYnJhbmRzIHN1Y2ggYXMgQWxsaWFueiBhbmQgTmVzdGxlLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9jYy1zcy1sb2dvXzNmNDEzMTUyNWQ4ZDAwMTUwODk0OTQzZmQ1NTEyM2E5LmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTUzLzIwMTcwOS81ZGI5MDZkNzI5NjkwNWM3NzhkMjUxMjAyOWY0NDJmNi5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL3NpbHZlcnN1cmZlcnMvcGl0Y2hlcy9sOFZOMmJcIixcInRhcmdldFwiOjMwMDAwMCxcInJhaXNlZFwiOjUyNzUwLFwiZXF1aXR5XCI6XCIzLjYxJVwiLFwiaW52ZXN0b3JzXCI6NDIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTExLTI5IDAwOjE3OjQ3XCIsXCJleHBpcmVzX2F0XCI6XCIyMDE3LTExLTMwIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiQ05cIl0sXCJzdGFnZVwiOlwiRWFybHlcIn0se1widGl0bGVcIjpcIkNyb3dkZnVuZGVyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIFVL4oCZcyAjMSByZXdhcmRzLWJhc2VkIGNyb3dkZnVuZGluZyBwbGF0Zm9ybSwgQ3Jvd2RmdW5kZXIsIG5vdyBoYXMgZ3Jvd24gdG8gYW4gb25saW5lIGNvbW11bml0eSBvZiBvdmVyIDYwMCwwMDAsIGFuZCBoYXMgd29ya2VkIHdpdGggb3ZlciA4MCwwMDAgcHJvamVjdHMgdG8gcmFpc2UgwqM0MCBtaWxsaW9uIHNpbmNlIDIwMTQuIE5vdyBFQklUREEgcG9zaXRpdmUgd2l0aCBwbGFucyB0byBkaXNydXB0IHRoZSDCozUuNmJuIGdyYW50IGdpdmluZyBzZWN0b3IuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2NmX3NxdWFyZV9iMmJiNTM4ZWEzNWE5N2M1NzQ3OWMyMDVlZjQ1ZWU2NC5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY0MS8yMDE3MDkvY2NfcGl0Y2hfcGFnZV9iYW5uZXJfOWYzN2Q0MDliOWI5ODc0N2I2ZmY5OWE2ZmIzZTg4YmQuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9jcm93ZGZ1bmRlci0xL3BpdGNoZXMvYjJkbTJsXCIsXCJ0YXJnZXRcIjo3NTAwMDAsXCJyYWlzZWRcIjo3MjMwMzAsXCJlcXVpdHlcIjpcIjQuMjclXCIsXCJpbnZlc3RvcnNcIjo2NzQsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTExLTAxIDAwOjAwOjQwXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE3LTEyLTIwIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiRURcIl0sXCJzdGFnZVwiOlwiRWFybHlcIn0se1widGl0bGVcIjpcIlJpZ2h0YW5nbGVkXCIsXCJkZXNjcmlwdGlvblwiOlwiQmFja2VkIGJ5IE5IUyBFbmdsYW5kLCBSaWdodGFuZ2xlZCBpcyBhIENRQyByZWdpc3RlcmVkIGhlYWx0aGNhcmUgcHJvdmlkZXIgZm9yIGdlbmV0aWMgdGVzdGluZy4gSGF2aW5nIGRlc2lnbmVkIHRoZWlyIENhcmRpYWMgZ2VuZXRpYyB0ZXN0IGFuZCBmaWxlZCBhIHBhdGVudCBhbHJlYWR5LCB0aGUgdGVhbSBub3cgc2VlayB0byBleHBhbmQgdGhlaXIgdGVzdGluZyBhbmQgdGVsZW1lZGljaW5lIHNlcnZpY2UgaW50byBuZXcgdGVzdHMgYW5kIG1hcmtldHMuIFwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOC9yYV9sb2dvLV9jcm93ZGN1YmVfY2Q2ZWQxMDRiNzUzNGU0YmNhYjIyZWE5NTAyYTIzNjMucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NDEvMjAxNzA5L2NjX3BpdGNoX3BhZ2VfYmFubmVyXzlmMzdkNDA5YjliOTg3NDdiNmZmOTlhNmZiM2U4OGJkLmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvcmlnaHRhbmdsZWQtbGltaXRlZC9waXRjaGVzL3FCeTVFYlwiLFwidGFyZ2V0XCI6MTAwMDAwLFwicmFpc2VkXCI6MjYzOTUwLFwiZXF1aXR5XCI6XCIxNC45NiVcIixcImludmVzdG9yc1wiOjQ5NSxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMDktMjMgMDA6MTM6MjJcIixcImV4cGlyZXNfYXRcIjpcIjIwMTgtMDItMDIgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJFTlwiXSxcInN0YWdlXCI6XCJHcm93dGhcIn0se1widGl0bGVcIjpcIlNoYXcgQWNhZGVteVwiLFwiZGVzY3JpcHRpb25cIjpcIkZvdW5kZWQgaW4gMjAxNCwgU2hhdyBBY2FkZW15IGlzIGFuIG9ubGluZSBlZHVjYXRpb24gcHJvdmlkZXIgd2hpY2ggdGVhY2hlcyBhIHZhcmlldHkgb2Ygc3ViamVjdHMgbGl2ZSB0aHJvdWdoIHRoZWlyIGJlc3Bva2Ugc29mdHdhcmUgcGxhdGZvcm0uIEhhdmluZyB0YXVnaHQgb3ZlciA0LDAwMCwwMDAgc3R1ZGVudHMgZnJvbSBhbGwgb3ZlciB0aGUgd29ybGQsIHRoZXkgYXJlIGN1cnJlbnRseSBncm93aW5nIGJ5IDI1MCwwMDAgbmV3IHN0dWRlbnRzIGEgbW9udGggYW5kIG5vdyBwbGFuIHRvIHNjYWxlIGdsb2JhbGx5LlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9sb2dvX2ludmVydGVkX2JsdWVfc3R5bGVfMl8xZDAzOTAwYTQ4NGZkNzMwODRlMjBhNDk2ODkzMDhjNi5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY3Mi8yMDE3MDkvZGVza3RvcF9vcHQyXzdiZDg2ZDAxNmJkNjUxOGJjNWEwMzljZGUxOGYxMmI4LmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvc2hhdy1lZHVjYXRpb24tZ3JvdXAtcGxjL3BpdGNoZXMvWk5hNWRsXCIsXCJ0YXJnZXRcIjoyMTk0MDAwLFwicmFpc2VkXCI6MjM5OTEzMCxcImVxdWl0eVwiOlwiMi43OSVcIixcImludmVzdG9yc1wiOjE2ODYsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTA3LTIyIDAwOjEwOjIyXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE3LTEyLTAyIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiRklcIl0sXCJzdGFnZVwiOlwiR3Jvd3RoXCJ9LHtcInRpdGxlXCI6XCJMb29zZSBFbmRzIEFwcFwiLFwiZGVzY3JpcHRpb25cIjpcIkxvb3NlIEVuZHMgaXMgYSBuZXcgYXBwIGRlc2lnbmVkIHRvIGhlbHAgcGVvcGxlIGdldCB0b2dldGhlciBlZmZvcnRsZXNzbHkuIDYwJSBvZiBCcml0b25zIHdhbnQgdG8gc29jaWFsaXNlIG1vcmUgb2Z0ZW4sIGJ1dCBvcmdhbmlzaW5nIG5pZ2h0cyBvdXQgY2FuIGJlIGNvbXBsaWNhdGVkOiBtYW55IHBsYW5uZWQgbWVldHVwcyBuZXZlciBoYXBwZW4uIExvb3NlIEVuZHMgaXMgYSBvbmUtc3RvcCBzb2NpYWwgc29sdXRpb24sIHRhcmdldGluZyBhIG1hcmtldCB3b3J0aCDCozYwYm4gcGVyIGFubnVtIGluIHRoZSBVSyBhbG9uZS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MTAvaGktcmVzLWxvZ28tdjItbGFyZ2VfMzQ2MDFlZWIzYTMxNjI1YmJjZjczMzE3YjBiZjQ1OTcucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2ODYvMjAxNzEwLzJhZDM1YWE2NmMxYWRhODFhNDA2YzVhNzk3NGM4ZGRlLmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvbG9vc2UtZW5kcy1hcHAvcGl0Y2hlcy9sS2tvSmxcIixcInRhcmdldFwiOjEwMDAwMCxcInJhaXNlZFwiOjMzMTYwLFwiZXF1aXR5XCI6XCIxMC4wMCVcIixcImludmVzdG9yc1wiOjIwLFwidXBkYXRlZF9hdFwiOlwiMjAxNy0xMC0yMyAwMDoxMzoyMlwiLFwiZXhwaXJlc19hdFwiOlwiMjAxOC0wMy0wMiAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIkZPXCJdLFwic3RhZ2VcIjpcIkdyb3d0aFwifSx7XCJ0aXRsZVwiOlwiSG91c2Vyc1wiLFwiZGVzY3JpcHRpb25cIjpcIkxhdW5jaGVkIGluIDIwMTYgYW5kIGJhc2VkIGluIE1hZHJpZCwgU3BhaW4sIEhvdXNlcnMgaXMgYSByZWFsIGVzdGF0ZSBjcm93ZGZ1bmRpbmcgcGxhdGZvcm0gdGhhdCBtYWtlcyBpdCBlYXN5IGZvciBpbnZlc3RvcnMgdG8gaW52ZXN0IGluIEV1cm9wZWFuIHJlYWwgZXN0YXRlIGJvdGggZm9yIHJlbnRhbCBpbmNvbWUgYW5kIGNhcGl0YWwgZ2Fpbi4gVGhleSBjdXJyZW50bHkgbWFuYWdlIOKCrDMybSBpbiBpbnZlc3RtZW50IGFuZCBub3cgcGxhbiB0byBleHBhbmQgdGhlaXIgcHJvZHVjdCBvZmZlcmluZyAmYW1wOyBjb3ZlcmFnZS4gXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5LzAwX3BlcmZpbF9jcm93ZGN1YmU2X2FiYzc2ZDE3YmRkYzdiYjkyODhmYzA4N2JiODQxMDZjLnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjM4LzIwMTcwOS8wMl9jb3Zlcl9jcm93ZGN1YmVfbW9udGFqZV8yXzhjZjU0MmY2MmM4MTk0OTJmNGUyM2VmZjQ2ZmQ0ZjA3LmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvbG9vc2UtZW5kcy1hcHAvcGl0Y2hlcy9sS2tvSmxcIixcInRhcmdldFwiOjg1MDAwMCxcInJhaXNlZFwiOjgyMDQzMCxcImVxdWl0eVwiOlwiMi4yMiVcIixcImludmVzdG9yc1wiOjkzNyxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMDktMjYgMDA6MTM6MjJcIixcImV4cGlyZXNfYXRcIjpcIjIwMTgtMDEtMDEgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJIRVwiXSxcInN0YWdlXCI6XCJTZWVkXCJ9LHtcInRpdGxlXCI6XCJwYXNzaW5nYm94ZXNcIixcImRlc2NyaXB0aW9uXCI6XCJwYXNzaW5nYm94ZXMgYWltcyB0byBiZSB0aGUgd29ybGTigJlzIG1vc3QgY29tcHJlaGVuc2l2ZSB3ZWJzaXRlIGZvciBkZWFsaW5nIHdpdGggZGVhdGguIEl0IHByb3ZpZGVzIHNlcnZpY2VzIHRvIGhlbHAgc2VjdXJlIHlvdXIgZGlnaXRhbCBsZWdhY3kgYW5kIHBhc3Mgb24gdGhlIHRoaW5ncyB0aGF0IHJlYWxseSBtYXR0ZXIuIHBhc3Npbmdib3hlcyBhaW1zIHRvIGhhdmUgNTAwLDAwMCBtZW1iZXJzIGJ5IDIwMjIgaW4gYW4gaW5kdXN0cnkgdGhhdCBpcyB3b3J0aCDCozEuNyBiaWxsaW9uIHBlciBhbm51bS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvbG9nb19mb3JfY3Jvd2RjdWJlXzUwNTAxNGRkOTg2OTQ5YmEyOWZiMjc0OTNkNzAzNTMyLmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjEyLzIwMTcwOS9oZWFkZXJfaW1hZ2VfMjAxNzA5MjBfMmMxYjBlOWM3Yzk0ZGI1NGFmOWQzMDA0NDQ1ZjAxMzcuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2NvbXBhbmllcy9wYXNzaW5nYm94ZXMvcGl0Y2hlcy9ib2FHcGxcIixcInRhcmdldFwiOjE1MDAwMCxcInJhaXNlZFwiOjcxNTkwLFwiZXF1aXR5XCI6XCI1LjAwJVwiLFwiaW52ZXN0b3JzXCI6MTExLFwidXBkYXRlZF9hdFwiOlwiMjAxNy0xMS0wNyAwMDoxMzoyMlwiLFwiZXhwaXJlc19hdFwiOlwiMjAxOC0xMi0yNSAyMzo1OTo1OVwiLFwiY2F0ZWdvcmllc1wiOltcIklUXCIsXCJMRVwiLFwiTU5cIl0sXCJzdGFnZVwiOlwiU2VlZFwifSx7XCJ0aXRsZVwiOlwiRnVsbENsZWFyXCIsXCJkZXNjcmlwdGlvblwiOlwiRnVsbENsZWFyIGlzIGEgcHJvdmVuIGJlZXIgbGluZSBjbGVhbmluZyBzb2x1dGlvbiwgcmVwbGFjaW5nIHRveGljIGFuZCBjb3Jyb3NpdmUgY2hlbWljYWxzLiBGdWxsQ2xlYXIgYWltIHRvIGVzdGFibGlzaCBhIG5ldyBzdGFuZGFyZCBvZiBleGNlbGxlbmNlIGluIGRpc3BlbnNlLiBDb250cmFjdGVkIHdpdGggSGlsdG9uLCBBZG1pcmFsIFRhdmVybnMgJmFtcDsgVG9reW8gSW5kdXN0cmllcywgdGhlIGNvbXBhbnkgaXMgcmFpc2luZyBmdW5kcyB0byBleHBhbmQgaXRzIG9wZXJhdGlvbi5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MTEvODU0NGUzOWJkOTdiNjAzZDJiMDM0NjgzMWEwYjRiOGMuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2ODkvMjAxNzExLzJjY2E2MjY2NzJhOThjZDQ0Nzg4OTRkZTY3YzA4NjUxLmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvZnVsbGNsZWFyLXVrLWx0ZC9waXRjaGVzL1o1N1FvcVwiLFwidGFyZ2V0XCI6MjUwMDAwLFwicmFpc2VkXCI6NzY0MDAsXCJlcXVpdHlcIjpcIjkuMDklXCIsXCJpbnZlc3RvcnNcIjo2MixcInVwZGF0ZWRfYXRcIjpcIjIwMTctMTEtMTUgMDA6MTM6MjJcIixcImV4cGlyZXNfYXRcIjpcIjIwMTgtMTItMjkgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJJVFwiLFwiTU5cIl0sXCJzdGFnZVwiOlwiRWFybHlcIn0se1widGl0bGVcIjpcIlNtYXJ0UGxhbnRcIixcImRlc2NyaXB0aW9uXCI6XCJBbiBhd2FyZC13aW5uaW5nIGFwcCBkZXNpZ25lZCB0byBtYWtlIHBsYW50IGNhcmUgZWFzeS4gU21hcnRQbGFudCBoYXMgb3ZlciAzMjAsMDAwIGRvd25sb2FkcyAmYW1wOyA2IGNvbW1lcmNpYWwgcGFydG5lcnNoaXBzIGluIHRoZSBVSyAmYW1wOyBVU0EuIFRoZSBhcHAgYWxsb3dzIHBlb3BsZSB0byBhZGQgcGxhbnRzIHRvIHRoZWlyIHZpcnR1YWwgZ2FyZGVuIGJ5IHNjYW5uaW5nIHRoZSBwbGFudCBiYXJjb2RlIHRvIHJlY2VpdmUgYmVzcG9rZSBjYXJlIGFkdmljZSAmYW1wOyBhY2Nlc3MgdG8gMTAwIHJlZ2lvbmFsIGV4cGVydHMuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L3NjcmVlbl9zaG90XzIwMTctMDktMDFfYXRfMTEuNDcuMDdfY3JvcHBlZC0yXzI0NzY4NmI2NTFlYzgyYzczZmY0MmYwMWZmNjdkNmY4LnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTg3LzIwMTcxMC8yNzA2ZmQ5ZjNiNTdhNDZiYzdkMTljZjE1ZWFhZDkxOC5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL3NtYXJ0cGxhbnQvcGl0Y2hlcy9iZDBFbWJcIixcInRhcmdldFwiOjIwMDAwMCxcInJhaXNlZFwiOjE3NTgyMCxcImVxdWl0eVwiOlwiNi4yNSVcIixcImludmVzdG9yc1wiOjE2OSxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMDctMTcgMDA6MTc6MjJcIixcImV4cGlyZXNfYXRcIjpcIjIwMTgtMDEtMjIgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJFRFwiXSxcInN0YWdlXCI6XCJHcm93dGhcIn0se1widGl0bGVcIjpcIkJvcnJvdyBhIEJvYXRcIixcImRlc2NyaXB0aW9uXCI6XCJTdHJpdmluZyB0byBiZSB0aGUgQWlyYm5iIGZvciBib2F0IGNoYXJ0ZXJpbmcsIEJvcnJvdyBBIEJvYXQgaXMgYW4gb25saW5lIHBsYXRmb3JtIGRlc2lnbmVkIHRvIGFsbG93IGFueW9uZSB0byBoaXJlIGEgYm9hdCwgYW5kIGZvciBhbnkgYm9hdCBvd25lciB0byBlYXNpbHkgcmVudCBvdXQgdGhlaXIgaWRsZSB2ZXNzZWwuIFdpdGggMTMsMDAwIGJvYXRzIGluIG1vcmUgdGhhbiA1MCBjb3VudHJpZXMgbm93IGxpc3RlZCwgdGhlIHRlYW0gYXJlIG5vdyByYWlzaW5nIHRvIGV4cGFuZCBtYXJrZXRpbmcgYWN0aXZpdGllcy5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MTAvZDAzODlhYmRjYjA0ZmMxNzFlMWU5Y2ExNDEzMmI5NmEuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1OTEvMjAxNzEwLzhkNDIyNGRjODRmZGFiOGYwMjFmMzgwM2FkYWY5YTNkLmpwZ1wiLFwicGFnZVwiOlwiaHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9jb21wYW5pZXMvYm9ycm93LWEtYm9hdC1sdGQvcGl0Y2hlcy9xYXlHOHFcIixcInRhcmdldFwiOjIwMDAwMCxcInJhaXNlZFwiOjIzMzI3MCxcImVxdWl0eVwiOlwiMTYuMjglXCIsXCJpbnZlc3RvcnNcIjozNTUsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTA4LTAxIDAwOjE3OjIyXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE4LTAxLTA5IDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiRk9cIl0sXCJzdGFnZVwiOlwiRWFybHlcIn0se1widGl0bGVcIjpcIkRvY3RhbHlcIixcImRlc2NyaXB0aW9uXCI6XCJEb2N0YWx5IGlzIGEgaGVhbHRoLXRlY2ggbWFya2V0cGxhY2UsIGJyaW5naW5nIG9uLWRlbWFuZCwgYWZmb3JkYWJsZSwgZmFjZS10by1mYWNlIEdQIGFwcG9pbnRtZW50cyB0byBwYXRpZW50cyBhbmQgVWJlci1zdHlsZSBmbGV4aWJpbGl0eSB0byBOSFMgZG9jdG9ycy4gSGF2aW5nIGNvbXBsZXRlZCBhIHN1Y2Nlc3NmdWwgcGlsb3QgaW4gTG9uZG9uLCB0aGV5IGFyZSBwb2lzZWQgdG8gZXhwYW5kIHRoZWlyIHNlcnZpY2UgYW5kIGFyZSBpbiB0YWxrcyB3aXRoIE5IUyBFbmdsYW5kLCBCdXBhIGFuZCBBWEEuIFwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC9kb2N0YWx5X2xvZ29fNjQweDY0MHB4X2NmMzVjMTRhNTA1NTZhYjgyYjQ3Yjk5NjRiOTNjYjM5LmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNzAyLzIwMTcxMC9kb2N0YWx5XzE1MDB4Mzc1cHhfZmUzMGQxODM2M2I1NjdhMmZkN2M1ODJiNWY2OGExY2IuanBnXCIsXCJwYWdlXCI6XCJodHRwczovL3d3dy5jcm93ZGN1YmUuY29tL2ludmVzdG1lbnQvYmRtLW1lZGljYWwtbGltaXRlZC0yMTcwMlwiLFwidGFyZ2V0XCI6NTAwMDAwLFwicmFpc2VkXCI6MjI3MTYwLFwiZXF1aXR5XCI6XCI3LjY5JVwiLFwiaW52ZXN0b3JzXCI6NDMsXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTA4LTEwIDAwOjE3OjIyXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE4LTAxLTEwIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiSEVcIl0sXCJzdGFnZVwiOlwiRWFybHlcIn0se1widGl0bGVcIjpcIkJ1cm5pbmdOaWdodCBncm91cFwiLFwiZGVzY3JpcHRpb25cIjpcIkxhdW5jaGVkIGluIDIwMTAgYW5kIG5vdyBpbiBzaXggb2YgdGhlIFVL4oCZcyBiaWdnZXN0IGNpdGllcywgQnVybmluZ05pZ2h0IEdyb3Vw4oCZcyBjb25jZXB0IGJhcnMsIEJpZXJrZWxsZXIgRW50ZXJ0YWlubWVudCBDb21wbGV4ZXMsIG9mZmVyIGRpc3RpbmN0LCBtdWx0aS12ZW51ZSBleHBlcmllbmNlcy4gV2l0aCBzYWxlcyBub3cgdG9wcGluZyDCozE5LjVtICZhbXA7IHByb2ZpdHMgb2YgwqM1OTVrIGZvciAyMDE3LCB0aGV5IGFyZSBub3cgZm9jdXNlZCBvbiB0aGUgcm9sbC1vdXQgb2YgdGhlaXIgbmV3IGJyYW5kLCBTcG9ydHNrZWxsZXIuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzExLzRlZWQ5MTY3ZWQwM2UxYmJjYjlmZGEwYmQzYmU4YzA2LmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxMzU3LzIwMTcxMS9kYjBiOWE4NmE5MmJmYjM5ODliZjYzM2NkYTA4ZTI5OS5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vY29tcGFuaWVzL2J1cm5pbmduaWdodC1saW1pdGVkL3BpdGNoZXMvYmpqUFhiXCIsXCJ0YXJnZXRcIjo3NTAwMDAsXCJyYWlzZWRcIjoxNjgyMzAsXCJlcXVpdHlcIjpcIjMuNjElXCIsXCJpbnZlc3RvcnNcIjoxMzksXCJ1cGRhdGVkX2F0XCI6XCIyMDE3LTEwLTAxIDAwOjE3OjIyXCIsXCJleHBpcmVzX2F0XCI6XCIyMDE4LTAyLTEwIDIzOjU5OjU5XCIsXCJjYXRlZ29yaWVzXCI6W1wiQVVcIl0sXCJzdGFnZVwiOlwiR3Jvd3RoXCJ9LHtcInRpdGxlXCI6XCJHcmVlbkppbm5cIixcImRlc2NyaXB0aW9uXCI6XCJXaXRoIHRoZSBhaW0gdG8gY3JlYXRlIHRoZSBuZXh0IGdlbmVyYXRpb24gb2YgbW9iaWxlIGNvdXBvbmluZywgR3JlZW5KaW5u4oCZcyBmcmVlIGNhc2hiYWNrIGFwcCBhbGxvd3MgZ3JvY2VyeSBzaG9wcGVycyB0byBzYXZlIG1vbmV5IG9uIGN1c3RvbWlzZWQgcHJvZHVjdCBvcHRpb25zLiBMYXVuY2hlZCBpbiBPY3RvYmVyIDIwMTYsIHRoZSBhcHAgaGFzIG92ZXIgNDAsMDAwIHVzZXJzIHNvIGZhciBzYXZpbmcgwqMxMDArIG1vbnRobHkgYW5kIGlzIHRhcmdldGluZyBncm93dGggYW1vbmcgMTEuNW0gVUsgTWlsbGVubmlhbHMuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA3L2xvZ29fY3Jvd2RjdWJlXzJjMjQzMTcyNTJmZmZhYzIwYTEwMjAyM2ZiMmIxMmYzLnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTYxLzIwMTcwOS84NDcxOGRkNTUxZTQ2NjM5MDRjZTBkMWQzZmVhY2ZjNi5qcGdcIixcInBhZ2VcIjpcImh0dHBzOi8vd3d3LmNyb3dkY3ViZS5jb20vaW52ZXN0bWVudC9ncmVlbmppbm4tMjE1NjFcIixcInRhcmdldFwiOjYwMDAwMCxcInJhaXNlZFwiOjM4MjAwMCxcImVxdWl0eVwiOlwiOS44NCVcIixcImludmVzdG9yc1wiOjE4OSxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMTEtMTIgMDA6MTc6MjJcIixcImV4cGlyZXNfYXRcIjpcIjIwMTgtMTItMjQgMjM6NTk6NTlcIixcImNhdGVnb3JpZXNcIjpbXCJCVVwiXSxcInN0YWdlXCI6XCJTZWVkXCJ9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9pZGVhcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGlkZWFTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBsb2dvOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRhcmdldDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByYWlzZWQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBlcXVpdHk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW52ZXN0b3JzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHVwZGF0ZWRfYXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZXhwaXJlc19hdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNhdGVnb3JpZXM6IFt7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XSxcbiAgICBzdGFnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICAgIFxufSlcbmV4cG9ydCBjb25zdCBJZGVhID0gbW9uZ29vc2UubW9kZWwoJ0lkZWEnLCBpZGVhU2NoZW1hKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vZGVsL2lkZWEudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCBjYXRlZ29yeVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGNhdGVnb3J5Q29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gICAgXG59KVxuZXhwb3J0IGNvbnN0IENhdGVnb3J5ID0gbW9uZ29vc2UubW9kZWwoJ0NhdGVnb3J5JywgY2F0ZWdvcnlTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9kZWwvY2F0ZWdvcnkudHMiLCJpbXBvcnQgU2VydmVyIGZyb20gJy4vc2VydmVyJztcbmltcG9ydCBNb25nbyBmcm9tICcuL3N0b3JhZ2UvbW9uZ28nO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1ZlcmlmeVVzZXJ9IGZyb20gJy4vdmVyaWZ5LXVzZXInO1xuXG5sZXQgc2VydmVyID0gU2VydmVyLmdldEluc3RhbmNlKCk7XG5Nb25nby5jb25uZWN0KCk7XG4vL01vbmdvLnBvcHVsYXRlREIoKTtcblxuc2VydmVyLnVzZSgnL2FwaS9pZGVhcycsIFZlcmlmeVVzZXIsIHJlcXVpcmUoJy4vcm91dGVzL2lkZWFSb3V0ZXMnKSk7XG5zZXJ2ZXIudXNlKCcvYXBpL2NhdGVnb3JpZXMnLCBWZXJpZnlVc2VyLCByZXF1aXJlKCcuL3JvdXRlcy9jYXRlZ29yeVJvdXRlcycpKTtcblxuLy9nZW5lcmljIGVycm9yIGhhbmRsZXJcbnNlcnZlci51c2UoKGVycjogRXJyb3IsIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgcmVzLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICAgICAgZXJyb3I6IDUwMFxuICAgIH0pXG59KSBcblxuc2VydmVyLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5zZXJ2ZXIuUE9SVCwgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyggYHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAgJHtwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5zZXJ2ZXIuUE9SVH1gKTtcbn0pXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtjb3JzTWlkZGxld2FyZX0gZnJvbSAnLi9jb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyIHtcbiAgICBzdGF0aWMgaW5zdGFuY2U6IGV4cHJlc3MuRXhwcmVzcztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5pdCgpe1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UgPSBleHByZXNzKCk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoY29yc01pZGRsZXdhcmUpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1vcmdhbignZGV2JykpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBzZXJ2ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmKCFTZXJ2ZXIuaW5zdGFuY2Upe1xuICAgICAgICAgICAgU2VydmVyLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2VydmVyLmluc3RhbmNlO1xuICAgIH1cbiAgICBwdWJsaWMgdXNlKG1pZGRsZXdhcmU6IGV4cHJlc3MuUmVxdWVzdEhhbmRsZXIgfCBleHByZXNzLkVycm9yUmVxdWVzdEhhbmRsZXIpe1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1pZGRsZXdhcmUpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuZXhwb3J0IGNvbnN0IGNvcnNNaWRkbGV3YXJlID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgcmVxLmhlYWRlcignb3JpZ2luJykgfHwgcmVxLmhlYWRlcigneC1mb3J3YXJkZWQtaG9zdCcpIHx8ICcqJyk7XG4gICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QsIE9QVElPTlMsIFBVVCwgUEFUQ0gsIERFTEVURScpO1xuXG4gICAgbmV4dCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JzLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge3BvcHVsYXRlREJ9IGZyb20gJy4vcG9wdWxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nbyB7XG5cbiAgICBzdGF0aWMgZGI6IG1vbmdvb3NlLkNvbm5lY3Rpb247XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlIG1vbmdvIGRiIHdpdGggc29tZSBtb2NrIGRhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgcG9wdWxhdGVEQigpe1xuICAgICAgICBwb3B1bGF0ZURCKE1vbmdvLmRiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBtb25nb29zZS5Db25uZWN0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGNvbm5lY3QoKSA6bW9uZ29vc2UuQ29ubmVjdGlvbiB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLm1vbmdvLnVyaSwgeyB1c2VNb25nb0NsaWVudDogdHJ1ZSB9KTtcbiAgICAgICAgTW9uZ28uZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuICAgICAgICBNb25nby5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3InKSk7XG4gICAgICAgIE1vbmdvLmRiLm9uY2UoJ29wZW4nLCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICdjb25uZWN0ZWQgY29ycmVjdGx5IHRvIG1vbmdvIGRiJykpO1xuICAgICAgICByZXR1cm4gTW9uZ28uZGI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwiZXhwb3J0IGNvbnN0IEFQUF9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnYudHMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2F0ZWdvcmllcy5qc29uXCI6IDMsXG5cdFwiLi9kZXZlbG9wbWVudC5qc29uXCI6IDE1LFxuXHRcIi4vaWRlYXMuanNvblwiOiA0LFxuXHRcIi4vcHJvZHVjdGlvbi5qc29uXCI6IDE2XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo5MDAyfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvblxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6ODA4MH0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBzY3JpcHQgZm9yIGluaXRpYWwgZGIgcG9wdWxhdGlvblxuICovXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQge0lkZWF9IGZyb20gJy4vbW9kZWwvaWRlYSc7XG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tICcuL21vZGVsL2NhdGVnb3J5JztcbmNvbnN0IGlkZWFzID0gcmVxdWlyZSgnLi4vY29uZmlnL2lkZWFzLmpzb24nKTtcbmNvbnN0IGNhdGVnb3JpZXMgPSByZXF1aXJlKCcuLi9jb25maWcvY2F0ZWdvcmllcy5qc29uJyk7XG5cbmNvbnN0IGNsZWFyQ29sbGVjdGlvbiA9IChjb2xsZWN0aW9uOiBtb25nb29zZS5Nb2RlbDxhbnk+LCBjbGI6IGFueSkgPT4ge1xuICAgIGNvbGxlY3Rpb24ucmVtb3ZlKHt9LCBjbGIpO1xufVxuXG5leHBvcnQgY29uc3QgcG9wdWxhdGVEQiA9IChkYjogbW9uZ29vc2UuQ29ubmVjdGlvbikgPT4ge1xuICAgIGNsZWFyQ29sbGVjdGlvbihDYXRlZ29yeSwgKCkgPT4gY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnQ2F0ZWdvcnkgY29sbGVjdGlvbiBjbGVhcmVkJykpO1xuICAgIENhdGVnb3J5LmNyZWF0ZShjYXRlZ29yaWVzLCAoZXJyLCBjYXRlZ29yaWVzKSA9PiB7XG4gICAgICAgIGNsZWFyQ29sbGVjdGlvbihJZGVhLCAoKSA9PiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICdJZGVhIGNvbGxlY3Rpb24gY2xlYXJlZCcpKTtcbiAgICAgICAgSWRlYS5jcmVhdGUoaWRlYXMsIChlcnIsIGlkZWFzKSA9PiB7XG4gICAgICAgICAgICBpZihlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYiBwb3B1bGF0ZWQgY29ycmVjdGx5Jyk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvcG9wdWxhdGUudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgdG8gYXV0aGVudGljYXRlIGEgdXNlclxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlcyBcbiAqIEBwYXJhbSBuZXh0IFxuICovXG5cbmV4cG9ydCBjb25zdCBWZXJpZnlVc2VyID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG5cbiAgICAvL2hlcmUgdGhlcmUgc2hvdWxkIGJlIGFuIGF1dGhlbnRpY2F0aW9uIG1lY2hhbmlzbSB0byBhdXRoZW50aWNhdGUgZWFjaCByZXF1ZXN0IGJlZm9yZSB0cmlnZ2VyIHRoZSBuZXh0XG4gICAgLy9taWRkbGV3YXJlLCBmb3IgdGhpcyBzYW1wbGUgcHJvamVjdCBpIGp1c3QgY2FsbCB0aGUgbmV4dCBtaWRkbGV3YXJlIGluIHRoZSBjaGFpbiB3aXRob3V0IGRvaW5nIGFueVxuICAgIC8vYXV0aGVudGljYXRpb25cblxuICAgIHJldHVybiBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlcmlmeS11c2VyLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7SWRlYX0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9pZGVhJztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBJZGVhLmZpbmQoe30sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBpZGVhczogYW55KSA9PiB7XG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGlkZWFzKTtcbiAgICB9KVxufSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2lkZWFSb3V0ZXMudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9jYXRlZ29yeSc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgQ2F0ZWdvcnkuZmluZCh7fSwgKGVycjogbW9uZ29vc2UuRXJyb3IsIGNhdGVnb3JpZXM6IGFueSkgPT4ge1xuICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihjYXRlZ29yaWVzKTtcbiAgICB9KVxufSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2NhdGVnb3J5Um91dGVzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==