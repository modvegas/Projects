$(document).ready(function () {
  $("a").on("click", function (event) {
    var href = $(this).attr("href");
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var issueNumber = hash.slice(-1);
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          window.location.hash = href;
          $("body").css("background-color", colors[issueNumber - 1]);
        }
      );
    }
  });
  $("html, body").bind("mousewheel", function (e) {
    var hash = window.location.hash;
    hash = hash.startsWith("#") ? hash.substring(1) : hash;
    var issueNumber = hash.slice(-1);
    e.preventDefault();
    window.location.hash = hash;
    if (e.originalEvent.wheelDelta / 520 > 0) {
      $("html,body").animate(
        {
          scrollTop: $("#issue" + ("issueNumber" + 1).toString()).offset().top,
        },
        300,
        function () {
          $("body").css("background-color", colors[issueNumber - 1]);
        }
      );
      console.log(issueNumber);
    } else {
      $("html,body").animate(
        {
          scrollTop: $("#issue" + (issueNumber - 1).toString()).offset().top,
        },
        300,
        function () {
          $("body").css("background-color", colors[issueNumber - 1]);
        }
      );
      console.log(issueNumber);
    }
  });
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
});
var colors = ["red", "blue", "magenta", "green", "yellow", "white", "purple"];

// var colorsObj = {issue1:'red',issue2:'blue'};

const section = document.querySelector(".pages");
const activities = section.querySelectorAll(".page");

activities.forEach((activityElement, i) => {
  activityElement.addEventListener("scroll", () => {
    if (activityElement.classList.contains("active")) return;

    // Animations to previous/next element
    const previousActiveElement = section.querySelector(".active");

    previousActiveElement.classList.remove("active");
    activityElement.classList.add("active");

    // Background
    const item = activityElement.getAttribute("data-item");
    const wave = document.querySelector(`[data-wave="${item}"]`);
    wave.parentNode.appendChild(wave);
  });
});
