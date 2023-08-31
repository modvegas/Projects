const sites = [
  {
    title: "Abstract Page",
    class: "abstract-button",
    link: "pages/abstract/index.html",
    img: "images/abstract.png",
  },
  {
    title: "Backstage Talks Page",
    class: "backstages-button",
    link: "pages/backstage/index.html",
    img: "images/bstalks.png",
  },
  {
    title: "Lobe Ai Page",
    class: "lobe-button",
    link: "pages/lobe/index.html",
    img: "images/lobe.png",
  },
];

window.onload = () => {
  sites.map((item) => {
    $(".site-buttons").append(`
        <a class="col ${item.class}" href="${item.link}">
            <img src="${item.img}" alt="${item.title}" />
        </a>
    `);
  });
};
