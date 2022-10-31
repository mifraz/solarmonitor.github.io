//谷歌 专用变量
var addInfowindow_f;
var addMarkersArray_f = [];

/***
 *地图容器id是“MapBox” 
 * 传入点击地图时需要填写当前点击的经纬度的dom,格式:
 * 	{
 * 	lat:"#aa",lon:"#bb"
 * }
 *
 *
 *
 */
//生成高德地图点击获取经纬度控件
function gaodeMap(dom, init) {

	var obj = {
		lon: $(dom.lon).val(),
		lat: $(dom.lat).val(),
	}
	var map
	var reg = /^(-)?[0-9]+.?[0-9]*$/ //判断是否是数字
	if(init.init) {
//		if(reg.test(obj.lon) && reg.test(obj.lat)) {
//
//			clickMapShowMarker(init.map, dom.lon, dom.lat, obj)
//
//		} else {
//
//			clickMapShowMarker(init.map, dom.lon, dom.lat)
//
//		}
	} else {
		if(reg.test(obj.lon) && reg.test(obj.lat)) {
			map = initGaodeMap(obj)
			init.init = true;
			init.map = map;
			clickMapShowMarker(init.map, dom.lon, dom.lat, obj)

		} else {
			map = initGaodeMap()
			init.init = true;
			init.map = map;
			clickMapShowMarker(init.map, dom.lon, dom.lat)
		}
	}

}
//初始化地图，返回高德地图对象
function initGaodeMap(obj) {

	if(obj == undefined) {
		var obj = {
			lon: 107.195847,
			lat: 34.222456
		}
	}

	var map = new AMap.Map("MapBox", {
		resizeEnable: true,
		center: [obj.lon, obj.lat],
		zoom: 6
	});

	return map
}
//点击地图生成高德地图当前点击点标记，赋值对应的dom上
function clickMapShowMarker(map, domlon, domlat, obj) {
	if(obj == undefined) {
		var obj = {
			lon: 107.195847,
			lat: 34.222456
		}
	}
	var markers = [];
	var initMarker = new AMap.Marker({
		position: new AMap.LngLat(obj.lon, obj.lat),
		map: map
	});
	markers.push(initMarker);

	var info = "<p>经度：" + obj.lon + "</p><p>纬度：" + obj.lat + "</p>"
	newInfoWindow(map, info, obj)
	var clickEventListener = map.on('click', function(e) {
		var marker = new AMap.Marker({
			position: e.lnglat,
			map: map
		});

		obj = {
			lon: e.lnglat.lng,
			lat: e.lnglat.lat
		}
		//判断是否需要赋值	
		if(domlon != undefined) {
			$(domlon).val(e.lnglat.lng)
			$(domlat).val(e.lnglat.lat)

		}
		var addr;
		//暂时无需显示地理位置，因此注释
		//			latLonConvertAddr(map, obj, addr)
		//在	显示当前点标记前，只能显示一个点标记
		if(markers.length != 0)
			markers[markers.length - 1].setMap(null);
		markers.push(marker);
		info = "<p>经度：" + obj.lon + "</p><p>纬度：" + obj.lat + "</p>"

		newInfoWindow(map, info, obj)

	})

}
/**
 *addr： 北京市海淀区苏州街
 *高德地图地理位置如深圳，转化成经纬度,返回经纬度
 *
 */
function addrConvertLatLon(map, addr, latLonObj) {

	//地理位置转成经纬度
	var geocoder;
	//加载地理编码插件 
	map.plugin(["AMap.Geocoder"], function() {
		geocoder = new AMap.Geocoder({
			radius: 1000, //以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息 
			city: "010" //城市，默认："全国" 
		});
		//返回地理编码结果 
		AMap.event.addListener(geocoder, "complete", function(desc) {
		 
			latLonObj = desc

		});
		geocoder.getLocation("北京市海淀区苏州街");
	});

}

/**
 * 高德地图经纬度转地理位置
 * 
 * 
 * */

function latLonConvertAddr(map, latLonObj, addr) {

	//经纬度转成地理位置
	var geocoder2;
	var lnglatXY = new AMap.LngLat(latLonObj.lon, latLonObj.lat);
	//加载地理编码插件 
	map.plugin(["AMap.Geocoder"], function() {
		geocoder2 = new AMap.Geocoder({
			radius: 1000, //以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息 
			extensions: "all" //返回地址描述以及附近兴趣点和道路信息，默认"base" 
		});
		//返回地理编码结果 
		AMap.event.addListener(geocoder2, "complete", function(desc) {
			console.log("逆地理编码")
			console.log(desc)
			addr = desc
		});
		//逆地理编码 
		geocoder2.getAddress(lnglatXY);
	});

}

