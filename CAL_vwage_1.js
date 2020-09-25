function cal_usualwage (){           
    let i=removeComma(document.getElementById('bWage').value);  
    //document.getElementById('bWage').value=
    let j=removeComma(document.getElementById('sWage').value);     
    //document.getElementById('sWage').value=
    let x= j /12; // 상여금은 12개월로 안분해서 통상급여
    let sum= Number(i)+Number(x)
    let sum_1=Math.round(sum)
    document.getElementById('uWage').value = commaSplit(sum_1);
}

function cal_timewage (){   

    let i=removeComma(document.getElementById('uWage').value);   
    //document.getElementById('uWage').value=
    let j= i / 209; //한달소정근로시간 209h 
    let x = j*8 // 1일근로시간 8시간 산정 

    let j_1= Math.round(j);
    let x_1= Math.round(x);
    
    document.getElementById('tWage').value = commaSplit(j_1);
    document.getElementById('oneWage').value = commaSplit(x_1);
}

function cal_vactionwage(){           
    let i=document.getElementById('rDt').value; 
    let j=removeComma(document.getElementById('oneWage').value);
    let x = i*j// 1일통상임금 * 잔여일수 

    let x_1= Math.round(x); 
    
    document.getElementById('vWage').value = commaSplit(x_1);   
}






