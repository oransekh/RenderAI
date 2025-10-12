function renderContent() {
  // Select all elements safely after the HTML is loaded
  const startBtn = document.getElementById("start-btn");
  const loginForm = document.getElementById("login-form");
  const signForm = document.getElementById("sign-form");
  const mainForm = document.getElementById("from-Active");
  const loginBtn = document.getElementById("login-btn");
  const signBtn = document.getElementById("sign-btn");
  const profile = document.getElementById("profile");
  const logOutDiv = document.getElementById("log-out");
  const logOutBtn = document.getElementById("logout-btn");

  // ⚠ Check elements exist (important for dynamically loaded pages)
  if (!startBtn || !loginForm || !signForm || !mainForm) return;

  //  Open login/signup form
  startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mainForm.classList.remove("hidden");
  });

  //  Switch to signup form
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    signForm.classList.remove("hidden");
  });

  //  Switch to login form
  signBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("hidden");
    signForm.classList.add("hidden");
  });

  //  Login functionality
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData.entries());
    const username = data.username?.trim();
    const password = data.password?.trim();
    const profileData = JSON.parse(localStorage.getItem("profile"));

    if (!username || !password) {
      alert("Please fill all fields!");
      return;
    }

    if (
      profileData &&
      username === profileData.username &&
      password === profileData.password
    ) {
      alert("Login successful!");
      document.getElementById("profile-div").classList.remove("hidden");
      document.getElementById("button-out").classList.add("hidden");
      loadDashboard();
    } else {
      alert("Invalid username or password!");
    }
  });

  // Signup functionality
  signForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(signForm);
    const data = Object.fromEntries(formData.entries());
    const name = data.name?.trim();
    const username = data.username?.trim();
    const password = data.password?.trim();

    if (!name || !username || !password) {
      alert("Please fill all fields!");
      return;
    }

    const user = { name, username, password };
    localStorage.setItem("profile", JSON.stringify(user));
    alert("Account created successfully! Please log in.");
    signForm.reset();
    signForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });

  // Show logout dropdown on hover
  if (profile && logOutDiv) {
    profile.addEventListener("mouseenter", () => {
      logOutDiv.classList.remove("hidden");
    });
    logOutDiv.addEventListener("mouseleave", () => {
      logOutDiv.classList.add("hidden");
    });
  }

  // Logout functionality
  if (logOutBtn) {
    logOutBtn.addEventListener("click", () => {
      alert("You have been logged out successfully!");
      loadPage("mainAllContent.html", () => {
        loadHome();
        document.getElementById("profile-div").classList.remove("hidden");
        document.getElementById("button-out").classList.remove("hidden");
      });
    });
  }
}
