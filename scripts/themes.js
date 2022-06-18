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
    document.getElementById("sidebar").style.backgroundColor = "rgb(72, 103, 137)";
    document.getElementById("pleasenav").style.backgroundColor = "rgb(31,46,82)";
    document.getElementById("sidebar").style.color = "white";
}

function yellow() {
    swapTheme("yellow");
    document.getElementById("particles-js").style.backgroundColor = "rgb(229 210 149)";
    document.getElementById("pleasenav").style.backgroundColor = "rgb(167 125 0)";
    document.getElementById("sidebar").style.backgroundColor = "rgb(219 190 101)";
    document.getElementById("sidebar").style.color = "black";
}

function red() {
    swapTheme("red");
    document.getElementById("particles-js").style.backgroundColor = "rgb(247 137 137)";
    document.getElementById("pleasenav").style.backgroundColor = "rgb(141 31 42)";
    document.getElementById("sidebar").style.backgroundColor = "rgb(255 87 87)";
}

function brown() {
    swapTheme("brown");
    document.getElementById("pleasenav").style.color = "white";
    document.getElementById("sidebar").style.color = "white";
    document.getElementById("pleasenav").style.backgroundColor = "rgb(44, 41, 47)";
    document.getElementById("sidebar").style.backgroundColor = "rgb(71, 71, 71)";
}


