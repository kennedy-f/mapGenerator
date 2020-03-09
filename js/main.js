var matriz = ['arroz', 'feijao', 'batata', 'ovo']; 

console.log(matriz); 

//se quiser mostrar em tela só descomentar isso 
$(document).ready(function(){
    matriz.map(dado => $("<p>"+ dado +  "</p>").insertAfter($("#matriz"))); 
})

