/**
 * Calculadora de Costo de Inacción (Alex Hormozi Framework)
 */
export function initRoiCalculator() {
  const hoursSlider = document.getElementById('calcHoursSlider');
  const rateSlider = document.getElementById('calcRateSlider');
  const hoursVal = document.getElementById('calcHoursVal');
  const rateVal = document.getElementById('calcRateVal');
  const totalWastedHours = document.getElementById('calcTotalHours');
  const totalWastedCost = document.getElementById('calcTotalCost');
  const savingsRoi = document.getElementById('calcSavingsRoi');

  if (!hoursSlider || !rateSlider) return;

  function calculate() {
    const hoursPerWeek = parseFloat(hoursSlider.value);
    const hourlyRate = parseFloat(rateSlider.value);

    if (hoursVal) hoursVal.textContent = `${hoursPerWeek} hrs/semana`;
    if (rateVal) rateVal.textContent = `$${hourlyRate} USD/hr`;

    const yearlyHours = Math.round(hoursPerWeek * 52);
    const yearlyCost = Math.round(yearlyHours * hourlyRate);

    if (totalWastedHours) totalWastedHours.textContent = `${yearlyHours.toLocaleString()} horas`;
    if (totalWastedCost) totalWastedCost.textContent = `$${yearlyCost.toLocaleString()} USD`;

    // Contrast with VIP program ($397 USD)
    const vipPrice = 397;
    const timesPaid = (yearlyCost / vipPrice).toFixed(1);
    if (savingsRoi) {
      savingsRoi.textContent = `Detox Mental se paga solo ${timesPaid} veces en tu primer año de recuperación.`;
    }
  }

  hoursSlider.addEventListener('input', calculate);
  rateSlider.addEventListener('input', calculate);

  calculate();
}
