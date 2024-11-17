function add(num1,num2){
    return num1+num2;

}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}
const numb1=2;
const numb2=3;
const operator="*";

function operate(numb1,numb2,operator){
if (operator==="*"){
    return mul(numb1,numb2)
}
else if(operator==="+"){
    return add(numb1,numb2)
}
else if(operator==="/"){
    return div(numb1,numb2)
}
else if(operator==="-"){
    return sub(numb1,numb2)
}
}

console.log(operate(2,3,"+"))