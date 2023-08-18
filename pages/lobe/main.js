const footerLinks = [
  {
    title: "Abot",
    links: ["Download", "Overview", "Examples", "Blog"],
  },
  {
    title: "General",
    links: ["Notice", "License", "Press Inquiry", "Press Images"],
  },
  {
    title: "Resources",
    links: ["Help", "Tour", "Contact", "Privacy"],
  },
];

window.onload = () => {
  var part = [];
  var currentURL = window.location.href;
  part = currentURL.toString().split("/");
  console.log(part[part.length - 1]);
  $(".header").append(`
    <div class="logo">
      <a href="#"><img src="images/top-logo.png" alt="Lobe Ai Logo" /> </a>
    </div>
    <nav>
      <a href="#">Overview</a>
      <a href="#">Examples</a>
      <a href="index.html" class="tourpage">Tour</a>
      <a href="blog.html" class="blogpage">Blog</a>
      <a href="#">Help</a>
    </nav>
    <div class="download-link"><a href="#">Download</a></div>`);

  $(".last-content").append(`
    <h1 class="page-name" style="max-width: 60%">
      Train your app with Lobe
    </h1>
    <div class="download-link-large"><a href="#">Download</a></div>
    `);
  $(".footer").append(`
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-logo">
          <img src="images/logo.png" alt="Lobe Ai Logo" />
        </div>
        <div class="footer-copyright">A product by Microsoft.</div>
        <div class="footer-copyright">All rights reserved.</div>
        <div class="footer-copyright">© Microsoft 2021</div>
      </div>
      <div class="footer-socials">
        <a href="#"><img src="images/reddit.png" alt="Reddit Subforum" /></a
        ><a href="#"><img src="images/twitter.png" alt="Twitter Acc" /></a
        ><a href="#"><img src="images/yt.png" alt="Youtube Channel" /> </a>
      </div>
    </div>`);
  if (currentURL == "index.html") {
    $(".tourpage").addClass("active");
  } else if (currentURL == "blog.html") {
    $("#blogpage").addClass("active");
  }
  footerLinks.map((item) => {
    $(`
    <div class="footer-column">
        <div class="footer-column-header">${item.title}</div>
    ${item.links
      .map((url) => {
        return `<div class="footer-column-link"><a href="#">${url}</a></div>`;
      })
      .join("")}
    </div>`).insertBefore(".footer-socials");
  });
};
