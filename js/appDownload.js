$(document).ready(function(){
	$("#smartClientAndr").click(function () {
		var hostname = window.document.location.hostname;
		if(hostname == "jxznet.shinemonitor.com"){
			window.location.href = "http://app.shinemonitor.com/bin/app/SmartClient_jxzn.apk"
		}else if(hostname == "stkpwr.shinemonitor.com"){
			window.location.href ="http://stkpwr.shinemonitor.com/bin/app/SmartClient.apk"
		}else if(hostname == "aiduopv.shinemonitor.com"){
			window.location.href ="http://app.shinemonitor.com/bin/app/SmartClient_aiduopv.apk"
		}else if(hostname == "jindouyun.shinemonitor.com/"){
			window.location.href ="http://app.shinemonitor.com/bin/app/SmartClient_jdy.apk"
		}else if(hostname == "wjyg.shinemonitor.com/"){
			window.location.href = "http://app.shinemonitor.com/bin/app/SmartClient_wjyg.apk"}
		else if(hostname == "htysolar.shinemonitor.com"){
			window.location.href = "http://app.shinemonitor.com/bin/app/SmartClient_hty.apk"}
		else if(hostname == "monitoring.icasolar.com"){
			window.location.href = "https://play.google.com/store/apps/details?id=com.eybond.smartclient.pv"}
		else{
			window.location.href = "http://app.shinemonitor.com/bin/app/SmartClient.apk"
		}
	});
	$("#smartLinkAndr").click(function () {
		var hostname = window.document.location.hostname;
		if(hostname == "jxznet.shinemonitor.com"){
			window.location.href ="http://shinemonitor.com/bin/app/SmartLink.apk"
		}else {
			window.location.href = "http://app.shinemonitor.com/bin/app/SmartLink.apk"
		}
	});
	$("#iossmartclient").click(function () {
		var hostname = window.document.location.hostname;
		if(hostname == "jxznet.shinemonitor.com"){
			window.location.href = "https://itunes.apple.com/us/app/中能电气/id1233201371?mt=8"
		}else if(hostname == "monitoring.icasolar.com"){
			window.location.href = "https://apps.apple.com/cn/app/pv123/id1536550135"
		}else {
			window.location.href = "http://itunes.apple.com/cn/app/smartclient-for-solar/id1070155085?l=en&mt=8"
		}
	});
	$("#iossmartlink").click(function () {

			window.location.href = "https://itunes.apple.com/cn/app/smartlink/id1098059164?l=en&mt=8"

	});
})
function checkCusInfo() {
	var hostname = window.document.location.hostname;
	switch (hostname) {
		case "solar.eybond.com":
			dynamicCusInfo("solar_eybond", "粤ICP备14070077号");
			break;
		case "eybond.shinemonitor.com":
			dynamicCusInfo("eybond", "粤ICP备14070077号");
			break;
		case "www.shinemonitor.com":
			dynamicCusInfo("shinemonitor", "粤ICP备14070077号");
			break;
		case "clou.shinemonitor.com":
			dynamicCusInfo("clou", "粤ICP备16009993号");
			break;
		case "www.clousolar.com":
			dynamicCusInfo("clou", "粤ICP备16009993号");
			break;
		case "litto.shinemonitor.com":
			dynamicCusInfo("litto", "粤ICP备14070077号");
			break;
		case "stkpwr.shinemonitor.com":
			dynamicCusInfo("stkpwr", "赣ICP备15011886号-1");
			break;
		case "server.stkpwr.com":
			dynamicCusInfo("stkpwr", "赣ICP备15011886号-1");
			break;
		case "moso.shinemonitor.com":
			dynamicCusInfo("moso", "粤ICP备14070077号");
			break;
		case "puhui.shinemonitor.com":
			dynamicCusInfo("puhui", "粤ICP备14070077号");
			break;
		case "sineng.shinemonitor.com":
			dynamicCusInfo("sineng", "粤ICP备14070077号");
			break;
		case "eastups.shinemonitor.com":
			dynamicCusInfo("eastups", "粤ICP备14070077号");
			break;
		case "windon.shinemonitor.com":
			dynamicCusInfo("windon", "粤ICP备14070077号");
			break;
		case "fute.shinemonitor.com":
			dynamicCusInfo("fute", "粤ICP备14070077号");
			break;
		case "diwei.shinemonitor.com":
			dynamicCusInfo("diwei", "粤ICP备14070077号");
			break;
		case "solarmust.shinemonitor.com":
			dynamicCusInfo("solarmust", "粤ICP备14070077号");
			break;
		case "sofar.shinemonitor.com":
			dynamicCusInfo("sofar", "粤ICP备14070077号");
			break;
		case "sci-one.shinemonitor.com":
			dynamicCusInfo("scione", "粤ICP备14070077号");
			break;
		case "grandsolar.shinemonitor.com":
			dynamicCusInfo("grandsolar", "粤ICP备14070077号");
			break;
		case "ksolare.shinemonitor.com":
			dynamicCusInfo("ksolare", "粤ICP备14070077号");
			break;
		case "yg.shinemonitor.com":
			dynamicCusInfo("yg", "粤ICP备14070077号");
			break;
		case "kstar.shinemonitor.com":
			dynamicCusInfo("kstar", "粤ICP备14070077号");
			break;
		case "sunrous.shinemonitor.com":
			dynamicCusInfo("sunrous", "粤ICP备14070077号");
			break;
		case "sdhtgd.shinemonitor.com":
			dynamicCusInfo("sdhtgd", "粤ICP备14070077号");
			break;
		case "rizhaogf.shinemonitor.com":
			dynamicCusInfo("rizhaogf", "粤ICP备14070077号");
			break;
		case "dh-solar.shinemonitor.com":
			dynamicCusInfo("dhsolar", "粤ICP备14070077号");
			break;
		case "njtmxny.shinemonitor.com":
			dynamicCusInfo("njtmxny", "粤ICP备14070077号");
			break;
		case "wjyg.shinemonitor.com":
			dynamicCusInfo("wjyg", "粤ICP备14070077号");
			break;
		case "nandudu.shinemonitor.com":
			dynamicCusInfo("nandudu", "粤ICP备14070077号");
			break;
		case "jxznet.shinemonitor.com":
            dynamicCusInfo("jxznet", "粤ICP备14070077号");
            break;
        case "renovigi.shinemonitor.com":
            dynamicCusInfo("renovigi", "粤ICP备14070077号");
            break;
        case "phocos.shinemonitor.com":
            dynamicCusInfo("phocos", "粤ICP备14070077号");
            break;
        case "cnreille.shinemonitor.com":
        	dynamicCusInfo("cnreille", "粤ICP备14070077号");
        	break;
        case "cnsdpv.shinemonitor.com":
        	dynamicCusInfo("cnsdpv", "粤ICP备14070077号");
        	break;	
        case "jingmin.shinemonitor.com":
        	dynamicCusInfo("jingmin", "粤ICP备14070077号");
        	break;
        case "nuocheng.shinemonitor.com":
        	dynamicCusInfo("nuocheng", "粤ICP备14070077号");
        	break;
        case "uratom.shinemonitor.com":
        	dynamicCusInfo("uratom", "粤ICP备14070077号");
        	break;
        case "jindouyun.shinemonitor.com":
        	dynamicCusInfo("jindouyun", "粤ICP备14070077号");
        	break;
        case "jjpvsolar.shinemonitor.com":
        	dynamicCusInfo("jjpvsolar", "粤ICP备14070077号");
        	break;
        case "aiduopv.shinemonitor.com":
        	dynamicCusInfo("aiduopv", "粤ICP备14070077号");
        	break;
         case "jbh.shinemonitor.com":
        	dynamicCusInfo("jbh", "粤ICP备14070077号");
        	break;
        case "liuhe.shinemonitor.com":
        	dynamicCusInfo("liuhe", "粤ICP备14070077号");
        	break;
        case "hnmoso.shinemonitor.com":
        	dynamicCusInfo("hnmoso", "粤ICP备14070077号");
        	break;
        case "htysolar.shinemonitor.com":
        	dynamicCusInfo("htysolar", "粤ICP备14070077号");
        	break;
        case "huaer.shinemonitor.com":
        	dynamicCusInfo("huaer", "粤ICP备14070077号");
        	break;
        case "solarfactory.shinemonitor.com"://深圳朗拓新能源
        	dynamicCusInfo("solarfactory", "粤ICP备14070077号");
        	break;
         case "monitor.solarfactoryusa.com"://深圳朗拓新能源
        	dynamicCusInfo("solarfactory", "粤ICP备14070077号");
        	break;
        case "hptnrg.shinemonitor.com"://深圳市和浦泰
        	dynamicCusInfo("hptnrg", "粤ICP备14070077号");
        	break;
        case "hopewind.shinemonitor.com"://禾望电气
        	dynamicCusInfo("hopewind", "粤ICP备14070077号");
        	break;
        case "jasolar.shinemonitor.com"://京奥新能源
        	dynamicCusInfo("jasolar", "粤ICP备14070077号");
        	break;
        case "sys.shinemonitor.com"://赛因斯智控
        	dynamicCusInfo("sys", "粤ICP备14070077号");
			break;
		case "huazst.shinemonitor.com"://安徽华瑑科技有限公司 
        	dynamicCusInfo("huazst", "粤ICP备14070077号");
			break;
		case "lb.shinemonitor.com"://龙博智能
        	dynamicCusInfo("lb", "粤ICP备14070077号");
			break;
		case "ahlianwei.shinemonitor.com"://安徽联维
            dynamicCusInfo("ahlianwei", "粤ICP备14070077号");
			break;	
		case"renovigi2.shinemonitor.com"://巴西客户默认葡萄牙语2
		    dynamicCusInfo("renovigi", "");
			break;
		case"www.renovigi.solar"://巴西客户默认葡萄牙语4
		    dynamicCusInfo("renovigi", "");
			break;
		case"elgin.shinemonitor.com"://宁波德业的客户
		    dynamicCusInfo("elgin", "粤ICP备14070077号");
			break;
		case"gdhcxny.shinemonitor.com"://广东恒琛新能源有限公司
		    dynamicCusInfo("gdhcxny", "粤ICP备14070077号");
			break;
		case"hnyangchuang.shinemonitor.com"://海南洋创新能源科技有限公司
		    dynamicCusInfo("hnyangchuang", "粤ICP备14070077号");
			break;
		case"icasolar.shinemonitor.com"://PT Indodaya Cipta Lestari
		    dynamicCusInfo("icasolar", "粤ICP备14070077号");
			break;
		case"monitoring.icasolar.com"://PT Indodaya Cipta Lestari
		    dynamicCusInfo("icasolar", "粤ICP备14070077号");
			break;
		case"byd.shinemonitor.com"://比亚迪
		    dynamicCusInfo("byd", "粤ICP备14070077号");
			break;
		case"kirloskar.shinemonitor.com"://kirloskar
		    dynamicCusInfo("kirloskar", "粤ICP备14070077号");
			break;
		case"segly.shinemonitor.com"://深圳赛格龙焱能源科技有限公司
		    dynamicCusInfo("segly", "粤ICP备14070077号");
			break;
			
		
        	
		default:
			dynamicCusInfo("shinemonitor", "粤ICP备14070077号");
			break;
	}
}

