/* <button onclick="dateDiff_year(); vDate();">계산하기</button> */

document.getElementById('bDt').valueAsDate = new Date();

function addyear() { 
  //입사일 +1년   
  let date = document.getElementById('jDt').valueAsDate;
  date.setFullYear(date.getFullYear() + 1);
  document.getElementById('iDt').valueAsDate = date; 
}

function sbtdate() { 
  // 사용일수 차감 
  let i = document.getElementById('vDt').value;
  let j = document.getElementById('uDt').value;
  
   
  document.getElementById('rDt').value = i-j;
}
  
function dateDiff_year (){
 //산정기준일과 입사일 차이로 근속년수 계산 
  let sdt = new Date(document.getElementById('jDt').valueAsDate);
  let edt = new Date(document.getElementById('bDt').valueAsDate);
  let dateDiff = Math.ceil((edt.getTime()-sdt.getTime())/(1000*3600*24)); 
  // console.log(`${dateDiff}.${typeof dateDiff}`);
  let wYear = dateDiff / 365;

  document.getElementById('wYr').value = Math.floor(wYear); 
} 
 

function vDate() {
  //근로기준법 60조 연차유급휴가 3년이상 근로자에 한하여 2년마다 1일씩 추가 최대 25일 
 let i = document.getElementById('wYr').value;
//  alert (i);
 if(i == 0) {
     alert('1년미만근로자로 선택해주세요')      
  } else if(i>=1 && i<=2){
  document.getElementById("vDt").value=15;
  } else if(i>2 && i<5){
  document.getElementById("vDt").value=16;
  } else if (i>4 && i<7){
  document.getElementById("vDt").value=17;
  } else if (i>6 && i<9){
  document.getElementById("vDt").value=18;
  } else if (i>8 && i<11){
  document.getElementById("vDt").value=19;      
  } else if (i>10 && i<13){
  document.getElementById("vDt").value=20;
  } else if (i>12 && i<15){
  document.getElementById("vDt").value=21;
  } else if (i>14 && i<17){
  document.getElementById("vDt").value=22;
  } else if (i>16 && i<19){
  document.getElementById("vDt").value=23;
  } else if (i>18 && i<21){
  document.getElementById("vDt").value=24;
  } else if (i>20 && i<23){
  document.getElementById("vDt").value=25;
  } else {
  document.getElementById("vDt").valude=25;       
}     
}