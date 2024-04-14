function inTouch() {
  let selectSection = document.querySelector("#javaEnhance");
  selectSection.animate(
    [
      {
        transform: scale(1), style.fontSize=20, 
      },
      { transform: scale(0.5), fontSize: `30px` },
      { transform: scale(1), fontSize: `30px` },
    ],
    { duration: 100, iterations: 1, easing: linear }
  );
}
inTouch();
