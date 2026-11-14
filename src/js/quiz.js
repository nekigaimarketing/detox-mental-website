/**
 * Viral 60-Second Diagnostic Quiz: "Test de Fuga Emocional"
 */
export function initDiagnosticQuiz() {
  const quizContainer = document.getElementById('diagnosticQuiz');
  if (!quizContainer) return;

  const questions = [
    {
      title: "1. ¿Cuál es tu mayor conflicto recurrente?",
      options: [
        { text: "Digo que sí a compromisos o favores que no quiero, solo por no generar conflicto.", pilar: 1, pilarName: "Pilar 1: Proteger", moon: "🌑" },
        { text: "Me quedo atrapado sobrepensando conversaciones pasadas o escenarios catastróficos.", pilar: 2, pilarName: "Pilar 2: Regular", moon: "🌒" },
        { text: "Siento que mi valor depende de lo que otros opinen y me comparo constantemente.", pilar: 3, pilarName: "Pilar 3: Reconstruir", moon: "🌓" },
        { text: "No he podido soltar a una ex pareja o sigo cayendo con personas indisponibles.", pilar: 4, pilarName: "Pilar 4: Conectar", moon: "🌔" },
        { text: "Tengo proyectos y metas claras, pero me gana la procrastinación y los pretextos.", pilar: 5, pilarName: "Pilar 5: Crear", moon: "🌕" }
      ]
    },
    {
      title: "2. ¿Qué experimentas cuando intentas decir 'NO' a alguien cercano?",
      options: [
        { text: "Culpa inmediata y necesidad de dar mil explicaciones para justificarme.", pilar: 1, pilarName: "Pilar 1: Proteger", moon: "🌑" },
        { text: "Ansiedad física en el pecho o estómago y miedo a haber arruinado la relación.", pilar: 2, pilarName: "Pilar 2: Regular", moon: "🌒" },
        { text: "Miedo a que piensen que soy egoísta o una mala persona.", pilar: 3, pilarName: "Pilar 3: Reconstruir", moon: "🌓" },
        { text: "Termino cediendo porque prefiero evitar reclamos o tensión.", pilar: 4, pilarName: "Pilar 4: Conectar", moon: "🌔" },
        { text: "Me prometo que la próxima vez sí lo diré, pero vuelvo a fallar.", pilar: 5, pilarName: "Pilar 5: Crear", moon: "🌕" }
      ]
    },
    {
      title: "3. ¿Qué sucede a las 2:00 AM cuando no puedes dormir?",
      options: [
        { text: "Repaso mentalmente todo lo que tengo que hacer por los demás mañana.", pilar: 1, pilarName: "Pilar 1: Proteger", moon: "🌑" },
        { text: "Mi mente entra en una espiral que no se apaga analizando errores del pasado.", pilar: 2, pilarName: "Pilar 2: Regular", moon: "🌒" },
        { text: "Me invade una sensación de insuficiencia y de estar atrasado en la vida.", pilar: 3, pilarName: "Pilar 3: Reconstruir", moon: "🌓" },
        { text: "Reviso redes sociales o el perfil de alguien que ya no debería importarme.", pilar: 4, pilarName: "Pilar 4: Conectar", moon: "🌔" },
        { text: "Me siento culpable por todo el tiempo que perdí procrastinando hoy.", pilar: 5, pilarName: "Pilar 5: Crear", moon: "🌕" }
      ]
    }
  ];

  let currentStep = 0;
  const scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  const questionEl = document.getElementById('quizQuestionTitle');
  const optionsEl = document.getElementById('quizOptionsList');
  const progressFillEl = document.getElementById('quizProgressFill');
  const stepIndicatorEl = document.getElementById('quizStepIndicator');
  const activeBoxEl = document.getElementById('quizActiveStep');
  const resultBoxEl = document.getElementById('quizResultBox');

  const pilarDescriptions = {
    1: {
      name: "Pilar 1: PROTEGER (Límites sin Culpa)",
      moon: "🌑",
      verdict: "Tu mayor fuga de energía está en la falta de blindaje personal. Vives regalando tu tiempo y tu paz para no incomodar a los demás, y luego te resientes en silencio.",
      action: "Necesitas aprender a decir 'NO' firme y sin disculpas absurdas. Deja de tolerar faltas de respeto disfrazadas de favores familiares.",
      link: "programa.html#pilar-1"
    },
    2: {
      name: "Pilar 2: REGULAR (Apagar el Overthinking)",
      moon: "🌒",
      verdict: "Tu cerebro te está manteniendo rehén. Le das cincuenta vueltas a problemas que se resuelven en un minuto o a cosas que ni siquiera han sucedido.",
      action: "Necesitas herramientas conductuales directas para desconectar la rumiación mental y aprender a responder en lugar de explotar o congelarte.",
      link: "programa.html#pilar-2"
    },
    3: {
      name: "Pilar 3: RECONSTRUIR (Autoestima Real)",
      moon: "🌓",
      verdict: "Estás buscando en la aprobación ajena lo que tú mismo te niegas: respeto real. La compasión tóxica y las afirmaciones de espejo no te han servido de nada.",
      action: "Es momento de construir una autoestima sólida basada en evidencia y disciplina, no en palabrería de autoayuda barata.",
      link: "programa.html#pilar-3"
    },
    4: {
      name: "Pilar 4: CONECTAR (Vínculos Libres de Toxicidad)",
      moon: "🌔",
      verdict: "Sigues arrastrando fantasmas del pasado o tolerando dinámicas afectivas desgastantes por miedo a la soledad.",
      action: "Aprende a cortar lazos con el pasado, soltar a quien no te suma y romper el ciclo de relaciones desgastantes.",
      link: "programa.html#pilar-4"
    },
    5: {
      name: "Pilar 5: CREAR (Ejecución y Cero Excusas)",
      moon: "🌕",
      verdict: "Tienes la capacidad y la visión, pero eres prisionero de tus propios pretextos y la procrastinación crónica.",
      action: "La motivación es un mito; lo que necesitas es un sistema a prueba de sabotajes para levantarte y ejecutar todos los días.",
      link: "programa.html#pilar-5"
    }
  };

  function renderQuestion(index) {
    if (index >= questions.length) {
      showResult();
      return;
    }

    const q = questions[index];
    if (stepIndicatorEl) stepIndicatorEl.textContent = `Pregunta ${index + 1} de ${questions.length}`;
    if (progressFillEl) progressFillEl.style.width = `${((index + 1) / questions.length) * 100}%`;
    if (questionEl) questionEl.textContent = q.title;

    if (optionsEl) {
      optionsEl.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D', 'E'];
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `
          <span class="quiz-option-letter">${letters[idx]}</span>
          <span>${opt.text}</span>
        `;
        btn.addEventListener('click', () => {
          scores[opt.pilar] = (scores[opt.pilar] || 0) + 1;
          currentStep++;
          renderQuestion(currentStep);
        });
        optionsEl.appendChild(btn);
      });
    }
  }

  function showResult() {
    if (activeBoxEl) activeBoxEl.style.display = 'none';
    if (!resultBoxEl) return;

    let dominantPilar = 1;
    let maxScore = -1;
    for (const [pilar, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        dominantPilar = parseInt(pilar);
      }
    }

    const pilarData = pilarDescriptions[dominantPilar];
    resultBoxEl.style.display = 'block';
    resultBoxEl.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 12px;">${pilarData.moon}</div>
      <span class="section-tag section-tag-emerald">Diagnóstico Completado</span>
      <h3 style="font-size: 1.8rem; margin: 16px 0 12px; color: var(--emerald-950);">${pilarData.name}</h3>
      <p style="font-size: 1.1rem; color: var(--text-primary); max-width: 650px; margin: 0 auto 16px; font-weight: 600;">
        ${pilarData.verdict}
      </p>
      <div style="background: rgba(255,255,255,0.7); border-radius: var(--radius-md); padding: 18px; margin: 20px auto; max-width: 600px; border-left: 4px solid var(--gold-600); text-align: left;">
        <strong style="color: var(--gold-800); text-transform: uppercase; font-size: 0.8rem; display: block; margin-bottom: 4px;">Prescripción de Diana Molina:</strong>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">${pilarData.action}</p>
      </div>
      <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 24px;">
        <a href="${pilarData.link}" class="btn btn-primary">Ver Plan del ${pilarData.name.split(':')[0]}</a>
        <a href="precios.html" class="btn btn-gold">Inscribirme al Programa Completo</a>
      </div>
    `;
  }

  renderQuestion(0);
}
