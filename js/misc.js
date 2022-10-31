/**
 * Utils.
 * 
 */
DATE_SECOND = 1000;
DATE_MINUTE = DATE_SECOND * 60;
DATE_HOUR = DATE_MINUTE * 60;

__hexarr__ = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');


/* 将Date转换成yyyy-mm-dd字符串. */
 function parseDate2yyyymmdd(date)
 {
 	var m = date.getMonth() + 1;
 	var d = date.getDate();
 	return date.getFullYear() + "-" + (m < 10 ? ("0" + m) : m) + "-" + (d < 10 ? ("0" + d) : d);
 }

/* 将Date转换成yyyy-mm字符串. */
function parseDate2yyyymm(date)
{
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	return y + "-" + (m < 10 ? ("0" + m) : m);
}


/* 将Date转换成yyyy-mm-dd hh:mi:ss字符串. */
 function parseDate2yyyymmddhhmiss(date)
 {
 	var h = date.getHours();
 	var i = date.getMinutes();
 	var s = date.getSeconds();
	return parseDate2yyyymmdd(date) + " " + (h < 10 ? ("0" + h) : h) + ":" + (i < 10 ? ("0" + i) : i) + ":" + (s < 10 ? ("0" + s) : s);
 }

/* 将yyyy-mm-dd hh:mi:ss字符串转换成Date. */
 function parseyyyymmddhhmiss2Date(yyyymmddhhmiss)
 {
 	var y = yyyymmddhhmiss.substring(0, 4);
 	var m = yyyymmddhhmiss.substring(5, 7);
 	var d = yyyymmddhhmiss.substring(8, 10);
 	var h = yyyymmddhhmiss.substring(11, 13);
 	var i = yyyymmddhhmiss.substring(14, 16);
 	var s = yyyymmddhhmiss.substring(17, 19);
	return new Date(parseInt(y), parseInt(m) -1, parseInt(d), parseInt(h), parseInt(i), parseInt(s));
 }



/** 时间滚动, 按分钟, up == true向今后滚动, 否则向以前滚动. */
/**
 * *
 *  Date edate = trans.getYyyy_mm_dd_hh_mi_ss("date");
    if(edate == null) 
      edate = new Date();
    Date sdate = new Date(edate.getTime()-10*Dateu.MINUTE);
 *
 *
 */

function dateRollOfMinute(date, amount, up)
{
	return up ? new Date(date.getTime() + amount * DATE_MINUTE) : new Date(date.getTime() - amount * DATE_MINUTE);
}

/** 获得用户所在时区此刻时间,然后将此转换为电站所在时区的时间 */
function parseLocal2Plant(timezone)
{
	d = new Date(); 
	var localTime = d.getTime();
	var localOffset=d.getTimezoneOffset()*60000;
	//utc即GMT时间
	var utc = localTime + localOffset; 
	var offset = timezone;
	var plant = utc + (3600000*offset); 
	nd = new Date(plant);
	return nd;
}

/** short to hex. */
function short2hex(val)
{
	var hex = "";
	hex += (__hexarr__[(val >>> 12) & 0x000F]);
	hex += (__hexarr__[(val >>> 8) & 0x000F]);
	hex += (__hexarr__[(val >>> 4) & 0x000F]);
	hex += (__hexarr__[val & 0x000F]);
	return hex;
}

/** hex to short. */
function hex2short(val)
{
	return parseInt(val, 16);
}

/*传入日期格式yyyy-mm得到当月天数,如一月31天*/
function getDaysOfMonth(monthdate)
{
	var year = monthdate.substring(0,4);    
    var month= monthdate.substring(5,7);     
    var d = new Date(year, month, 0);          
    var daysCount = d.getDate();

    return daysCount;
}

/* 将yyyy-mm字符串转换为yyyy-mm-dd其中dd为该月最后一天. */
function getLastDateOfMonth(yyyymm)
{
	var y = yyyymm.substring(0,4);
	var m = yyyymm.substring(5,7);
	var d = new Date(y, m, 0);          
	var daysCount = d.getDate();
	return yyyymm + "-" + (daysCount < 10 ? ("0" + daysCount) : daysCount);
}

/*传入日期对象,得到该日期当月的第一天格式为yyyy-mm-dd*/
function getFirstDayOfMonth(date)
{
	var month = parseDate2yyyymm(date);
	return month + "-01";
}


/*传入日期对象,得到该日期当月的最后一天格式为yyyy-mm-dd*/
function getLastDayOfMonth(date)
{
	var month = parseDate2yyyymm(date);
	return month + "-" + getDaysOfMonth(month);
}

/*传入日期xxxx-yy-mm得到上一日日期*/
function getYestoday(date)
{
	var temp = date + "" + "00:00:00";
	var d = parseyyyymmddhhmiss2Date(temp);
	var yesterday_milliseconds=d.getTime()-1000*60*60*24;
	var yesterday = new Date();
	yesterday.setTime(yesterday_milliseconds);
	var strYear = yesterday.getFullYear();
	var strDay = yesterday.getDate();
	var strMonth = yesterday.getMonth()+1;
	if(strMonth<10)
	{
		strMonth="0"+strMonth;
	}
	if(strDay<10)
	{
		strDay="0"+strDay
	}
	var datastr = strYear+"-"+strMonth+"-"+strDay;
	return datastr;
}

