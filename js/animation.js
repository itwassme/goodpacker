const navTag = document.querySelector('div.navigation');

const toggleHeader = function () {
  const pixels = window.pageYOffset;
  if (pixels > 95) {
    navTag.classList.add('scrolled');
  } else {
    navTag.classList.remove('scrolled');
  }
};

const fadeBox = function () {
  const pixels = window.pageYOffset;
  const alpha = Math.min(pixels / 2000, 0.25);
  navTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`;
};

// fun function on load
fadeBox();
toggleHeader();

// fun function on scroll
document.addEventListener('scroll', function () {
  toggleHeader();
  fadeBox();
});

// fade in animation
const animatedTags = document.querySelectorAll(
  'h1, h2, h3, p, section img, .bg-right'
);

animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = function () {
  let delay = 0.1;
  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;
    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 0.4s ${delay}s both`;
      delay = delay + 0.05;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = '';
    }
  });
};

fadeIn();

document.addEventListener('scroll', function () {
  fadeIn();
});

window.addEventListener('resize', function () {
  fadeIn();
});
