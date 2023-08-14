$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// var classList = ["red", "blue", "yellow", "orange", "teal", "white", "pink"];

const colors = [
  "#e30512",
  "#1d3fbb",
  "#ffbe00",
  "#ff6519",
  "#00c1b5",
  "#fff",
  "ff608c",
];
function scrollDetect() {
  var lastScroll = 0;

  window.onscroll = function () {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    let counter = 0;

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      document.getElementById("body").style.background = colors[counter];
      counter++;
    } else {
      lastScroll = currentScroll;
      document.getElementById("body").style.background = colors[counter];
      counter--;
    }
  };
}

scrollDetect();
