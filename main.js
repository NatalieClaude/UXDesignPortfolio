// Load header.html dynamically
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
});

// Optional: Page transition effect
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (link.href.includes(window.location.origin)) {
      e.preventDefault();
      document.body.classList.add("fade-out-active");

      setTimeout(() => {
        window.location.href = link.href;
      }, 500); // Adjust delay to match CSS transition time
    }
  });
});

// Dynamically load the footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-placeholder').innerHTML = data);

const onDisabledClick = (e) => console.log(e)