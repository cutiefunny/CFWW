//#region 엘리먼트를 변수로 선언
var menu = document.getElementById("menu");
//#endregion

//페이지 시작 시 수행되는 함수
window.onload = function(){
    
};

//메뉴 클릭
function clickMenu(){ $('.ui.labeled.icon.sidebar').sidebar('toggle'); }
function change(){ callAjax("change") }
function clickThumb(src){ img_main.setAttribute("src",src); }
function clickNext(name) { alert(name); }
function test() { 
    var uuid = new DeviceUUID().get();
    alert(uuid);
 }
