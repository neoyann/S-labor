function movepage(page)
{
window.document.location.href=page;
return;
}



function numberFormat(inputNumber) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }