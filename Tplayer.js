function $d(text) {
    return document.getElementById(text);
}

function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
}

function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
}

function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
}

function Tplayer(Element, src, poster, server, videoid, videotype) {
    var tp = new Object();
    tp.ele = new Object();
    tp.videoid = videoid;
    tp.vsrc = src;
    tp.vposter = poster;
    tp.serverurl = server;
    tp.geturl = tp.serverurl + "get/?id=" + tp.videoid;
    tp.sendurl = tp.serverurl + "send/";
    tp.videotype = videotype;
    tp.v = '<div class="tp-video-warp"><div class="tp-video-main"><ul class="tp-rightmenu"><li class="tp-copy-warp"><textarea rows="1" class="tp-copy-input">复制弹幕</textarea></li><li class="tp-speend-con">播放速度<ul class="tp-speend"><li>0.5</li><li>0.75</li><li>正常</li><li>1.25</li><li>1.5</li><li>2</li></ul></li><a href="https://github.com/haocity/tp/issues"target="_blank"><li>意见反馈</li></a><a href="https://www.haotown.cn/about.html"target="_blank"><li>关于作者</li></a><a href="https://github.com/haocity/tp"target="_blank"><li>About tp</li></a></ul><div class="video-end"><svg t="1493275296747"class="replay"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="3488"xmlns:xlink="http://www.w3.org/1999/xlink"width="100"height="100"><path d="M48.012564 368.005052 256.007345 368.005052C282.50851 368.005052 303.987849 346.493648 303.987849 319.992484 303.987849 293.459261 282.50851 272.011981 256.007345 272.011981L172.518731 272.011981C247.808645 165.585172 371.698941 95.994406 512.016029 95.994406 741.749327 95.994406 928.004256 282.249339 928.004256 511.981298 928.004256 741.731959 741.749327 927.954828 512.016029 927.954828 282.249335 927.954828 95.994406 741.730625 95.994406 511.981298 95.994406 485.481472 74.513729 464.00213 48.012564 464.00213 21.479342 464.00213 0 485.481472 0 511.981298 0 794.734285 229.213614 1023.981298 512.017367 1023.981298 794.75299 1023.981298 1024 794.734285 1024 511.981298 1024 229.214949 794.751652 0 512.017367 0 340.405743 0 188.81594 84.590769 95.99574 214.213612L95.99574 128.003676C95.99574 101.471785 74.515063 79.991108 48.013903 79.991108 21.480677 79.991108 0.001338 101.471785 0.001338 128.003676L0.001338 319.993822C0 346.493645 21.479339 368.005052 48.012564 368.005052"p-id="3489"fill="#ffffff"></path></svg></div><video class="tp-video"></video><div class="danmu-warp"></div><div class="tp-oneplay"><svg style="width: 200px;height:200px;"class="tp-icon"viewbox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"/></svg></div><div class="tp-spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><div class="tp-video-con"><div class="tp-send"><input type="text"class="tp-text"required="true"placeholder="客官，不来吐槽一下吗?"autocomplete="off"/><div class="tp-color-btn"><div class="tp-color-bo"style="background-color: rgb(255, 255, 255)"></div><div class="tp-con"><div class="tp-place">◀滚动弹幕</div><div class="tp-color-warp"></div></div></div><input class="tp-up"type="submit"value="发送"/></div><div class="tp-control"><div style="float:right;"><span class="tp-control-alltime"style="padding:0 6px 0 12px">0:00</span><div class="tp-danmu-switch">弹</div><div class="tp-syk"><span class="tp-syk-ico">♫</span><input class="tp-syk-range"type="range"name="points"min="0"max="100"value="100"/></div><svg class="video-full"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"class="tp-icon"viewbox="0 0 1024 1024"version="1.1"p-id="1427"><path d="M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z"p-id="1428"/><path d="M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z"p-id="1429"/><path d="M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z"p-id="1430"/><path d="M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z"p-id="1431"/></svg></div><div style="float: left;"><svg class="tp-control-play tp-icon"viewbox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"/></svg><svg class="tp-control-paused tp-icon"style="display:none"viewbox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z"/></svg><span class="tp-control-nowtime">0:00</span><span class="tp-control-alltime-phone"> / 0:00</span></div><div class="tp-tranger"><div class="tp-tranger-a"></div><div class="tp-tranger-b"></div><div class="tp-tranger-c"></div></div></div></div></div></div><style class="css"type="text/css"></style>';
    Element.innerHTML = tp.v;
    //ele
    function $c(ele) {
        return Element.querySelectorAll(ele);
    }
	function eleload(){
		this.warp = Element;
	    this.video = $c(".tp-video")[0];
	    this.danmu_switch = $c(".tp-danmu-switch")[0];
	    this.tp_text = $c(".tp-text")[0];
	    this.tp_up = $c(".tp-up")[0];
	    this.tp_color_bo = $c(".tp-color-bo")[0];
	    this.video_control_play = $c(".tp-control-play")[0];
	    this.tp_oneplay = $c(".tp-oneplay")[0];
	    this.danmu_warp = $c(".danmu-warp")[0];
	    this.video_con = $c(".tp-video-con")[0];
	    this.video_control_paused = $c(".tp-control-paused")[0];
	    this.tp_syk_range = $c(".tp-syk-range")[0];
	    this.alltime = $c(".tp-control-alltime")[0];
	    this.tranger_a = $c(".tp-tranger-a")[0];
	    this.tranger_c = $c(".tp-tranger-c")[0];
	    this.nowtime = $c(".tp-control-nowtime")[0];
	    this.tp_spinner = $c(".tp-spinner")[0];
	    this.full = $c(".video-full")[0];
	    this.tp_con = $c(".tp-con")[0];
	    this.tp_color_warp = $c(".tp-color-warp")[0];
	    this.tp_place = $c(".tp-place")[0];
	    this.tp_send = $c(".tp-send")[0];
	    this.tranger = $c(".tp-tranger")[0];
	    this.tp_speend_con = $c(".tp-speend-con")[0];
	    this.tp_speend = $c(".tp-speend")[0];
	    this.tp_video = $c(".tp-video")[0];
	    this.tp_video_warp = $c(".tp-video-warp")[0];
	    this.tp_rightmenu = $c(".tp-rightmenu")[0];
	    this.end = $c(".video-end")[0];
	    this.replay = $c(".replay")[0];
	    this.copy = $c(".tp-copy-warp")[0];
	    this.copytext = $c(".tp-copy-input")[0];
	    this.css = $c(".css")[0];
	    this.alltime_phone= $c(".tp-control-alltime-phone")[0];
	}
	tp.ele=new eleload;

    if (tp.videotype == "flv") {
        try {
            if (flvjs.isSupported()) {
                var flvPlayer = flvjs.createPlayer({
                    type:"flv",
                    url:tp.vsrc
                });
                flvPlayer.attachMediaElement(tp.ele.video);
                flvPlayer.load();
            } else {
                console.log("flv.js没有加载完全");
            }
        } catch (e) {
            console.log("flv.js没有加载");
        }
    } else {
        tp.ele.video.src = tp.vsrc;
    }
    tp.ele.video.poster = tp.vposter;
    tp.danmuelement = tp.ele.danmu_warp;
    tp.sjc = 0;
    tp.dsq = 0;
    tp.leftarr = [];
    tp.toparr = [];
    tp.dmheight = 31;
    tp.dmplace = 1;
    if (/android/i.test(navigator.userAgent) || /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        tp.phone = true;
        tp.ele.video_con.style.opacity='1';
        tp.ele.video_con.style.display='none';
    }
    //弹幕行高
    tp.width = tp.ele.video.offsetWidth;
    tp.height = tp.ele.video.offsetHeight;
    tp.getdanmu = function() {
        var xmlhttp;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                tp.data = xmlhttp.responseText;
                tp.nowdata = JSON.parse(tp.data).data;
            }
        };
        xmlhttp.open("GET", tp.geturl, true);
        xmlhttp.send();
    };
    tp.getdanmu();
    tp.send = function(text, color, wz, me) {
        tp.width = tp.ele.video.offsetWidth;
        tp.height = tp.ele.video.offsetHeight;
        var dm = document.createElement("div");
        dm.appendChild(document.createTextNode(text));
        dm.style.color = color;
        if (me) {
            dm.style.border = "1px solid #fff";
        }
        if (wz == 1) {
            //left 弹幕
            var dtop = tp.getlefttop();
            dm.style.top = dtop * tp.dmheight + "px";
            tp.leftarr[dtop] = 1;
            dm.className = "danmu tp-left";
            dm.style.transform = "translateX(-" + tp.width + "px)";
            var e = tp.ele.danmu_warp.appendChild(dm);
            var s1 = e.offsetWidth;
            var s2 = s1 + tp.width;
            var v = s2 / 10;
            var t = s1 / v;
            setTimeout(function() {
                tp.leftarr[dtop] = 0;
            }, t * 1e3 + 500);
            dm.addEventListener("webkitAnimationEnd", tp.dmend);
            dm.addEventListener("animationend", tp.dmend);
        } else if (wz == 2) {
            //顶部弹幕
            dm.className = "danmu tp-top";
            var dtop = tp.gettoptop();
            dm.style.top = dtop * tp.dmheight + "px";
            tp.toparr[dtop] = 1;
            var e = tp.ele.danmu_warp.appendChild(dm);
            setTimeout(function() {
                tp.danmuhide(e, dtop);
            }, 5e3);
        }
    };
    tp.dmend = function() {
        tp.danmuelement.removeChild(this);
    };
    tp.danmuhide = function(e, topid) {
        if (tp.ele.video.paused) {
            setTimeout(function() {
                tp.danmuhide(e, topid);
            }, tp.width * 10 + 1e3);
        } else {
            e.remove();
            tp.toparr[topid] = 0;
        }
    };
    tp.getlefttop = function() {
        var h;
        for (var i = 0; i <= tp.leftarr.length; i++) {
            if (!tp.leftarr[i]) {
                //console.log('第'+i+'可以发射弹幕');
                h = i;
                break;
            }
        }
        return h;
    };
    tp.gettoptop = function() {
        var h;
        for (var i = 0; i <= tp.toparr.length; i++) {
            if (!tp.toparr[i]) {
                //console.log('第'+i+'可以发射弹幕');
                h = i;
                break;
            }
        }
        return h;
    };
    //重播
    tp.ele.replay.addEventListener("click", function() {
        tp.ele.video_control_play.onclick();
    });
    //播放完成
    tp.ele.video.onended = function() {
        tp.ele.end.style.display = "block";
    };
    //弹幕开关
    tp.ele.danmu_switch.addEventListener("click", function() {
        if (this.className == "tp-danmu-switch") {
            this.className = "tp-danmu-switch tp-danmu-switch-c";
            tp.ele.danmu_warp.style.opacity = "0";
        } else {
            this.className = "tp-danmu-switch";
            tp.ele.danmu_warp.style.opacity = "1";
        }
    });
    //弹幕回车按下
    tp.ele.tp_text.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode == 13) {
            tp.ele.tp_up.click();
        } else if (e.keyCode == 32) {
            e.stopPropagation();
        }
    };
    //弹幕发送
    tp.ele.tp_up.addEventListener("click", function() {
        tp.send(tp.ele.tp_text.value, tp.ele.tp_color_bo.style.backgroundColor, tp.dmplace, 1);
        tp.ele.tp_text.readonly = "readonly";
        //$("tp-text").style.background = "#f4f4f4";
        tp.ele.tp_up.disabled = "true";
        tp.ele.tp_up.style.background = "#777479";
        setTimeout(function() {
            tp.ele.tp_text.value = "";
            //$("tp-text").style.background = "#fff";
            tp.ele.tp_up.disabled = "";
            tp.ele.tp_up.style.background = "#8715EF";
        }, 500);
        var postData = {
            id:tp.videoid,
            text:tp.ele.tp_text.value,
            color:tp.ele.tp_color_bo.style.backgroundColor,
            time:parseInt(tp.ele.video.currentTime * 10),
            place:tp.dmplace
        };
        postData = function(obj) {
            // 转成post需要的字符串.
            var str = "";
            for (var prop in obj) {
                str += prop + "=" + obj[prop] + "&";
            }
            return str;
        }(postData);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", tp.sendurl, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            var XMLHttpReq = xhr;
            if (XMLHttpReq.readyState == 4) {
                if (XMLHttpReq.status == 200) {
                    var text = XMLHttpReq.responseText;
                    console.log(text);
                }
            }
        };
        xhr.send(postData);
    });
    //弹幕速度
    function dmspeend(v) {
        tp.ele.css.innerText = ".tp-left {animation: dmleft " + v + "s linear;-webkit-animation: dmleft " + v + "s linear;}";
    }
    //视频播放
    tp.ele.video_control_play.onclick = function() {
        tp.ele.tp_oneplay.style.display = "none";
        if (tp.dsq == 0) {
            tp.Interval = setInterval(danmutime, 100);
            tp.dsq = 1;
        }
        if(!tp.phone){
        tp.ele.video_con.style.opacity = "0";
        }
        var e = tp.ele.danmu_warp.getElementsByTagName("div");
        this.style.display = "none";
        tp.ele.video_control_paused.style.display = "inline-block";
        tp.ele.video.play();
        for (var i = e.length - 1; i >= 0; i--) {
            removeClass(e[i], "tp-suspend");
        }
        tp.ele.end.style.display = "none";
    };
    //视频暂停
    tp.ele.video_control_paused.onclick = function() {
        clearInterval(tp.Interval);
        tp.dsq = 0;
        var e = tp.ele.danmu_warp.getElementsByTagName("div");
        this.style.display = "none";
        tp.ele.video_control_play.style.display = "inline-block";
        tp.ele.video.pause();
        for (var i = e.length - 1; i >= 0; i--) {
            addClass(e[i], "tp-suspend");
        }
        tp.ele.tp_spinner.style.display = "none";
    };
    tp.ele.tp_oneplay.addEventListener("click", function() {
        this.style.display = "none";
        tp.ele.video_control_play.onclick();
    });
    //控件显示
    if (tp.phone) {
        tp.ele.danmu_warp.addEventListener("click", function() {
            var e = tp.ele.video_con;
            if (e.style.display == "block") {
                console.log("隐藏");
                e.style.display = "none"
            } else {
                e.style.display = "block";
                console.log("显示");
            }
        });
    } else {
        tp.ele.video_con.onmousemove = function() {
            showbar();
        };
    }
    function getCookie(Name) {
        var cookieName = encodeURIComponent(Name) + "=", returnvalue = "", cookieStart = document.cookie.indexOf(cookieName), cookieEnd = null;
        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            returnvalue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return returnvalue;
    }
    tp.changersound = function() {
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
        document.cookie = "tpsound=" + parseInt(tp.ele.tp_syk_range.value) + ";expires=" + exp.toGMTString() + "&path=/";
    };
    tp.soundcookie = getCookie("tpsound");
    if (tp.soundcookie) {
        tp.ele.tp_syk_range.value = tp.soundcookie;
        tp.ele.video.volume = parseInt(tp.ele.tp_syk_range.value) * .01;
    } else {
        tp.changersound();
    }
    //获取视频总时间
    function getallvideotime() {
        var time = tp.ele.video.duration;
        if (!time) {
            setTimeout(function() {
                getallvideotime();
            }, 500);
        } else {
            tp.alltime = time;
            tp.ele.alltime.innerHTML = getvideotime(tp.alltime).m + ":" + getvideotime(tp.alltime).s;
            tp.ele.alltime_phone.innerHTML ='&nbsp;/&nbsp;'+getvideotime(tp.alltime).m + ":" + getvideotime(tp.alltime).s;
        }
    }
    getallvideotime();
    //音量调节
    tp.ele.tp_syk_range.addEventListener("input", function() {
        var i = parseInt(tp.ele.tp_syk_range.value) * .01;
        tp.ele.video.volume = i;
        tp.changersound();
    });
    //定时器
    function danmutime() {
        var videotime = tp.ele.video.currentTime;
        tp.ele.tranger_a.style.width = videotime / tp.alltime * 100 + "%";
        var buff = tp.ele.video.buffered;
        //判断缓存段
        for (var i = 0; i < buff.length; i++) {
            if (buff.start(i) <= videotime && videotime < buff.end(i)) {
                var width = tp.ele.video.buffered.end(i) / tp.alltime * 100 + "%";
                if (tp.ele.tranger_c.style.width != width) {
                    tp.ele.tranger_c.style.width = width;
                }
                break;
            }
        }
        if (tp.nowdata) {
            for (var i = 0; i < tp.nowdata.length; i++) {
                if (tp.nowdata[i]) {
                    if (tp.nowdata[i].time == parseInt(tp.ele.video.currentTime * 10)) {
                        tp.send(tp.nowdata[i].text, tp.nowdata[i].color, tp.nowdata[i].place);
                        delete tp.nowdata[i];
                    }
                }
            }
        }
    }
    //定时器二 1s执行一次
    setInterval(function() {
        var videotime = tp.ele.video.currentTime;
        tp.ele.nowtime.innerHTML = getvideotime(videotime).m + ":" + getvideotime(videotime).s;
    }, 1e3);
    //进度条
    tp.ele.tranger.onmousedown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        var xbl = show_coords(e, this);
        tp.ele.tranger_a.style.width = xbl.xbl * 100 + "%";
        tp.ele.video.currentTime = xbl.xbl * tp.alltime;
        tp.nowdata = JSON.parse(tp.data).data;
    };
    //获取元素的纵坐标（相对于窗口）
    function getTop(e) {
        var offset = e.offsetTop;
        if (e.offsetParent != null) offset += getTop(e.offsetParent);
        return offset;
    }
    //获取元素的横坐标（相对于窗口）
    function getLeft(e) {
        var offset = e.offsetLeft;
        if (e.offsetParent != null) offset += getLeft(e.offsetParent);
        return offset;
    }
    function show_coords(event, elem) {
        var x = event.clientX - getLeft(elem);
        var y = event.clientY - getTop(elem);
        var xbl = x / elem.offsetWidth;
        var ybl = y / elem.offsetTop;
        return {
            x:x,
            y:y,
            w:elem.offsetWidth,
            xbl:xbl,
            ybl:ybl
        };
    }
    //视频缓冲事件
    tp.ele.video.addEventListener("waiting", videohc);
    function videohc() {
        //console.log('loding');
        clearInterval(tp.Interval);
        tp.dsq = 0;
        tp.ele.tp_spinner.style.display = "block";
        var e = tp.ele.danmu_warp.getElementsByTagName("div");
        for (var i = e.length - 1; i >= 0; i--) {
            addClass(e[i], "tp-suspend");
        }
    }
    tp.ele.video.addEventListener("playing", function() {
        // console.log('play');
        if (tp.dsq == 0) {
            tp.Interval = setInterval(danmutime, 100);
            tp.dsq = 1;
        }
        var e = tp.ele.danmu_warp.getElementsByTagName("div");
        tp.ele.tp_spinner.style.display = "none";
        tp.ele.alltime.innerHTML = getvideotime(tp.alltime).m + ":" + getvideotime(tp.alltime).s;
        for (var i = e.length - 1; i >= 0; i--) {
            removeClass(e[i], "tp-suspend");
        }
    });
    //键盘
    document.addEventListener("keydown", function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        showbar();
        if (e && e.keyCode == 39) {
            // right 键
            var time = tp.ele.video.currentTime;
            tp.ele.video.currentTime = time + 5;
        }
        if (e && e.keyCode == 37) {
            // left 键
            var time = tp.ele.video.currentTime;
            tp.ele.video.currentTime = time - 5;
            tp.nowdata = JSON.parse(tp.data).data;
        }
        if (e && e.keyCode == 32) {
            // space 键
            event.preventDefault();
            if (tp.ele.video.paused) {
                tp.ele.video_control_play.onclick();
            } else {
                tp.ele.video_control_paused.onclick();
            }
        }
        if (e && e.keyCode == 38) {
            // up 键
            tp.ele.tp_syk_range.value = parseInt(tp.ele.tp_syk_range.value) + 1;
        }
        if (e && e.keyCode == 40) {
            // down 键
            tp.ele.tp_syk_range.value = parseInt(tp.ele.tp_syk_range.value) - 1;
        }
    });
    function getvideotime(time) {
        var tm;
        var m = parseInt(time / 60);
        if (parseInt(time % 60) >= 10) {
            tm = parseInt(time % 60);
        } else {
            tm = "0" + parseInt(time % 60);
        }
        return {
            m:m,
            s:tm
        };
    }
    tp.ele.full.addEventListener("click", function() {
        var e = tp.ele.tp_video_warp;
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() :document.mozCancelFullScreen ? document.mozCancelFullScreen() :document.webkitCancelFullScreen && document.webkitCancelFullScreen() :e.requestFullscreen ? e.requestFullscreen() :e.mozRequestFullScreen ? e.mozRequestFullScreen() :e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        setTimeout(function() {
            tp.width = tp.ele.video.offsetWidth;
            var e = tp.ele.danmu_warp.getElementsByTagName("div");
            dmspeend(tp.width / 100);
            for (var i = e.length - 1; i >= 0; i--) {
                if (hasClass(e[i], "tp-left")) {
                    e[i].style.transform = "translateX(-" + tp.width + "px)";
                }
            }
        }, 1e3);
    });
    function showbar() {
    	if(!tp.phone){
        tp.ele.video_con.style.opacity = "1";
        tp.sjc++;
        var time = setTimeout(sjc, 2e3, tp.sjc);
       }
    }
    function sjc(time) {
        if (time >= tp.sjc&&!tp.phone) {
            tp.ele.video_con.style.opacity = "0";
        }
    }
    //颜色
    tpcolor = new Object();
    tpcolor.arr = new Array("#FFFFFF", "#000000", "#4ab0c6", "#555656", "#09b745", "#f86141", "#FFEB3B", "#4d38d8", "#fe67c1", "#ff9c07");
    for (var r = 255; r >= 0; r -= 25) {
        for (var g = 0; g <= 255; g += 25) {
            for (var b = 0; b <= 255; b += 25) {
                tpcolor.arr.push("rgb(" + r + "," + g + "," + b + ")");
            }
        }
    }
    var danmucon = tp.ele.tp_con;
    var colorwarp = tp.ele.tp_color_warp;
    tp.ele.tp_color_bo.addEventListener("click", function() {
        if (danmucon.style.display == "block") {
            danmucon.style.display = "none";
        } else {
            danmucon.style.display = "block";
        }
    });
    for (tpcolor.i = 0; tpcolor.i < tpcolor.arr.length; tpcolor.i++) {
        var colormain = document.createElement("div");
        colormain.className = "tp-color";
        var color = document.createElement("div");
        color.className = "tp-color-main";
        color.style.background = tpcolor.arr[tpcolor.i];
        color.addEventListener("click", function() {
            tp.ele.tp_color_bo.style.backgroundColor = this.style.background;
        });
        colormain.appendChild(color);
        colorwarp.appendChild(colormain);
    }
    //设置
    //视频速度设置
    tp.ele.tp_speend_con.addEventListener("click", function() {
        var t = tp.ele.tp_speend;
        if (t.style.display == "block") {
            t.style.display = "none";
        } else {
            t.style.display = "block";
        }
    });
    var videospeendele = tp.ele.tp_speend.childNodes;
    for (i = 0; i < videospeendele.length; i++) {
        var e = videospeendele[i];
        var s = parseFloat(videospeendele[i].innerText).toFixed(2);
        if (s != "NaN") {
            e.onclick = function() {
                var t = parseFloat(this.innerText).toFixed(2);
                tp.ele.tp_video.playbackRate = t;
            };
        } else {
            e.onclick = function() {
                tp.ele.tp_video.playbackRate = 1;
            };
        }
    }
    tp.ele.danmu_warp.onmousedown = function(event) {
        var ev = event || window.event || arguments.callee.caller.arguments[0];
        var container = tp.ele.tp_video_warp;
        var rightmenu = tp.ele.tp_rightmenu;
        if (tp.phone) {} else {
            if (ev.button == 2) {
                var target = ev.target || ev.srcElement;
                if (hasClass(target, "danmu")) {
                    tp.ele.copytext.innerHTML = target.innerHTML;
                    tp.ele.copy.style.display = "block";
                    tp.ele.copy.onclick = function() {
                        tp.ele.copytext.select();
                        document.execCommand("Copy");
                        rightmenu.style.display = "none";
                    };
                } else {
                    tp.ele.copy.style.display = "none";
                }
                rightmenu.style.display = "block";
                var evt = window.event || arguments[0];
                var leftedge, topedge, danmuheight = tp.ele.danmu_warp.offsetHeight, danmuwidth = tp.ele.danmu_warp.offsetWidth;
                if (danmuheight == document.documentElement.clientHeight) {
                    topedge = evt.clientY;
                    leftedge = evt.clientX;
                    if (leftedge + rightmenu.offsetWidth > danmuwidth) {
                        leftedge = danmuwidth - rightmenu.offsetWidth;
                    }
                    if (topedge + rightmenu.offsetWidth > danmuheight) {
                        topedge = danmuheight - rightmenu.offsetHeight;
                    }
                } else {
                    topedge = evt.clientY + document.body.scrollTop - container.offsetTop;
                    leftedge = evt.clientX - container.offsetLeft;
                    var tweidth = container.offsetWidth;
                    var theigtht = container.offsetHeight;
                    if (leftedge + rightmenu.offsetWidth > tweidth) {
                        leftedge = tweidth - rightmenu.offsetWidth;
                    }
                    if (topedge + rightmenu.offsetHeight > theigtht) {
                        topedge = theigtht - rightmenu.offsetHeight;
                    }
                }
                if (window.document.all) {
                    this.IContextmenuHander = function() {
                        return false;
                    };
                    document.attachEvent("oncontextmenu", this.IContextmenuHander);
                } else {
                    this.IContextmenuHander = document.oncontextmenu;
                    document.oncontextmenu = function() {
                        return false;
                    };
                }
                rightmenu.style.top = topedge + "px";
                rightmenu.style.left = leftedge + "px";
            } else if (ev.button == 0) {
                //如果左按键
                if (rightmenu.style.display == "block") {
                    rightmenu.style.display = "none";
                } else {
                    //视频暂停
                    if (tp.ele.video.paused) {
                        tp.ele.video_control_play.onclick();
                    } else {
                        tp.ele.video_control_paused.onclick();
                    }
                }
            }
        }
    };
    tp.ele.tp_place.addEventListener("click", function() {
        if (tp.dmplace == 1) {
            tp.dmplace = 2;
            this.innerText = "▲顶部弹幕";
        } else {
            tp.dmplace = 1;
            this.innerText = "◀滚动弹幕";
        }
    });
}