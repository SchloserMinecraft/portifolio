var nome,endereco,telefone, jonas

function nome() {
    nome = prompt("nome:")
    document.getElementById("nometxt").innerHTML = `${nome}`
    
}
function endereco () {
    endereco = prompt("endereco:")
    document.getElementById("enderecotxt").innerHTML = `${endereco}`
}
function telefone () {
    telefone = prompt("telefone:")
    document.getElementById("telefonetxt").innerHTML = `${telefone}`
}
