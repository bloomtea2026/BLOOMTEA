document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = encodeURIComponent(`Bloomtea Feedback from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nFeedback / Message:\n${message}`
    );
    window.location.href = `mailto:bloomtea07@gmail.com?subject=${subject}&body=${body}`;
  });
});
