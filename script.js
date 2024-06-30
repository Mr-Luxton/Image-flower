const slider = document.getElementById("myRange");
const overlay = document.querySelectorAll(".overlay");

function updateOverlay() {
    const value = slider.value / 100;
    overlay.forEach(function(element) {
        element.style.width = value * 100 + "%";
    });
}

slider.oninput = updateOverlay;
slider.ontouchmove = updateOverlay; // Handle touch events