//创建高德地图信息窗并打开
function newInfoWindow(map, info, latLon) {
	var infoWindow = new AMap.InfoWindow({
		isCustom: false, //使用自定义窗体
		content: info, //传入 dom 对象，或者 html 字符串
		offset: new AMap.Pixel(16, -50)
	});

	var position = new AMap.LngLat(latLon.lon, latLon.lat);
	infoWindow.open(map, position);
}

//-----------------------------------------------------------------------------------------

//创建谷歌地图点击地图获取经纬度控件
function googleMap(dom, init) {

	var obj = {
		lng: $(dom.lon).val(),
		lat: $(dom.lat).val(),
	}
	var map
	var reg = /^(-)?[0-9]+.?[0-9]*$/ //判断是否是数字
	if(reg.test(obj.lng) && reg.test(obj.lat)) {
		if(init.init) {
			console.log("地图已渲染")
//			clickGoogleMapShowMarker(init.map, dom.lon, dom.lat, obj)
			}
			else if(init.init == false) {
				map = initGoogleMap(obj)

				init.init = true;
				init.map = map
			 
				clickGoogleMapShowMarker(init.map, dom.lon, dom.lat, obj)
			}

		} else {
			if(init.init) {
				console.log("地图已渲染")
//				clickGoogleMapShowMarker(init.map, dom.lon, dom.lat)
			} else if(init == false) {
				map = initGoogleMap()
				init.init = true;
				init.map = map
				clickGoogleMapShowMarker(init.map, dom.lon, dom.lat)
			}

		}

	}

	//初始化地图，返回谷歌地图对象
	function initGoogleMap(obj) {

		if(obj == undefined) {
			var obj = {
				lon: 107.195847,
				lat: 34.222456
			}
		}
		var mapOptions = {
			center: {
				lat: parseFloat(obj.lat),
				lng: parseFloat(obj.lng)
			},
			zoom: 6,
			minZoom: 2,
			maxZoom: 19,
			//		mapTypeId: google.maps.MapTypeId.HYBRID,
			//		mapTypeControlOptions: {
			//			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			//			position: google.maps.ControlPosition.TOP_RIGHT
			//		}
		};
		//	 $("#MapBox").html("")

		return new google.maps.Map(document.getElementById("MapBox"), mapOptions)
	}

	//点击地图生成谷歌地图当前点击点标记，赋值对应的dom上
	function clickGoogleMapShowMarker(map, domlon, domlat, obj) {
		if(obj == undefined) {
			var obj = {
				lng: 107.195847,
				lat: 34.222456
			}
		}
		clearOverlays2(addInfowindow_f)
		var point = new google.maps.LatLng(obj.lat, obj.lng);
		var addMarker_f = new google.maps.Marker({
			position: point,
			map: map
		});
		addMarkersArray_f.push(addMarker_f);
		attachSecretMessage2(map, addMarker_f, obj, domlon, domlat)

		//监听点击地图事件
		google.maps.event.addListener(map, 'click', function(event) {
			clearOverlays2(addInfowindow_f)
			addMarker_f = new google.maps.Marker({
				position: event.latLng,
				map: map
			});
			addMarkersArray_f.push(addMarker_f);
			var lngandlat = {
				lng: event.latLng.lng(),
				lat: event.latLng.lat()
			}
			attachSecretMessage2(map, addMarker_f, lngandlat, domlon, domlat)
 
		});

	}
	//清除谷歌地图点标记
	function clearOverlays2(infowindow) {

		if(addMarkersArray_f && addMarkersArray_f.length > 0) {
			for(var i = 0; i < addMarkersArray_f.length; i++) {
				addMarkersArray_f[i].setMap(null);
			}
			addMarkersArray_f.length = 0;
		}
		if(infowindow) {
			infowindow.close();
		}
	}
	//点击生成信息窗
	function attachSecretMessage2(map, marker, piont, domlon, domlat) {
		var message = "<b>latitude:</b>" + piont.lat + " <br/><b>Longitude: </b>" + piont.lng + "<br />";
	 
		addInfowindow_f = new google.maps.InfoWindow({
			content: message,
			size: new google.maps.Size(50, 50)
		});
		addInfowindow_f.open(map, marker);
		$(domlon).val(piont.lng)
		$(domlat).val(piont.lat)
	}

