document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname.includes("register")) {
    document.getElementById("registerForm").onsubmit = function (e) {
      e.preventDefault();
      const u = document.getElementById("username").value;
      const p = document.getElementById("password").value;
      localStorage.setItem("seller_" + u, p);
      alert("✅ تم التسجيل. يمكنك تسجيل الدخول الآن.");
      location.href = "seller-login.html";
    };
  }

  if (location.pathname.includes("login")) {
    document.getElementById("loginForm").onsubmit = function (e) {
      e.preventDefault();
      const u = document.getElementById("loginUsername").value;
      const p = document.getElementById("loginPassword").value;
      if (localStorage.getItem("seller_" + u) === p) {
        localStorage.setItem("logged_seller", u);
        location.href = "seller-dashboard.html";
      } else {
        alert("❌ اسم المستخدم أو كلمة المرور غير صحيحة.");
      }
    };
  }
});
