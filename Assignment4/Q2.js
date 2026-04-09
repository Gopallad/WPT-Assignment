var arr = [];

function addData() {
    var value = document.getElementById("txt").value;
    arr.push(value);
    document.getElementById("txt").value = "";
}

function displayData() {
    var data = "";

    for (var i = 0; i < arr.length; i++) {
        data = data + "<li>" + arr[i] + "</li>";
    }

    document.getElementById("list").innerHTML = data;
}