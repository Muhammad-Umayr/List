var getInput = prompt("Enter list name to see ... ( car , froot , vegi )").toLowerCase();
var showHead = document.getElementById("Heading").innerText = getInput;
if ( getInput == "car" ) {
        var option = document.getElementById("List");
        option.style.display = "block";
    }
    else if ( getInput == "vegi" ) {
        var option = document.getElementById("List-1");
        option.style.display = "block";
    }
    else if ( getInput == "froot" ) {
        var option = document.getElementById("List-2");
        option.style.display = "block";
    }
    else {
        document.write("Wrong Input");
    }