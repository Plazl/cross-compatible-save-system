var vars = {
'1':0,
'2':0,
'3':0,
'4':0
};
var var1 = 0;
var var2 = 0;
var var3 = 0;
var var4 = 0;
window.addEventListener("keydown", function e(){
 if (e.key == 76) {
  let loadSave = localStorage.getItem("testJSON")
  vars = JSON.parse(loadSave)
 } else if (e.key == 83) {
  const JSONsave = JSON.stringify(vars)
  localStorage.setItem("testJSON", JSONsave);
 } 
});
