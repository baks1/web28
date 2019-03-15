const slideList = [
  {
    text:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, earum commodi, labore vero culpa nesciunt quidem saepe, corrupti fugiat accusantium ad esse corporis? Nisi qui inventore, nihil voluptatem ratione vitae."',
    name: "john wick",
    profession: "Profesional Cleaner"
  },
  {
    text:
      '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore perspiciatis optio sunt, repudiandae esse explicabo minima necessitatibus tempora quod voluptatum nostrum eveniet ratione? Animi laboriosam reiciendis similique? Facilis, velit? Illum!"',
    name: "adam sandler",
    profession: "Actor"
  },
  {
    text:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis qui reprehenderit, error exercitationem ullam? Similique doloremque asperiores rerum est quia, provident assumenda dolorum dolores vero sit totam, a aspernatur!"',
    name: "Emma Stone",
    profession: "Customer"
  }
];

const rightSlideIcon = document.querySelector(".fa-utensils");
const leftSlideIcon = document.querySelector(".fa-coffee");
const userOpinion = document.getElementById("opinion");
const name = document.getElementById("name");
const profession = document.getElementById("profession");
const squares = [...document.querySelectorAll(".square_box span")];

let active = 0;

const rightContent = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  userOpinion.textContent = slideList[active].text;
  name.textContent = slideList[active].name;
  profession.textContent = slideList[active].profession;
  changeSquare();
};

const leftContent = () => {
  active--;
  if (active === slideList.length || active < 0) {
    active = 2;
  }
  userOpinion.textContent = slideList[active].text;
  name.textContent = slideList[active].name;
  profession.textContent = slideList[active].profession;
  changeSquare();
};

const changeSquare = () => {
  const activeSquare = squares.findIndex(dot =>
    dot.classList.contains("active")
  );
  squares[activeSquare].classList.remove("active");
  squares[active].classList.add("active");
};

rightSlideIcon.addEventListener("click", rightContent);
leftSlideIcon.addEventListener("click", leftContent);
