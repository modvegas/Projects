const content = [
  {
    logo: "images/img.png",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta nihil architecto rem distinctio facilis?",
    url: "#",
  },
  {
    logo: "images/img2.png",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta nihil architecto rem distinctio facilis?Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    url: "#",
  },
  {
    logo: "images/img3.png",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta nihil architecto rem distinctio facilis?",
    url: "#",
  },
  {
    logo: "images/img4.png",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "#",
  },
  {
    logo: "images/img5.png",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta",
    url: "#",
  },
  {
    logo: "images/img6.png",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta nihil architecto rem distinctio facilis?Lorem ipsum",
    url: "#",
  },
];

const generateJson = () => {
  var main_content = document.getElementsByClassName("content-obj")

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
};

window.onload = () => {
  generateJson();
};
