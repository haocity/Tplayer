function $d(text) {
    return document.getElementById(text);
}

function $c(ele) {
    return document.querySelectorAll(ele);
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

function getstyle(a) {
    for (var c = 0; c < document.styleSheets.length; c++) {
        var d;
        if (document.styleSheets[c].cssRules) {
            d = document.styleSheets[c].cssRules;
        } else {
            d = document.styleSheets[c].rules;
        }
        for (var b = 0; b < d.length; b++) {
            if (d[b].selectorText == a) {
                return d[b].style;
            }
        }
    }
}
 var tplayer = new Object();
function Tplayer(Element, src, poster, server, videoid, videotype) {
   
    tplayer.ele = new Object();
    tplayer.videoid = videoid;
    tplayer.ele.warp = Element;
    tplayer.vsrc = src;
    tplayer.vposter = poster;
    tplayer.serverurl = server;
    tplayer.geturl = tplayer.serverurl + "get/?id=" + tplayer.videoid;
    tplayer.sendurl = tplayer.serverurl + "send/";
    tplayer.videotype = videotype;
    window.onload = function() {
        tplayer.v = '<div class="dm-video-warp"><div class="dm-video-main"><ul class="dm-rightmenu"><li class="tp-speend-con">播放速度<ul class="tp-speend"><li>0.5</li><li>0.75</li><li>正常</li><li>1.25</li><li>1.5</li><li>2</li></ul></li><a href="https://github.com/haocity/Tplayer/issues"target="_blank"><li>意见反馈</li></a><a href="https://www.haotown.cn/about.html"target="_blank"><li>关于作者</li></a><a href="https://github.com/haocity/Tplayer"target="_blank"><li>About Tplayer</li></a></ul><video class="dm-video"></video><div class="danmu-warp"></div><div class="dm-oneplay"><svg style="width: 200px;height:200px;"class="dm-icon"viewbox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"/></svg></div><div class="dm-spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><div class="dm-video-y"><div class="dm-send"><div class="dm-logo-small"></div><input type="text"class="dm-text"required="true"placeholder="客官，不来吐槽一下吗?"autocomplete="off"/><div class="tp-color"><div class="tp-color-bo"style="background-color: rgb(255, 255, 255)"></div><div class="tp-con"><div class="tp-place">◀滚动弹幕</div><div class="tp-color-warp"></div></div></div><input class="dm-up"type="submit"value="发送"/></div><div class="video-control"><div style="float:right;"><span class="video-control-alltime"style="padding:0 6px 0 12px">0:00</span><div class="dm-dmk">弹</div><div class="dm-syk"><span class="dm-syk-ico">♫</span><input class="dm-syk-range"type="range"name="points"min="0"max="100"value="100"/></div><svg class="video-full" xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"class="dm-icon"viewbox="0 0 1024 1024"version="1.1"p-id="1427"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z"p-id="1428"/><path d="M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z"p-id="1429"/><path d="M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z"p-id="1430"/><path d="M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z"p-id="1431"/></svg></div><div style="float: left;"><svg class="video-control-play dm-icon"viewbox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"/></svg><svg class="video-control-paused dm-icon"style="display:none"viewbox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z"/></svg><span class="video-control-nowtime">0:00</span></div><div class="tranger"><div class="tranger-a"></div><div class="tranger-b"></div><div class="tranger-c"></div></div></div></div></div></div>';
        tplayer.ele.warp.innerHTML = tplayer.v;
        //ele
        tplayer.ele.video = $c(".dm-video")[0];
        tplayer.ele.dm_dmk=$c(".dm-dmk")[0];//弹幕开关
        tplayer.ele.dm_text=$c(".dm-text")[0];//弹幕文本框
        tplayer.ele.dm_up=$c(".dm-up")[0];//弹幕发送
        tplayer.ele.tp_color_bo=$c(".tp-color-bo")[0];
        tplayer.ele.video_control_play=$c(".video-control-play")[0];
        tplayer.ele.dm_oneplay=$c(".dm-oneplay")[0];
        tplayer.ele.danmu_warp=$c(".danmu-warp")[0];
        tplayer.ele.dm_video_y=$c(".dm-video-y")[0];
        tplayer.ele.video_control_paused=$c(".video-control-paused")[0];
        tplayer.ele.dm_syk_range=$c(".dm-syk-range")[0];
        tplayer.ele.alltime=$c(".video-control-alltime")[0];
        tplayer.ele.tranger_a=$c(".tranger-a")[0];
        tplayer.ele.tranger_c=$c(".tranger-c")[0];
        tplayer.ele.nowtime=$c(".video-control-nowtime")[0];
        tplayer.ele.dm_spinner= $c(".dm-spinner")[0];
        tplayer.ele.full= $c(".video-full")[0];
        tplayer.ele.tp_con=$c(".tp-con")[0];
        tplayer.ele.tp_color_warp=$c(".tp-color-warp")[0];
        tplayer.ele.tp_place=$c(".tp-place")[0];
        tplayer.ele.dm_send=$c(".dm-send")[0];
        tplayer.ele.tranger=$c(".tranger")[0];
        tplayer.ele.dm_video_warp=$c(".dm-video-warp")[0]
        tplayer.ele.tp_speend_con=$c(".tp-speend-con")[0];
        tplayer.ele.tp_speend=$c(".tp-speend")[0]
        tplayer.ele.dm_video=$c(".dm-video")[0];
        tplayer.ele.dm_video_warp=$c(".dm-video-warp")[0];
        tplayer.ele.dm_rightmenu=$c(".dm-rightmenu")[0];

        if (tplayer.videotype == "flv") {
            try{
                 if (flvjs.isSupported()) {
                var flvPlayer = flvjs.createPlayer({
                    type:"flv",
                    url:tplayer.vsrc
                });
                flvPlayer.attachMediaElement(tplayer.ele.video);
                flvPlayer.load();
                } else {
                    console.log("flv.js没有加载完全");
                }
             }catch(e){
                 console.log("flv.js没有加载");
             }
           
        } else {
            tplayer.ele.video.src = tplayer.vsrc;
        }
        tplayer.ele.video.poster = tplayer.vposter;
        tplayer.danmuelement = tplayer.ele.danmu_warp;
        tplayer.sjc = 0;
        tplayer.dsq = 0;
        tplayer.leftarr = [];
        tplayer.toparr = [];
        tplayer.dmheight = 31;
        tplayer.dmplace = 1;
        //弹幕行高
        tplayer.width = tplayer.ele.video.offsetWidth;
        tplayer.height = tplayer.ele.video.offsetHeight;
        tplayer.getdanmu = function() {
            var xmlhttp;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    tplayer.data = xmlhttp.responseText;
                    tplayer.nowdata = JSON.parse(tplayer.data).data;
                }
            };
            xmlhttp.open("GET", tplayer.geturl, true);
            xmlhttp.send();
        };
        tplayer.getdanmu();
        tplayer.send = function(text, color, wz, me) {
            tplayer.width = tplayer.ele.video.offsetWidth;
            tplayer.height = tplayer.ele.video.offsetHeight;
            var dm = document.createElement("div");
            dm.appendChild(document.createTextNode(text));
            dm.style.color = color;
            if (me) {
                dm.style.border = "1px solid #fff";
            }
            if (wz == 1) {
                //left 弹幕
                var dtop = tplayer.getlefttop();
                dm.style.top = dtop * tplayer.dmheight + "px";
                tplayer.leftarr[dtop] = 1;
                dm.className = "danmu dm-left";
                dm.style.transform = "translateX(-" + tplayer.width + "px)";
                var e = tplayer.ele.danmu_warp.appendChild(dm);
                var s1 = e.offsetWidth;
                var s2 = s1 + tplayer.width;
                var v = s2 / 10;
                var t = s1 / v;
                setTimeout(function() {
                    tplayer.leftarr[dtop] = 0;
                }, t * 1e3 + 500);
                dm.addEventListener("webkitAnimationEnd", tplayer.dmend);
                dm.addEventListener("animationend", tplayer.dmend);
            } else if (wz == 2) {
                //顶部弹幕
                dm.className = "danmu dm-top";
                var dtop = tplayer.gettoptop();
                dm.style.top = dtop * tplayer.dmheight + "px";
                tplayer.toparr[dtop] = 1;
                var e = tplayer.ele.danmu_warp.appendChild(dm);
                setTimeout(function() {
                    tplayer.danmuhide(e, dtop);
                }, 5e3);
            }
        };
        tplayer.dmend = function() {
            tplayer.danmuelement.removeChild(this);
        };
        tplayer.danmuhide = function(e, topid) {
            if (tplayer.ele.video.paused) {
                setTimeout(function() {
                    tplayer.danmuhide(e, topid);
                }, tplayer.width * 10 + 1e3);
            } else {
                e.remove();
                tplayer.toparr[topid] = 0;
            }
        };
        tplayer.getlefttop = function() {
            var h;
            for (var i = 0; i <= tplayer.leftarr.length; i++) {
                if (!tplayer.leftarr[i]) {
                    //console.log('第'+i+'可以发射弹幕');
                    h = i;
                    break;
                }
            }
            return h;
        };
        tplayer.gettoptop = function() {
            var h;
            for (var i = 0; i <= tplayer.toparr.length; i++) {
                if (!tplayer.toparr[i]) {
                    //console.log('第'+i+'可以发射弹幕');
                    h = i;
                    break;
                }
            }
            return h;
        };
        //弹幕开关
        tplayer.ele.dm_dmk.addEventListener("click", function() {
            if (this.className == "dm-dmk") {
                this.className = "dm-dmk dm-dmk-c";
                tplayer.ele.danmu_warp.style.opacity = "0";
            } else {
                this.className = "dm-dmk";
                tplayer.ele.danmu_warp.style.opacity = "1";
            }
        });
        //弹幕回车按下
        tplayer.ele.dm_text.onkeydown = function(event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e.keyCode == 13) {
                tplayer.ele.dm_up.click();
            }
        };
        //弹幕发送
        tplayer.ele.dm_up.addEventListener("click", function() {
            tplayer.send(tplayer.ele.dm_text.value, tplayer.ele.tp_color_bo.style.backgroundColor, tplayer.dmplace, 1);
            tplayer.ele.dm_text.readonly = "readonly";
            //$("dm-text").style.background = "#f4f4f4";
            tplayer.ele.dm_up.disabled = "true";
            tplayer.ele.dm_up.style.background = "#777479";
            setTimeout(function() {
                tplayer.ele.dm_text.value = "";
                //$("dm-text").style.background = "#fff";
                tplayer.ele.dm_up.disabled = "";
                tplayer.ele.dm_up.style.background = "#8715EF";
            }, 500);
            var postData = {
                id:tplayer.videoid,
                text:tplayer.ele.dm_text.value,
                color:tplayer.ele.tp_color_bo.style.backgroundColor,
                time:parseInt(tplayer.ele.video.currentTime * 10),
                place:tplayer.dmplace
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
            xhr.open("POST", tplayer.sendurl, true);
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
            getstyle(".dm-left").animation = "dmleft " + v + "s linear";
            getstyle(".dm-left").webkitAnimation = "dmleft " + v + "s linear";
        }
        //视频播放
        tplayer.ele.video_control_play.onclick = function() {
            tplayer.ele.dm_oneplay.style.display = "none";
            if (tplayer.dsq == 0) {
                tplayer.Interval = setInterval(danmutime, 100);
                tplayer.dsq = 1;
            }
            tplayer.ele.dm_video_y.style.opacity = "0";
            var e = tplayer.ele.danmu_warp.getElementsByTagName("div");
            this.style.display = "none";
            tplayer.ele.video_control_paused.style.display = "inline-block";
            tplayer.ele.video.play();
            for (var i = e.length - 1; i >= 0; i--) {
                removeClass(e[i], "dm-suspend");
            }
        };
        //视频暂停
        tplayer.ele.video_control_paused.onclick = function() {
            clearInterval(tplayer.Interval);
            tplayer.dsq = 0;
            var e = tplayer.ele.danmu_warp.getElementsByTagName("div");
            this.style.display = "none";
            tplayer.ele.video_control_play.style.display = "inline-block";
            tplayer.ele.video.pause();
            for (var i = e.length - 1; i >= 0; i--) {
                addClass(e[i], "dm-suspend");
            }
           tplayer.ele.dm_spinner.style.display = "none";
        };
        tplayer.ele.dm_oneplay.addEventListener("click", function() {
            this.style.display = "none";
            tplayer.ele.video_control_play.onclick();
        });
        //控件显示
        tplayer.ele.dm_video_y.onmousemove = function() {
            showbar();
        };
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
        tplayer.changersound = function() {
            var Days = 7;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
            document.cookie = "tpsound=" + parseInt(tplayer.ele.dm_syk_range.value) + ";expires=" + exp.toGMTString() + "&path=/";
        };
        tplayer.soundcookie = getCookie("tpsound");
        if (tplayer.soundcookie) {
            tplayer.ele.dm_syk_range.value = tplayer.soundcookie;
            tplayer.ele.video.volume = parseInt(tplayer.ele.dm_syk_range.value) * .01;
        } else {
            tplayer.changersound();
        }
        //获取视频总时间
        function getallvideotime() {
            var time = tplayer.ele.video.duration;
            if (!time) {
                setTimeout(function() {
                    getallvideotime();
                }, 500);
            } else {
                tplayer.alltime = time;
                tplayer.ele.alltime.innerHTML = getvideotime(tplayer.alltime).m + ":" + getvideotime(tplayer.alltime).s;
            }
        }
        getallvideotime();
        //音量调节
        tplayer.ele.dm_syk_range.addEventListener("click", function() {
            var i = parseInt(tplayer.ele.dm_syk_range.value) * .01;
            tplayer.ele.video.volume = i;
            tplayer.changersound();
        });
        //定时器
        function danmutime() {
            var videotime = tplayer.ele.video.currentTime;
            tplayer.ele.tranger_a.style.width = videotime / tplayer.alltime * 100 + "%";
            var buff = tplayer.ele.video.buffered;
            //判断缓存段
            for (var i = 0; i < buff.length; i++) {
                if (buff.start(i) <= videotime && videotime < buff.end(i)) {
                    var width = tplayer.ele.video.buffered.end(i) / tplayer.alltime * 100 + "%";
                    if (tplayer.ele.tranger_c.style.width != width) {
                        tplayer.ele.tranger_c.style.width = width;
                    }
                    break;
                }
            }
            if (tplayer.nowdata) {
                for (var i = 0; i < tplayer.nowdata.length; i++) {
                    if (tplayer.nowdata[i]) {
                        if (tplayer.nowdata[i].time == parseInt(tplayer.ele.video.currentTime * 10)) {
                            tplayer.send(tplayer.nowdata[i].text, tplayer.nowdata[i].color, tplayer.nowdata[i].place);
                            delete tplayer.nowdata[i];
                        }
                    }
                }
            }
        }
        //定时器二 1s执行一次
        setInterval(function() {
            var videotime = tplayer.ele.video.currentTime;
            tplayer.ele.nowtime.innerHTML = getvideotime(videotime).m + ":" + getvideotime(videotime).s;
            var t = tplayer.ele.dm_send.offsetWidth - 280 + "px";
            if (tplayer.ele.dm_text.style.width != t) {
                tplayer.ele.dm_text.style.width = t;
            }
        }, 1e3);
        //进度条
        tplayer.ele.tranger.onmousedown = function(event) {
        	var e = event || window.event || arguments.callee.caller.arguments[0];
            var xbl = show_coords(e, this);
            tplayer.ele.tranger_a.style.width = xbl.xbl * 100 + "%";
            tplayer.ele.video.currentTime = xbl.xbl * tplayer.alltime;
            tplayer.nowdata = JSON.parse(tplayer.data).data;
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
        tplayer.ele.video.addEventListener("waiting", videohc);
        function videohc() {
            //console.log('loding');
            clearInterval(tplayer.Interval);
            tplayer.dsq = 0;
           tplayer.ele.dm_spinner.style.display = "block";
            var e = tplayer.ele.danmu_warp.getElementsByTagName("div");
            for (var i = e.length - 1; i >= 0; i--) {
                addClass(e[i], "dm-suspend");
            }
        }
        tplayer.ele.video.addEventListener("playing", function() {
            // console.log('play');
            if (tplayer.dsq == 0) {
                tplayer.Interval = setInterval(danmutime, 100);
                tplayer.dsq = 1;
            }
            var e = tplayer.ele.danmu_warp.getElementsByTagName("div");
           tplayer.ele.dm_spinner.style.display = "none";
            tplayer.ele.alltime.innerHTML = getvideotime(tplayer.alltime).m + ":" + getvideotime(tplayer.alltime).s;
            for (var i = e.length - 1; i >= 0; i--) {
                removeClass(e[i], "dm-suspend");
            }
        });
        //键盘
        document.onkeydown = function(event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            showbar();
            if (e && e.keyCode == 39) {
                // right 键
                var time = tplayer.ele.video.currentTime;
                tplayer.ele.video.currentTime = time + 5;
            }
            if (e && e.keyCode == 37) {
                // left 键
                var time = tplayer.ele.video.currentTime;
                tplayer.ele.video.currentTime = time - 5;
                tplayer.nowdata = JSON.parse(tplayer.data).data;
            }
            if (e && e.keyCode == 32) {
                // space 键
                if (tplayer.ele.video.paused) {
                     tplayer.ele.video_control_play.onclick();
                 } else {
                     tplayer.ele.video_control_paused.onclick();
                }
            }
            if (e && e.keyCode == 38) {
                // up 键
                tplayer.ele.dm_syk_range.value = parseInt(tplayer.ele.dm_syk_range.value) + 1;
                tplayer.ele.dm_syk_range.click();
            }
            if (e && e.keyCode == 40) {
                // down 键
                tplayer.ele.dm_syk_range.value = parseInt(tplayer.ele.dm_syk_range.value) - 1;
                tplayer.ele.dm_syk_range.click();
            }
        };
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
       tplayer.ele.full.addEventListener("click", function() {
            var e = tplayer.ele.dm_video_warp;
            document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() :document.mozCancelFullScreen ? document.mozCancelFullScreen() :document.webkitCancelFullScreen && document.webkitCancelFullScreen() :e.requestFullscreen ? e.requestFullscreen() :e.mozRequestFullScreen ? e.mozRequestFullScreen() :e.webkitRequestFullscreen && e.webkitRequestFullscreen();
            setTimeout(function() {
                tplayer.width = tplayer.ele.video.offsetWidth;
                var e = tplayer.ele.danmu_warp.getElementsByTagName("div");
                dmspeend(tplayer.width / 100);
                for (var i = e.length - 1; i >= 0; i--) {
                    if (hasClass(e[i], "dm-left")) {
                        e[i].style.transform = "translateX(-" + tplayer.width + "px)";
                    }
                }
            }, 1e3);
        });
        function showbar() {
            tplayer.ele.dm_video_y.style.opacity = "1";
            tplayer.sjc++;
            var time = setTimeout(sjc, 2e3, tplayer.sjc);
        }
        function sjc(time) {
            if (time >= tplayer.sjc) {
                tplayer.ele.dm_video_y.style.opacity = "0";
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
        var danmucon = tplayer.ele.tp_con;
        var colorwarp = tplayer.ele.tp_color_warp;
        tplayer.ele.tp_color_bo.addEventListener("click", function() {
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
                tplayer.ele.tp_color_bo.style.backgroundColor = this.style.background;
            });
            colormain.appendChild(color);
            colorwarp.appendChild(colormain);
        }
        //设置
        //视频速度设置
        tplayer.ele.tp_speend_con.addEventListener("click", function() {
            var t = tplayer.ele.tp_speend;
            if (t.style.display == "block") {
                t.style.display = "none";
            } else {
                t.style.display = "block";
            }
        });
        var videospeendele = tplayer.ele.tp_speend.childNodes;
        for (i = 0; i < videospeendele.length; i++) {
            var e = videospeendele[i];
            var s = parseFloat(videospeendele[i].innerText).toFixed(2);
            if (s != "NaN") {
                e.onclick = function() {
                    var t = parseFloat(this.innerText).toFixed(2);
                    tplayer.ele.dm_video.playbackRate = t;
                };
            } else {
                e.onclick = function() {
                    tplayer.ele.dm_video.playbackRate = 1;
                };
            }
        }
        tplayer.ele.danmu_warp.onmousedown = function(event) {
        	var e = event || window.event || arguments.callee.caller.arguments[0];
            var container = tplayer.ele.dm_video_warp;
            var rightmenu = tplayer.ele.dm_rightmenu;
            if (e.button == 2) {
                rightmenu.style.display = "block";
                var evt = window.event || arguments[0];
                var leftedge, topedge, danmuheight = tplayer.ele.danmu_warp.offsetHeight, danmuwidth = tplayer.ele.danmu_warp.offsetWidth;
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
            } else if (e.button == 0) {
                //如果左按键
                if (rightmenu.style.display == "block") {
                    rightmenu.style.display = "none";
                } else {
                    //视频暂停
                    if (tplayer.ele.video.paused) {
                        tplayer.ele.video_control_play.onclick();
                    } else {
                        tplayer.ele.video_control_paused.onclick();
                    }
                }
            }
        };
        tplayer.ele.tp_place.addEventListener("click", function() {
            if (tplayer.dmplace == 1) {
                tplayer.dmplace = 2;
                this.innerText = "▲顶部弹幕";
            } else {
                tplayer.dmplace = 1;
                this.innerText = "◀滚动弹幕";
            }
        });
    };
}