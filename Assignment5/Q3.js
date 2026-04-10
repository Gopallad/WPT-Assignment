var arr = [10,20,30,40];

function checkValue()
{
    var val = document.getElementById("val").value;

    if(arr.includes(Number(val)))
        document.getElementById("msg").innerHTML="Found";
    else
        document.getElementById("msg").innerHTML="Not Found";
}

function addEnd()
{
    var val = document.getElementById("val").value;
    arr.push(Number(val));

    document.getElementById("result").innerHTML="Array : "+arr;
}

function insertIndex()
{
    var val = document.getElementById("val").value;
    var index = document.getElementById("index").value;

    arr.splice(index,0,Number(val));

    document.getElementById("result").innerHTML="Array : "+arr;
}

function removeIndex()
{
    var index = document.getElementById("index").value;

    arr.splice(index,1);

    document.getElementById("result").innerHTML="Array : "+arr;
}

