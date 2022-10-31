LANGJSON = new Object();
GET_ERR_DESC = new Array();
GET_ERR_DESC = [{
	"key": "err0",
	"val": ["正常, 无错误", "Normal, no error", "Normal, no error", "Normal, no error", "Normal, sin error.","Brak bledow","正常, 無錯誤", "Normal, no error","Bình thường, không có lỗi","Normal, tidak ada kesalahan"]
}, {
	"key": "err1",
	"val": ["失败", "fail", "fail", "fail", "Fracasar","Niepowodzenie","失敗", "fail","sự thất bại","gagal"]
}, {
	"key": "err2",
	"val": ["超时，系统繁忙，请稍后再试", "overtime", "overtime", "overtime", "El sistema está muy ocupado. Por favor, probemos más tarde.","Przekroczono limit czasu","超時，系統繁忙，請稍後再試", "overtime","Hết giờ, hệ thống đang bận, vui lòng thử lại sau","lembur,Kelainan sistem"]
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
	"val": ["无权限的操作，请联系上级管理员", "Unsupported operations", "Unsupported operations", "Unsupported operations", "Operación sin autorización, contacte con el administrador superior.","Niedozwolona operacja","無權限的操作，請聯繫上級管理員", "Unsupported operations","Hoạt động trái phép, vui lòng liên hệ với quản trị viên cấp trên","Operasi tidak didukung"]
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
	"val": ["密码格式错误", "Password format error", "Password format error", "Password format error", "Error de formato de contraseña","Błędny format hasła","密碼格式錯誤", "Password format error","Lỗi định dạng mật khẩu","Kesalahan format kata sandi"]
}, {
	"key": "err18",
	"val": ["手机号已绑定，请更换手机号，或解除绑定", "The phone number has been bound", "The phone number has been bound", "The phone number has been bound", "El número de celular ha sido secuestrado, por favor, cambie el número de teléfono o desconecta el secuestro.","Ten numer telefonu jest już używany","手機號已綁定，請更換手機號，或解除綁定", "The phone number has been bound","Số điện thoại di động bị ràng buộc, vui lòng thay đổi số điện thoại di động hoặc hủy liên kết","Nomor telepon telah terikat"]
}, {
	"key": "err19",
	"val": ["电话号码格式错误（6<=号码长度<32）", "Telephone number format error", "Telephone number format error", "Telephone number format error", "Error de formato del número de teléfono (6 = número de longitud < 32)","Błędny format numeru telefonu","電話號碼格式錯誤（6<=號碼長度<32）", "Telephone number format error","Lỗi định dạng số điện thoại (6 <= chiều dài số <32)","Kesalahan format nomor telepon (6 <= telepon <32)"]
}, {
	"key": "err20",
	"val": ["邮箱格式错误（必须包含@符号）", "Error in mailbox format (must contain @ symbols)", "Error in mailbox format (must contain @ symbols)", "Error in mailbox format (must contain @ symbols)", "Error in mailbox format (must contain @ symbols)","Format adresu email jest nieprawidłowy (musi zawierać symbol @)","郵箱格式錯誤（必須包含@符號）", "Error in mailbox format (must contain @ symbols)","Lỗi định dạng hộp thư (phải bao gồm ký @)","Kesalahan dalam format kotak surat (harus mengandung simbol @)"]
}, {
	"key": "err21",
	"val": ["用户名格式错误（2<=用户名长度<32）", "Mailbox format error", "Mailbox format error", "Mailbox format error", "Error de formato de usuario (2 < = longitud de un usuario < 32)","Błędny format nazwy użytkownika","用戶名格式錯誤（2<=用戶名長度<32）", "Mailbox format error","Lỗi định dạng tên người dùng (2 <= chiều dài tên người dùng <32)","Kesalahan format nama pengguna (2 <= nama pengguna <32)"]
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
	"key": "err25",
	"val": ["账户已被禁用，请联系管理员", "The account has been disable, please contact the administrator", "The account has been disable, please contact the administrator", "The account has been disable, please contact the administrator", "La cuenta ha sido desactivada. Por favor, contacte con el Administrador.","Konto zostało wyłączone, skontaktuj się z administratorem","賬戶已被禁用，請聯繫管理員", "The account has been disable, please contact the administrator","Tài khoản đã bị vô hiệu hóa, vui lòng liên hệ với quản trị viên","Akun telah dinonaktifkan, harap hubungi administrator"]
}, {
	"key": "err256",
	"val": ["无数据", "No record", "No record", "No record", "找不到要调用的API(此为测试帐号)", "No se dispone de datos","Brak danych","無數據", "No record","không có dữ liệu","Tidak ada catatan"]
}, {
	"key": "err257",
	"val": ["无数采器", "No equipment can be found", "No equipment can be found", "No equipment can be found", "Innumerables senadores","Nie można znaleźć liczby urządzeń monitorujących","無數採器", "No equipment can be found","Vô số người sưu tầm","Tidak dapat menemukan sejumlah penambang"]
}, {
	"key": "err258",
	"val": ["无设备", "Can not find a number of miner", "Can not find a number of miner", "Can not find a number of miner", "No hay equipo.","Brak sprzętu","無設備", "Can not find a number of miner","Không có thiết bị","Tidak ada peralatan yang dapat ditemukan"]
}, {
	"key": "err259",
	"val": ["无效的数采器编号", "Invalid number of miner number", "Invalid number of miner number", "Invalid number of miner number", "Número de numerador nulo","Nieprawidłowa liczna urządzeń monitorujących","無效的數採器編號", "Invalid number of miner number","Số người thu thập dữ liệu không hợp lệ","Jumlah nomor penambang tidak valid"]
}, {
	"key": "err260",
	"val": ["无电站", "No power station can be found", "No power station can be found", "No power station can be found", "Estación eléctrica sin electricidad","Nie znaleziono instalacji PV","無電站", "No power station can be found","Không có trạm điện","Tidak ada pembangkit listrik yang dapat ditemukan"]
}, {
	"key": "err261",
	"val": ["用户不存在", "Unable to find the user", "Unable to find the user", "Unable to find the user", "No hay usuario","Nie można znaleźć użytkownika","用戶不存在", "Unable to find the user","người dùng không tồn tại","Tidak dapat menemukan pengguna"]
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
	"val": ["无环境检测仪", "No environment detector can be found", "No environment detector can be found", "No environment detector can be found", "Detector sin medio ambiente","Brak detektora środowiskowego","無環境檢測儀", "No environment detector can be found","Không có máy dò môi trường","Tidak ada detektor lingkungan yang dapat ditemukan"]
}, {
	"key": "err271",
	"val": ["无任何修改操作", "No modification operation", "No modification operation", "No modification operation", "Sin cambios","Brak operacji modyfikacji","無任何修改操作", "No modification operation","Không sửa đổi","Tidak ada operasi modifikasi"]
}, {
	"key": "err272",
	"val": ["重复绑定", "Repeat binding", "Repeat binding", "Repeat binding", "Duplicar","Powtórz powiązanie","重複綁定", "Repeat binding","Lặp lại liên kết","Ulangi penjilidan"]
}, {
	"key": "err273",
	"val": ["不支持添加其他厂家的数采器", "Does not support adding diggers for other manufacturers", "Does not support adding diggers for other manufacturers", "Does not support adding diggers for other manufacturers", "No apoyar la adición de otras plantas.","Dodawanie urządzeń monitorujących innych producentów nie jest obsługiwane","不支持添加其他廠家的數採器", "Does not support adding diggers for other manufacturers","Không hỗ trợ thêm người thu thập dữ liệu từ các nhà sản xuất khác","Tidak mendukung penambahan pengumpul data dari produsen lain"]
}, {
	"key": "err276",
	"val": ["不支持移动含有其他厂家的数采器的电站业主", "It does not support the power station owners who have mobile devices containing other manufacturers.", "It does not support the power station owners who have mobile devices containing other manufacturers.", "It does not support the power station owners who have mobile devices containing other manufacturers.", "No apoyar a los propietarios de centrales que transportan productos que contengan otras plantas.","Aplikacje mobilne innych producentów nie są obsługwane","不支持移動含有其他廠家的數採器的電站業主", "It does not support the power station owners who have mobile devices containing other manufacturers.","Chủ sở hữu trạm điện không hỗ trợ chuyển động của người thu thập dữ liệu từ các nhà sản xuất khác","Tidak mendukung perangkat mobile pemilik pembangkit listrik yang berisi data mining dari produsen lain"]
}, {
	"key": "err288",
	"val": ["无摄像头", "Can't find a camera", "Can't find a camera", "Can't find a camera", "No hay cámaras.","Brak kamery","無攝像頭", "Can't find a camera","Không có máy ảnh","Tidak dapat menemukan kamera"]
}, {
	"key": "err352",
	"val": ["无固件", "No firmware can be found", "No firmware can be found", "No firmware can be found", "Sin terco","Brak oprogramowania firmware","無固件", "No firmware can be found","Không có chương trình cơ sở","Tidak ada firmware yang dapat ditemukan"]
}, {
	"key": "err368",
	"val": ["无角色", "No role can be found", "No role can be found", " ", "No hay acuerdo.","Nie znaleziono oprogramowania firmware","無角色", "No role can be found","Không thỏa thuận","Tidak ada peran yang dapat ditemukan"]
}, {
	"key": "err353",
	"val": ["无协议", "No agreement can be found", "No agreement can be found", "No agreement can be found", "No hay papeles.","Brak roli użytkownika","無協議", "No agreement can be found","Không có vai trò","Tidak ada protokol yang dapat ditemukan"]
}, {
	"key": "err369",
	"val": ["无用户分组", "No user groupings can be found", "No user groupings can be found", "No user groupings can be found", "Subgrupos sin usuarios","Brak grupowania użytkowników","無用戶分組", "No user groupings can be found","Không có nhóm người dùng","Tidak ada pengelompokan pengguna yang dapat ditemukan"]
}, {
	"key": "err370",
	"val": ["无电站分组", "No power station grouping can be found", "No power station grouping can be found", "nenhum grupo de usinas pode ser encontrado", "Subgrupo de estación eléctrica","Brak grupowania systemów PV","無電站分組", "No power station grouping can be found","Không có nhóm trạm điện","Tidak ada pengelompokan pembangkit listrik yang dapat ditemukan"]
}, {
	"key": "err371",
	"val": ["无GPRS流量充值套餐", "No GPRS traffic recharge package can be found", "No GPRS traffic recharge package can be found", "No GPRS traffic recharge package can be found", "GPRS","Brak pakietu transmisji danych GPRS","無GPRS流量充值套餐", "No GPRS traffic recharge package can be found","Không có gói nạp dữ liệu GPRS","Tidak ada paket isi ulang lalu lintas GPRS yang dapat ditemukan"]
}, {
	"key": "err372",
	"val": ["无GPRS流量充值订单", "No GPRS traffic filling order can be found", "No GPRS traffic filling order can be found", "No GPRS traffic filling order can be found", "Orden de recarga del GPRS","Brak poloczenia GPRS","無GPRS流量充值訂單", "No GPRS traffic filling order can be found","Không có thứ tự nạp lại GPRS","Tidak ada urutan pengisian lalu lintas GPRS yang dapat ditemukan"]
},{
	"key": "err384",
	"val": ["验证码输入错误", "Incorrect verification code", "Incorrect verification code", "Incorrect verification code", "Incorrect verification code","Incorrect verification code","驗證碼輸入錯誤", "Incorrect verification code","Mã xác minh không chính xác","Kode verifikasi pesan singkat tidak dapat ditemukan"]
},{
	"key": "err385",
	"val": ["无device_token", "Can't find device_token", "Can't find device_token", "Can't find device_token", "Sin devoción","Brak tokenu urządzenia","無device_token", "Can't find device_token","Không có device_token","Tidak dapat menemukan device_token"]
}, {
	"key": "err386",
	"val": ["无设备配置信息", "No device configuration information can be found", "No device configuration information can be found", "No device configuration information can be found", "Información sobre configuración de equipo","Brak informacji o konfiguracji urządzenia","無設備配置信息", "No device configuration information can be found","Không có thông tin cấu hình thiết bị","Tidak ada informasi konfigurasi perangkat yang dapat ditemukan"]
}, {
	"key": "err387",
	"val": ["无数采器类型", "Can not find the type of the miner", "Can not find the type of the miner", "Can not find the type of the miner", "Muchos tipos de extracción","Nieznany typ urządzenia monitorującego","無數採器類型", "Can not find the type of the miner","Vô số kiểu người sưu tầm","Tidak dapat menemukan tipe penambang"]
}, {
	"key": "err512",
	"val": ["短信验证码不匹配", "Mismatch of SMS authentication code", "Mismatch of SMS authentication code", "Mismatch of SMS authentication code", "El Código de texto no coincide con el Código de certificación.","Błedny kod weryfikacyjny SMS","短信驗證碼不匹配", "Mismatch of SMS authentication code","Mã xác minh SMS không khớp","Ketidakcocokan kode otentikasi SMS"]
}, {
	"key": "err513",
	"val": ["短信验证码超时", "Short message verification code timeout", "Short message verification code timeout", "Short message verification code timeout", "Código de texto","Minął czas na podanie kodu weryfikacyjnego SMS","短信驗證碼超時", "Short message verification code timeout","Hết thời gian xác minh mã SMS","Batas waktu kode verifikasi pesan singkat"]
}, {
	"key": "err514",
	"val": ["电话/邮箱未绑定", "Phone/mailbox  mismatch", "Phone /mailbox mismatch", "Phone /mailbox mismatch", "El número de teléfono/Buzón no está condicionado.","Numer telefonu nie/Skrzynka pocztowa jest powiązany","電話/邮箱未綁定", "Phone/mailbox  mismatch","Điện thoại / Email không bị ràng buộc","Nomor telepon/E-mail tidak terikat"]
}, {
	"key": "err515",
	"val": ["电话/邮箱不匹配", "Phone number/mailbox unbound", "Phone number/mailbox unbound", "Phone number/mailbox unbound", "El número de teléfono/Buzón no coincide.","Niezgodny numer telefonu/Skrzynka","電話號碼/邮箱不匹配", "Phone number/mailbox unbound","Điện thoại / thư không khớp","Nomor telepon/E-mail tidak cocok"]
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
	"key": "err525",
	"val": ["验证码已发送，请稍后再试", "The verification code has been sent, please try again later", "The verification code has been sent, please try again later", "The verification code has been sent, please try again later", "The verification code has been sent, please try again later","The verification code has been sent, please try again later","验证码已发送，请稍后再试", "The verification code has been sent, please try again later","Mã xác minh đã được gửi,  thử lại sau","Kode verifikasi telah dikirim, coba lagi nanti"]
},{
	"key": "err768",
	"val": ["协议中没有可选字段", "There is no optional field in the protocol", "There is no optional field in the protocol", "There is no optional field in the protocol", "No hay opción en el Acuerdo","Brak opcjonalnych pól w protokole","協議中沒有可選字段", "There is no optional field in the protocol","Không có trường tùy chọn trong thỏa thuận","Tidak ada bidang opsional dalam protokol"]
}, {
	"key": "err1024",
	"val": ["只支持电站业主", "Not the browsers' account", "Not the browsers' account", "Not the browsers' account", "Sólo apoyo a los propietarios de la central eléctrica.","Obsługa tylko dla właścicieli systemów PV","只支持電站業主", "Not the browsers' account","Chỉ hỗ trợ chủ sở hữu nhà máy","Hanya Pemilik pembangkit listrik"]
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
}, {
	"key": "err1031",
	"val": ["用户不是该管理员创建", "The user is not created by this administrator", "The user is not created by this administrator", "The user is not created by this administrator", "El usuario no es creado por el Administrador","Użytkownik nie został utworzony przez tego administratora","用戶不是該管理員創建", "The user is not created by this administrator","Người dùng không được tạo bởi quản trị viên","Pengguna tidak dibuat oleh administrator ini"]
}, {
	"key": "err1041",
	"val": ["key已失效或找不到", "Key has failed or could not be found", "Key has failed or could not be found", "Key has failed or could not be found", "La clave se ha perdido o no se puede encontrar.","Klucz wygasł lub nie można go znaleźć","key已失效或找不到", "Key has failed or could not be found","Khóa không hợp lệ hoặc không tìm thấy","Kunci gagal atau tidak dapat ditemukan"]
}, {
	"key": "err1042",
	"val": ["无效的CCID", "Invalid CCID", "Invalid CCID", "Invalid CCID", "CCID no válido","Nieprawidłowy CCID","無效的CCID", "Invalid CCID","CCID không hợp lệ","CCID tidak valid"]
}, {
	"key": "err1792",
	"val": ["数采器必须都属于该管理员", "The data collector must all belong to the distributor", "The data collector must all belong to the distributor", "The data collector must all belong to the distributor", "Todos los conductores deben pertenecer a ese administrador.","Urządzenie monitorujące musi należeć do administratora","數採器必須都屬於該管理員", "The data collector must all belong to the distributor","Người thu thập dữ liệu phải thuộc về quản trị viên","Pengumpul data semuanya harus milik distributor"]
}, {
	"key": "cur1",
	"val": ["该用户下存在其他厂家的采集器，不允许进行该操作", "There is a collector of other manufacturers under this user, which is not allowed.", "There is a collector of other manufacturers under this user, which is not allowed.", "There is a collector of other manufacturers under this user, which is not allowed.", "Hay un colector de otro fabricante que no permite esta operación","Ten użytkownik posiada urządzenia monitorujące innych producentów, co jest niedozwolone","該用戶下存在其他廠家的採集器，不允許進行該操作", "There is a collector of other manufacturers under this user, which is not allowed.","Có những nhà sưu tập từ các nhà sản xuất khác dưới người dùng này.","Ada kolektor dari pabrikan lain di bawah pengguna ini, yang tidak diperbolehkan"]
},{
	"key": "noPwd_enter",
	"val": ["密码为空,请重新输入", "Password is empty, please re-enter", "Lösenord är tom, var vänlig ange", "Senha está vazia, por favor, digite novamente", "La contraseña está vacía, por favor, introduzca una nueva entrada.","Hasło jest puste, wprowadź ponownie","密碼為空,請重新輸入", "Password is empty, please re-enter","Mật khẩu trống, vui lòng nhập lại","Kata sandi kosong, harap masukkan kembali"]
},{
	"key": "pwd_wrong",
	"val": ["密码错误", "wrong password", "Fel lösenord", "Senha incorreta", "Contraseña incorrecta","Błędne hasło","密碼錯誤", "wrong password","sai mật khẩu","Kegagalan verifikasi kata sandi"]
},{
	"key": "err2054",
	"val": ["修改成功!", "Successfully modified!", "Successfully modified!", "Successfully modified!","Successfully modified!","Successfully modified!","修改成功！", "Successfully modified!","Sửa đổi thành công!","Berhasil dimodifikasi!"]
},{
	"key": "err2055",
	"val": ["请选择一个参数", "Please select a parameter", "Please select a parameter", "Please select a parameter","Please select a parameter","Please select a parameter","請選擇一個參數", "Please select a parameter","Vui lòng chọn một tham số","Pilih satu parameter"]
}]
GET_CUSTOMET_TYPE = new Array();
GET_CUSTOMET_TYPE = [{
	"key": "role0",
	"val": ["电站业主", "installer", "Power station owner", "instalador", "Propietario de la estación eléctrica","Właściciel systemu PV","電站業主", "installer","Chủ trạm điện","Pemilik pembangkit listrik"]
}, {
	"key": "role1",
	"val": ["厂家帐号", "Manufacturers account", "Manufacturers account", "Manufacturers account", "Número de cuenta","Konto producenta","廠家帳號", "Manufacturers account","Tài khoản nhà sản xuất","Akun produsen"]
}, {
	"key": "role2",
	"val": ["管理员", "administrator", "administrator", "administrator", "Administrador","Administrator","管理員", "administrator","người quản lý","administrator"]
}, {
	"key": "role3",
	"val": ["集团帐号", "Group Account", "Número de cuenta del Grupo","Konto grupowe","集團帳號", "Group Account","Tài khoản nhóm","Akun Grup"]
}, {
	"key": "role5",
	"val": ["电站浏览者", "Power station viewer", "Power station viewer", "Power station viewer", "Navegador de la estación","Przeglądarka systemu PV","電站瀏覽者", "Power station viewer","Trình duyệt Power Station","Penampil pembangkit listrik"]
}, {
	"key": "role6",
	"val": ["设备厂家", "Equipment manufacturers", "Equipment manufacturers", "Equipment manufacturers", "Equipo de equipo","Producent sprzętu","設備廠家", "Equipment manufacturers","Nhà sản xuất thiết bị","Produsen peralatan"]
}, {
	"key": "role15",
	"val": ["系统管理员", "System administrator", "System administrator", "System administrator", "Administrador del sistema","Administrator systemu","系統管理員", "System administrator","Quản trị hệ thống","Administrator sistem"]
}, {
	"key": "recharge0",
	"val": ["微信", "WeChat", "WeChat", "WeChat", "Micro","WeChat","微信", "WeChat","WeChat","Wechat"]
}, {
	"key": "recharge1",
	"val": ["支付宝", "Alipay", "Alipay", "Alipay", "Pasta de pago","Alipay","支付寶", "Alipay","Alipay","Alipay"]
}]

