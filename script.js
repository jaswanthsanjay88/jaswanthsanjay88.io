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
    popup.style.border = "2px solid #3498db";
    popup.style.color = "#333";
    popup.style.fontSize = "16px";
    popup.style.transition = "all 0.3s ease";
    popup.style.animation = "popupAnimation 0.5s ease-out";
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popupAnimation {
            0% { transform: translate(-50%, -50%) scale(0.7); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.style.opacity = "0";
        popup.style.transform = "translate(-50%, -50%) scale(0.8)";
        setTimeout(() => popup.remove(), 300);
    }, 3000);
}

function toggleFlip(card) {
  card.classList.toggle("flipped");
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                
                if (entry.target.classList.contains('skills-grid')) {
                    const items = entry.target.querySelectorAll('.skill-item');
                    items.forEach((item, index) => {
                        item.style.animationDelay = `${index * 0.2}s`;
                        item.classList.add('animate');
                    });
                }
                
                
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
    const eyes = document.querySelectorAll('.eye');
    
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const x = (rect.left + rect.right) / 2;
        const y = (rect.top + rect.bottom) / 2;
        
        const rad = Math.atan2(e.pageX - x, e.pageY - y);
        const rotation = (rad * (360 / Math.PI) * 0) + 360;
        
        const eyeball = eye.querySelector('.eyeBall');
        const angle = Math.atan2(e.clientY - y, e.clientX - x);
        const distance = Math.min(3, Math.hypot(e.clientX - x, e.clientY - y) / 15);
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        eyeball.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

document.addEventListener('mouseout', () => {
    const eyeballs = document.querySelectorAll('.eyeBall');
    eyeballs.forEach(eyeball => {
        eyeball.style.transform = 'translate(0.5, 0.5)';
    });
});
