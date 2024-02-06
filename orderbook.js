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
     
         let avBalance = document.querySelector(".balance")
  
        let orderBtn = document.querySelector(".order__btn")
    let buyBtn = document.querySelector(".buyBtn")
    let inputValue = document.querySelector(".inputV")
    let sellBtn = document.querySelector(".sellBtn")
    let lightBtn = document.querySelector(".light")
    let darkBtn = document.querySelector(".dark")
    
    //Margin Limit variables
let lim1= document.querySelector(".lm1")
let lim2= document.querySelector(".lm2")
let lim3= document.querySelector(".lm3")
let lim4= document.querySelector(".lm4")
let limAll= document.querySelectorAll(".lm")
    
    
    
    //Balance Prompt
    let prompter = prompt("What is your balance")
 avBalance.innerHTML = prompter === ""? "$"+ 0 : parseInt(prompter).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

inputV.addEventListener("input",()=>{
for (let i = 0; i < limAll .length; i++) {
 let amount = inputV.value
      if (amount >= (0.25 * prompter)){
          limAll[0].style.color= "red";
      }else{
          limAll[0].style.color= "#00c04b";
      }if (amount >= (0.5* prompter)){
          limAll[1].style.color= "red";
      }else{
          limAll[1].style.color= "#00c04b";
      }if (amount >= (0.75* prompter)){
          limAll[2].style.color= "red";
      }else{
          limAll[2].style.color= "#00c04b";
      }if (amount >= (0.99* prompter)){
          limAll[3].style.color= "red";
      }else{
          limAll[3].style.color= "#00c04b";
      }
      
      
}
        
    })
    
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
    body.style.color= "#ffffff"
    sellBtn.style.color= "#ffffff"
    buyBtn.style.color= "#ffffff"
    valueDiv.style.color= "#ffffff"
    marginDiv.style.color= "#ffffff"
})
lightBtn.addEventListener("click",()=>{
    body.style.backgroundColor= "#ffffff"
    body.style.color= "black"
    sellBtn.style.color= "black"
    buyBtn.style.color= "black"
    valueDiv.style.color= "black"
    marginDiv.style.color= "black"
    
    
})
        
        
    
    
    
}



