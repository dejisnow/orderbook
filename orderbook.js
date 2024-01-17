
window.onload=()=>{
    let range= document.getElementById("range")
    let displayValue = document.querySelector(".value")
        let orderBtn = document.querySelector(".order__btn")
    let buyBtn = document.querySelector(".buyBtn")
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
        displayValue.innerHTML = range.value
    })
    
    
}
