function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
            myFunction2(this);
            myFunction3(this);
        }
    };
    xhttp.open("GET", "../data/cd_catalog.xml", true);
    xhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var tblBody = document.createElement("tbody");
    var x = xmlDoc.getElementsByTagName("CLOTHES");
    for (i = 0; i <x.length; i++) {
        var row = document.createElement("tr");
        var img = document.createElement('img');
        img.setAttribute( 'src', x[i].getElementsByTagName("IMAGE64")[0].childNodes[0].nodeValue );
        img.style.height='350px';
        img.style.width='300px';
        row.appendChild(img);
        //var content =document.createElement("p");
        //content.innerHTML=x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
        //row.appendChild(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
        //row.appendChild(content);
        tblBody.appendChild(row);
    }
    document.getElementById("upper").appendChild(tblBody);
}
function myFunction2(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var tblBody = document.createElement("tbody");
    var x = xmlDoc.getElementsByTagName("CLOTHES");
    for (i = 0; i <x.length; i++) {
        var row = document.createElement("tr");
        var img = document.createElement('img');
        img.setAttribute( 'src', x[i].getElementsByTagName("IMAGE64")[0].childNodes[0].nodeValue );
        img.style.height='350px';
        img.style.width='300px';
        row.appendChild(img);
        //var content =document.createElement("p");
        //content.innerHTML=x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
        //row.appendChild(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
        //row.appendChild(content);
        tblBody.appendChild(row);
    }
    document.getElementById("bottom").appendChild(tblBody);
}
function myFunction3(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var tblBody = document.createElement("tbody");
    var x = xmlDoc.getElementsByTagName("CLOTHES");
    for (i = 0; i <x.length; i++) {
        var row = document.createElement("tr");
        var img = document.createElement('img');
        img.setAttribute( 'src', x[i].getElementsByTagName("IMAGE64")[0].childNodes[0].nodeValue );
        img.style.height='350px';
        img.style.width='300px';
        row.appendChild(img);
        //var content =document.createElement("p");
        //content.innerHTML=x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
        //row.appendChild(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
        //row.appendChild(content);
        tblBody.appendChild(row);
    }
    document.getElementById("accessory").appendChild(tblBody);
}