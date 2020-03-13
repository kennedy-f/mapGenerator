$(document).ready(function () {
    console.log('Digite generateMap');
    console.log('Está function que esta a preencher a matriz')
    gera(matriz);
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

function generateContinent(matriz) {
    var y = 0;
    var x = 0;
    var i
    var mar = 0
    var topo = 20
    var variacao = Array (-2,-1,0,1)
    var arraymax = [-2,-1,-1,0,0,0,0,1,1,1,1,1,1,1,2,2,2]
    var arraymin = [-2,-1,-1,-1,-1,0,0,0,1,1,1]
    var batata = variacao.length
    var feijoada
    var ovo
    var salada
    var carne
    matriz[y][x] = 0

    for (i = 1;i<matriz.length;i++){
        ovo = Math.floor (Math.random() * batata);
        x += 1;
        salada = matriz[y][x-1] + variacao[ovo]
        if (salada < mar)
        salada = mar
        else if (salada > topo)
        salada = topo
        matriz[y][x] = salada
    }
    
    y = 0
    x = 0

    for (i = 1;i<matriz[0].length;i++){
        ovo = Math.floor (Math.random() * batata);
        y+=1
        salada = matriz[y-1][x] + variacao[ovo]
        if (salada < mar)
        salada = mar
        else if (salada > topo)
        salada = topo
        matriz[y][x] = salada
    }

    for (var ytemp = 1; ytemp < matriz.length;ytemp++){
        for (var xtemp = 1; xtemp < matriz[0].length;xtemp++){
            
            if (ytemp>=Math.floor(matriz.length/8) && xtemp>=Math.floor(matriz.length/8) 
            && ytemp<=Math.floor(5*(matriz.length/8)) && xtemp<=Math.floor(5*(matriz.length/8))){
            variacao = arraymax
            }
            else{
            variacao = arraymin
            }
            batata = variacao.length

            ovo = Math.floor (Math.random() * batata);
            salada = matriz[ytemp][xtemp-1]
            carne = matriz[ytemp-1][xtemp]
            feijoada = Math.floor((carne + salada)/2) + variacao[ovo]
            if (feijoada < mar)
            feijoada = mar
            else if (feijoada > topo)
            feijoada = topo
            matriz[ytemp][xtemp] = feijoada
        }
    }

    console.log(matriz)
    return matriz
}

var matriz = generateContinent(generateMap(80))

//Function que gera a matriz
//Pra adicionar outras variantes só criar a classe no main.css 
//
function gera(matriz) {
    for (var i = 0 ; i < matriz.length ; i++) {
        $('<div id="coluna'+ i + '">').appendTo('#map');
        for ( var j = 0 ; j < matriz.length; j++){
            if (matriz[i][j] < 5){
                $('<div class="mar"></div>').appendTo('#coluna'+ i)
            }else if (matriz[i][j] <= 15 ){
                $('<div class="terra"></div>').appendTo('#coluna'+ i)
            } else if (matriz[i][j] <= 20 ) { 
                $('<div class="montanha"></div>').appendTo('#coluna'+ i)
            }
        }
        $('</div>').appendTo('#map');
    }
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


