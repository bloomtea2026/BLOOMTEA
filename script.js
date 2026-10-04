// BLOOMTEA — small interaction layer
(function () {
  const petals = document.querySelector('.petals');
  if (petals) {
    for (let i = 0; i < 18; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDuration = (9 + Math.random() * 12) + 's';
      petal.style.animationDelay = (-Math.random() * 15) + 's';
      petal.style.transform = `scale(${0.6 + Math.random() * 0.9})`;
      petals.appendChild(petal);
    }
  }

  const form = document.getElementById('feedbackForm');
  const toast = document.getElementById('sentNotice');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const subject = encodeURIComponent(`BLOOMTEA Website Feedback from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailto = `mailto:bloomtea030@gmail.com?subject=${subject}&body=${body}`;
      if (toast) toast.classList.add('show');

      // Open the visitor's email app, then move to the Thank You page.
      // A short delay gives the mail client time to receive the mailto request.
      window.location.href = mailto;
      setTimeout(() => {
        window.location.href = 'thankyou.html';
      }, 1200);

      setTimeout(() => toast && toast.classList.remove('show'), 3500);
    });
  }
})();
