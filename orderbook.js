window.onload=()=>{
let body = document.querySelector("body")
let buttons = document.querySelectorAll("button")
    let range= document.getElementById("range")
    let inputV = document.querySelector(".inputV")
      let marginValue = document.querySelector(".margin")
    let displayValue = document.querySelector(".value")
      //Margin and Value Div
    let valueDiv= document.querySelector(".valueDiv")
     let marginDiv = document.querySelector(".marginDiv")
  
        let orderBtn = document.querySelector(".order__btn")
    let buyBtn = document.querySelector(".buyBtn")
    let inputValue = document.querySelector(".inputV")
    let sellBtn = document.querySelector(".sellBtn")
    let lightBtn = document.querySelector(".light")
    let darkBtn = document.querySelector(".dark")
    
    
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
      marginValue.innerHTML = `x${range.value}`
        displayValue.innerHTML =inputCal.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
});
range.addEventListener("input",()=>{
    const inputCal = inputValue.value === "" ? 0 : range.value * inputValue.value 
      marginValue.innerHTML = `x${range.value}`
        displayValue.innerHTML =inputCal.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
});

//Light & Dark mode

darkBtn.addEventListener("click",()=>{
    body.style.backgroundColor= "#121212"
    sellBtn.style.color= "#ffffff"
    buyBtn.style.color= "#ffffff"
    valueDiv.style.color= "#ffffff"
    marginDiv.style.color= "#ffffff"
})
lightBtn.addEventListener("click",()=>{
    body.style.backgroundColor= "#ffffff"
    
    
})
        
        
    
    
    
}



