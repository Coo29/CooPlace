document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".bouncy-text");
    
    textElements.forEach((el) => {
        let letters = el.innerText.split("");
        el.innerHTML = "";
        letters.forEach((letter, i) => {
            const span = document.createElement("span");
            if (letter === " ") {
                span.innerHTML = "&nbsp;";
                el.appendChild(span);
            }
            else {
                span.innerText = letter;
                span.style.display = "inline-block";
                span.style.animation = `bounce 2s ${i * 0.1}s infinite ease-in-out`;
                span.style.textAlign= 'center';
                el.appendChild(span);
            }
        });
    });
});

function adjustFontSize() {
    const textElement = document.querySelector(".bouncy-text");
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    let fontSize = aspectRatio * 3;

    textElement.style.fontSize = `${fontSize}em`;
}

document.addEventListener("scroll", () => {
    const fadeText = document.querySelectorAll(".fade");
    const scrollY = window.scrollY;
    const maxFade = 150; // Adjust how much scroll distance affects opacity

    fadeText.forEach(el => {
        let opacity = 1 - (scrollY / maxFade);
        el.style.opacity = Math.max(opacity, 0); // Ensures opacity doesn't go below 0
    });
});

window.addEventListener("resize", adjustFontSize);
window.addEventListener("load", adjustFontSize);
