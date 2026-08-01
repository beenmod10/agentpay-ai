// Full wallet address definition
const fullWalletAddress = "0xd402b8878f9c4c1cbad0a957dd87afd8546d90b6";

// Initial Mock Transactions Data
let transactions = [
  { id: 1, type: "Send USDC", address: "0x71C...89A", amount: "-1,300 USDC", status: "Rejected (AI Risk)", state: "failed", time: "12:33 PM" },
  { id: 2, type: "Send USDC", address: "0x3A2...10F", amount: "-50 USDC", status: "Rejected (AI Risk)", state: "failed", time: "12:30 PM" },
  { id: 3, type: "Receive USDC", address: "0x9B4...C11", amount: "+500 USDC", status: "Completed", state: "success", time: "10:15 AM" }
];

// 1. Function to Helper Render History List
function renderHistory() {
  const historyContainer = document.getElementById("historyList");
  const countBadge = document.getElementById("txCount");
  
  historyContainer.innerHTML = "";
  countBadge.innerText = `${transactions.length} Txns`;

  transactions.forEach(tx => {
    const iconClass = tx.state === 'failed' ? 'fa-xmark' : (tx.state === 'success' ? 'fa-check' : 'fa-spinner fa-spin');
    
    const itemHTML = `
      <div class="tx-item">
        <div class="tx-info">
          <div class="tx-icon ${tx.state}">
            <i class="fa-solid ${iconClass}"></i>
          </div>
          <div class="tx-details">
            <span class="tx-address">${tx.type} to ${tx.address}</span>
            <span class="tx-status">${tx.time} • ${tx.status}</span>
          </div>
        </div>
        <div class="tx-amount neg">${tx.amount}</div>
      </div>
    `;
    historyContainer.insertAdjacentHTML("beforeend", itemHTML);
  });
}

// 2. Copy Wallet Address Function
document.getElementById("copyBtn").addEventListener("click", function() {
  navigator.clipboard.writeText(fullWalletAddress);
  
  const icon = this.querySelector("i");
  icon.className = "fa-solid fa-check";
  icon.style.color = "#10b981";
  
  setTimeout(() => {
    icon.className = "fa-regular fa-copy";
    icon.style.color = "";
  }, 1500);
});

// 3. Handle Send Button Click (Simulate Dynamic Risk Check & Add to History)
document.getElementById("sendBtn").addEventListener("click", function() {
  const btn = this;
  const recipientInput = document.getElementById("recipientInput").value;
  const amountInput = document.getElementById("amountInput").value;
  const alertBox = document.getElementById("alertBox");

  if (!amountInput || amountInput <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  // Button Loading State
  btn.disabled = true;
  btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Analyzing Risk...`;
  alertBox.style.display = "none";

  setTimeout(() => {
    // Reset Button
    btn.disabled = false;
    btn.innerHTML = `<span>Send USDC</span> <i class="fa-solid fa-arrow-right-arrow-left"></i>`;
    
    // Show Blocked Alert
    alertBox.style.display = "flex";

    // Format shortened recipient address for history
    const shortAddress = recipientInput.length > 10 
      ? `${recipientInput.substring(0, 5)}...${recipientInput.substring(recipientInput.length - 3)}`
      : recipientInput;

    // Add New Failed Transaction to Top of Array
    const newTx = {
      id: Date.now(),
      type: "Send USDC",
      address: shortAddress || "0xUnknown",
      amount: `-${amountInput} USDC`,
      status: "Rejected (High Risk)",
      state: "failed",
      time: "Just now"
    };

    transactions.unshift(newTx);
    renderHistory(); // Refresh history view

  }, 1200);
});

// Initial Render on Page Load
renderHistory();
