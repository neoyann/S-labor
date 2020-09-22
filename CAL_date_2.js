/* <button onclick="dateDiff_year(); vDate();">계산하기</button> */

document.getElementById('bDt').valueAsDate = new Date();


function dateDiff_month (){
 //산정기준일과 입사일 차이로 근속년수 계산 
  let sdt = new Date(document.getElementById('jDt').valueAsDate);
  let edt = new Date(document.getElementById('bDt').valueAsDate);
  let dateDiff = Math.ceil((edt.getTime()-sdt.getTime())/(1000*3600*24)); 
  console.log(`${dateDiff}.${typeof dateDiff}`);
  let wMth = dateDiff / 30;

  document.getElementById('wMt').value = Math.floor(wMth); 
} 
 

function vDate_2() {
  //근로기준법 60조 1년미만근로자에게는 1개월개근시 1일의 유급휴가를 주어야 한다.
  //최대 연차일수는 11일임. 
 let i = document.getElementById('wMt').value;

 if(i == 0) {
    alert('산정할 연차가 없습니다')    
 } else if(i >=1 && i<12) {
   document.getElementById("vDt").value=i;     
 } else if(i>12) {
  document.getElementById("vDt").value=11;    
  alert('1년이상 으로 계산해주세요')    
}
}




 

function sbtdate() { 
  // 사용일수 차감 
  let i = document.getElementById('vDt').value;
  let j = document.getElementById('uDt').value;
  
   
  document.getElementById('rDt').value = i-j;
}
  