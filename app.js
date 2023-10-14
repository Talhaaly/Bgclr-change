
const colors = ["Red", "Green", "Blue", "Grey", "Black", "yellow", "pink"];
var text = document.querySelector('span')
const random = Math.floor(Math.random() * 7);
function clrHndlr() {
console.log(colors[random])
text.textContent = colors[random]
document.body.style.backgroundColor = colors[random]
}