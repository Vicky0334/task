function Fruits(){
    confetti({
        spread: 360,
        ticks: 200,
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 100,
        scalar: 3,
        shapes: ["image"],
        shapeOptions: {
          image: [{
              src: "https://particles.js.org/images/fruits/apple.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/avocado.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/banana.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/berries.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/cherry.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/grapes.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/lemon.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/orange.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/peach.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/pear.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/pepper.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/plum.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/star.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/strawberry.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/watermelon.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/watermelon_slice.png",
              width: 32,
              height: 32,
            },
          ],
        },
      });
}

function Stars(){
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}  

function Fireworks(){
    const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}

function Random(){
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
      });
}


function Heart(){
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
      };
      
      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
      });
      
      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
      });
      
      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
      });
}