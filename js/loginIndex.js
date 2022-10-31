I18N_ZH_CN = 0x00;
//按域名换logo
function checkCusInfo() {
	var hostname = window.document.location.hostname;
	 
	switch(hostname) {
		case "www.chongdian123.com":
			dynamicCusInfo("solar_eybond", "粤ICP备14070077号-2");
			break;
		case "solar.eybond.com":
			dynamicCusInfo("solar_eybond", "粤ICP备14070077号");
			break;
		case "eybond.shinemonitor.com":
			dynamicCusInfo("eybond", "粤ICP备14070077号");
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
			dynamicCusInfo("renovigi", "粤ICP备14070077号", true);
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
		case "www.shinemonitor.com":
			dynamicCusInfo("shinemonitor", "粤ICP备14070077号-3");
			break;
		case "huaer.shinemonitor.com":
			dynamicCusInfo("huaer", "粤ICP备14070077号-3");
			break;
		case "solarfactory.shinemonitor.com": //深圳朗拓新能源
			dynamicCusInfo("solarfactory", "粤ICP备14070077号");
			break;
		case "monitor.solarfactoryusa.com": //深圳朗拓新能源
			dynamicCusInfo("solarfactory", "粤ICP备14070077号");
			break;
		case "hptnrg.shinemonitor.com": //深圳市和浦泰
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
			dynamicCusInfo("shinemonitor", "粤ICP备14070077号-3");
			break;
	}
}

//动态赋值图片地址和icp备案信息
//cus--对应cus文件夹下面的子文件名称,icp--该客户icp信息
function dynamicCusInfo(cus, icp, initialBack) {
	var version = "V1.10.1.1";
	var vICP = icp;
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
	$(".cusIcoFirst").each(function() {
		$(this).attr("href", iconUrl);
	});

	$(".cusIcoSecond").each(function() {
		$(this).attr("href", iconUrl2);
	});

	//替换所有的ICP备案信息
	$(".cusIcp").each(function() {
		$(this).html(vICP);
	});
	$(".cusIcp1").each(function() {
		$(this).text(version);
	});

	//替换中文logo.png
	var logoUrl = "/assets/images/cus/" + cus + "/logo.png";
	var logoUrl2 = "/assets/images/cus/" + cus + "/logo.png";
	var logoUrl3 = "/assets/images/cus/" + cus + "/background.jpeg";
	var logoUrl4 = "/assets/images/cus/" + cus + "/background.png";
	$(".cusIndexCh").each(function() {
		$(this).attr("src", logoUrl);
	});
	!initialBack && $("#bigbackgound").attr("src", logoUrl4)
	$("body").each(function() {
		$(this).css("background", "url(" + logoUrl3 + ") center center no-repeat");
	});
	//替换英文logo.png
	var logoUrlEn = "/assets/images/cus/" + cus + "/logo_en.png";
	var logoUrlEn2 = "/assets/images/cus/" + cus + "/logo_en.png";
	$(".cusIndexEn").each(function() {
		$(this).attr("src", logoUrlEn);
	});

	//elgin域名定制，背景图换了后不需要登录首页左上角的logo
	if(window.document.location.hostname == "elgin.shinemonitor.com"||window.document.location.hostname == "monitoring.icasolar.com"||window.document.location.hostname == "segly.shinemonitor.com") {
		 $(".cusIndexCh").hide()
		 } else{
		 $(".cusIndexCh").show()
		 }

}

//登录本地存储
function storage_get() {
	return JSON.parse(window.localStorage.getItem("globalStorage"));
}
/** 本地存储操作: 设置globalStorage. */
function storage_set(globalStorage) {
	window.localStorage.setItem("globalStorage", JSON.stringify(globalStorage));
}
/** 本地存储操作: 登录成功(非申请浏览权限成功)后. */
function storage_login(usr, pwdSha1, remember, authDat) {
	var globalStorage = window.localStorage.getItem("globalStorage");
	globalStorage = (globalStorage === undefined || globalStorage === null) ? new Object() :
		JSON.parse(globalStorage);
	//
	globalStorage.accounts = new Array();
	var account = new Object();
	account.usr = usr;
	account.remember = remember;
	if(account.remember)
		account.pwdSha1 = pwdSha1;
	account.gts = new Date().getTime();
	account.dat = authDat;
	globalStorage.accounts[0] = account;
	//
	storage_set(globalStorage);
}

/** 本地存储操作: 申请浏览权限成功后. */
function storage_browse_in(usr, authDat,lang) {
	var globalStorage = storage_get();
	//
	var account = new Object();
	account.usr = usr;
	account.remember = false;
	account.pwdSha1 = null;
	account.gts = new Date().getTime();
	account.dat = authDat;
	if(lang !=undefined)
	account.lang = lang
	globalStorage.accounts[globalStorage.accounts.length] = account;
	//
	//	console.log("storage_browse_in: ", globalStorage.accounts.length);
	storage_set(globalStorage);
}

