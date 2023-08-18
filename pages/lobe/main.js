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

function activePage() {
  const href = window.location.href;
  const segments = new URL(href).pathname.split("/");
  const last = segments.pop() || segments.pop();
  console.log(last);
  if (last == "index.html") {
    $(".tourpage").addClass("active");
  } else if (last == "blog.html") {
    $(".blogpage").addClass("active");
  }
}
window.onload = () => {
  activePage();
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
