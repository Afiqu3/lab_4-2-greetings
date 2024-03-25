const textContainer = document.getElementById("mn-h1");
const text = "Hi, I'm Afique";

function animateText(index) {
    if (index < text.length) {
        textContainer.textContent += text[index];
        setTimeout(() => animateText(index + 1), 200);
    } else {
        setTimeout(() => disappearText(text.length - 1), 2000);
    }
}

function disappearText(index) {
    if (index >= 0) {
        textContainer.textContent = textContainer.textContent.slice(0, -1);
        setTimeout(() => disappearText(index - 1), 200);
    } else {
        setTimeout(() => {
            textContainer.textContent = "";
            animateText(0);
        }, 2000);
    }
}

animateText(0); 
