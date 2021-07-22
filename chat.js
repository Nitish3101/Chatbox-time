function create()
{
    var value1=document.getElementById("i1").value;
    var value2=document.getElementById("i2").value;
    var element=document.createElement("p");

    if(value1!="")
    {
        var text1=document.createTextNode(value1);
        element.appendChild(text1);
        var mydiv=document.getElementById("mydiv");
        mydiv.appendChild(element);
        element.style.color="red";
        document.getElementById("i1").value="";
    }
    else if(value2!="")
    {
        var text2=document.createTextNode(value2);
        element.appendChild(text2);
        var mydiv=document.getElementById("mydiv");
        mydiv.appendChild(element);
        element.style.color="blue";
        element.style.textAlign="right"
        document.getElementById("i2").value="";
    }    




    

}