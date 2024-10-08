document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    const captionText = img.alt; // Get the alt text of the image
    if (captionText) {
      const figcaption = document.createElement("figcaption"); // Create a figcaption element
      figcaption.textContent = captionText; // Set the figcaption text to the alt text
      const figure = document.createElement("figure"); // Create a figure element
      img.parentNode.insertBefore(figure, img); // Insert the figure before the image
      figure.appendChild(img); // Move the image into the figure
      figure.appendChild(figcaption); // Add the figcaption after the image
    }
  });
});
