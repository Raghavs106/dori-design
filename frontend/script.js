function scrollToSection() {
  document.getElementById("collections").scrollIntoView({
    behavior: "smooth"
  });
}

// smooth nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
// NAV SCROLL EFFECT
window.addEventListener("scroll", () => {
  document.querySelector("nav")
    .classList.toggle("scrolled", window.scrollY > 50);
});
// form
async function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const type = document.getElementById("type").value;

  const res = await fetch("http://localhost:5000/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, type })
  });

  const data = await res.json();
  document.getElementById("status").innerText = data.message;
}

// icons
lucide.createIcons();