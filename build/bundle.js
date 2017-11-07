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

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(3);
var mongo_1 = __webpack_require__(10);
var server = server_1.default.getInstance();
mongo_1.default.connect();
mongo_1.default.populate();
server.use(__webpack_require__(12));
//generic error handler
server.use(function (err, req, res, next) {
    res.status(500).json(err);
});
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
	"./ideas.json": 16,
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

module.exports = {"server":{"PORT":9002},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(11);
var config_1 = __webpack_require__(1);
var populate_1 = __webpack_require__(13);
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    /**
     * @returns an instance of mongoose.Connection
     */
    Mongo.populate = function () {
        populate_1.populateDB(Mongo.db);
    };
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
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idea_1 = __webpack_require__(14);
var ideas = __webpack_require__(16);
var clearCollection = function (collection, clb) {
    collection.remove({}, clb);
};
exports.populateDB = function (db) {
    clearCollection(idea_1.Idea, function () { return console.log.bind(console, 'Idea cleared'); });
    idea_1.Idea.create(ideas, function (err, ideas) {
        if (err) {
            return console.log(err);
        }
        console.log('db populated correctly');
    });
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(11);
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
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = [{"title":"The Lakes Distillery","description":"Opened in 2014, The Lakes Distillery is England's largest whisky distillery, receiving over 100,000 visitors annually and has sold over 160,000 bottles of their premium gin, vodka, and blended whisky; voted one of the top 5 best new distilleries in the world by Time Out USA.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","target":1000000,"raised":681700,"equity":"2.21%","investors":841},{"title":"Movem","description":"Movem is an online property portal, allowing tenants to review their rental experiences, whilst building their own digital rental profile, known as a Movem Passport. Agents and landlords can pay to instantly download a tenant's full reference, designed to be cheaper, quicker, and less open to fraud.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","target":300000,"raised":327000,"equity":"11.99%","investors":292},{"title":"SilverSurfers","description":"With one of the UK’s largest online communities for the young at heart over 50's, Silversurfers has over half a million followers. The company has achieved £860k+ revenue from advertising, social media and commission-related partnerships with major brands such as Allianz and Nestle.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cc-ss-logo_3f4131525d8d00150894943fd55123a9.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21553/201709/5db906d7296905c778d2512029f442f6.jpg","target":300000,"raised":52750,"equity":"3.61%","investors":42},{"title":"Crowdfunder","description":"The UK’s #1 rewards-based crowdfunding platform, Crowdfunder, now has grown to an online community of over 600,000, and has worked with over 80,000 projects to raise £40 million since 2014. Now EBITDA positive with plans to disrupt the £5.6bn grant giving sector.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cf_square_b2bb538ea35a97c57479c205ef45ee64.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","target":750000,"raised":723030,"equity":"4.27%","investors":674},{"title":"Rightangled","description":"Backed by NHS England, Rightangled is a CQC registered healthcare provider for genetic testing. Having designed their Cardiac genetic test and filed a patent already, the team now seek to expand their testing and telemedicine service into new tests and markets. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201708/ra_logo-_crowdcube_cd6ed104b7534e4bcab22ea9502a2363.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","target":100000,"raised":263950,"equity":"14.96%","investors":495},{"title":"Shaw Academy","description":"Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg","target":2194000,"raised":2399130,"equity":"2.79%","investors":1686},{"title":"Loose Ends App","description":"Loose Ends is a new app designed to help people get together effortlessly. 60% of Britons want to socialise more often, but organising nights out can be complicated: many planned meetups never happen. Loose Ends is a one-stop social solution, targeting a market worth £60bn per annum in the UK alone.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/hi-res-logo-v2-large_34601eeb3a31625bbcf73317b0bf4597.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21686/201710/2ad35aa66c1ada81a406c5a7974c8dde.jpg","target":100000,"raised":33160,"equity":"10.00%","investors":20},{"title":"Housers","description":"Launched in 2016 and based in Madrid, Spain, Housers is a real estate crowdfunding platform that makes it easy for investors to invest in European real estate both for rental income and capital gain. They currently manage €32m in investment and now plan to expand their product offering &amp; coverage. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/00_perfil_crowdcube6_abc76d17bddc7bb9288fc087bb84106c.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21638/201709/02_cover_crowdcube_montaje_2_8cf542f62c819492f4e23eff46fd4f07.jpg","target":850000,"raised":820430,"equity":"2.22%","investors":937},{"title":"passingboxes","description":"passingboxes aims to be the world’s most comprehensive website for dealing with death. It provides services to help secure your digital legacy and pass on the things that really matter. passingboxes aims to have 500,000 members by 2022 in an industry that is worth £1.7 billion per annum.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_for_crowdcube_505014dd986949ba29fb27493d703532.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21612/201709/header_image_20170920_2c1b0e9c7c94db54af9d3004445f0137.jpg","target":150000,"raised":71590,"equity":"5.00%","investors":111}]

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmE4Njc0M2EzNjdjNGFhNzQ3ODMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZW52LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9sb2NhdGlvblJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL3BvcHVsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vZGVsL2lkZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pZGVhcy5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxvQzs7Ozs7Ozs7O0FDQUEsbUNBQThCO0FBQ2pCLGNBQU0sR0FBRywyQkFBUSxHQUFZLGFBQU8sVUFBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNEMUQsc0NBQThCO0FBQzlCLHNDQUFvQztBQUtwQyxJQUFJLE1BQU0sR0FBRyxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xDLGVBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNoQixlQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBTyxDQUFDLEVBQXdCLENBQUMsQ0FBQyxDQUFDO0FBSTlDLHVCQUF1QjtBQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVSxFQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUMzRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7QUNsQmhCLHFDQUFtQztBQUNuQyxvQ0FBaUM7QUFDakMsd0NBQTBDO0FBQzFDLHNDQUFnQztBQUNoQztJQUdJO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDVyxrQkFBVyxHQUF6QjtRQUNJLEVBQUUsRUFBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBQztZQUNqQixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFDTSxvQkFBRyxHQUFWLFVBQVcsVUFBZ0U7UUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNNLHVCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDcEcsY0FBTyxDQUFDLEdBQUcsQ0FBRSxnQ0FBNkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUFuRixDQUFtRixDQUFDLENBQUM7SUFDekYsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQzlCRCxtQzs7Ozs7O0FDQUEsd0M7Ozs7Ozs7OztBQ0FhLGVBQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUM7Ozs7Ozs7QUNBN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7O0FDbkJBLGtCQUFrQixVQUFVLFlBQVksVUFBVSxzRzs7Ozs7O0FDQWxELGtCQUFrQixVQUFVLFlBQVksVUFBVSxzRzs7Ozs7Ozs7O0FDQWxELHVDQUFxQztBQUNyQyxzQ0FBaUM7QUFDakMseUNBQXNDO0FBRXRDO0lBR0k7SUFBc0IsQ0FBQztJQUV2Qjs7T0FFRztJQUNJLGNBQVEsR0FBZjtRQUNJLHFCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTSxhQUFPLEdBQWQ7UUFDSSxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0QsS0FBSyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUN0QkQscUM7Ozs7Ozs7OztBQ0FBLHFDQUFtQztBQUduQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCO0lBQ3hELGlDQUFpQztJQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtBQUVoRSxDQUFDLENBQUM7QUFHRixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7QUFFbEUsQ0FBQyxDQUFDO0FBRUYsR0FBRztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7O0FDaEJ4QixxQ0FBa0M7QUFDbEMsSUFBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxFQUFzQixDQUFDLENBQUM7QUFFOUMsSUFBTSxlQUFlLEdBQUcsVUFBQyxVQUErQixFQUFFLEdBQVE7SUFDOUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVZLGtCQUFVLEdBQUcsVUFBQyxFQUF1QjtJQUM5QyxlQUFlLENBQUMsV0FBSSxFQUFFLGNBQU0sY0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLENBQUM7SUFDdkUsV0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSztRQUMxQixFQUFFLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNMLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0FBRU4sQ0FBQzs7Ozs7Ozs7OztBQ3BCRCx1Q0FBcUM7QUFDckMsSUFBTSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25DLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7Q0FFSixDQUFDO0FBQ1csWUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7OztBQ3BDdkQsbUJBQW1CLHNQQUFzUCwrakJBQStqQixFQUFFLCt6QkFBK3pCLEVBQUUsNHZCQUE0dkIsRUFBRSw0dkJBQTR2QixFQUFFLHF3QkFBcXdCLEVBQUUsMnlCQUEyeUIsRUFBRSx5eEJBQXl4QixFQUFFLHFVQUFxVSw4ZUFBOGUsRUFBRSwreEJBQSt4QixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYTg2NzQzYTM2N2M0YWE3NDc4MyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtBUFBfRU5WfSBmcm9tICcuL2Vudic7XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSByZXF1aXJlKGAuL2NvbmZpZy8ke0FQUF9FTlZ9Lmpzb25gKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwiaW1wb3J0IFNlcnZlciBmcm9tICcuL3NlcnZlcic7XHJcbmltcG9ydCBNb25nbyBmcm9tICcuL3N0b3JhZ2UvbW9uZ28nO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuXHJcbmxldCBzZXJ2ZXIgPSBTZXJ2ZXIuZ2V0SW5zdGFuY2UoKTtcclxuTW9uZ28uY29ubmVjdCgpO1xyXG5Nb25nby5wb3B1bGF0ZSgpO1xyXG5cclxuc2VydmVyLnVzZShyZXF1aXJlKCcuL3JvdXRlcy9sb2NhdGlvblJvdXRlJykpO1xyXG5cclxuXHJcblxyXG4vL2dlbmVyaWMgZXJyb3IgaGFuZGxlclxyXG5zZXJ2ZXIudXNlKChlcnI6IEVycm9yLCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxufSkgXHJcbnNlcnZlci5saXN0ZW4oKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyIHtcclxuICAgIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcclxuICAgIHN0YXRpYyBpbnN0YW5jZTogU2VydmVyO1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHNlcnZlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCl7XHJcbiAgICAgICAgaWYoIVNlcnZlci5pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIFNlcnZlci5pbnN0YW5jZSA9IG5ldyBTZXJ2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNlcnZlci5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1c2UobWlkZGxld2FyZTogZXhwcmVzcy5SZXF1ZXN0SGFuZGxlciB8IGV4cHJlc3MuRXJyb3JSZXF1ZXN0SGFuZGxlcil7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKG1pZGRsZXdhcmUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxpc3Rlbigpe1xyXG4gICAgICAgIHRoaXMuYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5zZXJ2ZXIuUE9SVCwgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IEFQUF9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnYudHMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV2ZWxvcG1lbnQuanNvblwiOiA4LFxuXHRcIi4vaWRlYXMuanNvblwiOiAxNixcblx0XCIuL3Byb2R1Y3Rpb24uanNvblwiOiA5XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6OTAwMn0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6ODA4MH0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge3BvcHVsYXRlREJ9IGZyb20gJy4vcG9wdWxhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZ28ge1xyXG5cclxuICAgIHN0YXRpYyBkYjogbW9uZ29vc2UuQ29ubmVjdGlvbjtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBtb25nb29zZS5Db25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwb3B1bGF0ZSgpe1xyXG4gICAgICAgIHBvcHVsYXRlREIoTW9uZ28uZGIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNvbm5lY3QoKSA6bW9uZ29vc2UuQ29ubmVjdGlvbiB7XHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChjb25maWcubW9uZ28udXJpLCB7IHVzZU1vbmdvQ2xpZW50OiB0cnVlIH0pO1xyXG4gICAgICAgIE1vbmdvLmRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuICAgICAgICBNb25nby5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3InKSk7XHJcbiAgICAgICAgTW9uZ28uZGIub25jZSgnb3BlbicsIGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3RlZCBjb3JyZWN0bHkgdG8gbW9uZ28gZGInKSk7XHJcbiAgICAgICAgcmV0dXJuIE1vbmdvLmRiO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbmdvb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBJTG9jYXRpb24gZnJvbSAnLi4vbW9kZWwvSUxvY2F0aW9uJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICAgIC8vcmVzLnN0YXR1cygyMDApLnNlbmQoJ2NpYW9uZScpO1xyXG4gICAgcmVzLmpzb24oe3BpcHBvOiAnY2lhbyd9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy86aWQnLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xyXG5cclxufSlcclxuXHJcblxyXG5yb3V0ZXIuZGVsZXRlKCcvOmlkJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICAgIFxyXG59KVxyXG5cclxuLy9jXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvbG9jYXRpb25Sb3V0ZS50cyIsIi8qKlxyXG4gKiBzY3JpcHQgZm9yIGluaXRpYWwgZGIgcG9wdWxhdGlvblxyXG4gKi9cclxuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQge0lkZWF9IGZyb20gJy4vbW9kZWwvaWRlYSc7XHJcbmNvbnN0IGlkZWFzID0gcmVxdWlyZSgnLi4vY29uZmlnL2lkZWFzLmpzb24nKTtcclxuXHJcbmNvbnN0IGNsZWFyQ29sbGVjdGlvbiA9IChjb2xsZWN0aW9uOiBtb25nb29zZS5Nb2RlbDxhbnk+LCBjbGI6IGFueSkgPT4ge1xyXG4gICAgY29sbGVjdGlvbi5yZW1vdmUoe30sIGNsYik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3B1bGF0ZURCID0gKGRiOiBtb25nb29zZS5Db25uZWN0aW9uKSA9PiB7XHJcbiAgICBjbGVhckNvbGxlY3Rpb24oSWRlYSwgKCkgPT4gY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnSWRlYSBjbGVhcmVkJykpO1xyXG4gICAgSWRlYS5jcmVhdGUoaWRlYXMsIChlcnIsIGlkZWFzKSA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnZGIgcG9wdWxhdGVkIGNvcnJlY3RseScpO1xyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9wb3B1bGF0ZS50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuY29uc3QgaWRlYVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHRhcmdldDoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHJhaXNlZDoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgZXF1aXR5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52ZXN0b3JzOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBJZGVhID0gbW9uZ29vc2UubW9kZWwoJ0lkZWEnLCBpZGVhU2NoZW1hKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9kZWwvaWRlYS50cyIsIm1vZHVsZS5leHBvcnRzID0gW3tcInRpdGxlXCI6XCJUaGUgTGFrZXMgRGlzdGlsbGVyeVwiLFwiZGVzY3JpcHRpb25cIjpcIk9wZW5lZCBpbiAyMDE0LCBUaGUgTGFrZXMgRGlzdGlsbGVyeSBpcyBFbmdsYW5kJ3MgbGFyZ2VzdCB3aGlza3kgZGlzdGlsbGVyeSwgcmVjZWl2aW5nIG92ZXIgMTAwLDAwMCB2aXNpdG9ycyBhbm51YWxseSBhbmQgaGFzIHNvbGQgb3ZlciAxNjAsMDAwIGJvdHRsZXMgb2YgdGhlaXIgcHJlbWl1bSBnaW4sIHZvZGthLCBhbmQgYmxlbmRlZCB3aGlza3k7IHZvdGVkIG9uZSBvZiB0aGUgdG9wIDUgYmVzdCBuZXcgZGlzdGlsbGVyaWVzIGluIHRoZSB3b3JsZCBieSBUaW1lIE91dCBVU0EuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzEwL3RoZV9sYWtlc19kaXN0aWxsZXJ5Xy1fbmF0aW9uYWxfcGFya19sb2dvXy1fYmxhY2tfc3F1YXJlXzlmYzgwMDJhMWU4NTY2YjFjZTQ3MGIzNmE1OWU0YWFjLmpwZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNTg4LzIwMTcxMC91bnRpdGxlZF85NmUzNDExZmIwMzRjYjBmZjUyOTRiOTU1Yzc3YjJiNC5qcGdcIixcInRhcmdldFwiOjEwMDAwMDAsXCJyYWlzZWRcIjo2ODE3MDAsXCJlcXVpdHlcIjpcIjIuMjElXCIsXCJpbnZlc3RvcnNcIjo4NDF9LHtcInRpdGxlXCI6XCJNb3ZlbVwiLFwiZGVzY3JpcHRpb25cIjpcIk1vdmVtIGlzIGFuIG9ubGluZSBwcm9wZXJ0eSBwb3J0YWwsIGFsbG93aW5nIHRlbmFudHMgdG8gcmV2aWV3IHRoZWlyIHJlbnRhbCBleHBlcmllbmNlcywgd2hpbHN0IGJ1aWxkaW5nIHRoZWlyIG93biBkaWdpdGFsIHJlbnRhbCBwcm9maWxlLCBrbm93biBhcyBhIE1vdmVtIFBhc3Nwb3J0LiBBZ2VudHMgYW5kIGxhbmRsb3JkcyBjYW4gcGF5IHRvIGluc3RhbnRseSBkb3dubG9hZCBhIHRlbmFudCdzIGZ1bGwgcmVmZXJlbmNlLCBkZXNpZ25lZCB0byBiZSBjaGVhcGVyLCBxdWlja2VyLCBhbmQgbGVzcyBvcGVuIHRvIGZyYXVkLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC90aGVfbGFrZXNfZGlzdGlsbGVyeV8tX25hdGlvbmFsX3BhcmtfbG9nb18tX2JsYWNrX3NxdWFyZV85ZmM4MDAyYTFlODU2NmIxY2U0NzBiMzZhNTllNGFhYy5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTU4OC8yMDE3MTAvdW50aXRsZWRfOTZlMzQxMWZiMDM0Y2IwZmY1Mjk0Yjk1NWM3N2IyYjQuanBnXCIsXCJ0YXJnZXRcIjozMDAwMDAsXCJyYWlzZWRcIjozMjcwMDAsXCJlcXVpdHlcIjpcIjExLjk5JVwiLFwiaW52ZXN0b3JzXCI6MjkyfSx7XCJ0aXRsZVwiOlwiU2lsdmVyU3VyZmVyc1wiLFwiZGVzY3JpcHRpb25cIjpcIldpdGggb25lIG9mIHRoZSBVS+KAmXMgbGFyZ2VzdCBvbmxpbmUgY29tbXVuaXRpZXMgZm9yIHRoZSB5b3VuZyBhdCBoZWFydCBvdmVyIDUwJ3MsIFNpbHZlcnN1cmZlcnMgaGFzIG92ZXIgaGFsZiBhIG1pbGxpb24gZm9sbG93ZXJzLiBUaGUgY29tcGFueSBoYXMgYWNoaWV2ZWQgwqM4NjBrKyByZXZlbnVlIGZyb20gYWR2ZXJ0aXNpbmcsIHNvY2lhbCBtZWRpYSBhbmQgY29tbWlzc2lvbi1yZWxhdGVkIHBhcnRuZXJzaGlwcyB3aXRoIG1ham9yIGJyYW5kcyBzdWNoIGFzIEFsbGlhbnogYW5kIE5lc3RsZS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvY2Mtc3MtbG9nb18zZjQxMzE1MjVkOGQwMDE1MDg5NDk0M2ZkNTUxMjNhOS5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTU1My8yMDE3MDkvNWRiOTA2ZDcyOTY5MDVjNzc4ZDI1MTIwMjlmNDQyZjYuanBnXCIsXCJ0YXJnZXRcIjozMDAwMDAsXCJyYWlzZWRcIjo1Mjc1MCxcImVxdWl0eVwiOlwiMy42MSVcIixcImludmVzdG9yc1wiOjQyfSx7XCJ0aXRsZVwiOlwiQ3Jvd2RmdW5kZXJcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgVUvigJlzICMxIHJld2FyZHMtYmFzZWQgY3Jvd2RmdW5kaW5nIHBsYXRmb3JtLCBDcm93ZGZ1bmRlciwgbm93IGhhcyBncm93biB0byBhbiBvbmxpbmUgY29tbXVuaXR5IG9mIG92ZXIgNjAwLDAwMCwgYW5kIGhhcyB3b3JrZWQgd2l0aCBvdmVyIDgwLDAwMCBwcm9qZWN0cyB0byByYWlzZSDCozQwIG1pbGxpb24gc2luY2UgMjAxNC4gTm93IEVCSVREQSBwb3NpdGl2ZSB3aXRoIHBsYW5zIHRvIGRpc3J1cHQgdGhlIMKjNS42Ym4gZ3JhbnQgZ2l2aW5nIHNlY3Rvci5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvY2Zfc3F1YXJlX2IyYmI1MzhlYTM1YTk3YzU3NDc5YzIwNWVmNDVlZTY0LnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjQxLzIwMTcwOS9jY19waXRjaF9wYWdlX2Jhbm5lcl85ZjM3ZDQwOWI5Yjk4NzQ3YjZmZjk5YTZmYjNlODhiZC5qcGdcIixcInRhcmdldFwiOjc1MDAwMCxcInJhaXNlZFwiOjcyMzAzMCxcImVxdWl0eVwiOlwiNC4yNyVcIixcImludmVzdG9yc1wiOjY3NH0se1widGl0bGVcIjpcIlJpZ2h0YW5nbGVkXCIsXCJkZXNjcmlwdGlvblwiOlwiQmFja2VkIGJ5IE5IUyBFbmdsYW5kLCBSaWdodGFuZ2xlZCBpcyBhIENRQyByZWdpc3RlcmVkIGhlYWx0aGNhcmUgcHJvdmlkZXIgZm9yIGdlbmV0aWMgdGVzdGluZy4gSGF2aW5nIGRlc2lnbmVkIHRoZWlyIENhcmRpYWMgZ2VuZXRpYyB0ZXN0IGFuZCBmaWxlZCBhIHBhdGVudCBhbHJlYWR5LCB0aGUgdGVhbSBub3cgc2VlayB0byBleHBhbmQgdGhlaXIgdGVzdGluZyBhbmQgdGVsZW1lZGljaW5lIHNlcnZpY2UgaW50byBuZXcgdGVzdHMgYW5kIG1hcmtldHMuIFwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOC9yYV9sb2dvLV9jcm93ZGN1YmVfY2Q2ZWQxMDRiNzUzNGU0YmNhYjIyZWE5NTAyYTIzNjMucG5nXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NDEvMjAxNzA5L2NjX3BpdGNoX3BhZ2VfYmFubmVyXzlmMzdkNDA5YjliOTg3NDdiNmZmOTlhNmZiM2U4OGJkLmpwZ1wiLFwidGFyZ2V0XCI6MTAwMDAwLFwicmFpc2VkXCI6MjYzOTUwLFwiZXF1aXR5XCI6XCIxNC45NiVcIixcImludmVzdG9yc1wiOjQ5NX0se1widGl0bGVcIjpcIlNoYXcgQWNhZGVteVwiLFwiZGVzY3JpcHRpb25cIjpcIkZvdW5kZWQgaW4gMjAxNCwgU2hhdyBBY2FkZW15IGlzIGFuIG9ubGluZSBlZHVjYXRpb24gcHJvdmlkZXIgd2hpY2ggdGVhY2hlcyBhIHZhcmlldHkgb2Ygc3ViamVjdHMgbGl2ZSB0aHJvdWdoIHRoZWlyIGJlc3Bva2Ugc29mdHdhcmUgcGxhdGZvcm0uIEhhdmluZyB0YXVnaHQgb3ZlciA0LDAwMCwwMDAgc3R1ZGVudHMgZnJvbSBhbGwgb3ZlciB0aGUgd29ybGQsIHRoZXkgYXJlIGN1cnJlbnRseSBncm93aW5nIGJ5IDI1MCwwMDAgbmV3IHN0dWRlbnRzIGEgbW9udGggYW5kIG5vdyBwbGFuIHRvIHNjYWxlIGdsb2JhbGx5LlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9sb2dvX2ludmVydGVkX2JsdWVfc3R5bGVfMl8xZDAzOTAwYTQ4NGZkNzMwODRlMjBhNDk2ODkzMDhjNi5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY3Mi8yMDE3MDkvZGVza3RvcF9vcHQyXzdiZDg2ZDAxNmJkNjUxOGJjNWEwMzljZGUxOGYxMmI4LmpwZ1wiLFwidGFyZ2V0XCI6MjE5NDAwMCxcInJhaXNlZFwiOjIzOTkxMzAsXCJlcXVpdHlcIjpcIjIuNzklXCIsXCJpbnZlc3RvcnNcIjoxNjg2fSx7XCJ0aXRsZVwiOlwiTG9vc2UgRW5kcyBBcHBcIixcImRlc2NyaXB0aW9uXCI6XCJMb29zZSBFbmRzIGlzIGEgbmV3IGFwcCBkZXNpZ25lZCB0byBoZWxwIHBlb3BsZSBnZXQgdG9nZXRoZXIgZWZmb3J0bGVzc2x5LiA2MCUgb2YgQnJpdG9ucyB3YW50IHRvIHNvY2lhbGlzZSBtb3JlIG9mdGVuLCBidXQgb3JnYW5pc2luZyBuaWdodHMgb3V0IGNhbiBiZSBjb21wbGljYXRlZDogbWFueSBwbGFubmVkIG1lZXR1cHMgbmV2ZXIgaGFwcGVuLiBMb29zZSBFbmRzIGlzIGEgb25lLXN0b3Agc29jaWFsIHNvbHV0aW9uLCB0YXJnZXRpbmcgYSBtYXJrZXQgd29ydGggwqM2MGJuIHBlciBhbm51bSBpbiB0aGUgVUsgYWxvbmUuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzEwL2hpLXJlcy1sb2dvLXYyLWxhcmdlXzM0NjAxZWViM2EzMTYyNWJiY2Y3MzMxN2IwYmY0NTk3LnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjg2LzIwMTcxMC8yYWQzNWFhNjZjMWFkYTgxYTQwNmM1YTc5NzRjOGRkZS5qcGdcIixcInRhcmdldFwiOjEwMDAwMCxcInJhaXNlZFwiOjMzMTYwLFwiZXF1aXR5XCI6XCIxMC4wMCVcIixcImludmVzdG9yc1wiOjIwfSx7XCJ0aXRsZVwiOlwiSG91c2Vyc1wiLFwiZGVzY3JpcHRpb25cIjpcIkxhdW5jaGVkIGluIDIwMTYgYW5kIGJhc2VkIGluIE1hZHJpZCwgU3BhaW4sIEhvdXNlcnMgaXMgYSByZWFsIGVzdGF0ZSBjcm93ZGZ1bmRpbmcgcGxhdGZvcm0gdGhhdCBtYWtlcyBpdCBlYXN5IGZvciBpbnZlc3RvcnMgdG8gaW52ZXN0IGluIEV1cm9wZWFuIHJlYWwgZXN0YXRlIGJvdGggZm9yIHJlbnRhbCBpbmNvbWUgYW5kIGNhcGl0YWwgZ2Fpbi4gVGhleSBjdXJyZW50bHkgbWFuYWdlIOKCrDMybSBpbiBpbnZlc3RtZW50IGFuZCBub3cgcGxhbiB0byBleHBhbmQgdGhlaXIgcHJvZHVjdCBvZmZlcmluZyAmYW1wOyBjb3ZlcmFnZS4gXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5LzAwX3BlcmZpbF9jcm93ZGN1YmU2X2FiYzc2ZDE3YmRkYzdiYjkyODhmYzA4N2JiODQxMDZjLnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjM4LzIwMTcwOS8wMl9jb3Zlcl9jcm93ZGN1YmVfbW9udGFqZV8yXzhjZjU0MmY2MmM4MTk0OTJmNGUyM2VmZjQ2ZmQ0ZjA3LmpwZ1wiLFwidGFyZ2V0XCI6ODUwMDAwLFwicmFpc2VkXCI6ODIwNDMwLFwiZXF1aXR5XCI6XCIyLjIyJVwiLFwiaW52ZXN0b3JzXCI6OTM3fSx7XCJ0aXRsZVwiOlwicGFzc2luZ2JveGVzXCIsXCJkZXNjcmlwdGlvblwiOlwicGFzc2luZ2JveGVzIGFpbXMgdG8gYmUgdGhlIHdvcmxk4oCZcyBtb3N0IGNvbXByZWhlbnNpdmUgd2Vic2l0ZSBmb3IgZGVhbGluZyB3aXRoIGRlYXRoLiBJdCBwcm92aWRlcyBzZXJ2aWNlcyB0byBoZWxwIHNlY3VyZSB5b3VyIGRpZ2l0YWwgbGVnYWN5IGFuZCBwYXNzIG9uIHRoZSB0aGluZ3MgdGhhdCByZWFsbHkgbWF0dGVyLiBwYXNzaW5nYm94ZXMgYWltcyB0byBoYXZlIDUwMCwwMDAgbWVtYmVycyBieSAyMDIyIGluIGFuIGluZHVzdHJ5IHRoYXQgaXMgd29ydGggwqMxLjcgYmlsbGlvbiBwZXIgYW5udW0uXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2xvZ29fZm9yX2Nyb3dkY3ViZV81MDUwMTRkZDk4Njk0OWJhMjlmYjI3NDkzZDcwMzUzMi5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTYxMi8yMDE3MDkvaGVhZGVyX2ltYWdlXzIwMTcwOTIwXzJjMWIwZTljN2M5NGRiNTRhZjlkMzAwNDQ0NWYwMTM3LmpwZ1wiLFwidGFyZ2V0XCI6MTUwMDAwLFwicmFpc2VkXCI6NzE1OTAsXCJlcXVpdHlcIjpcIjUuMDAlXCIsXCJpbnZlc3RvcnNcIjoxMTF9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9pZGVhcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9