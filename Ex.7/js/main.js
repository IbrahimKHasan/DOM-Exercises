document.getElementById('addButton').onclick=function(){
var song = document.getElementById("songTextInput").value
var listC = document.createElement("li")
var listA = document.getElementById("playlist").appendChild(listC)
listC.innerHTML=song
var del = document.createElement("button")
del.style.float="right"
del.style.backgroundColor="red"
del.style.height="20px"
del.style.width="60px"
del.innerHTML="Delete"
del.style.textAlign="center"
listC.appendChild(del)
del.onclick=function(){
listC.remove()
}
}