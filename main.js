var vars = {
'1':0,
'2':0,
'3':0,
'4':0
};
window.addEventListener("keydown", function e(){
 if (e.key == 76) {
  let loadSave = localStorage.getItem("testJSON")
  vars = JSON.parse(loadSave)
  alert('loaded')
 } else if (e.key == 83) {
  const JSONsave = JSON.stringify(vars)
  localStorage.setItem("testJSON", JSONsave);
  alert('saved')
 } else if (e.key == 49) {
  vars[1] = vars[1] + 1;
 } else if (e.key == 50) {
  vars[2] = vars[2] + 1
 } else if (e.key == 51) {
  vars[3] = vars[3] + 1
 } else if (e.key == 52) {
  vars[4] = vars[4] + 1
 }
});
function updateScrn() {
 document.getElementById('var1').innerHTML = vars[1]
 document.getElementById('var2').innerHTML = vars[2]
 document.getElementById('var3').innerHTML = vars[3]
 document.getElementById('var4').innerHTML = vars[4]
}
setInterval(updateScrn, 50);