//-----------------------------------------------------------------------------------------
var layer;
var content;
//创建maptalks地图点击地图获取经纬度控件
function maptalksMap(dom, init) {

	var obj = {
		lng: $(dom.lon).val(),
		lat: $(dom.lat).val(),
	}
	var map
	var reg = /^(-)?[0-9]+.?[0-9]*$/ //判断是否是数字
	if(reg.test(obj.lng) && reg.test(obj.lat)) {
		if(init.init) {
			console.log("地图已渲染")
			}
			else if(init.init == false) {
				map = initMaptalksMap(obj)

				init.init = true;
				init.map = map
				clickMaptalksMapShowMarker(init.map, dom.lon, dom.lat, obj)
			}
		} else {
			if(init.init) {
				console.log("地图已渲染")
			} else if(init == false) {
				map = initMaptalksMap()
				init.init = true;
				init.map = map
				clickMaptalksMapShowMarker(init.map, dom.lon, dom.lat)
			}

		}

	}

	//初始化地图，返回maptalks地图对象
	function initMaptalksMap(obj) {

		if(obj == undefined) {
			var obj = {
				lng: 107.195847,
				lat: 34.222456
			}
		}
		var map = new maptalks.Map("MapBox", {
			center: [parseFloat(obj.lng), parseFloat(obj.lat)],
			centerCross: false,
			zoom: 6,
			minZoom: 2,
			maxZoom: 18, //缩放级别控件
			dragPitch: false,
			zoomControl: false,
			scaleControl: false,
			baseLayer: new maptalks.TileLayer("base", {
				subdomains: ["a", "b", "c", "d"],
				attribution: '© <a href="http://osm.org">OpenStreetMap</a> contributors, © <a href="https://carto.com/">CARTO</a>',
				//底图服务器地址，如下为瓦片地址
				urlTemplate: storage_i18n_get_id() == 0?"https://tile.openstreetmap.org/{z}/{x}/{y}.png":"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
				// urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" //tileSystem 控制瓦片的x,y以及行列，后两个是origin原点位置（很重要）
			}),
			layers: [new maptalks.VectorLayer("v")],
			attribution: {
				//左下角info
				content: "©eybond"
			}
		});

		return map
	}

	//点击地图生成maptalks地图当前点击点标记，赋值对应的dom上
	function clickMaptalksMapShowMarker(map, domlon, domlat, obj) {
		if(obj == undefined) {
			var obj = {
				lng: 107.195847,
				lat: 34.222456
			}
		}
		content = "<b>latitude:</b>" + obj.lat + " <br/><b>Longitude: </b>" + obj.lng + "<br />";
          var marker = new maptalks.Marker([obj.lng, obj.lat], {
            symbol: {
			//   "markerFile": "https://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png",
			  'markerFile': '/assets/images/mark_bs.png',
              'markerWidth': 25,
              'markerHeight': 35,
			  "markerOpacity": 1
            }
		  });
          marker.setInfoWindow({
			content: content,
			dy: -10
		  });
		  layer = new maptalks.VectorLayer("vector", [marker]).addTo(
            map
          );
		  setTimeout(() => {
			  marker.openInfoWindow();
		  }, 1000);
		  
		  map.on("click", function(e) {
			$(domlon).val(e.coordinate.x.toFixed(6))
			$(domlat).val(e.coordinate.y.toFixed(6))
            content = "<b>latitude:</b>" + e.coordinate.y.toFixed(6) + " <br/><b>Longitude: </b>" + e.coordinate.x.toFixed(6) + "<br />";
            map.removeLayer(layer);
            marker = new maptalks.Marker([e.coordinate.x, e.coordinate.y], {
              symbol: {
                // "markerFile": "https://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png",
                // "markerDx": 0,
				// "markerDy": 0,
				'markerFile': '/assets/images/mark_bs.png',
				'markerWidth': 25,
				'markerHeight': 35,
                "markerOpacity": 1
              }
			});
            marker.setInfoWindow({
              content: content,
              dy: -10
			});
			layer = new maptalks.VectorLayer("vector", [marker]).addTo(map);
            marker.openInfoWindow();
          });
	}