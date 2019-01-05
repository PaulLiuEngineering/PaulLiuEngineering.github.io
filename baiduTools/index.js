function Point(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
  
  
  function GpsToBaiduPoints(points){
      var resultPoints = [];
      $.each(points,function(index,point){
          var _t = wgs2bd(point.lat,point.lng);
          var _BPoint = new Point(_t[0], _t[1]);
          resultPoints.push(_BPoint);
      });
      return resultPoints;
  }
  
    function GpsToBaiduPointsForHeatmap(points){
      var resultPoints = [];
      $.each(points,function(index,point){
          var _t = wgs2bd(point.lat,point.lng);
          //var _BPoint = new Point(_t[0], _t[1]);
          var _BPoint = {};
          _BPoint.lng = _t[1];
          _BPoint.lat = _t[0];
          _BPoint.count = point.count;
          resultPoints.push(_BPoint);
      });
      return resultPoints;
  }


    function GcjToBaiduPoints(points){
      var resultPoints = [];
      $.each(points,function(index,point){
          var _t = gcj2bd(point.lat,point.lng);
          //var _BPoint = new Point(_t[0], _t[1]);
          var _BPoint = {};
          _BPoint.lng = _t[1];
          _BPoint.lat = _t[0];
         // _BPoint.count = point.count;
          resultPoints.push(_BPoint);
      });
      return resultPoints;
  }

  //////////////////////////////////////////
  //////////////转换核心代码////////////////
  //////////////////////////////////////////
  var pi = 3.14159265358979324;
  var a = 6378245.0;
  var ee = 0.00669342162296594323;
  var x_pi = 3.14159265358979324*3000.0/180.0;


  //世界大地坐标转为百度坐标
  function wgs2bd(lat,lon) {
      var wgs2gcjR = wgs2gcj(lat, lon);
      var gcj2bdR = gcj2bd(wgs2gcjR[0], wgs2gcjR[1]);
      return gcj2bdR;
  }

  function gcj2bd(lat,lon) {
      var x = lon, y = lat;
      var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
      var bd_lon = z * Math.cos(theta) + 0.0065;
      var bd_lat = z * Math.sin(theta) + 0.006;
      var result = [];
      result.push(bd_lat);
      result.push(bd_lon);
      return result;
  }

  function bd2gcj(lat,lon) {
      var x = lon - 0.0065, y = lat - 0.006;
      var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
      var gg_lon = z * Math.cos(theta);
      var gg_lat = z * Math.sin(theta);
      var result = [];
      result.push(gg_lat);
      result.push(gg_lon);
      return result;
  }

  function wgs2gcj(lat,lon) {
      var dLat = transformLat(lon - 105.0, lat - 35.0);
      var dLon = transformLon(lon - 105.0, lat - 35.0);
      var radLat = lat / 180.0 * pi;
      var magic = Math.sin(radLat);
      magic = 1 - ee * magic * magic;
      var sqrtMagic = Math.sqrt(magic);
      dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
      dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
      var mgLat = lat + dLat;
      var mgLon = lon + dLon;
      var result = [];
      result.push(mgLat);
      result.push(mgLon);
      return result;
  }

  function transformLat(lat,lon) {
      var ret = -100.0 + 2.0 * lat + 3.0 * lon + 0.2 * lon * lon + 0.1 * lat * lon + 0.2 * Math.sqrt(Math.abs(lat));
      ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
      ret += (20.0 * Math.sin(lon * pi) + 40.0 * Math.sin(lon / 3.0 * pi)) * 2.0 / 3.0;
      ret += (160.0 * Math.sin(lon / 12.0 * pi) + 320 * Math.sin(lon * pi  / 30.0)) * 2.0 / 3.0;
      return ret;
  }

  function transformLon(lat,lon) {
      var ret = 300.0 + lat + 2.0 * lon + 0.1 * lat * lat + 0.1 * lat * lon + 0.1 * Math.sqrt(Math.abs(lat));
      ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
      ret += (20.0 * Math.sin(lat * pi) + 40.0 * Math.sin(lat / 3.0 * pi)) * 2.0 / 3.0;
      ret += (150.0 * Math.sin(lat / 12.0 * pi) + 300.0 * Math.sin(lat / 30.0 * pi)) * 2.0 / 3.0;
      return ret;
  }
//   var points = [new Point(39.92800358243626, 116.43600337715225), new Point(39.92799769620949, 116.43645424179245)]
//   debugger
//    var converted = GpsToBaiduPoints(points)
//    console.log(converted)
  
//   console.log("=================================")
//   


function addOoverlay(value) {
       var points = []
        //console.log(cityName, value, coordinate)
        if (!value) {
            return;
        }
        //去除空格，截取坐标，区分经纬度
        var arr = ((value.trim()).split(/\t/)[value.split(/\t/).length - 1]).split(';');
        for (var i = 0, len = arr.length; i < len; i++) {
          if(arr[i]!== ""){
            var point = arr[i].split(",");
            points.push(new BMap.Point(point[0], point[1]));
          }
        }
        //if (coordinate === "WGS84") {
        console.log('points is ',points );
        points = GpsToBaiduPoints(points)
        //}
        moveMap(points.lng, points.lat); //保存坐标数据的第一个坐标点为中心


        //var pointss = JSON.parse(JSON.stringify(points));
        //将解析内容添加到对象中
        var rectangle = new BMap.Polygon(points, {
            strokeColor: 'red', //线条颜色
            strokeWeight: 3, //线条宽度
            strokeOpacity: 1, //线条颜色透明度
            fillOpacity:0.3
        });

        map.addOverlay(rectangle); //绘制区域到页面
        // var opts = {
        //     width: 10, // 信息窗口宽度
        //     height: 10, // 信息窗口高度
        //     title: cityName // 信息窗口标题
        // };
        // var infoWindow = new BMap.InfoWindow("", opts); // 创建信息窗口对象

        // console.log(points)
        // rectangle.addEventListener("click", function() {
        //     bmap.openInfoWindow(infoWindow, new BMap.Point(pointss[0].lng, pointss[0].lat)); 
        //     //开启信息窗口
        // });
        //经纬度（lng,lat）东经：116°23′17〃，北纬：39°54′27〃
        // val = '';
        // points = [];
        // cityName = '';
    }

    function moveMap(lng, lat) {
        map.centerAndZoom(new BMap.Point(lng || 116.404, lat || 39.915), 13);
    }

    function drawWeiLan(values){
      for(var i = 0;i<values.length;i++){
        var val = values[i][0];
        addOoverlay(val)
      }
    }
  