STATUS = new Array();
STATUS = [{
	"key": "plantS0",
	"val": ["正常", "Normal", "Normal", "Normal", "Normal","Zwykły","正常", "Normal","bình thường","Normal"]
}, {
	"key": "plantS1",
	"val": ["离线", "Off-line", "Off-line", "Desligada", "Línea","Offline","離線", "Off-line","Offline","Off-line"]
}, {
	"key": "plantS4",
	"val": ["告警", "Alarm", "Alarm", "Alarme", "Alguacil","Alarm","告警", "Alarm","Alarm","Alarm"]
}, {
	"key": "plantS7",
	"val": ["提醒", "Reminder", "Reminder", "Lembrar", "Recordatorio","Przypomnienie","提醒", "Reminder","nhắc lại","Peringatan"]
}, {
	"key": "devS0",
	"val": ["正常", "Normal", "Normal", "Normal", "Normal","Zwykły","正常", "Normal","bình thường","Normal"]
}, {
	"key": "devS1",
	"val": ["离线", "Off-line", "Off-line", "Desligada", "Línea","Offline","離線", "Off-line","Offline","Off-line"]
}, {
	"key": "devS2",
	"val": ["故障", "Failure", "Failure", "Falha", "Falla","Niepowodzenie","故障", "Failure","sự cố","Malfungsi"]
}, {
	"key": "devS3",
	"val": ["待机", "Standby machine", "Standby machine", "Em espera", "Pendiente","Czuwanie","待機", "Standby machine","Đứng gần","Mesin siaga"]
}, {
	"key": "devS4",
	"val": ["告警", "Alarm", "Alarm", "Alarme", "Alguacil","Alarm","告警", "Alarm","Alarm","Alarm"]
}, {
	"key": "devS5",
	"val": ["错误", "Error", "Error", "Erro", "Error","Błąd","錯誤", "Error","lỗi","Kesalahan"]
}, {
	"key": "devS6",
	"val": ["协议错误", "Protocol error", "Protocol error", "O acordo está errado", "Error del Acuerdo","Błąd protokołu","協議錯誤", "Protocol error","Lỗi giao thức","Kesalahan protokol"]
}, {
	"key": "gprsS0",
	"val": ["正常", "Normal", "Normal", "Normal", "Normal","Zwykły","正常", "Normal","bình thường","Normal"]
}, {
	"key": "gprsS1",
	"val": ["预警", "Early warning", "Early warning", "Early warning", "Alerta temprana","Wczesne ostrzeżenie","預警", "Early warning","Cảnh báo sớm","Peringatan dini"]
}, {
	"key": "gprsS2",
	"val": ["逾期", "Overdue", "Overdue", "em atraso", "Retrasado","Zaległe","逾期", "Overdue","Quá hạn","Terlambat"]
}, {
	"key": "gprsS3",
	"val": ["失效", "Lose Efficacy", "Lose Efficacy", "Falha", "Caducar","Nieprawidłowy","失效", "Lose Efficacy","Sự thất bại","Kehilangan Khasiat"]
}, {
	"key": "gprsS4",
	"val": ["未知", "Unknown", "Unknown", "Unknown", "Desconocido","Nieznany","未知", "Unknown","không xác định","Tidak diketahui"]
}, {
	"key": "histS0",
	"val": ["未付款", "Not Paying", "Not Paying", "Não remunerado", "No pago","Bezpłatne","未付款", "Not Paying","Chưa thanh toán","Tidak Membayar"]
}, {
	"key": "histS1",
	"val": ["已付款", "Account Paid", "Account Paid", "Account paid", "Pagos efectuados","Płatne","已付款", "Account Paid","Đã thanh toán","Akun Dibayar"]
}, {
	"key": "histS2",
	"val": ["充值成功", "Recharge Success", "Recharge Success", "Recharge Success", "El valor es un éxito.","Doładowanie zakończone pomyślnie","充值成功", "Recharge Success","Gửi tiền thành công","Isi Ulang Sukses"]
}, {
	"key": "histS3",
	"val": ["充值中", "Recharging", "Recharging", "Recharging", "En el valor","Doładowywanie","充值中", "Recharging","Nạp tiền","Mengisi ulang"]
}, {
	"key": "alarmS0",
	"val": ["告警", "Warning", "Warning", "Atenção", "Advertencia","Ostrzeżenie","告警", "Warning","báo trước","Peringatan"]
}, {
	"key": "alarmS1",
	"val": ["错误", "Error", "Error", "Erro", "Error","Bład","錯誤", "Error","lỗi","Kesalahan"]
}, {
	"key": "alarmS2",
	"val": ["故障", "Failure", "Failure", "Falha", "Falla","Niepowodzenie","故障", "Failure","sự cố","Malfungsi"]
}, {
	"key": "alarmStrue",
	"val": ["已处理", "Processed", "Processed", "Processado", "Procesado","Przetworzone","已處理", "Processed","Xử lý","Diproses"]
}, {
	"key": "alarmSfalse",
	"val": ["未处理", "untreated", "untreated", "não tratado", "No tramitado","Nieprzetworzone","未處理", "untreated","Chưa qua chế biến","tidak diobati"]
}, {
	"key": "userStrue",
	"val": ["启用", "Enablement", "Ativo", "Ativo", "Activar","Włącz","啟用", "Enablement","Kích hoạt","Pemberdayaan"]
}, {
	"key": "userSfalse",
	"val": ["禁用", "Prohibited to use", "Prohibited to use", "proibido usar", "Desactivar","Wyłącz","禁用", "Prohibited to use","Vô hiệu hóa","Nonaktifkan"]
}]
DEVDESC = new Array();
DEVDESC = [{
	"key": "512",
	"val": ["逆变器", "Inverter", "Inverter", "Inversor", "Transformador","Inwerter","逆變器", "Inverter","Biến tần","Inverter"]
}, {
	"key": "768",
	"val": ["环境监测仪", "Environmental_tester", "Environmental_tester", "Environmental_tester", "Monitor de medio ambiente","Monitor środowiskowy","環境監測儀", "Environmental_tester","Giám sát môi trường","Environmental tester"]
}, {
	"key": "1024",
	"val": ["智能电表", "Intelligent electric meter", "Intelligent electric meter", "Intelligent electric meter", "Relámpago","Inteligentny miernik","智能電錶", "Intelligent electric meter","Thước đo thông minh","Pengukur listrik cerdas"]
}, {
	"key": "1280",
	"val": ["汇流箱", "Junction box", "Junction box", "Junction box", "Caja de cambio","Skrzynka przyłączeniowa","匯流箱", "Junction box","Hộp đựng mối nối hai mạch điện","Kotak persimpangan"]
}, {
	"key": "1536",
	"val": ["摄像头", "Camera", "Camera", "Camera", "Cámara","Kamera","攝像頭", "Camera","Máy ảnh","Kamera"]
}, {
	"key": "1792",
	"val": ["电池", "Battery", "Battery", "Battery", "Batería","Bateria","電池", "Battery","ắc quy","Baterai"]
}, {
	"key": "2048",
	"val": ["充电器", "Charger", "Charger", "Charger", "Cargador","Charger","充電器", "Charger","bộ sạc","Pengisi daya"]
}, {
	"key": "2304",
	"val": ["储能机", "Energy storage controller", "Energy storage controller", "Energy storage controller", "Máquinas de almacenamiento","Magazyn energii","儲能機", "Energy storage controller","Máy lưu trữ năng lượng","Pengontrol penyimpanan energi"]
}, {
	"key": "2560",
	"val": ["防孤岛装置", "Prevent arcing island", "Prevent arcing island", "Prevent arcing island", "Unidad antiaislamiento","Zapobieganie lukom i  wyspowaniu","防孤島裝置", "Prevent arcing island","Thiết bị chống đảo","Mencegah bentuk lengkung"]
}]
PLANT_TYPE = [{
		"key": "plant0",
		"val": ["未分类", "未分类", "未分类", "未分类","Niesklasyfikowane","Niesklasyfikowane","未分類", "未分类","Chưa được phân loại","tidak dikategorikan"]
	},
	{
		"key": "plant1",
		"val": ["分布式村级电站", "分布式村级电站", "分布式村级电站", "分布式村级电站","Rozproszona farma fotowoltaiczna","Rozproszona farma fotowoltaiczna","分佈式村級電站", "分布式村级电站","Nhà máy điện cấp làng phân phối","Pembangkit listrik desa yang didistribusikan"]
	},
	{
		"key": "plant2",
		"val": ["集中地面电站", "集中地面电站", "集中地面电站", "集中地面电站","Pojedyncza naziemna instalacja PV","Pojedyncza naziemna instalacja PV","集中地面電站", "集中地面电站","Trạm điện mặt đất tập trung","Pembangkit listrik terkonsentrasi"]
	},
	{
		"key": "plant3",
		"val": ["分布式户用扶贫电站", "分布式户用扶贫电站", "分布式户用扶贫电站", "分布式户用扶贫电站","Domowa niezalezna instalacja PV","Domowa niezalezna instalacja PV","分佈式戶用扶貧電站", "分布式户用扶贫电站","Phân phối giảm nghèo hộ gia đình","Stasiun pengentasan kemiskinan rumah tangga terdistribusi"]
	},
	{
		"key": "plant4",
		"val": ["村级扶贫电站", "村级扶贫电站", "村级扶贫电站", "村级扶贫电站","Farmowa niezalezna instalacja PV","Farmowa niezalezna instalacja PV","村級扶貧電站", "村级扶贫电站","Nhà máy điện giảm nghèo cấp thôn","Stasiun pengentasan kemiskinan tingkat desa"]
	},
	{
		"key": "plant5",
		"val": ["其它类型", "其它类型", "其它类型", "其它类型","Inne typy","Inne typy","其它類型", "其它类型","Các loại khác","Tipe yang lain"]
	}

]
NODE_LANG = [{
	"key": "nodeLang",
	"val": ["默认节点", "Default node", "Nodo predeterminado", "Nó padrão","Default node","Domyślny węzeł","默認節點", "Default node","Nút mặc định","Simpul default"]
},

]
//字典  （name是全局数组，key是属性）
function dictionaries(name, key, desc, lang) {
	var langId = (lang == undefined ? storage_i18n_get_id() : lang);
	var info = "";
	for(var i = 0; i < name.length; i++) {
		if(name[i].key == key) {
			info = name[i].val[langId];
			break;
		} else if(i == (name.length - 1)) {
			info = (desc == undefined ? key : desc)
			break;
		}
	}
	return info;
}
GET_PAGE_DESC = [{"key":"go","val":["跳转","GO","GO","lr","Saltar","Przejdź","跳轉","GO","Nhảy","PERGI"]}]

