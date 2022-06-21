const os = require('os');

var slider = document.getElementById("ram");
var output = document.getElementById("value");
var warning = document.getElementById("warning");
var warning1 = document.getElementById("warning1");
output.innerHTML = "2.0 GB";
const maxMemory = Number(os.totalmem() / (1024 * 1024 * 1024)).toFixed(1);

slider.oninput = function() {
    if (this.value > (maxMemory/2)+0.4) {
        output.innerHTML = Number(this.value).toFixed(1) + " GB";
        output.style.color = "red";
        warning.style.display = "block";
        warning1.style.display = "block";
    }else {
        output.innerHTML = Number(this.value).toFixed(1) + " GB";
        output.style.color = "black";
        warning.style.display = "none";
        warning1.style.display = "none";
    }
}