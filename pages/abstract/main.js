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

/* const footerLinks = [
  {
    title: "Abstract",
    link1: ["Start Trial"],
    link2: ["Pricing"],
    link3: ["Download"],
  },
  {
    title: "Resources",
    link1: [""],
    link2: ["Pricing"],
    link3: ["Download"],
  },
];  */

const footerLinks = [
  {
    title: "Abstract",
    links: ["Start Trial", "Pricing", "Download"],
  },
  {
    title: "Resource",
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
  {
    title: "Contact Us",
    links: ["info@abstract"],
  },
];

const footerLinks2 = {
  Abstract: ["Start Trial", "Pricing", "Download"],
  Resource: ["Blog", "Help Center", "Release Notes", "Status"],
  Community: ["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"],
  Company: ["About Us", "Careers", "Legal"],
  "Contact Us": ["info@abstract"],
};

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
  // footerLinks.map((item) => {
  //   $(".footer-main-content").append(`
  //     <div class="col">
  //           <h5>${item.title}</h5>
  //           ${item.links.map((link) => {
  //             `
  //            <a href="#"></a>
  //            `;
  //           })}
  //     </div>
  //   `);
  // });
};

window.onload = () => {
  generateJson();
  Object.keys(footerLinks2).map((key, index) => {
    if (key === "Contact Us") {
      $("#Company").after(`<h6 id=${key}>
      ${key}
      </h6>`);
      return;
    }
    $("#footer").append(`
    <div class="col" id="footer-${key}">
      <h5>${key}</h5>
    </div>`);
  });
  Object.entries(footerLinks2).map(([key, links]) =>
    $(`#${key}`).insertAfter(
      `${links.map((link) => `<a href="#">${link}</a>`)}`
    )
  );
};
