const blogContent = [
  {
    img: "images/post1.png",
    title: "Use your model in Power Platform",
    description:
      "We're excited to announce a new integration with Microsoft Power Platform.",
    url: "Blog-Post-Example.html",
  },
  {
    img: "images/post2.jpg",
    title: "Introducing new ways to use your model",
    description:
      "Lobe 0.9 introduces new ways of using and exporting your model to your app.",
    url: "Blog-Post-Example.html",
  },
  {
    img: "images/post3.jpg",
    title: "Using your model 101",
    description:
      "Learn everything you need to know to export your model and use it in your app.",
    url: "Blog-Post-Example.html",
  },
  {
    img: "images/post4.jpg",
    title: "Machine Learning Kit with Adafruit",
    description:
      "Introducing a brand new machine learning kit from Adafruit and Lobe.",
    url: "Blog-Post-Example.html",
  },
  {
    img: "images/post5.jpg",
    title: "Four New Features in Lobe",
    description:
      "Select your camera source, export your model to new formats, and more in the new Lobe.",
    url: "Blog-Post-Example.html",
  },
  {
    img: "images/post6.jpg",
    title: "Endless Camera Sources",
    description:
      "Deep dive into the new camera sources and all the possibilities they open up inside of Lobe.",
    url: "Blog-Post-Example.html",
  },
  {
    img: "images/post7.jpg",
    title: "Machine Learning Made Easy",
    description:
      "Everything you need to train custom machine learning models in a free, easy to use app.",
    url: "Blog-Post-Example.html",
  },
];

const exampleContent = [
  {
    img: "images/examples/plants.jpg",
    title: "Plant Species",
    description:
      "Train your app to distinguish between different species of plants to help people identify poisonous vegetation.",
    video: "images/examples/plants.mp4",
  },
  {
    img: "images/examples/hand.jpg",
    title: "Hand Gestures",
    description:
      "Train your app to understand the movement of your hand to create new kinds of immersive user experiences.",
    video: "images/examples/hand.mp4",
  },
  {
    img: "images/examples/burn.jpg",
    title: "Personal Trainer",
    description:
      "Train your app to recognize different workout positions to create an automated personal trainer that counts your reps.",
    video: "images/examples/burn.mp4",
  },
  {
    img: "images/examples/laughing.jpg",
    title: "Emotional Reactions",
    description:
      "Train your app to react to different expressions allowing people to send emoji reactions using just their face.",
    video: "images/examples/laughing.mp4",
  },
  {
    img: "images/examples/painting.jpg",
    title: "Interactive Painting",
    description:
      "Train your app to respond with sounds and stories while kids draw to create engaging learning experiences.",
    video: "images/examples/painting.mp4",
  },
  {
    img: "images/examples/mask.jpg",
    title: "Safety Precautions",
    description:
      "Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions.",
    video: "images/examples/mask.mp4",
  },
  {
    img: "images/examples/whales.jpg",
    title: "Whale Watching",
    description:
      "Train your app to detect marine life in tourist photos to help conservationists map and protect the ocean.",
    video: "images/examples/whales.mp4",
  },
  {
    img: "images/examples/bees.jpg",
    title: "Beehive Health",
    description:
      "Train your app to monitor the entrance of hives to help beekeepers track and analyze the health of their colonies.",
    video: "images/examples/bees.mp4",
  },
  {
    img: "images/examples/sleep.jpg",
    title: "Baby Monitor",
    description:
      "Train your app to detect when babies are sleeping or awake to notify parents before they start crying.",
    video: "images/examples/sleep.mp4",
  },
  {
    img: "images/examples/check.jpg",
    title: "Smart Checkout",
    description:
      "Train your app to recognize different types of produce to help checkout faster without the need to remember price look-up codes.",
    video: "images/examples/check.mp4",
  },
  {
    img: "images/examples/wild.jpg",
    title: "Fire Watch",
    description:
      "Train your app to detect smoke and flames using remote cameras to help spot new wildfires before it's too late.",
    video: "images/examples/wild.mp4",
  },
  {
    img: "images/examples/micro.jpg",
    title: "Scientific Research",
    description:
      "Train your app to detect organisms under a microscope to help researchers analyze large quantities of scientific samples.",
    video: "images/examples/micro.mp4",
  },
  {
    img: "images/examples/elephant.jpg",
    title: "Wildlife Behavior",
    description:
      "Train your app to detect wildlife behavior with remote cameras to track population and migration patterns over a large area.",
    video: "images/examples/elephant.mp4",
  },
  {
    img: "images/examples/compress.jpg",
    title: "Telescopic Imagery",
    description:
      "Train your app to monitor analog gauges and equipment to provide modern digital readouts and real time analytics.",
    video: "images/examples/compress.mp4",
  },
  {
    img: "images/examples/telescope.jpg",
    title: "Equipment Analytics",
    description:
      "Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery.",
    video: "images/examples/telescope.mp4",
  },
  {
    img: "images/examples/deforest.jpg",
    title: "Aerial Imagery",
    description:
      "Train your app to monitor aerial imagery to gain insights into macro level changes happening around the globe.",
    video: "images/examples/deforest.mp4",
  },
];

const footerLinks = [
  {
    title: "About",
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
  if (last == "index.html") {
    $(".tourpage").addClass("active");
  } else if (last == "blog.html") {
    $(".blogpage").addClass("active");
    loadBlog();
  } else if (last == "examples.html") {
    $(".example-page").addClass("active");
    loadExamples();
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

function loadExamples() {
  exampleContent.map((item) => {
    $(".example-posts").append(`
        <div class="example-card">
          <div class="example-content-image">
            <div class="blog-content-image-container">
              <img src="${item.img}" alt="Blog Post" />
              <video class="" playsinline="" webkit-playsinline="true" muted loop="" autoplay="true" title="Video of the ${item.title}" style="visibility: visible">
                <source src="${item.video}" type="video/mp4" />
              </video>
            </div>
          </div>
          <div class="blog-content-card">
            <div class="card-title">${item.title}</div>
            <div class="card-text">${item.description}</div>
          </div>
        </div>
    `);
  });
}
function menuOpen() {
  document.getElementById("nav-menu").classList.toggle("show");
  document.getElementById("hamburger").classList.toggle("cross");
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

  $(".footer").append(`
      <div class="footer-container footer-hidden">
        <div class="footer-right">
          <div class="footer-socials">
            <a href="#"><img src="images/reddit.png" alt="Reddit Subforum" /></a
            ><a href="#"><img src="images/twitter.png" alt="Twitter Acc" /></a
            ><a href="#"><img src="images/yt.png" alt="Youtube Channel" /> </a>
          </div>
        </div>
        <div class="footer-left">
          <div class="footer-logo">
            <img src="images/logo.png" alt="Lobe Ai Logo" />
          </div>
          <div class="footer-copyright">A product by Microsoft.</div>
          <div class="footer-copyright">All rights reserved.</div>
          <div class="footer-copyright">© Microsoft 2021</div>
        </div>
      </div>
  `);

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
