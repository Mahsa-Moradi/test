var isOpenMenu = false;
function showMyMenu(e) {
  e.preventDefault();
  var menu = document.getElementById("myContexMenu");
  menu.style.left = e.clientX;
  menu.style.top = e.clientY;
  menu.style.display = "block";
  isOpenMenu = true;
}
function myPrint() {
  document.getElementById("myContexMenu").style.display = "none";
  window.print();
}
function hideMenu() {
  document.getElementById("myContexMenu").style.display = "none";
  isOpenMenu = false;
}
// ....................... executShortKey
function executShortKey(e) {
  alert(e.keyCode);
  if (isOpenMenu) {
    switch (e.keyCode) {
      case 78:
        window.open();
        break;
      case 80:
        myPrint();
        break;
      case 88:
        hideMenu();
        break;
      case 67:
        window.close();
        break;
    }
  }
}