/** 本地存储操作: 设置当前用户默认语言. */
function storage_i18n_set(lang) {
	var globalStorage = storage_get();
	globalStorage = (globalStorage === undefined || globalStorage === null) ? new Object() :
		globalStorage;
	//
	if(lang == "中文")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = 0;
	else if(lang == "English")
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 1;
	else if(lang == "Svenska")
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 2;
	else if(lang == "Português")
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 3;
	else if(lang == "Español")
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 4;
	else if(lang == "Polski")
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 5;
	else if(lang == "中文繁体")
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 6;
	else if(lang == "India")
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 7;
	else if(lang == "TiếngViệt")
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 8;
	else if(lang == "Indonesian")
	    globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 9;
	else
		globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang = 1;
	//
	storage_set(globalStorage);
}

/** 本地存储操作: 获取当前用户默认语言id. */
function storage_i18n_get_id() {
	var globalStorage = storage_get();
	if((globalStorage === undefined || globalStorage === null)&&globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang == undefined)
		return I18N_ZH_CN;
	if( globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang == undefined)
	return globalStorage.lang

	return globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)].lang;
}

function storage_check_login() {
	var globalStorage = window.localStorage.getItem("globalStorage");
	// debugger
	if(globalStorage === undefined || globalStorage === null)
		return false;
	globalStorage = JSON.parse(globalStorage);
	if(globalStorage.accounts === undefined || globalStorage.accounts === null)
		return false;
	var account = globalStorage.accounts[0]; /* 取第一个用户, 它一定是手动登录的用户. */
	var now = new Date().getTime();
	//	if (now - account.gts >= account.dat.expire * 1000) {
	//		/** 过期. */
	//		window.localStorage.removeItem("globalStorage");
	//		return false;
	//	}
	return true;
}

/** 本地存储操作: 获取当前登录(进入)的用户 */
function storage_get_current_usr() {
	var globalStorage = storage_get();
	if(globalStorage === undefined || globalStorage === null)
		return null;

	return globalStorage.accounts[((GetRequest().index == "undefined" || GetRequest().index == undefined) ? 0 : GetRequest().index)];
}

/** 本地存储操作: 是否有记住密码. */
function storage_is_remember() {
	var globalStorage = storage_get();
	if(globalStorage === undefined || globalStorage === null)
		return false;
	if(globalStorage.accounts.length < 1)
		return false;
	return globalStorage.accounts[0].remember;
}

/** 本地存储操作: 返回记住的用户名和密码. */
function storage_get_remember_usr() {
	var globalStorage = storage_get();
	if(globalStorage === undefined || globalStorage === null)
		return null;
	if(globalStorage.accounts === undefined || globalStorage.accounts == null)
		return null;
	if(globalStorage.accounts.length < 1)
		return null;
	if(!globalStorage.accounts[0].remember)
		/** 未选择记住. */
		return null;
	var arr = new Array();
	arr[0] = globalStorage.accounts[0].usr; // 用户名.
	arr[1] = globalStorage.accounts[0].pwdSha1; // 密钥.
	return arr;
}

/** 当前用户名. */
function getCurrentUsername() {
	var currUsr = storage_get_current_usr();
	return currUsr == null ? null : currUsr.usr;
}

/** 当前角色名. */
function getCurrentRoleName() {
	var currUsr = storage_get_current_usr();
	if(currUsr == null)
		return null;
	switch(currUsr.dat.role) {
		case 1:
			return getMultiLangError("user_vendor");
		case 2:
			return getMultiLangError("user_dist");
		case 3:
			return getMultiLangError("user_group");
		case 15:
			return getMultiLangError("user_admin");
		case 0:
			return getMultiLangError("user_owner");
	}
}

/** 登录成功后跳转. */
function loginFwrd(usr, dat, lang) {
	storage_i18n_set(lang);
	roleFwrd(dat);
}

/** 根据不同的角色类型, 跳转不同的主页. */
function roleFwrd(dat, index) {
	var hostname = window.document.location.hostname

	if(dat.role === 0 || dat.role === 5 || dat.role === 3)
		window.location.href = "/main.html?" + (new Date().getTime()) + "&index=" + index;
	else if(dat.role == 1 || dat.role == 2)
		window.location.href = "/managesystemnew/index.html?" + (new Date().getTime()) + "&index=" + index;
	else if(dat.role == 15)
		window.location.href = "/admin/main.html?" + (new Date().getTime()) + "&index=" + index;
}
/**url参数截取 */
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串   
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
//浏览器检测
function userBrowser() {
	var browserName = navigator.userAgent.toLowerCase();
	var browserVer = (browserName.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [
		0, '0'
	])[1];
    // if(window.document.location.hostname == "ksolare.shinemonitor.com") {
	// 	window.location.href = "http://ksolare.shinemonitor.com/";
	// }else  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(browserName) &&(window.document.location.hostname == "www.shinemonitor.com")) {
	// 	window.location.href = "http://wx.shinemonitor.com/?v="+Math.random();
	// }
	if ((/Android|webOS|iPhone|iPod|BlackBerry/i.test(browserName))&&(window.document.location.hostname == "www.shinemonitor.com")) {
    window.location.href = "http://wx.shinemonitor.com/?v="+Math.random();
       }
	if(/msie/i.test(browserName) && !/opera/.test(browserName)) {
		if(browserVer > 8.0) {
			console.log("测试得知为IE9及以上" + ",实际版本:" + "IE" + browserVer);
		} else {
			document.getElementById("browserLow").style.display = "block";
			console.log("测试得知为IE9以下" + ",实际版本:" + "IE" + browserVer);
		}
		return;
	} else if(/firefox/i.test(browserName)) {
		console.log("Firefox");
		return;
	} else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) &&
		/mozilla/i.test(browserName)) {
		console.log("Chrome");
		return;
	} else if(/opera/i.test(browserName)) {
		console.log("Opera");
		return;
	} else if(/webkit/i.test(browserName) &&
		!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i
			.test(browserName))) {
		console.log("Safari");
		return;
	} else {
		console.log("unKnow");
	}
}

