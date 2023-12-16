/* Created by Tivotal */

let items = document.querySelectorAll(".menu li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((link) => {
      link.classList.remove("active");
    });

    item.classList.add("active");
  });
});
