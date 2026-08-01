document.getElementById('sendBtn').addEventListener('click', function () {
  const btn = this;
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Checking...`;
  btn.style.opacity = '0.8';

  setTimeout(() => {
    btn.innerHTML = `<span>Send USDC</span> <i class="fa-solid fa-paper-plane"></i>`;
    btn.style.opacity = '1';
    
    // Smooth scroll to alert
    document.querySelector('.alert-box').scrollIntoView({ behavior: 'smooth' });
  }, 1200);
});

