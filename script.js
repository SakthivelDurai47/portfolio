const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active from all
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active to the matching link
        const id = entry.target.id;
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
); // means: 60% of element must be visible

sections.forEach((section) => observer.observe(section));
