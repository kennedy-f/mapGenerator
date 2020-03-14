// Here is just the map generators. 

function generateIsland(matriz) {
    var y = 0;
    var x = 0;
    var i
    var mar = 0
    var topo = 20
    var variacao = Array(-2, -1, 0, 1)
    var arraymax = [-2, -1, -1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2]
    var arraymin = [-2, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1]
    var batata = variacao.length
    var feijoada
    var ovo
    var salada
    var carne
    matriz[y][x] = 0

    for (i = 1; i < matriz.length; i++) {
        ovo = Math.floor(Math.random() * batata);
        x += 1;
        salada = matriz[y][x - 1] + variacao[ovo]
        if (salada < mar)
            salada = mar
        else if (salada > topo)
            salada = topo
        matriz[y][x] = salada
    }

    y = 0
    x = 0

    for (i = 1; i < matriz[0].length; i++) {
        ovo = Math.floor(Math.random() * batata);
        y += 1
        salada = matriz[y - 1][x] + variacao[ovo]
        if (salada < mar)
            salada = mar
        else if (salada > topo)
            salada = topo
        matriz[y][x] = salada
    }

    for (var ytemp = 1; ytemp < matriz.length; ytemp++) {
        for (var xtemp = 1; xtemp < matriz[0].length; xtemp++) {

            if (ytemp >= Math.floor(matriz.length / 8) && xtemp >= Math.floor(matriz.length / 8)
                && ytemp <= Math.floor(5 * (matriz.length / 8)) && xtemp <= Math.floor(5 * (matriz.length / 8))) {
                variacao = arraymax
            }
            else {
                variacao = arraymin
            }
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

    return matriz
}

function renderIsland(matriz) {
    $("#map").html("")
    for (var i = 0; i < matriz.length; i++) {
        $('<div id="coluna' + i + '">').appendTo('#map');
        for (var j = 0; j < matriz.length; j++) {
            if (matriz[i][j] < 5) {
                $('<div class="mar"></div>').appendTo('#coluna' + i)
            } else if (matriz[i][j] <= 15) {
                $('<div class="terra"></div>').appendTo('#coluna' + i)
            } else if (matriz[i][j] <= 20) {
                $('<div class="montanha"></div>').appendTo('#coluna' + i)
            }
        }
        $('</div>').appendTo('#map');
    }

}
