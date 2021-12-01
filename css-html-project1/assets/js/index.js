function myFunc(){
    var x = document.getElementById("mynav");
    if(x.className === "nav"){
        x.className += " responsive"; //space is so important
    }
    else{
        x.className="nav";
    }
}