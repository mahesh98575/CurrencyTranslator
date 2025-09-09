// Dummy exchange rates (only for demo—real ones should use an API)
const rates = {
  USD: { INR: 83, EUR: 0.92, JPY: 156 },
  INR: { USD: 0.012, EUR: 0.011, JPY: 1.88 },
  EUR: { USD: 1.09, INR: 90.2, JPY: 170.2 },
  JPY: { USD: 0.0064, INR: 0.53, EUR: 0.0059 }
};

const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');
const resultDiv = document.getElementById('result');
const btn = document.getElementById('translateBtn');

btn.addEventListener('click', () => {
  const amt = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;
  if (!amt || amt <= 0 || from === to) {
    showResult("Enter a valid amount and select different currencies.", true);
    return;
  }

  // Simulated "animation"
  showResult("Translating...", false);

  setTimeout(() => {
    const rate = rates[from][to];
    if (!rate) {
      showResult("Translation not available.", true);
      return;
    }
    const converted = (amt * rate).toFixed(2);
    showResult(`💱 ${amt} ${from} = ${converted} ${to}`, false);
  }, 900); // Animation delay
});

function showResult(msg, isError) {
  resultDiv.textContent = msg;
  resultDiv.className = "result show" + (isError ? " error" : "");
}
