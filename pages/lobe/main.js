const blogContent = [
  {
    img: "images/post1.png",
    title: "Use your model in Power Platform",
    description:
      "We're excited to announce a new integration with Microsoft Power Platform.",
    url: "#",
  },
  {
    img: "images/post2.jpg",
    title: "Introducing new ways to use your model",
    description:
      "Lobe 0.9 introduces new ways of using and exporting your model to your app.",
    url: "#",
  },
  {
    img: "images/post3.jpg",
    title: "Using your model 101",
    description:
      "Learn everything you need to know to export your model and use it in your app.",
    url: "#",
  },
  {
    img: "images/post4.jpg",
    title: "Machine Learning Kit with Adafruit",
    description:
      "Introducing a brand new machine learning kit from Adafruit and Lobe.",
    url: "#",
  },
  {
    img: "images/post5.jpg",
    title: "Four New Features in Lobe",
    description:
      "Select your camera source, export your model to new formats, and more in the new Lobe.",
    url: "#",
  },
  {
    img: "images/post6.jpg",
    title: "Endless Camera Sources",
    description:
      "Deep dive into the new camera sources and all the possibilities they open up inside of Lobe.",
    url: "#",
  },
  {
    img: "images/post7.jpg",
    title: "Machine Learning Made Easy",
    description:
      "Everything you need to train custom machine learning models in a free, easy to use app.",
    url: "#",
  },
];

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
    loadBlog();
  }
}
function loadBlog() {
  blogContent.map((item) => {
    $(".blog-entries").append(`
    <a href="${item.url}" class="blog-card">
        <div class="blog-content-image">
            <div class="blog-content-image-container">
                <img src="${item.img}" alt="Blog Post" />
            </div>
        </div>
        <div class="blog-content-card">
                <div class="card-title">${item.title}</div>
            <div class="card-text">
                ${item.description}
            </div>
            <div class="card-footer">Release</div>
        </div>
    </a>`);
  });
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
