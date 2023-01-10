var selectedPerson;

function addperson(btn) {
  var Fname = document.getElementById("Fname").value;
  var Lname = document.getElementById("Lname").value;
  if (btn.value == "Add") {
    var person = document.createElement("tr");
    // .......onmouseover    onmouseout
    person.onmouseover = function () {
      this.style.backgroundColor = "pink";
    };
    person.onmouseout = function () {
      this.style.backgroundColor = "white";
    };
    // .......
    var chkAll = document.createElement("td");
    // .......... id nemizarim chon bayad peymayesh bokonim Bahse DOM
    chkAll.innerHTML = '<input type="checkbox" onclick="chkClick(this)">';
    var fCell = document.createElement("td");
    var lCell = document.createElement("td");

    //   mohtaviat fname bere dakhele fcel
    fCell.innerHTML = Fname;
    //   var fnNode = document.createTextNode(Fname)
    //   fCell.appendChild(fnNode)
    //   ..................
    lCell.innerHTML = Lname;
    //   .......................................... delLink
    var delLink = document.createElement("a");
    delLink.innerHTML = "Delete";
    delLink.href = "#";
    //   delLink.onclick = function(){delPerson(event)}
    // delLink.onclick = function(){delPerson2(this)}
    delLink.onclick = function () {
      delPerson2(person);
    };

    //   ........................................ Editlink
    var editLink = document.createElement("a");
    editLink.innerHTML = "Edit";
    editLink.href = "#";
    editLink.onclick = function () {
      editPerson(person);
    };
    //   baraye ijad faseleh bein ' Delete va Edit '
    var sep = document.createTextNode(" | ");
    var opCell = document.createElement("td");
    opCell.appendChild(delLink);
    opCell.appendChild(sep);
    opCell.appendChild(editLink);
    // 2 ta celool darim va mizarim dakhele tr
    // .......onmouseover    onmouseout
    person.appendChild(chkAll);
    person.appendChild(fCell);
    person.appendChild(lCell);
    person.appendChild(opCell);

    //   ............................
    //  dar nahayat bayad be table ezafe beshan
    document.getElementById("tblpersons").appendChild(person);
  } else {
    selectedPerson.childNodes[1].innerHTML = Fname;
    selectedPerson.childNodes[2].innerHTML = Lname;
    selectedPerson.style.backgroundColor = "white";
  }
}
// ......................................delPerson
// function delPerson(e){
//     var persondel = e.srcElement.parentNode.parentNode
//     // removeChild   bayad az tarighe valed vared shavad
//     document.getElementById('tblpersons').removeChild(persondel)
// }
// ........
// function delPerson2(link){
//     var persondel = link.parentNode.parentNode
//     // removeChild   bayad az tarighe valed vared shavad
//     document.getElementById('tblpersons').removeChild(persondel)
// }
// .............
function delPerson2(person) {
  // var persondel = link.srcElement.parentNode.parentNode
  // removeChild   bayad az tarighe valed vared shavad
  document.getElementById("tblpersons").removeChild(person);
}
// ......................................editPerson
function editPerson(person) {
  // person beriz dakhele  selectedPerson taaaaa hefzesh bokoni
  selectedPerson = person;
  person.style.backgroundColor = "orange";
  // childNodes[1] = Fname
  document.getElementById("Fname").value = person.childNodes[1].innerHTML;
  // childNodes[2] = Lname
  document.getElementById("Lname").value = person.childNodes[2].innerHTML;
  //   Modify ezafe nemisheh  eslah misheh
  document.getElementById("btnAdd").value = "Modify";
}
// check box TIK khord hammeh tik bokhoran
function chkAll_click(chkAll) {
  var tbl = document.getElementById("tblpersons");
  if (chkAll.checked) {
    // var i = 0  sathe header hast
    for (var i = 1; i <= tbl.childNodes.lenght; ++i) {
      //childNodes[0] Avali seluli ke dakhelesh  checkbox ast = tr
      //childNodes[0] Dovomi  checkbox az to selool bardar
      tbl.childNodes[i].childNodes[0].childNodes[0].checked = "checked";
    }
  } else {
    for (var i = 1; i <= tbl.childNodes.lenght; ++i)
      tbl.childNodes[i].childNodes[0].childNodes[0].checked = "";
  }
}
// 1 done check box TIK nakhord tik header bardashteh besheh

function chkClick(chk) {
  var tbl = document.getElementById("tblpersons");

  if (!chk.checked) {
    document.getElementById("chkAll").checked = "";
  } else {
    for (var i = 1; i <= tbl.childNodes.lenght; ++i) {
      if (tbl.childNodes[i].childNodes[0].childNodes[0].checked) {
        continue;
      } else {
        break;
      }
    }
  }

  if(i==tbl.childNodes.length){
    document.getElementById("chkAll").checked = "";  }
}
