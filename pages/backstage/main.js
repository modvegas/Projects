$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// var classList = ["red", "blue", "yellow", "orange", "teal", "white", "pink"];

const colors = [
  "ff608c",
  "#fff",
  "#00c1b5",
  "#ff6519",
  "#ffbe00",
  "#1d3fbb",
  "#e30512",
];
function scrollDetect() {
  var lastScroll = 0;
  let counter = 0;
  var jumpDiv = "issue" + counter;
  var divInView = document.getElementById(jumpDiv);
  window.onscroll = function () {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      counter++;
      document.getElementById("body").style.background = colors[counter];

      if (counter > 6) {
        return (counter = 6);
      }
      console.log(jumpDiv);
      console.log(counter);
    } else {
      lastScroll = currentScroll;
      counter--;
      document.getElementById("body").style.background = colors[counter];
      if (counter < 0) {
        return (counter = 0);
      }
      divInView.scrollIntoView({});
      console.log(counter);
    }
  };
}

scrollDetect();
