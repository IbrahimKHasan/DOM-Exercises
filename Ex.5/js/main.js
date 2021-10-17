var x=document.getElementById("password1");
document.getElementById("submitBtn").style.display="none"
x.onkeyup=function(){
if (x.value.length<=6){
document.getElementById("pw1_check").innerHTML="Too Short"
}
else {
    document.getElementById("pw1_check").innerHTML=""
    var y = document.getElementById("password2");
y.onkeyup=function(){
    if (y.value!==x.value){
    document.getElementById("pw2_check").innerHTML="the two passwords dont match"
    }
    else {
        document.getElementById("pw2_check").innerHTML=""
        document.getElementById("submitBtn").style.display=""
    }
    }
}
}
