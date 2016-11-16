
var text;
var xmlhttp;
//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
xmlhttp = new XMLHttpRequest();
function mxxx() {
  document.getElementById("dm-text").readonly = "readonly";
  document.getElementById("dm-text").style.background = "#f4f4f4";
  document.getElementById("dm-up").disabled = 'true';
  document.getElementById("dm-up").style.background = '#777479';
  setTimeout(function() {
    document.getElementById('dm-text').value = "";
    document.getElementById("dm-text").style.background = "#fff";
    document.getElementById("dm-up").disabled = '';
    document.getElementById("dm-up").style.background = '#8715EF';
  },
  2000)
}
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    text = xmlhttp.responseText;
    var danmu = new Object();
    danmu.text = JSON.parse(text);
    danmu.data = danmu.text.data;
    danmu.time = 0;
    setInterval(danmutime, 100);
    document.getElementById('dm-up').onclick = function() {
      var wb = document.getElementById('dm-text').value;
      var color = document.getElementById('dm-color').value;
      danmu.data[danmu.data.length] = JSON.parse('{"id":"' + danmu.data.length + '","text":"' + wb + '" ,"time":"' + danmu.time + '","color":"' + color + '"}');
      adddanmu(danmu.data.length - 1, 1);
      document.getElementById("color-picker").style.display = 'none';
    }
    function danmutime() {
      danmu.time++;
      document.getElementById("dm-time").value = danmu.time;
      //console.log(danmu.time)
      for (var i = danmu.data.length - 1; i >= 0; i--) {
        if (danmu.data[i].time == danmu.time) {
          adddanmu(i);
          //console.log('ddddddd');
        }
      }
    }
    function adddanmu(id, n) {
      var e = document.getElementById("danmu").getElementsByTagName("div");
      var para = document.createElement("div");
      var node = document.createTextNode(danmu.data[id].text);
      var danmutop = danmupaixu();
      para.appendChild(node);
      para.className = 'danmu';
      para.id = "danmu" + id;
      var element = document.getElementById("danmu");
      element.appendChild(para);
      for (var i = e.length - 1; i >= 0; i--) {
        if (e[i].style.top == danmutop + 'px' && e[i].style.paddingRight == '1px') {
          //console.log('这行有人了');
          e[i].style.paddingRight = '2px';
        }
      }
      if (n) {
        document.getElementById("danmu" + id).style.border = '2px solid #fff'
      }
      document.getElementById("danmu" + id).style.top = danmutop + 'px';
      document.getElementById("danmu" + id).style.paddingRight = '1px';
      document.getElementById("danmu" + id).style.color = danmu.data[id].color;
      //console.log('在top'+danmutop+'发射弹幕'+id);
      setTimeout(remov, 28000, para.id);
    }
    function remov(id) {
      document.getElementById("danmu").removeChild(document.getElementById(id));
      //console.log("我隐藏了"+id);
    }

    function danmupaixu() {
      var e = document.getElementById("danmu").getElementsByTagName("div");
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
            f = elemOffset(e[i]).top + elemOffset(e[i]).height
          }
        }

      }

      if (b == 888) {
        b = f
      }
      return b;
    }

    function elemOffset(elem) {
      var t = elem.offsetTop;
      var l = elem.offsetLeft;
      var w = elem.offsetWidth;
      var h = elem.offsetHeight;
      var r = window.document.body.offsetWidth - l - w;
      while (elem = elem.offsetParent) {
        t += elem.offsetTop;
        l += elem.offsetLeft;
      }
      return {
        right: r,
        top: t,
        height: h,
      };
    }
    
  }
}
xmlhttp.open("GET", "getjson.php", true);
xmlhttp.send();

