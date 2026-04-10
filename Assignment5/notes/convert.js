function convert()
{
    var amt = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var res;

    if(from=="rupee" && to=="dollar")
        res = amt/80;

    else if(from=="dollar" && to=="rupee")
        res = amt*80;

    else
        res = amt;

    document.getElementById("result").innerHTML =
    "Converted Amount = " + res;
}