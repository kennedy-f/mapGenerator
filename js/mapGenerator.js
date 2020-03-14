// Here is just the map generators codes 

function setup (top, sea, max, min, variation) {     
    return conf = {
        'top':  (top ? top : defaulConf.top ), 
        'sea':  (sea ? sea : defaulConf.sea ), 
        'max' : (max ? max : defaulConf.max), 
        'min' : (min ? min : defaulConf.min), 
        'variation' : (variation ? variation : defaulConf.variation),
    }; 
}
defaulConf = { 
    'top' : 20, 
    'sea' : 0, 
    'max': [-2, -1, -1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2], 
    'min': [-2, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1], 
    'variation' : [-2, -1, 0, 1]
}; 

// 
//refactor 

function generateIsland(matriz) {     
    var y = 0;
    var x = 0;
    var i
    var mar = 0
    var topo = 20
    var arraymax = [-1,0,0,1,1,2]
    var arraymed = [-1,0,0,1,1]
    var arraymin = [-2,-1,-1,0,0,1]
    //var arraymax = [10]
    //var arraymed = [-10]
    //var arraymin = [10]
    var variacao = arraymed
    var batata = variacao.length
    var feijoada
    var ovo
    var salada
    var carne
    matriz[y][x] = 0

    function proporcao(multiplicacao){
        return Math.floor(multiplicacao * matriz.length / 10)
    }

    for (i = 1; i < matriz.length; i++) {
        rdn = Math.floor(Math.random() * variation.length)
        x +=1; 
        salada = matriz[y][x - 1] + variation[rdn];
        if (salada < sea)
            salada = sea;
        else if (salada > top)
            salada = top; 
        matriz[y][x] = salada; 
    }
    y = 0, x = 0; 

    for (var i = 1; i < matriz[0].length; i++) {
        rdn = Math.floor(Math.random() * variation.length);
        y += 1; 
        salada = matriz[y - 1][x] + variation[rdn]; 
        if (salada < sea) 
            salada = sea;
        else if ( salada > top)
            salada = topo;
        matriz[y][x] = salada; 
    }

    for (var ytemp = 1; ytemp < matriz.length; ytemp++) {
        for (var xtemp = 1; xtemp < matriz[0].length; xtemp++) {
            
            variacao = arraymed

            if (ytemp >= proporcao(2))
            if (ytemp < proporcao(6))
            if (xtemp >= proporcao(2)) 
            if (xtemp < proporcao(4))
                variacao = arraymax

            if (ytemp >= proporcao(2)) 
            if (ytemp < proporcao(4))
            if (xtemp >= proporcao(2)) 
            if (xtemp < proporcao(6))
                variacao = arraymax

            if (ytemp >= proporcao(8))
            if (ytemp < proporcao(9)) 
            if (xtemp >= proporcao(2))
            if (xtemp < proporcao(9))
                variacao = arraymin

            if (ytemp >= proporcao(2))
            if (ytemp < proporcao(9))
            if (xtemp >= proporcao(8)) 
            if (xtemp < proporcao(9))
                variacao = arraymin



            batata = variacao.length

            ovo = Math.floor(Math.random() * batata);
            salada = matriz[ytemp][xtemp - 1]
            carne = matriz[ytemp - 1][xtemp]
            feijoada = Math.floor((carne + salada) / 2) + variacao[ovo]
            if (feijoada < mar)
                feijoada = mar
            else if (feijoada > topo)
                feijoada = topo
            matriz[ytemp][xtemp] = feijoada
        }
    }
    return matriz; 


}

function renderIsland(matriz) {
    console.log(matriz)
    $("#map").html("")
    for (var i = 0; i < matriz.length; i++) {
        $('<div id="coluna' + i + '">').appendTo('#map');
        for (var j = 0; j < matriz.length; j++) {  
            $('<div id="pos'+ i + 'x' + j + '"class=""></div>').appendTo('#coluna' + i)
            var pos = matriz[i][j]; 
            if (pos <= 1) {
                $('#pos'+ i + 'x' + j).addClass("deepSea")
            } else if (pos <= 4) {
                $('#pos'+ i + 'x' + j).addClass("coast")
            } else if (pos <= 6) {
                $('#pos' + i + 'x' + j).addClass("sand")
            }  else if (pos < 11) {
                $('#pos' + i + 'x' + j).addClass("earth")
            } else if (pos >= 11 && pos <= 13) {
                $('#pos' + i + 'x' + j).addClass("florest")
            } else if (pos > 13 && pos < 16) {
                $('#pos' + i + 'x' + j).addClass("darkFlorest")
            } else if (pos == 16) {
                $('#pos' + i + 'x' + j).addClass("mountainFoot1")
            } else if (pos == 17) {
                $('#pos' + i + 'x' + j).addClass("mountainFoot2")
            } else if (pos == 18) {
                $('#pos' + i + 'x' + j).addClass("mountainFoot3")
            } else if (pos == 19) {
                $('#pos' + i + 'x' + j).addClass("mountainFoot4")
            } else if (pos == 20) {
                $('#pos' + i + 'x' + j).addClass("mountain")
            } else {
                console.log('como')   
            }
        }
        $('</div>').appendTo('#map');
    }      

}

// function oldgenerateIsland(matriz) {
//     var y = 0;
//     var x = 0;
//     var i
//     var mar = 0
//     var topo = 20
//     var variacao = Array(-2, -1, 0, 1)
//     var arraymax = [-2, -1, -1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2]
//     var arraymin = [-2, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1]
//     var batata = variacao.length
//     var feijoada
//     var ovo
//     var salada
//     var carne
//     matriz[y][x] = 0

//     for (i = 1; i < matriz.length; i++) {
//         ovo = Math.floor(Math.random() * batata);
//         x += 1;
//         salada = matriz[y][x - 1] + variacao[ovo]
//         if (salada < mar)
//             salada = mar
//         else if (salada > topo)
//             salada = topo
//         matriz[y][x] = salada
//     }

//     y = 0
//     x = 0

//     for (i = 1; i < matriz[0].length; i++) {
//         ovo = Math.floor(Math.random() * batata);
//         y += 1
//         salada = matriz[y - 1][x] + variacao[ovo]
//         if (salada < mar)
//             salada = mar
//         else if (salada > topo)
//             salada = topo
//         matriz[y][x] = salada
//     }

//     for (var ytemp = 1; ytemp < matriz.length; ytemp++) {
//         for (var xtemp = 1; xtemp < matriz[0].length; xtemp++) {

//             if (ytemp >= Math.floor(matriz.length / 8) 
//             && xtemp >= Math.floor(matriz.length / 8)
//             && ytemp <= Math.floor(5 * (matriz.length / 8)) 
//             && xtemp <= Math.floor(5 * (matriz.length / 8))) {
//                 variacao = arraymax
//             }
//             else {
//                 variacao = arraymin
//             }
//             batata = variacao.length

//             ovo = Math.floor(Math.random() * batata);
//             salada = matriz[ytemp][xtemp - 1]
//             carne = matriz[ytemp - 1][xtemp]
//             feijoada = Math.floor((carne + salada) / 2) + variacao[ovo]
//             if (feijoada < mar)
//                 feijoada = mar
//             else if (feijoada > topo)
//                 feijoada = topo
//             matriz[ytemp][xtemp] = feijoada
//         }
//     }

//     return matriz
// }