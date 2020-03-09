$(document).ready(function () {
    console.log('Digite generateMap');
    console.log('Está function que esta a preencher a matriz')
    showTypes(); 
})


//Types 
var types = ['florest', 'mountains', 'plains', 'cities', 'water']; 

function showTypes() {
    types.map(dado => $("<label>" + dado + ",  </label><span> </span>" ).appendTo($("#selectedTypes")));
}

function deleteTypes() {
    $("#selectedTypes").remove();
}

function createTypes() {
    $("<div id='selectedTypes' class='col-4'></div>").appendTo($("#types"));
    showTypes();
}

function addGroundType(event) {
    event.preventDefault();
    var defaultTypes = ['florest', 'mountains', 'plains', 'cities', 'water'];
    //to-do criar função para o input aceitar apenas letras. 
    var userType = $('#groundType').val().toLowerCase();
    for (var i = 0; i < defaultTypes.length; i++) {
        if (userType === defaultTypes[i]) {
            types.push(defaultTypes[i]);
            deleteTypes();
            createTypes();
            return
        }
    }

}

//Map 
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
            matriz[i][j] = types[Math.floor(Math.random() * types.length)]; 
        }
    }
    return matriz; 
}

function showMap(mapX, mapY){ //to-do incrementar funcao de tamanho X e Y no mapa
    var map = generateMap(mapX);         
    for (var i = 0; i < mapX; i++) { 
        for (var j = 0; j < mapX; j++ ){             
            $('<label >' + map[i][j]  + '</lavel><span>, <span>').appendTo($('#map'));
        }
        $('</br>').appendTo($('#map')); 
    }


}


