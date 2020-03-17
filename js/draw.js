function drawMap(array) { 
    var cvs = $("#canvas")[0];
    var ctx = cvs.getContext('2d')

    ctx.clearRect(0, 0, cvs.width, cvs.height);    

    $("#canvas").css('width', array.length); 
    $("#canvas").css('height', array.length);

    cvs.width = array[0].length;
    cvs.heigth = array[0].length;

    var ctx = cvs.getContext('2d');    

    for (var i = 0; i < array[0].length; i++) { 
        for (var j = 0; j < array[0].length; j++){
            pos = array[i][j]; 
            var color; 
            if (pos <= 1) {
                color = 'blue'       
                ctx.fillStyle = color;          
                ctx.fillRect(i, j, 1, 1);
            } else if (pos <= 4) {
                color = "#7171f5"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos <= 6) {
                color = "#f6e894"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos < 11) {
                color = "#722603"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos >= 11 && pos <= 13) {
                color = "#2baa11"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos > 13 && pos < 16) {
                color = "#1c6d0c"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos == 16) {
                color = "#9b9b9b"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos == 17) {
                color = "#a8a8a8"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos == 18) {
                color = "#cccccc"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos == 19) {
                color = "#cccccc"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else if (pos == 20) {
                color = "#ebebeb"
                ctx.fillStyle = color; 
                ctx.fillRect(i, j, 1, 1)
            } else {
                color = "#ebebeb"
                ctx.fillStyle = color;
                ctx.fillRect(i, j, 5, 5)
            }
        }
    }
}

function drawNoise() { 
    
}