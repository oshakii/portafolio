const switchButton = document.querySelector(".switch-button");
const bodyEl = document.querySelector("body");

let switchColor = True;

function toggleDarkMode() {
    if (switchColor === True){
        bodyEl.style.backgroundColor = "black";
        switchColor = !switchColor;
    } else {
        bodyEl.style.backgroundColor = "white";
        switchColor = !switchColor;
    }
}

switchButton.addEventListener('click', toggleDarkMode);