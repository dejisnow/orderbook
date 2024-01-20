window.onload=()=>{
    let range= document.getElementById("range")
    let displayValue = document.querySelector(".value")
    let marginValue = document.querySelector(".margin")
        let orderBtn = document.querySelector(".order__btn")
    let buyBtn = document.querySelector(".buyBtn")
    let inputValue = document.querySelector(".inputV")
    let sellBtn = document.querySelector(".sellBtn")
    
    buyBtn.addEventListener("click",()=>{
        orderBtn.style.backgroundColor = "#00c04b"
        orderBtn.innerHTML = "Buy"
        
    })
    
    sellBtn.addEventListener("click",()=>{
    orderBtn.style.backgroundColor = "#ff474c"
        orderBtn.innerHTML = "Sell"
    })
    
    
    range.addEventListener("input",()=>{
      marginValue.innerHTML = inputValue.value === "" ? 0 : range.value * inputValue.value 
        displayValue.innerHTML = range.value
        
    })
    
    
}
