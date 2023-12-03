const button = document.getElementById("theme-button");
const link = document.getElementById("theme-link");
const currentTheme = localStorage.getItem("theme");
const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";

if (currentTheme == "dark") {
    link.setAttribute("href", darkTheme);
}

button.addEventListener("click", function() { ChangeTheme() });

function ChangeTheme() {
    let currTheme = link.getAttribute("href");
    let theme = "light";

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
    }
    else {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);

    localStorage.setItem("theme", theme);
}