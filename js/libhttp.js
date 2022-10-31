/** ---------------------------------------------------------------- */
/**                                                                  */
/** ERROR-CODE. */
/**                                                                  */
/** ---------------------------------------------------------------- */

DEVICE_DEVC_CONTROLLER = "1";
WS_ERR_INDEX = 0x00; //
WS_ERR_NONE = WS_ERR_INDEX; //正常, 无任何错误
WS_ERR_FAIL = ++WS_ERR_INDEX; //失败
WS_ERR_ACTION_NOT_FOUND = ++WS_ERR_INDEX; //找不到action
WS_ERR_FORMAT_ERROR = ++WS_ERR_INDEX; //格式错误
WS_ERR_MISSING_PARAMETER = ++WS_ERR_INDEX; //缺少必要参数
WS_ERR_SYSTEM_EXCEPTION = ++WS_ERR_INDEX; //系统异常
WS_ERR_NOT_AUTH = ++WS_ERR_INDEX; //未鉴权
WS_ERR_USER_EXISTED = ++WS_ERR_INDEX;
WS_ERR_USER_PWD_ERROR = ++WS_ERR_INDEX;
WS_ERR_NO_PERMISSION = ++WS_ERR_INDEX;
WS_ERR_NOT_FOUND = ++WS_ERR_INDEX;
WS_ERR_FORBIDDEN = ++WS_ERR_INDEX;
WS_ERR_CONCURRENT_MODIFY = ++WS_ERR_INDEX;
WS_ERR_DUPLICATE_SN_REG = ++WS_ERR_INDEX;
WS_ERR_DUPLICATE_NAME = ++WS_ERR_INDEX;
WS_ERR_TIMEOUT = ++WS_ERR_INDEX;
WS_ERR_SIGN = ++WS_ERR_INDEX;
WS_ERR_NO_COLLECTOR = ++WS_ERR_INDEX;
WS_ERR_NO_INVERTER = ++WS_ERR_INDEX;
WS_ERR_UNSUPPORTED = ++WS_ERR_INDEX;
WS_ERR_NO_DEVICE = ++WS_ERR_INDEX;
WS_ERR_NO_PLANT = ++WS_ERR_INDEX;
WS_ERR_ACCEPT = ++WS_ERR_INDEX;
WS_ERR_NOT_CONFIRM = ++WS_ERR_INDEX;
WS_ERR_CONFIRM = ++WS_ERR_INDEX;
WS_ERR_NO_ECOIN = ++WS_ERR_INDEX;
WS_ERR_NO_RECORD = ++WS_ERR_INDEX;
WS_ERR_USR_DISABLED = ++WS_ERR_INDEX;
WS_ERR_NOT_FOUND_ROLE = ++WS_ERR_INDEX;
WS_ERR_DUPLICATE_OPER = ++WS_ERR_INDEX;
WS_ERR_PLANT_NOT_NULL = ++WS_ERR_INDEX;
WS_ERR_COLLECTOR_ADD_FAILD = ++WS_ERR_INDEX;
WS_ERR_NOT_FOUND_USR = ++WS_ERR_INDEX;
WS_ERR_PN_INVALID = ++WS_ERR_INDEX;
WS_ERR_PN_EXIST = ++WS_ERR_INDEX;
WS_ERR_PNSN_NOT_ADD = ++WS_ERR_INDEX;
WS_ERR_DUPLICATE_ADD = ++WS_ERR_INDEX;
WS_ERR_OVER_LIMIT_PLANT = ++WS_ERR_INDEX;
WS_ERR_OVER_LIMIT_COLLECTOR = ++WS_ERR_INDEX;
LOADID = "body"
DEILIST = 0; //微型逆变器设备列表返回控制

/** ---------------------------------------------------------------- */
/**                                                                  */
/** DEVICE. */
/**                                                                  */
/** ---------------------------------------------------------------- */
/** 数采器. */
DEVICE_TYPE_COLLECTOR = 0x0100;
/** 逆变器. */
DEVICE_TYPE_INVERTER = 0x0200;
/** 逆变器. */
DEVICE_TYPE_INVERTER_ETX = 0x1200;
/** 环境监测仪. */
DEVICE_TYPE_ENV_MONITOR = 0x0300;
/** 智能电表. */
DEVICE_TYPE_SUPPLY_METER = 0x0400;
/** 汇流箱. */
DEVICE_TYPE_COMBINER_BOX = 0x0500;
/** 摄像头. */
DEVICE_TYPE_CAMERA = 0x0600;
/** 电池. */
DEVICE_TYPE_BATTERY = 0x0700;
/** 充电器. */
DEVICE_TYPE_CHARGER = 0x0800;
/** 控制器. */
DEVICE_TYPE_CONTROLLER = 0x0900;
//防孤岛装置
DEVICE_TYPE_ANTI_ISLANDING = 0x0A00;
//微型逆变器
DEVICE_TYPE_MINN_INVERTER = 0x0B00;
//新型智能电表
DEVICE_TYPE_NEW_METER = 0x0C00;
//ups 
DEVICE_TYPE_NEW_CONTROLLER = 0x0f00;
//路灯
DEVICE_TYPE_LAMPMONITOR = 0x1000;
//水泵
DEVICE_TYPE_WATERPUMP = 0x0E00;

// 设备类型描述.
function devCode(dc) {
	if (dc == DEVICE_TYPE_COLLECTOR)
		return "数采器";
	if (dc == DEVICE_TYPE_INVERTER || dc == DEVICE_TYPE_INVERTER_ETX)
		return "逆变器";
	if (dc == DEVICE_TYPE_ENV_MONITOR)
		return "环境监测仪";
	if (dc == DEVICE_TYPE_SUPPLY_METER)
		return "智能电表";
	if (dc == DEVICE_TYPE_COMBINER_BOX)
		return "汇流箱";
	if (dc == DEVICE_TYPE_CAMERA)
		return "摄像头";
	if (dc == DEVICE_TYPE_BATTERY)
		return "电池";
	if (dc == DEVICE_TYPE_CHARGER)
		return "充电器";
	if (dc == DEVICE_TYPE_CONTROLLER)
		return "储能机";
	if (dc == DEVICE_TYPE_ANTI_ISLANDING)
		return "防孤岛装置";
	if (dc == DEVICE_TYPE_MINN_INVERTER)
		return "微型逆变器";
	if (dc == DEVICE_TYPE_NEW_METER)
		return "智能电表";
	if (dc == DEVICE_TYPE_LAMPMONITOR)
		return "路灯";
	if (dc == DEVICE_TYPE_WATERPUMP)
		return "水泵";
	else {
		return "控制器";
	}
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** ROLE. */
/**                                                                  */
/** ---------------------------------------------------------------- */
USR_ROLE_PLANT_OWNER = 0x00;
USR_ROLE_VENDOR = 0x01;
USR_ROLE_DIST = 0x02;
USR_ROLE_GROUP = 0x03;
USR_ROLE_ADMIN = 0x0F;
/** ---------------------------------------------------------------- */
/**                                                                  */
/** I18N. */
/**                                                                  */
/** ---------------------------------------------------------------- */
I18N_ZH_CN = 0x00;
I18N_EN_US = 0x01;
I18N_SE = 0x02;
I18N_Po = 0x03;
I18N_ES = 0x04;
I18N_PL = 0x05;
I18N_HK = 0x06;
I18N_IN = 0x07;
I18N_VI = 0x08;
I18N_IDN = 0x09;
/** ---------------------------------------------------------------- */
/**                                                                  */
/** local-storage. */
/**                                                                  */
/** ---------------------------------------------------------------- */
/** 本地存储操作: 获得globalStorage. */
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
	if (account.remember)
		account.pwdSha1 = pwdSha1;
	account.gts = new Date().getTime();
	account.dat = authDat;
	globalStorage.accounts[0] = account;
	//
	storage_set(globalStorage);
}

/** 本地存储操作: 退出登录(不再记住密码). */
function storage_logout() {
	sessionStorage.setItem("loginType", "false")
	noLoginStopCloud()
	var globalStorage = storage_get();
	//
	if ((GetRequest().index == undefined || GetRequest().index == "undefined")) {
		window.location.href = "/index.html";
		return;
	}
	globalStorage.accounts.splice(((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index), 1);
	//	console.log("storage_logout: ", globalStorage.accounts.length);
	if (globalStorage.accounts.length == 0) {
		window.localStorage.removeItem("globalStorage");
		return null;
	}
	storage_set(globalStorage);
	//
	return globalStorage.accounts[0];
}

/** 本地存储操作: 申请浏览权限成功后. */
function storage_browse_in(usr, authDat, lang) {
	var globalStorage = storage_get();
	//
	var account = new Object();
	account.usr = usr;
	account.remember = false;
	account.pwdSha1 = null;
	account.gts = new Date().getTime();
	account.dat = authDat;
	account.lang = lang;
	globalStorage.accounts[globalStorage.accounts.length] = account;
	//
	//	console.log("storage_browse_in: ", globalStorage.accounts.length);
	storage_set(globalStorage);
}

/** 本地存储操作: 设置当前用户默认语言. */
function storage_i18n_set(lang) {
	console.log(lang,"打印语言")
	var globalStorage = storage_get();
	globalStorage = (globalStorage === undefined || globalStorage === null) ? new Object() :
		globalStorage;
	//
	if (lang == "中文")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_ZH_CN;
	else if (lang == "English")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_EN_US;
	else if (lang == "Português")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_Po;
	else if (lang == "Polski")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_PL;
	else if (lang == "中文繁体")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_HK;
	else if(lang == "India")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_IN;
	else if(lang == "TiếngViệt")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_VI;
	else if(lang == "Español")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_ES;
	else if(lang == "Svenska")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_SE;
	else if(lang == "Indonesian")
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_IDN;
	else
		globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang = I18N_EN_US;
	//
	storage_set(globalStorage);
}

/** 本地存储操作: 获取当前用户默认语言. */
function storage_i18n_get() {
	var id = storage_i18n_get_id();
	if (id == I18N_ZH_CN)
		return "中文";
	if (id == I18N_EN_US)
		return "English";
	if (id == I18N_SE)
		return "Svenska";
	if (id == I18N_ES)
		return "Español";
	if (id == I18N_Po)
		return "Português";
	if (id == I18N_PL)
		return "Polski";
	if (id == I18N_HK)
		return "中文繁体";
	if(id == I18N_IN)
		return "India";
	if(id == I18N_VI)
		return "TiếngViệt";
	if(id == I18N_IDN)
		return "Indonesian";
	return "中文";
}

/** 本地存储操作: 获取当前用户默认语言id. */
function storage_i18n_get_id() {
	var globalStorage = storage_get();
	if ((globalStorage === undefined || globalStorage === null) && globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang == undefined)
		return I18N_ZH_CN;
	if (globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang == undefined)
		return globalStorage.lang
	return globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)].lang;
}

function storage_check_login() {
	var globalStorage = window.localStorage.getItem("globalStorage");
	// debugger
	if (globalStorage === undefined || globalStorage === null)
		return false;
	globalStorage = JSON.parse(globalStorage);
	if (globalStorage.accounts === undefined || globalStorage.accounts === null)
		return false;
	//	var account = globalStorage.accounts[0]; /* 取第一个用户, 它一定是手动登录的用户. */
	//	var now = new Date().getTime();
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
	if (globalStorage === undefined || globalStorage === null)
		return null;
	return globalStorage.accounts[((GetRequest().index == undefined || GetRequest().index == "undefined") ? 0 : GetRequest().index)];
}

/** 本地存储操作: 是否有记住密码. */
function storage_is_remember() {
	var globalStorage = storage_get();
	if (globalStorage === undefined || globalStorage === null)
		return false;
	if (globalStorage.accounts.length < 1)
		return false;
	return globalStorage.accounts[0].remember;
}

/** 本地存储操作: 返回记住的用户名和密码. */
function storage_get_remember_usr() {
	var globalStorage = storage_get();
	if (globalStorage === undefined || globalStorage === null)
		return null;
	if (globalStorage.accounts === undefined || globalStorage.accounts == null)
		return null;
	if (globalStorage.accounts.length < 1)
		return null;
	if (!globalStorage.accounts[0].remember)
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
	if (currUsr == null)
		return null;
	switch (currUsr.dat.role) {
		case USR_ROLE_VENDOR:
			return getMultiLangError("user_vendor");
		case USR_ROLE_DIST:
			return getMultiLangError("user_dist");
		case USR_ROLE_GROUP:
			return getMultiLangError("user_group");
		case USR_ROLE_ADMIN:
			return getMultiLangError("user_admin");
		case USR_ROLE_PLANT_OWNER:
			return getMultiLangError("user_owner");
		case 5:
			return getMultiLangError("user_owner_subuser");
	}
}

