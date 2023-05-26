gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false,
});

const sidebars = gsap.utils.toArray('.sidebars-wrapper');
var indicators = gsap.utils.toArray('.indicator');
gsap.set('.indicators', { display: 'flex' });

var height = 100 * sidebars.length;

var tl = gsap.timeline({
  duration: sidebars.length,
  scrollTrigger: {
    trigger: '.features',
    start: 'top center',
    end: '+=' + height + '%',
    scrub: true,
    id: 'points',
    // markers: true,
  },
});

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: '.sidebars-wrapper',
    start: 'top top',
    end: '+=' + height + '%',
    scrub: true,
    pin: '.features',
    pinSpacing: true,
    id: 'pinning',
    // markers: true,
  },
});
/*animation for Desktop Screen Size*/

const screenSize = document.documentElement.clientWidth || window.innerWidth;
/* animation for Desktop Screen Size */
if (screenSize > 843) {
  sidebars.forEach(function (elem, i) {
    gsap.set(elem, { position: 'absolute', top: 0, right: 0, left: 0 });

    tl.from(elem.querySelector('.illustration'), { autoAlpha: 0 }, i);
    tl.from(
      elem.querySelector('article'),
      { autoAlpha: 0, translateY: 100 },
      i
    );
    tl.from(elem.querySelector('.left-sidebar'), { autoAlpha: 0 }, i);
    tl.from(
      elem.querySelector('.right-sidebar'),
      { autoAlpha: 0.0000000001 },
      i
    );

    if (i != sidebars.length - 1) {
      tl.to(
        elem.querySelector('article'),
        { autoAlpha: 0, translateY: -100 },
        i + 0.75
      );
      tl.to(elem.querySelector('.illustration'), { autoAlpha: 0 }, i + 0.75);
    }
    tl.to(elem.querySelector('.right-sidebar'), { autoAlpha: 1 }, i);
  });
}
/*animation for Tablet Screen Size*/

if (screenSize <= 843) {
  sidebars.forEach(function (elem, i) {
    gsap.set(elem, { position: 'absolute', top: 0, right: 0, left: 0 });

    tl.from(elem.querySelector('.illustration'), { autoAlpha: 0 }, i);
    tl.from(elem.querySelector('article'), { autoAlpha: 0, translateX: 20 }, i);
    tl.from(elem.querySelector('.left-sidebar'), { autoAlpha: 0 }, i);
    tl.from(
      elem.querySelector('.right-sidebar'),
      { autoAlpha: 0.0000000001 },
      i
    );

    tl.to(indicators[i], { backgroundColor: '#FFFFFF', duration: 0.25 }, i);

    if (i != sidebars.length - 1) {
      tl.to(
        indicators[i],
        { backgroundColor: '#adadad', duration: 0.25 },
        i + 0.75
      );
    }
  });
}

//btn onclick

const button = document.querySelector('.arrow-btn');

button.addEventListener('click', (event) => {
  // button.textContent = `Click count: ${event.detail}`;
  console.log('cute');
});
