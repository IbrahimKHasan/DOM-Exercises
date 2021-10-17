select1 = document.getElementById("font_family");
u=document.querySelectorAll("#font_family option")
console.log()
select1.onchange = function () {
  font =u[document.getElementById("font_family").selectedIndex].innerText;
  document.getElementById("text").style.fontFamily = font;
};
select2 = document.getElementById("font_size");
o=document.querySelectorAll("#font_size option")
select2.onchange = function () {
  fonts =o[document.getElementById("font_size").selectedIndex].innerText;
  console.log(fonts);
  document.getElementById("text").style.fontSize = fonts;
};

document.getElementById("font_italic").onclick = function () {
  x = document.getElementById("font_italic").checked;
  console.log(x);
  switch (x) {
    case true:
      document.getElementById("text").style.fontStyle = "italic";
      break;
    case false:
      document.getElementById("text").style.fontStyle = "normal";
  }
};
document.getElementById("font_bold").onclick = function () {
  y = document.getElementById("font_bold").checked;
  console.log(y);
  switch (y) {
    case true:
      document.getElementById("text").style.fontWeight = "bold";
      break;
    case false:
      document.getElementById("text").style.fontWeight = "normal";
  }
};
document.getElementById("font_underline").onclick = function () {
  z = document.getElementById("font_underline").checked;
  console.log(z);
  switch (z) {
    case true:
      document.getElementById("text").style.textDecoration = "underline";
      break;
    case false:
      document.getElementById("text").style.textDecoration = "none";
  }
};
