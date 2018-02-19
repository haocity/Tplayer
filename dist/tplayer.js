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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * this.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author   HaoDong <ureygt@gmail.com> <http://www.haotown.cn>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license  The Star And Thank Author License (SATA)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _html = __webpack_require__(1);

var _html2 = _interopRequireDefault(_html);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_html2.default.test();

var hasClass = function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};

var addClass = function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
};

var removeClass = function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
};

function xhr(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    return new Promise(function (res, rej) {
        try {
            var _xhr = new XMLHttpRequest();
            _xhr.onreadystatechange = function () {
                if (_xhr.readyState == 4 && _xhr.status == 200) {
                    res(_xhr.responseText);
                } else if (_xhr.readyState == 4) {
                    rej(_xhr.status);
                }
            };
            _xhr.open(method, url, true);
            _xhr.send(data);
        } catch (e) {}
    });
}

var Tplayer = function () {
    function Tplayer(options) {
        _classCallCheck(this, Tplayer);

        var _this = this;
        this.options = options;

        console.log(this.options);
        this.warp = this.options.Element;

        this.geturl = this.options.danmakuapi + "get/?id=" + this.options.danmakuid;
        this.sendurl = this.options.danmakuapi + "send/";
        this.adddanmaku(this.geturl);
        this.data = new Array();
        //	this.data=this.options.danmaku
        //  this.nowdata = JSON.parse(this.data).danmaku

        this.vloop = false;
        this.nowduan = 0;
        this.v = _html2.default.main();
        this.warp.innerHTML = this.v;
        this.bar = false;

        this.ele = {
            "tplayer": _this.$c(".tplayer")[0],
            "tplayer_main": _this.$c(".tp-video-main")[0],
            "danmaku_switch": _this.$c(".tp-danmaku-switch")[0],
            "tp_text": _this.$c(".tp-text")[0],
            "tp_up": _this.$c(".tp-up")[0],
            "tp_color_bo": _this.$c(".tp-color-bo")[0],
            "video_control_play": _this.$c(".tp-control-play")[0],
            "tp_oneplay": _this.$c(".tp-oneplay")[0],
            "danmaku_warp": _this.$c(".danmaku-warp")[0],
            "video_con": _this.$c(".tp-video-con")[0],
            "video_control_paused": _this.$c(".tp-control-paused")[0],
            "tp_s_w": _this.$c(".tp-s-tranger")[0],
            "tp_s": _this.$c(".tp-s-tranger-a")[0],
            "alltime": _this.$c(".tp-control-alltime")[0],
            "tranger_a": _this.$c(".tp-tranger-a")[0],
            "tranger_c": _this.$c(".tp-tranger-c")[0],
            "nowtime": _this.$c(".tp-control-nowtime")[0],
            "tp_spinner": _this.$c(".tp-spinner")[0],
            "full": _this.$c(".video-full")[0],
            "tp_con": _this.$c(".tp-con")[0],
            "tp_color_warp": _this.$c(".tp-color-warp")[0],
            "tp_place": _this.$c(".tp-place")[0],
            "tp_send": _this.$c(".tp-send")[0],
            "tranger": _this.$c(".tp-tranger")[0],
            "tp_speend_con": _this.$c(".tp-speend-con")[0],
            "tp_speend": _this.$c(".tp-speend")[0],
            "tp_video_warp": _this.$c(".tp-video-warp")[0],
            "tp_rightmenu": _this.$c(".tp-rightmenu")[0],
            "end": _this.$c(".video-end")[0],
            "replay": _this.$c(".replay")[0],
            "copy": _this.$c(".tp-copy-warp")[0],
            "copytext": _this.$c(".tp-copy-input")[0],
            "alltime_phone": _this.$c(".tp-control-alltime-phone")[0],
            "vloop": _this.$c('.tp-vloop')[0],
            "setbox": _this.$c('.tp-video-set')[0],
            "setclose": _this.$c('.tp-closeset')[0],
            "setbtn": _this.$c('.tp-set')[0],
            "setr1": _this.$c(".tp-s-r1")[0],
            "setr2": _this.$c(".tp-s-r2")[0],
            "setr3": _this.$c(".tp-s-r3")[0],
            "setr4": _this.$c(".tp-s-r4")[0],
            "setr5": _this.$c(".tp-s-r5")[0],
            "setr6": _this.$c(".tp-s-r6")[0],
            "setr7": _this.$c(".tp-s-r7")[0],
            "setr8": _this.$c(".tp-s-r8")[0],
            "video_ratio": _this.$c(".tp-ratio")[0],
            "alert": _this.$c(".tp-alert")[0],
            "alert_container": _this.$c(".tp-alert-container")[0],
            "alert_ok": _this.$c(".tp-alert-ok")[0],
            "screenshot": _this.$c(".tp-screenshot")[0],
            "definition": _this.$c(".tp-definition")[0]
        };
        if (document.querySelector('.tp-css')) {
            this.ele.css = document.querySelector('.tp-css');
        } else {
            this.ele.css = document.createElement('style');
            this.ele.css.type = 'text/css';
            this.ele.css.className = 'tp-css';
            document.body.appendChild(this.ele.css);
        }

        if (localStorage.getItem('tdconfig') && localStorage.getItem('tdconfig') != "undefined") {
            this.config = JSON.parse(localStorage.getItem('tdconfig'));
            console.log('加载设置成功');
        } else {
            this.config = new Object();
        }
        this.changerconfig();
        //判断地址类型
        if (_typeof(this.options.video.url[0]) == 'object') {
            var src = this.options.video.url;
            console.log('多清晰度视频');
            var t = this.config.definition;
            var vv = void 0,
                ele = void 0;
            ele = document.createElement('ul');
            for (var i in src[0]) {
                if (src[0][i].v == t) {
                    vv = src[0][i];
                }
                var li = document.createElement('li');
                li.v = src[0][i].v;
                li.vsrc = src[0][i].m3u8;
                li.addEventListener('click', function () {
                    console.log('正在为你切换清晰度切换' + this.v);
                    this.alert({ t: '<span style="line-height:26px;font-size: 21px;">正在为你切换清晰度..</span>', time: 3000, padding: '6px 10px', opacity: "0.9" });
                    _this.ele.definition.querySelector('span').innerHTML = _this.Definition(this.v);
                    var time = _this.Element.currentTime;
                    var hls = new Hls();
                    hls.loadSource(this.vsrc);
                    hls.attachMedia(_this.Element);
                    hls.on(Hls.Events.MANIFEST_PARSED, function () {
                        var i = true;
                        _this.Element.addEventListener("canplay", function () {
                            if (i) {
                                i = false;
                                _this.tiao(time);
                            }
                        });
                        _this.Element.style.display = 'block';
                    });
                }, false);
                li.innerHTML = _this.Definition(li.v);
                ele.appendChild(li);
            }
            if (!vv) {
                if (src[0].v1) {
                    vv = src[0].v1;
                } else if (src[0].v2) {
                    vv = src[0].v2;
                } else if (src[0].v3) {
                    vv = src[0].v3;
                } else if (src[0].v4) {
                    vv = src[0].v4;
                }
            }
            this.videosrcarr = [vv.m3u8];
            //创建清晰度菜单
            this.ele.definition.querySelector('span').innerHTML = _this.Definition(vv.v);
            this.ele.definition.appendChild(ele);
            this.ele.definition.style.display = 'block';
            this.ele.definition.ul = this.ele.definition.querySelector('ul');
            this.ele.definition.ul.style.display = 'none';
            this.ele.definition.addEventListener('click', function () {
                if (_this.ele.definition.ul.style.display == 'block') {
                    _this.ele.definition.ul.style.display = 'none';
                } else {
                    _this.ele.definition.ul.style.display = 'block';
                }
            });
        } else if (typeof this.options.video.url == "string") {
            this.videosrcarr = new Array(this.options.video.url);
        } else {
            this.videosrcarr = this.options.video.url;
        }

        if (this.options.video.type == "flv") {
            var video = document.createElement("video");
            var arr = new Array();
            for (var _i = 0; _i < this.videosrcarr.length; _i++) {
                arr.push({ url: this.videosrcarr[_i] });
            }
            if (flvjs && flvjs.isSupported()) {
                console.log('这是flv视频 启动加载');
                var flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    segments: arr
                });
                flvPlayer.attachMediaElement(video);
                flvPlayer.load();
                this.Element = video;
                video.className = "tp-video";
                video.preload = "auto";
                this.ele.tplayer.appendChild(video);
            } else {
                console.error("请预先加载flv.js");
            }
        } else {
            for (var _i2 = 0; _i2 < this.videosrcarr.length; _i2++) {
                var _video = document.createElement("video");
                if (this.options.video.type == "hls") {
                    if (hls && hls.isSupported()) {
                        console.log('这是hls视频 启动加载');
                        var _hls = new Hls();
                        _hls.loadSource(this.videosrcarr[_i2]);
                        _hls.attachMedia(_video);
                        _hls.on(Hls.Events.MANIFEST_PARSED, function () {
                            console.log('可以开始加载');
                            if (this.options.video.autoplay) {
                                this.play();
                            }
                        });
                    } else {
                        console.error("请预先加载hls.js");
                    }
                } else {
                    _video.src = this.videosrcarr[_i2];
                }
                _video.className = "tp-video";
                if (_i2 != 0) {
                    _video.style.display = "none";
                    _video.preload = "meta";
                } else {
                    _video.preload = "auto";
                    this.Element = _video;
                }

                this.ele.tplayer.appendChild(_video);
            }
        }
        //封面
        if (this.options.video.pic) {
            this.Element.poster = this.options.video.pic;
        }
        this.danmakuelement = this.ele.danmaku_warp;
        this.sjc = 0;
        this.dsq = 0;
        this.leftarr = { t: [], v: [], leaving: [], width: [] };
        this.toparr = [];
        this.dmheight = 37;
        this.dmplace = 1;
        if (/android/i.test(navigator.userAgent) || /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            this.istouch = 1;
            this.ele.video_con.style.opacity = '1';
            this.ele.video_con.style.display = 'none';
        } else {
            this.istouch = 3; //1.触摸 2.鼠标 3.可能为鼠标设备
        }
        //弹幕行高
        this.width = this.ele.tplayer_main.offsetWidth;
        this.height = this.ele.tplayer_main.offsetHeight;

        this.init();
    }

    _createClass(Tplayer, [{
        key: 'init',
        value: function init() {
            var _this3 = this;

            var _this = this;

            this.Element.addEventListener("canplaythrough", function () {
                console.log('加载完成 可以进行播放');
            });
            this.videoelearr = this.ele.tplayer.getElementsByTagName("video");
            this.videotimearr = [];
            for (var i = 0; i < this.videoelearr.length; i++) {
                this.getallvideotime(this.videoelearr[i], i);
            }

            //样式
            this.send = function (text, color, wz, me, user, size) {
                var _this2 = this;

                var dm = document.createElement("div");
                dm.user = user;
                dm.style.color = color;
                dm.style.fontSize = size + 'px';
                if (me) {
                    dm.style.border = "1px solid #fff";
                }
                if (wz == 1) {
                    //left 弹幕
                    dm.appendChild(document.createTextNode(text));
                    dm.className = "danmaku tp-left";
                    if (this.config.danmakusize) {
                        dm.style.transform = "translateX(-" + this.width / this.config.danmakusize + "px)";
                    } else {
                        dm.style.transform = "translateX(-" + this.width + "px)";
                    }
                    this.ele.danmaku_warp.appendChild(dm);
                    var twidth = dm.offsetWidth;
                    var _time = this.width / 100;
                    var v = (twidth + this.width) / _time;
                    var dmtop = this.getlefttop(v, twidth);
                    var leavetime = twidth / v;
                    this.leftarr.leaving[dmtop] = true;

                    if ((dmtop + 1) * this.dmheight < this.height) {
                        dm.style.display = 'block';
                        setTimeout(function () {
                            _this.leftarr.leaving[dmtop] = false;
                        }, leavetime * 1000 + 200);
                        dm.style.top = dmtop * this.dmheight + "px";

                        dm.addEventListener("webkitAnimationEnd", function () {
                            _this.dmend(dm);
                        });
                        dm.addEventListener("animationend", function () {
                            _this.dmend(dm);
                        });
                    } else {
                        this.leftarr.leaving[dmtop] = false;
                        this.dmend(dm);
                        console.log('超出屏幕范围', this.height);
                    }
                } else if (wz == 2) {
                    //顶部弹幕
                    dm.appendChild(document.createTextNode(text));

                    dm.className = "danmaku tp-top";
                    var dtop = this.gettoptop();
                    dm.style.top = dtop * this.dmheight + "px";
                    this.toparr[dtop] = 1;
                    var e = this.ele.danmaku_warp.appendChild(dm);
                    setTimeout(function () {
                        _this.danmakuhide(e, dtop);
                    }, 5e3);
                } else if (wz == 7) {
                    (function () {
                        var tj = JSON.parse(text);
                        console.log('高级弹幕', tj);
                        //时间如果为0
                        if (!tj.l || tj.l.toFixed(2) == 0) {
                            tj.l = 0;
                        }
                        var nowtime = tj.l;
                        if (tj.z) {
                            var _loop = function _loop(_i3) {
                                var a = _i3;
                                setTimeout(function () {
                                    dm.style.transition = "all " + tj.z[a].l + 's';
                                    //console.log('到达动画时间',a,dm);
                                    setTimeout(function () {
                                        if (tj.z[a].x) {
                                            //console.log('x2存在',tj.z[a].x)
                                            dm.style.right = (1000 - tj.z[a].x) / 10 + '%';
                                        }
                                        if (tj.z[a].y) {
                                            //console.log('y2存在',tj.z[a].y)
                                            dm.style.bottom = (1000 - tj.z[a].y) / 10 + '%';
                                        }
                                        if (tj.z[a].t) {
                                            dm.style.opacity = tj.z[a].t;
                                        }
                                        if (tj.z[a].f || tj.z[a].g || tj.z[a].rx || tj.z[a].e) {
                                            tj.z[a].f = tj.z[a].f || 0;
                                            tj.z[a].g = tj.z[a].g || 0;
                                            tj.z[a].rx = tj.z[a].rx || 0;
                                            tj.z[a].e = tj.z[a].e || 0;
                                            dm.style.transform = 'scale(' + tj.z[a].f + ',' + tj.z[a].g + ') skew(' + tj.z[a].rx + 'deg,' + tj.z[a].e + 'deg) translateX(50%)';
                                        }
                                    }, 0);
                                }, nowtime * 1000);
                                if (tj.z[_i3].l) {
                                    nowtime = nowtime + tj.z[_i3].l;
                                }
                            };

                            //console.log('z存在', tj.z);
                            for (var _i3 = 0; _i3 < tj.z.length; _i3++) {
                                _loop(_i3);
                            }
                        } else {
                            tj.l = 2;
                        }

                        //高级弹幕 test 
                        //{"e":0.52,"w":{"b":false,"l":[[1,16777215,1,2.7,2.7,5,3,false,false],[2,0,0,16777215,0.5,32,32,2,2,false,false,false]],"f":"黑体"},"l":5.551115123125783e-17,"f":0.52,"z":[{"t":0,"g":0.8,"l":0.2,"y":930,"f":0.8},{"t":1,"g":0.52,"l":0.2,"y":940,"f":0.52},{"l":1.3099999999999998},{"c":16776960,"x":-2,"t":0,"l":0.3,"v":2}],"t":0,"a":0,"n":"但是那样不行哦","ver":2,"b":false,"c":3,"p":{"x":35,"y":950},"ovph":false}
                        dm.className = "danmaku danmaku-ad";
                        if (tj.w) {
                            dm.style.fontFamily = tj.w.f;
                        }
                        if (tj.n) {
                            dm.appendChild(document.createTextNode(tj.n));
                        }
                        if (tj.p) {
                            dm.style.right = (1000 - tj.p.x) / 10 + '%';
                            dm.style.bottom = (1000 - tj.p.y) / 10 + '%';
                        }
                        if (tj.a) {
                            dm.style.opacity = tj.a;
                        }
                        if (tj.e || tj.f || tj.rx || tj.rx || tj.k) {
                            tj.e = tj.e || 0;
                            tj.f = tj.f || 0;
                            tj.rx = tj.rx || 0;
                            tj.k = tj.k || 0;
                            dm.style.transform = 'scale(' + tj.e + ',' + tj.f + ') skew(' + tj.rx + 'deg,' + tj.k + 'deg) translateX(50%)';
                        }

                        var e = _this2.ele.danmaku_warp.appendChild(dm);
                        setTimeout(function () {
                            _this.danmakuhide(e);
                        }, nowtime * 1000 - 10);
                    })();
                }
            };

            //重播
            this.ele.replay.addEventListener("click", function () {
                _this.tiao(0);
                _this.ele.end.style.display = "none";
            });

            //播放完成

            var _loop2 = function _loop2(arg) {
                _this3.videoelearr[arg].onended = function () {
                    if (_this.videoelearr[arg + 1]) {
                        _this.nowduan = arg + 1;
                        var oldele = _this.videoelearr[arg];
                        var nowele = _this.videoelearr[arg + 1];
                        for (var _i12 = 0; _i12 < _this.videoelearr.length; _i12++) {
                            if (_i12 != _this.nowduan) {
                                var ele = _this.videoelearr[_i12];
                                if (ele.style.display != "none") {
                                    ele.style.display = "none";
                                }
                                ele.currentTime = 0;
                                ele.pause();
                            } else {
                                var _ele = _this.videoelearr[_i12];
                                _this.Element = _ele;
                                _ele.style.display = "block";
                                _ele.currentTime = 0;
                                _ele.play();
                            }
                        }
                        _this.changersound();
                    } else {
                        console.log("播放完毕" + arg);
                        if (_this.vloop) {
                            _this.tiao(0);
                        } else {
                            _this.ele.end.style.display = 'block';
                            _this.leftarr = { t: [], v: [], leaving: [], width: [] };
                            _this.toparr = [];
                            var arr = _this.$c('.danmaku');
                            for (var _i13 = arr.length - 1; _i13 >= 0; _i13--) {
                                arr[_i13].parentNode.removeChild(arr[_i13]);
                            }
                        }
                    }
                };
            };

            for (var arg = 0; arg < this.videoelearr.length; arg++) {
                _loop2(arg);
            }
            //post发弹幕
            this.ele.tp_up.addEventListener("click", function () {
                if (_this.ele.tp_text.value) {
                    _this.send(_this.ele.tp_text.value, _this.ele.tp_color_bo.style.backgroundColor, _this.dmplace, 1);
                    _this.ele.tp_text.readonly = "readonly";
                    _this.ele.tp_up.disabled = "true";
                    _this.ele.tp_up.style.background = "#777479";
                    setTimeout(function () {
                        _this.ele.tp_text.value = "";
                        _this.ele.tp_up.disabled = "";
                        _this.ele.tp_up.style.background = "#8715EF";
                    }, 500);
                    var postData = {
                        id: _this.options.danmakuid,
                        text: _this.ele.tp_text.value,
                        color: _this.ele.tp_color_bo.style.backgroundColor,
                        time: parseInt(_this.getnowtime() * 10),
                        place: _this.dmplace
                    };

                    postData = function (obj) {
                        // 转成post需要的字符串.
                        var str = "";
                        for (var prop in obj) {
                            str += prop + "=" + obj[prop] + "&";
                        }
                        return str;
                    }(postData);
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", _this.options.danmakuapi + "send/", true);
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.onreadystatechange = function () {
                        var XMLHttpReq = xhr;
                        if (XMLHttpReq.readyState == 4) {
                            if (XMLHttpReq.status == 200) {
                                var text = XMLHttpReq.responseText;
                                console.log(text);
                            }
                        }
                    };
                    xhr.send(postData);
                }
            });
            //回车发射
            this.ele.tp_text.onkeydown = function (event) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e.keyCode == 13) {
                    _this.ele.tp_up.click();
                } else if (e.keyCode == 32) {
                    e.stopPropagation();
                }
            };
            //弹幕开关
            this.ele.danmaku_switch.addEventListener("click", function () {
                if (this.className == "tp-danmaku-switch") {
                    this.className = "tp-danmaku-switch tp-danmaku-switch-c";
                    _this.ele.danmaku_warp.style.opacity = 0;
                } else {
                    this.className = "tp-danmaku-switch";
                    _this.ele.danmaku_warp.style.opacity = null;
                }
            });

            this.ele.setr5.onclick = function () {
                if (this.checked) {
                    if (_this.removaldata) {
                        _this.nowdata = _this.removaldata;
                    } else {
                        _this.removaldanmaku();
                    }
                    _this.config.qc = true;
                } else {
                    _this.nowdata = _this.data.slice(0);
                    _this.config.qc = false;
                }
                localStorage.setItem('tdconfig', JSON.stringify(_this.config));
            };
            this.ele.setr6.onclick = function () {
                if (this.checked) {
                    _this.shielddanmaku();
                    _this.config.pb = true;
                } else {
                    _this.nowdata = _this.data.slice(0);
                    _this.config.pb = false;
                }
                _this.config.pbs = _this.ele.setr7.value;
                localStorage.setItem('tdconfig', JSON.stringify(_this.config));
            };
            this.ele.setr7.addEventListener('keydown', function (event) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e.keyCode) {
                    e.stopPropagation();
                }
            });
            this.ele.setr7.onchange = function () {
                if (_this.ele.setr6.checked) {
                    _this.shielddanmaku();
                }
            };
            this.ele.setr8.onchange = function () {
                var t = this.selectedIndex + 1;
                _this.config.definition = t;
            };
            this.ele.setr7.value = _this.config.pbs;

            this.ele.setr1.onchange = _this.changerset.bind(_this);
            this.ele.setr2.onchange = _this.changerset.bind(_this);
            this.ele.setclose.addEventListener('click', function () {
                _this.changerset.bind(_this);
                _this.config.pbs = _this.ele.setr7.value;
                localStorage.setItem('tdconfig', JSON.stringify(_this.config));
                addClass(_this.ele.setbox, 'tp-zoomoutdown');
                setTimeout(function () {
                    _this.ele.setbox.style.display = 'none';
                    removeClass(_this.ele.setbox, 'tp-zoomoutdown');
                }, 480);
            }, false);
            this.ele.setbtn.addEventListener('click', function () {
                if (_this.ele.setbox.style.display != 'block') {
                    _this.ele.setbox.style.display = 'block';
                    addClass(_this.ele.setbox, 'tp-zoomoutup');
                    setTimeout(function () {
                        _this.ele.setbox.className = 'tp-video-set';
                    }, 480);
                } else if (_this.ele.setbox.className == 'tp-video-set') {
                    _this.ele.setclose.click();
                }
            }, false);
            this.ele.setr3.onclick = function () {
                if (this.checked) {
                    _this.config.dmweight = 600;
                } else {
                    _this.config.dmweight = 400;
                }
                _this.changerconfig();
            };
            this.ele.setr4.onclick = function () {
                if (this.checked) {
                    _this.config.dmshadow = 0;
                } else {
                    _this.config.dmshadow = 2;
                }
                _this.changerconfig();
            };

            //视频播放
            this.ele.video_control_play.addEventListener("click", function () {
                _this.play();
            });

            this.ele.tp_oneplay.addEventListener("animationend", function () {
                removeClass(this, 'tp-zoomoutdown');
                this.style.display = 'none';
            }, false);
            this.ele.tp_oneplay.addEventListener("webkitAnimationEnd", function () {
                removeClass(this, 'tp-zoomoutdown');
                this.style.display = 'none';
            }, false);
            //视频暂停
            this.ele.video_control_paused.addEventListener("click", function () {
                _this.pause();
            });

            this.ele.tp_oneplay.addEventListener("click", function () {
                addClass(this, 'tp-zoomoutdown');
                _this.play();
            });
            //鼠标隐藏
            this.ele.danmaku_warp.addEventListener('mousemove', function () {
                if (this.time) {
                    clearTimeout(this.time);
                }
                _this.ele.danmaku_warp.style.cursor = 'auto';
                this.time = setTimeout(function () {
                    _this.ele.danmaku_warp.style.cursor = 'none';
                }, 3000);
            });

            //触摸
            this.ele.danmaku_warp.addEventListener("touchend", function () {
                if (_this3.istouch != 1) {
                    _this3.istouch == 1;
                }
                var e = _this3.ele.video_con;
                if (e.style.display == "block") {
                    e.style.display = "none";
                    if (_this3.Element.paused) {
                        _this3.play();
                    } else {
                        _this3.pause();
                    }
                } else {
                    e.style.display = "block";
                    if (!_this3.Element.paused) {
                        _this3.pause();
                    }
                }
            });

            this.ele.alert_ok.addEventListener('click', function () {
                _this.ele.alert.style.display = 'none';
            }, false);
            this.ele.screenshot.addEventListener('click', function () {
                _this.ele.tp_rightmenu.style.display = 'none';
                _this.screenshot();
            }, false);

            this.sound = this.config.sound;
            if (this.sound) {
                this.ele.tp_s.style.width = this.sound + "%";
                this.Element.volume = parseInt(this.ele.tp_s.style.width) * .01;
            } else {
                this.ele.tp_s.style.width = "80%";
                this.changersound();
            }
            //循环按钮
            this.ele.vloop.onclick = function () {
                if (_this.vloop) {
                    _this.vloop = false;
                    this.className = 'tp-vloop tp-vloop1';
                } else {
                    _this.vloop = true;
                    this.className = 'tp-vloop tp-vloop2';
                }
            };
            //音量调节
            this.ele.tp_s_w.addEventListener("click", function (event) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                var xbl = _this.show_coords(e, this).xbl * 100;
                _this.ele.tp_s.style.width = xbl + "%";
                _this.changersound();
            }, false);

            //行走器
            this.Element.addEventListener('timeupdate', function () {
                var videotime = _this.getnowtime();
                var smalltime = _this.Element.currentTime;
                _this.ele.tranger_a.style.width = videotime / _this.alltime * 100 + "%";
                var buff = _this.Element.buffered;
                //判断缓存段
                var oldduan = _this.nowduan - 1,
                    oldtime = 0,
                    time2 = 0;
                for (var _i4 = 0; _i4 <= oldduan; _i4++) {
                    oldtime += _this.videotimearr[_i4];
                }
                if (buff.length) {
                    time2 = oldtime + buff.end(buff.length - 1);
                }
                var width = time2 / _this.alltime * 100 + "%";
                if (_this.ele.tranger_c.style.width != width) {
                    _this.ele.tranger_c.style.width = width;
                }
            }, false);

            //定时器二 1s执行一次
            setInterval(function () {
                var videotime = _this.getnowtime(videotime);
                //当前段播放将要结束 缓存下一段
                var temp = _this.videoelearr[_this.nowduan].currentTime;
                if (temp + 20 >= _this.videotimearr[_this.nowduan]) {
                    if (_this.videoelearr[_this.nowduan + 1]) {
                        if (_this.videoelearr[_this.nowduan + 1].preload != "auto") {
                            _this.videoelearr[_this.nowduan + 1].preload = "auto";
                            console.log("当前正在播放第" + _this.nowduan + "段，正在加载下一段");
                        }
                    }
                }
                _this.ele.nowtime.innerHTML = _this.getvideotime(videotime).m + ":" + _this.getvideotime(videotime).s;
            }, 1e3);

            //进度条
            this.ele.tranger.onmousedown = function (event) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                var xbl = _this.show_coords(e, this);
                _this.ele.tranger_a.style.width = xbl.xbl * 100 + "%";
                _this.tiao(xbl.xbl * _this.alltime);
            };

            for (var _i5 = 0; _i5 < this.videoelearr.length; _i5++) {
                this.videoelearr[_i5].addEventListener("waiting", function () {
                    _this.videohc();
                });
                this.videoelearr[_i5].addEventListener("playing", function () {
                    _this.tdplay();
                });
            }

            //键盘
            this.ele.tp_video_warp.addEventListener('click', function () {
                setTimeout(function () {
                    _this.ele.tp_video_warp.xz = true;
                }, 200);
            }, false);
            document.addEventListener('click', function (e) {
                if (e.target == _this.ele.danmaku_warp) {
                    _this.ele.tp_video_warp.xz = true;
                } else {
                    _this.ele.tp_video_warp.xz = false;
                }
            }, false);
            document.addEventListener("keydown", function (event) {
                var ev = event || window.event || arguments.callee.caller.arguments[0];
                if (_this.ele.tp_video_warp.xz == true) {
                    _this.showbar();
                    if (ev.keyCode == 39 || 37) {
                        if (_this.ele.end.style.display == "block") {
                            _this.ele.end.style.display = "none";
                        }
                    }
                    if (ev && ev.keyCode == 39) {
                        // right 键
                        var videotime = _this.getnowtime();
                        _this.tiao(videotime + 5);
                    }
                    if (ev && ev.keyCode == 37) {
                        // left 键
                        var _videotime = _this.getnowtime();
                        _this.tiao(_videotime - 5);
                    }
                    if (ev && ev.keyCode == 32) {
                        // space 键
                        event.preventDefault();
                        if (_this.ele.end.style.display == "block") {
                            _this.ele.end.style.display = "none";
                            _this.tiao(0);
                        } else if (_this.Element.paused) {
                            _this.play();
                        } else {
                            _this.pause();
                        }
                    }
                    if (ev && ev.keyCode == 38) {
                        // up 键
                        event.preventDefault();
                        _this.ele.tp_s.style.width = parseInt(_this.ele.tp_s.style.width) + 1 + "%";
                        _this.changersound();
                    }
                    if (ev && ev.keyCode == 40) {
                        // down 键
                        event.preventDefault();
                        _this.ele.tp_s.style.width = parseInt(_this.ele.tp_s.style.width) - 1 + "%";
                        _this.changersound();
                    }
                }
            });

            this.ele.full.addEventListener("click", function () {
                var e = _this.ele.tp_video_warp;
                document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
                setTimeout(function () {
                    _this.width = _this.ele.tplayer_main.offsetWidth;
                    _this.height = _this.ele.tplayer_main.offsetHeight;
                    var e = _this.ele.danmaku_warp.getElementsByTagName("div");
                    _this.dmspeend(_this.width / 100);
                    for (var _i6 = 0; _i6 < e.length; _i6++) {
                        if (hasClass(e[_i6], "tp-left")) {
                            e[_i6].style.transform = "translateX(-" + _this.width + "px)";
                        }
                    }
                }, 1e3);
            });

            //颜色
            var tpcolor = new Object();
            tpcolor.arr = new Array("#FFFFFF", "#000000", "#4ab0c6", "#555656", "#09b745", "#f86141", "#FFEB3B", "#4d38d8", "#fe67c1", "#ff9c07");
            for (var r = 255; r >= 0; r -= 25) {
                for (var g = 0; g <= 255; g += 25) {
                    for (var b = 0; b <= 255; b += 25) {
                        tpcolor.arr.push("rgb(" + r + "," + g + "," + b + ")");
                    }
                }
            }
            var danmakucon = this.ele.tp_con;
            var colorwarp = this.ele.tp_color_warp;
            this.ele.tp_color_bo.addEventListener("click", function () {
                if (danmakucon.style.display == "block") {
                    danmakucon.style.display = "none";
                } else {
                    danmakucon.style.display = "block";
                }
            });
            for (tpcolor.i = 0; tpcolor.i < tpcolor.arr.length; tpcolor.i++) {
                var colormain = document.createElement("div");
                colormain.className = "tp-color-w";
                var color = document.createElement("div");
                color.className = "tp-color-main";
                color.style.backgroundColor = tpcolor.arr[tpcolor.i];

                colormain.appendChild(color);
                colorwarp.appendChild(colormain);
            }
            this.ele.tp_color_warp.addEventListener('click', function (event) {

                if (event.target.className == "tp-color-main") {
                    console.log(event.target.style.backgroundColor);
                    _this.ele.tp_color_bo.style.backgroundColor = event.target.style.backgroundColor;
                    _this.ele.tp_con.style.display = 'none';
                }
            });
            //设置
            //视频速度设置
            this.ele.tp_speend_con.addEventListener("click", function () {
                var t = _this.ele.tp_speend;
                if (t.style.display == "block") {
                    t.style.display = "none";
                } else {
                    t.style.display = "block";
                }
            });
            var videospeendele = this.ele.tp_speend.childNodes;
            for (var _i7 = 0; _i7 < videospeendele.length; _i7++) {
                var e = videospeendele[_i7];
                var s = parseFloat(videospeendele[_i7].innerText).toFixed(2);
                if (s != "NaN") {
                    e.onclick = function () {
                        var t = parseFloat(this.innerText).toFixed(2);
                        for (var _i8 = 0; _i8 < _this.videoelearr.length; _i8++) {
                            _this.videoelearr[_i8].playbackRate = t;
                        }
                    };
                } else {
                    e.onclick = function () {
                        for (var _i9 = 0; _i9 < _this.videoelearr.length; _i9++) {
                            _this.videoelearr[_i9].playbackRate = 1;
                        }
                    };
                }
            }
            //视频比例设置
            this.ele.video_ratio.ratio = 1;
            this.ele.video_ratio.addEventListener('click', function () {
                if (this.ratio == 1) {
                    this.ratio = 2;
                    _this.ele.tplayer.style.transform = 'scale(1,0.892)';
                    _this.ele.tplayer.style.webkitTransform = 'scale(1,0.892)';
                    this.innerText = '\u89C6\u9891\u6BD4\u4F8B 4:3';
                } else if (this.ratio == 2) {
                    this.ratio = 3;
                    _this.ele.tplayer.style.transform = 'scale(0.841,1)';
                    _this.ele.tplayer.style.webkitTransform = 'scale(0.841,1)';
                    this.innerText = '\u89C6\u9891\u6BD4\u4F8B 16:9';
                } else if (this.ratio == 3) {
                    this.ratio = 4;
                    this.innerText = '\u89C6\u9891\u6BD4\u4F8B \u5168\u5C4F';
                    _this.ele.tplayer.style.transform = 'none';
                    _this.ele.tplayer.style.webkitTransform = 'none';
                    for (var _i10 = 0; _i10 < _this.videoelearr.length; _i10++) {
                        _this.videoelearr[_i10].style.height = 'auto';
                        _this.videoelearr[_i10].style.width = 'auto';
                        _this.videoelearr[_i10].className = "";
                    }
                    setTimeout(function () {
                        var w1 = _this.ele.tplayer.offsetWidth;
                        var w2 = _this.videoelearr[0].offsetWidth;
                        var h1 = _this.ele.tplayer.offsetHeight;
                        var h2 = _this.videoelearr[0].offsetHeight;
                        _this.ele.tplayer.style.transform = 'scale(' + w1 / w2 + ',' + h1 / h2 + ')';
                        _this.ele.tplayer.style.webkitTransform = 'scale(' + w1 / w2 + ',' + h1 / h2 + ')';
                        _this.ele.tplayer.style.transformOrigin = 'left top';
                        _this.ele.tplayer.style.webkitTransformOrigin = 'left top';
                    }, 0);
                } else {
                    for (var _i11 = 0; _i11 < _this.videoelearr.length; _i11++) {
                        _this.videoelearr[_i11].style.height = '100%';
                        _this.videoelearr[_i11].style.width = '100%';
                        _this.videoelearr[_i11].className = ".tp-video";
                        _this.ele.tplayer.style.webkitTransformOrigin = 'center';
                    }
                    this.ratio = 1;
                    this.innerText = '\u89C6\u9891\u6BD4\u4F8B \u9ED8\u8BA4';
                    _this.ele.tplayer.style.transform = 'none';
                    _this.ele.tplayer.style.webkitTransform = 'none';
                }
            });

            document.addEventListener('webkitfullscreenchange', function () {
                if (document.webkitFullscreenElement) {
                    if (!_this.isfull) {
                        _this.isfull = true;
                        console.log('进入全屏');
                        _this.joinfull();
                    }
                } else {
                    if (_this.isfull) {
                        _this.isfull = false;
                        console.log('退出全屏');
                        _this.tpeixtfull();
                    }
                }
            });
            document.addEventListener('mozfullscreenchange', function () {
                if (document.mozFullscreenElement) {
                    if (!_this.isfull) {
                        _this.isfull = true;
                        console.log('进入全屏');
                        _this.joinfull();
                    }
                } else {
                    if (_this.isfull) {
                        _this.isfull = false;
                        console.log('退出全屏');
                        _this.tpeixtfull();
                    }
                }
            });

            this.ele.danmaku_warp.onmousedown = function (event) {
                var ev = event || window.event || arguments.callee.caller.arguments[0];
                if (ev.button == 0) {
                    if (_this.istouch != 1) {

                        //如果左按键
                        if (_this.ele.tp_rightmenu.style.display == "block") {
                            _this.ele.tp_rightmenu.style.display = "none";
                        } else {
                            //视频暂停
                            if (_this.Element.paused) {
                                _this.play();
                            } else {
                                _this.pause();
                            }
                        }
                        _this.showbar();
                    }
                }
            };

            this.ele.danmaku_warp.oncontextmenu = function (event) {
                console.log('右键菜单');
                var ev = event || window.event || arguments.callee.caller.arguments[0];
                _this.tp_menu(ev);
                return false;
            };

            this.ele.tp_place.addEventListener("click", function () {
                if (_this.dmplace == 1) {
                    _this.dmplace = 2;
                    this.innerText = "▲顶部弹幕";
                } else {
                    _this.dmplace = 1;
                    this.innerText = "◀滚动弹幕";
                }
            });

            this.dmspeend(this.width / 100);
        }
        //函數

    }, {
        key: '$c',
        value: function $c(e) {
            return this.options.Element.querySelectorAll(e);
        }
    }, {
        key: 'getthis',
        value: function getthis() {
            return this;
        }
        //播放

    }, {
        key: 'play',
        value: function play() {
            addClass(this.ele.tp_oneplay, 'tp-zoomoutdown');
            if (this.dsq == 0) {
                this.Interval = setInterval(function () {
                    this.danmakutime();
                }.bind(this), 100);
                this.dsq = 1;
            }
            if (this.istouch != 1) {
                this.ele.video_con.style.opacity = "0";
            }
            var e = this.ele.danmaku_warp.getElementsByTagName("div");
            this.ele.video_control_play.style.display = "none";
            this.ele.video_control_paused.style.display = "inline-block";
            this.Element.play();
            for (var i = e.length - 1; i >= 0; i--) {
                removeClass(e[i], "tp-suspend");
            }
        }
        //暂停

    }, {
        key: 'pause',
        value: function pause() {
            clearInterval(this.Interval);
            this.dsq = 0;
            var e = this.ele.danmaku_warp.getElementsByTagName("div");
            this.ele.video_control_paused.style.display = "none";
            this.ele.video_control_play.style.display = "inline-block";
            this.Element.pause();
            for (var i = e.length - 1; i >= 0; i--) {
                addClass(e[i], "tp-suspend");
            }
            this.ele.tp_spinner.style.display = "none";
        }
    }, {
        key: 'addacfundanmu',
        value: function addacfundanmu(vid) {
            var _this = this;
            fetch("http://danmu.aixifan.com/size/" + vid).then(function (response) {
                return response.json();
            }).then(function (json) {
                var max = Math.ceil(json[2] / 2000);
                var nowid = 0;
                var nowp = 0;

                var _loop3 = function _loop3(i) {
                    fetch("http://danmu.aixifan.com/V3/" + vid + '/' + i + '/2000').then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        for (var x = 0; x < json.length; x++) {
                            for (var y = 0; y < json[x].length; y++) {
                                if (json[x][y]) {
                                    var o = new Object();
                                    o.text = json[x][y].m;
                                    var c = json[x][y].c.split(',');
                                    o.time = parseInt(c[0] * 10);
                                    o.color = '#' + (Array(6).join(0) + parseInt(c[1]).toString(16)).slice(-6);
                                    o.place = c[2];
                                    o.size = c[3];
                                    o.user = c[4];
                                    if (o.place != 1 && o.place != 7) {
                                        o.place = 2;
                                    }
                                    o.id = nowid;
                                    nowid++;
                                    _this.data.push(o);
                                    _this.nowdata = _this.data.slice(0);
                                }
                            }
                        }
                        nowp++;
                        console.log('弹幕' + i + '段解析成功');
                        if (nowp == max) {
                            console.log('弹幕添加完成');
                            _this.setint();
                        }
                    });
                };

                for (var i = 1; i <= max; i++) {
                    _loop3(i);
                }
            });
        }
    }, {
        key: 'addonedanmaku',
        value: function addonedanmaku(url) {
            var _this = this;
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (json) {
                var nowid = 0;
                for (var x = 0; x < json.length; x++) {
                    for (var y = 0; y < json[x].length; y++) {
                        if (json[x][y]) {
                            var o = new Object();
                            o.text = json[x][y].m;
                            var c = json[x][y].c.split(',');
                            o.time = parseInt(c[0] * 10);
                            o.color = '#' + (Array(6).join(0) + parseInt(c[1]).toString(16)).slice(-6);
                            o.place = c[2];
                            o.size = c[3];
                            o.user = c[4];
                            if (o.place != 1 && o.place != 7) {
                                o.place = 2;
                            }
                            o.id = nowid;
                            nowid++;
                            _this.data.push(o);
                            _this.nowdata = _this.data.slice(0);
                        }
                    }
                }
                console.log('弹幕添加完成');
                _this.setint();
            });
        }
    }, {
        key: 'adddanmaku',
        value: function adddanmaku(url) {
            var _this = this;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var t = JSON.parse(xmlhttp.responseText);
                    if (t.success == 1) {
                        if (t.data) {
                            for (var i = 0; i < t.data.length; i++) {
                                _this.data.push(t.data[i]);
                            }
                        }
                        if (t.danmu) {
                            for (var i = 0; i < t.danmu.length; i++) {
                                t.danmu[i].text = unescape(t.danmu[i].text);
                                _this.data.push(t.danmu[i]);
                            }
                        }
                    }
                    _this.nowdata = _this.data.slice(0);
                    _this.setint();
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }
    }, {
        key: 'dmspeend',


        //弹幕速度
        value: function dmspeend(v) {
            this.width = this.ele.tplayer_main.offsetWidth;
            this.height = this.ele.tplayer_main.offsetHeight;
            console.log('弹幕速度调整为' + v);
            this.config.v = v;
            this.changerconfig();
        }
    }, {
        key: 'joinfull',
        value: function joinfull() {
            var _this = this;
            this.ele.video_ratio.ratio = 4;
            this.ele.video_ratio.click();
            setTimeout(function () {
                _this.width = _this.ele.tplayer_main.offsetWidth;
                _this.height = _this.ele.tplayer_main.offsetHeight;
            }, 1000);
        }
    }, {
        key: 'changerconfig',
        value: function changerconfig() {
            //默认清晰度
            this.config.definition = this.config.definition || 1;
            this.config.v = this.config.v || this.width / 100;
            this.config.danmakusize = this.config.danmakusize || 1;
            this.config.danmakuo = this.config.danmakuo || 1;
            this.config.dmweight = this.config.dmweight || 600;
            this.config.sound = this.config.sound || 80;
            this.config.pbs = this.config.pbs || '笑容我来守护,隔壁难民';
            1 != this.config.qc && (this.config.qc = !1);
            1 != this.config.pb && (this.config.pb = !1);
            0 != this.config.dmshadow && (this.config.dmshadow = 3);
            var shadow = '';
            if (this.config.dmshadow) {
                shadow = 'text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;';
            }
            this.ele.css.innerText = '\n        .tp-left {animation: dmleft  ' + this.config.v + 's linear;-webkit-animation: dmleft ' + this.config.v + 's linear;}\n        .danmaku-warp{font-weight:' + this.config.dmweight + ';transform:scale(' + this.config.danmakusize + ');-webkit-transform:scale(' + this.config.danmakusize + ');-moz-transform:scale(' + this.config.danmakusize + ');width:' + 100 / this.config.danmakusize + '%;height:' + 100 / this.config.danmakusize + '%;opacity:' + this.config.danmakuo + '}\n        .tp-video-main>.danmaku-warp>.danmaku{' + shadow + '}';
            var earr = this.$c('.tp-left');
            for (var i = 0; i < earr.length; i++) {
                earr[i].style.transform = "translateX(-" + this.width / this.config.danmakusize + "px)";
            }
            localStorage.setItem('tdconfig', JSON.stringify(this.config));
        }
        //下一段提示

    }, {
        key: 'nextvideo',
        value: function nextvideo(callback) {
            console.log('视频存在下一段');
            var e = document.createElement('div');
            e.className = 'tp-msg';

            var text = document.createElement('span');
            text.i = 5;
            text.innerHTML = text.i + '秒后将播放下一段';

            var btn = document.createElement('span');
            btn.innerHTML = '×';
            btn.className = 'tp-msg-close';
            btn.addEventListener('click', function () {
                btn.parentNode.parentNode.removeChild(btn.parentNode);
                if (time) {
                    clearInterval(time);
                }
            });
            e.appendChild(btn);
            e.appendChild(text);
            var _this = this;
            this.ele.tplayer_main.appendChild(e);
            var time = setInterval(function () {
                if (text.i > 0) {
                    text.i--;
                    text.innerHTML = text.i + '秒后将播放下一段';
                } else {
                    clearInterval(time);
                    console.log('播放下一段');
                    var t = _this.options.Element.childNodes;
                    for (var i = 0; i < t.length; i++) {
                        _this.options.Element.removeChild(t[i]);
                    }
                    if (typeof callback === "function") {
                        callback();
                    } else {
                        console.log('eero');
                        console.log(callback);
                    }
                }
            }, 1000);
        }
    }, {
        key: 'getnowtime',
        value: function getnowtime() {
            var videotime = 0;
            for (var i = 0; i <= this.nowduan - 1; i++) {
                videotime += this.videotimearr[i];
            }
            videotime += this.videoelearr[this.nowduan].currentTime;
            return videotime;
        }
    }, {
        key: 'getallvideotime',
        value: function getallvideotime(ele, i) {
            var time = ele.duration;
            if (!time) {
                setTimeout(function () {
                    this.getallvideotime(ele, i);
                }.bind(this), 500);
            } else {
                this.videotimearr[i] = time;
                if (this.videotimearr[0] && this.videotimearr[this.videotimearr.length - 1]) {
                    this.alltime = 0;
                    for (var _i14 = 0; _i14 < this.videotimearr.length; _i14++) {
                        this.alltime += this.videotimearr[_i14];
                    }
                    this.ele.alltime.innerHTML = this.getvideotime(this.alltime).m + ":" + this.getvideotime(this.alltime).s;
                    this.ele.alltime_phone.innerHTML = '&nbsp;/&nbsp;' + this.ele.alltime.innerHTML;
                }
            }
        }
    }, {
        key: 'tpeixtfull',
        value: function tpeixtfull() {
            setTimeout(function () {
                this.width = this.ele.tplayer.offsetWidth;
                this.dmspeend(this.width / 100);
                var e = this.ele.danmaku_warp.getElementsByTagName("div");
                for (var i = e.length - 1; i >= 0; i--) {
                    if (hasClass(e[i], "tp-left")) {
                        e[i].style.transform = "translateX(-" + this.width + "px)";
                    }
                }
                this.ele.video_ratio.ratio = 4;
                this.ele.video_ratio.click();
            }.bind(this), 1000);
        }
    }, {
        key: 'Definition',
        value: function Definition(i) {
            if (i == 1) {
                return '超清';
            } else if (i == 2) {
                return '高清';
            } else if (i == 3) {
                return '普通';
            } else if (i == 4) {
                return '流畅';
            }
        }
    }, {
        key: 'getvideotime',
        value: function getvideotime(time) {
            var tm = void 0;
            var m = parseInt(time / 60);
            if (parseInt(time % 60) >= 10) {
                tm = parseInt(time % 60);
            } else {
                tm = "0" + parseInt(time % 60);
            }
            return {
                m: m,
                s: tm
            };
        }
        //屏蔽关键词弹幕

    }, {
        key: 'shielddanmaku',
        value: function shielddanmaku() {
            var shieldarr = this.ele.setr7.value.split(",");
            var cache = void 0;
            var b = 0;
            if (this.ele.setr5.checked) {
                if (!this.removaldata) {
                    this.removaldanmaku();
                }
                var t = this.removaldata.slice(0);
                cache = t;
            } else {
                var _t = this.data.slice(0);
                cache = _t;
            }

            for (var i = cache.length - 1; i >= 0; i--) {
                if (cache[i]) {
                    if (cache[i].text) {
                        for (var x = shieldarr.length - 1; x >= 0; x--) {
                            if (cache[i]) {
                                if (cache[i].text.indexOf(shieldarr[x]) > -1) {
                                    delete cache[i];
                                    b++;
                                }
                            }
                        }
                    }
                }
            }
            this.nowdata = cache;
            var elearr = this.$c('.danmaku-warp>.danmaku');
            for (var _x3 = 0; _x3 < elearr.length; _x3++) {
                for (var y = 0; y < shieldarr.length; y++) {
                    if (elearr[_x3].innerText.indexOf(shieldarr[y]) > -1) {
                        elearr[_x3].innerText = null;
                    }
                }
            }
            console.log(shieldarr);
            console.log('\u5F39\u5E55\u5C4F\u853D  \u5C4F\u853D' + b + '\u4E2A\u5F39\u5E55');
        }
    }, {
        key: 'danmakuhide',
        value: function danmakuhide(e, topid) {
            var _this = this;
            if (this.Element.paused) {
                setTimeout(function () {
                    _this.danmakuhide(e, topid);
                }, this.width * 10 + 1e3);
            } else {
                e.parentNode.removeChild(e);
                if (topid !== undefined) {
                    this.toparr[topid] = 0;
                }
            }
        }
    }, {
        key: 'getlefttop',
        value: function getlefttop(v, dmwidth) {
            var h = void 0;
            var t = this.getnowtime();
            var allt = this.width / 100;
            for (var i = 0; i <= this.leftarr.t.length; i++) {
                //leaving是否离开左侧屏幕 完全显示出来
                if (!this.leftarr.leaving[i]) {
                    if (this.leftarr.v[i] >= v) {
                        h = i;
                        break;
                    } else {
                        if (!this.leftarr.t[i]) {
                            break;
                        }
                        //追上的时间和距离
                        var tt = this.width / 100 - t + this.leftarr.t[i];
                        var sz = tt * (v - this.leftarr.v[i]);
                        //间隔距离 这里-20是为了防止跟太紧
                        var so = (t - this.leftarr.t[i]) * this.leftarr.v[i] - this.leftarr.width[i] - 20;
                        //console.log(`${i}弹幕会在上一弹幕尾部飞行${tt}秒 速度差${v-this.leftarr.v[i]} 会追上路程 ${sz}  判断时距离 ${so}`)
                        if (sz < so) {
                            h = i;
                            break;
                        }
                    }
                }
            }
            if (typeof h == 'undefined') {
                h = this.leftarr.t.length;
                //console.log('开辟新通道');
            }
            this.leftarr.t[h] = t;
            this.leftarr.v[h] = v;
            this.leftarr.leaving[h] = true;
            this.leftarr.width[h] = dmwidth;
            return h;
        }
    }, {
        key: 'gettoptop',
        value: function gettoptop() {
            var h = void 0;
            for (var i = 0; i <= this.toparr.length; i++) {
                if (!this.toparr[i]) {
                    //console.log('第'+i+'可以发射弹幕');
                    h = i;
                    break;
                }
            }
            return h;
        }
    }, {
        key: 'dmend',
        value: function dmend(a) {
            a.parentNode.removeChild(a);
        }
    }, {
        key: 'setint',
        value: function setint() {
            if (this.config.qc) {
                this.ele.setr5.click();
            }
            if (this.config.pb) {
                this.ele.setr6.click();
            }
            if (this.config.danmakuo) {
                this.ele.setr1.value = this.config.danmakuo * 100;
            }
            if (this.config.danmakusize) {
                this.ele.setr2.value = this.config.danmakusize * 50;
            }
            if (this.config.dmweight != 400) {
                this.ele.setr3.checked = true;
            }
            if (this.config.dmshadow == 0) {
                this.ele.setr4.checked = true;
            }
            if (this.config.definition) {
                this.ele.setr8.selectedIndex = this.config.definition - 1;
            }
        }
        //合并重复弹幕

    }, {
        key: 'removaldanmaku',
        value: function removaldanmaku() {
            //console.log("弹幕去重开始")
            if (this.nowdata) {
                var cache = this.data.slice(0);
                var b = 0;
                if (cache) {
                    for (var i = cache.length - 1; i >= 0; i--) {
                        for (var _a = cache.length - 1; _a >= 0; _a--) {
                            if (_a == i) {
                                break;
                            }
                            if (cache[i] && cache[_a]) {
                                if (cache[i].text == cache[_a].text) {
                                    delete cache[_a];
                                    b++;
                                }
                            }
                        }
                    }
                }
                this.removaldata = cache;
                this.nowdata = this.removaldata;
                console.log('\u5F39\u5E55\u53BB\u91CD  \u53BB\u9664' + b + '\u4E2A\u91CD\u590D\u5F39\u5E55');
            }
        }
    }, {
        key: 'changerset',
        value: function changerset() {
            var e = this.ele;
            this.config.danmakuo = parseInt(e.setr1.value) / 100;
            this.config.danmakusize = parseInt(e.setr2.value) / 50;
            this.changerconfig();
        }
    }, {
        key: 'showbar',
        value: function showbar() {
            if (this.bar) {
                clearTimeout(this.bar);
            }
            if (this.ele.video_con.style.opacity != '1') {
                this.ele.video_con.style.opacity = "1";
            }
            var _this = this;
            this.bar = setTimeout(function () {
                _this.ele.video_con.style.opacity = "0";
            }, 3000);
        }

        //定时器

    }, {
        key: 'danmakutime',
        value: function danmakutime() {
            var videotime = this.getnowtime();
            if (this.nowdata) {
                var inttime = parseInt(videotime * 10);
                for (var i = 0; i < this.nowdata.length; i++) {
                    if (this.nowdata[i]) {
                        //console.log('nowtime:'+inttime);
                        if (this.nowdata[i].time == inttime) {
                            this.send(unescape(this.nowdata[i].text), this.nowdata[i].color, this.nowdata[i].place, false, this.nowdata[i].user, this.nowdata[i].size);
                            delete this.nowdata[i];
                        }
                    }
                }
            }
        }
        //返回当前播放段

    }, {
        key: 'getduan',
        value: function getduan(time) {
            var mun = 0;
            for (var i = 0; i < this.videotimearr.length; i++) {
                mun += this.videotimearr[i];
                if (mun >= time) {
                    return i;
                    break;
                }
            }
        }
    }, {
        key: 'tdplay',
        value: function tdplay() {
            if (this.ele.tp_spinner.style.display = "block") {
                if (this.dsq == 0) {
                    this.Interval = setInterval(function () {
                        this.danmakutime();
                    }.bind(this), 100);
                    this.dsq = 1;
                }
                var e = this.ele.danmaku_warp.getElementsByTagName("div");
                this.ele.tp_spinner.style.display = "none";
                this.ele.alltime.innerHTML = this.getvideotime(this.alltime).m + ":" + this.getvideotime(this.alltime).s;
                for (var i = e.length - 1; i >= 0; i--) {
                    removeClass(e[i], "tp-suspend");
                }
            }
        }
        //获取元素的纵坐标（相对于窗口）

    }, {
        key: 'getTop',
        value: function getTop(e) {
            var offset = e.offsetTop;
            if (e.offsetParent != null) offset += this.getTop(e.offsetParent);
            return offset;
        }
        //获取元素的横坐标（相对于窗口）

    }, {
        key: 'getLeft',
        value: function getLeft(e) {
            var offset = e.offsetLeft;
            if (e.offsetParent != null) offset += this.getLeft(e.offsetParent);
            return offset;
        }
    }, {
        key: 'show_coords',
        value: function show_coords(event, elem) {
            var x = event.clientX - this.getLeft(elem);
            var y = event.clientY - this.getTop(elem);
            var xbl = x / elem.offsetWidth;
            var ybl = 1 - y / elem.offsetHeight;
            return {
                x: x,
                y: y,
                w: elem.offsetWidth,
                h: elem.offsetHeight,
                xbl: xbl,
                ybl: ybl
            };
        }
        //视频缓冲事件

    }, {
        key: 'videohc',
        value: function videohc() {
            console.log("loding");
            clearInterval(this.Interval);
            this.dsq = 0;
            this.ele.tp_spinner.style.display = "block";
            var e = this.ele.danmaku_warp.getElementsByTagName("div");
            for (var i = e.length - 1; i >= 0; i--) {
                addClass(e[i], "tp-suspend");
            }
        }
    }, {
        key: 'alert',
        value: function alert(o) {
            var ele = this.ele.alert;
            clearTimeout(ele.t);
            ele.style.display = 'block';
            o.w = o.w || 'auto';
            o.h = o.h || 'auto';
            o.time = o.time || 1000;
            o.padding = o.padding || "20px";
            o.opacity = o.opacity || 1;
            if (o.btn) {
                this.ele.alert_ok.style.display = 'block';
            } else {
                this.ele.alert_ok.style.display = 'none';
                ele.t = setTimeout(function () {
                    ele.style.display = 'none';
                }, o.time);
            }
            if (_typeof(o.t) == 'object') {
                this.ele.alert_container.innerHTML = null;
                this.ele.alert_container.appendChild(o.t);
            } else {
                this.ele.alert_container.innerHTML = o.t;
            }
            this.ele.alert_container.style.padding = o.padding;
            ele.style.opacity = o.opacity;
            this.ele.alert.style.display = 'block';
        }
    }, {
        key: 'screenshot',
        value: function screenshot() {
            var c = document.createElement('canvas');
            c.width = this.ele.tplayer.offsetWidth;
            c.height = this.ele.tplayer.offsetHeight;
            c.getContext('2d').drawImage(this.videoelearr[this.nowduan], 0, 0, c.width, c.height);
            c.className = 'tp-screenshot-canvas';
            var warp = document.createElement("div");
            warp.innerHTML = '<p>请右键保存截图</p>';
            warp.appendChild(c);
            this.alert({ t: warp, btn: true });
        }
    }, {
        key: 'changersound',
        value: function changersound() {
            var s = parseInt(this.ele.tp_s.style.width) * .01;
            for (var i = 0; i < this.videoelearr.length; i++) {
                this.videoelearr[i].volume = s;
            }
            this.config.sound = parseInt(s * 100);
            this.alert({ t: '<div class="sound-ico"></div><span style="line-height:26px;font-size: 21px;">' + this.config.sound + "%</span>", time: 1000, padding: '6px 10px', opacity: "0.9" });
            localStorage.setItem('tdconfig', JSON.stringify(this.config));
        }
        //菜单

    }, {
        key: 'tp_menu',
        value: function tp_menu(ev) {
            var _this = this;
            var container = this.ele.tplayer;
            var rightmenu = this.ele.tp_rightmenu;
            if (this.istouch != 1) {
                var target = ev.target || ev.srcElement;
                if (hasClass(target, "danmaku")) {
                    this.ele.copytext.innerHTML = target.innerHTML;
                    this.ele.copy.style.display = "block";
                    this.ele.copy.onclick = function () {
                        _this.ele.copytext.select();
                        document.execCommand("Copy");
                        rightmenu.style.display = "none";
                    };
                } else {
                    this.ele.copy.style.display = "none";
                }
                rightmenu.style.display = "block";
                var leftedge = void 0,
                    topedge = void 0,
                    danmakuheight = this.ele.danmaku_warp.offsetHeight,
                    danmakuwidth = this.ele.danmaku_warp.offsetWidth;
                if (danmakuheight == document.documentElement.clientHeight) {
                    topedge = ev.clientY;
                    leftedge = ev.clientX;
                    if (leftedge + rightmenu.offsetWidth > danmakuwidth) {
                        leftedge = danmakuwidth - rightmenu.offsetWidth;
                    }
                    if (topedge + rightmenu.offsetWidth > danmakuheight) {
                        topedge = danmakuheight - rightmenu.offsetHeight;
                    }
                } else {
                    topedge = ev.clientY + document.documentElement.scrollTop - this.getTop(this.ele.tplayer);
                    leftedge = ev.clientX - this.getLeft(this.ele.tplayer);
                    var tweidth = container.offsetWidth;
                    var theigtht = container.offsetHeight;
                    if (leftedge + rightmenu.offsetWidth > tweidth) {
                        leftedge = tweidth - rightmenu.offsetWidth;
                    }
                    if (topedge + rightmenu.offsetHeight > theigtht) {
                        topedge = theigtht - rightmenu.offsetHeight;
                    }
                }
                rightmenu.style.top = topedge + "px";
                rightmenu.style.left = leftedge + "px";
            }
        }
    }, {
        key: 'changermode',
        value: function changermode(a) {
            //this.ele.tp_video_warp.style.height = this.ele.tp_video_warp.offsetWidth * 0.6 + 'px';
        }
    }, {
        key: 'tiao',
        value: function tiao(time) {
            var oldduan = this.getduan(time) - 1,
                oldtime = 0;
            for (var i = 0; i <= oldduan; i++) {
                oldtime += this.videotimearr[i];
            }
            var duantime = time - oldtime;
            this.nowduan = this.getduan(time);
            //video id
            for (var _i15 = 0; _i15 < this.videoelearr.length; _i15++) {
                if (_i15 != this.nowduan) {
                    var ele = this.videoelearr[_i15];
                    ele.style.display = "none";
                    ele.currentTime = 0;
                    ele.pause();
                } else {
                    var _ele2 = this.videoelearr[_i15];
                    this.Element = _ele2;
                    if (_ele2.style.display != "block") {
                        _ele2.style.display = "block";
                    }
                    _ele2.currentTime = duantime;
                    if (_ele2.paused) {
                        _ele2.play();
                    }
                    this.ele.tp_spinner.style.display = "none";
                }
            }
            if (this.removaldata && this.config.qc) {
                this.nowdata = this.removaldata;
                if (this.config.pb) {
                    this.shielddanmaku();
                }
            } else {
                this.nowdata = this.data.slice(0);
            }
            if (this.ele.video_control_play.display != "none") {
                this.play();
            }
        }
    }]);

    return Tplayer;
}();

