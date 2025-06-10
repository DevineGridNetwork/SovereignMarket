const tickerList = document.getElementById("tickerList");
const tickers = [
  "HYDRO-001: $8,000 ↑",
  "SOVTECH-002: $15,500 ↑",
  "ELO-CURE003: $6,700 ↑",
  "NOVA-AI-004: $10,900 ↑",
  "LIGHTGRID-005: $25,000 ↑"
];

function updateTickers() {
  tickerList.innerHTML = "";
  tickers.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    tickerList.appendChild(li);
  });
}
setInterval(updateTickers, 5000);
updateTickers();
