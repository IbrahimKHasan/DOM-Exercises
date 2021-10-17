function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest

    counter=0
    colors.forEach(function(x){
    var colorsB=document.createElement("div")
    document.getElementById("colors").appendChild(colorsB)
    colorsB.style.backgroundColor=x
    colorsB.classList.add("choice")
    colorsB.id=`btn${counter}`
    var col = document.getElementById(`btn${counter}`)
    col.addEventListener('click',function(){
            document.getElementById('selected').style.backgroundColor=x;
            document.getElementById('selected').innerHTML=document.getElementById('selected').style.backgroundColor;
    })
    counter++
})    
}

window.onload = function () {
    initGrid();
}