/** ---------------------------------------------------------------- */
/**  加载任何一个页面,检测用户语言                                      */
/**  如果有则按照客户自定义显示,没有不操作html,但是必须设置langId		 */
/**                                                                  */
/** ---------------------------------------------------------------- */
function checkUserCurLang() {
	var lang = storage_i18n_get_id();
	if(lang == 0)
		changeLanguage("cn");
	else if(lang == 1)
	    changeLanguage("en")
	else if(lang == 2)
	    changeLanguage("se")
	else if(lang == 3)
		changeLanguage("pt")
	else if(lang == 4)
		changeLanguage("es")
	else if(lang == 5)
		changeLanguage("pl")
	else if(lang == 6)
		changeLanguage("hk")
	else if(lang == 7)
		changeLanguage("in")
	else if(lang == 8)
		changeLanguage("vi")
	else if(lang == 9)
		changeLanguage("idn")
	else
		changeLanguage("en")
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
function changeLanguage(lang) {
	$.ajax({
		async: true,
		type: "get",
		url: "/managesystemnew/lang/" + lang + ".json",
		success: function(data, status) {
			//隐藏在不是中文时需要隐藏的功能
			if(lang != "cn") {
				$(".ptHide").hide();
			}
			$.each(eval(data.string), function(key, value) {
				LANGJSON = data.string
				if($("[lang=" + key + "]").hasClass("m_navLitit") || $("[lang=" + key + "]").hasClass("menu")) {
					$("[lang=" + key + "]").attr("title", value)
				}
				$("[lang=" + key + "]").text(value)
				$("[inputlang=" + key + "]").val(value)
			});
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
	} else if(value == "Svenska") //瑞典语-2
	{
		storage_i18n_set(value);
		changeLanguage("se");
		return;
	} else if(value == "Español") //西班牙-2
	{
		storage_i18n_set(value);
		changeLanguage("es");
		return;
	} else if(value == "Polski") //波兰语
	{
		storage_i18n_set(value);
		changeLanguage("pl");
		return;
	} else if(value == "中文繁体") //中文繁体
	{
		storage_i18n_set(value);
		changeLanguage("hk");
		return;
	} else if(value == "India") //印度语
	{
		storage_i18n_set(value);
		changeLanguage("in");
		return;
	} else if(value == "TiếngViệt") //越南
	{
		storage_i18n_set(value);
		changeLanguage("vi");
		return;
	}  else if(value == "Indonesian") //印尼
	{
		storage_i18n_set(value);
		changeLanguage("idn");
		return;
	}else {
		storage_i18n_set(value);
		changeLanguage("pt");
	}
}

function getInterLang() {
	var lang = storage_i18n_get_id();
	if(lang == 1)
		return "en_US";
	if(lang == 2)
		return "sv_SE";
	if(lang == 3)
		return "pt_BR";
	if(lang == 4)
		return "es_ES";
	if(lang == 5)
		return "pl_PL";
	if(lang == 6)
		return "zh_HK";
	if(lang == 7)
		return "in_IN";
	if(lang == 8)
		return "vi_VN";
	if(lang == 9)
		return "in_ID";
	return "zh_CN";
}
 

//验证长度
//function Verification(str,){
//
//}