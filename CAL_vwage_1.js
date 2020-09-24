function cal_usualwage (){

           
    let i=document.getElementById('bWage').value; 
    let j=document.getElementById('sWage').value; 
    let x=document.getElementById('exWage').value; 
    let sum = Number(i)+Number(j)+Number(x);
        
    document.getElementById('uWage').value = sum;

}

