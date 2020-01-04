const videos = document.querySelectorAll(".demoVideo");


videos.forEach(videoWrapper => {
  const video = videoWrapper.querySelector('video')
  videoWrapper.addEventListener("click", () => {
    if (video.paused) video.play();
  });
  video.addEventListener("play", () => {
    videoWrapper.classList.add('playing')
  });
});

//modulate
const convertRange = (value, r1, r2) => (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];

tags = document.querySelectorAll(".tag");

const progressChange = () => {
  windowWidth = document.clientWidth;
  sectionHeight = 500;
  scrollPosY = window.scrollY;
  if (scrollPosY < sectionHeight) {
  modulate = convertRange(scrollPosY, [0, sectionHeight], [0, 100]);
  console.log("modulate: " + modulate);
  color1 = 'hsl(' + modulate * -4.6 + ',100% ,70%)';
  color2 = 'hsl(' + (2.4 + modulate) * -4.6 + ',100% ,70%)';
  letterspacing = 0.2 * modulate;
  gradient = 'linear-gradient(90deg,' + color1 + ', ' + color2 + ')';
  document.querySelector("#spectra").style.backgroundImage = gradient;
  document.querySelector("#broad").style.letterSpacing = letterspacing + 'px';
  document.querySelector("path").style.backgroundImage = gradient;
  }
}

window.addEventListener('scroll', progressChange);
window.addEventListener('resize', progressChange);


var elements = document.querySelectorAll('.element');

    for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = toggleAnimation;
    elements[i].style.webkitAnimationPlayState = 'running';
    }

    function toggleAnimation() {
    var style;
    for (var i = 0; i < elements.length; i++) {
        style = elements[i].style;
        if (style.webkitAnimationPlayState === 'running') {
        style.webkitAnimationPlayState = 'paused';
        document.body.className = 'paused';
        } else {
        style.webkitAnimationPlayState = 'running';
        document.body.className = '';
        }
    }
    }


console.log(window.scrollY);