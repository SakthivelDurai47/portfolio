const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav a");
const title = document.getElementById("title-name");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));

        const id = entry.target.id;
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);
        // if (id == "home") {
        //   title.style.display = "none";
        // } else {
        //   title.style.display = "block";
        // }
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));
