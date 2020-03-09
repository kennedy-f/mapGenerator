$(document).ready(function () {
    console.log('Digite generateMap');
    console.log('Está function que esta a preencher a matriz')
    types.map(dado => $("<p>" + dado + "</p>").insertAfter($("#matriz")));
})



var types = ['florest', 'mountains', 'plains']; 

function createArray2D(rows){
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }

    return arr;
}

var matriz
function generateMap(size){
    var matriz = createArray2D(size); 
    for (var i = 0 ; i< size; i++){ 
        for(var j = 0; j < size; j++ ){ 
            matriz[i][j] = 'teste'; 
        }
    }
    return matriz; 
}


