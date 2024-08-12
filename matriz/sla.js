let tabuleiro = new Array(3)
for(let i =0;i<tabuleiro.length;i++){
    tabuleiro[i] = new Array(3)


for (let j=0;j< tabuleiro[i].lenght; j++){
    button = document.createElement('button')
    button.setAtribute('type','button')
    button.setAtribute('id','bt'+i+""+i)
    button.setAtribute('class','btJogo'+i)
    button.setAtribute('onclick','marca('+i+","+j+")")
    button.append(document.createTextNode(""))
    document.body.append(button)
}
}