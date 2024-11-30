// Define basic arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if (num2 === 0) {
        return "Error"; // Handle division by zero
    }
    return num1 / num2;
}

// Operate function based on the operator
function operate(numb1, numb2, operator) {
    if (operator === "*") {
        return mul(numb1, numb2);
    } else if (operator === "+") {
        return add(numb1, numb2);
    } else if (operator === "/") {
        return div(numb1, numb2);
    } else if (operator === "-") {
        return sub(numb1, numb2);
    }
}
let first=""
let second=""
let ops=""
let isops=false

const buttons=document.querySelectorAll('.num')
const display=document.querySelector('.screen')
buttons.forEach(button=>{
   
    
    button.addEventListener("click",()=>{
        if(button.textContent==="C"){
            first=""
            second=""
            ops=""
            isops=false

            display.value=""
            return

        } 
  

        //for frst
        if(button.textContent>="0" && button.textContent<="9" && isops===false){
            first=first+button.textContent
            display.value=first
        

            
        }
        //for operator
        if((button.textContent==="*" || button.textContent==="+" ||button.textContent==="-"||button.textContent==="/" )&& isops===false){
             ops=button.textContent
             display.value=first+ops
             isops=true

             


        }
        if(button.textContent>="0" && button.textContent<="9" && isops===true){
            second=second+button.textContent
            display.value=first+ops+second
        }

        if (button.textContent==="="){
            if (first && second && ops){
              const result= operate(
                  parseFloat(first),parseFloat(second),ops
              )
              display.value=result
              first=""
              second=""
              ops=""
              isops=false
              

            }


            return


      }
      if(button.textContent==="." && !isops && !first.includes(".")){
        first=first+"."
        display.value=first

      }
      else if(button.textContent==="." && isops && !second.includes(".")){
        second=second+"."
        display.value=first+ops+second
      }
       
        



                


    })
})