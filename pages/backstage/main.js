const colors = [
  "ff608c",
  "#ddd",
  "#00c1b5",
  "#ff6519",
  "#ffbe00",
  "#1d3fbb",
  "#e30512",
];
function scrollDetect() {
  let lastScroll = 0;
  let counter = 0;
  window.onscroll = function () {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      document.getElementById("body").style.background =
        colors[Math.floor(Math.random() * 7)];
      counter++;

      if (counter > 6) {
        return (counter = 6);
      }
    } else {
      lastScroll = currentScroll;
      document.getElementById("body").style.background =
        colors[Math.floor(Math.random() * 7)];
      counter--;
      if (counter < 0) {
        return (counter = 0);
      }
    }
  };
}

scrollDetect();
