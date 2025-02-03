function showThankYouPopup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const popup = document.createElement("div");
  popup.innerText = "Thank you, " + name + ", for submitting the form! our team will contact you soon.";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#fff";
  popup.style.padding = "20px";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}
function toggleFlip(card) {
  card.classList.toggle("flipped");
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // For skill items
                if (entry.target.classList.contains('skills-grid')) {
                    const items = entry.target.querySelectorAll('.skill-item');
                    items.forEach((item, index) => {
                        item.style.animationDelay = `${index * 0.2}s`;
                        item.classList.add('animate');
                    });
                }
                
                // For education items
                if (entry.target.classList.contains('education')) {
                    const items = entry.target.querySelectorAll('.education-item');
                    items.forEach((item, index) => {
                        item.style.animationDelay = `${index * 0.3}s`;
                        item.classList.add('animate');
                    });
                }
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.section, .skills-grid, .education-item').forEach(el => {
        el.classList.add('wait-animation');
        observer.observe(el);
    });
});

document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.iris');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const x = (rect.left + rect.width / 2);
        const y = (rect.top + rect.height / 2);
        
        const angle = Math.atan2(e.pageX - x, e.pageY - y);
        const distance = Math.min(4, Math.hypot(e.pageX - x, e.pageY - y) / 100);
        
        const iris = eye;
        iris.style.transform = `translate(${Math.sin(angle) * distance}px, ${Math.cos(angle) * distance}px)`;
    });
});