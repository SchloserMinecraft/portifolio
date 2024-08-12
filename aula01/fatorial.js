
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