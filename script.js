let balance = 1250;

function sendPayment() {
    const wallet = document.getElementById("wallet").value;
    const amount = parseFloat(document.getElementById("amount").value);

    const status = document.getElementById("status");
    const logs = document.getElementById("logs");
    const history = document.getElementById("history");
    const balanceText = document.getElementById("balance");

    if (!wallet || !amount) {
        status.innerHTML = "❌ Please fill all fields.";
        return;
    }

    if (amount > balance) {
        status.innerHTML = "❌ Insufficient Balance";
        return;
    }

    logs.innerHTML += "<li>🔍 AI checking payment...</li>";

    setTimeout(() => {

        if (amount > 100) {

            status.innerHTML="⚠️ High Risk Payment Blocked";

            logs.innerHTML += "<li>❌ Risk detected</li>";

        } else {

            balance -= amount;

            balanceText.innerHTML = balance + " USDC";

            const tx="0x"+Math.random().toString(16).substring(2,14);

            status.innerHTML="✅ Payment Successful";

            history.innerHTML =
            "<li>"+amount+" USDC → "+wallet.substring(0,6)+"... | "+tx+"</li>"
            + history.innerHTML;

            logs.innerHTML += "<li>✅ Payment Approved</li>";

        }

    },2000);

}
