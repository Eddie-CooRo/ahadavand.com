webpackJsonp([221374088121123],{

/***/ 4:
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(5);
	const humanReadable_1 = __webpack_require__(178);
	const Spacer_1 = __webpack_require__(60);
	const additionalRepos_1 = __webpack_require__(177);
	function getTopic(topics, name) {
	    const found = topics.find(t => t.name === name);
	    if (found) {
	        return found;
	    } else {
	        const stars = name === "uncategorized" ? -1 : name === "deprecated" ? -2 : 0;
	        const topic = { name, repos: [], stars };
	        topics.push(topic);
	        return topic;
	    }
	}
	const RepoList = function ({ repos }) {
	    const topics = repos.concat(additionalRepos_1.additionalRepos).reduce((accumulator, repo) => {
	        const topicCount = repo.repositoryTopics.nodes.length;
	        const name = topicCount ? repo.repositoryTopics.nodes[0].topic.name : "uncategorized";
	        const topic = getTopic(accumulator, name);
	        topic.stars += repo.stargazers.totalCount;
	        if (repo.viewerHasStarred) {
	            topic.stars += 99;
	        }
	        topic.repos.push(repo);
	        return accumulator;
	    }, []);
	    topics.sort((a, b) => a.stars < b.stars ? 1 : -1);
	    topics.forEach(topic => {
	        topic.repos.sort((a, b) => a.stargazers.totalCount < b.stargazers.totalCount ? 1 : -1);
	    });
	    return React.createElement("div", { className: "repos" }, topics.map((topic, i) => React.createElement("div", { key: i, id: topic.name }, React.createElement(Spacer_1.default, { height: 6 }), React.createElement("h1", null, humanReadable_1.humanReadable(topic.name)), React.createElement(Spacer_1.default, { height: 2 }), React.createElement("ul", { className: "list" }, topic.repos.map((repo, c) => React.createElement("li", { key: c }, React.createElement("a", { href: repo.url, target: "_blank" }, React.createElement("span", { className: "title" }, humanReadable_1.humanReadable(repo.name)), React.createElement("span", { className: "desc" }, repo.shortDescriptionHTML))))))));
	};
	exports.default = RepoList;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(5);
	const Spacer = function ({ children, height = 1 }) {
	    const style = {
	        marginTop: height * 8
	    };
	    return React.createElement("div", { style: style }, children);
	};
	exports.default = Spacer;

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.additionalRepos = [{
	    name: "Services",
	    shortDescriptionHTML: "",
	    url: "https://services.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "Whetstone",
	    shortDescriptionHTML: "",
	    url: "https://whetstone.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "software" } }] }
	}, {
	    name: "Nodepad",
	    shortDescriptionHTML: "",
	    url: "https://nodepad.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "software" } }] }
	}, {
	    name: "Pravdomil Piano",
	    shortDescriptionHTML: "",
	    url: "https://piano.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "design" } }] }
	}, {
	    name: "Přijímačky UMPRUM",
	    shortDescriptionHTML: "",
	    url: "https://prijimackyumprum.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "czech" } }] }
	}, {
	    name: "halftone-workshop",
	    shortDescriptionHTML: "",
	    url: "https://halftone-workshop.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "workshop" } }] }
	}, {
	    name: "cmyk-workshop",
	    shortDescriptionHTML: "",
	    url: "https://cmyk-workshop.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "workshop" } }] }
	}, {
	    name: "prawood",
	    shortDescriptionHTML: "",
	    url: "https://prawood.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "photography",
	    shortDescriptionHTML: "",
	    url: "https://www.icloud.com/sharedalbum/#B0P5oqs3qkAGn;30709E02-4714-4CEA-B4DE-17C88DB668FC",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "graphics-design",
	    shortDescriptionHTML: "",
	    url: "https://graphic.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "web-development",
	    shortDescriptionHTML: "",
	    url: "https://web.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "3d-print",
	    shortDescriptionHTML: "",
	    url: "https://3dprint.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "sound",
	    shortDescriptionHTML: "",
	    url: "https://sound.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "Viewfinder",
	    shortDescriptionHTML: "",
	    url: "https://viewfinder.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "mobile-apps" } }] }
	}, {
	    name: "nodragreleasedelay",
	    shortDescriptionHTML: "",
	    url: "https://nodragreleasedelay.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "jailbreak",
	    shortDescriptionHTML: "",
	    url: "https://jailbreak.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "programming",
	    shortDescriptionHTML: "",
	    url: "https://programming.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "wordpress",
	    shortDescriptionHTML: "",
	    url: "https://wordpress.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "magiclantern",
	    shortDescriptionHTML: "",
	    url: "https://magiclantern.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "learn",
	    shortDescriptionHTML: "",
	    url: "https://learn.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "yearprogress",
	    shortDescriptionHTML: "",
	    url: "https://yearprogress.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "newton-law",
	    shortDescriptionHTML: "",
	    url: "https://newton-law.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "bookletflow",
	    shortDescriptionHTML: "",
	    url: "https://bookletflow.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "fusion",
	    shortDescriptionHTML: "",
	    url: "https://fusion.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "cheatsheet",
	    shortDescriptionHTML: "",
	    url: "https://cheatsheet.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "electronic",
	    shortDescriptionHTML: "",
	    url: "https://electronic.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "papercut",
	    shortDescriptionHTML: "",
	    url: "https://papercut.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "pravidla-typografie",
	    shortDescriptionHTML: "",
	    url: "https://pravidla-typografie.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "heroes3rady",
	    shortDescriptionHTML: "",
	    url: "https://heroes3rady.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "pravidla-grafiky",
	    shortDescriptionHTML: "",
	    url: "https://pravidla-grafiky.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "mackeyboardpiano",
	    shortDescriptionHTML: "",
	    url: "https://mackeyboardpiano.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "macos",
	    shortDescriptionHTML: "",
	    url: "https://macos.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}];

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	function humanReadable(input) {
	    const output = input.replace("wp-", "").replace(/-/g, " ");
	    return output[0].toLocaleUpperCase() + output.substr(1);
	}
	exports.humanReadable = humanReadable;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(5);
	const RepoList_1 = __webpack_require__(176);
	const IndexPage = function ({ data }) {
	    const repos = data.githubData.data.viewer.repositories.nodes;
	    return React.createElement("div", null, React.createElement(RepoList_1.default, { repos: repos }));
	};
	exports.query = "** extracted graphql fragment **";
	exports.default = IndexPage;

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-4807d991ff2f18484c24.js.map