// Bareo: shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Bundle selector (product page)
  document.querySelectorAll('.bundle-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.bundle-option').forEach((el) => el.classList.remove('selected'));
      opt.classList.add('selected');
      const price = opt.getAttribute('data-price');
      const checkoutBtn = document.querySelector('#checkout-btn');
      if (checkoutBtn && price) {
        checkoutBtn.setAttribute('data-selected-price', price);
        checkoutBtn.textContent = `Add to cart: $${price}`;
      }
    });
  });

  // Checkout button: will link to your real Stripe Payment Link once that's set up
  const checkoutBtn = document.querySelector('#checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      // TODO: replace with your real Stripe Payment Link URL once your Stripe account is set up.
      // Example: window.location.href = "https://buy.stripe.com/your-real-link";
      alert('Checkout is not connected yet. This button will go live once your Stripe Payment Link is added in script.js.');
    });
  }
});
