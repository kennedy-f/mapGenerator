$(document).ready(function () {
    console.log('Digite generateMap');
    console.log('Está function que esta a preencher a matriz')
    show(); 
})



var types = ['florest', 'mountains', 'plains', 'cities', '']; 

function show() {
    types.map(dado => $("<p>" + dado + "</p>").appendTo($("#matriz")));
}

function deleteMap() {
    $("#matriz").remove();
}

function createMap() {
    $("<div id='matriz' class='col-4'></div>").appendTo($("#mapGenerator"));
    show();
}

function createArray2D(rows){
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr;
}


function generateMap(size){
    var matriz = createArray2D(size); 
    for (var i = 0 ; i< size; i++){ 
        for(var j = 0; j < size; j++ ){ 
            matriz[i][j] = types[Math.floor(Math.random() * types.length - 1)]; 
        }
    }
    return matriz; 
}


function addGroundType(event){ 
    event.preventDefault(); 
    var defaultTypes = ['cities', 'plain', 'florest', 'village', 'mountais', 'water']; 
    //to-do criar função para o input aceitar apenas letras. 
    var userType = $('#groundType').val().toLowerCase(); 
    for (var i = 0; i < defaultTypes.length; i++) { 
        if (userType === defaultTypes[i]) {
            types.push(defaultTypes[i]); 
            deleteMap(); 
            createMap();
            return
        }
    }
    
}

function randomType() { 
    //to-do adicionar tipos de terreno aqui 
}
