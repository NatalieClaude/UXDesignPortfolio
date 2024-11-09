document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      if (link.href.includes(window.location.origin)) {
        e.preventDefault();
        document.body.classList.add("fade-out-active");

        setTimeout(() => {
          window.location.href = link.href;
        }, 500); // Adjust to match the CSS transition duration
      }
    });
  });
});
