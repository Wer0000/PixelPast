/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Resources/resources.js":
/*!************************************!*\
  !*** ./src/Resources/resources.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\nvar findGetParameter = function findGetParameter(parameterName) {\n  var result = null,\n    tmp = [];\n  location.search.substr(1).split(\"&\").forEach(function (item) {\n    tmp = item.split(\"=\");\n    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);\n  });\n  return result;\n};\nvar resources = \"\".concat(_package_json__WEBPACK_IMPORTED_MODULE_0__.usercontent, \"/src/Resources\"),\n  resourceUrl = \"\".concat(findGetParameter('resources') || 'https://s.eu.tankionline.com');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  maps: {\n    berlin: {\n      from: \"\".concat(resourceUrl, \"/0/114/120/67/30023211007774\"),\n      to: [\"\".concat(resources, \"/maps/berlin/atlas.webp\"), \"\".concat(resources, \"/maps/berlin/atlas2.webp\"), \"\".concat(resources, \"/maps/berlin/atlas3.webp\")]\n    },\n    chernobyl: {\n      from: \"\".concat(resourceUrl, \"/0/114/132/50/30023221517011\"),\n      to: [\"\".concat(resources, \"/maps/chernobyl/atlas.webp\"), \"\".concat(resources, \"/maps/chernobyl/atlas2x.webp\")]\n    },\n    silence: {\n      from: \"\".concat(resourceUrl, \"/0/114/147/102/30125767471417\"),\n      to: [\"\".concat(resources, \"/maps/silence/atlas.webp\"), \"\".concat(resources, \"/maps/silence/atlas2.webp\")]\n    },\n    island: {\n      from: \"\".concat(resourceUrl, \"/0/114/140/74/30023252200472\"),\n      to: [\"\".concat(resources, \"/maps/island/atlas.webp\")]\n    },\n    shortbridge: {\n      from: \"\".concat(resourceUrl, \"/0/114/124/253/30023351102570\"),\n      to: [\"\".concat(resources, \"/maps/short-bridge/atlas.webp\")]\n    },\n    highland: {\n      from: \"\".concat(resourceUrl, \"/0/114/140/75/30023245012560\"),\n      to: [\"\".concat(resources, \"/maps/highland/atlas.webp\")]\n    },\n    serpuhov_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/203/66/30125767471414\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/serpuhov/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/serpuhov/atlas2.webp\")]\n    },\n    serpuhov: {\n      from: \"\".concat(resourceUrl, \"/0/114/124/176/30023347020365\"),\n      to: [\"\".concat(resources, \"/maps/serpuhov/atlas.webp\"), \"\".concat(resources, \"/maps/serpuhov/atlas2.webp\")]\n    },\n    sandbox: {\n      from: \"\".concat(resourceUrl, \"/0/1/305/27/30026243132232\"),\n      to: [\"\".concat(resources, \"/maps/sandbox/atlas.webp\")]\n    },\n    aleksandrovsk_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/200/110/30023263050005\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/aleksandrovsk/atlas.webp\")]\n    },\n    barda_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/177/344/30023264124307\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/barda/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/barda/atlas2.webp\")]\n    },\n    berlin_mm: {\n      from: \"\".concat(resourceUrl, \"/567/105624/267/135/30023265152365\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/berlin/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/berlin/atlas2.webp\"), \"\".concat(resources, \"/maps/matchmaking/berlin/atlas3.webp\")]\n    },\n    bobruysk_mm: {\n      from: \"\".concat(resourceUrl, \"/545/151421/10/111/30023266235420\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/bobruysk/atlas.webp\")]\n    },\n    boynya_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/205/216/30040001474064\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/boynya/atlas.webp\")]\n    },\n    brest_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/201/102/30023266642565\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/brest/atlas.webp\")]\n    },\n    god_2042_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/207/36/30023320202260\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/god_2042/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/god_2042/atlas2.webp\")]\n    },\n    dyusseldorf_mm: {\n      from: \"\".concat(resourceUrl, \"/567/105615/246/105/30023272406661\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/dyusseldorf/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/dyusseldorf/atlas2.webp\")]\n    },\n    javoronki_mm: {\n      from: \"\".concat(resourceUrl, \"/567/105610/267/214/30023314414431\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/javoronki/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/javoronki/atlas2.webp\")]\n    },\n    kungur_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/200/26/30023277145325\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/kungur/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/kungur/atlas2.webp\")]\n    },\n    magystral_mm: {\n      from: \"\".concat(resourceUrl, \"/545/151420/315/170/30023301213213\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/magystral/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/magystral/atlas2.webp\")]\n    },\n    molotov_mm: {\n      from: \"\".concat(resourceUrl, \"/553/177367/2/10/30023302564060\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/molotov/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/molotov/atlas2.webp\")]\n    },\n    mosty_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/203/314/30023267247553\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/mosty/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/mosty/atlas2.webp\")]\n    },\n    osa_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/200/336/30023303627454\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/osa/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/osa/atlas2.webp\")]\n    },\n    parma_mm: {\n      from: \"\".concat(resourceUrl, \"/545/151420/363/31/30023305150431\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/parma/atlas.webp\")]\n    },\n    perekrestok_mm: {\n      from: \"\".concat(resourceUrl, \"/553/177311/244/366/30370645264772\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/perekrestok/atlas.webp\")]\n    },\n    plato_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/206/354/30072001557752\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/plato/atlas.webp\")]\n    },\n    /*polygon_mm: {\r\n        from: `${resourceUrl}/0/16723/204/306/30023305546105`,\r\n        to: [\r\n            `${resources}/maps/matchmaking/polygon/atlas.webp`,\r\n            `${resources}/maps/matchmaking/polygon/atlas2.webp`,\r\n        ]\r\n    },*/\n    prostor_mm: {\n      from: \"\".concat(resourceUrl, \"/567/105606/23/0/30040003275746\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/prostor/atlas.webp\")]\n    },\n    pustynya_mm: {\n      from: \"\".concat(resourceUrl, \"/0/114/137/366/30023231521655\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/pustynya/atlas.webp\")]\n    },\n    red_alert_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/201/330/30023306375133\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/red_alert/atlas.webp\")]\n    },\n    solikamsk_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/206/210/30023315226203\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/solikamsk/atlas.webp\")]\n    },\n    silence_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/202/156/30023313462007\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/silence/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/silence/atlas2.webp\")]\n    },\n    tribyut_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/177/34/30102303112114\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/tribyut/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/tribyut/atlas2.webp\"), \"\".concat(resources, \"/maps/matchmaking/tribyut/atlas3.webp\")]\n    },\n    templ_mm: {\n      from: \"\".concat(resourceUrl, \"/567/105636/265/156/30023300241335\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/templ/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/templ/atlas2.webp\")]\n    },\n    chernobyl_mm: {\n      from: \"\".concat(resourceUrl, \"/552/176420/31/341/30023270123316\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/chernobyl/atlas.webp\"), \"\".concat(resources, \"/maps/matchmaking/chernobyl/atlas2.webp\")]\n    },\n    /*chernushka_mm: {\r\n        from: `${resourceUrl}/552/176420/31/345/30023304734447`,\r\n        to: [\r\n            `${resources}/maps/matchmaking/chernushka/atlas.webp`,\r\n            `${resources}/maps/matchmaking/chernushka/atlas2.webp`,\r\n            `${resources}/maps/matchmaking/chernushka/atlas3.webp`,\r\n        ]\r\n    },*/\n    shosse_mm: {\n      from: \"\".concat(resourceUrl, \"/0/16723/202/12/30023274377673\"),\n      to: [\"\".concat(resources, \"/maps/matchmaking/shosse/atlas.webp\")]\n    }\n  },\n  buildings: {\n    nubu_1: \"\".concat(resources, \"/buildings/nubu_1.3ds\"),\n    nubu_2: \"\".concat(resources, \"/buildings/nubu_2.3ds\"),\n    nubu_3: \"\".concat(resources, \"/buildings/nubu_3.3ds\"),\n    nubu_4: \"\".concat(resources, \"/buildings/nubu_4.3ds\"),\n    nubu_5: \"\".concat(resources, \"/buildings/nubu_5.3ds\"),\n    nubu_6: \"\".concat(resources, \"/buildings/nubu_6.3ds\"),\n    nubu_7: \"\".concat(resources, \"/buildings/nubu_7.3ds\"),\n    nubu_8: \"\".concat(resources, \"/buildings/nubu_8.3ds\"),\n    nubu_9: \"\".concat(resources, \"/buildings/nubu_9.3ds\"),\n    nubu_10: \"\".concat(resources, \"/buildings/nubu_10.3ds\"),\n    nubu_12: \"\".concat(resources, \"/buildings/nubu_12.3ds\"),\n    nubu_14: \"\".concat(resources, \"/buildings/nubu_14.3ds\"),\n    smhouse2: \"\".concat(resources, \"/buildings/smhouse2.3ds\"),\n    smhouse3: \"\".concat(resources, \"/buildings/smhouse3.3ds\"),\n    smhouse5: \"\".concat(resources, \"/buildings/smhouse5.3ds\"),\n    tower: \"\".concat(resources, \"/buildings/tower.3ds\"),\n    watch_to: \"\".concat(resources, \"/buildings/watch_to.3ds\")\n  },\n  elements: {\n    bilboard: \"\".concat(resources, \"/elements/bilboard.3ds\"),\n    ow_t: \"\".concat(resources, \"/elements/ow_t.3ds\")\n  },\n  landscape: {\n    cliff_0: \"\".concat(resources, \"/landscape/cliff_0.3ds\"),\n    cliff_1: \"\".concat(resources, \"/landscape/cliff_1.3ds\"),\n    cliff_2: \"\".concat(resources, \"/landscape/cliff_2.3ds\"),\n    cliff_4: \"\".concat(resources, \"/landscape/cliff_4.3ds\"),\n    cliff_c2: \"\".concat(resources, \"/landscape/cliff_c2.3ds\"),\n    cliff_cor: \"\".concat(resources, \"/landscape/cliff_cor.3ds\"),\n    cliff_r2: \"\".concat(resources, \"/landscape/cliff_r2.3ds\"),\n    cliff_ri: \"\".concat(resources, \"/landscape/cliff_ri.3ds\"),\n    rise_2: \"\".concat(resources, \"/landscape/rise_2.3ds\"),\n    rise_3: \"\".concat(resources, \"/landscape/rise_3.3ds\"),\n    rise_5: \"\".concat(resources, \"/landscape/rise_5.3ds\"),\n    slope_1: \"\".concat(resources, \"/landscape/slope_1.3ds\"),\n    slope_2: \"\".concat(resources, \"/landscape/slope_2.3ds\"),\n    wall_3w: \"\".concat(resources, \"/landscape/wall_3w.3ds\"),\n    wall_cr: \"\".concat(resources, \"/landscape/wall_cr.3ds\"),\n    wall_e1: \"\".concat(resources, \"/landscape/wall_e1.3ds\"),\n    wall_e2: \"\".concat(resources, \"/landscape/wall_e2.3ds\"),\n    wall_e3: \"\".concat(resources, \"/landscape/wall_e3.3ds\"),\n    wall_st: \"\".concat(resources, \"/landscape/wall_st.3ds\")\n  },\n  props: {\n    brid_1: \"\".concat(resources, \"/props/brid_1.3ds\"),\n    brid_2: \"\".concat(resources, \"/props/brid_2.3ds\"),\n    brid_3: \"\".concat(resources, \"/props/brid_3.3ds\"),\n    brid_4: \"\".concat(resources, \"/props/brid_4.3ds\"),\n    brid_5: \"\".concat(resources, \"/props/brid_5.3ds\"),\n    brid_6: \"\".concat(resources, \"/props/brid_6.3ds\"),\n    brid_7: \"\".concat(resources, \"/props/brid_7.3ds\"),\n    fab_tow: \"\".concat(resources, \"/props/fab_tow.3ds\"),\n    fab_tow2: \"\".concat(resources, \"/props/fab_tow2.3ds\"),\n    st_br01: \"\".concat(resources, \"/props/st_br01.3ds\"),\n    tube_1: \"\".concat(resources, \"/props/tube_1.3ds\"),\n    tube_2: \"\".concat(resources, \"/props/tube_2.3ds\"),\n    tube_3: \"\".concat(resources, \"/props/tube_3.3ds\"),\n    tube_4: \"\".concat(resources, \"/props/tube_4.3ds\"),\n    tunnel_1: \"\".concat(resources, \"/props/tunnel_1.3ds\"),\n    tunnel_2: \"\".concat(resources, \"/props/tunnel_2.3ds\"),\n    vilhou_1: \"\".concat(resources, \"/props/vilhou_1.3ds\"),\n    vilhou_2: \"\".concat(resources, \"/props/vilhou_2.3ds\"),\n    vilhou_3: \"\".concat(resources, \"/props/vilhou_3.3ds\"),\n    vilhou_4: \"\".concat(resources, \"/props/vilhou_4.3ds\"),\n    wall_1: \"\".concat(resources, \"/props/wall_1.3ds\"),\n    wall_2: \"\".concat(resources, \"/props/wall_2.3ds\"),\n    wall_3: \"\".concat(resources, \"/props/wall_3.3ds\"),\n    wallcorn: \"\".concat(resources, \"/props/wallcorn.3ds\"),\n    wgates: \"\".concat(resources, \"/props/wgates.3ds\")\n  },\n  /* Несовместимо\r\n  castle: {\r\n      castle: `${resources}/castle/castle.3ds`,\r\n      fahwerk1: `${resources}/castle/fahwerk1.3ds`,\r\n      fahwerk2: `${resources}/castle/fahwerk2.3ds`,\r\n      tower_corner: `${resources}/castle/tower_corner.3ds`,\r\n      tower_end: `${resources}/castle/tower_end.3ds`,\r\n      tower_roof: `${resources}/castle/tower_roof.3ds`,\r\n      tower_str: `${resources}/castle/tower_str.3ds`,\r\n      wall: `${resources}/castle/wall.3ds`,\r\n      wall_broken_1: `${resources}/castle/wall_broken_1.3ds`,\r\n      wall_broken_2: `${resources}/castle/wall_broken_2.3ds`,\r\n      wall_cor_in: `${resources}/castle/wall_cor_in.3ds`,\r\n      wall_cor_out: `${resources}/castle/wall_cor_out.3ds`,\r\n      wall_end_1: `${resources}/castle/wall_end_1.3ds`,\r\n      wall_end_2: `${resources}/castle/wall_end_2.3ds`,\r\n      wall_gate: `${resources}/castle/wall_gate.3ds`,\r\n      wall_short: `${resources}/castle/wall_short.3ds`\r\n  },*/\n  hulls: {\n    viking: {\n      from: [\"\".concat(resourceUrl, \"/574/35274/263/164/30023200247021/\"), \"\".concat(resourceUrl, \"/571/121215/5/23/30023200213042/\")],\n      to: \"\".concat(resourceUrl, \"/545/14403/373/22/30023200300655/\")\n    },\n    hornet: {\n      from: [\"\".concat(resourceUrl, \"/570/57730/367/11/30023203102622/\"), \"\".concat(resourceUrl, \"/566/70102/323/346/30023203020264/\")],\n      to: \"\".concat(resourceUrl, \"/551/32007/310/225/30023202734413/\")\n    },\n    wasp: {\n      from: [\"\".concat(resourceUrl, \"/574/111243/33/322/30023177504446/\"), \"\".concat(resourceUrl, \"/574/111503/270/327/30023177541167/\")],\n      to: \"\".concat(resourceUrl, \"/577/171773/42/62/30023200017606/\")\n    },\n    mammoth: {\n      from: [\"\".concat(resourceUrl, \"/600/67466/142/361/30023202021765/\"), \"\".concat(resourceUrl, \"/600/67314/131/54/30023201710460/\")],\n      to: \"\".concat(resourceUrl, \"/557/31354/323/254/30023201357637/\")\n    },\n    hunter: {\n      from: [\"\".concat(resourceUrl, \"/574/35434/246/315/30023202224766/\"), \"\".concat(resourceUrl, \"/567/166366/55/140/30023202201065/\")],\n      to: \"\".concat(resourceUrl, \"/577/157453/256/241/30026213334751/\")\n    },\n    dictator: {\n      from: [\"\".concat(resourceUrl, \"/602/61700/245/112/30235366242214/\"), \"\".concat(resourceUrl, \"/602/61700/245/106/30234661241174/\")],\n      to: \"\".concat(resourceUrl, \"/600/170471/174/17/30036510257377/\")\n    },\n    titan: {\n      from: [\"\".concat(resourceUrl, \"/606/22645/10/357/30304662376161/\"), \"\".concat(resourceUrl, \"/606/22645/11/165/30305415124610/\")],\n      to: \"\".concat(resourceUrl, \"/601/166273/204/222/30075460130225/\")\n    }\n  },\n  turrets: {\n    freeze: {\n      from: [\"\".concat(resourceUrl, \"/575/153310/123/250/30023174205326/\")],\n      to: \"\".concat(resourceUrl, \"/605/14613/143/127/30263310463254/\")\n    },\n    firebird: {\n      from: [\"\".concat(resourceUrl, \"/573/113511/153/127/30023176270052/\"), \"\".concat(resourceUrl, \"/573/113511/153/137/30023176245450/\")],\n      to: \"\".concat(resourceUrl, \"/606/154706/226/46/30333162052774/\")\n    },\n    isida: {\n      from: [\"\".concat(resourceUrl, \"/605/12650/334/263/30245230366040/\"), \"\".concat(resourceUrl, \"/605/12650/335/30/30245215204100/\")],\n      to: \"\".concat(resourceUrl, \"/606/155040/263/253/30333215031450/\")\n    },\n    hammer: {\n      // cringe\n      from: [\"\".concat(resourceUrl, \"/0/16721/371/335/30023173441663/\"), \"\".concat(resourceUrl, \"/611/147301/37/102/30471670145142/\"), \"\".concat(resourceUrl, \"/611/147301/37/333/30471670013665/\")],\n      to: \"\".concat(resourceUrl, \"/601/166273/204/221/30075460266641/\")\n    },\n    tesla: {\n      // cringe\n      from: [\"\".concat(resourceUrl, \"/574/136476/202/234/30051053324235/\"), \"\".concat(resourceUrl, \"/567/20040/100/57/30051053300260/\")],\n      to: \"\".concat(resourceUrl, \"/604/60235/244/25/30214065350140/\")\n    },\n    thunder: {\n      from: [\"\".concat(resourceUrl, \"/601/105644/16/116/30061351244740/\"), \"\".concat(resourceUrl, \"/601/105644/16/124/30061351151076/\")],\n      to: \"\".concat(resourceUrl, \"/545/14356/174/306/30023170363634/\")\n    },\n    smoky: {\n      from: [\"\".concat(resourceUrl, \"/566/114246/64/4/30023171212561/\"), \"\".concat(resourceUrl, \"/570/54763/200/13/30125767471374/\")],\n      to: \"\".concat(resourceUrl, \"/577/171773/42/54/30023171376721/\")\n    },\n    twins: {\n      from: [\"\".concat(resourceUrl, \"/575/4122/336/247/30023167112521/\"), \"\".concat(resourceUrl, \"/577/157371/340/255/30023170074056/\")],\n      to: \"\".concat(resourceUrl, \"/577/157371/340/255/30023170074056/\")\n    },\n    ricochet: {\n      from: [\"\".concat(resourceUrl, \"/603/150223/342/330/30172073000052/\"), \"\".concat(resourceUrl, \"/603/121326/210/264/30172073014752/\")],\n      to: \"\".concat(resourceUrl, \"/556/131232/204/234/30023172205275/\")\n    },\n    railgun: {\n      from: [\"\".concat(resourceUrl, \"/573/162033/227/133/30023172677526/\"), \"\".concat(resourceUrl, \"/567/105205/202/122/30023172660107/\")],\n      to: \"\".concat(resourceUrl, \"/550/121443/145/146/30023166764662/\")\n    },\n    shaft: {\n      from: [\"\".concat(resourceUrl, \"/0/114/160/315/30023171751136/\")],\n      to: \"\".concat(resourceUrl, \"/600/170471/174/26/30036116357254/\")\n    }\n  }\n});\n\n//# sourceURL=webpack://PixelPast/./src/Resources/resources.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _Resources_resources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resources/resources.js */ \"./src/Resources/resources.js\");\n\n\nclass Core {\n  resourceOverride = [];\n  mapsWhiteList = [];\n  currentMap = '';\n  resources = null;\n  reloadableResources = ['10001979',\n  // slope.3ds\n  '10001889',\n  // wall.3ds\n  '10001988',\n  // cliff.3ds\n  '10001919',\n  // nubu_12.3ds\n  '10002048',\n  // bilboard.3ds\n  '10001925',\n  // fab_tow.3ds\n  '10001916',\n  // nubu_10.3ds\n  '10001928',\n  // vilhou.3ds\n  '10001895',\n  // nubu_2.3ds\n  '10001922',\n  // nubu_14.3ds\n  '10001901',\n  // nubu_4.3ds\n  '10001898',\n  // nubu_3.3ds\n  '10001907',\n  // nubu_6.3ds\n  '10001910',\n  // nubu_8.3ds\n  '10001892',\n  // nubu_1.3ds\n  '10001913',\n  // nubu_9.3ds\n  '10001904',\n  // nubu_5.3ds\n  '10002045',\n  // brid.3ds\n  '10002039',\n  // tunnel.3ds\n  '10002042',\n  // wall.3ds\n  '10002051',\n  // tube.3ds\n  '10002000',\n  // tower.3ds\n  '10001997',\n  // smhouse5.3ds\n  '10001994',\n  // smhouse2.3ds\n  '10001880' // wall_gate.3ds\n  ];\n\n  utils = new _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  constructor() {\n    // Замена текстур-пака карт\n    for (const [key, value] of Object.entries(_Resources_resources_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].maps)) {\n      for (let index = value.to.length - 1; index >= 0; index--) {\n        this.utils.overrideAtlas(this, this.resourceOverride, this.mapsWhiteList, `${value.from}${index !== 0 ? `/atlas${index + 1}` : '/atlas'}.webp`, `${value.to[index]}`);\n      }\n    }\n\n    // Замена 3ds моделей (для того чтобы текстуры легли адекватно)\n    const overrideModel = library => {\n      for (const [key, value] of Object.entries(library)) {\n        this.utils.overrideModel(this, this.resourceOverride, this.mapsWhiteList, `${key}.3ds`, value);\n      }\n    };\n    overrideModel(_Resources_resources_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buildings);\n    overrideModel(_Resources_resources_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].elements);\n    overrideModel(_Resources_resources_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].landscape);\n    overrideModel(_Resources_resources_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].props);\n\n    // Замена моделей \"стандартных скинов\" на \"легаси скины (оригинальные)\"\n    const overrideHullOrTurret = property => {\n      for (const [key, value] of Object.entries(property)) {\n        for (let index = value.from.length - 1; index >= 0; index--) {\n          this.utils.overrideHullOrTurret(this.resourceOverride, value.from[index], value.to);\n        }\n      }\n    };\n    overrideHullOrTurret(_Resources_resources_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].turrets);\n    overrideHullOrTurret(_Resources_resources_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hulls);\n    const originalFetch = unsafeWindow.fetch;\n    const __this__ = this;\n    unsafeWindow.fetch = async (input, init) => {\n      try {\n        let isOverriden = false,\n          originalUrl = input;\n        for (let index = this.resourceOverride.length - 1; index >= 0; index--) {\n          if (input.search(this.resourceOverride[index].from) !== -1) {\n            if (this.resourceOverride[index].callback && this.resourceOverride[index].callback() !== true) break;\n            input = this.resourceOverride[index].to;\n            isOverriden = true;\n            const decoded = this.utils.decodeResourceUrl(originalUrl);\n            console.log(`Resource overriden from ${originalUrl} to ${input}`, new Long(decoded.low, decoded.high).toString());\n            if (this.resourceOverride[index].external === true) return GM_fetch(input, init);\n            break;\n          }\n        }\n        const decoded = this.utils.decodeResourceUrl(originalUrl);\n        isOverriden === false && console.debug(`Resource ${input} not matched`, new Long(decoded?.low, decoded?.high)?.toString());\n      } catch (e) {\n        console.error(e);\n      }\n      return originalFetch(input, init);\n    };\n    Object.defineProperty(Object.prototype, '$metadata$', {\n      configurable: true,\n      enumerable: false,\n      set: function (value) {\n        Object.defineProperty(this, '$metadata$', {\n          configurable: true,\n          enumerable: true,\n          writable: true,\n          value\n        });\n        if (value.simpleName === 'ResourceRegistryCommonImpl') {\n          unsafeWindow.ResourceRegistryCommonImpl = this;\n          setTimeout(() => {\n            delete Object.prototype.$metadata$;\n            const func = Object.entries(this.prototype)[2][0];\n            this.prototype[`${func}_copy`] = this.prototype[func];\n            this.prototype[func] = function () {\n              if (!this.resources) {\n                __this__.resources = Object.values(this)[2];\n                __this__.resources.__proto__.remove = Object.values(__this__.resources.__proto__)[8];\n                __this__.resources.__proto__.get = Object.values(__this__.resources.__proto__)[3];\n              }\n              return this[`${func}_copy`].apply(this, arguments);\n            };\n          }, 100);\n        }\n        if (value.simpleName === 'World') {\n          setTimeout(() => {\n            const reset = Object.entries(this.prototype)[35][0];\n            this.prototype[`${reset}_copy`] = this.prototype[reset];\n            this.prototype[reset] = function () {\n              __this__.reloadableResources.forEach(resource => {\n                resource = __this__.utils.toLong(resource);\n                while (__this__.resources.get(resource)) {\n                  console.log(resource);\n                  __this__.resources.remove(resource);\n                }\n              });\n              __this__.currentMap = '';\n              return this[`${reset}_copy`].apply(this, arguments);\n            };\n          }, 100);\n        }\n        if (value.simpleName === 'Long') unsafeWindow.Long = this;\n      },\n      get: () => ({})\n    });\n  }\n}\nunsafeWindow.legacy = new Core();\n\n//# sourceURL=webpack://PixelPast/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Utils)\n/* harmony export */ });\nclass Utils {\n  toLong = str => {\n    const number = BigInt(str),\n      divisor = 4294967296n,\n      low = Number(BigInt.asIntN(32, number % divisor)),\n      high = Number(BigInt.asIntN(32, number / divisor));\n    return new Long(low, high);\n  };\n  decodeResourceUrl = url => {\n    let resPath = url.match(/resources\\/(\\d+\\/\\d+\\/\\d+\\/\\d+\\/\\d+)/)?.[1];\n    if (!resPath) return;\n    let parts = resPath.split('/').map(n => parseInt(n, 8));\n    let version = parts[4];\n    let idHigh = parts[0];\n    let idLow = parts[1] << 16 | parts[2] << 8 | parts[3];\n    return {\n      version: version,\n      high: idHigh,\n      low: idLow\n    };\n  };\n  overrideAtlas = (core, resources, mapsWhiteList, from, to) => {\n    const map = to.split('/').at(-2);\n    !mapsWhiteList.includes(map) && mapsWhiteList.push(map);\n    resources.push({\n      from: from,\n      to: to,\n      external: true,\n      callback: () => (core.currentMap = map, true)\n    });\n  };\n  overrideModel = (core, resources, mapsWhiteList, from, to) => resources.push({\n    from: from,\n    to: to,\n    external: true,\n    callback: () => {\n      if (!core.currentMap) return;\n      for (let index = mapsWhiteList.length - 1; index >= 0; index--) {\n        if (mapsWhiteList[index].toUpperCase() === core.currentMap.toUpperCase()) return true;\n      }\n    }\n  });\n  overrideHullOrTurret = (resources, from, to, external = false) => resources.push({\n    from: from + 'meta.info',\n    to: to + 'meta.info',\n    external: external\n  }, {\n    from: from + 'object.3ds',\n    to: to + 'object.3ds',\n    external: external\n  }, {\n    from: from + 'lightmap.webp',\n    to: to + 'lightmap.webp',\n    external: external\n  });\n}\n\n//# sourceURL=webpack://PixelPast/./src/utils.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"type\":\"module\",\"devDependencies\":{\"@babel/core\":\"^7.22.9\",\"@babel/preset-env\":\"^7.22.9\",\"@webpack-cli/generators\":\"^3.0.7\",\"babel-loader\":\"^9.1.3\",\"prettier\":\"^2.8.8\",\"webpack\":\"^5.88.2\",\"webpack-cli\":\"^5.1.4\"},\"version\":\"1.0.1\",\"name\":\"PixelPast\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sheezzmee/PixelPast.git\"},\"usercontent\":\"https://raw.githubusercontent.com/sheezzmee/PixelPast/main\",\"author\":\"sheezzmee\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/sheezzmee/PixelPast/issues\"},\"homepage\":\"https://github.com/sheezzmee/PixelPast#readme\",\"scripts\":{\"build\":\"webpack --mode=production --node-env=production\",\"build:dev\":\"webpack --mode=development\",\"build:prod\":\"webpack --mode=production --node-env=production\",\"watch\":\"webpack --watch\"}}');\n\n//# sourceURL=webpack://PixelPast/./package.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;