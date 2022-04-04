var var1 = 0;
var var2 = 0;
var var3 = 0;
var var4 = 0;
var array = {
'1':0,
'2':0,
'3':0,
'4':0
}
function loadSave() {
 var game = JSON.parse(localStorage.getItem("gameSave"))
 if (typeof game.var1 !== "undefined") {var1 = game.var1}
 if (typeof game.var2 !== "undefined") {var2 = game.var2}
 if (typeof game.var3 !== "undefined") {var3 = game.var3}
 if (typeof game.var4 !== "undefined") {var4 = game.var4}
 if (typeof game.array[1] !== "undefined") {array[1] = game.var1}
 if (typeof game.array[2] !== "undefined") {array[2] = game.var2}
 if (typeof game.array[3] !== "undefined") {array[3] = game.var3}
 if (typeof game.array[4] !== "undefined") {array[4] = game.var4}
};

setInterval(saveGame, 30000) 
 
}
function updateScrn() {
 document.getElementById('var1').innerHTML = var1
 document.getElementById('var2').innerHTML = var2
 document.getElementById('var3').innerHTML = var3
 document.getElementById('var4').innerHTML = var4
}
setInterval(updateScrn, 50);

function saveGame() {
 const gameSave = {
	var1: var1,
	var2: var2,
	var3: var3,
	var4: var4,
 array: array
	  }
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
window.addEventListener('mousedown', function e() {
 var1 = var1 + 1;
 var2 = var2 + 2;
 var3 = var3 + 3;
 var4 = var4 + 4;
 array[1] = array[1] + 1;
 array[2] = array[2] + 2;
 array[3] = array[3] + 3;
 array[4] = array[4] + 4;
})
window.onLoad(loadSave);
