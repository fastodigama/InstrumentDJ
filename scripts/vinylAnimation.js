const desks = document.querySelectorAll(".desk");

//scratch sound effects
const scratchSounds = [
    new Audio("./sounds/dj-scratch-sound-effect_C_minor.wav"), // First desk
    new Audio("./sounds/scratch-fx-full-2.wav")  // Second desk
];
desks.forEach((desk, index) => {
    let isDragging = false;
    let startY = 0;

    // Start tracking movement when mouse is pressed
    desk.addEventListener("mousedown", (event) => {
        isDragging = true;
        startY = event.clientY;
    });

    // Adjust rotation based on vertical mouse movement
    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            
            let moveAmount = startY - event.clientY; // Get vertical mouse movement
            desk.style.transform = `rotate(${moveAmount / 3}deg)`; // Rotate desk based on movement (higher = faster spin)

             // Play sound based on movement direction
            if (moveAmount > 3) {
                scratchSounds[index].play(); // Moving up
            } else if (moveAmount < -3) {
                scratchSounds[index].play(); // Moving down
            }
        }
    });

    // Reset rotation when mouse is released
    document.addEventListener("mouseup", () => {
        isDragging = false;
        desk.style.transform = "rotate(0deg)";
    });
});
