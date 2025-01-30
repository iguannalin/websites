window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.querySelector(".container");
  const imageContainer = document.querySelector(".container-image");
  let delta = -1;
  setInterval(() => {
    if (+(imageContainer.style.opacity) == 1 || +(imageContainer.style.opacity) == 0) delta *= -1;
    imageContainer.style.opacity = +(imageContainer.style.opacity) + (delta * 0.05);
  }, 200);
});
