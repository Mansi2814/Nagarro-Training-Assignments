document.getElementById("btn").addEventListener("click", function () {
    var input = document.getElementById("inp").value;
    document.getElementById("res").innerHTML = input / 1000 + " kilograms";
  });