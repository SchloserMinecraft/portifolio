
function soma(a,b){
console.log(c = a+b)}
soma(2,2)
function subtração(a,b){
console.log(c = a-b)}
subtração(2,2)
function multiplicação(a,b){
console.log(c = a*b)}
 multiplicação(2,2)
 function divisão(a,b){
    console.log(c = a/b)}
    divisão(2,2)
    function media (a,b,c){
        console.log(d=(a+b+c)/3)
    }
    media(2,2,2)
    function parouimpar (a){
        if (a%2==1){
        console.log("impar")}
    else{
        console.log("par")
    }
    }
    parouimpar(3)
    function negaposizero (a){
        if (a<0){
            console.log("negativo")
        }
       else if(a>0){
        console.log("positivo")
       }
       else{
        console.log("zero")
       }
}
    negaposizero(2)
    function calcularfatorial(n){
        if(n===0 || n===1){
            return 1
        }
        else {
            return n * calcularfatorial(n - 1)
        
        }
        }
          console.log(calcularfatorial(5))
          console.log(calcularfatorial(0))

function ehbissexto(ano){
    if ((ano%4 == 0 && ano% 100 != 0) || ano % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}
var ano = 2024
if (ehbissexto){

}
function palavra(contador){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            contador++
        }
       
    } return contador
}
         