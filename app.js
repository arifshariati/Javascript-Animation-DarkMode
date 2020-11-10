const moon_path =
  "M17 30C17 46.5685 30 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C30 0 17 13.4315 17 30Z";

const sun_path =
  "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z";

const darkMode = document.querySelector("#darkMode");

const title = document.querySelector(".title");

let toggle = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 550,
    easing: "easeOutExpo",
  });

  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sun_path : moon_path }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)",
      },
      "-=700"
    );

  toggle = !toggle;
});
