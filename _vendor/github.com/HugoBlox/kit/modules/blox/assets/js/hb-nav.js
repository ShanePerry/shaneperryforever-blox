// Navigation

const applyScrollPadding = () => {
  const header = document.querySelector(".page-header");
  const position = header.getBoundingClientRect();
  document.documentElement.style.scrollPaddingTop = `${position.height.toString()}px`;
  const r = document.querySelector(":root");
  r.style.setProperty("--navbar-height", `${position.height.toString()}px`);
};

window.addEventListener("DOMContentLoaded", () => {
  const chevrons = document.querySelectorAll(".nav-chevron");

  chevrons.forEach((chevron) => {

    chevron.addEventListener("click", (e) => {

      // Desktop
      if (window.innerWidth >= 1024) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      const parent = chevron.closest(".nav-dropdown");

      if (parent) {
        parent.classList.toggle("active");
      }
    });
  });

  applyScrollPadding();
});
