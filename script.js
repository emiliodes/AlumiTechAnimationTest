document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block, .block2");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "scale(1)";
        }
      });
    }, { threshold: 0.4 }); // Adjust this value for when you want the animation to trigger
  
    blocks.forEach((block) => {
      observer.observe(block);
    });
  });
  