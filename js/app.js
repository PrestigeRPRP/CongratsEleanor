/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };



var typed = new Typed('#text', {
    strings: ['Congrats on your wedding! I just wanted to take a moment to say thank you. Your reaction to the work I’ve been doing on the website was honestly the best and most genuine I’ve seen—it really made my day and reminded me why I love doing what I do. If I can ask one thing, promise me you’ll always work to make your life meaningful. Keep chasing your dreams, making memories, and living a life that’s full of love and purpose. Wishing you all the happiness in the world—you deserve it! '],
    startDelay: 3000,
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});


window.addEventListener('load', () => {
    const audio = document.getElementById('audio');

    // Set the initial volume to 0.2 (20% of max volume)
    audio.volume = 0.2;

    // Play the audio muted on page load
    audio.play()
      .then(() => {
        console.log("Audio is playing (muted) at volume 0.2!");

        // Set a 2-second timer for autoplay if no user click happens
        let timer = setTimeout(() => {
          // If no click happens, unmute and play the audio after 2 seconds
          audio.muted = false;
          console.log("Audio unmuted and playing after 2 seconds!");
        }, 400); // 2 seconds timer

        // If the user clicks, clear the timer and unmute the audio
        window.addEventListener('click', () => {
          clearTimeout(timer);  // Clear the 2-second timer
          audio.muted = false;  // Unmute the audio
          console.log("Audio unmuted and playing after user click!");
        });
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  });