/** 登出. */
function accountLogout() {
	var account = storage_logout();
	// sessionStorage.removeItem("selectNodeValue");
	if (account === undefined || account === null) {
		window.location.href = "../index.html"; //以前是/index.html";
		return;
	}
	roleFwrd(account.dat);
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** network. */
/**                                                                  */
/** ---------------------------------------------------------------- */
/** login. */
function http_login(usr, pwdSha1, loginOnSuccess, loginOnError) {
	var salt = new Date().getTime();
	var action = "&action=authV2&user=" + encodeURI(usr).replace('+', '%2B');
	var sign = hex_sha1(salt + pwdSha1 + action);
	var url = HTTP_INTERFACE_ADDRESS + "ws?sign=" + sign + "&salt=" + salt +
		action;
	http_async_request(url, loginOnSuccess, loginOnError);
}

/** 登录成功后跳转. */
function loginFwrd(usr, dat, lang) {
	storage_i18n_set(lang);
	roleFwrd(dat);
}

/** 根据不同的角色类型, 跳转不同的主页. */
function roleFwrd(dat) {
	//	console.log(dat)
	var hostname = window.document.location.hostname
	//if((hostname=="epc.shinemonitor.com")||(hostname=="jbh.shinemonitor.com") ||(hostname=="moso.shinemonitor.com")||(hostname=="aiduopv.shinemonitor.com")||(hostname=="sofar.shinemonitor.com")||(hostname=="litto.shinemonitor.com")||(hostname=="wjyg.shinemonitor.com")){
	if (dat.role == 0 || dat.role == 5 || dat.role == 3)
		window.location.href = "/solarmonitor.github.io/main.html";
	else if (dat.role == 1 || dat.role == 2)
		window.location.href = "/managesystemnew/index.html"; // window.location.href	= "/vendor/main.html";		
	//	else if (dat.role == 2)
	//		window.location.href = "/distributor/main.html";
	else if (dat.role == 15)
		window.location.href = "/admin/main.html";
	else
		window.location.href = "/managesystemnew/index.html";
	//	
	//}else{
	//	if (dat.role == USR_ROLE_PLANT_OWNER || dat.role == USR_ROLE_GROUP || dat.role == 5)
	//		window.location.href = "/main.html";
	//	else if (dat.role == USR_ROLE_VENDOR)
	//		window.location.href = "/vendor_new/index.html";// window.location.href	= "/vendor/main.html";		
	//	else if (dat.role == USR_ROLE_DIST)
	//		window.location.href = "/distributor/main.html";
	//	else if (dat.role == USR_ROLE_GROUP)
	//		window.location.href = "/main.html";
	//	else if (dat.role == USR_ROLE_ADMIN)
	//		window.location.href = "/admin/main.html";
	//}
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** NORMAL-OPERATION */
/**                                                                  */
/** ---------------------------------------------------------------- */
function http_normal_oper(action, operOnSuccess, operOnError) {
	http_oper("ws", action, operOnSuccess, operOnError);
}

function http_admin_oper(action, operOnSuccess, operOnError) {
	http_oper("admin", action, operOnSuccess, operOnError);
}

function http_oam_oper(action, operOnSuccess, operOnError) {
	http_oper("oam", action, operOnSuccess, operOnError);
}

function http_oper(prefix, action, operOnSuccess, operOnError) {

	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action.replace(/#/g, "%23"));
	var url = HTTP_INTERFACE_ADDRESS + prefix + "?sign=" + sign + "&salt=" +
		salt + "&token=" + currUsr.token + action.replace(/#/g, "%23");

	http_async_request(url, operOnSuccess, operOnError);
}

function http_oper_new(prefix, action, operOnSuccess, operOnError) {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action.replace(/#/g, "%23"));
	var url = HTTP_INTERFACE_ADDRESS + prefix + "?sign=" + sign + "&salt=" +
		salt + "&token=" + currUsr.token + action.replace(/#/g, "%23");
	http_async_request_new(url, operOnSuccess, operOnError);
}

function http_new_oper(action, operOnSuccess) {
	http_oper_new("ws", action, function tmp_fun(err, dat) {
		operOnSuccess(dat);
	}, showModal);
}

function http_new_oper2(action, operOnSuccess) {
	http_oper_new("ws", action, function tmp_fun(err, dat) {
		operOnSuccess(dat);
	}, showModa2);
}

/** 二维码扫码登录成功. */
function http_qrcode_token(dat) {
	storage_login("qr", dat, false); // 这里需要传入一个用户名.
	loginFwrd("qr", dat, "中文");
}

/** 注册. */
function http_reg(usr, pwdSha1, email, mobile, pn, regOnSuccess, regOnError) {
	var checksumSha1 = hex_sha1(pn.substring(10, 14));
	var key = CryptoJS.enc.Utf8.parse(checksumSha1);
	var crypt = CryptoJS.RC4.encrypt(pwdSha1, key);
	var cryptPwd = CryptoJS.enc.Base64.parse(crypt.toString());
	var salt = new Date().getTime();
	var action = "&action=regV2&user=" + encodeURI(usr) + "&pwd=" + cryptPwd +
		"&email=" + email + "&mobile=" + mobile + "&sn=" +
		pn.substring(0, 10);
	var sign = hex_sha1(salt + pwdSha1 + action);
	var url = HTTP_INTERFACE_ADDRESS + "ws?sign=" + sign + "&salt=" + salt +
		action;
	http_async_request(url, regOnSuccess, regOnError);
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 若字段未定义,返回空字符,主要用于表格格式规范 */
/**																	*/
/** ---------------------------------------------------------------- */
function fieldAutoDisp(field) {
	if (field == undefined || field == null)
		return "";
	else
		return field;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 若角色存在,但是没有相应国际化名称,返回none,否则返回本身 */
/**																	*/
/** ---------------------------------------------------------------- */
function roleAutoDisp(role) {
	if (role == undefined || role == null)
		return "none";
	else
		return role;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 传入设备deviceCode转换得到deviceType */
/**                                                                  */
/** ---------------------------------------------------------------- */
function tsfCode2Type(devcode) {
	var intCode = parseInt(devcode);
	var devtype = (intCode & 0xFF00);
	if(devtype == DEVICE_TYPE_INVERTER || devtype == DEVICE_TYPE_INVERTER_ETX){
		return DEVICE_TYPE_INVERTER;
	}
	return devtype;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/**
 * 输入设备编号,返回设备类型 /**
 */
/** ---------------------------------------------------------------- */
function devtype2Cn(devtype) {
	var dic = new Array();
	dic[DEVICE_TYPE_INVERTER] = getMultiLangError("dev_inv"); // 逆变器
	dic[DEVICE_TYPE_INVERTER_ETX] = getMultiLangError("dev_inv"); 
	dic[DEVICE_TYPE_ENV_MONITOR] = getMultiLangError("dev_env"); // 环境监测仪
	dic[DEVICE_TYPE_SUPPLY_METER] = getMultiLangError("dev_meter"); // 智能电表
	dic[DEVICE_TYPE_COMBINER_BOX] = getMultiLangError("dev_box"); // 汇流箱
	dic[DEVICE_TYPE_BATTERY] = getMultiLangError("dev_battery"); // 电池组
	dic[DEVICE_TYPE_CHARGER] = getMultiLangError("dev_charger"); // 充电器
	dic[DEVICE_TYPE_CONTROLLER] = getMultiLangError("dev_controller"); // 控制器
	dic[DEVICE_TYPE_ANTI_ISLANDING] = getMultiLangError("dev_islanding"); // 防孤岛装置
	dic[DEVICE_TYPE_MINN_INVERTER] = getMultiLangError("dev_mini_inverter"); // 防孤岛装置
	dic[DEVICE_TYPE_NEW_METER] = getMultiLangError("dev_meter"); // 新型智能电表
	return dic[devtype];
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 传入设备或者采集器状态码,得到状态描述,注意判断的状态是字符串类型 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function checkStatusMeaning(stateCode) {
	var meaning = parseInt(stateCode);
	switch (meaning) {
		case 0:
			meaning = getMultiLangError("status_normal"); // 正常
			break;
		case 1:
			meaning = getMultiLangError("status_offline"); // 离线
			break;
		case 2:
			meaning = getMultiLangError("stauts_fault"); // 故障
			break;
		case 3:
			meaning = getMultiLangError("status_standby"); // 待机
			break;
		case 4:
			meaning = getMultiLangError("status_warn"); // 告警
			break;
	}
	return meaning;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 判断用户是否是用浏览器账号登陆,如果是则返回1,不是为0 */
/** 电站分析与视频处都需要特殊处理vplant类型 */
/** ---------------------------------------------------------------- */
function checkVplantOrNot() {
	var user = storage_get_current_usr().usr;
	if (user.substring(0, 6) == "vplant")
		return 1;
	else
		return 0;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 判断字符串中是否有小数点 */
/**                          										 */
/** ---------------------------------------------------------------- */
function testStrHavePoint(str) {
	//	console.log(typeof(str))
	if (str.indexOf(".") == -1) {
		return false;
	} else {
		return true;
	}
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 根据role不同,普通用户和集团用户加载页面不同 */
/**                          										 */
/** ---------------------------------------------------------------- */
function checkUserPlantlist() {
	var currUsr = storage_get_current_usr();
	if (currUsr.dat.role == USR_ROLE_GROUP) { // 如果为集团账号的话,跳转至
		loadHtml("mainArea", "groupPlantList.html");
		return;
	}
	loadHtml("mainArea", "/plant/plantlist.html");
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 百度和谷歌地图,电站ID对应发电量,发电功率,状态函数 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function loadEnergyPower(len, idArr, i, poEnArr, statusArr) {
	if (i < len) {
		http_normal_oper("&action=plantCurrentData&id=" + idArr[i] +
			"&par=ENERGY_TODAY,CURRENT_POWER",
			function (err, dat) {
				if (err == WS_ERR_NONE) {
					var energy, power;
					for (var j = 0; j < dat.length; j++) {
						if (dat[j].key == "ENERGY_TODAY") {
							var enNum = parseFloat(dat[j].val).toFixed(1);
							energy = enNum + "kWh";
						} else if (dat[j].key == "CURRENT_POWER") {
							var poNum = parseFloat(dat[j].val).toFixed(1);
							power = poNum + "kW";
						}
					}
					var obj = {
						key: idArr[i],
						val: [power, energy]
					};
					poEnArr.push(obj);
					http_normal_oper("&action=plantDeviceStatus&id=" + idArr[i],
						function (err, dat) {
							//							console.log(dat)
							var flag = checkOnePlantStatus(dat, err);
							var plantObj = {
								key: idArr[i],
								val: checkPlantStatusMeaning(flag)
							};
							statusArr.push(plantObj);
							i++;
							loadEnergyPower(len, idArr, i, poEnArr, statusArr);
						},
						function () {
							console.log("获取设备状态失败");
						});
				} else {
					var obj = {
						key: idArr[i],
						val: ''
					};
					var plantObj = {
						key: idArr[i],
						val: ''
					};
					statusArr.push(plantObj);
					poEnArr.push(obj);
					statusArr.push(plantObj);
					i++;
					loadEnergyPower(len, idArr, i, poEnArr, statusArr);
					console.log("获取电站实时功率失败: " + err);
				}
			},
			function () {
				console.log("loadEnergyPower error");
			});
	}
}
/** ---------------------------------------------------------------- */
/** 电站状态判断函数 */
/** 0-正常(所有设备正常或者待机或者离线), 绿色 */
/** 1-离线(所有设备中只要有一台设备出现离线为离线) */
/** 2-异常,红色((所有设备中只要有一台设备出现告警或者故障即判断为异常),红色 */
/** ---------------------------------------------------------------- */
function checkOnePlantStatus(dat, err) {
	var flag = 0;
	if (err == WS_ERR_NONE) {
		// 循环电站下面所有采集器
		for (var j = 0; j < dat.length; j++) {
			//  离线时
			if (dat[j].status == 1) {
				flag = 1;
				break;
			} else if ((dat[j].status == 2) || (dat[j].status == 4)) { //如果采集器状态为告警, 故障,
				flag = 2;
				break;
			} else {
				// 如果采集器下面没有设备,循环下一个采集器
				if ((dat[j].devs == null) || (dat[j].devs == " ")) {
					j++;
				} else {
					// 采集器下面有设备,判断每个设备是否是告警,故障的
					for (var k = 0; k < dat[j].devs.length; k++) {
						if ((dat[j].devs[k].status == 1) || (dat[j].devs[k].status == 3)) {
							flag = 1;
							break;
						} else if ((dat[j].devs[k].status == 2) || (dat[j].devs[k].status == 4)) {
							flag = 2;
							break;
						}
					}
				}
			}
		}
	} else if (err == WS_ERR_NO_COLLECTOR) {
		flag = 2;
	} else {
		flag = 2;
	}
	return flag;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 传入电站状态码,获取相应描述 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function checkPlantStatusMeaning(stateCode) {
	var meaning = parseInt(stateCode);

	switch (meaning) {
		case 0:
			meaning = getMultiLangError("plant_normal");
			break;
		case 1:
			meaning = getMultiLangError("status_offline");
			break;
		case 4:
			meaning = getMultiLangError("plant_abnormal");
			break;
		case 7:
			meaning = getMultiLangError("plant_attention");
			break;
		default:
			meaning = getMultiLangError("plant_no_device");
			break;
	}
	return meaning;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 浏览器支持检测函数 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function userBrowser() {
	var browserName = navigator.userAgent.toLowerCase();
	var browserVer = (browserName.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [
		0, '0'
	])[1];
	if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
		if (browserVer > 8.0) {
			console.log("测试得知为IE9及以上" + ",实际版本:" + "IE" + browserVer);
		} else {
			document.getElementById("browserLow").style.display = "block";
			console.log("测试得知为IE9以下" + ",实际版本:" + "IE" + browserVer);
		}
		return;
	} else if (/firefox/i.test(browserName)) {
		console.log("Firefox");
		return;
	} else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) &&
		/mozilla/i.test(browserName)) {
		console.log("Chrome");
		return;
	} else if (/opera/i.test(browserName)) {
		console.log("Opera");
		return;
	} else if (/webkit/i.test(browserName) &&
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

/** ---------------------------------------------------------------- */
/**                                                                  */
/** MODIFY-PASSWORD,注意修改密码不需要token */
/**                                                                  */
/** ---------------------------------------------------------------- */
function http_mdpwd(oldpwd, newpwd, mdOnSuccess, mdOnError) {
	// RC4(SHA-1(oldpwd), SHA-1(newpwd)
	//	var usr = storage_get_current_usr().usr;
	var oldSha = hex_sha1(oldpwd);
	//	var newSha = hex_sha1(newpwd);
	//	var key = CryptoJS.enc.Utf8.parse(oldSha);
	//	var crypt = CryptoJS.RC4.encrypt(newSha, key);
	//	var cryptPwd = CryptoJS.enc.Base64.parse(crypt.toString());
	//

	var sha1newPwd = CryptoJS.enc.Utf8.parse(hex_sha1(newpwd))
	var KEYsha1oldPwd = CryptoJS.enc.Utf8.parse(hex_sha1(oldpwd))
	var newpwd = CryptoJS.RC4.encrypt(sha1newPwd, KEYsha1oldPwd)
	var key = CryptoJS.enc.Base64.parse(newpwd.toString())
	var action = "&action=updatePassword&newpwd=" + key

	//	var action = "&action=updatePassword&newpwd=" + cryptPwd;
	http_async_request_public(action, mdOnSuccess, mdOnError);
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** ADD-SUBUSER */
/**                                                                  */
/** ---------------------------------------------------------------- */
function http_add_subuser(usr, subpwd, mobile, email, rid, desc, pids,
	subOnSuccess, subOnError) {
	var currUsr = storage_get_current_usr().dat;
	var fapwd = currUsr.secret;
	var token = currUsr.token;
	var subsha1 = hex_sha1(subpwd);
	var key = CryptoJS.enc.Utf8.parse(fapwd);
	var crypt = CryptoJS.RC4.encrypt(subsha1, key);
	var cryptPwd = CryptoJS.enc.Base64.parse(crypt.toString());
	//
	var action = "&action=addPlantBrowser&usr=" + encodeURI(usr) + "&pwd=" +
		cryptPwd + "&pid=" + pids;

	http_async_request_public(action, subOnSuccess, subOnError);
}
/** ADD-SUBCamera */
/**                                                                  */
/** ---------------------------------------------------------------- */
/** ---------------------------------------------------------------- */
/**                                                                  */
/** EDIT-SUBUSER */
/**                                                                  */
/** ---------------------------------------------------------------- */
function http_edit_subuser(uid, subpwd, mobile, email, rid, enable, desc, lang,
	pids, editOnSuccess, editOnError) {
	var action = "&action=editSubUser&uid=" + uid +
		(subpwd == "" ? "" : ("&pwd=" + encrypt_sub_pwd(subpwd))) +
		(mobile == "" ? "" : ("&mobile=" + mobile)) +
		(email == "" ? "" : ("&email=" + email)) +
		(rid == "" ? "" : ("&rid=" + rid)) + ("&enable=" + enable) +
		"&desc=" + desc + "&i18n=" + lang +
		(pids == "" ? "" : ("&pids=" + pids));
	http_normal_oper(action, editOnSuccess, editOnError);
}

function encrypt_sub_pwd(subpwd) {
	var currUsr = storage_get_current_usr().dat;
	var fapwd = currUsr.secret;
	var token = currUsr.token;
	var subsha1 = hex_sha1(subpwd);
	var key = CryptoJS.enc.Utf8.parse(fapwd);
	var crypt = CryptoJS.RC4.encrypt(subsha1, key);
	var cryptPwd = CryptoJS.enc.Base64.parse(crypt.toString());
	return cryptPwd;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** UPLOAD-img */
/**                                                                  */
/** ---------------------------------------------------------------- */
function http_upload_url(thumbnail) {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=img&thumbnail=" + (thumbnail ? 1 : 0);
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS + "ws?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}

function http_upload_url2(thumbnail) {
	var currUsr = storage_get_current_usr().dat;

	var salt = new Date().getTime();
	var action = "&action=uploadImg&thumbnail=" + thumbnail;
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = IMGHTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}

function http_upload_url3(action, pn, type,isMqtt) {
	var currUsr = storage_get_current_usr().dat;
	var action
	var salt = new Date().getTime();
	if(isMqtt){
		action = "&action=" + action + "&pn=" + pn + "&type=" + type + "&mqtt=" + isMqtt;
	}else{
		action = "&action=" + action + "&pn=" + pn + "&type=" + type;
	}
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** UPLOAD-file */
/**                                                                  */
/** ---------------------------------------------------------------- */
//function http_upload_file_url() {
//	var currUsr = storage_get_current_usr().dat;
//	//
//	console.log(currUsr);
//	var salt = new Date().getTime();
//	var action = "&action=firmware";
//	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
//	var url = HTTP_INTERFACE_ADDRESS + "ws?sign=" + sign + "&salt=" + salt
//			+ "&token=" + currUsr.token + action;
//	return url;
//}

function http_upload_file_url(desc) {
	var currUsr = storage_get_current_usr().dat;
	//
	//	console.log(currUsr);
	var salt = new Date().getTime();
	var action = "&action=firmware&desc=" + (desc == undefined ? "" : desc);
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS + "ws?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}

function http_upload_file_url2(desc) {
	var currUsr = storage_get_current_usr().dat;

	var salt = new Date().getTime();
	var action = "&action=uploadFirmware&desc=" + desc;
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW_RP + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
//admin批量升级数采器时上传的固件方法
function http_upload_file_url3(orderNumber) {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=uploadFirmwareToUpgrade&orderNumber=" + orderNumber;
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW_RP + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
//admin电站业主批量升级数采器时上传的固件方法
function http_upload_file_url4(uid) {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=uploadFirmwareToUpgrade&uid=" + uid;
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW_RP + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
//admin差分升级数采器时上传的固件方法
function http_upload_file_url5(orderNumber) {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=uploadFirmwareToUpgrade&orderNumber=" + orderNumber + "&upgradeType=1";
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW_RP + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
//批量添加采集器的上传的excel方法
function http_upload_colfile_url() {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=addCollectors&plantid=" + MAIN_CHOOSE_PLANT_ID + "&i18n=" + getInterLang();
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
//admin批量升级采集器的上传的excel方法
function http_upload_colletors_url() {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=addFirmwareUpgradeCollectors";
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
//admin差分升级数采器时上传的excel方法
function http_upload_colletors_urlDiff() {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=addFirmwareUpgradeCollectors&upgradeType=1";
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
//admin批量绑定协议的上传的excel方法
function http_upload_xieyi_url() {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=addBindProtocolCollectors";
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}
//admin批量绑定协议的上传的excel方法
function http_upload_xieyi_change_url() {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var action = "&action=adminAddUpdateProtocolCollectors";
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" + salt +
		"&token=" + currUsr.token + action;
	return url;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** DOWNLOAD-EXCEL */
/**                                                                  */
/** ---------------------------------------------------------------- */
function http_download_url(action) {
	console.log('3333')
	var currUsr = storage_get_current_usr().dat;
	//
	var salt = new Date().getTime();
	var curHost = HTTP_INTERFACE_ADDRESS_NEW;
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = curHost + "?sign=" + sign + "&salt=" + salt + "&token=" +
		currUsr.token + action;
	return url;
}

// function http_download_url_new(action) {
// 	console.log('3333')
// 	var currUsr = storage_get_current_usr().dat;
// 	//
// 	var salt = new Date().getTime();
// 	var curHost = HTTP_INTERFACE_ADDRESS_NEW;
// 	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
// 	var url = curHost + "?sign=" + sign + "&salt=" + salt + "&token=" +
// 		currUsr.token + action;
// 	return url;
// }

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 普通生成树---采集器下属设备及状态列表 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function genTree4Plant(root, cb, json, dict) {
	var ret = genTree4PlantData(json, dict);

	cb(ret);
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 普通生成树获取数据---解析采集器下属设备及状态列表并合成jstree格式 */
/**                                                                  */
/** ---------------------------------------------------------------- */
/** 树变量分隔符,注意如果更改此变量也要对应更改plantdevice解析参数 */
TREE_LINK_SYMBOL = "$#";

function genTree4PlantData(json, dict) {
	var allData = [];

	for (var i = 0; i < json.length; ++i) /* 迭代采集器. */ {
		// 无论是采集器还是设备,id最后均为状态码
		var collector = new Object();
		var freq = 5;
		collector['id'] = "COL" + TREE_LINK_SYMBOL + json[i].pn +
			TREE_LINK_SYMBOL + freq + TREE_LINK_SYMBOL + json[i].status;
		collector['text'] = json[i].alias == null ? json[i].pn : json[i].alias;
		collector['state'] = {
			opened: true,
			disabled: false,
			selected: false
		};
		// 状态明细:0-正常,1-离线,2-故障,3-待机,4-告警
		var colStatus = json[i].status;
		switch (colStatus) {
			case 0:
				collector['icon'] = "assets/images/menu/col_green.png";
				break;
			case 1:
				collector['icon'] = "assets/images/menu/col_gray.png";
				break;
			case 2:
				collector['icon'] = "assets/images/menu/col_red.png";
				break;
			case 3:
				collector['icon'] = "assets/images/menu/col_blue.png";
				break;
			case 4:
				collector['icon'] = "assets/images/menu/col_orange.png";
				break;
		}
		if ((json[i].device == null) || (json[i].device.length == 0) || (json[i].device == undefined)) {

			collector['children'] = false;
		} else {
			var obj0 = new Object();
			obj0['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_INVERTER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj0['text'] = getMultiLangError("dev_inv");
			obj0['state'] = {
				opened: true
			};
			obj0['icon'] = "assets/images/menu/inverterLeft.png";
			//
			var obj1 = new Object();
			obj1['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_ENV_MONITOR +
				TREE_LINK_SYMBOL + json[i].pn;
			obj1['text'] = getMultiLangError("dev_env");
			obj1['state'] = {
				opened: true
			};
			obj1['icon'] = "assets/images/menu/monitorLeft.png";
			//
			var obj2 = new Object();
			obj2['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_SUPPLY_METER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj2['text'] = getMultiLangError("dev_meter");
			obj2['state'] = {
				opened: true
			};
			obj2['icon'] = "assets/images/menu/meterLeft.png";
			//
			var obj3 = new Object();
			obj3['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_COMBINER_BOX +
				TREE_LINK_SYMBOL + json[i].pn;
			obj3['text'] = getMultiLangError("dev_box");
			obj3['state'] = {
				opened: true
			};
			obj3['icon'] = "assets/images/menu/boxLeft.png";
			//
			var obj4 = new Object();
			obj4['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_BATTERY +
				TREE_LINK_SYMBOL + json[i].pn;
			obj4['text'] = getMultiLangError("dev_battery");
			obj4['state'] = {
				opened: true
			};
			obj4['icon'] = "assets/images/menu/batteryLeft.png";
			//
			var obj5 = new Object();
			obj5['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_CHARGER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj5['text'] = getMultiLangError("dev_charger");
			obj5['state'] = {
				opened: true
			};
			obj5['icon'] = "assets/images/menu/chargerLeft.png";
			//
			var obj6 = new Object();
			obj6['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_CONTROLLER +
				TREE_LINK_SYMBOL + json[i].pn;

			if ((json[i].device[0].devcode == "2306") || (json[i].device[0].devcode == "2307")) {
				obj6['text'] = getMultiLangError("dev_device");
			} else {
				obj6['text'] = getMultiLangError("dev_controller");
			}
			obj6['state'] = {
				opened: true
			};
			obj6['icon'] = "assets/images/menu/controllerLeft.png";
			//
			var obj7 = new Object();
			obj7['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_ANTI_ISLANDING +
				TREE_LINK_SYMBOL + json[i].pn;
			obj7['text'] = getMultiLangError("dev_islanding");
			obj7['state'] = {
				opened: true
			};
			obj7['icon'] = "assets/images/menu/dev_islangdingicon.png";
			//
			var obj8 = new Object();
			obj8['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_MINN_INVERTER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj8['text'] = getMultiLangError("dev_mini_inverter");
			obj8['state'] = {
				opened: true
			};
			obj8['icon'] = "assets/images/menu/dev_mini_inverter.png";
			//
			//
			var obj9 = new Object();
			obj9['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_NEW_METER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj9['text'] = getMultiLangError("dev_meter");
			obj9['state'] = {
				opened: true
			};
			obj9['icon'] = "assets/images/menu/meterLeft.png";
			//
			var obj10 = new Object();
			obj10['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_NEW_CONTROLLER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj10['text'] = getMultiLangError("dev_UPS");
			obj10['state'] = {
				opened: true
			};
			obj10['icon'] = "assets/images/menu/controllerLeft.png";
			//
			var obj11 = new Object();
			obj11['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_LAMPMONITOR +
				TREE_LINK_SYMBOL + json[i].pn;
			obj11['text'] = getMultiLangError("dev_streetlamp");
			obj11['state'] = {
				opened: true
			};
			obj11['icon'] = "assets/images/menu/controllerLeft.png";
			//
			var obj12 = new Object();
			obj12['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_WATERPUMP +
				TREE_LINK_SYMBOL + json[i].pn;
			obj12['text'] = getMultiLangError("dev_waterpump");
			obj12['state'] = {
				opened: true
			};
			obj12['icon'] = "assets/images/menu/controllerLeft.png";

			var childrens = [];
			var inverter = [];
			var monitor = [];
			var meter = [];
			var box = [];
			var battery = [];
			var charger = [];
			var controller = [];
			var islanding = [];
			var mini_Inverter = [];
			var new_meter = [];
			var new_controller = [];
			var lampmonitor = [];
			var waterpump = [];
			//
			for (var k = 0; k < json[i].device.length; k++) {

				var device = new Object();
				var key = json[i].pn + TREE_LINK_SYMBOL + json[i].device[k].sn +
					TREE_LINK_SYMBOL + json[i].device[k].devcode + TREE_LINK_SYMBOL + json[i].device[k].devaddr; // 一定要用pn-sn-devcode-devaddr标记

				device['id'] = "DEV" + TREE_LINK_SYMBOL + json[i].pn +
					TREE_LINK_SYMBOL + freq + TREE_LINK_SYMBOL +
					tsfCode2Type(json[i].device[k].devcode) + TREE_LINK_SYMBOL + //
					json[i].device[k].devcode + TREE_LINK_SYMBOL +
					json[i].device[k].sn + TREE_LINK_SYMBOL + json[i].device[k].devaddr + TREE_LINK_SYMBOL + json[i].device[k].status;
				device['text'] = json[i].device[k].alias == null ? json[i].device[k].sn :
					json[i].device[k].alias == "" ? json[i].device[k].sn : json[i].device[k].alias;
				device['state'] = {
					opened: true,
					disabled: false,
					selected: false
				};
				// 状态明细:0-正常,1-离线,2-故障,3-待机,4-告警
				var status = json[i].device[k].status;
				switch (status) {
					case 0:
						device['icon'] = "assets/images/menu/green.png";
						break;
					case 1:
						device['icon'] = "assets/images/menu/gray.png";
						break;
					case 2:
						device['icon'] = "assets/images/menu/red.png";
						break;
					case 3:
						device['icon'] = "assets/images/menu/blue.png";
						break;
					case 4:
						device['icon'] = "assets/images/menu/orange.png";
						break;
				}

				if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_INVERTER || tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_INVERTER_ETX)
					inverter.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_ENV_MONITOR)
					monitor.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_SUPPLY_METER)
					meter.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_COMBINER_BOX)
					box.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_BATTERY)
					battery.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_CHARGER)
					charger.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_CONTROLLER)
					controller.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_ANTI_ISLANDING)
					islanding.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_MINN_INVERTER)
					mini_Inverter.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_NEW_METER)
					new_meter.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_LAMPMONITOR)
					lampmonitor.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_WATERPUMP)
					waterpump.push(device);
				else {
					new_controller.push(device);
				}
			}
			//
			obj0['children'] = inverter;
			obj1['children'] = monitor;
			obj2['children'] = meter;
			obj3['children'] = box;
			obj4['children'] = battery;
			obj5['children'] = charger;
			obj6['children'] = controller;
			obj7['children'] = islanding;
			obj8['children'] = mini_Inverter;
			obj9['children'] = new_meter;
			obj10['children'] = new_controller;
			obj11['children'] = lampmonitor;
			obj12['children'] = waterpump;

			//
			if (inverter.length > 0)
				childrens.push(obj0);
			if (monitor.length > 0)
				childrens.push(obj1);
			if (meter.length > 0)
				childrens.push(obj2);
			if (box.length > 0)
				childrens.push(obj3);
			if (battery.length > 0)
				childrens.push(obj4);
			if (charger.length > 0)
				childrens.push(obj5);
			if (controller.length > 0)
				childrens.push(obj6);
			if (islanding.length > 0)
				childrens.push(obj7);
			if (mini_Inverter.length > 0)
				childrens.push(obj8);
			if (new_meter.length > 0)
				childrens.push(obj9);
			if (new_controller.length > 0)
				childrens.push(obj10);
			if (lampmonitor.length > 0)
				childrens.push(obj11);
			if (waterpump.length > 0)
				childrens.push(obj12);
			collector['children'] = childrens;
		}
		allData.push(collector);
	}
	return allData;
}

// 状态明细:0-正常,1-离线,2-故障,3-待机,4-告警
function WarmType(wt) {
	if (wt == "warning")
		return "告警";
	if (wt == "fault")
		return "故障";
	if (wt == "error")
		return "错误";
}

function HandleStatus(hs) {
	return hs == 0 ? "未处理" : "已处理";
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 筛选某种设备某种状态的唯一设备,采集器-返回pn,其他,返回pn==devcode==sn */
/**                                                                  */
/** ---------------------------------------------------------------- */
function findBasicUniqueDev(basicId, dat) {
	var basicInfo = basicId.split("-");
	var basicDev = basicInfo[0]; // 类型编码
	var basicStatus = basicInfo[1]; // 状态码
	var targetDev, targetInfo;

	if (basicDev == "col") {
		for (var i = 0; i < dat.length; i++) {
			if (dat[i].status == basicStatus) {
				targetInfo = dat[i].pn;
				break;
			}
		}
	} else {
		for (var j = 0; j < dat.length; j++) {
			if ((dat[j].device == null) || (dat[j].device == " ")) {
				continue;
			} else {
				for (var k = 0; k < dat[j].device.length; k++) {
					if ((tsfCode2Type(dat[j].device[k].devcode) == basicDev) &&
						(dat[j].device[k].status == basicStatus)) {
						targetInfo = dat[j].pn + "==" + dat[j].device[k].devcode +
							"==" + dat[j].device[k].sn;
						break;
					}
				}

			}
		}

	}
	var obj = {
		type: basicDev,
		info: targetInfo
	};
	return obj;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 特殊生成树---采集器下属设备及状态列表 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function genTree4PlantSpcl(root, cb, json, dict, obj) {

	var ret = genTree4PlantDataSpcl(json, dict, obj);
	cb(ret);
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 普通生成树获取数据---解析采集器下属设备及状态列表并合成jstree格式 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function genTree4PlantDataSpcl(json, dict, obj) {
	// 取出点击时唯一确定设备,采集器只有pn,设备通过pn+code+sn+addr定位
	var bType = obj.type;
	var bPn = null;
	var bCode = null;
	var bSn = null;
	var bType = null;
	var bAddr = null;
	var bArr = new Array();
	if (bType == "col") {
		bPn = obj.info;
	} else {
		bArr = obj.info.split("==");
		bPn = bArr[0];
		bCode = bArr[1];
		bType = tsfCode2Type(bArr[1]);
		bSn = bArr[2];
		bAddr = bArr[3];

	}

	var allData = [];
	for (var i = 0; i < json.length; ++i) /* 迭代采集器. */ {

		// 无论是采集器还是设备,id最后均为状态码
		var collector = new Object();
		var freq = 5;
		collector['id'] = "COL" + TREE_LINK_SYMBOL + json[i].pn +
			TREE_LINK_SYMBOL + freq + TREE_LINK_SYMBOL + json[i].status;
		collector['text'] = json[i].alias == null ? json[i].pn : json[i].alias;

		// 状态明细:0-正常,1-离线,2-故障,3-待机,4-告警
		var colStatus = json[i].status;

		if ((json[i].pn == bPn) && (bSn == null)) {
			// 选中是采集器
			collector['state'] = {
				opened: true,
				selected: true
			};
			BASIC_CHECKED_TREE = collector['id'];
		} else if ((json[i].pn == bPn) && (bSn != null)) {
			// 选中设备,但是采集器需要展开
			collector['state'] = {
				opened: true,
				selected: false
			};
		} else {
			collector['state'] = {
				opened: false,
				selected: false
			};
		}

		switch (colStatus) {
			case 0:
				collector['icon'] = "assets/images/menu/col_green.png";
				break;
			case 1:
				collector['icon'] = "assets/images/menu/col_gray.png";
				break;
			case 2:
				collector['icon'] = "assets/images/menu/col_red.png";
				break;
			case 3:
				collector['icon'] = "assets/images/menu/col_blue.png";
				break;
			case 4:
				collector['icon'] = "assets/images/menu/col_orange.png";
				break;
		}

		if ((json[i].device == null) || (json[i].device.length == 0) || (json[i].device == undefined)) {

			collector['children'] = false;
		} else {
			var obj0 = new Object();
			obj0['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_INVERTER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj0['text'] = getMultiLangError("dev_inv");
			obj0['icon'] = "assets/images/menu/inverterLeft.png";
			//
			var obj1 = new Object();
			obj1['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_ENV_MONITOR +
				TREE_LINK_SYMBOL + json[i].pn;
			obj1['text'] = getMultiLangError("dev_env");
			obj1['icon'] = "assets/images/menu/monitorLeft.png";
			//
			var obj2 = new Object();
			obj2['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_SUPPLY_METER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj2['text'] = getMultiLangError("dev_meter");
			obj2['icon'] = "assets/images/menu/meterLeft.png";
			//
			var obj3 = new Object();
			obj3['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_COMBINER_BOX +
				TREE_LINK_SYMBOL + json[i].pn;
			obj3['text'] = getMultiLangError("dev_box");
			obj3['icon'] = "assets/images/menu/boxLeft.png";
			//
			var obj4 = new Object();
			obj4['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_BATTERY +
				TREE_LINK_SYMBOL + json[i].pn;
			obj4['text'] = getMultiLangError("dev_battery");
			obj4['icon'] = "assets/images/menu/batteryLeft.png";
			//
			var obj5 = new Object();
			obj5['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_CHARGER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj5['text'] = getMultiLangError("dev_charger");
			obj5['icon'] = "assets/images/menu/chargerLeft.png";
			//
			var obj6 = new Object();
			obj6['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_CONTROLLER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj6['text'] = getMultiLangError("dev_controller");
			obj6['icon'] = "assets/images/menu/chargerLeft.png";
			//
			var obj7 = new Object();
			obj7['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_ANTI_ISLANDING +
				TREE_LINK_SYMBOL + json[i].pn;
			obj7['text'] = getMultiLangError("dev_islanding");
			obj7['icon'] = "assets/images/menu/dev_islangdingicon.png";
			//
			var obj8 = new Object();
			obj8['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_MINN_INVERTER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj8['text'] = getMultiLangError("dev_mini_inverter");
			obj8['icon'] = "assets/images/menu/dev_mini_inverter.png";
			//
			//
			var obj9 = new Object();
			obj9['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_NEW_METER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj9['text'] = getMultiLangError("dev_meter");
			obj9['icon'] = "assets/images/menu/meterLeft.png";
			//
			var obj10 = new Object();
			obj10['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_NEW_CONTROLLER +
				TREE_LINK_SYMBOL + json[i].pn;
			obj10['text'] = getMultiLangError("dev_UPS");
			obj10['icon'] = "assets/images/menu/chargerLeft.png";
			//
			var obj11 = new Object();
			obj11['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_LAMPMONITOR +
				TREE_LINK_SYMBOL + json[i].pn;
			obj11['text'] = getMultiLangError("dev_streetlamp");
			obj11['icon'] = "assets/images/menu/chargerLeft.png";
			//
			var obj12 = new Object();
			obj12['id'] = "SUB" + TREE_LINK_SYMBOL + DEVICE_TYPE_WATERPUMP +
				TREE_LINK_SYMBOL + json[i].pn;
			obj12['text'] = getMultiLangError("dev_waterpump");
			obj12['icon'] = "assets/images/menu/chargerLeft.png";

			obj0['state'] = {
				opened: bType == DEVICE_TYPE_INVERTER
			};
			obj1['state'] = {
				opened: bType == DEVICE_TYPE_ENV_MONITOR
			};
			obj2['state'] = {
				opened: bType == DEVICE_TYPE_SUPPLY_METER
			};
			obj3['state'] = {
				opened: bType == DEVICE_TYPE_COMBINER_BOX
			};
			obj4['state'] = {
				opened: bType == DEVICE_TYPE_BATTERY
			};
			obj5['state'] = {
				opened: bType == DEVICE_TYPE_CHARGER
			};
			obj6['state'] = {
				opened: bType == DEVICE_TYPE_CONTROLLER
			};
			obj7['state'] = {
				opened: bType == DEVICE_TYPE_ANTI_ISLANDING
			};
			obj8['state'] = {
				opened: bType == DEVICE_TYPE_MINN_INVERTER
			};
			obj9['state'] = {
				opened: bType == DEVICE_TYPE_NEW_METER
			};
			obj10['state'] = {
				opened: bType == DEVICE_TYPE_NEW_CONTROLLER
			};
			obj11['state'] = {
				opened: bType == DEVICE_TYPE_LAMPMONITOR
			};
			obj12['state'] = {
				opened: bType == DEVICE_TYPE_WATERPUMP
			};
			//

			var childrens = [];
			var inverter = [];
			var monitor = [];
			var meter = [];
			var box = [];
			var battery = [];
			var charger = [];
			var controller = [];
			var islanding = [];
			var mini_Inverter = [];
			var new_meter = [];
			var new_controller = [];
			var lampmonitor = [];
			var waterpump = [];
			//
			for (var k = 0; k < json[i].device.length; k++) {

				var device = new Object();
				var key = json[i].pn + TREE_LINK_SYMBOL + json[i].device[k].sn +
					TREE_LINK_SYMBOL + json[i].device[k].devcode + TREE_LINK_SYMBOL + json[i].device[k].devaddr; // 一定要用pn-sn-devcode-devaddr标记

				device['id'] = "DEV" + TREE_LINK_SYMBOL + json[i].pn +
					TREE_LINK_SYMBOL + freq + TREE_LINK_SYMBOL +
					tsfCode2Type(json[i].device[k].devcode) + TREE_LINK_SYMBOL + //
					json[i].device[k].devcode + TREE_LINK_SYMBOL +
					json[i].device[k].sn + TREE_LINK_SYMBOL + json[i].device[k].devaddr + TREE_LINK_SYMBOL + json[i].device[k].status;
				device['text'] = json[i].device[k].alias == null ? json[i].device[k].sn :
					json[i].device[k].alias;
				// 判断是否是选中的设备
				if ((bPn == json[i].pn) && (bCode == json[i].device[k].devcode) &&
					(bSn == json[i].device[k].sn) && (bAddr == json[i].device[k].devaddr)) {
					device['state'] = {
						opened: false,
						disabled: false,
						selected: true
					};
					BASIC_CHECKED_TREE = device['id'];
				} else {
					device['state'] = {
						opened: false,
						disabled: false,
						selected: false
					};
				}
				// 状态明细:0-正常,1-离线,2-故障,3-待机,4-告警
				var status = json[i].device[k].status;
				switch (status) {
					case 0:
						device['icon'] = "assets/images/menu/green.png";
						break;
					case 1:
						device['icon'] = "assets/images/menu/gray.png";
						break;
					case 2:
						device['icon'] = "assets/images/menu/red.png";
						break;
					case 3:
						device['icon'] = "assets/images/menu/blue.png";
						break;
					case 4:
						device['icon'] = "assets/images/menu/orange.png";
						break;
				}
				if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_INVERTER || tsfCode2Type(json[i].device[k].devcode) ==DEVICE_TYPE_INVERTER_ETX)
					inverter.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_ENV_MONITOR)
					monitor.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_SUPPLY_METER)
					meter.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_COMBINER_BOX)
					box.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_BATTERY)
					battery.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_CHARGER)
					charger.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_CONTROLLER)
					controller.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_ANTI_ISLANDING)
					islanding.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_MINN_INVERTER)
					mini_Inverter.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_NEW_METER)
					new_meter.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_LAMPMONITOR)
					lampmonitor.push(device);
				else if (tsfCode2Type(json[i].device[k].devcode) == DEVICE_TYPE_WATERPUMP)
					waterpump.push(device);
				else {
					new_controller.push(device);
				}
			}
			obj0['children'] = inverter;
			obj1['children'] = monitor;
			obj2['children'] = meter;
			obj3['children'] = box;
			obj4['children'] = battery;
			obj5['children'] = charger;
			obj6['children'] = controller;
			obj7['children'] = islanding;
			obj8['children'] = mini_Inverter;
			obj9['children'] = new_meter;
			obj10['children'] = new_controller;
			obj11['children'] = lampmonitor;
			obj12['children'] = waterpump;
			if (inverter.length > 0)
				childrens.push(obj0);
			if (monitor.length > 0)
				childrens.push(obj1);
			if (meter.length > 0)
				childrens.push(obj2);
			if (box.length > 0)
				childrens.push(obj3);
			if (battery.length > 0)
				childrens.push(obj4);
			if (charger.length > 0)
				childrens.push(obj5);
			if (controller.length > 0)
				childrens.push(obj6);
			if (islanding.length > 0)
				childrens.push(obj7);
			if (mini_Inverter.length > 0)
				childrens.push(obj8);
			if (new_meter.length > 0)
				childrens.push(obj9);
			if (new_controller.length > 0)
				childrens.push(obj10);
			if (lampmonitor.length > 0)
				childrens.push(obj11);
			if (waterpump.length > 0)
				childrens.push(obj12);
			collector['children'] = childrens;
		}
		allData.push(collector);
	}
	return allData;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 传入某个电站,统计该电站所有采集器和设备pn/sn-status字典 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeDevStatusDic(dat) {
	// 注意生成dict是一定要用pn-sn-devcode来做key,否则无法唯一标记一个设备
	var dict = new Array();
	for (var j = 0; j < dat.length; j++) {
		// 采集器的Pn号不会相同
		var colPn = dat[j].pn;
		dict[colPn] = dat[j].status;
		if ((dat[j].device == null) || (dat[j].device == undefined) ||
			(dat[j].device == " ")) {} else {
			for (var k = 0; k < dat[j].device.length; k++) {

				// 注意逆变器的sn号可能相同,所以必须加上一个采集器pn号来记录
				// 特别注意这里的key同tree生成里面的必须完全一样
				var key = dat[j].pn + TREE_LINK_SYMBOL + dat[j].device[k].sn +
					TREE_LINK_SYMBOL + dat[j].device[k].devcode + TREE_LINK_SYMBOL + dat[j].device[k].devaddr;
				dict[key] = dat[j].device[k].status;
			}
		}
	}

	return dict;
}

// 随机取得传入数组中的任何一个元素
function numRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 停止刷新左侧树 . */
/**                                                                  */
/** ---------------------------------------------------------------- */
function stopRefreshTree() {
	window.clearInterval(intervalId);
	console.log("停止刷新");
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 所有html页面load函数,判断是否在设备管理页面 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function loadHtml(divid, pagex) {

	// 设备管理页面,不做任何处理,intervalId初始值为null只有开始计算才有数值
	// if((divid =="plantDevice") ||(divid =="deviceArea"))
	// {
	// }
	// else
	// {
	// if(intervalId != null)
	// {
	// stopRefreshTree();
	// }
	// }
	LOADID = divid

	$("#" + divid).load(pagex + "?" + Math.random(), null, function () {

	});
}

function loadHtmlAndPram(divid, pagex, pram) {
	$("#" + divid).load(pagex, pram);
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 设备管理---查询下属设备映射表collectorDeviceMap,传入想查设备devtype */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getSubDevMap(dat, type) {
	var arr = dat.device;
	var allInfo = new Array;
	console.log(type,"打印")
	for (var i = 0; i < arr.length; i++) {

		if (tsfCode2Type(arr[i].devcode) == type) /* type为512/768.... */ {
			// 最后两个是虚假值
			var oneInfo = [arr[i].pn, arr[i].sn,
				arr[i].alias == undefined ? arr[i].sn : arr[i].alias,
				arr[i].devcode, arr[i].devaddr,
				// "0"+arr[i].devcode.toString(16), arr[i].devaddr,
				checkStatusMeaning(arr[i].status)
			];
			allInfo.push(oneInfo);
		}
	}

	return allInfo;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 获取主电站和主时区和主名字,进入选中的某一个电站 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getPlantId(id) {
	var arr = id.split("_");
	var selectId = arr[1];
	MAIN_CHOOSE_PLANT_ID = selectId;
	http_async_request_public("&action=queryPlantInfo&plantid=" + selectId, function (err, dat) {
		if (err == WS_ERR_NONE) {
			MAIN_CHOOSE_PLANT_TIMEZONE = (dat.address.timezone / 3600);

			MAIN_CHOOSE_PLANT_NAME = dat.name;
			$("#checkedPlant").text(MAIN_CHOOSE_PLANT_NAME);
			$("#mainArea").load("/plant/plant.html", null);

		}
	}, function () {
		console.log("根据点击获取时区失败");
	});
}

// 点击浏览某一个电站时
function groupApplyBrowse(plantId) {
	http_async_request_public("&action=queryPlantInfo&plantid=" + plantId, function (err, dat) {
		if (err == WS_ERR_NONE) {
			MAIN_CHOOSE_PLANT_TIMEZONE = (dat.address.timezone / 3600);
			MAIN_CHOOSE_PLANT_ID = plantId;
			MAIN_CHOOSE_PLANT_NAME = dat.name;
			$("#checkedPlant").text(MAIN_CHOOSE_PLANT_NAME);
			$("#mainArea").load("/plant/plant.html", null);

		}
	}, function () {
		console.log("根据点击获取时区失败");
	});
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 传入某个电站ID,统计下属采集器个数及下属四种设备个数 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getPlantDevCount(dat) {
	var col = dat.length; /* 采集器总个数. */
	var inv = 0; /* 逆变器总个数. */
	var env = 0; /* 环境监测仪总个数. */
	var meter = 0; /* 智能电表总个数. */
	var box = 0; /* 汇流箱总个数. */
	var battery = 0; /* 电池总个数. */
	var charger = 0; /* 充电器总个数. */
	var controller = 0; /* 控制器总个数. */
	var islanding = 0; /* 防孤岛装置总个数. */
	var mini_Inverter = 0; /* 微型逆变器总个数. */
	var new_meter = 0; /* 新型智能电表总个数. */
	var devCount = new Array();
	//
	for (var i = 0; i < dat.length; i++) {
		if ((dat[i].device == null) || (dat[i].device == undefined) ||
			(dat[i].device == ""))
			continue;
		inv += getColDevCount(dat[i].device, DEVICE_TYPE_INVERTER);
		env += getColDevCount(dat[i].device, DEVICE_TYPE_ENV_MONITOR);
		meter += getColDevCount(dat[i].device, DEVICE_TYPE_SUPPLY_METER);
		box += getColDevCount(dat[i].device, DEVICE_TYPE_COMBINER_BOX);
		battery += getColDevCount(dat[i].device, DEVICE_TYPE_BATTERY);
		charger += getColDevCount(dat[i].device, DEVICE_TYPE_CHARGER);
		controller += getColDevCount(dat[i].device, DEVICE_TYPE_CONTROLLER);
		islanding += getColDevCount(dat[i].device, DEVICE_TYPE_ANTI_ISLANDING);
		mini_Inverter += getColDevCount(dat[i].device, DEVICE_TYPE_MINN_INVERTER);
		new_meter += getColDevCount(dat[i].device, DEVICE_TYPE_NEW_METER);
	}
	devCount = [col, inv, env, meter, box, battery];
	return devCount;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 传入单个采集器,统计某种下属设备个数 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getColDevCount(arr, deviceType) {
	var deviceCount = 0;
	for (var k = 0; k < arr.length; k++) {
		if (arr[k].devtype == deviceType) {
			deviceCount++;
		}
	}
	return deviceCount;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 传入某个电站,得到该电站下每种设备状态(正常/离线/故障/待机/告警)个数 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getDevStateObj(dat, devName, devtype) {
	// 后台状态编码:0-在线,1-离线,2-故障,3-待机,4-告警
	var devStateOk = 0; // 状态正常
	var devStateDown = 0; // 状态离线
	var devStateBad = 0; // 状态故障
	var devStateStandby = 0; // 状态待机
	var devStatusWarn = 0; // 状态告警
	var devArr = new Array();
	for (var j = 0; j < dat.length; j++) {
		if ((dat[j].device == null) || (dat[j].device == undefined) ||
			(dat[j].device == " "))
			continue;
		for (var k = 0; k < dat[j].device.length; k++) {
			if (tsfCode2Type(dat[j].device[k].devcode) != devtype)
				continue;
			var status = dat[j].device[k].status;
			if (status == 0)
				devStateOk++;
			else if (status == 1)
				devStateDown++;
			else if (status == 2)
				devStateBad++;
			else if (status == 3)
				devStateStandby++;
			else
				devStatusWarn++;
		}
	}
	// 网页显示顺序 正常-故障-告警-离线-待机
	devArr = [devStateOk, devStateBad, devStatusWarn, devStateDown,
		devStateStandby
	];
	var devObj = {
		type: devName,
		state: devArr
	};
	return devObj;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 数组去除重复元素 */
/**                                                                  */
/** ---------------------------------------------------------------- */
Array.prototype.unique2 = function () {
	this.sort(); // 先排序
	var res = [this[0]];
	for (var i = 1; i < this.length; i++) {
		if (this[i] !== res[res.length - 1]) {
			res.push(this[i]);
		}
	}
	return res;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 电站发电量总览月报表没有数据时构造 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVplantsMonthData(endMonth) {
	var arr = new Array();
	var tmpMonth = getPre12Months(endMonth);
	var lastMonth = getNextMonth(endMonth);
	while (true) {
		var jsonObj = {
			ts: tmpMonth,
			val: "0"
		};
		arr.push(jsonObj);
		tmpMonth = getNextMonth(tmpMonth);
		if (tmpMonth == lastMonth)
			break;
	}
	return arr.slice(1,13);
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 电站实时功率报表没有数据时构造 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVenergyToday(beginTime, endTime) {
	var obj = {
		"outputPower": []
	};
	//	obj.outputPower=[];
	var tmp = beginTime;
	while (true) {
		var begin = parseDate2yyyymmddhhmiss(tmp);
		var jsonObj = {
			ts: begin,
			val: "0"
		};
		obj.outputPower.push(jsonObj);
		tmp = dateRollOfMinute(tmp, 5, true);
		if (tmp.getTime() >= endTime.getTime())
			break;
	}
	return obj;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 电站月报表没有数据时构造 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVenergyMonth(beginDate, endDate) {
	var arr = new Array();
	var newDate = beginDate;
	for (var amount = 1; amount < (parseInt(endDate.split("-")[2]) + 1); amount++) {
		newDate = beginDate.substring(0, 7) + "-" +
			(amount < 10 ? ("0" + amount) : amount);
		var jsonObj = {
			key: newDate,
			val: "0.000"
		};
		arr.push(jsonObj);
	}
	return arr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 电站年报表没有数据时构造 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVenergyYear() {
	var arr = new Array();
	for (var i = 0; i < 12; i++) {
		arr.push("0.000");
	}
	return arr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** dat为电站或逆变器总发电量,firstyear为返回最小年,num为希望扩展到的年数 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVenergyTotalNum(dat, firstYear, num) {

	// 电站返回格式为:{"ts":"2015","val":"42078.401"},逆变器为:{"ts":"2015-12-30
	// 09:35:46","val":"96.000"}
	var arr = new Array();
	var dValue = (num - dat.length);
	for (var i = 0; i < dValue; i++) {
		var vYear = (parseInt(firstYear) - dValue + i);
		var jsonObj = {
			"ts": vYear + "",
			"val": "0.0000"
		};
		arr.push(jsonObj);
	}

	for (var j = 0; j < dat.length; j++) {
		var realObj = {
			"ts": dat[j].ts.substring(0, 4),
			"val": dat[j].val
		};
		arr.push(realObj);
	}

	return arr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 电站总报表数据全为空或者没有采集器 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVenergyTotal() {
	var arr = new Array();
	var d = new Date();
	var thisYear = d.getFullYear();
	for (var i = 0; i < 6; i++) {
		var jsonObj = {
			ts: thisYear - (5 - i),
			val: "0"
		};
		arr.push(jsonObj);
	}
	return arr;

}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 将采集器列表数据转换为datatable格式 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function loadColArr(dataSet) {
	//	console.log(dat)
	//	var dataSet = eval(dat);

	var arr = new Array();
	for (var i = 0; i < dataSet.length; i++) {
		var obj = new Array();
		var alias = (dataSet[i].alias == null) ? dataSet[i].pn :
			dataSet[i].alias;
		var statusCode = dataSet[i].status; // 采集器状态码
		var statusMeaning = checkStatusMeaning(statusCode); // 状态码含义
		obj.push(dataSet[i].uid, dataSet[i].pid, dataSet[i].pn, alias, //
			statusMeaning, dataSet[i].datFetch, dataSet[i].datFetch, //
			(parseInt(dataSet[i].timezone) / 3600), fieldAutoDisp(dataSet[i].fireware), dataSet[i].load,dataSet[i].signalVal,dataSet[i].signalValname);
		arr.push(obj);
	}
	return arr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 将单个采集器数据读出 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function loadOneColArr(dat) {
	var dataSet = eval(dat);
	var arr = new Array();
	var alias = (dataSet[0].alias == null) ? dataSet[0].pn : dataSet[0].alias;
	arr.push(dataSet[0].pn, alias, dataSet[0].dat_fetch, dataSet[0].heartbeat,
		dataSet[0].timezone);
	return arr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备明细字典生成函数 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function initDict(datRow, deviceFields, dict) {
	for (var i = 0; i < datRow.length; ++i) {
		for (var k = 0; k < deviceFields.length; ++k) {
			if (deviceFields[k] == datRow[i].key) {
				dict[deviceFields[k]] = i;
			}
		}
	}
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备明细title生成函数,lanNum为0显示中文,为1显示英语 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getDetailTitle(dat, reg, title, lanNum) {
	for (var i = 0; i < dat.regs.length; i++) {
		var tableObj;
		if (dat.regs[i].i18n[lanNum] !== " ") {
			tableObj = {
				"title": dat.regs[i].i18n[lanNum]
			};
			reg.push(dat.regs[i].reg);
			title.push(tableObj);
		}

	}
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备--根据字典生成表 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getDetail4Dict(dat, dict) {
	var arr = new Array();
	for (var i = 0; i < dat.length; ++i) {
		var rowData = new Array();
		for (var key in dict) {
			var index = dict[key];
			rowData.push(dat[i][index].val);
		}
		arr.push(rowData);
	}
	return arr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备明细查询URL生成(按照电站时区生成) */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getDetailUrl(action, precision) {
	var nd = new Date();
	nd = parseLocal2Plant(MAIN_CHOOSE_PLANT_TIMEZONE);
	var sTime = parseDate2yyyymmdd(nd) + " 00:00:00";
	var eTime = parseDate2yyyymmddhhmiss(nd);
	var dayUrl = "&action=" + action + "&pn=" + MAIN_SELECTED_COLLECTOR_ID +
		"&devcode=" + MAIN_SELECTED_DEVICE_CODE + "&sn=" +
		MAIN_SELECTED_DEVICE_SN + "&precision=" + precision + "&sdate=" +
		encodeURI(sTime) + "&edate=" + encodeURI(eTime);
	return dayUrl;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备-输入初始时间和结束时间,输出每30分钟递增的时间(时:分) */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVtimeToday(sTime, eTime, interval) {
	if (interval == undefined)
		var interval = 30
	var arr = new Array();
	var sdate = parseyyyymmddhhmiss2Date(sTime);
	var edate = parseyyyymmddhhmiss2Date(eTime);
	var tmp = sdate;
	var str = "";
	while (true) {
		str = parseDate2yyyymmddhhmiss(tmp).substring(11, 16);
		arr.push(str);
		tmp = dateRollOfMinute(tmp, interval, true);

		if (tmp.getTime() >= edate.getTime())
			break;
	}
	return arr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 组件时间刻度，以现在时间隔指定分钟切割一天时间刻度 */
/**                                                                  */
/** ---------------------------------------------------------------- */

function nowVtimeToday(sTime, eTime, interval, type) {
	if (interval == undefined)
		var interval = 30
	var arr = new Array();

	var sdate = parseyyyymmddhhmiss2Date(sTime);
	var edate = parseyyyymmddhhmiss2Date(eTime);

	var tmp = sdate;
	var str = "";
	while (true) {

		if (arr.length > 2000) //防止死循环
			break;
		str = parseDate2yyyymmddhhmiss(tmp).substring(11, 16);
		if (type) {
			arr.push(str);
			tmp = dateRollOfMinute(tmp, interval, type);
			if (tmp.getTime() >= edate.getTime()) {
				arr.shift()
				break;
			}
		} else {

			arr.unshift(str);
			tmp = dateRollOfMinute(tmp, interval, type);
			if (tmp.getTime() <= edate.getTime())
				break;

		}

	}
	return arr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备-配合makeVtimeToday生成同样长假数据 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVdataToday(sTime, eTime) {
	var vTime = makeVtimeToday(sTime, eTime);
	var vData = new Array();
	for (var j = 0; j < vTime.length; j++) {
		vData.push("0.000");
	}
	return vData;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备-假数据 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function makeVdateToday(sTime, eTime) {
	var vTime = makeVtimeToday(sTime, eTime);
	var vData = new Array();
	for (var j = 0; j < vTime.length; j++) {
		vData.push("0");
	}
	return vData;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备-根据返回dat生成图表所需arr */
/**																	*/
/** ---------------------------------------------------------------- */
function makeArr4Dat(dat, factor, time, entry) {
	for (var i = 0; i < dat.length; i++) {
		var arr = dat[i].val.split(",");
		entry.push(arr[factor]);
		time.push(dat[i].key.substring(11, 16));
	}
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器下属设备-规范数据(空1个0或者两个0的数据填充,空3个0以上不填) */
/**																	*/
/** ---------------------------------------------------------------- */
function formatInvDayData(arr) {
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i + 1] == 0) && (arr[i + 2] != 0)) {
			arr[i + 1] = arr[i];
		} else if ((arr[i + 1] == 0) && (arr[i + 2] == 0) && (arr[i + 3] != 0)) {
			arr[i + 1] = arr[i];
			arr[i + 2] = arr[i];
			i = i + 2;
		}
	}
	return arr;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 遍历数组,获取最大值的index */
/**																	*/
/** ---------------------------------------------------------------- */
function findMaxIndexArr(arr) {
	var max = arr[0];
	var maxIndex = 0;
	for (var j = 1; j < arr.length; j++) {
		if (arr[j] > max) {
			max = arr[j];
			maxIndex = j;
		}
	}
	return maxIndex;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/**
 * 给所有datatable生成函数统一样式 /**
 */
/** ---------------------------------------------------------------- */
function tableStyle(tablename) {
	// 注意调用的时候要用双引号括住名字
	$(("#" + tablename) + ":eq(0) th").css("background-color", "#e7f3e9");
	$(("#" + tablename) + ":eq(0) th").css("text-align", "center");
	$(("#" + tablename) + ":eq(0) th").css("font-size", "110%");
	$(("#" + tablename) + ":eq(0) th").css("font-weight", "bold");
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 电站分析-将逆变器的状态,生产厂家加入进表格数据中 */
/**																	*/
/** ---------------------------------------------------------------- */

//换接口后的电站分析表格获取
function loadInvConfArr(dat, status) {
	var invConfData = new Array();
	for (var i = 0; i < dat.length; i++) {

		if ((dat[i].ratePower == undefined) || (dat[i].ratePower == null)) {
			var rating_power = "";
		} else {
			var rating_power = parseFloat(dat[i].ratePower).toFixed(1);
		}

		var rowData = [fieldAutoDisp(dat[i].cpn),
			fieldAutoDisp(dat[i].devcode),
			fieldAutoDisp(dat[i].alias || dat[i].sn), fieldAutoDisp(dat[i].sn), fieldAutoDisp(dat[i].devaddr),
			rating_power, fieldAutoDisp(dat[i].devtype),
			fieldAutoDisp(dat[i].energy_today?parseFloat(dat[i].energy_today).toFixed(1):'-'),
			fieldAutoDisp(dat[i].energy_total?parseFloat(dat[i].energy_total).toFixed(1):'-'), fieldAutoDisp(dat[i].lts),
			checkStatusMeaning(dat[i].status)
		];
		invConfData.push(rowData);
	}
	return invConfData;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/**
 * 电站详细查询,输入dat,返回处理过的arr /**
 */
/** ---------------------------------------------------------------- */
function readDetail2Arr(dat) {
	var plantInfo = new Array();
	if ((dat.picBig == undefined) || (dat.picBig.indexOf("undefined") != -1) ||
		(dat.picBig == null)) {
		var imgUrl = "assets/images/pic_broken.png"
	} else {
		var imgUrl = dat.picBig;
	}
	//console.log(imgUrl)
	plantInfo = [dat.name, dat.install.substring(0, 10),
		dat.nominalPower, dat.energyYearEstimate, ((dat.address.country == undefined ? "" : dat.address.country + "|") + (dat.address.province == undefined ? "" : dat.address.province + "|") + (dat.address.city == undefined ? "" : dat.address.city + "|") + (dat.address.county == undefined ? "" : dat.address.county + "|")),
		dat.address.address, (dat.address.timezone / 3600), dat.address.lon, dat.address.lat,
		dat.profit.unitProfit, dat.profit.currency, dat.profit.coal,
		dat.profit.co2, dat.profit.so2, imgUrl, dat.designCompany
	];

	// 注意此处只是循环除了图像以外的元素
	for (var j = 0; j < (plantInfo.length - 1); j++) {
		if ((plantInfo[j] == null) || (plantInfo[j] == undefined)) {
			plantInfo[j] = " ";
		}
		if ((plantInfo[j] == "0.0000") || (plantInfo[j] == undefined)) {
			plantInfo[j] = 0;
		}
	}
	return plantInfo;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/**
 * 电站详细查询,输入dat,返回处理过的arr /**(电站信息增加了电站ID展示,跟上面的唯一区别)
 */
/** ---------------------------------------------------------------- */
function readDetail3Arr(dat) {
	var plantInfo = new Array();
	if ((dat.picBig == undefined) || (dat.picBig.indexOf("undefined") != -1) ||
		(dat.picBig == null)) {
		var imgUrl = "assets/images/pic_broken.png"
	} else {
		var imgUrl = dat.picBig;
	}
	//console.log(imgUrl)
	plantInfo = [dat.name, dat.pid, dat.install.substring(0, 10),
		dat.nominalPower, dat.energyYearEstimate, ((dat.address.country == undefined ? "" : dat.address.country + "|") + (dat.address.province == undefined ? "" : dat.address.province + "|") + (dat.address.city == undefined ? "" : dat.address.city + "|") + (dat.address.county == undefined ? "" : dat.address.county + "|")),
		dat.address.address, (dat.address.timezone / 3600), dat.address.lon, dat.address.lat,
		dat.profit.unitProfit, dat.profit.currency, dat.profit.coal,
		dat.profit.co2, dat.profit.so2, imgUrl, dat.designCompany
	];

	// 注意此处只是循环除了图像以外的元素
	for (var j = 0; j < (plantInfo.length - 1); j++) {
		if ((plantInfo[j] == null) || (plantInfo[j] == undefined)) {
			plantInfo[j] = " ";
		}
		if ((plantInfo[j] == "0.0000") || (plantInfo[j] == undefined)) {
			plantInfo[j] = 0;
		}
	}
	return plantInfo;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 设备详情信息将dat转换为datatable格式的表格title */
/**																	 */
/** ---------------------------------------------------------------- */
function getDeviceTitle4Dat(tableTitle, dat) {
	for (var k = 1; k < dat.length; k++) {
		var tableObj;
		if ((dat[k].unit == null) || (dat[k].unit == undefined)) {
			tableObj = {
				"title": dat[k].title
			};
		} else {
			tableObj = {
				"title": dat[k].title + "(" + dat[k].unit + ")"
			};
		}
		tableTitle.push(tableObj);
	}
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 新接口设备详情信息将dat转换为datatable格式的表格tbody */
/**																	 */
/** ---------------------------------------------------------------- */
function getDeviceTbodyDat(tablerow, dat) {
	for (var k = 0; k < dat.length; k++) {
		var tableObj = [];
		for (var j = 1; j < dat[k].field.length; j++) {
			tableObj.push(dat[k].field[j])
		}
		tablerow.push(tableObj);
	}

}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 设备生成excel下载地址并且跳转至此 */
/**																	 */
/** ---------------------------------------------------------------- */
function exportDeviceDetail(action) {
	console.log('2021/11/28')

	window.location.href = http_download_url_new(action);
}

function exportDeviceDetailEnergyEfficiency(action) {
	console.log('我来了')
	window.location.href = http_download_url_new(action);
}

function http_download_url_new(action) {
	action = action + "&i18n=" + getInterLang()
	var currUsr = storage_get_current_usr().dat;
	//
	var salt = new Date().getTime();
	var curHost = HTTP_INTERFACE_ADDRESS_NEW;
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	var url = curHost + "?sign=" + sign + "&salt=" + salt + "&token=" +
		currUsr.token + action;
	return url;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 电站增加与修改,输入国家,省和城市,合成 国家|省|城市 格式 */
/**																	*/
/** ---------------------------------------------------------------- */
function composePltArea(country, state, city) {
	var area = (country == "" ? "" : country) +
		(state == "" ? "" : ("|" + state)) +
		(city == "" ? "" : ("|" + city));
	return area;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 系统设置部分,生成子用户角色roleid-rolename字典 */
/**																	*/
/** ---------------------------------------------------------------- */
function queryDefinedRole(dict, defaultState) {
	http_normal_oper("&action=queryDefinedRole&default=" + defaultState +
		"&i18n=" + getInterLang(),
		function (err, dat) {
			if (err == WS_ERR_NONE) {
				for (var i = 0; i < dat.length; i++) {
					// 多语言环境下可能有的role没有相应语言下的描述,默认为none
					if ((dat[i].role == null) || (dat[i].role == undefined)) {
						dict[dat[i].id] = "none";
					} else {
						dict[dat[i].id] = dat[i].role;
					}
				}
			} else
				console.log("查询自定义角色失败" + err);
		},
		function () {
			console.log("查询自定义角色失败");
		});
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 系统设置部分-查询电站告警配置读取信息 */
/**																	*/
/** ---------------------------------------------------------------- */
function readMailReceiver2Arr(dat) {
	var mailArr = new Array();
	for (var i = 0; i < dat.length; i++) {
		// 电站名字和ID处理
		var plantId = new Array();
		var plantName = new Array();
		var warnArr = new Array();
		for (j = 0; j < dat[i].plants.length; j++) {
			plantId.push(dat[i].plants[j].key);
			plantName.push(dat[i].plants[j].val);
		}
		// 告警类型处理

		for (m = 0; m < dat[i].warnlev.length; m++) {
			var warn = disWarnsLevel(dat[i].warnlev[m]);
			warnArr.push(warn);
		}
		// 日月报接收处理
		var day = (dat[i].dailyr == true ? getMultiLangError("yes") :
			getMultiLangError("no"));
		var month = (dat[i].monthr == true ? getMultiLangError("yes") :
			getMultiLangError("no"));

		var oneMail = [dat[i].id, plantId, (i + 1), dat[i].recv, plantName,
			warnArr, day, month
		];
		mailArr.push(oneMail);
	}
	return mailArr;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 系统设置部分-角色管理--读取角色信息 */
/**																	*/
/** ---------------------------------------------------------------- */
function readRoleInfo2Arr(dat) {
	var roleArr = new Array();
	for (var i = 0; i < dat.length; i++) {
		var rolePower = new Array();
		var role = "";
		// 整合权限数组
		for (var j = 0; j < dat[i].power.length; j++) {

			rolePower.push(userPowerMultilang(dat[i].power[j]));
		}

		// 多语言情况下,可能某些角色没有相应描述,此时显示none
		if ((dat[i].role == null) || (dat[i].role == undefined)) {
			role = "none";
		} else {
			role = dat[i].role;
		}
		var oneRole = [dat[i].id, role, rolePower, fieldAutoDisp(dat[i].desc)];
		roleArr.push(oneRole);
	}

	return roleArr;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 告警事件--读取告警返回信息 */
/**																	*/
/** ---------------------------------------------------------------- */
function readPltWarns2Arr(dat) {
	var allInfo = new Array();
	var oneInfo = new Array();
	for (var i = 0; i < dat.length; i++) {
		var handle = ((dat[i].handle == 1) ? getMultiLangError("have_handled") :
			getMultiLangError("no_handle"));
		var level = disWarnsLevel(dat[i].level);
		var type = devtype2Cn(dat[i].devtype);
		oneInfo = [dat[i].id, dat[i].gts, level, dat[i].errcode, type,
			dat[i].sn, dat[i].alias, dat[i].desc, handle,
			fieldAutoDisp(dat[i].cts)
		];
		allInfo.push(oneInfo);
	}
	return allInfo;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 告警中判定告警级别,warning/error/fault */
/**																	 */
/** ---------------------------------------------------------------- */
function disWarnsLevel(type) {
	var level = "";
	if (type == "warning") {
		level = getMultiLangError("warning");
	} else if (type == "error") {
		level = getMultiLangError("error");
	} else {
		level = getMultiLangError("alarm_fault");
	}
	return level;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 系统日志--日志查询读取信息 */
/**																	*/
/** ---------------------------------------------------------------- */
function readSysLog2Arr(dat) {
	var allInfo = new Array();
	for (var i = 0; i < dat.length; i++) {
		oneInfo = [dat[i].action, dat[i].gts, dat[i].usr,
			fieldAutoDisp(dat[i].ip), dat[i].desc
		];
		allInfo.push(oneInfo);
	}
	return allInfo;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 读取采集器或者设备的固件信息,返回arr */
/**																	*/
/** ---------------------------------------------------------------- */
function loadColFwArr(dat) {
	var oneFw = new Array();
	var allFw = new Array();
	for (var i = 0; i < dat.length; i++) {
		var size = dat[i].size;
		var formatSize = (parseInt(dat[i].size) / 1024).toFixed(3) + "KBytes";
		// 注意fw名称需处理,是最后一个反斜杠之后的内容
		oneFw = [dat[i].id, dat[i].uid, (i + 1),
			(dat[i].firmware == undefined ? "" : splitColFwName(dat[i].firmware)), formatSize, dat[i].gts
		];
		allFw.push(oneFw);
	}
	return allFw;
}
// 将返回字符串最后一个反斜杠之后的内容,用于截取路径最后文件名称
function splitColFwName(str) {
	var pos = str.lastIndexOf('/') + 1;
	var newStr = str.substring(pos);
	return newStr;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 回到某个采集器下面的逆变器层 */
/**																	*/
/** ---------------------------------------------------------------- */
function back2InvSub() {
	if (IS_MIN)
		$("#deviceArea").load("/dev/miniInverterSub.html", null);
	else
		$("#deviceArea").load("/dev/inverterSub.html", null);
}
//回到电站告警列表
function backPlantAlarm() {
	loadHtml("plantAlarm", "/plant/plantAlarm.html");
}
//回到采集器列表
function back2ColList() {
	loadHtml("deviceArea", "collectorlist.html");
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 去除input空格 */
/**																	 */
/** ---------------------------------------------------------------- */
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 判断传入是否为未定义,如果不是则删除前后空格再返回值
String.prototype.trimStr = function () {

	if ((this == null) || (this == undefined))
		return null;
	else {
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 获取JS数组中的相同元素的名称和数量,ary[i]值,count-次数 */
/**																	 */
/** ---------------------------------------------------------------- */
function getSameEleCount(ary) {
	var res = []; // res 二维数维中保存了值和值的重复数
	ary.sort();
	for (var i = 0; i < ary.length;) {
		var count = 0;
		for (var j = i; j < ary.length; j++) {
			if (ary[i] == ary[j]) {
				count++;
			}
		}
		res.push([ary[i], count]);
		i += count;
	}
	return res;
}
/**url参数截取 */
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串   
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 生成二维码key,由0-9,a-Z组成,32位 */
/**																	*/
/** ---------------------------------------------------------------- */
function getDynamicQrKey() {
	code = "";
	var codeLength = 32;
	var selectChar = new Array("_", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b',
		'c', 'd', 'e', 'f', 'g', 'h', "i", 'j', 'k', 'l', 'm', 'n', 'o',
		'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
		'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
		'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	for (var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 63);
		code += selectChar[charIndex];
	}
	return code;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 生成二维码key,由0-9,a-Z组成,32位 */
/**																	*/
/** ---------------------------------------------------------------- */
function http_qrcode_oper(action, onSuccess, onError) {
	var url = HTTP_INTERFACE_ADDRESS + "qr?" + action;
	http_async_request(url, onSuccess, onError);
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 刷新主页面下拉列表 */
/**																	*/
/** ---------------------------------------------------------------- */
function refreshMainPlantList() {
	http_async_request_public(
		"&action=queryPlantsInfo",
		function (err, dat) /* 返回用户的电站列表. */ {
			$("#checkedPlant").text(getMultiLangError("plants_overview"));
			$("#plantlist ul").html("");
			if (err == WS_ERR_NONE) {
				var plantSum = "<li onclick='go2Main()'><a role='menuitem' tabindex='-1' href='#'>" +
					getMultiLangError("plants_overview") +
					"</a></li>" +
					"<li onclick='main2AddPlant()'><a role='menuitem' tabindex='-1' href='#'>" +
					getMultiLangError("add_plant") + "</a></li>";
				$("#plantlist ul").append(plantSum);
				var plant = dat.info;
				for (var i = 0; i < plant.length; i++) {
					var item = "<li onclick='getPlantId(this.id)' id=" +
						"plant_" +
						plant[i].pid +
						"><a role='menuitem' tabindex='-1' href='#'' > " +
						plant[i].pname + "</a></li>";
					$("#plantlist ul").append(item);
				}
			} else {
				var plantSum = "<li onclick='go2Main()'><a role='menuitem' tabindex='-1' href='#'>" +
					getMultiLangError("plants_overview") +
					"</a></li>"
				$("#plantlist ul").append(plantSum);
			}
			$("#checkedPlant").text(getMultiLangError("plants_overview"));
			loadHtml("mainArea", "/plant/plantlist.html");
		},
		function () {
			console.log("主页面刷新下拉列表失败");
		});
}

// 点击电站总览
function go2Main() {
	$("#checkedPlant").text(getMultiLangError("plants_overview"));
	loadHtml("mainArea", "/plant/plantlist.html");
}
// 点击增加电站
function main2AddPlant() {
	$("#checkedPlant").text(getMultiLangError("add_plant"));
	loadHtml("mainArea", "/plant/addPlant.html")
	//	$("#mainArea").load("/plant/addPlant.html", null);
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/** 批量删除设备post */
/**                                                                  */
/** ---------------------------------------------------------------- */
function delDevSnBatch_Post(action, devices, operOnSuccess, operOnError) {
	var currUsr = storage_get_current_usr().dat;
	var now_pwdsha1 = currUsr.secret;
	var now_token = currUsr.token;
	//
	var salt = new Date().getTime();
	var sign = hex_sha1(salt + now_pwdsha1 + now_token + action);
	var url = HTTP_INTERFACE_ADDRESS + "?sign=" + sign + "&salt=" + salt +
		"&token=" + now_token + action;
	var body = JSON.stringify({
		devices: devices
	});
	http_async_post(url, body, operOnSuccess, operOnError);
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 采集器续期支付 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function pingPay(action, amount, channel, operOnSuccess, operOnError) {
	var currUsr = storage_get_current_usr().dat;
	var now_pwdsha1 = currUsr.secret;
	var now_token = currUsr.token;
	//
	var salt = new Date().getTime();
	var sign = hex_sha1(salt + now_pwdsha1 + now_token + action);
	var url = HTTP_INTERFACE_ADDRESS + "pay?sign=" + sign + "&salt=" + salt +
		"&token=" + now_token + action;
	var body = JSON.stringify({
		channel: channel,
		amount: amount
	});
	http_async_post(url, body, operOnSuccess, operOnError);
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** ajax异步请求抽象.public */
/**                                                                  */
/** ---------------------------------------------------------------- */

function http_async_request_public(action, onSuccess, onError) {
	action = action + "&i18n=" + getInterLang() + "&lang=" + getInterLang()
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();

	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action.replace(/#/g, "%23").replace(/'/g, "%27").replace(/ /g, '%20'));
	httpReplace(action)

	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" +
		salt + "&token=" + currUsr.token + action.replace(/#/g, "%23").replace(/'/g, "%27").replace(/ /g, '%20');
	$.ajax({
		async: true,
		type: "get",
		url: url,
		dataType: "json",
		//		jsonp: "callback",
		//              jsonpCallback: "success_jsonpCallback",
		success: function (data, status) {

			var json = eval(data);

			//			var action1  = "&action=data/add"
			//			console.log(action.split("&"))
			//			console.log(action.split("&")[1].split("=")[1])
			//			var obj ={
			//				name:action.split("&")[1].split("=")[1],
			//				val:JSON.stringify(data),
			//				label:"数据自动导入无标签"
			//			}
			//			http_async_request_vss(action1,obj,function(data){
			//				
			//				console.log("添加进vss成功")
			//				
			//			})

			onSuccess(json.err, json.dat, json.desc);
		},
		error: onError
	});
}




//同步数据到vss函数
function http_async_request_vss(action, data, onSuccess, onError) {
	var currUsr = {
		secret: "132b3d68927ebfe5c39768226cf853d586067174",
		token: "7e002d2a42160667cf813ee6b80577f2d9748579c2d538cd6d7dda4d047bfebc",

	};
	var salt = new Date().getTime();
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);

	var url = document.location.protocol +"//vss.eybond.com/vss/api?sign=" + sign + "&salt=" +
		salt + "&token=" + currUsr.token + action.replace(/#/g, "%23");

	$.ajax({
		async: true,
		type: "post",
		url: url,
		dataType: "json",
		data: data,
		//              jsonpCallback: "success_jsonpCallback",
		success: function (data, status) {
			var json = eval(data);
			onSuccess(json);
		},
		error: onError
	});
}

function http_async_request_dis05(action, onSuccess, onError) {
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);

	var url = "http://api.shinemonitor.com/dis05/?sign=" + sign + "&salt=" +
		salt + "&token=" + currUsr.token + action.replace(/#/g, "%23");

	$.ajax({
		async: true,
		type: "get",
		url: url,
		dataType: "jsonp",
		jsonp: "callback",
		//              jsonpCallback: "success_jsonpCallback",
		success: function (data, status) {
			var json = eval(data);
			onSuccess(json.err, json.dat, json.desc);
		},
		error: onError
	});
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** ajax同步请求抽象.ws打开新窗口 */
/**                                                                  */
/** ---------------------------------------------------------------- */

function http_async_request_openWindow(action, name, pid) {

	action = action + "&i18n=" + getInterLang()
	var currUsr = storage_get_current_usr().dat;
	var salt = new Date().getTime();
	var sign = hex_sha1(salt + currUsr.secret + currUsr.token + action);
	httpReplace(action)
	var url = HTTP_INTERFACE_ADDRESS_NEW + "?sign=" + sign + "&salt=" +
		salt + "&token=" + currUsr.token + action.replace(/#/g, "%23");

	$.ajax({
		async: false,
		type: "get",
		url: url,
		dataType: "json",

		success: function (data, status) {
			var json = eval(data);
			var err = json.err;
			var dat = json.dat;
			if (err == 0) {

				storage_browse_in(decodeURI(name), dat, storage_i18n_get_id());
				var index = storage_get().accounts.length - 1
				if (pid == "" || pid == undefined) {
					if (dat.role === 0 || dat.role === 5 || dat.role === 3) {
						newOpenWindow("/solarmonitor.github.io/main.html?" + (new Date().getTime()) + "&index=" + index);
					} else if (dat.role == 1 || dat.role == 2) {
						newOpenWindow("/managesystemnew/index.html?" + (new Date().getTime()) + "&index=" + index);
					}
				} else {
					newOpenWindow("/solarmonitor.github.io/main.html?forwardplantid=" + pid + "&index=" + index);
				}
			} else {
				alert(getErrorCodeDesc2(GET_ERR_DESC,"err"+err));
			}
		}
	});
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** 打开新窗口跳转 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function newOpenWindow(href) {
	var link = document.createElement('a')
	link.target = '_blank'
	link.href = href
	link.id =
		document.body.appendChild(link)
	link.click()

}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** ajax异步请求抽象.post */
/**                                                                  */
/** ---------------------------------------------------------------- */

function http_async_post(url, body, operOnSuccess, operOnError) {
	$.ajaxQueue({
		async: true,
		type: "post",
		url: url,
		dataType: "json",
		data: body,
		headers: {
			'Content-Type': 'application/json'
		},
		success: function (data, status) {
			var json = eval(data);
			operOnSuccess(json.err, json.dat);
		},
		error: operOnError
	});
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/** ajax异步请求抽象.GET */
/**                                                                  */
/** ---------------------------------------------------------------- */
function http_async_request(url, onSuccess, onError) {
	$.ajaxQueue({
		async: true,
		type: "get",
		url: url,
		dataType: "jsonp",
		jsonp: "callback",
		jsonpCallback: "success_jsonpCallback",
		success: function (data, status) {
			var json = eval(data);
			onSuccess(json.err, json.dat, json.desc);
		},
		error: onError
	});
}

function http_async_request_new(url, onSuccess, onError) {

	$.ajaxQueue({
		async: true,
		type: "get",
		url: url,
		dataType: "json",
		//		jsonp: "callback",
		//		jsonpCallback: "success_jsonpCallback",
		success: function (data, status) {
			var json = eval(data);
			if (json.err == WS_ERR_NONE)
				onSuccess(json.err, json.dat);
			else
				onError(json.err, json.desc);
		},
		error: function () {
			onError(WS_ERR_SYSTEM_EXCEPTION, "WS_ERR_SYSTEM_EXCEPTION");
		}
	});
}

function showModal(err, desc) {
	if (err == 26 || err == 10) {
		layer.open({
			type: 1,
			shadeClose: true, //点击遮罩关闭
			content: '<div id="motai">无内容<\/div>',
			btn: ['关闭'],
			end: function () {
				$('.loadingimg').remove()
			}
		});
	} else {

		layer.open({
			type: 1,
			shadeClose: true, //点击遮罩关闭
			content: '<div id="motai">错误代码: ' + err + '(' + desc + ')<\/div>',
			btn: ['关闭'],
			end: function () {
				$('.loadingimg').remove()
			}
		});
	}
}

function showModa2(err, desc) {
	if (err == 26 || err == 10) {} else {

		layer.open({
			type: 1,
			shadeClose: true, //点击遮罩关闭
			content: '<div id="motai">错误代码: ' + err + '(' + desc + ')<\/div>',
			btn: ['关闭'],
			end: function () {
				$('.loadingimg').remove()
			}
		});
	}
}

function noLoginStopCloud() {

	try {
		if (CAMERA_DEVICEID != undefined && CAMERA_DEVICEID !== null) {

			$.post("http://ipc.eybond.com:8080/apiv2/StopCloudRtmpActionNoAuth.php", {
				//				"username": user,
				//				"access_token": token,
				//				"state": state,
				"deviceid": CAMERA_DEVICEID
			}, function (data) {
				console.log("停止设备推流")
				console.log(data)
			})
		}
	} catch (e) {

	}
	//	debugger
}