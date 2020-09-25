function movepage(page)
{
window.document.location.href=page;
return;
}

function cmaComma(obj) {
    var firstNum = obj.value.substring(0,1); // 첫글자 확인 변수
    var strNum = /^[/,/,0,1,2,3,4,5,6,7,8,9,/]/; // 숫자와 , 만 가능
    var str = "" + obj.value.replace(/,/gi,''); // 콤마 제거  
    var regx = new RegExp(/(-?\d+)(\d{3})/);  
    var bExists = str.indexOf(".",0);  
    var strArr = str.split('.');  
 
    if (!strNum.test(obj.value)) {
        // alert("숫자만 입력하십시오.\n\n특수문자와 한글/영문은 사용할수 없습니다.");
        obj.value = 0;
        obj.focus();
        return false;
    }
 
    if ((firstNum < "0" || "9" < firstNum)){
        alert("숫자만 입력하십시오.");
        obj.value = 0;
        obj.focus();
        return false;
    }
 
    while(regx.test(strArr[0])){  
        strArr[0] = strArr[0].replace(regx,"$1,$2");  
    }  
    if (bExists > -1)  {
        obj.value = strArr[0] + "." + strArr[1];  
    } else  {
        obj.value = strArr[0]; 
    }
}
 
function commaSplit(n) {// 콤마 나누는 부분
    var txtNumber = '' + n;
    var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
    var arrNumber = txtNumber.split('.');
    arrNumber[0] += '.';
    do {
        arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
    }
    while (rxSplit.test(arrNumber[0]));
    if(arrNumber.length > 1) {
        return arrNumber.join('');
    } else {
        return arrNumber[0].split('.')[0];
    }
}
 
function removeComma(n) {  // 콤마제거
    if ( typeof n == "undefined" || n == null || n == "" ) {
        return "";
    }
    var txtNumber = '' + n;
    return txtNumber.replace(/(,)/g, "");
}