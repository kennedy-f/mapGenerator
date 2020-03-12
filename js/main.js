$(document).ready(function () {
    console.log('Digite generateMap');
    console.log('Está function que esta a preencher a matriz')
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

//Map 
function createArray2D(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr;
}


function generateMap(size) {
    var matriz = createArray2D(size);
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            matriz[i][j] = [] //types[Math.floor(Math.random() * types.length)];
        }
    }
    return matriz;
}

//desculpa

function generateContinent(matriz) {
    //usando drunkenwalker
    var y = 0;
    var x = 0;
    var variacao = Array (-2,-1,0,1,2);
    var feijoada
    var ovo
    var salada
    var carne

    matriz[y][x] = -10

    for (var i = 1;i<matriz.length;i++){
        ovo = Math.floor (Math.random() * 5);
        x += 1;
        salada = matriz[y][x-1] + variacao[ovo]
        if (salada < -10)
        salada = -10
        else if (salada > 10)
        salada = 10
        matriz[y][x] = salada
    }

    y = 0
    x = 0

    for (var i = 1;i<matriz.length[0];i++){
        ovo = Math.floor (Math.random() * 5);
        y+=1
        salada = matriz[y][x] + variacao[ovo]
        if (salada < -10)
        salada = -10
        else if (salada > 10)
        salada = 10
        matriz[y][x] = salada
    }

    for (var ytemp = 1; i < matriz.length;ytemp++){
        for (var xtemp = 1; i < matriz[0].length;xtemp++){
            ovo = Math.floor (Math.random() * 5);
            salada = matriz[ytemp][xtemp-1]
            carne = matriz[ytemp-1][xtemp]
            feijoada = (carne + salada)/2 + variacao[ovo]
            if (feijoada < -10)
            feijoada = -10
            else if (feijoada > 10)
            feijoada = 10
            matriz[y][x] = feijoada
        }
    }

    return matriz
}

function drunkWalker(){
// to-do fazer todo o drunkWalker rolar aqui dentro
}



function showMap(mapX, mapY) { //to-do incrementar funcao de tamanho X e Y no mapa
    for (var i = 0; i < mapX; i++) {
        for (var j = 0; j < mapX; j++) {
            $('<label >' + map[i][j] + '</lavel><span>, <span>').appendTo($('#map'));
        }
        $('</br>').appendTo($('#map'));
    }
}


