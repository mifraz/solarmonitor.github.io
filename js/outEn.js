/** ---------------------------------------------------------------- */
/**                 							                     */
/**  					切换其他语言注册登录语言栏		                 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function detectLangIndexEn() {
	if (!storage_check_login())  	/* 未登录. */
		return;	
	var langId = storage_get().lang;
	if (langId == I18N_EN_US)
		changLangIndexEnImg("assets/images/banner/banner_us.png", "English");
	else if (langId == I18N_SE)
		changLangIndexEnImg("assets/images/banner/banner_sw.png", "Svenska");
	else
		changLangIndexEnImg("assets/images/banner/banner_cn.png", "中文");
}

function changLangIndexEn(value) {
	$(".current-lang-lay1").each(function () {
		$(this).text(value);
	});
	storage_i18n_set(value);
	if (value == "中文") {
		changeLanguage("cn");
		changLangIndexEnImg("assets/images/banner/banner_cn.png", value);
	}
	else if (value == "English") {
		changeLanguage("en");
		changLangIndexEnImg("assets/images/banner/banner_us.png", value);
	}
	else if (value == "Polski") {
		changeLanguage("pl");
		changLangIndexEnImg("assets/images/banner/banner_pl.jpg", value);
	}
	else if (value == "中文繁体") {
		changeLanguage("hk");
		changLangIndexEnImg("assets/img/banner_cn.png", value);
	}
	else if (value == "India") {
		changeLanguage("in");
		changLangIndexEnImg("assets/images/banner/banner_in.png", value);
	}
	else if (value == "TiếngViệt") {
		changeLanguage("vi");
		changLangIndexEnImg("assets/images/banner/banner_yn.png", value);
	}
	else if (value == "Indonesian") {
		changeLanguage("idn");
		changLangIndexEnImg("assets/images/banner/banner_idn.jpg", value);
	}
	else {
		changeLanguage("se");
		changLangIndexEnImg("assets/images/banner/banner_sw.png", value);
	}
}

function changLangIndexEnImg(imgsrc, name) {
	$(".current-lang-lay1").each(function () {
		$(this).text(name);
	});
	$(".nation-flag-lay1").each(function () {
		$(this).attr("src", imgsrc);
	});

	$(".nation-flag-lay2").each(function () {
		$(this).attr("src", "../" + imgsrc);
	});
}

