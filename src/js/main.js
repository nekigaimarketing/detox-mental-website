import { initDiagnosticQuiz } from './quiz.js';
import { initExitIntent } from './exit-intent.js';
import { initRoiCalculator } from './roi-calc.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar styling on scroll
  const navbar = document.querySelector('.site-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('primaryNavMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
      if (isExpanded) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#FAF7F2';
        navMenu.style.padding = '24px';
        navMenu.style.borderBottom = '1px solid #E7E0D4';
        navMenu.style.boxShadow = '0 10px 25px rgba(9, 38, 30, 0.1)';
        navMenu.style.gap = '20px';
      } else {
        navMenu.style.display = '';
      }
    });
  }

  // 3. Simulated Audio Player
  const audioPlayBtn = document.getElementById('audioPlayBtn');
  const audioWaveLines = document.querySelectorAll('.wave-line');
  const audioTimerText = document.getElementById('audioTimerText');
  let isPlaying = false;
  let timerInterval = null;
  let seconds = 0;

  if (audioPlayBtn) {
    audioPlayBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        audioPlayBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
          </svg>
        `;
        audioWaveLines.forEach(line => {
          line.style.animation = 'pulseSubtle 0.6s infinite alternate ease-in-out';
        });
        timerInterval = setInterval(() => {
          seconds++;
          const mins = Math.floor(seconds / 60);
          const secs = seconds % 60;
          if (audioTimerText) {
            audioTimerText.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs} / 1:05`;
          }
          if (seconds >= 65) {
            clearInterval(timerInterval);
            isPlaying = false;
            audioPlayBtn.innerHTML = `
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            `;
            audioWaveLines.forEach(line => line.style.animation = 'none');
          }
        }, 1000);
      } else {
        clearInterval(timerInterval);
        audioPlayBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        `;
        audioWaveLines.forEach(line => line.style.animation = 'none');
      }
    });
  }

  // 4. Initialize Feature Modules
  initDiagnosticQuiz();
  initExitIntent();
  initRoiCalculator();
});
