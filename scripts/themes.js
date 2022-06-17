function setTheme() {
    preference = localStorage.getItem("theme") || "blue";
    if (preference == "blue") {
        blue();
    }
    if (preference == "yellow") {
        yellow();
    }
    if (preference == "red") {
        red();
    }
}

// when page has loaded, set theme
window.onload = setTheme;



function swapTheme(newTheme) {
    localStorage.setItem("theme", newTheme);
}

function blue() {
    user = "blue";
    swapTheme("blue");
    document.getElementById("particles-js").style.backgroundColor = "#add8e6";
    document.getElementById("pleasenav").style.backgroundColor = "#296178";
    document.getElementById("sidebar").style.backgroundColor = "#a6ccf5";
    document.getElementById("sidebar").style.backgroundColor = "#794ca6";
    document.getElementById("pleasenav").style.backgroundColor = "#70518f";
    document.getElementById("sidebar").style.color = "white";
}

function yellow() {
    swapTheme("yellow");
    document.getElementById("particles-js").style.backgroundColor = "#f8c210";
    document.getElementById("pleasenav").style.backgroundColor = "#ffc107";
    document.getElementById("sidebar").style.backgroundColor = "#ffe083";
    document.getElementById("sidebar").style.color = "black";
    document.getElementById("yellow").style.animation = "btn-animate 300ms forwards";
    document.getElementById("blue").style.animation = "none";
}

function red() {
    swapTheme("red");
    document.getElementById("particles-js").style.backgroundColor = "red";
    document.getElementById("pleasenav").style.backgroundColor = "#dc3545";
    document.getElementById("sidebar").style.backgroundColor = "red";
}

function brown() {
    swapTheme("brown");
    document.getElementById("pleasenav").style.color = "white";
    document.getElementById("sidebar").style.color = "white";
    document.getElementById("pleasenav").style.backgroundColor = "rgb(44, 41, 47)";
    document.getElementById("sidebar").style.backgroundColor = "rgb(71, 71, 71)";
}


