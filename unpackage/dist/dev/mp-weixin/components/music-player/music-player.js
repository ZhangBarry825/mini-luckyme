(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/music-player/music-player"],{

/***/ 38:
/*!*****************************************************************************!*\
  !*** E:/MyProject/UniApps/luckyme/components/music-player/music-player.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music-player.vue?vue&type=template&id=000e1590& */ 39);
/* harmony import */ var _music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-player.vue?vue&type=script&lang=js& */ 41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _music_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-player.vue?vue&type=style&index=0&lang=scss& */ 43);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__["render"],
  _music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "E:/MyProject/UniApps/luckyme/components/music-player/music-player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/*!************************************************************************************************************!*\
  !*** E:/MyProject/UniApps/luckyme/components/music-player/music-player.vue?vue&type=template&id=000e1590& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music-player.vue?vue&type=template&id=000e1590& */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_template_id_000e1590___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 40:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/MyProject/UniApps/luckyme/components/music-player/music-player.vue?vue&type=template&id=000e1590& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var f0 = _vm._f("timeFormat")(_vm.currentTime)

  var f1 = _vm._f("timeFormat")(_vm.duration)

  var m0 = __webpack_require__(/*! ../../static/images/order.png */ 50)

  var m1 = __webpack_require__(/*! ../../static/images/loop.png */ 58)

  var m2 = __webpack_require__(/*! ../../static/images/left.png */ 51)

  var m3 = __webpack_require__(/*! ../../static/images/play.png */ 52)

  var m4 = __webpack_require__(/*! ../../static/images/pause.png */ 57)

  var m5 = __webpack_require__(/*! ../../static/images/right.png */ 53)

  var m6 = __webpack_require__(/*! ../../static/images/list.png */ 54)

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        f0: f0,
        f1: f1,
        m0: m0,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
        m6: m6
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 41:
/*!******************************************************************************************************!*\
  !*** E:/MyProject/UniApps/luckyme/components/music-player/music-player.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music-player.vue?vue&type=script&lang=js& */ 42);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 42:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/MyProject/UniApps/luckyme/components/music-player/music-player.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var MusicList = function MusicList() {__webpack_require__.e(/*! require.ensure | components/music-player/music-list */ "components/music-player/music-list").then((function () {return resolve(__webpack_require__(/*! components/music-player/music-list */ 59));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
























































{
  name: 'MusicPlayer',
  components: {
    MusicList: MusicList },

  data: function data() {
    return {
      poster: 'https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/logo.jpg',
      name: '武林外传',
      author: '第一回',
      src: '',
      nowPlay: 1,
      progress: 0,
      playStatus: 0,
      loop: 0,
      animationData: {}, //旋转动画
      currentTime: 0,
      duration: 0,
      isListShow: false,
      titles: [
      "1、 郭女侠怒砸同福店，佟掌柜妙点迷路人",
      "2、 掌柜的慰问装病者，跑堂人收拾寻衅女",
      "3、 众夥计沦为小跟班，莫小贝建起八大派",
      "4、 李厨子智斗瞎老娘，白盗圣惨遇赌大王",
      "5、 展红纹千裏定扒手，郭芙蓉一心迷盗圣",
      "6、 杨蕙兰比武招郎君，李大嘴施招毙煞神",
      "7、 讨银钱秀才苦费心，泄私愤芙蓉恶作剧",
      "8、 七侠古镇寡妇寻夫，尚儒客栈众人聚首",
      "9、 佟湘玉煞费良苦心，莫小贝梦游影视城",
      "10、壮怂胆捕头喝烈酒，施恩惠秀才偷剩菜",
      "11、瘪十娘撒娇勾展堂，赛貂蝉耍赖讹湘玉",
      "12、受委屈夥计装叛变，求生意老板充大方",
      "13、争自尊大嘴充文豪，解危难湘玉设大局",
      "14、邢捕头勇破杀鸡案，燕小六力推防贼法",
      "15、雷老五潜入县衙门，佟掌柜钻进牛角尖",
      "16、为骗财书商耍手段，欲销赃掌柜吓破胆",
      "17、莫小贝初学衡山派，钱夫人再闹同福店",
      "18、燕小六酒醉乱抓人，郭芙蓉心痴错定情",
      "19、李大嘴苦练降龙掌，郭芙蓉难逃生死劫",
      "20、泼皮侯三搅和客栈，女侠芙蓉操办过年",
      "21、寻短见老五见魔女，赌怨气小郭教武功",
      "22、佟掌柜喜获榴连果，江小道怒打无情郎",
      "23、买私盐厨子遭盘查，换身份贼头变捕快",
      "24、算命人作法被识破，郭芙蓉洗面遭毁容",
      "25、佟老爹怒嫁不孝女，白展堂误娶无情人",
      "26、求休书小郭盼断肠，思佳人秀才伤透心",
      "27、入丐帮老邢丢公职，升捕头小六打官腔",
      "28、钱夫人贪财生毒计，莫小贝雪耻怒报官",
      "29、吕圣人智斗姬无命，佟掌柜火拼展红绫",
      "30、佟石头离乡闯江湖，郭芙蓉回家探父母",
      "31、痴秀才思念郭芙蓉，醋湘玉刁难祝无双",
      "32、拼厨艺大嘴成碎催，遇良才诸葛传衣钵",
      "33、西域客欲擒关中侠，涉奇险盗圣救人质",
      "34、受邀请小贝赴衡山，为情困秀才抱错人",
      "35、小魔女执意做红娘，佟湘玉一心修剑谱",
      "36、遇追风盗圣吓破胆，见芙蓉秀才惊断魂",
      "37、心不甘小郭拼才艺，情不愿无双走天涯",
      "38、迎挑战小贝当掌柜，出狠招湘玉赢赌局",
      "39、吕秀才得理不饶人，郭芙蓉自食苦月饼",
      "40、庆中秋好梦一日游，历磨难客栈重聚首",
      "41、痴情汉重逢梦中人，糊涂女初识菜刀门",
      "42、燕小六大摆迷魂阵，千面人关底显真身",
      "43、恶婆婆率众闹洞房，善媳妇受虐一身伤",
      "44、吕秀才误收嗜血徒，白展堂临终吐心声",
      "45、通缉犯转眼成病患，阶下囚洗心重做人",
      "46、神秘客夜访七侠镇，莫掌门血战灯市街",
      "47、小姐妹重逢暗叫劲，老夫妻患难见真情",
      "48、败家女随口开条件，穷哥俩合伙办武馆",
      "49、慕容嫣专访莫掌门，吕秀才定义真侠士",
      "50、刑捕头变身小杂役，燕小六临别显真情",
      "51、采花盗意外现真身，虎外甥作媒为报恩",
      "52、佟石头初尝爱滋味，祝无双投身六扇门",
      "53、燕捕头研发绝密令，包侍郎得理不饶人",
      "54、苦刑犯逃离同福店，黑衣人解救倒霉蛋",
      "55、佟掌柜沦为十六姨，包大仁欢渡洞房夜",
      "56、展侍卫私放真刺客，祝无双泪别假卧底",
      "57、李大嘴装疯孵鸡蛋，吕秀才变身四龄童",
      "58、小师妹现身七侠镇，大师姐难解心头愤",
      "59、佟掌柜魂归小西天，睡美人变身火凤凰",
      "60、李大嘴入室成劫匪，佟湘玉狠心弃情郎",
      "61、前女友盘查私房钱，局外人识错苦肉计",
      "62、旧爱已成如烟往事，新欢直面惨淡人生",
      "63、白展堂重回老地方，佟湘玉折磨新跑堂",
      "64、白展堂受累入冤狱，王豆豆为爱跑断腿",
      "65、小跑堂患上失忆症，老情人千里送相思",
      "66、郭蔷薇信口传谣言，燕小六夜祭一二三",
      "67、吕秀才练成点穴手，郭芙蓉含恨归故里",
      "68、祝无双诚觅心上人，辛普森设计娶贤妻",
      "69、佟掌柜收到诅咒信，神算子梦断同福店",
      "70、赛貂婵沦为小丫环，佟湘玉卖店赎仇人",
      "71、吕秀才流连吉庆街，金湘玉巧设惊魂计",
      "72、佟掌柜假意改前非，白展堂答错选择题",
      "73、柳星雨夜遇莽郎君，李大嘴情定美娇娘",
      "74、柳月云夜投迷魂散，祝无双怒斥冷面人",
      "75、李大嘴拒演凤求凰，燕小六假礼寄真情",
      "76、莫小贝街头遭绑架，燕小六智擒假绑匪",
      "77、谢捕头盘查店中人，钱夫人巧取同福店",
      "78、杨蕙兰酒后诉衷肠，杜子俊夜访同福店",
      "79、李大嘴遭遇老情敌，杨蕙兰展开新人生",
      "80、燕小六接到调职令，凌腾云夜袭同福店",
      "81、未命名"] };


  },
  filters: {
    timeFormat: function timeFormat(time) {
      var minutes = parseInt(time / 60);
      var seconds = parseInt(time % 60);
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return minutes + ':' + seconds;
    } },

  methods: {
    /*旋转*/
    animationPlay: function animationPlay() {
      // let animation = uni.createAnimation({
      //     duration: 10000,
      //     timingFunction: 'linear',
      // })
      // this.animation = animation
      // animation.rotate(360).step()
      // this.animationData = animation.export()
    },
    /*列表*/
    listShow: function listShow() {
      this.isListShow = !this.isListShow;
    },
    togglePlay: function togglePlay() {
      if (!this.playStatus) {
        this.audioCtx.play();
        console.log('播放');
        this.animationPlay();
      } else {
        this.audioCtx.pause();
        console.log('暂停');
      }
      this.playStatus = !this.playStatus;
    },
    /*播放*/
    audioPlay: function audioPlay() {
      this.audioCtx.play();
    },
    /*上一曲*/
    audioLast: function audioLast() {
      if (this.nowPlay > 1) {
        this.audioSelect(this.nowPlay - 1);
        console.log(this.nowPlay);
      }
    },
    /*下一曲*/
    audioNext: function audioNext() {
      this.audioSelect(this.nowPlay + 1);
      console.log(this.nowPlay);
    },
    /*选曲*/
    audioSelect: function audioSelect(num) {var _this = this;
      this.isListShow = false;
      this.nowPlay = num;
      this.audioCtx.src = 'https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/' + num + '.m4a';
      this.audioCtx.onCanplay(function () {
        console.log('准备就绪');
        _this.audioPlay();
        _this.playStatus = 1;
        _this.currentTime = _this.audioCtx.currentTime;
        _this.duration = _this.audioCtx.duration;
      });
    },
    /*暂停*/
    audioPause: function audioPause() {
      this.audioCtx.pause();
    },
    /*跳过开头*/
    audioJump: function audioJump() {
      this.audioCtx.seek(105);
      this.audioPlay();
    },
    /*重播*/
    audioStart: function audioStart() {
      this.audioCtx.seek(0);
      this.audioPlay();
    },
    /*跳到结尾*/
    audioEnd: function audioEnd() {
      this.audioCtx.seek(this.duration - 5);
    },
    /*time更新触发*/
    audioTimeupdate: function audioTimeupdate() {
      this.progress = this.audioCtx.currentTime / this.audioCtx.duration * 100;
      this.currentTime = this.audioCtx.currentTime;
    },

    /*循环*/
    audioLoop: function audioLoop() {
      this.loop = !this.loop;
      var tip = '循环播放';
      if (!this.loop) {
        tip = '顺序播放';
      }
      uni.showToast({
        title: tip,
        duration: 2000,
        icon: 'none',
        position: 'bottom' });

    } },

  mounted: function mounted() {var _this2 = this;
    this.audioCtx = uni.createInnerAudioContext('myAudio');
    this.audioCtx.autoplay = false;

    this.audioCtx.src = 'https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/' + this.nowPlay + '.m4a';
    this.audioCtx.onTimeUpdate(function (e) {
      _this2.audioTimeupdate();
    });
    this.audioCtx.onEnded(function (e) {
      if (!_this2.loop) {
        _this2.audioNext();
      } else {
        _this2.audioStart();
      }
      console.log('结束啦');
    });

    this.audioCtx.onPlay(function () {
      _this2.duration = _this2.audioCtx.duration;
      console.log(_this2.audioCtx);
      console.log('开始播放');
    });
    this.audioCtx.onError(function (res) {
      console.log(res.errMsg);
      console.log(res.errCode);
    });
    // this.audioCtx.play();


    console.log(this.$store.state.MusicPlayStatus);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 43:
/*!***************************************************************************************************************!*\
  !*** E:/MyProject/UniApps/luckyme/components/music-player/music-player.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music-player.vue?vue&type=style&index=0&lang=scss& */ 44);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 44:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/MyProject/UniApps/luckyme/components/music-player/music-player.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/music-player/music-player.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/music-player/music-player-create-component',
    {
        'components/music-player/music-player-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(38))
        })
    },
    [['components/music-player/music-player-create-component']]
]);
