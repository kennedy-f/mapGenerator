$(document).ready(function () {
    renderIsland(matriz);
    showTypes();
})


//Types 
var types = ['forest', 'mountain', 'plain', 'citie', 'water', 'cave', 'desert', 'lava'];

function showTypes() {
    types.map(dado => $("<label>" + dado + ",  </label><span> </span>").appendTo($("#selectedTypes")));
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


function showMap() {
    var mapSize = $("#mapSize").val();
    var mapNoise = arrayFill(mapSize);

    var island = generateIsland(mapNoise);

    renderIsland(island);
}


//Map 
function createArray2D(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr;
}


function arrayFill(size) {
    var matriz = createArray2D(size);
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            matriz[i][j] = [] //types[Math.floor(Math.random() * types.length)];
        }
    }
    return matriz;
}



var matriz = generateIsland(arrayFill(80))

//Function que gera a matriz
//Pra adicionar outras variantes só criar a classe no main.css 
//
