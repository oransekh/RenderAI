const mainContent = document.getElementById("main-content");
const navbar = document.getElementById("navbar");
let artStyle = null;
let loading = false;

//function navbar loader
function Navbar(page, callback) {
  fetch(page)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${page}`);
      return res.text();
    })
    .then((data) => {
      navbar.innerHTML = data;

      // Run callback only AFTER content is added
      if (typeof callback === "function") callback();
      renderContent();
    });
}
Navbar("navbar.html");

//  Function to load any HTML page
function loadPage(page, callback) {
  fetch(page)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${page}`);
      return res.text();
    })
    .then((data) => {
      mainContent.innerHTML = data;
      window.scrollTo(0, 0); // scroll to top

      // Run callback only AFTER content is added
      if (typeof callback === "function") callback();
    })
    .catch((err) => {
      console.error(err);
      mainContent.innerHTML = `<p class="text-red-500">Error loading ${page}</p>`;
    });
}

//  Image Generator
function imageGenerator() {
  const image = document.getElementById("img");
  const loadingAnim = document.getElementById("loadingAnimated");
  const textPrompt = document.getElementById("prompt").value.trim();
  const submit = document.getElementById("submit-btn");

  if (textPrompt === "") return alert("Please write something!");
  if (!artStyle) return alert("Please select an art style first!");

  const prompt = `${artStyle} ${textPrompt}`;
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}`;

  submit.disabled = true;
  submit.textContent = "Generating...";
  submit.classList.add("opacity-50", "cursor-not-allowed");

  image.style.display = "none";
  loadingAnim.classList.remove("hidden");

  image.src = imageUrl;
  image.onload = () => {
    loadingAnim.classList.add("hidden");
    image.style.display = "block";

    submit.disabled = false;
    submit.textContent = "Generate";
    submit.classList.remove("opacity-50", "cursor-not-allowed");
  };
}

//  Button & Style Logic
function renderAll() {
  const buttons = document.querySelectorAll("#btns button");
  const submit = document.getElementById("submit-btn");

  if (!buttons.length || !submit) return; // avoid error if not present

  submit.addEventListener("click", imageGenerator);

  buttons[0].classList.add("bg-[#9333ea]");
  artStyle = buttons[0].textContent;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("bg-[#9333ea]"));
      btn.classList.add("bg-[#9333ea]");
      artStyle = btn.textContent;
    });
  });
}

//  Render Review Cards
function renderReview() {
  const clientReviews = [
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      name: "Rahul Sharma",
      role: "Content Creator",
      dec: "Render AI made my creative process so much easier! I can generate stunning visuals for my posts within seconds.",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format",
      name: "Sophia Dutta",
      role: "Graphic Designer",
      dec: "I love how simple and fast Render AI is. The art styles look professional, and I can experiment endlessly for free!",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format",
      name: "Arjun Mehta",
      role: "Startup Founder",
      dec: "Render AI helped me visualize ideas for my brand quickly. The dashboard is easy to use and the results are amazing!",
    },
  ];

  const renderDiv = document.getElementById("review-cards");
  if (!renderDiv) return;

  renderDiv.innerHTML = clientReviews
    .map(
      (c) => `
      <div class="bg-[#1a0b24] flex flex-col items-center text-center border border-slate-800 rounded-2xl p-10 md:w-80 w-full shadow-lg shadow-purple-900/30 hover:bg-[#241032] hover:scale-[1.02] transition-transform">
        <img class="h-20 w-20 rounded-full border-4 border-purple-600 shadow-md mb-4" src="${c.img}" alt="${c.name}" />
        <h3 class="text-white text-lg font-semibold">${c.name}</h3>
        <h4 class="text-slate-400 text-sm mb-3">${c.role}</h4>
        <div class="flex space-x-1 text-yellow-400 mb-4">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i>
        </div>
        <p class="text-slate-300 text-sm leading-relaxed">${c.dec}</p>
      </div>`
    )
    .join("");
}

//  Home Page
function loadHome() {
  loadPage("mainAllContent.html", () => {
    renderReview();
    renderContent();
    Navbar("navbar.html");
  });
}

//  Dashboard Page
function loadDashboard() {
  loadPage("dashboard.html", () => {
    renderAll();
  });
}

//  Logout
function logout() {
  loadHome(); // back to main home content
}

//  Start the site with Home
loadHome();

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signForm = document.getElementById("sign-form");
  const fromActive = document.getElementById("from-Active");

  const openLogin = document.getElementById("open-login");
  const openSignup = document.getElementById("open-signup");
  const closeLogin = document.getElementById("close-login");
  const closeSignup = document.getElementById("close-signup");

  // Open Login Form
  openLogin.addEventListener("click", () => {
    signForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    fromActive.classList.remove("hidden");
  });

  // Open Sign-Up Form
  openSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signForm.classList.remove("hidden");
    fromActive.classList.remove("hidden");
  });

  // Close Login Form
  closeLogin.addEventListener("click", () => {
    fromActive.classList.add("hidden");
  });

  // Close Sign-Up Form
  closeSignup.addEventListener("click", () => {
    fromActive.classList.add("hidden");
  });
});
