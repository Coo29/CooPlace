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
                el.appendChild(span);
            }
        });
    });
});
