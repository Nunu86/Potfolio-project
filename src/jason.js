function runclick(event) {
  event.preventDefault();
  let check1 = document.querySelector("#javaEnhance");

  check1.animate(
    [
      { transform: `scale(1) rotate(50deg)`, fontSize: 20, color: "blue" },
      { transform: `scale(.5) rotate(-50deg)`, fontSize: 40, color: "blue" },
      { transform: `scale(1)`, fontSize: 30, color: "blue" },
    ],
    { duration: 2000, iterations: 1 }
  );
}

window.addEventListener("load", runclick);
