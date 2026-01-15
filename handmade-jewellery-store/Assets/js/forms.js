/* ===========================
   FORM VALIDATION & UX LOGIC
=========================== */

// PASSWORD STRENGTH (CREATE PAGE)
const passwordInput = document.querySelector('input[type="password"]');
const strengthBar = document.querySelector('.strength-bar span');

if (passwordInput && strengthBar) {
  passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    let strength = 0;

    if (value.length >= 6) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    strengthBar.style.width = `${strength * 25}%`;

    const colors = ['red', 'orange', 'yellow', 'cyan', 'lime'];
    strengthBar.style.background = colors[strength];
  });
}

/* ===========================
   LOGIN FORM VALIDATION
=========================== */

const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = loginForm.querySelectorAll('input');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'red';
        valid = false;
      } else {
        input.style.borderColor = 'cyan';
      }
    });

    if (valid) {
      alert('Login successful (demo)');
      loginForm.reset();
    }
  });
}

/* ===========================
   SIGNUP FORM VALIDATION
=========================== */

const signupForm = document.getElementById('signupForm');

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Account created successfully (demo)');
    signupForm.reset();

    if (strengthBar) strengthBar.style.width = '0';
  });
}
