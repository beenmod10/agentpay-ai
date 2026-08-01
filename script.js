const payBtn = document.getElementById("payBtn");
const status = document.getElementById("status");

payBtn.addEventListener("click", () => {
  status.textContent = "⏳ Processing Payment...";

  setTimeout(() => {
    status.textContent = "✅ Payment Sent Successfully!";
  }, 2000);
});