/*传入日期xxxx-yy-mm得到下一日日期*/
function getNextday(date)
{
	var temp = date + "" + "00:00:00";
	var k = parseyyyymmddhhmiss2Date(temp);
	var y = k.getFullYear();
	var m = k.getMonth();
	var d = k.getDate() + 1;
	var nextDate = new Date(y, m, d);
	var nextTime = parseDate2yyyymmdd(nextDate);
	return nextTime;
}

/*传入日期xxxx-yy得到上一个月日期*/
function getPreMonth(date)
{
    var year = date.substring(0,4); //获取当前日期的年份
    var month = date.substring(5,7); //获取当前日期的月份
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    if (month2 < 10) 
    {
        month2 = '0' + month2;
    }
 
    var preMonth = year2 + '-' + month2;
    return preMonth;
}

/*传入日期xxxx-yy得到下一个月日期*/
function getNextMonth(date)
{
	var year = date.substring(0,4); //获取当前日期的年份
    var month = date.substring(5,7); //获取当前日期的月份
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    if (month2 < 10) 
    {
        month2 = '0' + month2;
    }
    var nextMonth = year2 + '-' + month2;
    return nextMonth;
}

/*传入日期xxxx得到上一年日期*/
function getPreYear(year)
{
	var lastYear = parseInt(year) - 1;
	return lastYear;
}

/*传入日期xxxx得到下一年日期*/
function getNextYear(year)
{
	var nextYear = parseInt(year) + 1;
	return nextYear;
}

/*传入日期xxxx-yy得到往前推12个月的日期*/
function getPre12Months(date)
{
	var year = date.substring(0,4); //获取当前日期的年份
    var month = date.substring(5,7); //获取当前日期的月份
    var year2 = year - 1;
    var preMonth = year2 + '-' + month;
    return preMonth;
}
/*传入日期xxxx-yy-dd得到当前周周一日期*/
function getThisWeekMonday(date)
{	
	var temp = date + "" + "00:00:00";
	var d = parseyyyymmddhhmiss2Date(temp);
	//特别注意getDay是从周日算起,周日为0
	if(d.getDay() == 0)
	{
		var monday_milliseconds=d.getTime()- 6 * (1000*60*60*24);
	}else
	{
		var monday_milliseconds=d.getTime()- parseInt(d.getDay() - 1) * (1000*60*60*24);
	}	
	var monday = new Date();
	monday.setTime(monday_milliseconds);
	var strYear = monday.getFullYear();
	var strDay = monday.getDate();
	var strMonth = monday.getMonth()+1;

	if(strMonth<10)
	{
		strMonth="0"+strMonth;
	}
	if(strDay<10)
	{
		strDay="0"+strDay
	}
	var datastr = strYear+"-"+strMonth+"-"+strDay;
	return datastr;
}

// 传入电池剩余电量百分比%
function formatPercentage(Percentage){
	var unit = "%";
	var result = Percentage + unit;
	return result;
}

/*传入单位为kwh的发电量,根据大小转换为GWh或者MWh并返回小数2位数值*/
function formatKwh(energy)
{
	var num = parseFloat(energy);
	var realNum = num;
	var unit = "kWh";
	if(num >= 999999999)
	{
		realNum = (num/1000000).toFixed(1);
		unit = "GWh";
	}
	else if(num >= 999999)
	{

		realNum = (num/1000).toFixed(1);
		unit = "MWh";
	}
	else
	{
		realNum = num.toFixed(1);
	}
	var result = realNum + unit;
	return result;
}

/*传入单位为kg的数值,根据大小转换为t并返回小数1位数值*/
function formatKg(weight)
{
	var num = parseFloat(weight);
	var realNum = num;
	var unit = "kg";
	if(num >= 1000)
	{
		realNum = (num/1000).toFixed(1);
		unit = "t"
	}
	else
	{
		realNum = num.toFixed(1);
	}
	var result = realNum + unit;
	return result;
}

/*传入标称功率和单位,返回换算好的单位为KW的标称功率*/
function formatNominal2kW(num, unit)
{
	var realNum = 0;	
	if(unit == "kW")
	{
		realNum = parseFloat(num);
	}
	else if(unit == "MW")
	{
		realNum = parseFloat(num)*1000;
	}
	else
	{
		realNum = parseFloat(num)*1000000;
	}
	return realNum;
}

