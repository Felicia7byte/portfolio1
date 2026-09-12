// HERO
const dynamicText = document.querySelector("#dynamicText");

const word = "Felicia Pardamean";

let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    dynamicText.textContent = word.substring(0, charIndex);

    if (!isDeleting && charIndex < word.length) {
        // sedang mengetik
        charIndex++;

        dynamicText.classList.add("stop-blinking");

        setTimeout(typeEffect, 200);

    } else if (isDeleting && charIndex > 0) {
        // sedang menghapus
        charIndex--;

        setTimeout(typeEffect, 100);

    } else {
        // selesai mengetik / menghapus
        isDeleting = !isDeleting;

        dynamicText.classList.remove("stop-blinking");

        setTimeout(typeEffect, 1200);
    }
};

typeEffect();

// CONTACT
const contactText = document.querySelector("#contactText");

const text = "Contact Me";
let charInd = 0;
let started = false;

const typeContact = () => {
    if (charInd < text.length) {
        contactText.textContent += text.charAt(charInd);
        charInd++;

        setTimeout(typeContact, 150);
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
            started = true;
            typeContact();
        }
    });
}, {
    threshold: 0.5
});

observer.observe(document.querySelector("#contact"));
