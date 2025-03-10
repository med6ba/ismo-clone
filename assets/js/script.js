document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Only collapse the navbar if it's currently open
      if (navCollapse.classList.contains("show")) {
        let bsCollapse = new bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    });
  });
});
