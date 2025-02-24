function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Different shades of pink hearts
    const heartsArray = ["💖", "💕", "💗", "💓"];
    heart.innerHTML = heartsArray[Math.floor(Math.random() * heartsArray.length)];

    // Random position anywhere on the screen
    heart.style.left = Math.random() * window.innerWidth + "px"; 
    heart.style.top = Math.random() * window.innerHeight + "px"; 

    // Random heart size
    const size = Math.random() * 20 + 20; // 20px to 40px
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s to 5s

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate multiple hearts continuously
setInterval(createHeart, 200);
