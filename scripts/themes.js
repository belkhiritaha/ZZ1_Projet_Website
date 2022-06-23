function setTheme() {
    preference = localStorage.getItem("theme") || "blue";
    if (preference == "blue") {
        blue();
    }
    else if (preference == "yellow") {
        yellow();
    }
    else if (preference == "red") {
        red();
    }
    else {
        blue();
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

function show_logs(){
    document.getElementById("logs").style.display = "block";
    document.getElementById("logs_btn").classList.add("active");

    document.getElementById("calendrier").style.display = "none";
    document.getElementById("calendrier_btn").classList.remove("active");
    document.getElementById("firstPrese").style.display = "none";
    document.getElementById("firstPrese_btn").classList.remove("active");
    document.getElementById("projet").style.display = "none";
    document.getElementById("projet_btn").classList.remove("active");
}

function show_calendrier(){
    document.getElementById("calendrier").style.display = "block";
    document.getElementById("calendrier_btn").classList.add("active");

    document.getElementById("logs").style.display = "none";
    document.getElementById("logs_btn").classList.remove("active");
    document.getElementById("firstPrese").style.display = "none";
    document.getElementById("firstPrese_btn").classList.remove("active");
    document.getElementById("projet").style.display = "none";
    document.getElementById("projet_btn").classList.remove("active");
}

function show_projet(){
    document.getElementById("projet").style.display = "block";
    document.getElementById("projet_btn").classList.add("active");

    document.getElementById("logs").style.display = "none";
    document.getElementById("logs_btn").classList.remove("active");
    document.getElementById("calendrier").style.display = "none";
    document.getElementById("calendrier_btn").classList.remove("active");
    document.getElementById("firstPrese").style.display = "none";
    document.getElementById("firstPrese_btn").classList.remove("active");
}

function show_firstPrese(){
    document.getElementById("firstPrese").style.display = "block";
    document.getElementById("firstPrese_btn").classList.add("active");

    document.getElementById("logs").style.display = "none";
    document.getElementById("logs_btn").classList.remove("active");
    document.getElementById("calendrier").style.display = "none";
    document.getElementById("calendrier_btn").classList.remove("active");
    document.getElementById("projet").style.display = "none";
    document.getElementById("projet_btn").classList.remove("active");
}
