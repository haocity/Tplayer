function $(id){
  return document.getElementById(id);
}
var text;
var xmlhttp;
var dmxh=0;
var danmu = new Object();
//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
xmlhttp = new XMLHttpRequest();
function mxxx() {
  $("dm-text").readonly = "readonly";
  //$("dm-text").style.background = "#f4f4f4";
  $("dm-up").disabled = 'true';
  $("dm-up").style.background = '#777479';
  setTimeout(function() {
  $('dm-text').value = "";
   //$("dm-text").style.background = "#fff";
  $("dm-up").disabled = '';
  $("dm-up").style.background = '#8715EF';
  },
  500)
}
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    text = xmlhttp.responseText;
    danmu.text = JSON.parse(text);
    danmu.data = danmu.text.data;
    danmu.time = 0;
    danmu.full = 0;
    danmu.sjc=0;
    danmu.dsq=0;
    danmu.video=$('dm-video-x');
    $('dm-dmk').onclick=function(){
      if(this.className=='dm-dmk')
      {
        this.className='dm-dmk dm-dmk-c';
        $('danmu').style.opacity='0';
      }
      else{
        this.className='dm-dmk';
         $('danmu').style.opacity='1';
      }
    }
    $('dm-up').onclick = function() {
      var wb = $('dm-text').value;
      var color = $('dm-color').value;
      danmu.data[danmu.data.length] = JSON.parse('{"id":"' + danmu.data.length + '","text":"' + wb + '" ,"time":"' + danmu.time + '","color":"' + color + '"}');
      adddanmu(danmu.data.length - 1, 1);
      $("color-picker").style.display = 'none';
    }

      $('video-control-paused').onclick=function() {
            danmu.dsq=0;
            clearInterval(danmu.Interval);
            var e = $("danmu").getElementsByTagName("div");
            this.style.display='none';
            $('video-control-play').style.display='inline-block';
             danmu.video.pause();
           for (var i = e.length - 1; i >= 0; i--) {
                e[i].className="danmu dm-suspend";
            };
            $('dm-spinner').style.display='none';
            
          }
        $('dm-oneplay').onclick=function(){
          this.style.display='none';
          $('video-control-play').onclick();
        }
        $('dm-video-x').onclick=function(){
          if (this.paused) {$('video-control-play').onclick();}
           else{$('video-control-paused').onclick();} 
        }
       $('video-control-play').onclick=function(){
         $('dm-oneplay').style.display='none';
          if (danmu.dsq==0) {danmu.Interval=setInterval(danmutime, 100);danmu.dsq=1}
           var e = $("danmu").getElementsByTagName("div");
            console.log('视频播放');
            this.style.display='none';
            $('video-control-paused').style.display='inline-block';
            danmu.video.play();
            
            for (var i = e.length - 1; i >= 0; i--) {
                e[i].className="danmu";
            };

       }
       $('video-control-range').onclick=function(){
         danmu.video.currentTime=parseInt(this.value)*danmu.video.duration*0.0001;
         danmu.time=parseInt(danmu.video.currentTime)*10;
       }

    function danmutime() {
      //定时器 0.1s执行一次
      danmu.time++;
      if (danmu.time%2==0) {
        $('video-control-nowtime').innerHTML= getvideotime(danmu.video.currentTime).m+":"+getvideotime(danmu.video.currentTime).s;
        $('video-control-range').value=danmu.video.currentTime/danmu.video.duration*10000;
      };
      $("dm-time").value = danmu.time;
      //console.log(danmu.time)
      for (var i = danmu.data.length - 1; i >= 0; i--) {
        if (danmu.data[i].time == danmu.time) {
          adddanmu(i);
          //console.log('ddddddd');
        }
      }
    }
    //视频缓冲事件
    $('dm-video-x').addEventListener('waiting', function() {
       clearInterval(danmu.Interval);
       danmu.dsq=0;
      $('dm-spinner').style.display='block';
      var e = $("danmu").getElementsByTagName("div");
      console.log('loding');
      for (var i = e.length - 1; i >= 0; i--) {
                e[i].className="danmu dm-suspend";
            }; 
     
    });
    $('dm-video-x').addEventListener('playing', function() {
      if (danmu.dsq==0) {danmu.Interval=setInterval(danmutime, 100);danmu.dsq=1}
      var e = $("danmu").getElementsByTagName("div");
      $('dm-spinner').style.display='none';
       $('video-control-alltime').innerHTML= getvideotime(danmu.video.duration).m+":"+getvideotime(danmu.video.duration).s;
      for (var i = e.length - 1; i >= 0; i--) {
                e[i].className="danmu";
            };
      
    });


    function adddanmu(id, n) {
      var e = $("danmu").getElementsByTagName("div");
      var para = document.createElement("div");
      var node = document.createTextNode(danmu.data[id].text);
      var danmutop = danmupaixu();
      para.appendChild(node);
      para.className = 'danmu';
      para.id = "danmu" + id;
      var element = $("danmu");
      element.appendChild(para);
      for (var i = e.length - 1; i >= 0; i--) {
        if (e[i].style.top == danmutop + 'px' && e[i].style.paddingRight == '1px') {
          e[i].style.paddingRight = '2px';
        }
      }
      if (n) {
        $("danmu" + id).style.border = '2px solid #fff'
      }
      $("danmu" + id).style.top = danmutop + 'px';
      $("danmu" + id).style.paddingRight = '1px';
      $("danmu" + id).style.color = danmu.data[id].color;
      //console.log('在top'+danmutop+'发射弹幕'+id);
      setTimeout(remov, 28000, para.id);
    }
    function remov(id) {
      if ($(id).offsetLeft<0) {
        $("danmu").removeChild($(id));
      }
      else{
        setTimeout(remov, 200, id);
      }
      //console.log("我隐藏了"+id);
    }
    //键盘
    document.onkeydown=function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
          
            if(e && e.keyCode==39){ // right 键
                $('video-control-range').value=parseInt( $('video-control-range').value)+50;
                  $('video-control-range').onclick();
              }         
            if(e && e.keyCode==37){ // right 键
                $('video-control-range').value=parseInt( $('video-control-range').value)-50;
                $('video-control-range').onclick();
            }  
            if(e && e.keyCode==32){ // right 键
                $('dm-video-x').onclick()
            }          
             
        }; 
    function danmupaixu() {
      var e = $("danmu").getElementsByTagName("div");
      var b = 888;
      var f = 0;
      var d = 0;
      for (var i = e.length - 1; i >= 0; i--) {
        if (elemOffset(e[i]).right > 30 && e[i].style.paddingRight == '1px') {
          d = elemOffset(e[i]).top;
          //console.log('在top'+d+'可以发射弹幕');
          if (b > d) {
            b = d
          }
        } else {
          if (f <= elemOffset(e[i]).top) {
            f = elemOffset(e[i]).top + elemOffset(e[i]).height;
          }
        }

      }
      if (b == 888) {
        b = f
      }
      return b;
    }

    function getvideotime(time){
      var tm;
      var m=parseInt(time/60);
       if (parseInt(time%60)>=10) {
          tm=parseInt(time%60)
        }
        else{
           tm='0'+parseInt(time%60)
        }
        return {
        m: m,
        s: tm,
        };
    }

    function elemOffset(elem) {
      // var sc= window.document.body.offsetWidth-512;
      var t = elem.offsetTop;
      var l = elem.offsetLeft;
      var w = elem.offsetWidth;
      var h = elem.offsetHeight;
      var r = window.document.body.offsetWidth - l - w;

     // while (elem = elem.offsetParent) {
      //  t += elem.offsetTop;
      //  l += elem.offsetLeft;
     // }
      return {
        right: r,
        top: t,
        height: h,
      };
    }
    
  }
}
xmlhttp.open("GET", "https://t5.haotown.cn/danmu/getjson.php", true);
xmlhttp.send();
$("dm-video-x").style.width=document.body.offsetWidth+'px';
$("dm-video-x").style.height=window.screen.availHeight*0.84+'px';
document.getElementById("dm-colorbar").onclick=function(){
              if (document.getElementById("color-picker").style.display=='block') {
                document.getElementById("color-picker").style.display='none'
              }
              else{
                document.getElementById("color-picker").style.display='block'
              }
            }
        ColorPicker(

          document.getElementById('color-picker'),

          function(hex, hsv, rgb) {
            //console.log(hsv.h, hsv.s, hsv.v);         // [0-359], [0-1], [0-1]
            //console.log(rgb.r, rgb.g, rgb.b);         // [0-255], [0-255], [0-255]
            document.getElementById('dm-color').value=hex;
             document.getElementById('dm-colorbar').style.background=hex;

 });
