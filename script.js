var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector("#my-scrollbar"), {
  speed: 0.5,
});

const tl = gsap.timeline();
tl.from(".sub-header", {
  y: -100,
  duration: 0.5,
  stagger: {
    amount: 0.4,
  },
});
tl.from(".line", {
  duration: 1,
  width: "0%",
  stagger: {
    amount: 2,
  },
});
tl.from(
  ".work-item h1, .work-item p",
  {
    y: 150,
    duration: 0.5,
    stagger: {
      amount: 2.5,
    },
  },
  "-=3"
);