//动态赋值图片地址和icp备案信息
//cus--对应cus文件夹下面的子文件名称,icp--该客户icp信息
function dynamicCusInfo(cus, icp) {
	var version = "V1.2.8.0";
	var vICP = icp + "     " + version;
	//替换所有网页icon
	//如果域名是elgin，icon需要更换，以下是判断代码
	if(window.document.location.hostname == "elgin.shinemonitor.com") {
		var iconUrl = "/assets/images/cus/" + cus + "/logo1.ico";
		var iconUrl2 = "/assets/images/cus/" + cus + "/logo1.ico";
	} else{
		var iconUrl = "/assets/images/cus/" + cus + "/logo.ico";
		var iconUrl2 = "/assets/images/cus/" + cus + "/logo.ico";
	}
	// var iconUrl = "/assets/images/cus/" + cus + "/logo.ico";
	// var iconUrl2 = "/assets/images/cus/" + cus + "/logo.ico";
	$(".cusIcoFirst").each(function () {
		$(this).attr("href", iconUrl);
	});

	$(".cusIcoSecond").each(function () {
		$(this).attr("href", iconUrl2);
	});

	//替换中文logo.png
	var logoUrl = "/assets/images/cus/" + cus + "/logo.png";
	var logoUrl2 = "/assets/images/cus/" + cus + "/logo.png";
	$(".cusIndexCh").each(function () {
		$(this).attr("src", logoUrl);
	});
	//替换所有安卓安装二维码
	var smartClentLogo = "/assets/images/cus/" + cus + "/qrApkSmartClient.png";
	var smartLinkLogo = "/assets/images/cus/" + cus + "/qrApkSmartLink.png";
	var iodsmartLinkLogo = "/assets/images/cus/" + cus + "/iossmartclient.png";
	if(cus == "jxznet"){
		$("#iossmartclient").each(function () {
		$(this).attr("src", iodsmartLinkLogo);
	});
	}else if(cus == "icasolar"){
		$("#iossmartclient").each(function () {
			$(this).attr("src", iodsmartLinkLogo);
		});
	}else{
		$("#iossmartclient").each(function () {
		$(this).attr("src", "/out/images/smartclient-ios.png");
		});
	}
	$("#smartClientAndr").each(function () {
		$(this).attr("src", smartClentLogo);
	});

	$("#smartLinkAndr").each(function () {
		$(this).attr("src", smartLinkLogo);
	});
}
