const content = [
  {
    logo: "images/img.png",
    title: "Using Abstract",
    description:
      "Abstract lets you manage, version, and document your designs in one place.",
    url: "#",
  },
  {
    logo: "images/img2.png",
    title: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
    url: "#",
  },
  {
    logo: "images/img3.png",
    title: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    url: "#",
  },
  {
    logo: "images/img4.png",
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
    url: "#",
  },
  {
    logo: "images/img5.png",
    title: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    url: "#",
  },
  {
    logo: "images/img6.png",
    title: "Abstract support",
    description: "Get in touch with a human.",
    url: "#",
  },
];
const footerLinks = [
  {
    title: "Abstract",
    links: ["Start Trial", "Pricing", "Download"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Release Notes", "Status"],
  },
  {
    title: "Community",
    links: ["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Legal"],
  },
];

const generateJson = () => {
  content.map((item) => {
    $(".content-obj").append(`
    <div class="col-md-6 content-list-each">
        <div class="d-flex">
            <div class="img-1">
                <img src="${item.logo}" alt="placeholder" />
            </div>
            <div class="icerik-1">
                <h3>${item.title}</h3>
                <p class="content-text">
                ${item.description}
                </p>
                <a href="${item.url}">Learn More →</a>
            </div>
        </div>
    </div>
    `);
  });

  footerLinks.map((item) => {
    $("#footer").append(
      `
        <div class="col footer-links">
        <h5>${item.title}</h5>
        ${item.links
          .map((url) => {
            return `<a href="#">${url}</a>`;
          })
          .join("")}

        </div>`
    );
  });
  function footerLast() {}
};

window.onload = () => {
  generateJson();
  $(".footer-links").last()
    .append(`<h6 style="margin-top: 30px;font-size:14px;margin-bottom: 5px;">Contact Us</h6>
  <a href="#">info@abstract.com</a>`);
};
