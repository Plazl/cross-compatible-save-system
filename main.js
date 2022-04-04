var var1 = 1;
var var2 = 2;
var var3 = 3;
var var4 = 4;
setInterval(f
function updateScrn() {
 document.getElementById('var1').innerHTML = var1
 document.getElementById('var2').innerHTML = var2
 document.getElementById('var3').innerHTML = var3
 document.getElementById('var4').innerHTML = var4
}
setInterval(updateScrn, 50);
