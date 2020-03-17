var x, y; 

function perlin( size) { 
    var genArr = Array(size); 
    for  (var x = 0 ; x < size ; x++ ){
        genArr[x] = []
        for (var y = 0; y < size; y++){
            var seed = Math.floor(Math.random() * 255 +1); 
            genArr[x][y] = seed;
        }
        
    }   
    return genArr; 
}


function fade(needFade){ 
    var response = needFade * needFade * needFade * (needFade * (needFade * 6 - 15) + 10); 

    return response ;
}
var needNoise = perlin(10); 


function setFade(needNoise) { 
    for (x = 0; x < needNoise[0].length; x++) {
        for (y = 0; y < needNoise[0].length; y++) {
            neednoise[x][y] = fade(needNoise[x][y]);
        }
    }
    return needNoise; 
}

function getDot (ix, iy) { 
    needNoise[ix][iy]; 

    
} 

// function noise (ix, iy) { 
//     setFade(needNoise); 
    
// }