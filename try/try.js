gsap.registerPlugin(Physics2DPlugin);

gsap.to(".dot", {
  velocity: 4,
  angle: 40,
  gravity: 2,
  friction: 0.02,
  duration: 3,
  }
});