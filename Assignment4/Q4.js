function convert(type)
{
    var text = document.getElementById("text").value;
    var output;

    if(type == "upper")
        output = text.toUpperCase();
    else if(type == "lower")
        output = text.toLowerCase();
    else
        output = text;

    document.getElementById("result").innerHTML = output;
}