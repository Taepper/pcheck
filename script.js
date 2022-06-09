

function calculate(e, ty){
    var t = document.querySelectorAll("[id=" + ty + "]");
    var a = t[0].value.replace(",",".");  
    var c = t[1].value.replace(",",".");
    var dec = t[2].value
    var n = 0;
    if(isNumber(a) && isNumber(c) && isNumber(dec)){
        switch(e.getAttribute("id")){
            case"f1":
            n=a/100*c;
            node1 = document.createElement("td")
            node1.innerHTML = ("" + a + " percent of " + c + " is");
            break;
            case"f2":
            n=a/c*100;
            node1 = document.createElement("td")
            node1.innerHTML= ("" + a + " of " + c + " is");
            break;
            case"f3":
            n=(c-a)/a*100
            node1 = document.createElement("td")
            node1.innerHTML= ("" + a + " increase/decrease to " + c + " is");
        }
        t[3].value=n.toFixed(dec);;
        if(window.event.key === 'Enter') {
            e.value = "";
            var tr = document.createElement('tr');
            node2 = document.createElement("td")
            node2.innerHTML = "<strong>" + t[3].value + "</strong>"
            if(ty != "f1"){
                node2.innerHTML += " %"
            }
            tr.appendChild(node1)
            tr.appendChild(node2)
            document.querySelector("[id=history]").appendChild(tr)
        }
    }
}

    
function isNumber(e){
    return !isNaN(parseFloat(e))&&isFinite(e)
}