window.Tplayer = Tplayer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html = {
  main: function main() {
    return "<div class=\"tp-video-warp\">\n  <div class=\"tp-video-main\">\n    <ul class=\"tp-rightmenu\">  \n      <li class=\"tp-copy-warp\">\n        <textarea rows=\"1\" class=\"tp-copy-input\">\u590D\u5236\u5F39\u5E55</textarea>\n      </li>\n      <li class=\"tp-search-user\"></li>\n      <li class=\"tp-speend-con\">\u64AD\u653E\u901F\u5EA6\n        <ul class=\"tp-speend\">\n          <li>0.5</li>\n          <li>0.75</li>\n          <li>\u6B63\u5E38</li>\n          <li>1.25</li>\n          <li>1.5</li>\n          <li>2</li></ul>\n      </li>\n      <li class=\"tp-definition\">\u6E05\u6670\u5EA6  <span></span></li>\n      <li class=\"tp-ratio\">\u89C6\u9891\u6BD4\u4F8B \u9ED8\u8BA4</li>\n      <li class=\"tp-screenshot\">\u622A\u56FE</li>\n      <a href=\"https://github.com/haocity/tplayer/issues\" target=\"_blank\">\n        <li>\u610F\u89C1\u53CD\u9988</li></a>\n      <a href=\"https://github.com/haocity/tplayer\" target=\"_blank\">\n        <li>About tplayer</li></a>\n    </ul>\n    <div class=\"video-end\">\n      <svg t=\"1493275296747\" class=\"replay\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3488\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100\" height=\"100\">\n        <path d=\"M48.012564 368.005052 256.007345 368.005052C282.50851 368.005052 303.987849 346.493648 303.987849 319.992484 303.987849 293.459261 282.50851 272.011981 256.007345 272.011981L172.518731 272.011981C247.808645 165.585172 371.698941 95.994406 512.016029 95.994406 741.749327 95.994406 928.004256 282.249339 928.004256 511.981298 928.004256 741.731959 741.749327 927.954828 512.016029 927.954828 282.249335 927.954828 95.994406 741.730625 95.994406 511.981298 95.994406 485.481472 74.513729 464.00213 48.012564 464.00213 21.479342 464.00213 0 485.481472 0 511.981298 0 794.734285 229.213614 1023.981298 512.017367 1023.981298 794.75299 1023.981298 1024 794.734285 1024 511.981298 1024 229.214949 794.751652 0 512.017367 0 340.405743 0 188.81594 84.590769 95.99574 214.213612L95.99574 128.003676C95.99574 101.471785 74.515063 79.991108 48.013903 79.991108 21.480677 79.991108 0.001338 101.471785 0.001338 128.003676L0.001338 319.993822C0 346.493645 21.479339 368.005052 48.012564 368.005052\" p-id=\"3489\" fill=\"#ffffff\"></path>\n      </svg>\n    </div>\n    <div class=\"tplayer\"></div>\n    <div class=\"danmaku-warp\"></div>\n    <div class=\"tp-oneplay tp-acenter\">\n      <svg class=\"tp-acenter\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill=\"#fff\" d=\"M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z\" /></svg>\n    </div>\n    <div class=\"tp-spinner tp-acenter\">\n      <div class=\"rect1\"></div>\n      <div class=\"rect2\"></div>\n      <div class=\"rect3\"></div>\n      <div class=\"rect4\"></div>\n      <div class=\"rect5\"></div>\n    </div>\n    <div class=\"tp-alert\">\n       <div class=\"tp-alert-container\"></div>\n       <div class=\"tp-alert-ok\">\u786E\u5B9A</div>\n    </div>\n    <div class=\"tp-video-set\">\n      <h4>\u8BBE\u7F6E</h4>\n      <span class='tp-closeset'>\xD7</span>\n      <table class=\"tp-settable\" width=\"300\" border=\"0\">\n      <tr>\n        <td>\u5F39\u5E55\u900F\u660E\u5EA6</td>\n        <td><input type=\"range\" class=\"tp-s-r1\" min=\"20\" max=\"100\" value=\"100\"/></td>\n      \n      </tr>\n      <tr>\n        <td>\u5F39\u5E55\u7F29\u653E</td>\n        <td><input type=\"range\" class=\"tp-s-r2\" min=\"20\" max=\"100\" value=\"50\"/></td>\n      </tr>\n      <tr>\n        <td><input class=\"tp-s-r3\" type=\"checkbox\"/>\u5F39\u5E55\u52A0\u7C97</td>\n        <td><input class=\"tp-s-r4\" type=\"checkbox\"/>\u5173\u95ED\u9634\u5F71</td>\n      </tr>\n      <tr>\n        <td colspan=\"2\"><input class=\"tp-s-r5\" type=\"checkbox\"/>\u5408\u5E76\u91CD\u590D\u5F39\u5E55</td>\n      </tr>\n      <tr>\n        <td><input class=\"tp-s-r6\" type=\"checkbox\"/>\u5C4F\u853D\u5F39\u5E55</td>\n        <td><input class=\"tp-s-r7\" type=\"text\" value=\"\"/></td>\n      </tr>\n      <tr>\n      <td style='padding: 6px 0'>\u4F18\u5148\u753B\u8D28</td>\n      <td>\n          <select style=\" width: 146px;padding: 2px 10px; border-radius: 3px;\" class=\"tp-s-r8\">\n            <option>\u8D85\u6E05</option>\n            <option>\u9AD8\u6E05</option>\n            <option>\u666E\u6E05</option>\n            <option>\u6D41\u7545</option>\n          </select>\n      </td>\n    </tr>\n      <tr>\n        <td colspan=\"2\">\n          <p>\u610F\u89C1\u53CD\u9988&&\u534F\u52A9\u5F00\u53D1&&\u6307\u5BFC \u8BF7\u8054\u7CFBQQ 1051667334</p>\n          <p>\u6280\u672F\u6C34\u5E73\u6709\u9650 \u611F\u8C22\u4F60\u7684\u4F7F\u7528</p>\n        </td>\n      </tr>\n    </table>\n    </div>\n    <div class=\"tp-video-con\">\n      <div class=\"tp-send\">\n        <input type=\"text\" class=\"tp-text\"  placeholder=\"\u5BA2\u5B98\uFF0C\u4E0D\u6765\u5410\u69FD\u4E00\u4E0B\u5417?\" autocomplete=\"off\" />\n        <div class=\"tp-color\">\n          <div class=\"tp-color-bo\" style=\"background-color: rgb(255, 255, 255)\"></div>\n          <div class=\"tp-con\">\n            <div class=\"tp-place\">\u25C0\u6EDA\u52A8\u5F39\u5E55</div>\n            <div class=\"tp-color-warp\"></div>\n          </div>\n        </div>\n        <input class=\"tp-up\" type=\"submit\" value=\"\u53D1\u9001\" /></div>\n      <div class=\"tp-control\">\n        <div style=\"float:right;\">\n          <span class=\"tp-control-alltime\" style=\"padding:0 6px 0 12px\">0:00</span><div class=\"tp-danmaku-switch\">\u5F39</div>\n          <div class=\"tp-set\"></div>\n          <div class=\"tp-vloop tp-vloop1\"></div>\n          <div class=\"tp-syk\">\n            <span class=\"tp-syk-ico\">\u266B</span>\n            <div class=\"tp-s-tranger\">\n              <div class=\"tp-s-tranger-a\" width=\"80%\"></div>\n            </div>\n          </div>\n          <svg class=\"video-full\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"tp-icon\" viewbox=\"0 0 1024 1024\" version=\"1.1\" p-id=\"1427\">\n            <path d=\"M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z\" p-id=\"1428\" />\n            <path d=\"M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z\" p-id=\"1429\" />\n            <path d=\"M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z\" p-id=\"1430\" />\n            <path d=\"M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z\" p-id=\"1431\" /></svg>\n        </div>\n        <div style=\"float: left;\">\n          <svg class=\"tp-control-play tp-icon\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill=\"#fff\" d=\"M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z\" /></svg>\n          <svg class=\"tp-control-paused tp-icon\" style=\"display:none\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill=\"#fff\" d=\"M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z\" /></svg>\n          <span class=\"tp-control-nowtime\">0:00</span>\n          <span class=\"tp-control-alltime-phone\">/ 0:00</span></div>\n        <div class=\"tp-tranger\">\n          <div class=\"tp-tranger-a\"></div>\n          <div class=\"tp-tranger-b\"></div>\n          <div class=\"tp-tranger-c\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
  },
  test: function test() {
    return console.log("ok");
  }
};
module.exports = html;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(10)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "/*acfun*/\r\n.vdown {\r\n    width: 110px;\r\n    margin: 0;\r\n    padding: 20px 10px;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\nsection.crumb .vdown .ico {\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\nsection.player{\r\n\tposition: relative;\r\n\tmin-height:653px;\r\n}\r\n#vdown {\r\n\tposition: absolute;\r\n\tz-index: 5;\r\n\twidth: 300px;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #eee;\r\n\tborder-radius: 5px;\r\n\tmargin-left: -150px;\r\n\tleft: 160px;\r\n\tpadding: 20px 10px;\r\n\tbox-shadow: 0 3px 8px rgba(0,0,0,0.1);\r\n\tbackground-color: #fff;\r\n\toverflow: hidden;\r\n}\r\n.down-btn, .down-btn>a {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n.down-btn {\r\n\tdisplay: inline-block;\r\n\tmargin: 10px 5px;\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: #d07878;\r\n\tbox-shadow: 1px 1px 5px #b5b5b5;\r\n\ttext-align: center;\r\n}\r\n/*player*/\r\n.tplayer{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n.tp-video-warp p{\r\n\tmargin: 0;\r\n}\r\n.tp-video-warp ul{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.tp-video-warp{\r\n\tfont-size: 14px;\r\n}\r\n.video-end {\r\n\tposition: absolute;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tz-index: 8;\r\n\tbackground: #000 url(" + __webpack_require__(5) + ") no-repeat right 40px bottom 30px;\r\n\tdisplay: none;\r\n\topacity: 1;\r\n\tanimation: tpshow 3s;\r\n\t-webkit-animation:tpshow 3s;\r\n}\r\n@keyframes tpshow\r\n{\r\n\tfrom {opacity: 0}\r\n\tto {opacity: 1}\r\n}\r\n@-webkit-keyframes tpshow\r\n{\r\n\tfrom {opacity: 0}\r\n\tto {opacity: 1}\r\n}\r\n.video-end>.replay {\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\tmargin-left: -50px;\r\n\tmargin-top: -50px;\r\n\ttransition:transform 2s;\r\n\t-moz-transition:transform 2s;\r\n\t-webkit-transition:transform 2s;\r\n}\r\n.video-end>.replay:hover {\r\n\ttransform: rotate(360deg);\r\n\t-webkit-transform: rotate(360deg);\r\n\t-moz-transform: rotate(360deg);\r\n}\r\n.tp-video-main>.danmaku-warp>.danmaku {\r\n\tcolor: #fff;\r\n\tline-height: 37px;\r\n\tz-index: 6;\r\n\tpadding: 0 4px;\r\n\tfont-family: Avenir Next,Helvetica,Arial,Lantinghei SC,Microsoft YaHei,sans-serif;\r\n}\r\n.tp-left {\r\n\tposition: absolute;\r\n\twill-change: transform;\r\n\tright: 0;\r\n\tfont-size: 24px;\r\n\tanimation: dmleft 10s linear;\r\n\t-webkit-animation: dmleft 10s linear;\r\n\tcursor: pointer;\r\n\twhite-space: nowrap;\r\n}\r\n.tp-top {\r\n\tposition: absolute;\r\n    left: 50%;\r\n    text-align: center;\r\n    display: block;\r\n    font-size: 22px;\r\n    transform: translateX(-50%);\r\n    -webkit-transform: translateX(-50%);\r\n    white-space:nowrap;\r\n}\r\n.danmaku-ad{\r\n\tposition: absolute;\r\n\twhite-space: nowrap;\r\n\t-webkit-transform: translateX(50%);\r\n\t-moz-transform: translateX(50%);\r\n\ttransform: translateX(50%);\r\n}\r\n@keyframes dmleft {\r\n\t0% {\r\n\t-webkit-transform: translateX(100%);\r\n\ttransform: translateX(100%)\r\n}\r\n}\r\n@-webkit-keyframes dmleft {\r\n\t0% {\r\n\t-webkit-transform: translateX(100%);\r\n\ttransform: translateX(100%)\r\n}\r\n}\r\n.danmaku-warp {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\ttransform-origin: top left;\r\n\t-moz-transform-origin:top left;\r\n\t-webkit-transform-origin:top left;\r\n}\r\n.tp-send {\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\twidth: 60%;\r\n\theight: 35px;\r\n\tborder-radius: 5px;\r\n\tmargin: 0 0 0 -30%;\r\n\ttext-align: center;\r\n\tpadding: 4px 0;\r\n\tbackground-color: rgba(255, 255, 255, 0.79);\r\n\tz-index: 6;\r\n\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.tp-text {\r\n\twidth: 100%;\r\n    line-height: 36px;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\tbackground-color: transparent;\r\n\toutline: none;\r\n}\r\n\r\n.tp-up {\r\n\tdisplay: none;\r\n\tposition: relative;\r\n\t\r\n\tleft: 20px;\r\n\tbackground-color: #8715EF;\r\n\tcolor: #fff;\r\n\tborder: 0 solid #000;\r\n\tline-height: 20px;\r\n\tborder-radius: 4px;\r\n\tpadding: 3px 20px;\r\n}\r\n\r\n.tp-msg{\r\n\tposition: absolute;\r\n    bottom: 60px;\r\n    right: 6px;\r\n    background-color: rgba(255, 255, 255, 0.95);\r\n    padding: 6px 10px;\r\n    z-index: 999;\r\n    border-radius: 6px;\r\n}\r\n.tp-msg>.tp-msg-close{\r\n\tcursor: pointer;\r\n    color: #000;\r\n    font-weight: 600;\r\n    font-size: 1.4em;\r\n    line-height: 18px;\r\n    padding-right: 8px;\r\n   \tfont-size: 15px;\r\n}\r\n.tp-video-main {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #000;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\tuser-select: none;\r\n\toverflow:hidden;\r\n}\r\n.tp-video {\r\n\tposition: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: auto;\r\n}\r\n.tp-video-con {\r\n\topacity: 0;\r\n\tposition: absolute;\r\n    bottom: 0;\r\n    height: 100px;\r\n    width: 100%;\r\n    background: linear-gradient(to top,rgba(0,0,0,.75),hsla(0,0%,100%,0));\r\n\ttransition: opacity 1s;\r\n\t-moz-transition: opacity 1s;\r\n\t-webkit-transition: opacity 1s;\r\n}\r\n.tp-video-con:hover{\r\n\topacity: 1!important;\r\n}\r\n.tp-control {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tpadding-bottom: 10px;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 45px;\r\n\tcolor: #fff;\r\n\tline-height: 0;\r\n\tuser-select: none;\r\n\tz-index: 888;\r\n}\r\n.tp-control-nowtime,.tp-control-alltime{\r\n\tcursor: default;\r\n}\r\n.tp-icon {\r\n\tposition: relative;\r\n\ttop: 6px;\r\n\tpadding-left: 10px;\r\n\tpadding-right: 2px;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tcursor: pointer;\r\n\tfill: #fff;\r\n}\r\n\r\n.tp-definition{\r\n\tdisplay: none;\r\n}\r\n.tp-danmaku-switch {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tborder: 2px solid #fff;\r\n\tcolor: #fff;\r\n\tborder-radius: 50%;\r\n\twidth: 22px;\r\n\theight: 22px;\r\n\tline-height: 22px;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n}\r\n.tp-danmaku-switch-c {\r\n\tcolor: #000 !important;\r\n\tborder: none !important;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.tp-vloop{\r\n\tdisplay: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-size: cover;\r\n    transform: translateY(8px);\r\n    cursor: pointer;\r\n}\r\n.tp-vloop1{\r\n\tbackground-image: url(" + __webpack_require__(6) + ")\r\n}\r\n.tp-vloop2{\r\n\tbackground-image: url(" + __webpack_require__(7) + ")\r\n}\r\n.tp-set{\r\n\tbackground-image: url(" + __webpack_require__(8) + ");\r\n\tdisplay: inline-block;\r\n    height: 24px;\r\n    width: 24px;\r\n    margin: 0 14px;\r\n    background-size: cover;\r\n    transform: translateY(8px);\r\n    cursor: pointer;\r\n}\r\n.sound-ico{\r\n\tbackground-image: url(" + __webpack_require__(9) + ");\r\n    display: inline-block;\r\n    height: 26px;\r\n    width: 26px;\r\n    background-size: cover;\r\n    cursor: pointer;\r\n    margin-right: 5px;\r\n    vertical-align: bottom;\r\n}\r\n.tp-alert,.tp-video-set{\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%) translateY(-50%);\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    z-index: 999;\r\n    background-color: rgba(255, 255, 255, 0.95);\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    font-size: 14px;\r\n}\r\n\r\n.tp-video-set{\r\n\twidth: 400px;\r\n    height: 300px;\r\n}\r\n\r\n\r\n.tp-alert-ok{\r\n\twidth: 50px;\r\n\tbackground-color: #e05865;\r\n\tcolor: #fff;\r\n\tpadding: 4px 10px;\r\n\tborder-radius: 5px;\r\n    text-align: center;\r\n\tmargin: 5px auto;\r\n\tcursor: pointer;\r\n}\r\n.tp-closeset{\r\n\tposition:absolute;\r\n\ttop: 0;\r\n\tright:0;\r\n\tpadding:4px;\r\n\tcursor:pointer;\r\n\tcolor:#000;\r\n\tfont-weight: 600;\r\n\tfont-size: 1.4em;\r\n}\r\n.tp-alert-container{\r\n\tpadding: 20px\r\n}\r\n.tp-alert-container .tp-screenshot-canvas{\r\n\theight: auto;\r\n\twidth: 300px\r\n}\r\n.tp-settable{\r\n\tmargin:0 auto;\r\n\tcursor:default;\r\n}\r\n.tp-video-set>h4{\r\n\tmargin: 0 0 8px 0;\r\n\tpadding: 10px 20px;\r\n    background-color: rgb(243, 93, 93);\r\n    color: #fff;\r\n}\r\n.tp-syk {\r\n\tpadding: 10px 10px;\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tcolor: #fff;\r\n\ttop: -7px;\r\n}\r\n.tp-s-tranger {\r\n  position: relative;\r\n  height: 10px;\r\n  width:80px;\r\n  margin-left: 30px;\r\n  top: 10px;\r\n  background-color: rgba(142, 129, 129, 0.6);\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  overflow:hidden;\r\n}\r\n.tp-s-tranger>.tp-s-tranger-a {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 10%;\r\n  height: 100%;\r\n  background-color: #e33d3d;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n.tp-tranger {\r\n\tposition: relative;\r\n\theight: 11px;\r\n\tbackground-color: rgba(0, 0, 0, 0.17);\r\n\tborder-radius: 6px;\r\n\tcursor: pointer;\r\n\toverflow: hidden;\r\n\tmargin-top: 18px;\r\n\tmargin-left: 80px;\r\n\tmargin-right: 170px;\r\n}\r\n.tp-tranger>.tp-tranger-a {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tbackground-color: rgb(248, 73, 73);\r\n\theight: 100%;\r\n\twidth: 0;\r\n\tborder-radius: 6px;\r\n\tz-index: 3;\r\n}\r\n.tp-tranger>.tp-tranger-b {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tbackground-color: #FFFFFF;\r\n\theight: 100%;\r\n\twidth: 11px;\r\n\tborder-radius: 50%;\r\n\tright: 16px;\r\n\tz-index: 5;\r\n}\r\n.tp-tranger>.tp-tranger-c {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 0%;\r\n\theight: 100%;\r\n\tbackground-color: rgba(207, 198, 198, 0.47);\r\n\tborder-radius: 6px;\r\n\tz-index: 2;\r\n\toverflow: hidden;\r\n}\r\n.tp-syk-ico {\r\n\tposition: absolute;\r\n\ttop: 22px;\r\n\tleft:12px;\r\n\tfont-size: 1.6em;\r\n\tcursor:default;\r\n}\r\n\r\n/*loding*/\r\n.tp-oneplay{\r\n\twidth: 120px;\r\n    height: 111px;\r\n    z-index: 999;\r\n    background-color: rgb(234, 62, 73);\r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n}\r\n.tp-oneplay>svg{\r\n\twidth: 100px;\r\n    height: 100px;\r\n    fill: #fff;\r\n    margin-left: 10px;\r\n}\r\n.tp-acenter{\r\n\tposition: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin: auto;\r\n}\r\n.tp-spinner {\r\n\twidth: 76px;\r\n\theight: 40px;\r\n\tz-index: 7;\r\n\tdisplay: none;\r\n}\r\n.tp-suspend {\r\n\t-webkit-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n.md-iframe {\r\n\tdisplay: none;\r\n}\r\n.tp-place2 {\r\n\tbackground-color: #3b3b3b;\r\n\tmargin: 2px 0 4px 0;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n}\r\n.tp-spinner > div {\r\n\tbackground-color: #fff;\r\n\theight: 100%;\r\n\twidth: 6px;\r\n\tdisplay: inline-block;\r\n\t-webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n\tanimation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n\tborder: 1px solid #dadada;\r\n}\r\n.tp-spinner .rect2 {\r\n\t-webkit-animation-delay: -1.1s;\r\n\tanimation-delay: -1.1s;\r\n}\r\n.tp-spinner .rect3 {\r\n\t-webkit-animation-delay: -1.0s;\r\n\tanimation-delay: -1.0s;\r\n}\r\n.tp-spinner .rect4 {\r\n\t-webkit-animation-delay: -0.9s;\r\n\tanimation-delay: -0.9s;\r\n}\r\n.tp-spinner .rect5 {\r\n\t-webkit-animation-delay: -0.8s;\r\n\tanimation-delay: -0.8s;\r\n}\r\n@-webkit-keyframes sk-stretchdelay {\r\n\t0%, 40%, 100% {\r\n\t-webkit-transform: scaleY(0.4)\r\n}\r\n20% {\r\n\t-webkit-transform: scaleY(1.0)\r\n}\r\n}\r\n@keyframes sk-stretchdelay {\r\n\t0%, 40%, 100% {\r\n\ttransform: scaleY(0.4);\r\n\t-webkit-transform: scaleY(0.4);\r\n}\r\n20% {\r\n\ttransform: scaleY(1.0);\r\n\t-webkit-transform: scaleY(1.0);\r\n}\r\n}\r\n.video-full {\r\n\twidth: 20px;\r\n\tpadding-right: 30px;\r\n\ttop: 9px;\r\n\tposition: relative;\r\n\tpadding-left: 10px;\r\n\theight: 30px;\r\n\tcursor: pointer;\r\n\tfill: #fff;\r\n}\r\n:-webkit-full-screen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n:-moz-full-screen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n:-ms-fullscreen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n:-full-screen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n:fullscreen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n.tp-con {\r\n\tposition: absolute;\r\n\ttop: -90px;\r\n\tdisplay: none;\r\n\twidth: 150px;\r\n\tmargin: 0 auto;\r\n\tpadding: 6px;\r\n\tbackground-color: rgba(255, 255, 255, 0.75);\r\n\tborder-radius: 6px;\r\n\toverflow: hidden;\r\n}\r\n.tp-color {\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\ttop: 18px;\r\n    right: 15px;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\tz-index: 7;\r\n}\r\n.tp-color-w{\r\n\tfloat: left;\r\n}\r\n.tp-color-warp {\r\n\theight: 60px;\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n}\r\n.tp-color-main {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder: 1px solid #FFFFFF;\r\n\tborder-radius: 2px;\r\n}\r\n.tp-color-bo {\r\n\tposition: relative;\r\n\tbottom: 8px;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid #8b8585;\r\n}\r\n.tp-place {\r\n\ttext-align: center;\r\n\tpadding-bottom: 4px;\r\n}\r\n.tp-rightmenu {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\toverflow: hidden;\r\n\twidth: 130px;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tborder-radius: 4px;\r\n    background: rgba(28, 28, 28, 0.9);\r\n    border: none;\r\n    text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 2px;\r\n\tcolor: #fff;\r\n\tz-index: 9999;\r\n}\r\n.tp-rightmenu a {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n.tp-rightmenu li {\r\n\tpadding: 2px 0 2px 8px;\r\n\tcursor: pointer;\r\n}\r\n.tp-rightmenu li:hover {\r\n\tpadding-left: 7px;\r\n\tbackground-color: rgba(255,255,255,0.2);\r\n}\r\n.tp-search-user{\r\n\tdisplay: none;\r\n}\r\nul.tp-speend {\r\n\tdisplay: none;\r\n\tmargin: 4px 0 4px 30px;\r\n}\r\n\r\n.tp-copy-input{\r\n    display: block;\r\n    width: 100%;\r\n    height: 19px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n    color: #fff;\r\n    resize: none;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    line-height: 21px;\r\n    overflow:hidden;\r\n    font-family: Avenir Next,Helvetica,Arial,Lantinghei SC,Microsoft YaHei,sans-serif;\r\n}\r\n.tp-control-alltime-phone{\r\n\tdisplay: none;\r\n}\r\n.tp-loding{\r\n\t\tposition: absolute;\r\n\t    width: 100%;\r\n\t    height: 100%;\r\n\t    top: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 20;\r\n\t\t\r\n}\r\n.tp-loding-img-warp{\r\n\theight: 120px;\r\n\twidth: 120px;\r\n\tbox-sizing: content-box;\r\n\tborder: 8px solid rgba(200, 200, 200, 0.63);\r\n\tborder-radius: 50%;\r\n\tanimation:lodingborder 1s infinite alternate;\r\n\t-webkit-animation:lodingborder 1s infinite alternate;\r\n\toverflow: hidden;\r\n}\r\n\t@keyframes lodingborder\r\n\t{\r\n\t\tto { border: 14px solid rgba(200, 200, 200, 0.63);}\r\n\t}\r\n\t@-webkit-keyframes lodingborder\r\n\t{\r\n\t\tto { border: 14px solid rgba(200, 200, 200, 0.63);}\r\n\t}\r\n\t.tp-loding-img{\r\n\t\tbackground-image: url(http://cdn.aixifan.com/dotnet/20130418/umeditor/dialogs/emotion/images/ac3/02.gif);\r\n\t   \twidth: 120px;\r\n\t   \theight: 120px;\r\n\t    background-repeat: no-repeat;\r\n\t    background-position: center;\r\n\t    background-size: 100px;\r\n\t    background-color: rgb(255, 255, 255);\r\n\t}\r\n\t.tp-loding-text{\r\n\t\tcolor: #ffffff;\r\n\t\ttext-align: center;\r\n\t\tposition: absolute;\r\n\t\tbottom: 30%;\r\n\t\twidth: 100%\r\n\t}\r\n.tp-img-back{\r\n\tposition: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n    -webkit-filter: blur(10px);\r\n    -moz-filter: blur(10px);\r\n    -ms-filter: blur(10px);    \r\n    filter: blur(10px);    \r\n    z-index: 2;\r\n    overflow: hidden;\r\n}\r\n.noflash-alert{\r\n\tdisplay:none;\r\n}\r\nsection.clearfix.wp.area.player {\r\n    z-index: 99;\r\n}\r\n.off-light{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 50;\r\n    background-color: #000;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n@media screen and (max-width: 700px) {\r\n\t.tp-tranger{\r\n\t\tposition: absolute;\r\n\t    width: 97%;\r\n\t    bottom: 4px;\r\n\t    margin: 0;\r\n\t}\r\n\t.tp-video-con>.tp-send{\r\n\t\tbottom: 60px;\r\n\t\tleft: initial;\r\n\t\tright: 10%;\r\n    \twidth: 80%;\r\n\t}\r\n\t.tp-control-alltime{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.tp-control-alltime-phone{\r\n\t\tdisplay: inline-block;\r\n\t}\r\n}\r\n/*animation*/\r\n.tp-zoomoutdown{\r\n\tanimation:zoomOutDown .5s;\r\n\t-webkit-animation:zoomOutDown .5s;\r\n}\r\n@keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n    transform-origin: center bottom;\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n@-webkit-keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n    transform-origin: center bottom;\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n.tp-zoomoutup{\r\n\tanimation:zoomInUp .5s;\r\n\t-webkit-animation:zoomInUp .5s;\r\n}\r\n@keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n@-webkit-keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n@media screen and (max-width: 470px) {\r\n\t.tp-syk{\r\n\t\tdisplay: none;\r\n\t}\r\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABqCAYAAACSwQcHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACfLSURBVHhe7Z0JeFTlucej9dYNCJB1zjJhiWJRQIwoKBCS2c6cCZsXtLfU645WpdVrqSza1H1BhOyZmXNmkiC1YrVqLVcvKhUVqVprb9W61wW9rrWtCipi7vuefDPMmflmcmYyCZnJ+3ue/zMw51vOOXPy/c+3FxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE0V+4g9Job1A4y6tJflBHVLqsK5q0zBUQjp2nFQ1nwQmCIIihzuLmicO8IXklmMUHXl3qTqFvQe8rIanTG7afvHjTxO+yJAiCIIihhi8kHgHG8VycUVjVGxC3YW6XfSxLjiAIghgKLNxgt3l1+VWOMaSrf6mafDXUSIaxpAmCIIh8ZZ42YTiYxx84ZvAl6HdQs7jVGwIZn/IvFU16xauLu+LCxutFn9/uZFkQBEEQ+YgaFM9PMABNek4NVxzLgpio31p9kKqNqVB0+VIwEjSerxPiG2mIu6E2cvlQ6R9Ztlk5eHF4WvniTVX2024/XobPQnaIIAgi/1jsH1cIhT3UKEyF/2vzNFlgQVLS3V1wgE+3j8PaiaJLX8Sl0yNNvhtrOSxKSurr6w+sv6/usGWbl4zIhpbfM284ftbHfR9R/dYzDimAa2DZW0bZMHqEw1/qVHRhtaKLbR5NfMyjCTuVoPA5fH4Jn7s9QeFDRRO2wvWvUjrk8SwqQRBEfqBq0hVxBf63vpCossNpMbdDnOzV5Ufj0jOkamIzC2aAhlLTXjK+pm3kFIdW5oMwP1M0W8gdLP+TK1D2ritY+hHKGSj9kPfvVN9FhMfi45vCG/8ue9utlT8O+V82PyTI7PS4oFl626VJ3pDcADWv92Kvr1dp4i5Vlzd6Q9IklhxBEETusri5ZBgUbm+aCrqQtGWpv+rfWJC0weYqSOdKRZO+MqWrS3vqwtICVbOjWWyCAvgDeHPHMDgcODbc/tQ/4foblEClxC4nCl6XqkvrIUz8daUpNBLp+kVrpUNZ0gRBELmHotkdpsJNk/Z4Qvbj2OE+4QtXzIE0/xGX/m74HEyGkUwfqyF5PrsUqHoUHKDochMnHE97wSRw8MGeuO9NUnTpcWz6YzkQBEHkFp6gTTcVbCF5BzbTsMN9BgrdH5nStyBVl7tdwfK9zkDJLmeg7P8cgdK3nIHSN/Ez8u/Y/8cq8r0zWPae01+y26MJmZuVJu72haSLq7dWHwQ1pUVgfry0voQayw64bxvUkHRFXdju8GhjJhgDDDrk8WAkXq8ut0C4j+LiRfReXUiaxm4XQRBEblBdDwWjJr0RW6BBIfhTdjgr4GgtSPfJ2Dxi5dFsux3BkjdcwbLfw7k0OAJFS2raR86+5H7fuLXbLx3tf6b+sIbNyw6OqP75+u9GPiOKPR7RmgcvO7xh27KS026ffKRDK55a3V50vFeTDSlQYJs+NdmtaGIzmNWHvHNUdSkAJvAX0/ea9DnoWpx4iZ3+7HKTUrfxyGKIdyXoM1M6PXpzYde4UhaUIAhi8OPSyo6BQvubSEGG/1Z0+0R2OGtAjeLUmMKyR5q0Dd7WT1+y4Thbd3d3rwXwQLB0k7PQHSxdCrWy/0s43zj5wvYlLFpazO0YOxniPx+fnjck3p3Noc7+7VdVNz2xom5A9OSKeWsfqB/Nsi5Y9/Dls7nhkqjxsVXe1u2rnc1PXD675YkV0xp2rJzY8uhquX5T/TAw54NYsmnT+ODqsS3bV83l5dmrnlzpaty+8uSGbSsnNm1ZUZTueaxZc9nhLU+ll3fjo6tOYNHTZv3vV0zjpZmu8LdjSSawftvKybw4POF9r99afwiLaqJ+w7IRVn+XhsdWzW18YuVRGO/StZce2vqHK7jhMhY8u/AblxgnxrjpnuUCfs8NH6f1j69QG7atUBrh+W167PI5rTtWTW987PIpDY+vHo/PzbJlyw6G8i1rLTqDClWznx5biCm6/HJ1uIL7o/eFRXdMP9QdXygHbS52eNCBw5c9Wvl/Qe2IN7ES9UZfCntjkUpd2hqXJupnLEifWdBx5LOOQEn3QMgVKu0+YeXIWSzrgplri/7IC5emvq1pKf6qprnk3drmkqfmrCvb6GoWz59xWXkFy6ZXZt1cfIlTK+WlnZZq20u+gfPYOWd9yRZXs3DFyVeXHc2ySIpw0vAJ7o708q5uKLmfRU+b6vXFj/PSTFdOf8nrBfUF3Be6OQ0lFzmC/HjxwmfiuEtHT2dRTcy8pbjO6u+C4WY3jDoV49kmHmJ3h/v+e8YK0595c4linBjj+J+N+j6ePy98Oqr1w3PTVPxpbUvJX+esL93sCQhXVNfbDDPMC1zx/R+6lPEDnAo1XFJuNPmwfBRN6P5+1+QT2eHsksX+G5wf4gyWhzl9H3/uaz/R/NB4GdKJGwYsfqKGK8pZkD5x6oajnzGn3X/ydcrdJ68umcmyLqhdLzzNC9dXqWG529cl44TV+xy3CFNZdklxrLX9GOPEp9MXqSG5W+2U9yoBaYujIfk5CDOHH1m3Ib28wSB/y6Knx+KC70D8v8Wnl4nUsPTVpJmFo1jKJqaeU1KJ186LFy81ZKR1DotqwtMm/sILx3nx4qV2yLuOrBtWjPGEow+R67qy/HvC8zHnFpvHODHG9JVlp+IzzQvfFxn3pEP+xhOUb5txWVluN1l3d9cf6AyUmhdNDMkr2eGsYkwyNEYm9eQD+e5Z88SFlt8kF9dP/K4nMOpofHNnXyWwsN1uc2u2yz1B27nZbAo6W5swXAlJP43eox712UAQb8heC2nhaK1o2qomLWeH+0Q+Gkis1A7pa8c6IeW96g8DiZWvU/rStZ5fSA6kgUyZXzgSCmv+ShBpCgy6e9pPSrirTwAHKgHR3BeYQu4W87yvCK5W4X5eeJ7AqB9h0XLeQKICI/F1yG+610qVLMvco8dASl6IvTAlKM9lh7OKVxOvis0Hqndf3vT4RaZZ7snaCev8tmJVl4MQ7yXQjbyC24kz6UPy7VBT+BTCPJPtobHekFir6GL0/D2a8Ods1XQUTeqMpMv04hlZaEbMdwNBwR9ht3O9bQXLNoH+NhAUGNkeV4vNzbKMMpAGctx5pZOw4Oelma7wntbcKBhNRjw8bcI6fJPmxY2Xp31f4R+hurrgIG9YfosXPkGYj1/8CYuaPwbCBLW516edLhSxbHMLnoF4dXsdO5w1PCHbLI9mzImI5oMzzTdtWvwdPK5sqBzh1YQLXP6y72/q3mR8F2F+uGIMhIe3FfFdMIePQVsWdJpvuLK58mAIcyPoHTiOy7FsVwNy0j+ATDj9zhlTPZotev5Qg3qWHeozxsgwfd9ABkNB+8nscMYMBQNB+bAAbxa5zaEDYSAoX1h6rfoMs+kPpIGcdEXpvGwWePAiuZolnUDNDWKtCibDi8fR+9XV1abBB8efOUqGc7XUDAamuHfq6aO/x6LmnYGgPH6pg2WbWzAD+XPsxfj0ioXscFZY+szSf/Pq8lOxeYC+9OniUjy+GEwEl32H7z51Bksf9kN4IyLg2WC3wZvOb9E84LMTZ25DuK2xJoe1ETUknw/Gge2/T6gdFTXw1rJF0eWNS8CYlLDgUDThbBxCy6JkRG2w1MXO3VA2DQTvAdwj0+8AtZJ6djhjhoqBoBRN3MayNjFQBoIFqrPZ/NY+kAbiDdkv5qWXqeBaNrCkE5jsKjtcDUt/58WLFxrFkYsKTXsDzb6qbC7WcnjhE6RJL0CUaE0/Hw0E8vn6e+cPP4JlnVs4g2UPmi5Gt9/IDvUZbJJyBUtvxEmBsXmouhhtcqjT5Znw3YtgEv+Agn5jpHkK18hC04Bj78Kx26AmMrIuXHEU/P+P8Mb+y0V39CwBUqdVzIDvnjUK4HDPW7uiS20Q5jkwkovh30/D54tgPmuxpoPHM8HZXn48FFLRjnQwkJ0NmxsOZof7DJhocyRtFOR1BzuUMUPJQLCgOuHykiks+ygDZSAoT7t8O8vWYCANxNUqNvLSy1TuVmEHS5qLp028jxcvXnjvXQ3m5j0oD1bzwsYLm8ngPG5l0Qzy0UBQtc2lq1jWuYUnKODEtpiLEXf6Wu3cERjpAoXsJea0oWDUpQC+cePxucGxZVDw/zd8/xa8aezwaqKGnd/Y/g/fYZPU26B7IxPscLIe/L8D9Lyi2xf5OiQR3tTvgAcNm+HOwjCIGhJPgf+/BnoC9JCqif8Dn9sgr2sy7Vy/6G5HkUcrjy7JAgX8bhxFxQ73GUgPa2H77pMm3MUOZUyuGQiksQf0bRrNI1EZhU2LbRnLPkomBgI12m+w6STdPgV3q/giy9ZgIA3E0y5CTZ2fZiaCGsYH8U1PscB5nm/lvuKINXe7dBmLZuBqlu7ihY0X1lKqrymbw6IZDGYDgWcQn5m9mRjPv3dNeJRlnVvM7ZCPhgswjd7AJiV2OGM8/vLTcTnz2HTBIB6ou892GB7HghxM4wb4/h1QGG4+/gH8Dr4fpmjy5UZfhiZtwVneRoIMRauYCkbwCugPcPwOMDyckHdlrDHgMFiocYCByB/D8ZtdYEDw1vMbCPesEpLPYMHSxq3ZtkAa0etxBkpMD11fUILiNbFpDzUDgZeBL6ecUTjmez8YWVF7s20hvGiYF/e0II9fCrDso6RrIGhEzhbhgmPOKS2b9pPi2fjc4He8sPGCcJ9WLd23AOmA1kCaxbi+zL4JCsJvxOrRCYuJRjhuWcl4KOAtLRHkahK6WDQDMDt8ueOGjRWY2Me2qp7yIsJgNhCoBa6Z/MOy0pOuLKuBczeVFb3JGSz96JVXNmetRWNAgcILC9d9F4QbQIXsJ7HDaQM341yPZqywG00TCvQnY2s2WIOAwv01b0jafsptYyogzL24Bhe8sVyOn15NfoC7kRX2eQSNKjDWWt7G0Vl1/sT+DcgvAGE+wmYs/L9PF6fAv18Ac9qhBiuinXIRcEkX9s+kGP0gMfNB3EHbFnaoz0B67ZF0eySamkMy4T9um7wOf1u+pEfgfsTk17ugtvcW6C5eet6wdM/MleXRFQzSNpAuabetumesPzL7RpvLcjs5ExSi97LoUTIxEHeLEK3NVpxRcQg8S/iSww0fKyh0v6qoPiw6h2egDKSiuuIQKFQ/4aWXqfDez7nOlmogx4Eev7XhvPCsRZvDxs4tLfNtkC2tZO1pl+5k0aJkZCCa9GGy5xYFYe6pvclmWjw2QwO5lkUvqFo6qhDKMniB5YeNlzNQuvfRVx/IWovGgOIL2qugwIrfmvYdnyYdw4JYxhO0/RjMwzyiSJcfXRQzf2NuuGI6fA9vx+JrkWHDcLND+EODdkB4Xe1MLOQjYBOXoomL4S39wmTDdXERQygMfrogZgMneIiWQfrvQC0kFFtj8epCHRhRky80NjqTmsdN95w93BUs2xm5LrjWrxZ2HZX2PYoHCs9j4I37X/vul9FEdgs73C9MX1V2Qrp/IDVrbWEWvVf6aiDjXGWlcH5pLZnvWC8kNAP01UAQt1+Emi4/fKygYPu2smZE9HkbKAMZVzfKjk0nvPQ4wnApV4hG4T1zNQpnsiy4KH5prbWXEPGTyspK4+265oby2VZeDLDpS2kRf2hkFEMmBuJuE9N+0eurgSDOBgGbzrlh4+UOlndfcKej14mxgxZVk+oTLkyTPsVJbVZ2EcRtXGvbi66GQtpsHpp8d2zNo6cjHDebknfCsVWR/hCIdzaEfx/+gH/bX8ubY/MZvE0+DHm/quo9D6cxikuXN0IB/nc4h9/ODY5PObFHCQpnxF4f1ELux5Fm7HDaKHplCdzn+OaHryMDAvqLE1eUnTiYDaRSqTwYCop/8sImk7PJljAyLhsG4lhvMw1wSCY0C7nm8OgSJwNlILOuEU6yXFvTpA/gOX+ReyxB4s0sCy6zrimrtZIvGuuxZxYbTdGuBuEiK7+HGpa+OmpJsc3IKIaMDKRVfIhFt0w2DMTdLN7OC8cTGsh5v66tYVFzDxzVBG8T3HY7eODegoepEQrZahwNZTT3QMHb8ErDwUs3VhV7AsWzoCB9FAri2Hh7FU2+JXZTKlzeHL5/ENLBZc3bIyOpEN9G+yjIZ0kmtZ50MGo/mvQ6nMPT2J+C5gg1ks3su2fg846FG+wJD24EXNYdzv1edo2G4MdPOmY+FdhXA3niLoix9w0kp/zDzQaD3UCMvVcCIk4K5YbnCQr/51nsKNkwkNr14lpe2HihWYytPXwyizZgBlJ9TfnpVg3E2STsqF1n7stLJmej7T6WBZeqOnghszCcFwdF1NxUbuxu6mkTQ7ww8fIExMeNTOLIJQNxtQi38cLxhAay9C6HaT2unAMn6EEBuo13gTH6CAq9l+GCn3UESl/xaAJvafK9PuysZkNyEcOgdKkL0sdC4RF882aHBhxVt/8YzuEdKKj/G/tZoJb1MNRIcKY7jvB6Hz9xciILngAW/D3xe67XGSz9a/wEyFSgCWENKDaNfRL/sLh54jAWtN8Y9AYCwB8kd2n9ZFJD8sssapSBNpAKR2G0GWKgDAQK8Z/z0uIJCvBfuVrEjbxj8VI08X8h+ZSrLbhbRNPLVDJBvsZscqUdm6j5YSLC30Dxy9zVBchABjnG/Iu+b9n6TWzfAwLfXQQF9sdgPm8qUAtgX+8XsP8D+0HgfN7xauLv4fNReGgv7Kkhia/Cuf4DTYYF5+INSudGrtcVLP902V1K0hErEZSGyoN9YXGOV5Mhz4R7hnoD3rp7TScb5ISBtKRnIFCDfh2imQq8gTYQe21htDN2oAzE0SBYMgSUp1Vc49Xs63jHEhSSPrNBLYNlw0UJ2pdaub+eVikgTS84VNHFXmss+Fwee3HinB4ktwxE/CUvHE+Ggdw5x8Gi5j51IftxUNj/jxLfp2FRsaO4fB3SCVBo4rDcTxVdvpR9vV8xaltGc5rxQL+n6j1Ln/h0+yK47i/gu498ATlpp/qCzqMw/gd4rWBA3U6tvHnr1rj9IqAG5mgaXqRoggOu/QasucFnsqGPf8P+IRaz38lTA3kDog05A1GC2KfITy9WRse0bl/qbBRX4XXywsQKC+pJZxdNYNlwmXRW6Th4jnrtwHc1ib+fdEHRBEtzazTp9foky8nnlIE0CJbmu6DcWnn3eXfNzq9dSbGDG40E3sp/AUbyDLytx4/UiggLXPMoIiiIMY26jTbche8hEIYx5nkYiQ8CcCIiFP5dcG2bPR2y0fmJkxWN5qwe43wFh/8ageP4YVfZ4WAIpv1NXEGhcVbr4bWz2wtPwT4jSONJC29ceyHcXXguLOkBIU8N5E2IZip4smIg6wRLs7z3k4EcqPiNCbfc9GKFv/f0FSWKu0k6y4qB4H2rWSsafRepgOc3cXO0eIWlN431uiz01XjaxRaWdAK5ZCBwHZz+Tb5cwdLuO55rNC35klfgaCVj5rcuVUPh6FWDkoLyhSSPNzD2SLgJpiVRoKZxCS4domrG8Nx/YtOQEhb3a9MVD+zkr24uGRYZDYbgvBK4hj+B9sL1vokmyg5FUULy3NjrzUSQ9ouYjpXtcLNNnhrIW7gvBotukA0D8bQLOKeIGz5WaBYD3QcyyWcfpXZYG+6Mv/eJy8UjPO12nxUDgfsZ7btIBS43wo0fI1WXPq9ZU34d71is0GBcjaKXJZ1ArhjIjAvKSuG54/UPc+Xwl3z6zLvPpGwuzGvgJnTF3hAwkCYchQX//tiryTvhLf9C3jLssTj9owpr2kb/pyNQ+l+z20ad2h87I1qlp3aCc1Vw3Lz8lHrbGNPeJfDHdWfkWtPUXuychHtygatr8uEsuQGHDIQvnoFAwWBpPD+axZiaw6I11oEwkCMWjpxiNQ+4D7sKpxSOnHLO6BOsFsKeNsnPskqKpUmfeF/bxO3cYzECM/zHxMUlSVspMjMQaYd48mFTKmYfNpUncXbiQoaZGIgnIOo168pne9qlc5WA9EdemGSa31G5nWU9NPGGzPt9gHC9f5C80xuSr6rz99IZ11B5MDxkj8SmAabT2Zvp9CfzdPtEOA8ccrwH3qB+FZkPw5ZKSWeOwmdQC3sM4lyHo75ihzbvL8hA+Io3kFmXFNusvkkaNRD3sGg/1kAYiKdF9Fm9Pijk/4Zb1R5xSuE4KIQtLUPibBS2sqySYqzOGzJGV3LTiFGvfSVwPSmvPxMDwb4f/B2SCcIk1FAyMRDMB3+LdJ43FD5ztS1lWdvKOidRdOmcuBvzBRSab4NusDJk1xEoxmaw+B3VPpjZyt9ac6DwhuzngpF9BTWGXaBV2NyEQ5TjztNo6oJr3cFGceHS7PdBLWyFqlXURBaDHEyQgfCFf8yKX1wLtWe3McIoJOMmZtyw8YKCbU9lzPpRA2Eg7ibbMjxnXlrxcjaJT2CcyiWjR/i64HnmhEkQ9isl6dCOxeO3tjpvKuF14Ns7S5JLJgbSm9ztiTPVMzGQTKV2yjuPWjA8NzeVyhZevcJrujE4i12XV1stPOdpRTh8+GVTGrq0FedMsCB9pqajZLyiCfWgs602j+GQXzgP/OPA5R/eUwIV0+E845s0NtXdV3UYmksV1C6SjSAZTJCBJBcWZBHxjieTr0P6J66dxbIeEANR2sUmuG5uWvHytIsbWbQDoKBmIwhTS+2QvrJVmX8XHu5W0dJw3lRSO+RvJpxWOIYlySWfDIStOv28J9AzgGdIg00zcTfo03Q3cfJ2jj0S3uTbvJpwJxjQrZ725DPC08UdHDHaqCWw8/Po4hp2qFdYU9Z7EB+r4PfDuX0eSQelanYfC5ozkIFkX+426c8sW4OBMBBnk7CZl06CwGScDeI1LBrUGIxaMj9sjPAZOaleSLY/ehRjdd5OOaMh/xF5AuLTLLmk5L6BiLtczcL/ulrF22rWlJ8ycXFm20vkHcqGSgkK1tjRIF/315pWmTDLP/ykmHPDhRCfY4csoerij+H6sN3YvES9Lr07EDPHsw0ZSPYFb+FtLFuDgTAQeCZ7H0KLAgOBN93o4ojeoPwAN1ycsHN8zvXCaSxaShSLq/PyZDRf+cVfsKSSkgc1kI9c7VJn7S02F+4Nz7IjcH4H3BxTtRjXnWKH9zuOzuE48S+6kb9HM+901hs4Ysqrwx+d2SRR7SxITkEGkl1hQVuzTprNsjXobwORpkuHwrVZWsYdm0tmXb9vZ0BHg7CBF44ntUO6gkVLiRIwRl1y0+hNeP9mX1Xe60S6fGnCwt9DCUp/qmkQMt42I6/A0VJwY/5qukkheT47PCjAzanAAK5Vg/L5sQs5WqVnGRLzTPK+7JuyPyEDya7UoPRrlmWU/jaQSUtGS1Z/QzyPCYtGTmJRobCXrueF48nVJPySRUvJzKtKHZkWumpYeruqqvfRifnWie7rlL50rBfqWLZDG7ghW003iG3mlC94dXGN6fp06aXBMCQ3E8hAsiMj7ZD0iPPGcYUsyyj9bSAnLC+eZfU39HXJX09ctG9PHqVV/pHV++IJ7NsQKhXGcF4Lq/PyhKv0smRSMpgNRNGlZ3AuiKdN2uEN9z5kOSKojXw8dfmhAst66KLqcat8BmXLHdWDHWOeSs8+69HrgwfmOnY45yAD6ZswTXh7fN/dIv002ZtzfxuIp1U83eq1QY3jg4KYNveZ9bYFvU7+iygkf5xqf/RY3K3pD+fFa4D7uIAlkZKMDCTUk0cygUE+xJKPkomBxM5E9zRL/4Fp88Lx5NMrgizq0MWr22+MvSlQwP6KHcp51A5pduy1gfbAgxltEsg1yECSC8PjvYlI0Yx5PriW2zsev/QkyF/baFuAb9wsGy79biB++Re8NHiCQtI0QqzmaluVVQOB2ss3uOshi5oSd5t4XrrDn+EN/ItJP7A23ysTA/H4xacd64QZ7gbhJJ5c6xP3IOqrgeBLhRqSLW2FjHL4Sz7Z/vb2tJvV8wq4ERfF3Zht7FDO49VkLe7anqzvHvg1rLIFGQhfWPg5m6WLp10kFFUttRVPO10oGjWqoLCkpGBY7Bu8FfrbQJzN1jvClYC5meYI32gRfn9Ls9GNDu7rbCm3e45w9GkjxqPh8NJJJvidE5qQkpGJgeyvxRTBTB/jhePJGSzt3vq336ScA5P31CUuMPjS/lgoMNvgLoxwLbjRVPTaetsvZLBDBsIXGkj8WliZ0t8Gkk4B5Vhv7gi3VdkOg9/f2gguvCcNwtksam8cgLUdXjo8GcN326WLWNxeySUDcay3WdpsC4XLuZ9zZ210N8shia9j7AmmGxOSPrSyn/pgRw2Kp5iuSxN3zw3Yc3rpZTIQvnLJQJSguJOXBk8ev7iz+ubyh+bcXP4wqvYW28NwrfFzmrjqKeTFW1i2veJYZ7O8F7gaxhqfbSaL2iu5ZCDOJsHygqu4odSP7qwZ2kN64U19DNyMfetZadKehRsq+7TDHjYTLdu8LOn2sgMBXIt5YxhNfIAdylnIQPjKFQM5yjG8yNdlt7aeVRbkaBR+x7LuldpbBcs78aGBuBptJ7OovZJLBgLPb1o7Ep7369oaFnVogvt/eHVztZi3l4ZVPGBIcGMfdAXLXvZo4rV196Ve0bc/cGqyANdh2izLG6r4ATucs+SEgaS5J/pQMhCc05FuQdonhaQXIFtLK2OTgfSQ7p7oP7q7JjrRc0hSv7X6oMQFEe0ZT5LxaOVxez3Lj+JkQHY4AexvcWvivyu6tBY+s+LmXs1+nvkcpL8vsrC68GAnFwzE3d77/tkmhaWElWPz1UAct1pfxj1L+rxkYvJ9OmIhA+khXQNZele1wqIOXeBmbDPdnFDq5ZlTATUP3no9n4GR6N5Oe51TKxJ8rfZRvtbCUR5tzAQwr8C+meLiLlUXT2RJZQykZZ4cqcu3s0M5zWA3kOr6goPgu3/wwiZVP+2Jnin9aSDuFmnZQBoI7mV+/E+ElPujRyAD6SFdA7ng7tqkOzEOGeCP2NRx1JfJdh5dcEJ8c/NRjHr26ZA+N9Sz3Lr5eFC8lCWVEXODUiWkY+poxC182eGcZrAbyIR5RcOh0MK5F9zwPKkh+VUWPUq+GogSEJt48ftL+KycvKpsLss+JWQgPaRvIA5a0oRtY7vv5mjSBnYoI3wd9ipI4wVTmlakibt8QXsVSyYjfJq8ypym9PYZ+3Gb3Wwy2A1kjDqyAgzE8nIQKCj8X2LRo+RtE1aD8Dte/P6UEpYvYdmnhAykBzKQDIBawTLTzdEky5OEktHTOS/dCGlZ26TeqJHI/8miZ0R1ffVBkFbceHa5hR3OeQa7gdTeapvlS7OJRvFLf2LRo+SagUDeONoJJyziyEOejEECxr76nPj9KXebaGm5jcFmIK5W4RGImuqeRhRt/iQD2U8ourQw7uY8n63JhDgqS9Wk5ZDmVq8ufgJmhTNe8S01og+gkF+jdMjjWZSMmddZMZWl2XMdmvRtXWfFDHY45xnsBqIEpTYszHlhk8lxq83YsjWWXDMQXDbF4xd38eT2i186G8UVFdUVh0AN28oe5PsE14W/d6zS7UNxt/a+Pzoy2AwEyqSk9zQiVZd2Tz69+EiWDRnI/qJOq5gRd3Per/NXZXX4LS4dj7PDlYAoOf02e0SLm62NErECGlHcdTyfqyvv8hhsBgIFyddKUFyq6vKlYB5b1FB654ZyNAj3s+yj5JqB9CZ3m7C6aqnNDoWopWVIIvK0iY/OWF1eMXNF6TjUifVlY1xNQicvbAq9UwB/e+zykjLYDMSKMM1JS4qigwTIQPYTc4PjseM5Zi0ccZev4wiRHc4JcK8QqHH8bd81GG+G9exwXjDYDCQrCkh+ln2UfDSQY88qrk63EHU22BJGDzqbpJ/zwiYT5PnluBmHl7LoSSED6YEMJAOMmoFu3hNACY7NqTVevCF7bez5g7725vDKuzzyzUCw4Hc12xLWJ8s7A2kRVvvC0hI8T97xZPL4pXXstKIoun0pL2wy4fMyfbmt14nBZCA9kIFkAPZ3wA15w3yD7DfW+EfOm9U+cnZty8jJ1YHRktIwegTusYHNUSzqoEENySHz+UtP5PLKuzzyzUDgWr6dviqxcMs3A1H84gp3q1TPO5ZKdRvsy9lpRfHp9kXYN8ILzxNuw1q7Rvg+i54UMpAeyEAyRNWlJ3k3ielbrybtBn0Kegv0HHz3iDck3w0Psx8+r4I/4gt9mrgYawI+XZwyt8s+VtErS9BwWBb9xqKgNBrOx7TyrqJJF7LDeUPeNWEFxad47fP5ZiCeoPQzT0Dq4B1LJiz4q28QzmSnFWXS2UWOdAtjtaP3plwykB7IQDJE0eW4JUj6JhxtxSYUvgt6EbQddD8oDIZzs6pJP1XC9iVKUFSNTvyAcCQaDq4EnG7HN6R3GqS7L39N3DU/NF5mh/OGfDIQX4e8Bwp97kqmeWcgmrTc0SBYXsYdhQZSc72ostOKMuWMkmPTLYwd68U7WPSkkIH0QAaSIbiECNyUjPZGzpL24pLrULv50KuLr4L5PA3/3gJG8yuoHa1XdXm1N2w/z6fJ8+p0eSb2b9R12uxoOBAXjSmalqLJm9ll5RX5YiA4/NLdJiad85NvBuJsFlcpQelN3rFkMmog15Yfz04rytFnjsLCOL3RXFjT6wUykB7IQPqAT7ePUzX5arg590LhDW9M8l/g32+DcH2jfUu+Dw4ZzWqs8980+9kXlnpt881FctlAcIiv2il/49XkB7ztqQc35JuBzLnBtgZqyWkt8YKFo31m4Th2WlFwuRgowL/ixUkmMK+Pq6oKUtbqyUB6IAPJMtiHgX0M2CTk06RjoMCuBi30huznwk28EgynGWoDd2BtAf7/RxB2xn+EzUjwaSrYB0byxziqjJ1+XuGsH3f8wtuO+GJ+x/jPrEppGBdg0XvF1zL2cV4aaepf88Pj/z6vY9zb88Jjn68Lj3nY2SB0utrKL5x64YhKllVKlPVjL1zQVWn5Ohd0Vn4xN1j5Qxa9T3zPWXzEKRvTu8epVfn5fL0ysKDD+vWg4Hf+5KhpQhE7rSgTJ078LtzfN3lxkumUjZX/OnnpuJT7o6uN4zt4cXmC32Z3Xft4yxN0K08YLS3cCPeBk1ZfhGmeeP6+lb5r6itOWbjhiF28sHxVfj4vWPlzFt0Arkvnh01UXWjMrovv89JiitkCR2dh/8Xi5onDfB2SqOj2iUpYnO7VRS8U7mepYftyY7KfJm8Ag8FVe7Hj/iXQ+2BAuLhiNgyni51O3tHd3X0A6KA0ZdprIxUYNi5upsJ0Mh6pB3EPjEnLqrIy4g7SyeQe96aM7is7pQTgWCbppfw94Hi6aVr+fTFsXNxsKnoe8O8+Pzfw/367D0Q/sHjT4u+4uiYfvqDzqCJj5JZfmqZoshs7xlVd/DHUdq5TdTmo6OJvwGS2gRn9BT6xWQ2XhTBV5VVdehlX42VJEwRBEISZKqjluIMjRp/sH2Wvbh11zOz24TNmtxZOrfMP/O6HBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEHkOQUF/w/zYkfoS2gESgAAAABJRU5ErkJggg=="

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACcElEQVRYhe2WT4hNYRjGf2OYTIg0rmZjNZFrobHAbCZkITYG2bFVEyFLSrK0EWkiFsrCn8KGKamZUsyGCc1C/qwMmYkRYnSNn8X3HZ2Oe+eea6Zmc5966/bd873Pc97n+973QB11zDAakh/qVPIUgBIwlpu4IVDPmgprCruBQeAAqZfKg+kSMA60AGeAfmBtzRnUctGhnlVfqxPmx0/1cCpPm3pT3Z6sJZhdQc8c4CSwH5hH8Pc58BFoTD23GhAYAdpS/30GhoFFwDGCNU3AMuB2tQosUO/EN3mrHlQXVqhQEnvUb3FPj1pQu9XRuDahXlJbsxUoJ+BU3PRIXVWFOIm9UXSnukUdStnRp7Zn91QSsE19rw6r63OSJ1FUe1PEL9Wu1BnoU9+pmyYT0BM3H6qBuEU9p5bi3q/qUbU581x3yqKKAvrUcXVDDuIm9Yg6FhP/43MmOtVPar/aXE5AQX2qPlSXVyHP5XMmVqgD6hN1ScKbbkQCv+NapW5WBHpjFIFXwA5gI6ETTgZjNJbNH1Xei15uruLzWCx/Uw1nZY36Rh1UC5UEdKvn1ZUVfC5FIS01EKevquoVq/SBJLoMVylBr+Gq1UqMoZ88VkfUrdUEtMdDlWDIcOgWq9fUizWSL1Uvx1zXk/VyAloN1ygZOmmfd0X/VG/kJG42tOgXcd9ddX5WQPqDZABYB/wCLgDHgbnAaWBnSmsJeEDlUT5BGM1FwlADuArsA778JW7IXARDG8763Kbe9//wwTDKO8pVKM8hTJfyhPo9Jr6V04JJI0GeL6If0Y5O4Blhrk8bav0oXUzoZKNTJs6egTrqmCn8AeJNPXtlXJVpAAAAAElFTkSuQmCC"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsElEQVRYR+1W0U0CURCcqUA7UDrACtQKtASsQK1A7QArUCoQK1ArECuQErSCMZMsl+M47r3DAzRhv0h4u2/ezuzsEVsObvl+7AD8rw5IOiQ57VI3WR3wxQAeAJDkyUYBSLoFcAlgH8DbxgBI8oUvAPorvPgLwCuAMclRU34jBZLGAM5KBb4BTDIAGfRenDOQi2XaSWpAkjl/BHDQhoLIM33HANyRU5IL4OcARNsttnuSRl5EaKFP8jyjA+W8YWhoQvKomlsFYMQ3AK5JOrGTKFF5R9J3FFEF4FY5PO+z378GEWP8CWBKslcLQJKF8w7guW2bcxBKMqXWQ68syKIDIRqP3UKbci5InQkNmV6LsdDXnwQwIjlIvajt/0kKXFCShafgqTMRRu0ru2r1ccvG0D7ghLVHnRF53dpGbZ92wOyISXqK3DkjW1ZkwYqjiJMNwrvAU5Hj/6bQtu1Jchi8Da2RytpdECB8uf3f4SI5ILxBy9vTee6ka9VGaht6Guz95Y2YTUkcbKQyuQ3b3Fah4APAIEXfOgC43cPq0lmJgjavn51t++HaaQdWAbwDsOvAD/6OsiHZLcDYAAAAAElFTkSuQmCC"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACcklEQVRYR8VXgVEUQRDsjkAyECIQIhAjUCJQIlAjECIQI1AjECIQIxAiECJQI2irv3av7vZn9v6ox5+qr/q6293p7ZnpmSN2bNyxfywGIGkPwO8E+BHJmyWXegiANwA+J04+kXy3NQDlth8BfCV57YMlfQHwOnFyQ/KorDsG8BbAeY+VlIHi/DuAw+LMAM4BXAJ40rnlaQFoALY/AF5kIEIAgfMlrEZrUxBrAB7BeQUUgogA9GJcD/tbQnFXHuwDMOVPZ6i6JVlDuloaAfBBjn1kdnxB8ix6KckV4ncZkFOSvuBgWQ444Z43Tuz8eK7OSwi9/1mz/56kmZpYBuAVgG/N2o1FpoCwII2ZWLv9JARl00sAdu7f2FzLE9rLet/SyujY1nxY7SvhaAXLJWx2rur6gQFJ6iTQwdiBJCeSGaqUOsPft/GVZFBhPpBc+d4EwFrmJgcbhMM0MNFTzSUAfpCsqmZqfetfCVuTOEty2D5Eax8LwAlJx7nmwVYA3JE8GN9CUlam+yQdigogFbUlDPiwNgkdBt+01vq9K6fVCEkGEzauCIAPdflZzVoRcTv284mVakAkTkkZ3gIwK9d1TyZEkRxP4tsp2ZqoP4tG1KUu04tNlTCKnek0iNVgkllhxQI0aToA1nJpogOjxOmVmZcZnJWxVT4roicgj2T+H9l8M5JkmnzQnFnrzYp/djhoRWfjRu3Yh0XdbA7Q3Puwm/ZGsm2CSFv53FA6BuFat7JlI3llwEOpS7bOE905ovtdUFquk+6ydjpJFiC37ciGoUOSc8IJefagsbxTZv/vwyQCsfNPs7lUX/p+8bfhUgdz6/8BMgIlMGmen6gAAAAASUVORK5CYII="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACX0lEQVRYR+2W3XEaMRDHtdwjMHEq8PEGSDOxKzCuILiCkAriVJC4AjsVhFRgXIHtCuLMSMDjdRBn5vQGt569kW4WDTnuyE38gp4OIa1++u+XQLzygFc+XxwA9lYgjuOjdrsdG2Oe/sWNewFIKU+EELcAEGutS230+/14uVwmf4OsDSClvASAa2+wDGA4HN60Wq1PiPhkrT1PkuQ5BKkMQJJ3Op3vQogxN1IGoJR6EEKcufUzrfXFXgBc8tBAGcBgMBhHUXTL9lxprb9yGxsK0C273e47viDLslMueR0AWhu47DlN0x53RQHgaEniozpRzRVQStHtviDiR2PM1NsJXLGhQgEQLKrMEACg37hery8Wi8WMfiulRkKIe/pGxMQY0/PrGgWQUs4A4P22g6SUCQAcu/9Off1oFMBlCuX8GzqIqyClnALABwfw2RhzQ9+NAji58zhwEhf+9vERzjcOwFMPEe+MMXndkFJOAICCnEYB1jgAv2mWZd/m8/llmTKNAwSBWPj6v7ggrHyr1arnGxFPcx6cjSqglKJmk2cAIv4wxkzo22XHb5/7aZq+9dWwAPCdq3IFcgt5IfK5joi/rLUjfwiXnwfmRho6SgoYqlrFQMTYF5BtcByAen8URWNr7dQfTo0MAH6yvedaa+qS+djZjt3Lh4pIXuHCUdYN3d57AKAHDI1HrfXGBXcC+APDh4ifLwPg1U8I8QcRR+ETrjIAHejeBVTv85pOYwdA0Rt45HMVawHQxtAlOwBOEHGCiA++M4YurA3AXUIB60vttvioMrc3QBXjVdYcAA4KvABdcVUwkYWGfQAAAABJRU5ErkJggg=="

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);