window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  window.addEventListener("keydown", event => {
    switch (event.key) {
      case "a":
        sounds[0].currentTime = 0;
        sounds[0].play();
        createBubble(0);
        break;
      case "s":
        sounds[1].currentTime = 0;
        sounds[1].play();
        createBubble(1);
        break;
      case "d":
        sounds[2].currentTime = 0;
        sounds[2].play();
        createBubble(2);
        break;
      case "j":
        sounds[3].currentTime = 0;
        sounds[3].play();
        createBubble(3);
        break;
      case "k":
        sounds[4].currentTime = 0;
        sounds[4].play();
        createBubble(4);
        break;
      case "l":
        sounds[5].currentTime = 0;
        sounds[5].play();
        createBubble(5);
        break;
      default:
        break;
    }
  });
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
