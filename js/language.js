/** ---------------------------------------------------------------- */
/**  加载任何一个页面,检测用户语言                                      */
/**  如果有则按照客户自定义显示,没有不操作html,但是必须设置langId		 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function checkUserCurLang() {
	var lang = storage_i18n_get_id();
	if(lang == I18N_EN_US)
		changeLanguage("en");
	else if(lang == I18N_SE)
		changeLanguage("se");
	else if(lang == I18N_Po)
		changeLanguage("po");
	else if(lang == I18N_ES)
		changeLanguage("es");
	else if(lang == I18N_PL)
		changeLanguage("pl");
	else if(lang == I18N_HK)
		changeLanguage("hk");
	else if(lang == I18N_IN)
	// 印度
		changeLanguage("in");
	else if(lang == I18N_VI)
	// 越南
		changeLanguage("vi");
	else if(lang == I18N_IDN)
	// 印尼
		changeLanguage("idn");
	else
		changeLanguage("cn");
}

//主页面切换语言
function changLangMain(value) {
	$("#mainCurLang").text(value);
	setUserCurLang(value);
	window.location.reload();
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/**  遍历用户选中语言的lang属性,将其对应语言一一赋值					*/
/**                                                                  */
/** ---------------------------------------------------------------- */
LANGJSON = {};

function changeLanguage(lang) {
	$.ajax({
		type: "get",
		url: "/lang/" + lang + ".json",
		async: false,
		success: function(data, status) {
			LANGJSON = data.string

			$.each(eval(data.string), function(key, value) {
			 if(lang != "cn") {
				$(".ptHide").hide();
			}
				$("[lang=" + key + "]").text(value).attr("title",value)
	 
			});
			//				if($("#" + LOADID).attr("class") == "tab-pane" ){
			// 
			//		}
			//		else{
			////			console.log("!=tab-pane active")
			//			$("#" + LOADID).show()
			//		}
			//				console.log("LOADID"+LOADID)
			//				$("#" + LOADID).css("display","block")
			//				$('#'+LOADID).show()
		},
		error: function(data, status) {
			console.log(data)
		}
	})
};
/** ---------------------------------------------------------------- */
/**                                                                  */
/**  用户切换语言后设置相应参数										*/
/**                                                                  */
/** ---------------------------------------------------------------- */
function setUserCurLang(value) {
	$("#regCurLang").text(value);
	if(value == "中文") //中文-0
	{
		storage_i18n_set(value);
		changeLanguage("cn");
		return;
	} else if(value == "English") //英语-1
	{
		storage_i18n_set(value);
		changeLanguage("en");
		return;
	} else if(value == "Svenska") //瑞典-1
	{
		storage_i18n_set(value);
		changeLanguage("se");
		return;
	} else if(value == "Español") //x西班牙语-1
	{
		storage_i18n_set(value);
		changeLanguage("es");
		return;
	} else if(value == "Polski") //波兰语-1
	{
		storage_i18n_set(value);
		changeLanguage("pl");
		return;
	}  else if(value == "中文繁体") //中文繁体-1
	{
		storage_i18n_set(value);
		changeLanguage("hk");
		return;
	}  else if(value == "India") //印度语
	{
		storage_i18n_set(value);
		changeLanguage("in");
		return;
	}  else if(value == "TiếngViệt") //越南语
	{
		storage_i18n_set(value);
		changeLanguage("vi");
		return;
	} else if(value == "Indonesian") //印尼
	{
		storage_i18n_set(value);
		changeLanguage("idn");
		return;
	}else {
		storage_i18n_set(value);
		changeLanguage("po");
	}
}

