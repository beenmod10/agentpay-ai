function sendPayment() {
    const wallet = document.getElementById("wallet").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const status = document.getElementById("status");
    const logs = document.getElementById("logs");

    if (!wallet || !amount) {
        status.innerHTML = "❌ Please enter wallet and amount.";
        return;
    }

    logs.innerHTML += "<li>🔍 Running AI Risk Check...</li>";

    setTimeout(() => {
        if (amount > 100) {
            status.innerHTML = "⚠️ Payment Blocked: High Risk Detected!";
            logs.innerHTML += "<li>❌ Risk detected. Payment rejected.</li>";
        } else {
            const txId = "0x" + Math.random().toString(16).substring(2, 14);

            status.innerHTML =
                "✅ " + amount + " USDC sent successfully!<br><br>" +
                "<strong>Transaction ID:</strong><br>" + txId;

            logs.innerHTML += "<li>✅ Payment Approved</li>";
            logs.innerHTML += "<li>💸 Sent " + amount + " USDC</li>";
            logs.innerHTML += "<li>🧾 TX: " + txId + "</li>";
        }
    }, 2000);
}
