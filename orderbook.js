window.onload=()=>{
    let range= document.getElementById("range")
    let inputV = document.querySelector(".inputV")
    let displayValue = document.querySelector(".value")
    let marginValue = document.querySelector(".margin")
        let orderBtn = document.querySelector(".order__btn")
    let buyBtn = document.querySelector(".buyBtn")
    let inputValue = document.querySelector(".inputV")
    let sellBtn = document.querySelector(".sellBtn")
    
    
    const number = 123456.789;
const formattedNumber = number.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

console.log(formattedNumber )

    
    buyBtn.addEventListener("click",()=>{
        orderBtn.style.backgroundColor = "#00c04b"
        orderBtn.innerHTML = "Buy"
        
    })
    
    sellBtn.addEventListener("click",()=>{
    orderBtn.style.backgroundColor = "#ff474c"
        orderBtn.innerHTML = "Sell"
    })
    
    
    inputV.addEventListener("input",()=>{
    const inputCal = inputValue.value === "" ? 0 : range.value * inputValue.value 
      marginValue.innerHTML = inputCal 
        displayValue.innerHTML =inputCal.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
});
range.addEventListener("input",()=>{
    const inputCal = inputValue.value === "" ? 0 : range.value * inputValue.value 
      marginValue.innerHTML = inputCal 
        displayValue.innerHTML =inputCal.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
});
        
        
    
    
    
}



