window.addEventListener("load", () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#6cfc9d",
        "#b35549",
        "#dcdcdc",
        "#ff5fda",
        "#f7ff5f",
        "#00ffff"
    ];

//  let's input the sound for the pads here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0; // here we reset the normal time
            // to zero so that the sounds may play normally
            sounds[index].play();

            createBubbles(index); // we execute the function
            // together with index
        });
    });

//  Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this); //function removes animation after it ends
        });
    }
});