function FullScreen() {
  if (xFullScreen()) {
     outfull()
  }
  else{
    startfull()
  }
       
}
function startfull(){
   var elem = document.getElementById("dm-video-warp");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen(); 
} 
}
function outfull(){
      danmu.full=0;
     if (document.exitFullscreen) { 
          document.exitFullscreen(); 
      } 
      else if (document.mozCancelFullScreen) { 
          document.mozCancelFullScreen(); 
      } 
      else if (document.webkitCancelFullScreen) { 
          document.webkitCancelFullScreen(); 
      } 
      else if (document.msExitFullscreen) { 
          document.msExitFullscreen(); 
      }
      $("dm-video-x").style.width=document.body.offsetWidth+'px';
      $("dm-video-x").style.height=window.screen.availHeight*0.84+'px';
}

function xFullScreen(){
  var c=document.webkitIsFullScreen||document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  return c;
}

function showbar(){
  danmu.sjc++;
  var time=setTimeout(sjc,1800,danmu.sjc);
  $('dm-video-y').style.opacity='1';
}
function sjc(time){
  if (time==danmu.sjc) {$('dm-video-y').style.opacity='0';}
}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            var response = JSON.parse(xhr.responseText);
            $('dm-video-x-main').src=response.durl[0].url;
        }
        else {
            console.log('Request was unsuccessful: ' + xhr.status);
        }
    }
};
xhr.open('get', 'https://api.prprpr.me/dplayer/video/bilibili?aid=6612136', true);
xhr.send(null);