function closeBroInfo() {
	document.getElementById("browserLow").style.display = "none";
}
// 判断传入是否为未定义,如果不是则删除前后空格再返回值
String.prototype.trimStr = function() {
	if((this == null) || (this == undefined))
		return "";
	else {
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}
}
//二维码密钥，生成二维码key,由0-9,a-Z组成,32位 */
function getDynamicQrKey() {
	code = "";
	var codeLength = 32;
	var selectChar = new Array("_", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b',
		'c', 'd', 'e', 'f', 'g', 'h', "i", 'j', 'k', 'l', 'm', 'n', 'o',
		'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
		'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
		'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	for(var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 63);
		code += selectChar[charIndex];
	}
	return code;
}

//二维码登录
function http_qrcode_oper(action, onSuccess, onError) {
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?" + action;
	http_async_request(url, onSuccess, onError);
}

function loopQrcodeCn() {
	var action = "action=qrLogin&plat=smartlan&key=" + qrcode_key_cn;
	http_qrcode_oper(action, function(err, dat) {
		if(err == 1033) {
			//未确认,继续轮询
		} else if(err == 1040) {
			//					$("#qr_login").hide();
			$("#qr_Prompt,.sweeptext1").show();
			$("#qrcodeCn,.sweeptext2").hide();
		} else if(err == 0) {
			window.clearInterval(qrcodeLoopCn);
			http_qrcode_token(dat);
		} else if(err == 6) {
			alert(dictionaries(GET_ERR_DESC, "err" + err));
		}
	}, function() {
		window.clearInterval(qrcodeLoopCn);
	});
}
//登录请求
function http_login2(usr, pwdSha1, loginOnSuccess, loginOnError) {
	var salt = new Date().getTime();
	var action = "&action=authV2&user=" + encodeURI(usr);
	var sign = hex_sha1(salt + pwdSha1 + action);
	var url = HTTP_INTERFACE_ADDRESS + "ws?sign=" + sign + "&salt=" + salt +
		action;
	//
	http_async_request(url, loginOnSuccess, loginOnError);
}

function http_login(usr, pwdSha1, loginOnSuccess, loginOnError) {
	var salt = new Date().getTime();
	var action = "&action=auth&usr=" + encodeURI(usr).replace('+', '%2B') + "&company-key=bnrl_frRFjEz8Mkn";
	var sign = hex_sha1(salt + pwdSha1 + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt +
		action;
	// console.log("55555555555555555",HTTP_INTERFACE_ADDRESS_NEW)
	http_async_request(url, loginOnSuccess, loginOnError);
}

function http_test_oper(action, onSuccess) {
	var salt = new Date().getTime();
	var sign = hex_sha1(salt + action);
	httpReplace(action)
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt + action;
	http_async_request(url, onSuccess)
}

//Ajax请求
function http_async_request(url, onSuccess, onError, type) {
	if(AJAX) {
		if(type == undefined) {
			$.ajax({
				async: true,
				type: "get",
				url: url,
				dataType: "json",
//				jsonp: "callback",
				//              jsonpCallback: "success_jsonpCallback",
				success: function(data, status) {
					var json = eval(data);
					onSuccess(json.err, json.dat, json.desc);
				},
				error: onError
			});
		} else {
			$.ajaxQueue({
				async: true,
				type: "get",
				url: url,
				dataType: "json",
//				jsonp: "callback",
//				jsonpCallback: "success_jsonpCallback",
				success: function(data, status) {
					var json = eval(data);
					onSuccess(json.err, json.dat, json.desc);
				},
				error: onError
			});
		}
	}

}
//打开新窗口不能用jsonp回调函数，且不能用异步，因此需要单独封装
function http_async_request2(url, onSuccess, onError, type) {

	$.ajax({
		async: false,
		type: "get",
		url: url,
		dataType: "json",
		success: function(data, status) {
			var json = eval(data);
			onSuccess(json.err, json.dat, json.desc);
		},
		error: onError
	});

}