/*传入单位为kW数值,numStatus 0-不返回,1-返回,两个都为1全部返回*/
function unzipNomial2Own(power, numStatus, unitStatus)
{
	var num = parseFloat(power);
	var realNum = num;
	var unit = "kW";
	if(num >= 999999999)
	{
		realNum = (parseFloat(num)/1000000);
		unit = "GW";
	}
	else if(num >= 999999)
	{

		realNum = (parseFloat(num)/1000);
		unit = "MW";
	}
	else
	{
		realNum = parseFloat(num);
	}
	var result = realNum + unit;

	if((numStatus == 1) && (unitStatus == 1))
	{
		//返回带单位数值
		return result;
	}
	else if((numStatus == 1) && (unitStatus == 0))
	{
		//只返回转换数据,不返回单位
		return realNum;
	}
	else
		return unit;//只返回单位
}

/*传入后台返回货币¥326456.80,按照3位划分*/
function formatCurrency(data)
{
	var strSum = data;
	var cool = data;
	if(strSum.indexOf(".") > -1) {                           
        strSum = strSum.split(".")[0];  
    }  
    var behind = cool.replace(strSum, '');//截取小数部分
    var intSum = strSum.replace(/[^\d]/g, '');//获得整数部分
    var moneyType = strSum.replace(intSum, '');//得到币种
    var result = moneyType + MilliFormatCurrency(intSum).split(".")[0] + behind; 
    return result;
}

/* 将数值四舍五入(保留1位小数),后格式化成金额(千分位)形式 */
function  MilliFormatCurrency(num) 
{  
    num = num.toString().replace(/\$|\,/g,'');  
    if(isNaN(num))  
    num = "0";  
    sign = (num == (num = Math.abs(num)));  
    num = Math.floor(num*10+0.50000000001);  
    cents = num%10;
    num = Math.floor(num/10).toString();  
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
    num = num.substring(0,num.length-(4*i+3))+','+  
    num.substring(num.length-(4*i+3));  
    return (((sign)?'':'-') + num + '.' + cents);  
} 

/*电站信息,格式化时区*/
function formatTimeZone(zone)
{	
	var str = zone.toString();
	var timezone;
	if(testStrHavePoint(str))
	{
		var new_zone = str.split(".")
		timezone = "(GMT " +(zone < 10? ("0" + new_zone[0]) : new_zone[0])  + ":30)";
		
	}else if(zone  < 0)
	{
		timezone = "(GMT " + zone + ":00)";
	}
	else if(zone == 0)
	{
		timezone = "(GMT +00:00)" ;
	}
	else
	{
		timezone = "(GMT +" + (zone < 10? ("0" + zone) : zone) + ":00)";
	}
	return timezone;
}

/*电站信息,将后台返回币种处理加上描述*/
function formatMoneyType(type)
{
	var moneyType = new Array();
	moneyType["￥"] = "人民币(￥)";
	moneyType["$"] = "美元($)";
	moneyType["€"] = "欧元(€)";
	moneyType["$A"] = "澳元($A)";
	moneyType["¥"] = "日元(¥)";
	moneyType["£"] = "英镑(£)";
	moneyType["HK$"] = "港币(HK$)";

	return moneyType[type];
}

/*将小数转换为百分数,小数点后保留一位*/
Number.prototype.toPercent = function ()
{
	return (Math.round(this * 10000) / 100 ).toFixed(1) + "%";
}

/** ---------------------------------------------------------------- */
/**                                                                  */
/**电站信息读取,输入area,返回分开的contry|state|city且赋值相应ID	 	 */
/**																	*/
/** ---------------------------------------------------------------- */
function readPltArea(area, countryid, stateid, cityid)
{
	var areaStr = area.split("|");
	var len = areaStr.length;
	var country = " ";
	var state = " ";
	var city = " ";

	country = areaStr[0];
	if(len == 2)
	{
		state = areaStr[1];
	}
	else
	{
		state = areaStr[1];
		city = areaStr[2];
	}
	$('#' + countryid).val(country);
	$('#' + stateid).val(state);
	$('#'+ cityid).val(city);
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/**电站详细查询,只输入area,返回去除|且合并后的区域地址    				*/
/**																	*/
/** ---------------------------------------------------------------- */
function formatPltArea(area)
{

	if((area === null)||(area === undefined))
	{
		return "";
	}
	else
	{
		var areaStr = area.split("|");
		var areaInfo = "";
		if(areaStr.length > 0)
		{
			for(var i = 0; i < areaStr.length; i++)
			{
				areaInfo += areaStr[i];
			}		
		}
		return areaInfo;
	}	
}
/** ---------------------------------------------------------------- */
/**                                                                  */
/**集团账号详细查询,输入area+addres,返回去除|且合并后的区域地址    		*/
/**																	*/
/** ---------------------------------------------------------------- */
function formatGroupArea(area, address)
{
	if((address === null)||(address === undefined))
	{
		return  formatPltArea(area);
	}
	else
	{
		return (formatPltArea(area)+ address);
	}
}   
function getNowFormatDate(pm) {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    var Adate =[date.getFullYear(),month,strDate]
    if(pm=='time'){
    	
    	return currentdate;
    }else{
    	return Adate
    }
}

