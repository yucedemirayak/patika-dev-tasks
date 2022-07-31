let searchButton = document.querySelector(".buttons .btn:nth-child(1)");
searchButton.addEventListener("click", () => {
    let query = document.getElementById("query").value;
    location.href = "https://www.google.com/search?q=" + query;
});

let settingsButton = document.querySelector(".btn-settings");
let dropdown = document.querySelector(".dropdown");
settingsButton.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

let body = document.body;
let themeTogglerButton = document.querySelector(".btn-theme-toggler");
themeTogglerButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeController();
});

themeController();

function themeController() {
    if (document.body.classList.contains("dark")) {
        document
            .querySelector(".logo > img")
            .setAttribute("src", "assets/logo-dark.png");
        document.querySelector("#status-theme").textContent = "On";
    } else {
        document
            .querySelector(".logo > img")
            .setAttribute("src", "assets/logo.png");
        document.querySelector("#status-theme").textContent = "Off";
    }
}
