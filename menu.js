const span = document.querySelector(".span_menu");
const menu = document.querySelector(".menu_list");
const nav = document.querySelector(".menu_options");

const flowMenu = () => {
  span.classList.toggle("open");
  menu.classList.toggle("active");
  nav.classList.toggle("filter_bgc");
};

span.addEventListener("click", flowMenu);
