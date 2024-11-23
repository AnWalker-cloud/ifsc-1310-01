document.querySelectorAll("details").forEach((details) => {
    const summary = details.querySelector("summary");
    const content = details.querySelector(":scope > *:not(summary)");
  
    content.style.transition = "max-height 0.5s ease";
    content.style.overflow = "hidden";
    content.style.maxHeight = "0"; // Initially collapse
  
    summary.addEventListener("click", () => {
      if (details.open) {
        // Close the details section smoothly
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to full height
        requestAnimationFrame(() => {
          content.style.maxHeight = "0"; // Collapse it after a frame for the transition effect
        });
      } else {
        // Open the details section smoothly
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to full height
  
        content.addEventListener("transitionend", () => {
          content.style.maxHeight = "none"; // Allow content to expand fully without limitation
        }, { once: true });
      }
    });
  });
  