/** ---------------------------------------------------------------- */
/**          								                          */
/** 根据langID确定发送给后台lang参数									 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function getInterLang() {
	var lang = storage_i18n_get_id();
	if(lang == I18N_EN_US)
		return "en_US";
	if(lang == I18N_SE)
		return "sv_SE";
	if(lang == I18N_Po)
		return "pt_BR";
	if(lang == I18N_ES)
		return "es_ES";
	if(lang == I18N_PL)//波兰语
		return "pl_PL";
	if(lang == I18N_HK)//波兰语
		return "zh_HK";
	if(lang == I18N_IN)//印度语
		return "in_IN";
	if(lang == I18N_VI)//越南语
		return "vi_VN";
	if(lang == I18N_IDN)//印尼语
	    return "in_ID";
	return "zh_CN";
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/**  用户权限部分,传入power id返回对应语言环境下的描述					*/
/**                                                                  */
/** ---------------------------------------------------------------- */
function userPowerMultilang(powerid) {
	var power = parseInt(powerid);
	var authArr = [
		"auth_modify_account",
		"auth_have_sub",
		"auth_add_plant",
		"auth_del_plant",
		"auth_modify_plant",
		"auth_add_col2plant",
		"auth_del_col2plant",
		"auth_add_col",
		"auth_modify_col",
		"auth_del_col",
		"auth_modify_dev",
		"auth_del_dev",
		"auth_alram_sms",
		"auth_alram_mail",
		"auth_custom_role",
		"auth_user_self_login",
		"auth_qr_login",
		"auth_define_device_view",

		"auth_ctr_pn",
		"auth_take_gujian",
		"auth_ctr_dev",
		"auth_dev_take",
		"auth_browser_vplant",
		"auth_modify_vplant"
	];http://192.168.1.9/Repository/Product/Server/DessMonitor/Frontend
	return getMultiLangError(authArr[power]);
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/**  币种部分,传入power id返回对应语言环境下的描述						*/
/**                                                                  */
/** ---------------------------------------------------------------- */
function currencyMultilang(cur) {
	switch(cur) {
		case "￥":
			return getMultiLangError("rmb");
		case "$":
			return getMultiLangError("usd");
		case "€":
			return getMultiLangError("eur");
		case "$A":
			return getMultiLangError("aud");
		case "¥":
			return getMultiLangError("rmb");
		case "£":
			return getMultiLangError("gbp");
		case "HK$":
			return getMultiLangError("hkd");
		case "Kr":
			return getMultiLangError("sek");
		case "₹":
			return getMultiLangError("Rs");
		case "R$":
			return getMultiLangError("Real");
		case "Mex$":
			return getMultiLangError("mxn");
		case "฿":
			return getMultiLangError("tzb");
	}
}

WS_USR_POWER_MAP = new Array();
WS_USR_POWER_MAP[0] = "auth_modify_account",
	WS_USR_POWER_MAP[1] = "auth_have_sub",
	WS_USR_POWER_MAP[2] = "auth_add_plant",
	WS_USR_POWER_MAP[3] = "auth_del_plant",
	WS_USR_POWER_MAP[4] = "auth_modify_plant",
	WS_USR_POWER_MAP[5] = "auth_add_col2plant",
	WS_USR_POWER_MAP[6] = "auth_del_col2plant",
	WS_USR_POWER_MAP[7] = "auth_add_col",
	WS_USR_POWER_MAP[8] = "auth_modify_col",
	WS_USR_POWER_MAP[9] = "auth_del_col",
	WS_USR_POWER_MAP[10] = "auth_modify_dev",
	WS_USR_POWER_MAP[11] = "auth_del_dev",
	WS_USR_POWER_MAP[12] = "auth_alram_sms",
	WS_USR_POWER_MAP[13] = "auth_alram_mail",
	WS_USR_POWER_MAP[14] = "auth_custom_role",
	WS_USR_POWER_MAP[15] = "auth_user_self_login",
	WS_USR_POWER_MAP[16] = "auth_qr_login",
	WS_USR_POWER_MAP[17] = "auth_define_device_view"
WS_USR_POWER_MAP[18] = "auth_ctr_pn",
	WS_USR_POWER_MAP[19] = "auth_take_gujian",
	WS_USR_POWER_MAP[20] = "auth_ctr_dev",
	WS_USR_POWER_MAP[21] = "auth_dev_take",
	WS_USR_POWER_MAP[22] = "auth_browser_vplant",
	WS_USR_POWER_MAP[23] = "auth_modify_vplant"

/** ---------------------------------------------------------------- */
/**                                                                  */
/**所有js生成错误提示的多语言实现函数,0-中文,1-英语,2-瑞典语  ,3-葡萄牙语（巴西）	4-西班牙语（巴西）	5-波兰语   6-中文繁体	7-印度语	8-越南语 9-印尼语 */
/**                                                                  */
/** ---------------------------------------------------------------- */

WS_ERR_DYNAMIC_MAP = new Array();
WS_ERR_DYNAMIC_MAP = [{
	"key": "datalogger_type",
	"val": ["数采器类型", "Datalogger Type", "Datalogger Type", "Datalogger Type", "Tipo de sensor","Typ urządzenia monitorującego","數採器類型", "Datalogger Type","Loại logger","Jenis Datalogger"]
}, {
	"key": "update_frm",
	"val": ["格式错误，请上传.bin或.hex格式文件", "Wrong format, please upload. Bin or .hex Wrong file", "Wrong format, please upload. Bin or .hex Wrong file", "Wrong format, please upload. Bin or .hex Wrong file", "Errores de formato, por favor.","Format jest nieprawidłowy. Prześlij plik w formacie .bin lub .hex","格式錯誤，請上傳.bin或.hex格式文件", "Wrong format, please upload. Bin or .hex Wrong file","Định dạng sai, vui lòng tải lên tệp định dạng .bin hoặc .hex","Format salah, harap unggah. Bin atau .hex File salah"]
}, {
	"key": "no_record",
	"val": ["无记录", "No Record", "inga uppgifter", "Não há registros", "No hay registros.","Brak danych","無記錄", "No Record","không có hồ sơ","Tidak ada catatan"]
}, {
	"key": "dev_col",
	"val": ["数据采集器", "Datalogger", "Data PIN", "Datalogger", "Coleccionista","Datalog","數據採集器", "Datalogger","thu thập dữ liệu","Datalog"]
}, {
	"key": "dev_inv",
	"val": ["逆变器", "Inverter", "Växelriktare", "Inversor", "Transformador","Inwerter","逆變器", "Inverter","Biến tần","Inverter"]
}, {
	"key": "dev_env",
	"val": ["环境监测仪", "Environ-monitor", "Environ-monitor", "Environ-monitor", "Monitor de medio ambiente","Monitor środowiska","環境監測儀", "Environ-monitor","Giám sát môi trường","Monitor lingkungan"]
}, {
	"key": "dev_meter",
	"val": ["智能电表", "Electric-meter", "smarta mätare", "Electric-meter", "Relámpago","Inteligentny miernik","智能電錶", "Electric-meter","Thước đo thông minh","Meteran listrik"]
}, {
	"key": "dev_box",
	"val": ["汇流箱", "Combiner-box", "Combiner-box", "Combiner-box", "Caja de cambio","Skrzynka przylaczeniowa","匯流箱", "Combiner-box","Hộp đựng mối nối hai mạch điện","Kotak kombinasi"]
}, {
	"key": "dev_battery",
	"val": ["电池组", "Battery", "Battery", "Battery", "Batería","Akumulator","電池組", "Battery","Ắc quy","Baterai"]
}, {
	"key": "dev_charger",
	"val": ["充电器", "Charger", "Charger", "Charger", "Cargador","Ładowarka","充電器", "Charger","bộ sạc","Pengisi daya"]
}, {
	"key": "dev_device",
	"val": ["设备", "Device", "Device", "Device", "Equipo","Urządzenie","設備", "Device","thiết bị","Alat"]
}, {
	"key": "dev_controller",
	"val": ["储能机", "Controller", "Controller", "Controller", "Máquinas de almacenamiento","Magazyn energii","儲能機", "Controller","Máy lưu trữ năng lượng","Kontroler"]
}, {
	"key": "dev_streetlamp",
	"val": ["路灯", "streetlamp", "streetlamp", "streetlamp", "Farola","streetlamp","路燈", "streetlamp","đèn đường","lampu jalan"]
}, {
	"key": "dev_waterpump",
	"val": ["水泵", "waterpump", "waterpump", "waterpump", "Pompa wodna","waterpump","水泵", "waterpump","Máy bơm nước","Pompa air"]
}, {
	"key": "dev_UPS",
	"val": ["UPS", "UPS", "UPS", "UPS", "UPS","UPS","UPS", "UPS","UPS","UPS"]
}, {
	"key": "dev_islanding",
	"val": ["防孤岛装置", "Anti islanding device", "Anti islanding device", "Anti islanding device", "Unidad antiaislamiento","Urzadzenie zapiobiegajace wyspowaniu","防孤島裝置", "Anti islanding device","Thiết bị chống đảo","Perangkat anti pulau"]
},  {
	"key": "dev_mini_inverter",
	"val": ["微型逆变器", "Microinverter", "Microinverter", "Microinverter", "Microinverter","Mikroinwerter","微型逆變器", "Microinverter","Biến tần siêu nhỏ","Microinverter"]
},{
	"key": "collector_no",
	"val": ["数采器编号", "Datalogger PN", " Datalog PIN-kod", "Datalogger PN", "Número de identificación","Datalogger PN","數採器編號", "Datalogger PN","Số logger","Datalog PN"]
}, {
	"key": "edit_device_sn",
	"val": ["设备序列号", "Device Serial Number", "Device Serial Number", "Número de série", "Número de serie del equipo","Numer seryjny urządzenia","設備序列號", "Device Serial Number","nghĩ ra số sê-ri","Nomor Seri Perangkat"]
}, {
	"key": "edit_device_alias",
	"val": ["设备别名", "Device Alias", "Device Alias", "Dispositivo", "Nombre del equipo","Alias urządzenia","設備別名", "Device Alias","Bí danh thiết bị","Alias ​​Perangkat"]
}, {
	"key": "collector_name",
	"val": ["数采器名称", "Datalog Name", "Datalog Name", "O nome do datalogger", "Nombre del sensor","Datalog Name","數採器名稱", "Datalog Name","Tên logger","Nama Datalog"]
}, {
	"key": "datog_restart_success",
	"val": ["数采器重启成功", "Datalog Restart Success", "Datalog Restart Success", "Datalogger Restart Success", "Los senadores se reinician.","Urządzenie monitorujące zostało uruchomione ponownie","數採器重啟成功", "Datalog Restart Success","Trình thu thập dữ liệu khởi động lại thành công","Berhasil Memulai Ulang Datalog"]
}, {
	"key": "datog_restart_failed",
	"val": ["数采器重启失败", "Datalog Restart Failed", "Datalog Restart Failed", "Datalogger Restart Failed", "La reapertura de varios lanzadores falló.","Ponowne uruchomienie urządzenia monitorującego nie powiodło się","數採器重啟失敗", "Datalog Restart Failed","Trình thu thập dữ liệu không khởi động lại được","Restart Datalog Gagal"]
}, {
	"key": "plant_energy",
	"val": ["发电量", "energy", "produktionskapacitet", "Energia", "Producción de energía","Wytwarzanie energii","發電量", "energy","Sản xuất điện","energi"]
}, {
	"key": "save_as_image",
		"val": ["保存为图片", "Save as image", "Spara som bild", "Salvar como imagem", "Guardar como imagen","Zapisz jako obraz","保存為圖片", "Save as image","Lưu lại như hình","Simpan sebagai gambar"]
}, {
	"key": "power",
	"val": ["功率", "Power", "ström", "Potência", "Potencia","Moc","功率", "Power","quyền lực","Kekuasaan"]
}, {
	"key": "plant_normal",
	"val": ["正常", "normal", "normal", "Normal", "Normal","Zwykły","正常", "normal","OK","normal"]
}, {
	"key": "plant_abnormal",
	"val": ["告警", "Fault", "fel", "Falha", "Alguacil","Alarm","告警", "Fault","Alarm","Alarm"]
	}, {
		"key": "report_downloadable",
		"val": ["可下载", "Downloadable", "Descargable", "Downloadable", "Nedladdningsbara ","Do pobrania","可下載", "Downloadable","Có thể tải xuống","Dapat diunduh"]
	}, {
		"key": "download",
		"val": ["下载", "Download", "Hämta", "Baixar", "Descargar ","Pobierz","下載", "Download","Tải xuống","Unduh"]
	}, {
		"key": "report_notready",
		"val": ["未生成，请刷新", "Not generated, please refresh", "Ej genererad, uppdatera", "Não gerado, por favor atualize", "No generado, por favor actualice","Niewygenerowany, odśwież","未生成，請刷新", "Not generated, please refresh","Không được tạo, vui lòng làm mới","Tidak dibuat, harap segarkan"]
	}, {
		"key": "confirm_del_report",
		"val": ["确定删除报表？", "Are you sure to delete the report?", "Bekräfta raderingsrapport?", "Confirme a exclusão do relatório?", "¿Confirmar eliminar informe?","Czy na pewno chcesz usunąć raport?","確定刪除報表？", "Are you sure to delete the report?","Bạn có chắc chắn muốn xóa báo cáo?","Apakah Anda yakin akan menghapus laporan tersebut?"]
	}, {
		"key": "refresh",
		"val": ["刷新", "Refresh", "Uppdatera", "Atualizar", "Refrescar","Odśwież","刷新", "Refresh","Làm tươi","Menyegarkan"]
	}, {
	"key": "plant_no_device",
	"val": ["无设备", "no devices", "Ingen enhet", "Nenhum dispositivo", "No hay equipo.","Brak urządzeń","無設備", "no devices","Không có thiết bị","tidak ada perangkat"]
}, {
	"key": "plant_attention",
	"val": ["提醒", "Attention", "Attention", "Attention", "Recordatorio","Przypomnienie","提醒", "Attention","nhắc lại","Peringatan"]
}, {
	"key": "status_normal",
	"val": ["正常", "Normal", "Normal", "Normal", "Normal","Zwykły","正常", "Normal","OK","Normal"]
}, {
	"key": "status_standby",
	"val": ["待机", "Standby", "Standby", "Standby", "Pendiente","Czuwanie","待機", "Standby","Đứng gần","Mesin siaga"]
}, {
	"key": "status_offline",
	"val": ["离线", "Offline", "Offline", "Offline", "Línea","Offline","離線", "Offline","Offline","Off-line"]
}, {
	"key": "status_warn",
	"val": ["告警", "Warning", "Varning", "Atenção", "Alguacil","Alarm","告警", "Warning","Alarm","Alarm"]
}, {
	"key": "stauts_fault",
	"val": ["故障", "Fault", "fel", "Falha", "Falla","Niepowodzenie","故障", "Fault","sự cố","Malfungsi"]
}, {
	"key": "add_plant",
	"val": ["增加电站", "Add new plant", "Add new plant", "Adicionar nova planta", "Aumento de la estación eléctrica","Dodaj nowy system PV","增加電站", "Add new plant","Tăng trạm điện","Tambahkan tanaman baru"]
}, {
	"key": "user_pwd_wrong",
	"val": ["用户名和密码不匹配", "Username and password do not match", "Användarnamn och lösenord stämmer inte överens", "Usuário e senha não correspondem", "Los nombres de usuario y contraseñas no coinciden.","Nazwa użytkownika i hasło nie pasują","用戶名和密碼不匹配", "Username and password do not match","Tên người dùng và mật khẩu không phù hợp","Nama pengguna dan kata sandi tidak cocok"]
}, {
	"key": "unknown_error",
	"val": ["未知错误", "Unknown error", "okänt fel", "Erro desconhecido", "Error desconocido","Nieznany błąd","未知錯誤", "Unknown error","lỗi không rõ","Kesalahan yang tidak diketahui"]
}, {
	"key": "noName_enter",
	"val": ["用户名为空,请重新输入", "Username is empty, please re-enter", "Användarnamn tomt, vänligen ange", "Nome de usuário está vazio, por favor, digite novamente", "El nombre del usuario está vacío, por favor, introduzca una nueva entrada.","Nazwa użytkownika jest pusta, wprowadź ponownie","用戶名為空,請重新輸入", "Username is empty, please re-enter","Tên đăng nhập trống, vui lòng nhập lại","Nama pengguna kosong, harap masukkan kembali"]
}, {
	"key": "pwd_wrong",
	"val": ["密码错误", "wrong password", "Fel lösenord", "Senha incorreta", "Contraseña incorrecta","Błędne hasło","密碼錯誤", "wrong password","sai mật khẩu","Kegagalan verifikasi kata sandi"]
}, {
	"key": "noPwd_enter",
	"val": ["密码为空,请重新输入", "Password is empty, please re-enter", "Lösenord är tom, var vänlig ange", "Senha está vazia, por favor, digite novamente", "La contraseña está vacía, por favor, introduzca una nueva entrada.","Hasło jest puste, wprowadź ponownie","密碼為空,請重新輸入", "Password is empty, please re-enter","Mật khẩu trống, vui lòng nhập lại","Kata sandi kosong, harap masukkan kembali"]
}, {
	"key": "enter_iden",
	"val": ["请输入验证码!", "Please enter verification code!", "Ange verifieringskoden !", "Por favor, digite o código de verificação", "¡Introduzca el Código de certificación, por favor!","Wprowadź kod weryfikacyjny","請輸入驗證碼", "Please enter verification code!","vui lòng nhập mã xác nhận!","Harap masukkan kode verifikasi"]
}, {
	"key": "iden_wrong",
	"val": ["验证码输入错误!", "incorrect verification code!", "Verifieringskod inmatningsfel!", "Código de verificação está incorreto!", "¡Error de entrada del Código de certificación!","Nieprawidłowy kod weryfikacyjny","驗證碼輸入錯誤", "incorrect verification code!","Mã xác minh không chính xác","kode verifikasi salah"]
}, {
	"key": "guest_account",
	"val": ["vplant", "vplant", "vplant", "vplant", "Vplant","Vplant","Vplant", "vplant", "vplant", "vplant"]
}, {
	"key": "col_format_error",
	"val": ["采集器序号格式有误", "Datalog PN formatted incorrectly", "PIN-kod fel format", "SN do Datalogger está incorreto", "El número de serie del colector es incorrecto.","Format numeru seryjnego urządzenia monitorującego jest nieprawidłowy.","採集器序號格式有誤", "Datalog PN formatted incorrectly","Định dạng của số sê-ri của bộ sưu tập không chính xác","Datalog PN tidak diformat dengan benar"]
}, {
	"key": "user_existed",
	"val": ["该用户已经被注册过了，请重新输入用户名", "This user has already been registered, please re-enter new username.", "Den här användaren har redan registrerats, vänligen ange ditt användarnamn", "Esse usuário já foi cadastrado, por favor, digite um novo.", "El usuario ya ha sido registrado, por favor reintroduzca el nombre de usuario","Użytkownik został już zarejestrowany, wprowadź inną nazwę użytkownika","該用戶已經被註冊過了，請重新輸入用戶名", "This user has already been registered, please re-enter new username.","Người dùng đã được đăng ký, vui lòng nhập lại tên người dùng","Pengguna ini telah terdaftar, silakan masukkan kembali nama pengguna baru"]
}, {
	"key": "duplicate_sn_reg",
	"val": ["采集器序号已经被注册过了，请输入新的序号!", "Datalog PN has been already registered, please enter a new datalog pn!", "PIN-kod är redan är registrerad, ange ett nytt nummer!", "Este datalogger já foi registrado, por favor, digite um novo Datalogger.", "¡El número de serie del colector ya ha sido registrado, por favor introduzca un nuevo número de serie!","Numer seryjny urządzenia monitorującego został już zarejestrowany. Wprowadź inny numer seryjny.","採集器序號已經被註冊過了，請輸入新的序號", "Datalog PN has been already registered, please enter a new datalog pn!","Số sê-ri của bộ sưu tập đã được đăng ký, vui lòng nhập số sê-ri mới!","Datalog PN sudah terdaftar, masukkan datalog pn baru"]
}, {
	"key": "plants_overview",
	"val": ["电站总览", "Plants Overview", "Anläggning Översikt", "Visão geral das Plantas", "Vista general","Przegląd systemu PV","電站總覽", "Plants Overview","Tổng quan về trạm điện","Sekilas Tanaman"]
}, {
	"key": "plant_overview",
	"val": ["电站总览", "Plant Overview", "Anläggning Översikt", "Visão geral das Plantas", "Vista general","Przegląd systemu PV","電站總覽", "Plant Overview","Tổng quan về trạm điện","Sekilas Tanaman"]
}, {
	"key": "plant_status",
	"val": ["电站状态", "Plant status", "Anläggnings Status", "Status da Planta", "Estado","Stan systemu PV","電站狀態", "Plant status","Tình trạng trạm điện","Status tanaman"]
}, {
	"key": "plant_current_power",
	"val": ["当前功率", "Current power", "Aktuell effekt", "Potência instantânea", "Potencia actual","Aktualna moc","當前功率", "Current power","Công suất hiện tại","Daya saat ini"]
}, {
	"key": "today_energy",
	"val": ["今日发电", "Today energy", "Dagens produktion", "Energia Hoje", "Generación de energía hoy","Ilość energii wytworzonej w dniu dzisiejszym","今日發電", "Today energy","Sản xuất điện ngày nay","Energi hari ini"]
}, {
	"key": "full_hours",
	"val": ["满发小时", "Full hours", "Full hours", "Full hours", "Full hours","Full hours","滿發小時數", "Full hours","Toàn giờ","Satu jam penuh"]
}, {
	"key": "plant_name",
	"val": ["电站名称", "Plant name", "Anläggningsnamn", "Nome da Planta", "Nombre de la central eléctrica","Nazwa systemu PV","電站名稱", "Plant name","Tên trạm điện","Nama tanaman"]
}, {
	"key": "plant_file_success",
	"val": ["图片上传成功", "Image uploaded successfully", "Bild uppladdad", "Imagem carregada com sucesso", "Es un éxito.","Obraz przesłany pomyślnie","圖片上傳成功", "Image uploaded successfully","Hình ảnh được tải lên thành công","Gambar berhasil diunggah"]
}, {
	"key": "plant_file_fail",
	"val": ["图片上传失败，请重新上传", "Image upload failed, please re-upload", "Image upload failed, please re-upload", "Falha ao carregar a imagem, tente novamente", "La imagen falla, por favor.","Przesyłanie obrazu nie powiodło się, spróbuj ponownie","圖片上傳失敗，請重新上傳", "Image upload failed, please re-upload","Tải hình ảnh không thành công, vui lòng tải lên lại","Unggahan gambar gagal, harap unggah ulang"]
}, {
	"key": "longQ1",
	"val": ["请上传图片格式如：.jpg/.png/的图片", "Please upload image format such as.: jpg /.jpeg/.png/", "Please upload image format such as.: jpg /.png/", "Please upload image format such as.: .jpg/.png/", "La imagen de la imagen, por favor, como: jpg /. Ng /","Prześlij zdjęcie w formacie takim jak: .jpg / .png /","請上傳圖片格式如：.jpg/.png/的圖片", "Please upload image format such as.: jpg /.jpeg/.png/","Vui lòng tải lên một hình ảnh với định dạng hình ảnh, chẳng hạn như: .jpg / .png /","Harap unggah format gambar seperti: jpg /.jpeg/.png/"]
}, {
	"key": "plant_no_right",
	"val": ["您所在的用户组无权限进行此操作", "Sorry, no privileges for this operation", "Tyvärr, inga privilegier för denna operation", "Sorry, no privileges for this operation", "Su Grupo de usuarios no tiene competencia para llevar a cabo esta operación","Brak uprawnień do wykonania tej operacji","您所在的用戶組無權限進行此操作", "Sorry, no privileges for this operation","Nhóm người dùng của bạn không có quyền thực hiện thao tác này","Maaf, tidak ada hak istimewa untuk operasi ini"]
}, {
	"key": "plant_dup_name",
	"val": ["电站名称重复，请重新输入电站名称！", "Plant name repeat, please re-enter the plant name!", "Upprepa Anläggningsnamn, vänligen ange anläggningens namn!", "Este noma já existe, por favor tente outro nome", "El nombre de la estación es repetitivo, por favor reintroduzca el nombre de la estación.","Nazwa systemu PV jest już używana, wprowadź inną","電站名稱重複，請重新輸入電站名稱", "Plant name repeat, please re-enter the plant name!","Tên của nhà máy điện được nhân đôi, vui lòng nhập lại tên của nhà máy điện!","Nama tanaman diulangi, masukkan kembali nama tanaman"]
}, {
	"key": "plant_add_fail",
	"val": ["电站新建失败,未知错误", "Add new plant failed, unknown error", "Fel på nya anläggningen, okänt fel", "Ocorreu um erro ao adicionar nova planta.", "Falla de la estación eléctrica, error desconocido","Dodawanie nowego systemu PV nie powiodło się, wystąpił nieznany błąd","電站新建失敗,未知錯誤", "Add new plant failed, unknown error","Nhà máy điện mới bị hỏng, lỗi không rõ","Gagal menambahkan pabrik baru, kesalahan tidak diketahui"]
}, {
	"key": "real_time_power",
	"val": ["实时功率", "Real time power", "Realtid Effekt", "Potência em tempo real", "Potencia en tiempo real","Moc w czasie rzeczywistym","實時功率", "Real time power","Sức mạnh thời gian thực","Kekuatan waktu nyata"]
}, {
	"key": "plants_month_energy",
	"val": ["当月发电量", "Monthly energy", "Månadens produktion", "Energia Mês", "Producción de electricidad en el mes","Produkcja energii elektrycznej w miesiącu","當月發電量", "Monthly energy","Sản xuất điện trong tháng","Energi bulanan"]
}, {
	"key": "month_energy",
	"val": ["月发电量", "Monthly energy", "Månadens produktion", "Energia Mês", "Producción mensual de electricidad","Produkcja energii elektrycznej w miesiącu","月發電量", "Monthly energy","Sản xuất điện hàng tháng","Energi bulanan"]
}, {
	"key": "plants_year_energy",
	"val": ["当年发电量", "Year energy", "Årets produktion", "Energia Ano", "Generación de energía","Produkcja energii w bieżącym roku","當年發電量", "Year energy","Thế hệ hiện tại","Energi tahun"]
}, {
	"key": "plants_total_energy",
	"val": ["总发电量", "Total energy", "Den totala produktionskapacitet", "Energia total", "Total Electric","Całkowita ilość wytworzonej energii","總發電量", "Total energy","Tổng công suất phát điện","Energi total"]
}, {
	"key": "plants_grandtotal_energy",
	"val": ["累计发电量", "Total energy", "Totala produktion", "Energia Total", "Energía acumulada","Całkowita ilość wytworzonej energii","累計發電量", "Total energy","Sản xuất điện tích lũy","Energi total"]
}, {
	"key": "col_status",
	"val": ["数采器状态", "Datalog Status", "Datainsamlingsstatus", "Datalogger Status", "Estado de las cosechas","Stan urządzeń monitorujących","採集器狀態", "Datalog Status","Trạng thái logger","Status datalogger"]
}, {
	"key": "col_freq",
	"val": ["数据获取频率(s)", "Data acquisition frequency(s)", "Datainsamlings frekvens (er)", "Frequência (s) de aquisição de dados", "Frecuencia de adquisición de datos (S)","Częstotliwość pozyskiwania danych","數據獲取頻率(s)", "Data acquisition frequency(s)","Tần số thu thập dữ liệu(s)","Frekuensi akuisisi data"]
}, {
	"key": "col_heart",
	"val": ["心跳间隔(s)", "Heartbeat interval(s)", "Heartbeat -intervall (er)", "Intervalo (s) de pulsação", "Espaciamiento de los latidos (S)","Interwal  impulsu ","心跳間隔(s)", "Heartbeat interval(s)","Nhịp tim","Interval detak jantung"]
}, {
	"key": "col_timezone",
	"val": ["时区", "Timezone", "Tidszon", "Fuso horário", "Zona horaria","Strefa czasowa","時區", "Timezone","Múi giờ","Zona waktu"]
}, 
{
	"key": "col_signalstrength",
	"val": ["信号强度", "Signal strength", "Signal strength", "Sinal de força", "Intensidad de señal","Siła sygnału","信號強度", "Signal strength","Cường độ tín hiệu","Kekuatan sinyal"]
},{
	"key": "col_firmware",
	"val": ["固件版本", "Firmware", "Firmware", "Firmware", "Versión","Firmware","固件版本", "Firmware","Phiên bản phần mềm","Firmware"]
}, {
	"key": "col_loadcount",
	"val": ["带载数", "Device Count", "Device Count", "Device Count", "Número de carga","Licznik obciazenia","帶載數", "Device Count","Số lượng tải","Jumlah Beban"]
},{
	"key": "col_load",
	"val": ["带载数升级配置", "Recharge with load", "Recharge with load", "Recharge with load", "Recharge with load","Recharge with load","帶載數充值", "Recharge with load","Tải cấu hình nâng cấp cấu hình","Jumlah Beban meningkatkan"]
}, {
	"key": "col_GPRS",
	"val": ["GPRS充值", "GPRS recharge", "GPRS recharge", "GPRS recharge", "GPRS recharge","GPRS recharge","GPRS充值", "GPRS recharge","Nạp tiền GPRS","GPRS Meningkatkan"]
},  {
	"key": "col_debug",
	"val": ["调试", "debug", "debug", "depurar", "Inténtalo.","Debugowanie","調試", "debug","gỡ lỗi","debug"]
}, {
	"key": "plant_col_oper",
	"val": ["操作(修改/重启/调试/删除/升级/刷新/带载数升配/GPRS充值/防逆流)", "Operation(Modify/Restart/debug/Delete/Upgrade/Refresh/Load/GPRSRecharge/Anti-reflux)", "Operation(Modify/Restart/debug/Delete/Upgrade/Refresh/Load/GPRSRecharge/Anti-reflux)", "Operação(Modificar/Reiniciar/debug/Excluir/Atualizar/Refresh/Load/GPRSRecharge/Anti-reflux)", "Operación (modificación/reinicio/redespliegue/suprimido/suprimido/actualizar/Cargado/GPRSRecarga/Anti-reflujo)","Operacja (zmodyfikuj/uruchom ponownie/debuguj/usuń/uaktualnij/odświeżać/Załadowany/GPRSŁadowanie/Anty-cofanie)","操作(修改/重啟/調試/刪除/升級/刷新/帶載數升配/GPRS充值/防逆流)", "Operation(Modify/Restart/debug/Delete/Upgrade/Refresh/Load/GPRSRecharge/Anti-reflux)","Hoạt động (sửa đổi / khởi động lại / gỡ lỗi / xóa / nâng cấp / làm mới/tải lên / nâng cấp / sạc lại GPRS / chống chảy ngược)","Operasi (modifikasi/restart/debug/hapus/upgrade/refresh/upload/upgrade/GPRS/anti-arus)"]
}, {
	"key": "plant_col_opers",
	"val": ["操作(修改/调试/删除/升级/刷新)", "Operation(Modify/debug/Delete/Upgrade/Refresh)", "Operation(Modify/debug/Delete/Upgrade/Refresh)", "Operação(Modificar/debug/Excluir/Atualizar/Refresh)", "Operación (modificación  / redespliegue / suprimido / suprimido / Refresh)","Operacja (zmodyfikuj / debuguj / usuń / uaktualnij / Refresh)","操作(修改/調試/刪除/升級/刷新)", "Operation(Modify/debug/Delete/Upgrade/Refresh)","Hoạt động (sửa đổi/gỡ lỗi/xóa/nâng cấp/làm mới)","Operasi (Ubah / debug / Hapus / Tingkatkan /Segarkan)"]
}, {
	"key": "free_col_oper",
	"val": ["操作(添加到电站)", "Operation(Add to this plant)", "Operation(Add to this plant)", "Operation(Add to this plant)", "Operación (añadir a la central)","Operacja (dodana do tego systemu PV)","操作(添加到電站)", "Operation(Add to this plant)","Hoạt động (thêm vào trạm điện)","Operasi (Tambahkan ke pabrik ini)"]
}, {
	"key": "modify",
	"val": ["修改", "Modify", "Ändra", "Modificar", "Modificación","Modyfikuj","修改", "Modify","sửa đổi","Memodifikasi"]
}, {
	"key": "restart",
	"val": ["重启", "Restart", "Restart", "Restart", "Reiniciar","Uruchom ponownie","重啟", "Restart","Khởi động lại","Mengulang kembali"]
}, {
	"key": "delete",
	"val": ["删除", "Delete", "Radera", "Deletar", "Borrar","Usuń","刪除", "Delete","xóa bỏ","Menghapus"]
}, {
	"key": "detach",
	"val": ["从电站删除", "Delete_from_plant", "Delete_from_plant", "Delete_from_plant", "Borrar de la central eléctrica", "Delete from plant","從電站刪除", "Delete_from_plant","Xóa trạm điện","Hapus dari pabrik"]
}, {
	"key": "attach",
	"val": ["添加到电站", "Add_datalog_to_plant", "Add_datalog_to_plant", "Add_datalog_to_plant", "Añadir a la central eléctrica","dodana do tego systemu PV","添加到電站", "Add_datalog_to_plant","Thêm  trạm điện","Tambahkan ke sistem"]
}, {
	"key": "edit_col_fail",
	"val": ["数采器修改失败,未知错误", "Modify datalog information failed,unknown error", "Modify datalog information failed,unknown error", "Falhou ao modificar o datalogger", "Fallar, error desconocido","Nieudana modyfikacja urządzenia monitorującego, wystąpił nieznany błąd","數採器修改失敗,未知錯誤", "Modify datalog information failed,unknown error","Lỗi sửa đổi không thành công, lỗi không xác định","Gagal mengubah informasi datalog, kesalahan tidak diketahui"]
}, {
	"key": "attach_col_2Plant",
	"val": ["采集器附着到电站", "Datalog attached to this plant", "Datainsamling är ansluten till anläggningen", "Datalogger anexado a esta planta", "El colector está conectado a la central eléctrica.","Urządzenie monitorujące zostało dodane do systemu PV","採集器附著到電站", "Datainsamling är ansluten till anläggningen","Bộ sưu tập được gắn vào nhà máy điện","Datalog dilampirkan ke pabrik ini"]
}, {
	"key": "status",
	"val": ["状态", "status", "status", "Status", "Estado","Status","狀態", "status","trạng thái","Status"]
}, {
	"key": "fail_col_format",
	"val": ["失败原因 : 数采器PN错误", "Failure reason: datalogger PN error", "Failure reason: datalogger PN error", "Falha: Erro no formato ", "Error: error de plural PN","Przyczyna niepowodzenia: błędny numer PN urządzenia moniotorującego","失敗原因 : 數採器PN錯誤", "Failure reason: datalogger PN error","Lý do thất bại: Lỗi PN của người thu thập dữ liệu","Alasan kegagalan: kesalahan PN datalogger"]
}, {
	"key": "fail_col_unknown",
	"val": ["网络异常", "Failure reason:unknown error", "Failure reason:unknown error", "Falha: Erro desconhecido", "Anomalías de red","Przyczyna niepowodzenia: nieznany błąd","網絡異常", "Failure reason:unknown error","dị thường mạng","kesalahan tidak diketahui"]
}, {
	"key": "attach_2Plant_fail",
	"val": ["附着到电站失败", "Datalog attached to this plant failed", "Datalog attached to this plant failed", "Ocorreu uma falha ao anexar o Datalogger nesta planta", "En la central eléctrica.","Dodanie urządzenia monitorującego nie powidodło się","附著到電站失敗", "Datalog attached to this plant failed","Không thể gắn vào trạm điện","Datalog yang dilampirkan ke pabrik ini gagal"]
}, {
	"key": "plant_detach_fail",
	"val": ["电站去附着数采器", "Plant detach datalog failed", "Plant detach datalog failed", "Ocorreu uma falhar ao deletar o Datalogger desta planta.", "La central eléctrica.","Odłączenie urządzenia monitorującego nie powidodło się","電站去附著數採器", "Plant detach datalog failed","Nhà máy điện được gắn vào bộ thu thập dữ liệu","Datalog pelepasan pabrik gagal"]
}, {
	"key": "sorry",
	"val": ["抱歉", "Sorry","ledsen", "Desculpe", "Lo siento.","Przykro nam","抱歉", "Sorry","Lấy làm tiếc","Maaf"]
}, {
	"key": "export_inv_fail",
	"val": ["暂无逆变器明细数据,无法导出报表", "no detail data of this inverter, the report can not be exported", "Finns inga data på växelriktaren, Raporten kan inte exporteras", "Este inversor não possui dados detalhados, o relatório não pode ser exportado", "No se puede exportar los datos.","brak szczegółowych danych inwertera, nie można eksportować raportu","暫無逆變器明細數據,無法導出報表", "no detail data of this inverter, the report can not be exported","Không có dữ liệu chi tiết biến tần và báo cáo không thể xuất","tidak ada data detail inverter ini, laporannya tidak dapat diekspor"]
}, {
	"key": "no_inv_data",
	"val": ["暂无逆变器明细数据", "no detail data of this inverter", "Finns inga data på växelriktaren", "no detail data of this inverter", "Datos de la variable","brak szczegółowych danych dla tego inwertera","暫無逆變器明細數據", "no detail data of this inverter","Không có dữ liệu chi tiết biến tần","tidak ada data detail dari inverter ini"]
}, {
	"key": "exceed_seven",
	"val": ["请选择7天以内的时间", "Please select a time within 7 days", "Välj en tid inom 7 dagar", "Selecione um prazo dentro de 7 dias", "Seleccione una hora dentro de los 7 días","Wybierz czas w ciągu 7 dni","請選擇7天以內的時間", "Pilih waktu dalam 7 hari","Vui lòng chọn thời gian trong vòng 7 ngày","Pilih waktu dalam 7 hari"]
}, {
	"key": "no_env_data",
	"val": ["暂无环境监测仪数据", "no detail data of this Environ-monitor", "no detail data of this Environ-monitor", "no detail data of this Environ-monitor", "No se dispone de datos de vigilancia del medio ambiente","brak szczegółowych danych dla monitora środowiska","暫無環境監測儀數據", "no detail data of this Environ-monitor","Không có dữ liệu từ giám sát môi trường","tidak ada data detail dari monitor Lingkungan ini"]
}, {
	"key": "no_meter_data",
	"val": ["暂无明细数据", "no detail data of this Electric-meter", "no detail data of this Electric-meter", "no detail data of this Electric-meter", "No se dispone de datos.","brak szczegółowych danych dla","暫無明細數據", "no detail data of this Electric-meter","Không có dữ liệu chi tiết","Tidak ada detail data"]
}, {
	"key": "temp",
	"val": ["环境温度", "Ambient temperature", "omgivningstemperatur", "Temperatura ambiente", "Temperatura ambiente","Temperatura otoczenia","環境溫度", "Ambient temperature","Nhiệt độ môi trường","Suhu lingkungan"]
}, {
	"key": "sun",
	"val": ["日照强度", "Solar irradiance", "solljus intensitet", "Irradiância solar", "Intensidad del sol","Intensywność światła słonecznego","日照強度", "Solar irradiance","Cường độ nắng","Penyinaran matahari"]
}, {
	"key": "wind_speed",
	"val": ["风速", "Wind speed", "Vindhastigheten", "Velocidade do vento", "Velocidad","Prędkość wiatru","風速", "Wind speed","Tốc độ gió","Kecepatan angin"]
}, {
	"key": "wind_dir",
	"val": ["风向", "Wind direction", "Vindriktning", "Direção do vento", "Viento","Kierunek wiatru","風向", "Wind direction","hướng gió","Arah angin"]
}, {
	"key": "bat_tem",
	"val": ["电池背板温度", "Battery back temperature", "Batteribackup temperatur", "Battery back temperature", "Temperatura de la batería","Temperatura płyty montażowej baterii","電池背板溫度", "Battery back temperature","Nhiệt độ bảng nối pin","Suhu baterai kembali"]
}, {
	"key": "active_energy",
	"val": ["有功电能", "Active energy", "Aktiv Energi", "Energia ativa", "Energía eléctrica","Energia aktywna","有功電能", "Active energy","Năng lượng hoạt động","Energi aktif"]
}, {
	"key": "reactive_energy",
	"val": ["无功电能", "Reactive energy", "Reaktiv energi", "Energia reativa", "Energía eléctrica sin éxito","Energia bierna","無功電能", "Reactive energy","Năng lượng phản ứng","Energi reaktif"]
}, {
	"key": "active_power",
	"val": ["有功功率", "Active power", "Aktiv effekt", "Potência ativa", "Potencia","Moc aktywna","有功功率", "Active power","Điện năng hoạt động","Kekuatan aktif"]
}, {
	"key": "reactive_power",
	"val": ["无功功率", "Reactive power", "Reaktiv effekt", "Potência reativa", "Potencia","Moc bierna","無功功率", "Reactive power","Công suất phản kháng","Daya reaktif"]
}, {
	"key": "app_power",
	"val": ["视在功率", "Apparent power", "Skenbar effekt", "Potência aparente", "En función de la Potencia","Moc pozorna","視在功率", "Apparent power","kiểm tra sức mạnh","Kekuatan nyata"]
}, {
	"key": "power_factor",
	"val": ["功率因数", "Power factor", "Effekt faktor", "Fator de potência", "Factor de potencia","Współczynnik mocy","功率因數", "Power factor","Hệ số công suất","Faktor kekuatan"]
}, {
	"key": "com_bus_vol",
	"val": ["汇流母线电压", "Combiner busbars voltage", "Spänningssamlingsskenor", "Tensão nos barramentos combinados", "Voltaje de la línea de transmisión","Napięcie szyny zbiorczej","匯流母線電壓", "Combiner busbars voltage","Điện áp thanh cái","Tegangan busbar kombinasi"]
}, {
	"key": "first_happen_time",
	"val": ["首次发生时间", "First occurrence time", "Tid till första förekomsten", "Hora da primeira ocorrência", "Es la primera vez.","Czas pierwszego wystąpienia","首次發生時間", "First occurrence time","Thời gian xuất hiện lần đầu","Waktu kemunculan pertama"]
},{
	"key": "happen_time",
	"val": ["发生时间", "Occurrence time", "Händelsetid", "Tempo de ocorrência", "Tiempo de ocurrencia","Czas wystąpienia","發生時間", "Occurrence time","Thời gian xảy ra","Waktu mulai"]
}, {
	"key": "alarm_type",
	"val": ["告警类型", "Alarm Type", "Larmtyp", "Tipo de alarme", "Tipo de alarma","Typ alarmu","告警類型", "Alarm Type","Loại báo động","Jenis Alarm"]
}, {
	"key": "alarm_code",
	"val": ["告警编码 ", "Alarm coding", "alarm kodning", "Código do alarme", "Código de alarma","Kod alarmu","告警編碼", "Alarm coding","Mã báo động","Kode Alarm"]
}, {
	"key": "device_type",
	"val": ["设备类型", "Device type", "Typ av enhet", "Tipo de dispositivo", "Tipo de equipo","Typ urządzenia","設備類型", "Device type","Loại thiết bị","Tipe perangkat"]
}, {
	"key": "device_sn",
	"val": ["设备序列号", "Device serial number", "Enhetens serienummer", "Número de série", "Número de serie del equipo","Numer seryjny urządzenia","設備序列號", "Device serial number","nghĩ ra số sê-ri","Nomor Seri Perangkat"]
}, {
	"key": "device_alias",
	"val": ["设备别名", "Device alias", "Enhetsalias", "Dispositivo", "Nombre del equipo","Alias urządzenia","設備別名", "Device alias","Bí danh thiết bị","Alias ​​Perangkat"]
}, {
	"key": "alarm_desc",
	"val": ["告警描述", "Alarm description", "Larm Beskrivning", "Descrição do Alarme", "Descripción de la policía","Opis alarmu","告警描述", "Alarm description","Mô tả báo động","Deskripsi Alarm"]
},{
	"key": "drtection_desc",
	"val": ["断电描述", "Power-off description", "Avstängningsbeskrivning", "Descrição de desligamento", "Descripción de apagado","Opis wyłączenia","斷電描述", "Power-off description","Tắt nguồn","Deskripsi power-off"]
}, {
	"key": "alarm_process",
	"val": ["处理状态", "Processing status", "Bearbetningsstatus", "Status do processamento", "Estado de tratamiento","Status przetwarzania","處理狀態", "Processing status","Trạng thái xử lý","Status pemrosesan"]
}, {
	"key": "disappearance_time",
	"val": ["消失时间", "Disappearance time", "Tidsåtgång", "Tempo de desaparecimento", "Tiempo de desaparecer","Czas odwołania alarmu","消失時間", "Disappearance time","Thời gian biến mất","Waktu penghilangan"]
}, {
	"key": "alarm_id",
	"val": ["告警ID", "Alarm ID", "Alarm ID", "Alarm ID", "Alguacil.","ID Alarmu","告警ID", "Alarm ID","ID báo động","ID Alarm"]
}, {
	"key": "have_handled",
	"val": ["已处理", "Handled", "Behandlad", "Problema resolvido", "Procesado","Problem rozwiązany","已處理", "Handled","Xử lý","Ditangani"]
}, {
	"key": "no_handle",
	"val": ["未处理", "Unhandled", "Obehandlad", "Problema continua", "No tramitado","Problem nierozwiązany","未處理", "Unhandled","Chưa qua chế biến","Tidak tertangani"]
}, {
	"key": "alarm_id",
	"val": ["告警ID", "Alarm ID", "Alarm ID", "Alarm ID", "Alguacil.","ID Alarmu","告警ID", "Alarm ID","ID báo động","ID Alarm"]
}, {
	"key": "warning",
	"val": ["告警", "Warning", "Varning", "Aviso", "Advertencia","Ostrzeżenie","告警", "Warning","báo trước","Alarm"]
}, {
	"key": "error",
	"val": ["错误", "Error", "Fel", "O erro", "Error","Błąd","錯誤", "Error","lỗi","Kesalahan"]
}, {
	"key": "alarm_fault",
	"val": ["故障", "Fault", "fel", "Fault", "Falla","Niepowodzenie","故障", "Fault","sự cố","Malfungsi"]
}, {
	"key": "delete_plant_fail1",
	"val": ["电站删除失败,电站下还有未删除的设备", "Delete plant failed,because it still has  devices which haven't deleted", "Radera anläggningen misslyckades, Utrustning är inte helt raderad under anläggningen", "Delete plant failed,because it still has  devices which haven't deleted", "Falla de la estación eléctrica y el equipo que no se ha suprimido en la estación eléctrica","Usunięcie systemu PV nie powiodło się, ponieważ w systemie znajdują się nieusunięte urządzenia","電站刪除失敗,電站下還有未刪除的設備", "Delete plant failed,because it still has  devices which haven't deleted","Không thể xóa trạm điện, có các thiết bị không được yêu cầu dưới trạm điện","Penghapusan pabrik gagal, karena masih memiliki perangkat yang belum dihapus"]
}, {
	"key": "delete_plant_fail2",
	"val": ["电站删除失败,未知原因", "Delete station failed for an unknown reason", "Radera Anläggningen misslyckades av okänd anledning", "Delete station failed for an unknown reason", "Desconocimiento de la estación eléctrica","Usunięcie systemu PV nie powiodło się, powód nieznany","電站刪除失敗,未知原因", "Delete station failed for an unknown reason","Xóa trạm điện không rõ, không rõ nguyên nhân","Penghapusan stasiun gagal karena alasan yang tidak diketahui"]
}, {
	"key": "modify_plant_fail1",
	"val": ["电站修改失败,未知错误", "Modify plant failed for an unknown reason", "Modify plant failed for an unknown reason", "Modify plant failed for an unknown reason", "Error de modificación de la estación eléctrica, error desconocido","Modyfikacja systemu PV nie powiodła się, powód nieznany","電站修改失敗,未知錯誤", "Modify plant failed for an unknown reason","Sửa đổi nhà máy điện không thành công, lỗi không xác định","Modifikasi pabrik gagal karena alasan yang tidak diketahui"]
}, {
	"key": "alarm_query_failed",
	"val": ["查询失败,原因:", "Query failed,reason:", "Query misslyckades eftersom:", "Query failed,reason:", "Falla, por:","Zapytanie nie powiodło się, przyczyna","查詢失敗,原因", "Query failed,reason:","Truy vấn thất bại, lý do","Kueri gagal, alasan"]
}, {
	"key": "father_datalog_pn",
	"val": ["数采器编码", "Datalogger  PN", "Datalogger  PN", "Datalogger  PN", "Codificador","Kodowanie urządzenia monitorującego","數採器編碼", "Datalogger PN","Mã logger","Datalog pn"]
}, {
	"key": "device_code",
	"val": ["设备编码", "Device coding", "Device coding", "Codificação do dispositivo", "Código de equipo","Kod urządzenia","設備編碼", "Device coding","số thiết bị","Pengkodean perangkat"]
}, {
	"key": "Manufacturer",
	"val": ["生产厂家", "Manufacturer", "Manufacturer", "Fabricante", "Fabricante","Producent","生產廠家", "Manufacturer","nhà chế tạo","Pabrikan"]
}, {
	"key": "nominal_power_kw",
	"val": ["额定功率(kW)", "Nominal power (kW)", "Nominal power (kW)", "Potência Nominal (kW)", "Potencia nominal (kW)","Moc znamionowa (kW)","額定功率(kW)", "Nominal power (kW)","Công suất định mức (kW)","Daya nominal (kW)"]
}, {
	"key": "inv_model",
	"val": ["机型", "Inverter models", "Inverter models", "Modelos de inversor", "Tipo","Model inwertera","機型", "Inverter models","mô hình","Model inverter"]
}, {
	"key": "today_elec_kwh",
	"val": ["当日发电量(kWh)", "Today electricity (kWh)", "Dagens produktion(kWh)", "Energia hoje (kWh)", "Producción de electricidad en el día en curso (kWh)","Ilość wytworzonej energii na dzień (kWh)","當日發電量(kWh)", "Today electricity (kWh)","Sản xuất điện hiện tại (kWh)","Listrik hari ini (kWh)"]
}, {
	"key": "total_elec_kwh",
	"val": ["总发电量(kWh)", "Total electricity (kWh)", "Den totala produktionskapacitet(kWh)", "Energia total (kWh)", "Volumen total de electricidad (kWh)","Całkowita ilość wytworzonej energii (kWh)","總發電量(kWh)", "Total electricity (kWh)","Tổng công suất phát điện (kWh)","Total listrik (kWh)"]
}, {
	"key": "last_update_time",
	"val": ["最后更新时间", "Last updated time", "Last updated time", "Última atualização", "Última Hora de actualización","Czas ostatniej aktualizacji","最後更新時間", "Last updated time","Thời gian cập nhật lần cuối","Waktu terakhir diperbarui"]
}, {
	"key": "connect_status",
	"val": ["连接状态", "Connection status", "Connection status", "Status da conexão", "Estado de conectividad","Stan połączenia","連接狀態", "Connection status","Tình trạng kết nối","Status hubungan"]
}, {
	"key": "compare",
	"val": ["对比", "Compare", "Compare", "Compare", "Contraste","Porównanie","對比", "Compare","So","Membandingkan"]
}, {
	"key": "ala_check_1",
	"val": ["请勾选一个或以上设备比较", "Please select one or more devices to compare", "Please select one or more devices to compare", "Por favor,selecione um ou mais dispositivos para comparar", "Por favor, seleccione uno o más de los equipos.","Zaznacz jedno lub więcej urządzeń do porównania","請勾選一個或以上設備比較", "Please select one or more devices to compare","Vui lòng kiểm tra một hoặc nhiều thiết bị để so sánh","Pilih satu atau lebih perangkat untuk dibandingkan"]
}, {
	"key": "ala_check_5",
	"val": ["对比设备数量最多支持12个", "Sorry,it only supports  to  compare at most 12 devices at one moment", "Sorry,it only supports  to  compare at most 12 devices at one moment", "Sorry,it only supports  to  compare at most 12 devices at one moment", "Comparación de la cantidad de equipo en el más alto nivel de 12","Możesz porównać maksymalnie 12 urządzeń","對比設備數量最多支持12個", "Sorry,it only supports  to  compare at most 12 devices at one moment","Số lượng thiết bị so sánh hỗ trợ lên tới 12","Maaf,ini hanya mendukung untuk membandingkan paling banyak 12 perangkat pada satu saat"]
}, {
	"key": "ala_one_para",
	"val": ["请选择一个对比参数", "Please select a comparison parameter", "Please select a comparison parameter", "Please select a comparison parameter", "Por favor seleccione un parámetro comparativo","Wybierz parametr porównania","請選擇一個對比參數", "Please select a comparison parameter","Vui lòng chọn một tham số so sánh","Pilih parameter perbandingan"]
}, {
	"key": "plant_no_spec_device",
	"val": ["当前电站下没有指定类型的设备", "Sorry,this plant doesn't have specific device", "Sorry,this plant doesn't have specific device", "Sorry,this plant doesn't have specific device", "No hay ningún tipo de equipo en la estación eléctrica actual.","Ten system PV nie ma żadnych urządzeń określonego typu","當前電站下沒有指定類型的設備", "Sorry,this plant doesn't have specific device","Không có loại thiết bị cụ thể trong nhà máy điện hiện tại","Maaf,pabrik ini tidak memiliki perangkat khusus"]
}, {
	"key": "ana_sen_1",
	"val": ["抱歉,设备:", "Sorry, device:", "Sorry, device:", "Sorry, device:", "Lo siento, equipo:","Przykro nam,urządzeń","抱歉,設備", "Sorry, device:","Xin lỗi, thiết bị:","Sorry, device:"]
}, {
	"key": "ana_sen_2",
	"val": [",于时间", ",at time", ",at time", "no tempo", "En el tiempo.", ",at time",",於時間", ",at time",", Thời điểm",",pada waktu"]
}, {
	"key": "ana_sen_3",
	"val": [",没有", ",no ", ",no", "não", "No.", ",no ",",沒有", ",no ",",Không",",tidak"]
}, {
	"key": "ana_sen_4",
	"val": ["数据", " data", " data", "Dados", "Datos","dane","數據", " data","dữ liệu","data"]
}, {
	"key": "ala_inv_unknown",
	"val": ["电站逆变器信息查询未知错误", "Query plant inverter failed,unknown error", "Query plant inverter failed,unknown error", "Falha ao consultar a planta", "Error de información","Błąd zapytań o inwerter instalacji, nieznany błąd","電站逆變器信息查詢未知錯誤", "Query plant inverter failed,unknown error","Lỗi không xác định của truy vấn thông tin biến tần trạm điện","Inverter pabrik kueri gagal, kesalahan tidak diketahui"]
}, {
	"key": "modify_pwd_suc",
	"val": ["密码修改成功!下次登陆时请使用新密码登陆!", "Password changed successfully! Please use the new password   when you log system next time!", "Password changed successfully! Please use the new password   when you log system next time!", "Senha alterada com sucesso! Por favor, use a nova senha ao registrar o sistema na próxima vez!", "¡La contraseña tiene éxito! Por favor, use la nueva contraseña para aterrizar!","Hasło zostało pomyślnie zmienione! Zaloguj się za pomocą nowego hasła przy następnym logowaniu!","密碼修改成功!下次登陸時請使用新密碼登陸!", "Password changed successfully! Please use the new password   when you log system next time!","Mật khẩu đã thay đổi thành công! Vui lòng đăng nhập bằng mật khẩu mới vào lần đăng nhập tiếp theo!","Kata sandi berhasil diubah! Silakan gunakan kata sandi baru saat Anda masuk sistem lain kali!"]
}, {
	"key": "modify_pwd_fail",
	"val": ["密码修改失败,原因:", "Modify password failed, because:", "Modify password failed, because:", "A modificação da senha falhou, porque:", "La contraseña falló, por la razón:","Zmiana hasła nie powiodła się, z powodu:","密碼修改失敗,原因:", "Modify password failed, because:","Thay đổi mật khẩu không thành công, lý do:","Gagal mengubah sandi, karena"]
}, {
	"key": "father_user_id",
	"val": ["父用户ID", "Father User Id", "Father User Id", "ID do usuário", "Usuario Eid","ID użytkownika nadrzędnego","父用戶ID", "Father User Id","ID người dùng phụ huynh","Id Pengguna Utama"]
}, {
	"key": "sub_user_id",
	"val": ["子用户ID", "Subuser Id", "Subuser Id", "ID do sub-usuário", "Usuario","ID użytkownika podrzędnego","子用戶ID", "Subuser Id","ID người dùng phụ","Id Subuser"]
}, {
	"key": "account",
	"val": ["账号", "Account", "konto", "Conta", "Número de cuenta","Konto","賬號", "Account","số tài khoản","Akun"]
}, {
	"key": "email",
	"val": ["邮箱", "Email", "E-post", "E-mail", "Correo electrónico","Adres emial","郵箱", "Email","hộp thư","E-mail"]
}, {
	"key": "Phone",
	"val": ["手机", "Phone", "telefon", "Número de celular", "Teléfono celular","Telefon komórkowy","手機", "Phone","Điện thoại di động","Telepon"]
}, {
	"key": "account_role",
	"val": ["账号角色", "Account Roles", "Konto roll", "Funções da conta", "Personaje de cuenta","Rola konta","賬號角色", "Account Roles","Vai trò tài khoản","Peran Akun"]
}, {
	"key": "reg_date",
	"val": ["注册日期", "Registration Date", "Registrerings data", "Data de Registro", "Fecha de registro","Data rejestracji","註冊日期", "Registration Date","Ngày đăng kí","Tanggal Tanda Tangan"]
}, {
	"key": "remark",
	"val": ["备注", "Remark", "Anmärkning", "Observação", "Notas","Uwagi","備註", "Remark","Nhận xét","Ucapan"]
}, {
	"key": "account_status",
	"val": ["账号状态", "Account Status", "Kontostatus", "Status da Conta", "Estado de cuenta","Status konta","賬號狀態", "Account Status","Tình trạng tài khoản","Status akun"]
}, {
	"key": "own_plant",
	"val": ["电站所属", "Plant belongs", "Anläggningen tillhör", "Planta Pertence", "Estación eléctrica","Własność systemy PV","電站所屬", "Plant belongs","Trạm năng lượng","Pembangkit milik"]
}, {
	"key": "operation",
	"val": ["操作", "Operation", "Operation", "Operação", "Operación","Operacja","操作", "Operation","điều hành","operasi"]
}, {
	"key": "Horizontal_contrast",
	"val": ["横向对比", "Horizontal Contrast", "Horizontal Contrast", "Horizontal Contrast", "Contraste horizontal","Kontrast poziomy","橫向對比", "Horizontal Contrast","Tương phản ngang","Kontras Horisontal"]
}, {
	"key": "account_freeze",
	"val": ["冻结", "Freeze", "Frys", "Congelar", "Congelación","Zamroź","凍結", "Freeze","Đông cứng","Membekukan"]
}, {
	"key": "err_no_plant",
	"val": ["无电站", "no plant", "Ingen anläggning", "Sem planta", "Estación eléctrica sin electricidad","Nie znaleziono instalacji PV","無電站", "no plant","Không có trạm điện","Tidak ada pembangkit listrik"]
}, {
	"key": "add_subuser_fail1",
	"val": ["增加子用户失败,暂无权限进行此操作", "Add sub user failed,no privileges for this operation", "Add sub user failed,no privileges for this operation", "Falha na adição de sub-usuário, sem privilégios para esta operação", "El usuario ya no está autorizado para realizar esta operación.","Dodanie użytkownika podrzędnego nie powiodło się, brak uprawnień do wykonania tej operacji","增加子用戶失敗,暫無權限進行此操作", "Add sub user failed,no privileges for this operation","Không thể thêm người dùng phụ","Gagal menambahkan sub pengguna, tidak ada hak istimewa untuk operasi ini"]
}, {
	"key": "add_subuser_fail2",
	"val": ["增加子用户失败,未知错误", "Add sub user failed,unknown error", "Add sub user failed,unknown error", "Erro ao adicionar sub usuário, erro desconhecido", "Error de subusuario que falla, error desconocido","Dodanie użytkownika podrzędnego nie powiodło się, wystąpił nieznany błąd","增加子用戶失敗,未知錯誤", "Add sub user failed,unknown error","Không thể thêm người dùng, lỗi không xác định","Gagal menambahkan sub pengguna, kesalahan tidak diketahui"]
}, {
	"key": "edit_subuser_fail1",
	"val": ["修改子用户失败,暂无权限进行此操作", "Edit sub user failed,no privileges for this operation", "Edit sub user failed,no privileges for this operation", "Falha ao Editar sub-usuário, sem privilégios para esta operação", "El usuario ya no está autorizado para llevar a cabo esta operación","Modyfikacja użytkownika podrzędnego nie powiodła się, brak uprawnień do wykonania tej operacji","修改子用戶失敗,暫無權限進行此操作", "Edit sub user failed,no privileges for this operation","Không thể sửa đổi người dùng phụ, không được phép cho thao tác này","Pengeditan sub pengguna gagal, tidak ada hak istimewa untuk operasi ini"]
}, {
	"key": "edit_subuser_fail2",
	"val": ["修改子用户失败,未知错误", "Edit sub user failed,unknown error", "Edit sub user failed,unknown error", "Falha ao Editar sub-usuário, erro desconhecido", "Error del usuario de modificación, error desconocido","Modyfikacja użytkownika podrzędnego nie powiodła się, wystąpił nieznany błąd","修改子用戶失敗,未知錯誤", "Edit sub user failed,unknown error","Không thể sửa đổi người dùng phụ, lỗi không xác định","Edit sub pengguna gagal, kesalahan tidak diketahui"]
}, {
	"key": "role_id",
	"val": ["角色ID", "Role id", "Role id", "Função ID", "IDD","ID roli","角色ID", "Role id","ID vai trò","ID peran"]
}, {
	"key": "role_name",
	"val": ["角色名称", "Role name", "Rollnamn", "Nome da Função", "Nombre del personaje","Nazwa roli","角色名稱", "Role name","Tên vai trò","Nama peran"]
}, {
	"key": "role_permit",
	"val": ["角色权限", "Role permissions", "Roll behörigheter", "Permissões de Função", "Competencias","Uprawnienia do roli","角色權限", "Role permissions","Quyền vai trò","Izin peran"]
}, {
	"key": "role_desc",
	"val": ["角色描述", "Role description", "Roll beskrivning", "Descrição da função", "Descripción del personaje","Opis roli","角色描述", "Role description","Mô tả vai trò","Deskripsi peran"]
}, {
	"key": "auth_modify_account",
	"val": ["修改账户信息", "Modify account info", "Du kan ändra kontoinformation ", "Modify account info", "Modificación de la información sobre la cuenta","Zmień informacje o koncie","修改賬戶信息", "Modify account info","Sửa đổi thông tin tài khoản","Ubah info akun"]
}, {
	"key": "auth_have_sub",
	"val": ["添加衍生账户", "Could have sub account", "Konton kan härledas", "Could have sub account", "Añadir una cuenta de derivados","Dodaj użytkownika podrzędnego","添加衍生賬戶", "Could have sub account","Thêm tài khoản phái sinh","Bisa memiliki sub akun"]
}, {
	"key": "auth_add_plant",
	"val": ["创建电站", "Add plants", "Du kan lägga till anläggning", "Add plants", "Creación de centrales eléctricas","Dodaj system PV","創建電站", "Add plants","Tạo một nhà máy điện","Tambahkan tanaman"]
}, {
	"key": "auth_del_plant",
	"val": ["删除电站", "Delete plants", "Du kan ta bort anläggning", "Deletar planta", "Borrar la estación eléctrica","Usuń system PV","刪除電站", "Delete plants","Xóa trạm điện","Hapus pembangkit"]
}, {
	"key": "auth_modify_plant",
	"val": ["修改电站", "Modify plants", "Redigerbar anläggning", "Modificar a Planta", "Modificación de la estación eléctrica","Modyfikuj system PV","修改電站", "Modify plants","Sửa đổi trạm điện","Ubah pembangkit"]
}, {
	"key": "auth_add_col2plant",
	"val": ["增加数采器(添加到电站)", "Add datalogs(you could attatch datalog to a plant)", "Du kan lägga till datasamlare (bifogas till anläggningen)", "Du kan lägga till datasamlare (bifogas till anläggningen)", "Añadir otros dispositivos (añadir a la central eléctrica)","Dodaj urządzenia monitorujące do systemu PV","增加數採器(添加到電站)", "Add datalogs(you could attatch datalog to a plant)","Thêm người thu thập dữ liệu (thêm vào trạm điện)","Tambahkan datalog (Anda bisa mencocokkan datalog ke pabrik)"]
}, {
	"key": "auth_del_col2plant",
	"val": ["删除数采器(从电站上删除)", "Delete Datalogs(you could detach datalog from a plant)", "Du kan ta bort datasamlaren (utgå från bifogad anläggning)", "Delete Datalogs(you could detach datalog from a plant)", "Eliminando los senadores (borrados de la central eléctrica)","Usuń urządzenia monitorujące z systemu PV","刪除數採器(從電站上刪除)", "Delete Datalogs(you could detach datalog from a plant)","Xóa bộ thu thập dữ liệu (xóa khỏi trạm điện)","Hapus Datalog (Anda dapat melepaskan datalog dari sebuah pabrik)"]
}, {
	"key": "auth_add_col",
	"val": ["增加数采器", "Add datalogs", "Lägg till datainsamlare", "Adicionar o coletor de dados", "Aumento de instrumentos","Dodaj urządzenie monitorujące","增加數採器","Add datalogs","Tăng thu thập dữ liệu","Tambahkan datalog"]
}, {
	"key": "auth_modify_col",
	"val": ["修改数采器", "Modify datalogs", "Redigerbar datainsamlare", "Modify datalogs", "Modificador","Modyfiuj urządzenia monitorujące","修改數採器", "Modify datalogs","Sửa đổi bộ thu thập dữ liệu","Ubah datalog"]
}, {
	"key": "auth_del_col",
	"val": ["删除数采器", "Delete Datalogs", "Du kan ta bort datainsamlare", "Delete Datalogs", "Borrar el sensor","Usuń urządzania monitorujące",'刪除數採器', "Delete Datalogs","Xóa bộ thu thập dữ liệu","Hapus Datalog"]
}, {
	"key": "auth_modify_dev",
	"val": ["修改设备", "Modify devices", "Redigerbar utrustning", "Modificar dataloggers", "Modificación del equipo","Modyfikuj urządzenie","修改設備", "Modify devices","Sửa đổi thiết bị","Ubah perangkat"]
}, {
	"key": "auth_del_dev",
	"val": ["删除设备", "Delete devices", "Du kan ta bort utrustning", "Deletar dispositivos", "Borrar el equipo","Usuń urządzenie","刪除設備", "Delete devices","Gỡ bỏ thiết bị","Hapus perangkat"]
}, {
	"key": "auth_alram_sms",
	"val": ["告警短信通知", "SMS alarm notification", "SMS larmmeddelanden", "Notificação de alarme por SMS", "Mensaje de mensajes de mensaje","Powiadomienie SMS o alarmie","告警短信通知", "SMS alarm notification","Thông báo SMS báo động","Pemberitahuan alarm SMS"]
}, {
	"key": "auth_alram_mail",
	"val": ["告警邮件通知", "Mail alarm  notification", "E-post larmmeddelanden", "Notificação de alarme por email", "Aviso de correo","Powiadomienie email o alarmie","告警郵件通知", "Mail alarm  notification","Thông báo email báo động","Pemberitahuan alarm email"]
}, {
	"key": "auth_custom_role",
	"val": ["自定义角色", "Customizable roles", "Anpassningsbara roller", "Funções personalizáveis", "Personaje definido","Role niestandardowe","自定義角色", "Customizable roles","Vai trò tùy chỉnh","Peran yang dapat disesuaikan"]
}, {
	"key": "auth_qr_login",
	"val": ["二维码登录", "Could login by Two-dimensional code", "Could login by Two-dimensional code", "Could login by Two-dimensional code", "Bingo","Logowanie za pomocą kodu QR","二維碼登錄", "Could login by Two-dimensional code","đăng nhập bằng cách quét mã","Bisa login dengan kode dua dimensi"]
}, {
	"key": "auth_define_device_view",
	"val": ["自定义设备数据明细视图", "Allows custom device view", "Allows custom device view", "Allows custom device view", "Visión detallada de los datos del equipo de autodefinición","Widok szczegółowy danych urządzenia niestandardowego","自定義設備數據明細視圖", "Allows custom device view","Xem chi tiết dữ liệu thiết bị tùy chỉnh","Mengizinkan tampilan perangkat khusus"]
}, {
	"key": "auth_ctr_pn",
	"val": ["控制数采器", "Control datalogs", "Control datalogs", "Control datalogs", "Dispositivo de control","Sterowanie urządzeniem monitorującym","控制數採器", "Control datalogs","Kiểm soát thu thập dữ liệu","Kontrol datalog"]
}, {
	"key": "auth_take_gujian",
	"val": ["升级数采器固件", "Upgrade datalogs", "Upgrade datalogs", "Upgrade datalogs", "Dispositivo de actualización","Aktualizacja oprogramowania urządzenia monitorującego","升級數採器固件", "Upgrade datalogs","Nâng cấp firmware thu thập dữ liệu","Tingkatkan datalog"]
}, {
	"key": "auth_ctr_dev",
	"val": ["控制设备", "Control devices", "Control devices", "Control devices", "Equipo de control","Sterowanie urządzeniem","控制設備", "Control devices","thiết bị điều khiển","Perangkat kontrol"]
}, {
	"key": "auth_dev_take",
	"val": ["升级设备固件", "Upgrade devices", "Upgrade devices", "Upgrade devices", "Dispositivo de actualización","Aktualizacja oprogramowania urządzenia ","升級設備固件", "Upgrade devices","Nâng cấp firmware thiết bị","Tingkatkan perangkat"]
}, {
	"key": "auth_browser_vplant",
	"val": ["浏览电站业主账号", "Browse plant owner account", "Browse plant owner account", "Browse plant owner account", "El número de cuenta del propietario de la estación","Przeglądaj konto właściciela systemu PV","瀏覽電站業主賬號", "Browse plant owner account","Duyệt tài khoản chủ sở hữu nhà máy điện","Tingkatkan perangkat"]
}, {
	"key": "auth_modify_vplant",
	"val": ["修改电站业主账号权限", "Modify plant owner account permission", "Modify plant owner account permission", "Modify plant owner account permission", "Modificar el número de cuenta del propietario de la estación","Zmodyfikuj uprawnienia konta właściciela systemu PV","修改電站業主賬號權限", "Modify plant owner account permission","Sửa đổi quyền tài khoản chủ sở hữu trạm điện","Ubah izin akun pemilik tanaman"]
}, {
	"key": "add_role_fail",
	"val": ["增加角色失败,原因", "Add roles failed,reason", "Add roles failed,reason", "Add roles failed,reason", "¿Por qué?","Dodanie roli nie powiodło się, z powodu","增加角色失敗,原因", "Add roles failed,reason","Không thể thêm nhân vật, lý do","Gagal menambahkan peran, alasan"]
}, {
	"key": "date",
	"val": ["日期", "Date", "Datum", "Data", "Fecha","Data","日期", "Date","ngày","Tanggal"]
}, {
	"key": "user",
	"val": ["用户", "User", "Användare", "Usuário", "Usuario","Użytkownik","用戶", "User","người dùng","Pengguna"]
}, {
	"key": "IP_address",
	"val": ["IP地址", "IP address", "IP-adress", "IP address", "Dirección IP","Adres IP","IP地址", "IP address","địa chỉ IP","alamat IP"]
}, {
	"key": "action_desc",
	"val": ["动作描述", "Action Description", "Beskrivning", "Action Description", "Descripción de acción","Opis operacji","動作描述", "Action Description","Mô tả hành động","Deskripsi Tindakan"]
}, {
	"key": "mail_id",
	"val": ["邮箱ID", "Mail id", "Mail id", "ID do email", "Correo electrónico","ID skrzynki pocztowej","郵箱ID", "Mail id","ID email","ID surat"]
}, {
	"key": "plant_id",
	"val": ["电站ID", "Plant id", "Plant id", "ID da planta", "Estación eléctrica","ID systemu PV","電站ID", "Plant id","ID trạm điện","ID tanaman"]
}, {
	"key": "table_no",
	"val": ["序号", "No.", "No.", "Nº", "Número de serie","Numer seryjny","序號", "No.","Số sê-ri","Tidak"]
}, {
	"key": "receive_plant_name",
	"val": ["接收电站名称", "Receiving plant name", "Ta emot anläggningsnamn", "Nome da planta que está recebendo", "Nombre de la estación de recepción","Odebrac nazwe instalacji PV","接收電站名稱", "Receiving plant name","Tên trạm thu điện","Menerima nama tanaman"]
}, {
	"key": "receive_day_report",
	"val": ["接收日报表", "Receiving daily report", "Ta emot dagrapport", "Recebendo Relatório diário", "Estado de la fecha de recepción","Otrzymywanie raportu dziennego","接收日報表", "Receiving daily report","Nhận báo cáo hàng ngày","Menerima laporan harian"]
}, {
	"key": "receive_month_report",
	"val": ["接收月报表", "Receiving monthly reports", "Ta emot månadsrapport", "Recebendo Relatórios Mensais", "Estado de recepción","Otrzymywanie raportu miesięcznego","接收月報表", "Receiving monthly reports","Nhận báo cáo hàng tháng","Menerima laporan bulanan"]
}, {
	"key": "yes",
	"val": ["是", "yes", "Ja", "Sim", "Sí.","Tak","是", "yes","Đúng","Iya"]
}, {
	"key": "no",
	"val": ["否", "no", "Nej", "Não", "No","Nie","否", "no","Không","tidak"]
}, {
	"key": "add_mail_fail",
	"val": ["添加邮箱失败", "Add mailbox failed", "Add mailbox failed", "Add mailbox failed", "Fallar el buzón","Dodawanie skrzynki pocztowej nie powiodło się","添加郵箱失敗", "Add mailbox failed","Không thể thêm hộp thư","Gagal menambahkan kotak surat"]
}, {
	"key": "choose_least_oneplant",
	"val": ["请至少选择一个接收电站名称", "Please select at least one receiving plant name", "Please select at least one receiving plant name", "Please select at least one receiving plant name", "Por favor, seleccione el nombre de una central de recepción.","Prosze wybrac przynajmniej jedna nazwe odbieranej instalacji PV","請至少選擇一個接收電站名稱", "Please select at least one receiving plant name","Vui lòng chọn ít nhất một tên trạm nhận điện","Pilih setidaknya satu nama tanaman penerima"]
}, {
	"key": "modify_mail_fail",
	"val": ["编辑邮箱信息失败", "Modify mailbox failed", "Modify mailbox failed", "Modify mailbox failed", "Error de edición","Edycja informacji o skrzynce pocztowej nie powiodła się","編輯郵箱信息失敗", "Modify mailbox failed","Không thể chỉnh sửa thông tin hộp thư","Gagal mengubah kotak surat"]
}, {
	"key": "mobile_id",
	"val": ["手机ID", "Mobile id", "Mobile id", "Mobile id", "Teléfono celular","ID urządzenia mobilnego","手機ID", "Mobile id","ID điện thoại","Gagal mengubah kotak surat"]
}, {
	"key": "mobile_num",
	"val": ["手机号", "Mobile number", "Mobilnummer", "Mobile number", "Número de teléfono celular","Numer telefonu komórkowego","手機號", "Mobile number","số điện thoại","telepon"]
}, {
	"key": "add_mobile_fail",
	"val": ["添加手机号失败", "Add mobile number failed", "Add mobile number failed", "Add mobile number failed", "Añadir el número de celular","Dodanie numeru telefonu komórkowego nie powiodło się","添加手機號失敗", "Add mobile number failed","Không thể thêm số điện thoại di động","Gagal menambahkan nomor ponsel"]
}, {
	"key": "modify_mobile_fail",
	"val": ["修改手机号失败", "Modify mobile number failed", "Modify mobile number failed", "Modify mobile number failed", "Cambio del número de teléfono.","Edycja numeru telefonu komórkowego nie powiodła się","修改手機號失敗", "Modify mobile number failed","Không thể sửa đổi số điện thoại di động","Gagal mengubah nomor ponsel"]
}, {
	"key": "output_power",
	"val": ["输出有功功率", "output power", "output power", "output power", "Potencia de la Potencia","Wyjściowa moc czynna","輸出有功功率", "output power","Công suất hoạt động","daya keluaran"]
}, {
	"key": "dev_mail_address",
	"val": ["通讯地址", "Communication address", "Communication address", "Endereço de comunicação", "Dirección de comunicaciones","Adres do korespondencji","通訊地址", "Communication address","địa chỉ gửi thư","alamat komunikasi"]
}, {
	"key": "inv_status",
	"val": ["设备状态", "Device status", "Device status", "status do dispositivo", "Estado de equipo","Stan urządzenia","設備狀態", "Device status","tình trạng thiết bị","Status Perangkat"]
}, {
	"key": "inv_oper_delete",
	"val": ["操作(删除)", "Operation (delete)", "Operation (delete)", "Operation (delete)", "Operación (Suprimido)","Operacja (usuń)","操作(刪除)", "Operation (delete)","Hoạt động (Xóa)","Operasi (hapus)"]
}, {
	"key": "rmb",
	"val": ["人民币(￥)", "RMB(￥)", "RMB(￥)", "RMB(￥)", "Yuan renminbi","RMB (¥)","人民幣(￥)", "RMB(￥)","Nhân dân tệ Trung Quốc (￥)","RMB(￥)"]
}, {
	"key": "usd",
	"val": ["美元($)", "USD($)", "USD($)", "USD($)", "(en dólares EE.UU.","Dolar amerykański USD($)","美元($)", "USD($)","Đô la Mỹ ($)","USD($)"]
}, {
	"key": "eur",
	"val": ["欧元(€)", "EURO(€)", "EURO(€)", "EURO(€)", "Euros (€)","EURO(€)","歐元(€)", "EURO(€)","Euro (€)","USD($)"]
}, {
	"key": "aud",
	"val": ["澳元($A)", "AUD($A)", "AUD($A)", "AUD($A)", "Australian ($a)","Dolar australijski AUD($A)","澳元($A)", "AUD($A)","Đô la Úc ($ A)","AUD($A)"]
}, {
	"key": "jpy",
	"val": ["日元(¥)", "JPY(¥)", "JPY(¥)", "JPY(¥)", "Yen japonés.","Jen japońśki JPY(¥)","日元(¥)", "JPY(¥)","Yên Nhật (¥)","JPY(¥)"]
}, {
	"key": "gbp",
	"val": ["英镑(£)", "GBP(£)", "GBP(£)", "GBP(£)", "Libra libras esterlinas","Funt brytyjski GBP(£)","英鎊(£)", "GBP(£)","Bảng Anh (£)","GBP(£)"]
}, {
	"key": "hkd",
	"val": ["港币(HK$)", "HKD(HK$)", "HKD(HK$)", "HKD(HK$)", "Moneda nacional","Dolar hongkoński (HK$)","港幣(HK$)", "HKD(HK$)","Đô la Hồng Kông (HK $)","GBP(£)"]
}, {
	"key": "sek",
	"val": ["瑞典克朗(Kr)", "SEK(Kr)", "SEK(Kr)", "SEK(Kr)", "Coronas suecas (KR)","Korona szwedzka (Kr)","瑞典克朗(Kr)", "SEK(Kr)","Thụy Điển Krona (Kr)","SEK(Kr)"]
}, {
	"key": "Rs",
	"val": ["印度卢比(₹)", "RS(₹)", "RS(₹)", "RS(₹)", "Lubi (India)","Rupia indyjska (₹)","印度盧比(₹)", "RS(₹)","Đồng rupee Ấn Độ ($)","RS(₹)"]
}, {
	"key": "Real",
	"val": ["雷亚尔(R$)", "Real(R$)", "Real(R$)", "Real(R$)", "Rear (R $)","Real (R$)","雷亞爾(R$)", "Real(R$)","Thực (R $)","Real(R$)"]
}, {
	"key": "mxn",
	"val": ["墨西哥比索(Mex$)", "Mexican Peso(Mex$)", "Mexican Peso(Mex$)", "Mexican Peso(Mex$)", "Pesos mexicanos","Peso meksykańskie (Mex$)","墨西哥比索(Mex$)", "Mexican Peso(Mex$)","Đồng pê-cô Mexico (Mex $)","Mexican Peso(Mex$)"]
},  {
	"key": "tzb",
	"val": ["泰铢(฿)", "THB(฿)", "THB(฿)", "THB(฿)", "THB(฿)","THB(฿)","泰銖(฿)", "THB(฿)","THB(฿)","THB(฿)"]
},{
	"key": "col_upgrade",
	"val": ["固件升级", "Upgrade Firmware", "Upgrade Firmware", "Upgrade Firmware", "Mejora de las piezas","Aktualizacja oprogramowania firmware","固件升級", "Upgrade Firmware","Nâng cấp firmware","Tingkatkan Firmware"]
}, {
	"key": "dev_start_up",
	"val": ["开机", "Start Up", "Start Up", "Start Up", "Abrir","Uruchamianie","開機", "Start Up","Khởi động","Memulai"]
}, {
	"key": "dev_shut_down",
	"val": ["关机", "Shut Down", "Shut Down", "Shut Down", "Apagado","Wyłączanie","關機", "Shut Down","Tắt","Mematikan"]
}, {
	"key": "edit_plant_small_power",
	"val": ["电站标称功率支持最小单位为1kW", " The smallest unit of  Nominal power is 1kW ", " The smallest unit of  Nominal power is 1kW ", " The smallest unit of  Nominal power is 1kW ", "La central eléctrica es la unidad de apoyo de 1 kW.","Minimalna moc nominalna instalacji PV to 1kW","電站標稱功率支持最小單位為1kW", " The smallest unit of  Nominal power is 1kW ","Đơn vị tối thiểu của hỗ trợ công suất danh nghĩa của nhà máy điện là 1kW","Unit terkecil dari daya Nominal adalah 1kW"]
}, {
	"key": "fw_upload_suc",
	"val": ["固件上传成功,固件名称: ", "Uploaded successfully,name:", "Firmware uploaded successfully,firmware name is:", "Uploaded successfully,name:", "Los elementos sólidos son buenos.","Przesyłanie oprogramowania firmware powiodło się, nazwa oprogramowania firmware","固件上傳成功,固件名稱", "Uploaded successfully,name:","Firmware được tải lên thành công, tên firmware:","Berhasil diunggah, nama"]
}, {
	"key": "upload_suc",
	"val": ["上传成功!", "Uploaded successfully!", "Uploaded successfully!", "Uploaded successfully!", "Los elementos sólidos son buenos.","Przesłano pomyślnie!","上傳成功!", "Uploaded successfully!","Tải lên thành công!","Berhasil diunggah"]
},{
	"key": "fw_upload_fail",
	"val": ["固件上传失败", "Firmware uploaded failed", "Firmware uploaded failed", "Firmware uploaded failed", "Los elementos sólidos fracasan.","Przesyłanie oprogramowania firmware nie powiodło się","固件上傳失敗", "Firmware uploaded failed","Tải lên chương trình cơ sở không thành công","Firmware gagal diunggah"]
}, {
	"key": "fw_name",
	"val": ["固件名称", "Firmware name", "Firmware name", "Firmware name", "Nombre de elemento","Nazwa oprogramowania firmware","固件名稱", "Firmware name","Tên chương trình cơ sở","Nama Firmware"]
}, {
	"key": "fw_size",
	"val": ["固件大小", "Firmware size", "Firmware size", "Firmware size", "Tamaño de componentes","Rozmiar oprogramowania firmware","固件大小", "Firmware size","Kích thước phần mềm","Ukuran Firmware"]
}, {
	"key": "fw_upload_time",
	"val": ["上传时间", "Upload time", "Upload time", "Upload time", "Hora de subir","Czas przesyłania","上傳時間", "Upload time","Thời gian tải lên","Waktu unggah"]
}, {
	"key": "fw_oper",
	"val": ["操作(升级/删除)", "Operation (upgrade/delete)", "Operation (upgrade/delete)", "Operation (upgrade/delete)", "Operación (actualización / supresión)","Operacja (uaktualnienie / usunięcie)","操作(升級/刪除)", "Operation (upgrade/delete)","Hoạt động (nâng cấp / xóa)","Operasi (tingkatkan / hapus)"]
}, {
	"key": "server_refuse_upgrade",
	"val": ["系统异常，错误码:", "System exception, error code:", "System exception, error code:", "System exception, error code:", "Anomalías del sistema, Código de error:","Wyjątek systemu, kod błędu:","系統異常，錯誤碼:", "System exception, error code:","Ngoại lệ hệ thống, mã lỗi:","Pengecualian sistem, kode kesalahan"]
}, {
	"key": "server_refuse_upgrade10",
	"val": ["采集器可能处于离线状态", "The collector may be offline", "The collector may be offline", "The collector may be offline", "El colector podría estar en un Estado de alerta.","Urządzenie monitorujące może być w trybie offline","採集器可能處於離線狀態", "The collector may be offline","Người sưu tầm có thể ngoại tuyến","Kolektor mungkin sedang offline"]
}, {
	"key": "server_refuse_upgrade14",
	"val": ["采集器处于离线状态", "Collector is offline", "Collector is offline", "Collector is offline", "El colector está en estado de alerta.","Urządzenie monitorujące jest w trybie offline","採集器處於離線狀態", "Collector is offline","Bộ sưu tập đang ngoại tuyến","Kolektor sedang offline"]
}, {
	"key": "server_refuse_upgrade12",
	"val": ["内部RPC超时", "Internal RPC timeout", "Internal RPC timeout", "Internal RPC timeout", "RPC","Limit czasu wewnętrznego RPC","內部RPC超時", "Internal RPC timeout","Hết thời gian chờ RPC nội bộ","Batas waktu RPC internal"]
}, {
	"key": "server_refuse_upgrade08",
	"val": ["拒绝, 采集器正处于升级状态中, 或其它原因", "The collector is in the upgrade state, or for other reasons", "The collector is in the upgrade state, or for other reasons", "The collector is in the upgrade state, or for other reasons", "Rechazo, el colector está en una situación de escalada, o por otras razones.","Urządzenie monitorujące jest w trakcje aktualizacji","拒絕, 採集器正處於升級狀態中, 或其它原因", "The collector is in the upgrade state, or for other reasons","Bị từ chối, trình thu thập đang ở trạng thái nâng cấp hoặc các lý do khác","Kolektor dalam status upgrade, atau karena alasan lain"]
}, {
	"key": "server_refuse_upgrade02",
	"val": ["固件升级请求未被接受", "Firmware upgrade request not accepted", "Firmware upgrade request not accepted", "Firmware upgrade request not accepted", "No se aceptaron las solicitudes de mejora de elementos.","Żądanie aktualizacji oprogramowania firmware zostało odrzucone","固件升級請求未被接受", "Firmware upgrade request not accepted","Yêu cầu nâng cấp firmware không được chấp nhận","Permintaan peningkatan firmware tidak diterima"]
}, {
	"key": "server_refuse_upgrade07",
	"val": ["通讯超时", "Communication timeout", "Communication timeout", "Communication timeout", "Comunicaciones","Limit czasu komunikacji","通訊超時", "Communication timeout","Hết thời gian liên lạc","Batas waktu komunikasi"]
}, {
	"key": "server_refuse_upgrade01",
	"val": ["数采器有更紧急的任务要完成(如正在给设备更新固件), 暂不接受升级任务", "There are more urgent tasks to be completed by the data collector (such as updating the firmware to the device), and the upgrade task will not be accepted", "There are more urgent tasks to be completed by the data collector (such as updating the firmware to the device), and the upgrade task will not be accepted", "There are more urgent tasks to be completed by the data collector (such as updating the firmware to the device), and the upgrade task will not be accepted", "Los senadores tienen tareas más urgentes que hacer (si se están actualizando el equipo), no se aceptará la tarea de ascenso.","Urządzenie monitorujące ma inne pilne zadania do wykonania (takie jak aktualizacja oprogramowania sprzętowego) i nie zaakceptuje żądania aktualizacji.","數採器有更緊急的任務要完成(如正在給設備更新固件), 暫不接受升級任務", "There are more urgent tasks to be completed by the data collector (such as updating the firmware to the device), and the upgrade task will not be accepted","Trình thu thập dữ liệu có nhiều nhiệm vụ khẩn cấp hơn để hoàn thành (chẳng hạn như cập nhật chương trình cơ sở của thiết bị) và hiện không chấp nhận nhiệm vụ nâng cấp.","Ada tugas yang lebih mendesak yang harus diselesaikan oleh pengumpul data (seperti memperbarui firmware ke perangkat), dan tugas peningkatan tidak akan diterima"]
}, {
	"key": "server_refuse_upgrade22",
	"val": ["错误, 数据块个数和每个数据块的长度相乘过大, 无对应缓冲区存储", "The number of data blocks and the length of each data block are too large to be stored", "The number of data blocks and the length of each data block are too large to be stored", "The number of data blocks and the length of each data block are too large to be stored", "Error, el número de parcelas de datos y la longitud de cada bloque de datos se multiplican y no se almacenan en la zona de amortiguación","Błąd, liczba bloków danych i długość każdego bloku danych są zbyt duże, brak pamięci buforowej","錯誤, 數據塊個數和每個數據塊的長度相乘過大, 無對應緩衝區存儲", "The number of data blocks and the length of each data block are too large to be stored","Lỗi, số lượng khối dữ liệu và độ dài của mỗi khối dữ liệu quá lớn, không có bộ nhớ đệm tương ứng","Jumlah blok data dan panjang setiap blok data terlalu besar untuk disimpan"]
}, {
	"key": "server_refuse_upgrade21",
	"val": ["采集器正在升级中", "Escalating", "Escalating", "Escalating", "El colector se está perfeccionando.","Aktualizacja w toku","採集器正在升級中", "Escalating","Bộ sưu tập đang được nâng cấp","Meningkat"]
}, {
	"key": "fw_upgrade_suc",
	"val": ["恭喜您,固件升级已成功", "Congratulations, the firmware upgrade was successful", "Congratulations, the firmware upgrade was successful", "Felicitaciones. La mejora de las piezas ha tenido éxito.","Gratulacje, aktualizacja oprogramowania firmware powiodła się.","Congratulations, the firmware upgrade was successful","恭喜您,固件升級已成功", "Congratulations, the firmware upgrade was successful","Xin chúc mừng, việc nâng cấp firmware đã thành công","Selamat, upgrade firmware berhasil"]
},{
	"key": "longS2",
	"val": ["升级异常, 请刷新页面,获取进度", "Update abnormality, please refresh the page to get the progress", "Update abnormality, please refresh the page to get the progress", "Update abnormality, please refresh the page to get the progress","Update abnormality, please refresh the page to get the progress","Update abnormality, please refresh the page to get the progress","升級異常, 請刷新頁面,獲取進度", "Update abnormality, please refresh the page to get the progress","Nâng cấp không bình thường, vui lòng làm mới trang để nắm bắt tiến trình","Peningkatannya tidak normal, harap segarkan halaman untuk mendapatkan kemajuan"]
},{
	"key": "Upgrade_failed",
	"val": ["升级失败", "Upgrade failed", "Upgrade failed", "Upgrade failed","Upgrade failed","Upgrade failed","升級失敗,", "Upgrade failed","Nâng cấp thất bại","Upgrade gagal"]
},{
	"key": "Update_success",
	"val": ["升级成功", "Update success", "Update success", "Update success","Update success","Update success","升級成功", "Update success","cập nhật thành công","Perbarui kesuksesan"]
},{
	"key": "longS",
	"val": ["升级被手动取消", "The upgrade was manually canceled", "The upgrade was manually canceled", "The upgrade was manually canceled","The upgrade was manually canceled","The upgrade was manually canceled","升級被手動取消", "The upgrade was manually canceled","Việc nâng cấp đã bị hủy bằng tay","Upgrade dibatalkan secara manual"]
},{
	"key": "longS1",
	"val": ["数采器已离线", "Data collect device already off line", "Data collect device already off line", "Data collect device already off line","Data collect device already off line","Data collect device already off line","數採器已離線", "Data collect device already off line","Bộ dữ liệu ngoại tuyến","Upgrade dibatalkan secara manual"]
},{
	"key": "longL0",
	"val": ["由于通信异常或其它原因导致系统未能启动数采器升级流程", "The system failed to activate the datalogger update process due to the communication abnormality or other reasons", "The system failed to activate the datalogger update process due to the communication abnormality or other reasons", "The system failed to activate the datalogger update process due to the communication abnormality or other reasons","The system failed to activate the datalogger update process due to the communication abnormality or other reasons","The system failed to activate the datalogger update process due to the communication abnormality or other reasons","由於通信異常或其它原因導致系統未能啟動數採器升級流程", "The system failed to activate the datalogger update process due to the communication abnormality or other reasons","Hệ thống không thể bắt đầu quá trình nâng cấp bộ thu thập dữ liệu do giao tiếp bất thường hoặc lý do khác","Sistem gagal mengaktifkan proses pembaruan datalogger karena kelainan komunikasi atau alasan lain"]
},{
	"key": "longS0",
	"val": ["数采器已经在升级中", "Data collect device already in the upgrade", "Data collect device already in the upgrade", "Data collect device already in the upgrade","Data collect device already in the upgrade","Data collect device already in the upgrade","採集器正在升級中", "Data collect device already in the upgrade","Trình thu thập dữ liệu đã được nâng cấp","Perangkat pengumpulan data sudah di upgrade"]
},{
	"key": "longSS",
	"val": ["设备已经在升级中", "device already in the upgrade", "device already in the upgrade", "device already in the upgrade","device already in the upgrade","device already in the upgrade","設備已經在升級中", "device already in the upgrade","Thiết bị đã được nâng cấp","perangkat sudah di perbarui"]
}, {
	"key": "fw_cutdown",
	"val": ["采集器已离线,等待续传,倒计时: ", "Datalog is offline, wait for continuingly communication, countdown time:", "Datalog is offline, wait for continuingly communication, countdown time:", "Datalog is offline, wait for continuingly communication, countdown time:", "El colector se ha ido y está a la espera de la renovación.","Urządzenie monitorujące jest w trybie offline, oczekiwanie na uruchomienie, odliczanie","採集器已離線,等待續傳,倒計時", "Datalog is offline, wait for continuingly communication, countdown time:","Trình thu thập đang ngoại tuyến, chờ để tiếp tục, đếm ngược:","Datalog sedang offline, tunggu komunikasi terus menerus, waktu hitung mundur"]
}, {
	"key": "fw_upgrade_fail01",
	"val": ["升级流程已失败", "Upgrade process failed", "Upgrade process failed", "Upgrade process failed", "El proceso de ascenso ha fracasado.","Proces aktualizacji nie powiódł się","升級流程已失敗", "Upgrade process failed","Quá trình nâng cấp đã thất bại","Proses peningkatan gagal"]
}, {
	"key": "fw_upgrade_fail10",
	"val": ["采集器可能处于离线状态", "The collector may be offline", "The collector may be offline", "The collector may be offline", "El colector podría estar en un Estado de alerta.","Urządzenie monitorujące może być w trybie offline","採集器可能處於離線狀態", "The collector may be offline","Người sưu tầm có thể ngoại tuyến","Kolektor mungkin sedang offline"]
}, {
	"key": "fw_upgrade_fail14",
	"val": ["采集器处于离线状态", "Collector is offline", "Collector is offline", "Collector is offline", "El colector está en estado de alerta.","Urządzenie monitorujące jest w trybie offline","採集器處於離線狀態", "Collector is offline","Bộ sưu tập đang ngoại tuyến","Kolektor sedang offline"]
}, {
	"key": "fw_upgrade_fail12",
	"val": ["内部RPC超时", "Internal RPC timeout", "Internal RPC timeout", "Internal RPC timeout", "RPC","Limit czasu wewnętrznego RPC","內部RPC超時", "Internal RPC timeout","Hết thời gian chờ RPC nội bộ","Batas waktu RPC internal"]
}, {
	"key": "fw_upgrade_fail06",
	"val": ["升级状态未知", "Upgrade status unknown", "Upgrade status unknown", "Upgrade status unknown", "Situación desconocida","Status aktualizacji nieznany","升級狀態未知", "Upgrade status unknown","Trạng thái nâng cấp không xác định","Status peningkatan tidak diketahui"]
}, {
	"key": "fw_upgrade_failFF",
	"val": ["采集器可能已经掉线, 需等待断点续传", "The collector may have dropped, need to wait for the http", "The collector may have dropped, need to wait for the http", "The collector may have dropped, need to wait for the http", "El colector puede estar en la línea y esperar a que se renueva un poco.","Server danych nie odpowiada  , prosze czekac na wznowienie strony http","採集器可能已經掉線, 需等待斷點續傳", "The collector may have dropped, need to wait for the http","Trình thu thập có thể ngoại tuyến, bạn cần đợi điểm dừng tiếp tục truyền","Kolektor mungkin telah turun, perlu menunggu http"]
},{
	"key": "inv_sub_cmd_faila",
	"val": ["逆变器可能处于离线状态", "The inverter may be offline", "The inverter may be offline", "The inverter may be offline", "The inverter may be offline","The inverter may be offline","逆變器可能處於離線狀態", "The inverter may be offline","Biến tần có thể ngoại tuyến","Inverter mungkin sedang offline"]
},  {
	"key": "cancel_upgrade_suc",
	"val": ["已成功取消升级", "Cancel the upgrade has been successfully", "Cancel the upgrade has been successfully", "Cancel the upgrade has been successfully", "Se ha cancelado la escalada.","Pomyślnie anulowano aktualizację","已成功取消升級", "Cancel the upgrade has been successfully","Đã hủy thành công nâng cấp","Pembatalan upgrade telah berhasil"]
}, {
	"key": "cancel_upgrade_fail",
	"val": ["取消升级失败,未知错误", "Cancel the upgrade failed", "Cancel the upgrade failed", "Cancel the upgrade failed", "Fracasar, error desconocido.","Anulowanie aktualizacji nie powiodło się","取消升級失敗,未知錯誤", "Cancel the upgrade failed","Không thể hủy nâng cấp, lỗi không xác định","Batalkan upgrade gagal"]
}, {
	"key": "no_info",
	"val": ["暂无", "No Information", "No Information", "No Information", "No.","Brak informacji","暫無", "No Information","Không","Tidak ada informasi"]
}, {
	"key": "cmd_fail",
	"val": ["调试失败,未知原因", "Debug failed for an unknown reason", "Debug failed for an unknown reason", "Debug failed for an unknown reason", "No se sabe por qué.","Debugowanie nie powiodło się, nieznany powód","調試失敗,未知原因", "Debug failed for an unknown reason","Gỡ lỗi không rõ nguyên nhân","Debug gagal karena alasan yang tidak diketahui"]
}, {
	"key": "user_vendor",
	"val": ["厂家", "Vendor", "Vendor", "Vendor", "Fabricante","Producent","廠家", "Vendor","nhà máy","Penjaja"]
}, {
	"key": "user_dist",
	"val": ["分销商", "Distributor", "Distributor", "Distributor", "Distribuidor","Dystrybutor","分銷商", "Distributor","Nhà phân phối","Distributor"]
}, {
	"key": "user_group",
	"val": ["集团", "Group", "Group", "Group", "Grupo","Grupa","集團", "Group","nhóm","Kelompok"]
}, {
	"key": "user_admin",
	"val": ["管理员", "Administrator", "Administrator", "Administrator", "Administrador","Administrator","管理員", "Administrator","người quản lý","administrator"]
}, {
	"key": "user_owner",
	"val": ["电站业主", "Proprietor", "Proprietor", "Proprietário da Estação", "Propietario de la estación eléctrica","Właściciel systemu PV","電站業主", "Proprietor","Chủ trạm điện","Pemilik pembangkit listrik"]
}, {
	"key": "user_owner_subuser",
	"val": ["电站浏览者", "Proprietor Subuser", "Proprietor Subuser", "Proprietário da Estação", "Navegador de la estación","Przeglądarka systemu PV","電站瀏覽者", "Proprietor Subuser","Trình duyệt Power Station","Pemilik pembangkit listrik"]
}, {
	"key": "auth_user_self_login",
	"val": ["用户自己登录方可使用(用于区别厂家账号使用业主账号登录的场景)", "Users log in directly before use", "Users log in directly before use", "Users log in directly before use", "Usuario de la cuenta del propietario de la cuenta del propietario","Uzytkownicy loguja sie bezposrednio przed uzyciem","用戶自己登錄方可使用(用於區別廠家賬號使用業主賬號登錄的場景)", "Users log in directly before use", "Users log in directly before use","Người dùng có thể đăng nhập trước khi sử dụng nó (được sử dụng để phân biệt kịch bản trong đó tài khoản nhà sản xuất sử dụng tài khoản chủ sở hữu để đăng nhập)","Pengguna masuk langsung sebelum digunakan"]
}, {
	"key": "inv_sub_oper",
	"val": ["操作(别名/控制/调试/升级/删除)", "Operation (rename/control/debug/upgrade/delete)", "Operation (rename/control/debug/upgrade/delete)", "Operation (editar/control/depurar/upgrade/delete)", "OPERACIÓN (alias / control / transversal / perfeccionado / suprimido)","Operacja (zmiana nazwy/sterowanie/debugowanie/aktualizacja/usuwanie)","操作(別名/控制/調試/升級/刪除)", "Operation (rename/control/debug/upgrade/delete)","Hoạt động (bí danh / kiểm soát / gỡ lỗi / nâng cấp / xóa)","Operasi (ganti nama / kontrol / debug / tingkatkan / hapus)"]
}, {
	"key": "inv_sub_query_fail",
	"val": ["设备控制查询失败,原因:", "Query device control failed,because:", "Query device control failed,because:", "Query device control failed,because:", "Control del equipo de control fallido, por:","Polecenie sterujące nie powiodło się, z powodu","設備控制查詢失敗,原因", "Query device control failed,because:","Truy vấn điều khiển thiết bị không thành công, lý do:","Kontrol perangkat kueri gagal, karena"]
}, {
	"key": "inv_sub_cmd_suc",
	"val": ["指令已下发!", "Send command successfully!", "Send command successfully!", "Send command successfully!", "¡La orden se ha enviado!","Polecenie wysłane pomyślnie","指令已下發", "Send command successfully!","Lệnh đã được ban hành!","Kirim perintah berhasil"]
}, {
	"key": "inv_sub_cmd_fail",
	"val": ["指令下发失败", "Send command failed", "Send command failed", "Send command failed", "Falla bajo la orden.","Wysłanie polecenia nie powiodło się","指令下發失敗", "Send command failed","Giao lệnh không thành công","Kirim perintah berhasil"]
}, {
	"key": "Invalid_instruction",
	"val": ["设置失败，响应数据无效", "Setup failed, invalid response data.", "Setup failed, invalid response data.", "Setup failed, invalid response data.", "Fractura, respuesta a los datos ineficaces","Konfiguracja nie powiodła się, nieprawidłowe dane zwrotne","設置失敗，響應數據無效", "Setup failed, invalid response data.","Thiết lập thất bại, dữ liệu phản hồi không hợp lệ","Penyiapan gagal, data tanggapan tidak valid"]
},{
	"key": "reboot_instruction",
	"val": ["指令已下发,请重启设备", "Send command successfully, Please restart the device.", "Send command successfully, Please restart the device.", "Send command successfully, Please restart the device.", "¡La orden se ha enviado,Por favor reinicie el dispositivo","Polecenie wysłane pomyślnie,Uruchom ponownie urządzenie","指令已下發,請重啟設備", "Send command successfully,Please restart the device","Lệnh đã được ban hành,Vui lòng khởi động lại thiết bị","Kirim perintah berhasil,Silakan restart perangkat"]
}, {
	"key": "inv_sub_cmd_reason",
	"val": ["指令下发失败,原因:", "Send command failed,reason:", "Send command failed,reason:", "Send command failed,reason:", "La orden fracasó por la razón:","Wysłanie polecenia nie powiodło się, powód","指令下發失敗,原因:", "Send command failed,reason:","Lệnh không được ban hành, lý do:","Perintah pengiriman gagal, alasan"]
}, {
	"key": "export_dev_fail",
	"val": ["暂无设备明细数据,无法导出报表", "no detail data of this device, the report can not be exported", "no detail data of this device, the report can not be exported", "no detail data of this device, the report can not be exported", "No se dispone de equipo y no se puede exportar el Estado de cuentas.","brak danych szczegółowych urządzenia, nie można eksportować raportu","暫無設備明細數據,無法導出報表", "no detail data of this device, the report can not be exported","Không có dữ liệu chi tiết của thiết bị và không thể xuất báo cáo","tidak ada data detail dari perangkat ini, laporan tidak dapat diekspor"]
}, {
	"key": "col_gprs_para",
	"val": ["GPRS流量参数", "GPRS flow parameters", "GPRS flow parameters", "GPRS flow parameters", "Parámetro de flujo gprs","Parametry ruchu GPRS","gprs流量參數", "GPRS flow parameters","Thông số lưu lượng GPRS","Parameter Aliran GPRS"]
}, {
	"key": "col_usage_rate",
	"val": ["流量使用率", "Flow usage rate", "Flow usage rate", "Flow usage rate", "Tasa de uso de la corriente","Dostepne dla wlascicieli","流量使用率", "Flow usage rate","Sử dụng giao thông","menilai"]
}, {
	"key": "col_recharge",
	"val": ["充值", "Recharge", "Recharge", "Recharge", "Valor","Doładuj","充值", "Recharge","Nạp tiền","Isi ulang"]
}, {
	"key": "activation_date",
	"val": ["激活日期", "activation date", "activation date", "activation date", "Fecha de activación","Data aktywacji","激活日期", "activation date","Ngày kích hoạt","tanggal aktivasi"]
}, {
	"key": "expiry_date",
	"val": ["失效日期", "expiry date", "expiry date", "expiry date", "Fecha de vencimiento","Data ważności","失效日期", "expiry date","Ngày hết hạn","tanggal kadaluarsa"]
}, {
	"key": "col_gprs_fail",
	"val": ["gprs流量参数查询失败", "Sorry,fail to query GPRS flow parameters", "Sorry,fail to query GPRS flow parameters", "Sorry,fail to query GPRS flow parameters", "Los parámetros de la corriente de GPRS fracasaron."," Nie odebrano parametrow przesylu GPRS","gprs流量參數查詢失敗","Sorry,fail to query GPRS flow parameters","Truy vấn tham số luồng gprs không thành công","Maaf, gagal menanyakan parameter aliran GPRS"]
}, {
	"key": "table_no_data",
	"val": ["无数据", "No data", "No data", "No data", "No se dispone de datos","Brak danych","無數據", "No data","không có dữ liệu","Tidak ada catatan"]
}, {
	"key": "interval_one_month",
	"val": ["请重新选择告警区间,支持一个月之间", "Please re-select the alarm interval, support between one month", "Välj larmintervall igen, stöd mellan en månad", "Por favor, selecione novamente o intervalo de alarme, suporte entre um mês", "Por favor, vuelva a seleccionar el intervalo de alarma, soporte entre un mes","Proszę ponownie wybrać interwał alarmu, wsparcie między jednym miesiącem","請重新選擇告警區間,支持一個月之間", "Please re-select the alarm interval, support between one month","Vui lòng chọn lại khoảng thời gian báo động, hỗ trợ giữa một tháng","Harap pilih kembali interval alarm, dukungan antara satu bulan"]
},{
	"key": "plant_totoal_address",
	"val": ["电站地址", "Plant address", "Plant address", "Plant address", "Dirección de la estación eléctrica","Adres systemu PV","電站地址", "Plant address","Địa chỉ trạm điện","Alamat pabrik"]
}, {
	"key": "tree_node_action",
	"val": ["双击可全部展开/折叠所有节点", "Double-click to expand/collapse all nodes", "Double-click to expand/collapse all nodes", "Double-click to expand/collapse all nodes", "Dos pulsaciones se pueden llevar a cabo y doblar todos los nodos.","Kliknij dwukrotnie, aby rozwinąć / zwinąć wszystkie węzły","雙擊可全部展開/折疊所有節點", "Double-click to expand/collapse all nodes","Nhấp đúp để mở rộng / thu gọn tất cả các nút","Klik dua kali untuk memperluas / menciutkan semua node"]
}, {
	"key": "*empty",
	"val": ["有'*'的信息不能为空", "The '*' information can not be empty", "The '*' information can not be empty", "The '*' information can not be empty", "Hay información que no puede estar vacía.","Pola oznaczone '*' nie mogą być puste","有'*'的信息不能為空", "The '*' information can not be empty","Thông tin với '*' không thể để trống","Informasi '*' tidak boleh kosong"]
}, {
	"key": "vendor_not_empty",
	"val": ["不能为空", "Field can not be empty", "Field can not be empty", "Field can not be empty", "No puedes estar vacía.","Pole nie może być puste","不能為空", "Field can not be empty","Không thể để trống","Bidang tidak boleh kosong"]
}, {
	"key": "vendor_hex",
	"val": ["由十六进制和空格组成", "Hex and spaces", "Hex and spaces", "Hex and spaces", "De dieciséis pasos y huésped.","Liczby szesnastkowe i spacje","由十六進制和空格組成", "Hex and spaces","Bao gồm thập lục phân và không gian","Bidang tidak boleh kosong"]
}, {
	"key": "vendor_edit_suc",
	"val": ["修改成功", "Modified successfully", "Modified successfully ", "Modified successfully", "Cambio de éxito","Zmodyfikowano pomyślnie","修改成功", "Modified successfully","Sửa đổi thành công","Berhasil dimodifikasi"]
}, {
	"key": "vendor_input_ok",
	"val": ["输入正确", "Input correctly", "Input correctly", "Input correctly", "Introducción correcta","Wpisz poprawnie","輸入正確", "Input correctly","Nhập chính xác","Masukkan dengan benar"]
}, {
	"key": "vendor_input_bad",
	"val": ["输入错误", "Input error", "Input error", "Input error", "Error de entrada","Błąd wpisanych danych","輸入錯誤", "Input error","lỗi đầu vào","Kesalahan masukan"]
}, {
	"key": "vendor_add_fail",
	"val": ["采集器已经被添加", "PN Number had added", "PN Number had added", "PN Number had added", "El colector ha sido añadido.","Dodano numer naglowka PN","採集器已經被添加", "PN Number had added","Bộ sưu tập đã được thêm vào","Nomor PN telah ditambahkan"]
}, {
	"key": "uploading",
	"val": ["正在上传...", "uploading...", "uploading...", "uploading...", "Se está pasando.","Wysyłanie...","正在上傳...", "uploading...","đang tải lên ...","mengunggah ..."]
}, {
	"key": "lookbtn",
	"val": ["点击查看", "Click and view", "Click and view", "Click and view", "Clic Para ver","Kliknij, aby wyświetlić","點擊查看", "Click and view","Nhấn vào đây để xem","Klik dan lihat"]
}, {
	"key": "current_val",
	"val": ["当前值", "current val", "current val", "current val", "Valor actual","Aktualna wartość","當前值", "current val","Giá trị hiện tại","val saat ini"]
},{
	"key": "paramNum_one_para",
	"val": ["多参数对比仅支持单设备", "Multi parameter comparison supports single device only.", 
	"Multi parameter comparison supports single device only.", 
	"Comparaciones multiparÁticas únicamente en apoyo del equipo único",
	"Comparaciones multiparÁticas únicamente en apoyo del equipo único","Porównywanie wielu parametrów obsługuje tylko pojedyncze urządzenia",
     "多參數對比僅支持單設備", "Multi parameter comparison supports single device only.","So sánh đa tham số chỉ hỗ trợ thiết bị duy nhất","Perbandingan multi parameter hanya mendukung satu perangkat"]
},{
	"key": 'invalid_pn',
	"val": ["无效的PN号", "Invalid PN number", "ogiltigt pn -", "Invalid PN number", "No. PN, no. Pn.","Nieprawidłowy numer PN","無效的PN號", "Invalid PN number","Số PN không hợp lệ","Nomor PN tidak valid"]
},{
	"key": 'RefreshFail_1',
	"val": ["刷新失败,操作过于频繁，请一分钟之后再试", "Refresh failed, operation is too frequent, please try again in a minute", "Refresh failed, operation is too frequent, please try again in a minute", "Refresh failed, operation is too frequent, please try again in a minute", "Refresh failed, operation is too frequent, please try again in a minute","Refresh failed, operation is too frequent, please try again in a minute","刷新失败,操作过于频繁，请一分钟之后再试", "Refresh failed, operation is too frequent, please try again in a minute","Thất bại, hoạt động quá thường xuyên, thử lại sau một phút","Penyegaran gagal, pengoperasian terlalu sering, coba lagi dalam satu menit"]
},{
	"key": 'RefreshFail_2',
	"val": ["刷新失败, 采集器不在线", "Refresh failed, collector is not online", "Refresh failed, collector is not online", "Refresh failed, collector is not online", "Refresh failed, collector is not online","Refresh failed, collector is not online","刷新失败, 采集器不在线", "Refresh failed, collector is not online"," Thất bại, bộ sưu tập không trực tuyến","Penyegaran gagal, kolektor tidak online"]
},{
	"key": 'RefreshFail_3',
	"val": ["刷新失败, 找不到数采器", "Refresh failed, can't find the collector", "Refresh failed, can't find the collector", "Refresh failed, can't find the collector", "Refresh failed, can't find the collector","Refresh failed, can't find the collector","刷新失败, 找不到数采器", "Refresh failed, can't find the collector","Không thể làm mới, không thể tìm thấy trình thu thập dữ liệu","Penyegaran gagal, tidak dapat menemukan kolektor"]
},{
	"key": 'RefreshFail_4',
	"val": ["刷新失败, 正在执行升级流程,请稍后再试", "Refresh failed, the upgrade process is being executed, please try again later", "Refresh failed, the upgrade process is being executed, please try again later", "Refresh failed, the upgrade process is being executed, please try again later", "Refresh failed, the upgrade process is being executed, please try again later","Refresh failed, the upgrade process is being executed, please try again later","刷新失败, 正在执行升级流程,请稍后再试", "Refresh failed, the upgrade process is being executed, please try again later","Thất  bại, quá trình nâng cấp đang được tiến hành, thử lại sau","Penyegaran gagal, proses peningkatan sedang dijalankan, coba lagi"]
},{
	"key": 'RefreshFail_5',
	"val": ["刷新失败,调用不成功,请稍后再试", "The refresh failed, the call was unsuccessful, please try again later", "The refresh failed, the call was unsuccessful, please try again later", "The refresh failed, the call was unsuccessful, please try again later", "The refresh failed, the call was unsuccessful, please try again later","The refresh failed, the call was unsuccessful, please try again later","刷新失败,调用不成功，请稍后再试", "The refresh failed, the call was unsuccessful, please try again later","Làm mới thất bại, cuộc gọi thất bại, vui lòng thử lại sau","Penyegaran gagal, panggilan tidak berhasil, coba lagi nanti"]
},{
	"key": 'RefreshFail_6',
	"val": ["刷新失败,采集器即将进入采集器流程,目前不支持手动刷新,请稍后再试", "The refresh failed, the collector is about to enter the collector process. Manual refresh is not supported at this time. Please try again later.", "The refresh failed, the collector is about to enter the collector process. Manual refresh is not supported at this time. Please try again later.", "The refresh failed, the collector is about to enter the collector process. Manual refresh is not supported at this time. Please try again later.", "The refresh failed, the collector is about to enter the collector process. Manual refresh is not supported at this time. Please try again later.","The refresh failed, the collector is about to enter the collector process. Manual refresh is not supported at this time. Please try again later.","刷新失败,采集器即将进入采集器流程,目前不支持手动刷新,请稍后再试", "The refresh failed, the collector is about to enter the collector process. Manual refresh is not supported at this time. Please try again later.","Thất bại. Trình thu thập sắp vào quy trình thu thập. Hiện tại, làm mới thủ công không được hỗ trợ. Vui lòng thử lại sau.","Penyegaran gagal, kolektor akan memasuki proses kolektor. Penyegaran manual tidak didukung saat ini. Silakan coba lagi nanti"]
},{
	"key": 'RefreshFail_7',
	"val": ["刷新失败,调用超时，请稍后再试", "Refresh failed, call timed out, please try again later", "Refresh failed, call timed out, please try again later", "Refresh failed, call timed out, please try again later", "Refresh failed, call timed out, please try again later","Refresh failed, call timed out, please try again later","刷新失败,调用超时，请稍后再试", "Refresh failed, call timed out, please try again later","Làm mới thất bại, cuộc gọi đã hết thời gian, vui lòng thử lại sau","Penyegaran gagal, waktu panggilan habis, coba lagi nanti"]
},{
	"key": 'RefreshFail_8',
	"val": ["刷新失败，请稍后再试", "Refresh failed, please try again later", "Refresh failed, please try again later", "Refresh failed, please try again later", "Refresh failed, please try again later","Refresh failed, please try again later","刷新失败，请稍后再试", "Refresh failed, please try again later","Làm mới thất bại, vui lòng thử lại sau","Penyegaran gagal, coba lagi nanti"]
},{
	"key": 'Search_Fails',
	"val": ["查找失败，请输入正确的PN号(注意大小写),支持模糊搜索!", "Failed to search, please enter the correct PN number (note the case), support fuzzy search", "Failed to search, please enter the correct PN number (note the case), support fuzzy search", "Failed to search, please enter the correct PN number (note the case), support fuzzy search", "Failed to search, please enter the correct PN number (note the case), support fuzzy search","Failed to search, please enter the correct PN number (note the case), support fuzzy search","查找失敗，請輸入正確的PN號(注意大小寫),支持模糊搜索", "Failed to search, please enter the correct PN number (note the case), support fuzzy search","Không thể tìm thấy, vui lòng nhập đúng số PN (lưu ý trường hợp), hỗ trợ tìm kiếm mờ!","Gagal mencari, harap masukkan nomor PN yang benar (perhatikan huruf besar atau kecil), dukung pencarian acak"]
},{
	"key": 'get_Code',
	"val": ["获取验证码", "Obtain Code", "Obtain Code", "Obtain Code", "Obtain Code","Obtain Code","獲取驗證碼", "Obtain Code","Obtain Code","kode verifikasi"]
},{
	"key": 'exceed_30day',
	"val": ["不能超过30天", "No More than 30 days", "Högst 30 dagar", "Não mais que 30 dias", "No más de 30 días","Nie więcej niż 30 dni","不能超過30天", "No More than 30 days","Không quá 30 ngày","Tidak lebih dari 30 hari"]
},{
	"key": 'select_a_device',
	"val": ["请选择一个设备", "Please select a device", "Välj en enhet", "Selecione um dispositivo", "Por favor seleccione un dispositivo","Wybierz urządzenie","請選擇一個設備", "Please select a device","Vui lòng chọn một thiết bị","Pilih satu perangkat"]
},{
	"key": 'no_IV',
	"val": ["I-V曲线不支持多设备间对比", "I-V curve does not support comparison between multiple devices", "I-V-kurvan stöder inte jämförelse mellan flera enheter", "A curva I-V não suporta comparação entre vários dispositivos", "La curva I-V no admite la comparación entre varios dispositivos","Krzywa I-V nie obsługuje porównania między wieloma urządzeniami","I-V曲線不支持多設備間對比", "I-V curve does not support comparison between multiple devices","Đường cong I-V không hỗ trợ so sánh giữa nhiều thiết bị","Kurva I-V tidak mendukung perbandingan antara beberapa perangkat"]
},{
	"key": 'no_IV2',
	"val": ["当前最多支持2个组串曲线进行比较", "Currently supports up to 2 string curves for comparison", "För närvarande stöder upp till två strängkurvor för jämförelse", "Atualmente suporta até 2 curvas de string para comparação", "Actualmente admite hasta 2 curvas de cuerda para comparación","Obecnie obsługuje do 2 krzywych struny do porównania","當前最多支持2個組串曲線進行比較", "Currently supports up to 2 string curves for comparison","Hiện hỗ trợ lên đến 2 đường cong chuỗi để so sánh","Saat ini mendukung hingga 2 kurva string untuk perbandingan"]
},{
	"key": 'IV_ERR_13',
	"val": ["设备正在执行切换组串，请不要进行其它操作", "The device is performing string switching, please do not perform other operations", "Enheten utför strängbyte. Utför inte andra åtgärder", "O dispositivo está realizando uma troca de string, não execute outras operações", "El dispositivo está realizando un cambio de cadena, no realice otras operaciones","Urządzenie wykonuje przełączanie łańcuchów, proszę nie wykonywać innych operacji","設備正在執行切換組串，請不要進行其它操作", "The device is performing string switching, please do not perform other operations","Thiết bị đang thực hiện chuyển đổi chuỗi, vui lòng không thực hiện các thao tác khác","Perangkat sedang melakukan peralihan string, harap jangan melakukan operasi lain"]
},{
	"key": 'notRemote_Upgrade',
	"val": ["此机型设备不支持远程升级", "This model device does not support remote upgrade", "This model device does not support remote upgrade", "This model device does not support remote upgrade", "This model device does not support remote upgrade","This model device does not support remote upgrade","此機型設備不支持遠程升級", "This model device does not support remote upgrade","This model device does not support remote upgrade","This model device does not support remote upgrade"]
},{
	"key": 'Default_node',
	"val": ["默认节点", "Default node", "standardnod", "nó padrão", "nodo predeterminado","domyślny węzeł","默認節點", "Default node","nút mặc định","simpul default"]
},
];

//普通js动态信息
function getMultiLangError(desc) {
	var langId = storage_i18n_get_id();
	var info = "";
	for(var i = 0; i < WS_ERR_DYNAMIC_MAP.length; i++) {
		if(WS_ERR_DYNAMIC_MAP[i].key == desc) {
			info = WS_ERR_DYNAMIC_MAP[i].val[langId];
			break;
		}
	}
	return info;
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/**所有validation生成错误提示的多语言实现函数,lang id 0-中文,1-英语,2-瑞典*/
/**                                                                  */
/** ---------------------------------------------------------------- */
WS_ERR_VALIDATION_MAP = new Array();
WS_ERR_VALIDATION_MAP = [{
	"key": "required",
	"val": ["* 此处不可空白", "* This field is required", "* This field is required", "* This field is required", "* No se puede poner en blanco aquí","* To pole jest wymagane","* 此處不可空白", "* This field is required","* Điều này không thể để trống","* Bagian ini diperlukan"]
}, {
	"key": "checkbox",
	"val": ["* 您必须钩选此栏", "* This checkbox is required", "* This checkbox is required", "* This checkbox is required", "* tiene que ganarse la columna.","* Musisz wybrać przynajmniej jedna opcję","* 您必須鉤選此欄", "* This checkbox is required","* Bạn phải kiểm tra cột này","* Kotak centang ini wajib diisi"]
}, {
	"key": "datalog",
	"val": ["* 无效的数采器编号", "* Invalid datalog pn", "* Invalid datalog pn", "* Invalid datalog pn", "* Número de identificación nulo nulo","* Nieprawidłowy numer PN urządzenia monitorującego","* 無效的數採器編號", "* Invalid datalog pn","* Số người thu thập dữ liệu không hợp lệ","* Datalog pn tidak valid"]
}, {
	"key": "minSize_01",
	"val": ["* 最少 ", "* Minimum ", "* Minimum ", "* mínimo","* Co najmniej","* 最少", "* Minimum ","* Ít nhất","* Minimum"]
}, {
	"key": "minSize_02",
	"val": [" 个字符", " characters required", " characters required", " characters required", "Caracteres","znaków jest wymaganych","個字符", " characters required","Nhân vật","karakter yang dibutuhkan"]
}, {
	"key": "maxSize_01",
	"val": ["* 最多 ", "* Maximum ", "* Maximum ", "* Maximum ", "* máximo","* Maksymalnie","* 最多", "* Maximum ","* Lên đến","* Maksimal"]
}, {
	"key": "maxSize_02",
	"val": [" 个字符", " characters allowed", " characters allowed", " characters allowed", "Caracteres","znaków jest wymaganych","個字符", " characters allowed","Nhân vật","karakter yang dibutuhkan"]
}, {
	"key": "equals",
	"val": ["* 请输入与上面相同的密码", "* Fields do not match", "* Fields do not match", "* Fields do not match", "* introduzca la contraseña idéntica a la de arriba","*Podane hasła są różne","* 請輸入與上面相同的密碼", "* Fields do not match","* Làm ơn hãy nhập mật mã giống như ở trên","* Kolom tidak cocok"]
}, {
	"key": "phone",
	"val": ["* 无效的电话号码", "* Invalid phone number", "* Invalid phone number", "* Invalid phone number", "* Número de teléfono ineficaz","* Nieprawidłowy numer telefonu","* 無效的電話號碼", "* Invalid phone number","* Số điện thoại không hợp lệ","* Nomor telepon tidak valid"]
}, {
	"key": "email",
	"val": ["* 邮件地址无效", "* Invalid email address", "* Invalid email address", "* Invalid email address", "* La Dirección de correo no es válida.","* Nieprawidłowy adres email","* 郵件地址無效", "* Invalid email address","* Địa chỉ email không hợp lệ","* Alamat email salah"]
}, {
	"key": "zujiangonglv",
	"val": ["组件功率", "Component power", "Component power", "Component power", "Component power","Moc panelu PV","組件功率", "Component power","Sức mạnh thành phần","Tenaga panel surya"]
}, {
	"key": "zujiandianya",
	"val": ["组件电压", "Component voltage", "Component voltage", "Component voltage", "Component voltage","Napięcie panelu PV","組件電壓", "Component voltage","Thành phần điện áp","Tegangan panel surya"]
}, {
	"key": "zujiandianliu",
	"val": ["组件电流", "Component current", "Component current", "Component current", "Component current","Prąd panelu PV","組件電流", "Component current","Thành phần hiện tại","Arus panel surya"]
}, {
	"key": "zujianbianma",
	"val": ["组件编码", "Component current", "Component current", "Component current", "Component current","ID","組件編碼", "Component current","Mã hóa thành phần","Indo"]
}, {
	"key": "dianya",
	"val": ["电压", "Voltage", "Voltage", "Voltage", "Voltage","Napięcie","電壓", "Voltage","Vôn","Tegangan"]
}, {
	"key": "dianliu",
	"val": ["电流", "Current", "Current", "Current", "Current","Prąd","電流", "Current","Dòng điện","Arus"]
},  {
	"key": "gonglv",
	"val": ["功率", "Power", "ström", "Potência", "Potencia","Moc","功率", "Power","quyền lực","Kekuasaan"]
},{
	"key": "bianma",
	"val": ["组件编码", "ID", "ID", "ID", "ID","ID","組件編碼", "ID","Mã hóa thành phần","Indo"]
}]
 

//validation动态js信息
function getValiMultiLangError(desc) {
	var langId = storage_i18n_get_id();
	var info = "";
	for(var i = 0; i < WS_ERR_VALIDATION_MAP.length; i++) {
		if(WS_ERR_VALIDATION_MAP[i].key == desc) {
			info = WS_ERR_VALIDATION_MAP[i].val[langId];
			break;
		}
	}
	return info;
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/**后台错误码多语言,传入code,lang 0-中文,1-英语,2-瑞典语,... 5-波兰		*/
/**                                                                  */
/** ---------------------------------------------------------------- */
/** 错误码描述对应中英文词典. */
WS_ERR_MAP = new Array();
WS_ERR_MAP = [
	["成功", "success", "Lyckat", "Sucesso", "éxito","Powodzenie"],
	["失败", "failed", "Misslyckas", "Falha", "Fracasar","NIepowodzenie"],
	["不支持的操作", "can not find action", "Kan inte hitta handling", "can not find action", "Operaciones no apoyadas","NIe mozna odnalęźć własciwego działania"],
	["格式错误", "format error", "Format fel", "Erro no formato", "Error de formato","Zły format"],
	["缺少必要的参数", "missing parameter", "Nödvändlig parametrar saknas", "Parâmetro Ausente", "Falta de los parámetros necesarios","Brakujący parametr"],
	["系统异常,请稍后再试", "system exception", "Systemet onormal", "Exceção do Sistema", "El sistema es anormal. Por favor, probemos más tarde.","Wyjątek systemowy"],
	["未登录", "not authenticate", "inte registrerat", "Sem autenticação", "No.","Nie zautoryzowano"],
	["注册失败,用户名已存在", "fail register,the username has been existed", "Registreringen misslyckas, användarnamn finns redan", "Falha ao registrar, nome do usuário já existente", "El nombre del usuario ya existe.","Błąd rejestracji podany użytkownik już istnieje"],
	["用户名或密码错误", "fail login,may be the username or password is wrong", "Användarnamn eller lösenord är felaktigt", "Falha no login, senha ou usuário incorretos", "Error de usuario o contraseña","Błąd logowania , możliwa błędna nazwa użytkownika lub hasło"],
	["您所在的用户组无权限进行此操作", "sorry, you don not have the permission to do it", "Inga rättigheter för denna operation", "sorry, you don not have the permission to do it", "Su Grupo de usuarios no tiene competencia para llevar a cabo esta operación","Przepraszamy nie masz uprawnien Smartx żeby to zrobić"],
	["找不到", "fail to find it", "Det går inte att hitta", "Não encontrado", "No puedo encontrarla.","Błąd odnalezienia tego"],
	["没有权限操作", "the server forbidden to do it", "servern avslår", "O servidor não tem autorização para fazer isso", "Operación sin autorización","Server ma zakaz wykonania tej operacji"],
	["并发修改,请稍后再试", "concurrent modify is not supported", "samtidiga modifikationer", "A modificação simultanea não é suportada", "Revisen y revisen más tarde.","Bieżąca modyfikacje nie jest wspierana"],
	["采集器序列号重复注册", "fail register,the collector SN has been registered before", "Collector duplikat, serienummer redan registrerat", "Falha ao registrar, o coletor SN já foi registrado anteriormente", "Número de serie del colector","NIepowodzenie rejestracji kolektora , został on już wczesniej zarejestrowany"],
	["重复的名称", "duplicate name", "Duplicate namn", "Nome duplicado", "Nombre repetitivo","Zduplikowana nazwa"],
	["超时", "time out", "timeout", "tempo esgotado", "Hora","Przekroczony czas operacji"],
	["无法验证的签名", "Unable to verify the signature", "Det går inte att verifiera signaturen", "Não foi possível verificar a assinatura", "Firma incertificada","Niemozliwe zweryfikowanie podpisu"],
	["无采集器", "no collector", "Ingen kollektor", "Sem coletor", "No hay colectores.","Brak kolektora"],
	["无逆变器", "no inverter", "Ingen inverter", "Sem inversor", "Transmisor","Brak invertera"],
	["不支持", "no supported", "stöder inte", "Sem suporte", "Sin apoyo","NIe jest wspierane"],
	["无设备", "no device", "Ingen enhet", "Nenhum dispositivo", "No hay equipo.","Brak urzadzenia"],
	["无电站", "no plant", "Ingen anläggning", "Sem planta", "Estación eléctrica sin electricidad","Brak instalacji PV"],
	["请求已接收", "Request has been received", "Begäran har mottagits", "O pedido foi recebido", "Solicitud de recepción","Odebrano żądanie"],
	["未确认", "unconfirmed", "obekräftad", "Não confirmado", "No confirmado","Niepotwierdzono"],
	["已确认", "confirmed", "bekräftade", "Sem coletor", "Confirmado.","Potwierdzono"],
	["E币不足", "E currency shortage", "E valuta brist", "E currency shortage", "No es suficiente.","Symbol waluty elektronicznej"],
	["无记录", "no record", "Ingen inspelning", "no record", "No hay registros.","Brak danych"],
	["账号被冻结", "user disabled", "Användare avstängd", "user disabled", "El número de cuenta está congelado.","Użytkownik zablokowany"],
	["找不到定义的角色", "can not find the role", "Kan inte hitta rollen", "can not find the role", "No puede encontrar un personaje en la definición.","NIe można odnaleźć roli"],
	["重复的操作", "duplicate operation", "Upprepad operation", "duplicate operation", "Operación repetitiva","Zduplikowana operacja"],
	["电站下还有未删除的设备", "device are not completely removed under the Power Station", "Utrustningen är inte helt borttagen under anläggningen", "device are not completely removed under the Power Station", "Hay equipo que no se ha suprimido en la central eléctrica.","Urządzenie nie zostało całkowicie usunietez instalacji PV"],
	["设备已离线", "The device is offline", "utrustning som har -", "The device is offline", "El equipo está fuera de la línea.","Urządzenie jest wyłączone"],
	["设备状态错误", "Device status error", "apparaten fel", "Device status error", "Error de Estado de equipo","Błąd statusu urządzenia"],
	["采集器已经被添加", "The collector has been added by other users", "kollektor har Duplicate namn", "The collector has been added by other users", "El colector ha sido añadido.","Kolektor danych został juz dodany pzrzez innego użytkownika"],
	["找不到指定用户", "The specified user cannot be found", "kan inte hitta en viss användare", "The specified user cannot be found", "No hay ningún usuario designado.","Wybrany użytkownik nie moze być znaleziony"],
	["无效的PN号", "Invalid PN number", "ogiltigt pn -", "Invalid PN number", "No. PN, no. Pn.","Zły numer seryjny"],
	["摄像头PN已存在", "The camera PN already exists", "pn har funnits.", "The camera PN already exists", "La Cámara está ahí.","Numer kamery już istnieje"],
	["摄像头PN,SN对应信息未添加", "Camera PN, SN corresponding information is not added", "kamera pn, sn motsvarande information utan att lägga till", "Camera PN, SN corresponding information is not added", "La Cámara PN, SN no agrega información.","Numer seryjny Kamery - nie dodano wartości"],
	["摄像头信息重复添加", "Camera information added repeatedly", "Camera information added repeatedly", "Cámara de cámara","Powtórnie dodano kamerę"],
	["电站超出上限请另建用户,电站数量不能超出三百个", "Excess power limit， Please build another user", "Excess power limit， Please build another user", "Excess power limit， Please build another user", "La central eléctrica va más allá de la tope, por favor.","Prekreczono imit mocy , prosze zbuduj innego użytkownika"],
	["采集器超出上限请另建电站", "Excess collector limit，Please build another power station", "Excess collector limit，Please build another power station", "Excess collector limit，Please build another power station", "El colector va más allá del límite máximo, por favor.","Przekroczono limit liczby kolektorów ,Proszwe zbuduj inna instalację PV"]
]
// 0-中文,1-英语,2-瑞典语  ,3-葡萄牙语（巴西）	4-西班牙语（巴西）	5-波兰语   6-中文繁体	7-印度语 8-越南语 9-印尼
GET_ERR_DESC = new Array();
GET_ERR_DESC = [
{
	"key":"err333",
	"val": ["￥", "$", "kr", "R$", "€","zł","￥ ", "₹","$","￥"]
},{
	"key": "err0",
	"val": ["正常, 无错误", "Normal, no error", "Normal, no error", "Normal, no error", "Normal, sin error.","Brak bledow","正常, 無錯誤", "Normal, no error","Bình thường, không có lỗi","Normal, tidak ada kesalahan"]
}, {
	"key": "err1",
	"val": ["失败", "fail", "fail", "fail", "Fracasar","Niepowodzenie","失敗", "fail","sự thất bại","gagal"]
}, {
	"key": "err2",
	"val": ["超时，系统繁忙，请稍后再试", "overtime", "overtime", "overtime", "El sistema está muy ocupado. Por favor, probemos más tarde.","Przekroczono limit czasu","超時，系統繁忙，請稍後再試", "overtime","Hết giờ, hệ thống đang bận, vui lòng thử lại sau","lembur"]
}, {
	"key": "err3",
	"val": ["系统繁忙，请稍后再试", "System abnormality", "System abnormality", "System abnormality", "El sistema está ocupado. Por favor, probemos más tarde.","System jest zajety, spobuj ponownie pozniej","系統繁忙，請稍後再試", "System abnormality","Hệ thống đang bận, vui lòng thử lại sau","Kelainan sistem"]
}, {
	"key": "err4",
	"val": ["请勿输入特殊字符（无法验证的签名）", "Salt is wrong and is not used by rules", "Salt is wrong and is not used by rules", "Salt is wrong and is not used by rules", "Por favor, no introduzca un caracteres especiales (firmas incertificadas)","Nie uzywaj znakow specjalnych","請勿輸入特殊字符（無法驗證的簽名）", "Salt is wrong and is not used by rules","Không nhập các ký tự đặc biệt (chữ ký không thể xác minh)","Jangan masukkan karakter khusus (tanda tangan yang tidak dapat diverifikasi)"]
}, {
	"key": "err5",
	"val": ["盐值错误, 未按规则使用", "An non verifying signature", "An non verifying signature", "An non verifying signature", "Error del valor de la sal, no utilizado de conformidad con las reglas","Nie zweryfikowany podpis","鹽值錯誤, 未按規則使用", "An non verifying signature","Lỗi giá trị muối, không được sử dụng theo quy tắc","Tanda tangan non verifikasi"]
}, {
	"key": "err6",
	"val": ["参数格式错误", "Parameter format error", "Parameter format error", "Parameter format error", "Error de formato","Nieprawidlowy format parametru","參數格式錯誤", "Parameter format error","Lỗi định dạng tham số","Kesalahan format parameter"]
}, {
	"key": "err7",
	"val": ["缺少必要的参数", "Platform refusal", "Platform refusal", "Platform refusal", "Falta de los parámetros necesarios","Brak niezbednych parametrów","缺少必要的參數", "Platform refusal","Thiếu thông số cần thiết","Penolakan platform"]
}, {
	"key": "err8",
	"val": ["平台拒绝", "Non privileged operation", "Non privileged operation", "Non privileged operation", "La Plataforma se niega.","Niedozwolona operacja","平台拒絕", "Non privileged operation","Nền tảng từ chối","Operasi tanpa hak istimewa"]
}, {
	"key": "err9",
	"val": ["不支持的操作", "Lack of necessary parameters", "Lack of necessary parameters", "Lack of necessary parameters", "Operaciones no apoyadas","Brak wymaganych parametrow","不支持的操作", "Lack of necessary parameters","Hoạt động không được hỗ trợ","Kurangnya parameter yang diperlukan"]
}, {
	"key": "err10",
	"val": ["未通过认证，请退出重新登录", "Not authenticated", "Not authenticated", "Not authenticated", "Sin certificar, por favor, renuncie.","Nie zautoryzowano","未通過認證，請退出重新登錄", "Not authenticated","Không thể xác thực, vui lòng đăng xuất và đăng nhập lại","Tidak diautentikasi"]
}, {
	"key": "err11",
	"val": ["无权限的操作,请联系上级管理员", "Unauthorized operation,Please contact the superior administrator", "Kontakta den överordnade administratören för obehörig verksamhet", "Para operações não autorizadas, entre em contato com o administrador superior", "Para operaciones no autorizadas, comuníquese con el administrador superior","W przypadku nieautoryzowanych operacji prosimy o kontakt z przełożonym administratorem","無權限的操作,請聯繫上級管理員", "Unauthorized operation,Please contact the superior administrator","Đối với các hoạt động trái phép, vui lòng liên hệ với quản trị viên cấp trên","Operasi tidak didukung"]
}, {
	"key": "err12",
	"val": ["无记录", "No record", "No record", "No record", "No hay registros.","Brak danych","無記錄", "No record","không có hồ sơ","Tidak ada catatan"]
}, {
	"key": "err13",
	"val": ["超出限制", "Beyond the limit", "Beyond the limit", "Beyond the limit", "Límite máximo","Przekroczono limit","超出限制", "Beyond the limit","Vượt quá giới hạn","Melampaui batas"]
}, {
	"key": "err14",
	"val": ["重复的操作", "Repeated operations", "Repeated operations", "Repeated operations", "Operación repetitiva","Powtórzone operacje","重複的操作", "Repeated operations","Hoạt động lặp đi lặp lại","Operasi berulang"]
}, {
	"key": "err15",
	"val": ["没有找到厂家key", "No manufacturer key", "No manufacturer key", "No manufacturer key", "No hay ninguna clave.","Nie znaleziono klucza producenta","沒有找到廠家key", "No manufacturer key","Không tìm thấy khóa nhà sản xuất","Tidak ada kunci pabrikan"]
}, {
	"key": "err16",
	"val": ["密码错误", "Password verification failure", "Password verification failure", "Password verification failure", "Error de contraseña","Błędne hasło","密碼錯誤", "Password verification failure","sai mật khẩu","Kegagalan verifikasi kata sandi"]
}, {
	"key": "err17",
	"val": ["密码错误", "Password format error", "Password format error", "Password format error", "Error de contraseña","Błędny format hasła","密碼格式錯誤", "Password format error","Lỗi định dạng mật khẩu","Kesalahan format kata sandi"]
}, {
	"key": "err18",
	"val": ["手机号已绑定，请更换手机号，或解除绑定", "The phone number has been bound", "The phone number has been bound", "The phone number has been bound", "El número de celular ha sido secuestrado, por favor, cambie el número de teléfono o desconecta el secuestro.","Ten numer telefonu jest już używany","手機號已綁定，請更換手機號，或解除綁定", "The phone number has been bound","Số điện thoại di động bị ràng buộc, vui lòng thay đổi số điện thoại di động hoặc hủy liên kết","Nomor telepon telah terikat"]
}, {
	"key": "err19",
	"val": ["电话号码格式错误（6<=号码长度<32）", "Telephone number format error", "Telephone number format error", "Telephone number format error", "Error de formato del número de teléfono (6 = número de longitud < 32)","Błędny format numeru telefonu","電話號碼格式錯誤（6<=號碼長度<32）", "Telephone number format error","Lỗi định dạng số điện thoại (6 <= chiều dài số <32)","Kesalahan format nomor telepon (6 <= telepon <32)"]
}, {
	"key": "err20",
	"val": ["邮箱格式错误（6<=邮箱长度<64,并包含@符号", "User name format error", "User name format error", "User name format error", "Error en el formulario de correo electrónico (6 < = longitud de la dirección de correo < 64 y contiene @ símbolo)","Format adresu email jest nieprawidłowy (musi zawierać symbol @)","郵箱格式錯誤（必須包含@符號）", "User name format error","Lỗi định dạng hộp thư (phải bao gồm ký @)","Kesalahan dalam format kotak surat (harus mengandung simbol @)"]
}, {
	"key": "err21",
	"val": ["用户名格式错误（2<=用户名长度<32）", "Mailbox format error", "Mailbox format error", "Mailbox format error", "Error de formato de usuario (2 < = longitud de un usuario < 32)","Błędny format nazwy użytkownika","用戶名格式錯誤（2<=用戶名長度<32）", "Mailbox format error","Lỗi định dạng tên người dùng (2 <= chiều dài tên người dùng <32)","Kesalahan format nama pengguna (2 <= pengguna <32)"]
}, {
	"key": "err22",
	"val": ["公司名称格式错误", "Company name format error", "Company name format error", "Company name format error", "Error de formato del nombre de la empresa","Błedny format nazwy firmy","公司名稱格式錯誤", "Company name format error","Định dạng tên công ty sai","Kesalahan format nama perusahaan"]
}, {
	"key": "err23",
	"val": ["厂家编码无效，请验证编码是否填写正确", "Manufacturer's code is invalid", "Manufacturer's code is invalid", "Manufacturer's code is invalid", "El Código del fabricante no es válido, por favor.","Nieprawidłowy kod producenta","廠家編碼無效，請驗證編碼是否填寫正確", "Manufacturer's code is invalid","Mã nhà sản xuất không hợp lệ, vui lòng xác minh rằng mã được điền chính xác","Kode produsen tidak valid"]
}, {
	"key": "err24",
	"val": ["用户名重复", "repeat of user name", "repeat of user name", "repeat of user name", "Nombre de usuario repito","Powtórz nazwę użytkownika","用戶名重複", "repeat of user name","Tên người dùng trùng lặp","ulangi nama pengguna"]
}, {
	"key": "err256",
	"val": ["无数据", "Can't find the API to call", "Can't find the API to call", "Can't find the API to call", "找不到要调用的API(此为测试帐号)", "No se dispone de datos","Brak danych","無數據", "Can't find the API to call","không có dữ liệu","Tidak ada catatan"]
}, {
	"key": "err257",
	"val": ["无数采器", "No equipment can be found", "No equipment can be found", "No equipment can be found", "Innumerables senadores","Nie można znaleźć liczby urządzeń monitorujących","無數採器", "No equipment can be found","Vô số người sưu tầm","Tidak dapat menemukan sejumlah penambang"]
}, {
	"key": "err258",
	"val": ["无设备", "Can not find a number of miner", "Can not find a number of miner", "Can not find a number of miner", "No hay equipo.","Brak sprzętu","無設備", "Can not find a number of miner","Không có thiết bị","Tidak ada peralatan"]
}, {
	"key": "err259",
	"val": ["无效的数采器编号", "Invalid number of miner number", "Invalid number of miner number", "Invalid number of miner number", "Número de numerador nulo","Nieprawidłowa liczna urządzeń monitorujących","無效的數採器編號", "Invalid number of miner number","Số người thu thập dữ liệu không hợp lệ","Jumlah nomor penambang tidak valid"]
}, {
	"key": "err260",
	"val": ["无电站", "No power station can be found", "No power station can be found", "No power station can be found", "Estación eléctrica sin electricidad","Nie znaleziono instalacji PV","無電站", "No power station can be found","Không có trạm điện","Tidak ada pembangkit listrik"]
}, {
	"key": "err261",
	"val": ["无用户", "Unable to find the user", "Unable to find the user", "Unable to find the user", "No hay usuario","Nie można znaleźć użytkownika","無用戶", "Unable to find the user","Không có người dùng","Tidak dapat menemukan pengguna"]
}, {
	"key": "err262",
	"val": ["设备已离线", "The equipment has been off-line", "The equipment has been off-line", "The equipment has been off-line", "El equipo está fuera de la línea.","Mikroinwerter jest wyłączony","設備已離線", "The equipment has been off-line","Thiết bị đang ngoại tuyến","Peralatannya sudah off-line"]
}, {
	"key": "err263",
	"val": ["数采器已离线", "The miner has been off-line", "The miner has been off-line", "The miner has been off-line", "Los senadores se han desconectado.","Urządzenie monitorujące jest wyłączone","數採器已離線", "The miner has been off-line","Bộ dữ liệu ngoại tuyến","Penambang telah off-line"]
}, {
	"key": "err264",
	"val": ["无设备告警", "No alarm for equipment", "No alarm for equipment", "No alarm for equipment", "No hay ningún denunciante.","Brak alarmu urządzenia","無設備告警", "No alarm for equipment","Không có báo động thiết bị","Tidak ada alarm untuk peralatan"]
}, {
	"key": "err265",
	"val": ["无环境检测仪", "No environment detector can be found", "No environment detector can be found", "No environment detector can be found", "Detector sin medio ambiente","Brak detektora środowiskowego","無環境檢測儀", "No environment detector can be found","Không có máy dò môi trường","Tidak ada detektor lingkungan"]
}, {
	"key": "err271",
	"val": ["无任何修改操作", "No modification operation", "No modification operation", "No modification operation", "Sin cambios","Brak operacji modyfikacji","無任何修改操作", "No modification operation","Không sửa đổi","Tidak ada operasi modifikasi"]
}, {
	"key": "err272",
	"val": ["重复绑定", "Repeat binding", "Repeat binding", "Repeat binding", "Duplicar","Powtórz powiązanie","重複綁定", "Repeat binding","Lặp lại liên kết","Ulangi penjilidan"]
}, {
	"key": "err273",
	"val": ["不支持添加其他厂家的数采器", "Does not support adding diggers for other manufacturers", "Does not support adding diggers for other manufacturers", "Does not support adding diggers for other manufacturers", "No apoyar la adición de otras plantas.","Dodawanie urządzeń monitorujących innych producentów nie jest obsługiwane","不支持移動含有其他廠家的數採器的電站業主", "Does not support adding diggers for other manufacturers","Không hỗ trợ thêm người thu thập dữ liệu từ các nhà sản xuất khác","Tidak mendukung penambahan pengumpul data dari produsen lain"]
}, {
	"key": "err288",
	"val": ["无摄像头", "Can't find a camera", "Can't find a camera", "Can't find a camera", "No hay cámaras.","Brak kamery","無攝像頭", "Can't find a camera","Không có máy ảnh","Tidak dapat menemukan kamera"]
}, {
	"key": "err352",
	"val": ["无固件", "No firmware can be found", "No firmware can be found", "No firmware can be found", "Sin terco","Brak oprogramowania firmware","無固件", "No firmware can be found","Không có chương trình cơ sở","Tidak ada firmware"]
}, {
	"key": "err353",
	"val": ["无协议", "No role can be found", "No role can be found", "No role can be found", "No hay acuerdo.","Nie znaleziono oprogramowania firmware","無協議", "No role can be found","Không thỏa thuận","Tidak ada protokol"]
}, {
	"key": "err368",
	"val": ["无角色", "No agreement can be found", "No agreement can be found", "No agreement can be found", "No hay papeles.","Brak roli użytkownika","無角色", "No agreement can be found","Không có vai trò","Tidak ada peran"]
}, {
	"key": "err369",
	"val": ["无用户分组", "No user groupings can be found", "No user groupings can be found", "No user groupings can be found", "Subgrupos sin usuarios","Brak grupowania użytkowników","無用戶分組", "No user groupings can be found","Không có nhóm người dùng","Tidak ada pengelompokan pengguna"]
}, {
	"key": "err370",
	"val": ["无电站分组", "No power station grouping can be found", "No power station grouping can be found", "nenhum grupo de usinas pode ser encontrado", "Subgrupo de estación eléctrica","Brak grupowania systemów PV","無電站分組", "No power station grouping can be found","Không có nhóm trạm điện","Tidak ada pengelompokan pembangkit listrik"]
}, {
	"key": "err371",
	"val": ["无GPRS流量充值套餐", "No GPRS traffic recharge package can be found", "No GPRS traffic recharge package can be found", "No GPRS traffic recharge package can be found", "GPRS","Brak pakietu transmisji danych GPRS","無GPRS流量充值套餐", "No GPRS traffic recharge package can be found","Không có gói nạp dữ liệu GPRS","Tidak ada paket isi ulang lalu lintas GPRS"]
}, {
	"key": "err372",
	"val": ["无GPRS流量充值订单", "No GPRS traffic filling order can be found", "No GPRS traffic filling order can be found", "No GPRS traffic filling order can be found", "Orden de recarga del GPRS","Brak poloczenia GPRS","無GPRS流量充值訂單", "No GPRS traffic filling order can be found","Không có thứ tự nạp lại GPRS","Tidak ada urutan pengisian lalu lintas GPRS"]
}, {
	"key": "err384",
	"val": ["短信验证码错误", "Short message verification code can not be found", "Short message verification code can not be found", "Short message verification code can not be found", "Código de certificación sin mensajes","Brak kodu weryfikacyjnego SMS","短信驗證碼錯誤", "Short message verification code can not be found","Lỗi mã xác minh SMS","Kode verifikasi pesan singkat tidak"]
}, {
	"key": "err385",
	"val": ["无device_token", "Can't find device_token", "Can't find device_token", "Can't find device_token", "Sin devoción","Brak tokenu urządzenia","無device_token", "Can't find device_token","Không có device_token","Tidak dapat menemukan device_token"]
}, {
	"key": "err386",
	"val": ["无设备配置信息", "No device configuration information can be found", "No device configuration information can be found", "No device configuration information can be found", "Información sobre configuración de equipo","Brak informacji o konfiguracji urządzenia","無設備配置信息", "No device configuration information can be found","Không có thông tin cấu hình thiết bị","Tidak ada informasi konfigurasi perangkat"]
}, {
	"key": "err387",
	"val": ["找不到数采器类型", "Can not find the type of the miner", "Can not find the type of the miner", "Can not find the type of the miner", "No hay ningún tipo de extracción.","Nieznany typ urządzenia monitorującego","無數採器類型", "Can not find the type of the miner","Không tìm thấy loại logger dữ liệu","Tidak dapat menemukan tipe penambang"]
}, {
	"key": "err512",
	"val": ["短信验证码不匹配", "Mismatch of SMS authentication code", "Mismatch of SMS authentication code", "Mismatch of SMS authentication code", "El Código de texto no coincide con el Código de certificación.","Błedny kod weryfikacyjny SMS","短信驗證碼不匹配", "Mismatch of SMS authentication code","Mã xác minh SMS không khớp","Ketidakcocokan kode otentikasi SMS"]
}, {
	"key": "err513",
	"val": ["验证码已发送，请稍候再试", "The verification code has been sent. Please try again later.", "The verification code has been sent. Please try again later.", "The verification code has been sent. Please try again later.", "Se ha enviado el código de verificación. Vuelve a intentarlo más tarde.","Kod weryfikacyjny został wysłany. Spróbuj ponownie później.","驗證碼已發送，請稍候再試", "The verification code has been sent. Please try again later.","Mã xác minh đã được gửi, vui lòng thử lại sau","Kode verifikasi telah dikirim, coba lagi nanti"]
}, {
	"key": "err514",
	"val": ["电话号码未绑定", "Phone number mismatch", "Phone number mismatch", "Phone number mismatch", "El número de teléfono no está condicionado.","Numer telefonu nie jest powiązany","電話號碼未綁定", "Phone number mismatch","Số điện thoại không bị ràng buộc","Nomor telepon tidak terikat"]
}, {
	"key": "err515",
	"val": ["电话号码不匹配", "Phone number unbound", "Phone number unbound", "Phone number unbound", "El número de teléfono no coincide.","Niezgodny numer telefonu","電話號碼不匹配", "Phone number unbound","Số điện thoại không khớp","Nomor telepon tidak cocok"]
}, {
	"key": "err516",
	"val": ["名称不能同名", "Name can not be the same name", "Name can not be the same name", "Name can not be the same name", "El nombre no puede ser el mismo nombre.","Nazwa / Imię nie może się powtarzać?","名稱不能同名", "Name can not be the same name","Tên không thể giống nhau","Nama tidak boleh sama dengan nama"]
}, {
	"key": "err517",
	"val": ["用户或电站下还存在数采器", "There is also a number of miner under the user or power station", "There is also a number of miner under the user or power station", "There is also a number of miner under the user or power station", "Los usuarios o los electrodos en el usuario o en la estación","Użytkownik lub instalacja posiadają już urządzenia monitorujące","用戶或電站下還存在數採器", "There is also a number of miner under the user or power station","Ngoài ra còn có người thu thập dữ liệu dưới người dùng hoặc trạm điện","Ada juga sejumlah penambang di bawah pengguna atau pembangkit listrik"]
}, {
	"key": "err518",
	"val": ["用户还存在下属用户", "The user also has a subordinate user", "The user also has a subordinate user", "The user also has a subordinate user", "El usuario ya existe.","Użytkownik ma również podległych użytkowników","用戶還存在下屬用戶", "The user also has a subordinate user","Người dùng cũng có người dùng cấp dưới","Pengguna juga memiliki pengguna bawahan"]
}, {
	"key": "err519",
	"val": ["用户已存在", "The user has already existed", "The user has already existed", "The user has already existed", "El usuario ya existe","Użytkownik już istnieje","用戶已存在", "The user has already existed","Người dùng đã tồn tại","Pengguna sudah ada"]
}, {
	"key": "err520",
	"val": ["数采器编号已被注册", "The number of the miner has been registered", "The number of the miner has been registered", "The number of the miner has been registered", "El número de identificación se ha registrado","Numer seryjny został zarejestrowany","數採器編號已被註冊", "The number of the miner has been registered","Số logger đã được đăng ký","Jumlah penambang telah terdaftar"]
}, {
	"key": "err521",
	"val": ["数采器不属于该用户", "The receiver does not belong to the user", "The receiver does not belong to the user", "The receiver does not belong to the user", "Los usuarios no pertenecen al usuario.","Urządzenie monitorujące nie należy do tego użytkownika","數採器不屬於該用戶", "The receiver does not belong to the user","Trình thu thập dữ liệu không thuộc về người dùng","Penerima bukan milik pengguna"]
}, {
	"key": "err522",
	"val": ["数采器已存在", "The number of miner has already existed", "The number of miner has already existed", "The number of miner has already existed", "Los senadores ya existen.","Urządzenie monitorujące już istnieje","數採器已存在", "The number of miner has already existed","Logger đã tồn tại","Jumlah penambang sudah ada"]
}, {
	"key": "err523",
	"val": ["不是浏览者账号", "Only support the owner of the power station", "Only support the owner of the power station", "Only support the owner of the power station", "No es el número de cuenta del navegador.","Dozwolone tylko dla wlasciciela instalacji PV","不是瀏覽者賬號", "Only support the owner of the power station","Không phải tài khoản trình duyệt","Hanya mendukung pemilik pembangkit listrik"]
}, {
	"key": "err768",
	"val": ["协议中没有可选字段", "There is no optional field in the protocol", "There is no optional field in the protocol", "There is no optional field in the protocol", "No hay opción en el Acuerdo","Brak opcjonalnych pól w protokole","協議中沒有可選字段", "There is no optional field in the protocol","Không có trường tùy chọn trong thỏa thuận","Tidak ada bidang opsional dalam protokol"]
}, {
	"key": "err1024",
	"val": ["只支持电站业主", "Not the browsers' account", "Not the browsers' account", "Not the browsers' account", "Sólo apoyo a los propietarios de la central eléctrica.","Obsługa tylko dla właścicieli systemów PV","只支持電站業主", "Not the browsers' account","Chỉ hỗ trợ chủ sở hữu nhà máy","Bukan akun browser"]
}, {
	"key": "err1025",
	"val": ["只支持管理员", "Only support dealers", "Only support dealers", "Only support dealers", "Sólo apoyo a los administradores.","Obsługa tylko dla administratorów","只支持管理員", "Only support dealers","Chỉ hỗ trợ quản trị viên","Hanya mendukung dealer"]
}, {
	"key": "err1026",
	"val": ["只支持设备厂家", "Only support equipment manufacturers", "Only support equipment manufacturers", "Only support equipment manufacturers", "Sólo apoyo a los fabricantes de equipo.","Obsługa tylko dla producentów sprzętu","只支持設備廠家", "Only support equipment manufacturers","Chỉ hỗ trợ nhà sản xuất thiết bị","Hanya produsen peralatan pendukung"]
}, {
	"key": "err1027",
	"val": ["上级用户需要是管理员或设备厂家", "A superior user needs to be a distributor or equipment manufacturer", "A superior user needs to be a distributor or equipment manufacturer", "A superior user needs to be a distributor or equipment manufacturer", "Los usuarios superiores necesitan un administrador o un fabricante de equipo.","Użytkownik z najwyższymi uprawnieniami musi być administratorem lub producentem sprzętu","上級用戶需要是管理員或設備廠家", "A superior user needs to be a distributor or equipment manufacturer","Người dùng vượt trội cần phải là quản trị viên hoặc nhà sản xuất thiết bị","Pengguna utama perlu menjadi distributor atau produsen peralatan"]
}, {
	"key": "err1028",
	"val": ["不支持的充值方式", "Repeated number of digital miner numbers", "Repeated number of digital miner numbers", "Repeated number of digital miner numbers", "Modo de recarga sin apoyo","Nieobsługiwana metoda ładowania","不支持的充值方式", "Repeated number of digital miner numbers","Phương thức nạp tiền không được hỗ trợ","Isi ulang tidak didukung"]
}, {
	"key": "err1029",
	"val": ["重复的数采器编号", "Unsupported recharge", "Unsupported recharge", "Unsupported recharge", "Número de numeradores repetitivos","Powtorzona liczba cyfrowych danych","重複的數採器編號", "Unsupported recharge","Số logger trùng lặp","Jumlah berulang nomor penambang digital"]
}, {
	"key": "err1030",
	"val": ["无效的GPRS卡", "Invalid GPRS card", "Invalid GPRS card", "Invalid GPRS card", "Tarjetas de GPRS inválidas","Nieprawidłowa karta GPRS","無效的GPRS卡", "Invalid GPRS card","Thẻ GPRS không hợp lệ","Kartu GPRS tidak valid"]
}, 
 {
	"key": "err1042",
	"val": ["CCID卡无效", "Invalid CCID card", "Invalid CCID card", "Invalid CCID card", "Invalid CCID card","Nieprawidłowy CCID","無效的CCID", "Invalid CCID card","CCID không hợp lệ","CCID tidak valid"]
},{
	"key": "err1792",
	"val": ["数采器必须都属于该管理员", "The data collector must all belong to the distributor", "The data collector must all belong to the distributor", "The data collector must all belong to the distributor", "Todos los conductores deben pertenecer a ese administrador.","Urządzenie monitorujące musi należeć do administratora","數採器必須都屬於該管理員", "The data collector must all belong to the distributor","Người thu thập dữ liệu phải thuộc về quản trị viên","Pengumpul data semuanya harus milik distributor"]
},{
	"key": "err2048",
	"val": ["该固件包与设备机型版本不匹配！！", "The firmware package does not match the device model version! !", "The firmware package does not match the device model version! !", "The firmware package does not match the device model version! !","The firmware package does not match the device model version! !","The firmware package does not match the device model version! !","該固件包與設備機型版本不匹配！ ！", "The firmware package does not match the device model version! !"," Không phù hợp với phiên bản thiết bị! !","Paket firmware tidak cocok dengan versi model perangkat! !"]
},{
	"key": "err2049",
	"val": ["此固件包与设备当前版本一致，请勿重复升级", "This firmware package is consistent with the current version of the device, please do not upgrade repeatedly", "This firmware package is consistent with the current version of the device, please do not upgrade repeatedly", "This firmware package is consistent with the current version of the device, please do not upgrade repeatedly","This firmware package is consistent with the current version of the device, please do not upgrade repeatedly","This firmware package is consistent with the current version of the device, please do not upgrade repeatedly","此固件包與設備當前版本一致，請勿重複升級", "This firmware package is consistent with the current version of the device, please do not upgrade repeatedly","Gói phần mềm này phù hợp với phiên bản hiện tại của thiết bị, vui lòng không nâng cấp nhiều lần","Paket firmware konsisten dengan versi perangkat saat ini, harap jangan memperbarui berulang kali"]
},{
	"key": "err2050",
	"val": ["日期或偏移量为空", "Date or offset is empty", "Date or offset is empty", "Date or offset is empty","Date or offset is empty","Date or offset is empty","日期或偏移量為空", "Date or offset is empty","Ngày hoặc phần bù trống","Tanggal atau offset kosong"]
},{
	"key": "err2051",
	"val": ["请输入偏移量！", "Please enter an offset!", "Please enter an offset!", "Please enter an offset!","Please enter an offset!","Please enter an offset!","请输入偏移量！", "Please enter an offset!","Vui lòng nhập một phần bù!","Harap masukkan offset!"]
},{
	"key": "err2052",
	"val": ["已存在,请在列表中修改！", "Already exists, please modify it in the list!", "Already exists, please modify it in the list!", "Already exists, please modify it in the list!","Already exists, please modify it in the list!","Already exists, please modify it in the list!","已存在,請在列表中修改！", "Already exists, please modify it in the list!","Đã tồn tại, xin vui lòng sửa đổi nó trong danh sách!","Sudah ada, harap ubah dalam daftar!"]
},{
	"key": "err2053",
	"val": ["时区修改一次最多不能超过1个时区!", "Time zone modification cannot exceed 1 time zone at a time!", "Time zone modification cannot exceed 1 time zone at a time!", "Time zone modification cannot exceed 1 time zone at a time!","Time zone modification cannot exceed 1 time zone at a time!","Time zone modification cannot exceed 1 time zone at a time!","時區修改一次最多不能超過1個時區！", "Time zone modification cannot exceed 1 time zone at a time!","Không thể thay đổi quá 1 múi giờ cùng một lúc!","modifikasi zona waktu tidak boleh melebihi 1 zona waktu!"]
},{
	"key": "err2054",
	"val": ["修改成功!", "Successfully modified!", "Successfully modified!", "Successfully modified!","Successfully modified!","Successfully modified!","修改成功！", "Successfully modified!","Sửa đổi thành công!","Berhasil dimodifikasi"]
},{
	"key": "err2055",
	"val": ["请选择一个参数", "Please select a parameter", "Please select a parameter", "Please select a parameter","Please select a parameter","Please select a parameter","請選擇一個參數", "Please select a parameter","Vui lòng chọn một tham số","Pilih parameter perbandingan"]
}]
//ws
function getErrorCodeDesc(errcode, lang1, desc) {
		// console.log(storage_i18n_get_id())
		// console.log(errcode)
		// console.log(WS_ERR_MAP)
		// console.log(WS_ERR_MAP[errcode][storage_i18n_get_id()])
	return (WS_ERR_MAP[errcode][storage_i18n_get_id()] == undefined ? errcode : WS_ERR_MAP[errcode][storage_i18n_get_id()]);
}
//public
function getErrorCodeDesc2(name, key, desc) {

	var info = "";
	for(var i = 0; i < name.length; i++) {
		if(name[i].key == key) {
			info = name[i].val[storage_i18n_get_id()];
			break;
		} else if(i == (name.length - 1)) {
			info = (desc == undefined ? key : desc)
			break;
		}
	}
	return info;

}
//