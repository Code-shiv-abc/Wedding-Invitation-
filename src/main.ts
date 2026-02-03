import './style.css'

const entry = document.getElementById("entryScreen")!;
const main = document.getElementById("mainContent")!;
const btn = document.getElementById("enterBtn")!;

// Entry Screen Transition
btn.addEventListener("click", () => {
  entry.style.opacity = "0";
  setTimeout(() => {
    entry.remove();
    main.classList.remove("hidden");
    initScrollAnimations();
  }, 800);
});

function sanitize(str: string) {
  return str.replace(/[^a-zA-Z\s]/g, "");
}

function guestGreeting() {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("guest");
  const el = document.getElementById("guestName");
  if (guest && el) {
    el.innerHTML = `Namaste ${sanitize(guest)} Ji,<br>You Are Cordially Invited`;
  }
}

function calendarLink() {
  const title = encodeURIComponent("Wedding - Sujeet & Sonali");
  // 2026-02-11 11:30 UTC is 17:00 IST (5:00 PM) - As per previous context Baarat time
  // But prompt says 11:30Z start date. I will use the prompt's hardcoded dates.
  const dates = "20260211T113000Z/20260211T173000Z";
  const location = encodeURIComponent("Rajni Marriage Lawn, Ranjeet Nagar, Sector 6 B, Vrindavan, Nilmatha Road, Telibagh, Lucknow");
  const details = encodeURIComponent("Sacred Wedding Ceremony of Sujeet Kumar & Sonali. Join us to bless the couple.");
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&location=${location}&details=${details}`;

  const calBtn = document.getElementById("calendarBtn");
  if (calBtn) {
      calBtn.setAttribute("href", url);
  }
}

// Scroll Animations (Intersection Observer)
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Particle System
const canvas = document.getElementById('particles') as HTMLCanvasElement;
if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
        let particles: Particle[] = [];
        const particleCount = 60;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`; // Gold color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', initParticles);
        initParticles();
        animateParticles();
    }
}

guestGreeting();
calendarLink();
