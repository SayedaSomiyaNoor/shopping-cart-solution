function updateProductNumber(product,price,IsIncreasing){
    const productInput=document.getElementById(product+'-number');
    let productNumber=productInput.value;
    if(IsIncreasing==true){
        productNumber=parseInt(productNumber)+1;  
    }
    else if(productNumber>0){
        productNumber=parseInt(productNumber)-1;
    } 
    productInput.value=productNumber;
    //update case total
    const productTotal=document.getElementById(product+'-total');
    productTotal.innerText=productNumber*price;
    calculateTotal();
}
function getInputValue(product){
    const productInput=document.getElementById(product+'-number'); //এখানেও .value use করছো
    
    const productNumber=parseInt(productInput.value); //এখানেও
    
    return productNumber;
}
function calculateTotal(){
        const phoneTotal= getInputValue('phone')*1219;
        const caseTotal=getInputValue('case')*59;
        const subTotal=phoneTotal+caseTotal;
        const tax=subTotal/10;
        const totalPrice=subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax; 
    document.getElementById('total-price').innerText=totalPrice;     
}
//phone increase decrease events
document.getElementById('phone-plus').addEventListener('click',function()
{
    updateProductNumber('phone',1229,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1229,false);
})

document.getElementById('case-plus').addEventListener('click',function()
{
    updateProductNumber('case',59,true);
   
})
document.getElementById('case-minus').addEventListener('click',function(){
   
    updateProductNumber('case',59,false);
})