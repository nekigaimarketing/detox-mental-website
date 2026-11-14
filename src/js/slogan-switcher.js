/**
 * Slogan A/B/C/D Testing Engine for Detox Mental
 * Core Thesis: "EL TÓXICO ERES TÚ" & Radical Personal Responsibility
 */
export const slogansData = {
  1: {
    badge: "Variante A — El Tóxico Eres Tú (Tesis Central)",
    preheadline: "Basado en el próximo libro de la psicóloga Diana Molina",
    headlineHtml: 'Spoiler: <span class="serif-accent-emerald">El tóxico eres tú.</span><br><span style="font-size: 0.75em; font-weight: 600; color: var(--text-secondary); display: block; margin-top: 8px;">(Y es la mejor noticia que vas a escuchar).</span>',
    subtitle: "Llevas años culpando a tu ex, a tu familia y a tu trabajo. Pero el común denominador en todas tus crisis siempre has sido tú: tus no-límites, tu sobrepensar y tu necesidad de complacer. Si el problema eres tú, la solución también está en tus manos.",
    cta: "Dejar de Engañarme y Empezar"
  },
  2: {
    badge: "Variante B — La Metáfora del Veneno",
    preheadline: "La autointoxicación emocional termina hoy",
    headlineHtml: 'El tóxico eres tú: <span class="serif-accent">Deja de beber veneno</span> esperando que el otro cambie.',
    subtitle: "Tu mayor saboteador no está afuera; duerme en tu almohada. Detox Mental es la purga psicológica conductual para desarmar el autoengaño, apagar la espiral mental y construir respeto real por ti mismo.",
    cta: "Comenzar mi Desintoxicación"
  },
  3: {
    badge: "Variante C — El Espejo Provocador",
    preheadline: "Menos quejas, más psicología conductual",
    headlineHtml: '¿Y si el común denominador <span class="serif-accent-emerald">de todo tu desmadre</span> eres tú?',
    subtitle: "Dejar de ser la víctima es incómodo, pero es lo único que te va a liberar. Si el problema son los demás, estás atrapado. Si el problema eres tú, tienes el poder absoluto de cambiar hoy.",
    cta: "Tomar Responsabilidad Radical"
  },
  4: {
    badge: "Variante D — El Strikethrough Clásico",
    preheadline: "Para personas hartas de dar vueltas en el mismo hoyo",
    headlineHtml: 'Déjate de <del class="strike-bold">pendejadas</del> <span class="serif-accent-emerald">excusas</span> y toma las riendas de tu vida.',
    subtitle: "Detox Mental no es un spa para tu mente ni un cuaderno para escribir quejas. Es el sistema directo, sin rodeos y basado en psicología conductual de la psicóloga Diana Molina para poner límites, apagar la espiral y lograr lo que te propones.",
    cta: "Quiero Tomar las Riendas"
  }
};

export function initSloganSwitcher() {
  const titleEl = document.getElementById('heroHeadline');
  const subtitleEl = document.getElementById('heroSubtitle');
  const preheadlineEl = document.getElementById('heroPreheadline');
  const ctaBtnEl = document.getElementById('heroPrimaryCta');
  const pills = document.querySelectorAll('.slogan-pill');

  if (!titleEl || !subtitleEl) return;

  // Check URL param first (?slogan=X or ?v=X)
  const urlParams = new URLSearchParams(window.location.search);
  const urlVariant = urlParams.get('slogan') || urlParams.get('v');
  const savedVariant = localStorage.getItem('detox_slogan_variant');
  
  let currentVariant = 1;
  if (urlVariant && [1, 2, 3, 4].includes(parseInt(urlVariant))) {
    currentVariant = parseInt(urlVariant);
  } else if (savedVariant && [1, 2, 3, 4].includes(parseInt(savedVariant))) {
    currentVariant = parseInt(savedVariant);
  }

  function applyVariant(id) {
    const data = slogansData[id];
    if (!data) return;

    // Smooth transition
    titleEl.style.opacity = '0';
    subtitleEl.style.opacity = '0';

    setTimeout(() => {
      if (preheadlineEl) preheadlineEl.textContent = data.preheadline;
      titleEl.innerHTML = data.headlineHtml;
      subtitleEl.textContent = data.subtitle;
      if (ctaBtnEl) ctaBtnEl.textContent = data.cta;

      titleEl.style.opacity = '1';
      subtitleEl.style.opacity = '1';
    }, 150);

    // Update active pill
    pills.forEach(pill => {
      if (parseInt(pill.dataset.variant) === id) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    localStorage.setItem('detox_slogan_variant', id);
  }

  // Bind click listeners
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.variant);
      applyVariant(id);
    });
  });

  // Initial apply
  applyVariant(currentVariant);
}
