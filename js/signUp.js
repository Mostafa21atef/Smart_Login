const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
let inputs = localStorage.getItem("inputs") ? JSON.parse(localStorage.getItem("inputs")) : [];
function signUp() {
    if (!inputName.value || !inputEmail.value || !inputPassword.value) {
        document.getElementById("error").innerHTML = `<p class="text-danger text-center">All fields are required.</p>`;
        return;
    }
  const userInfo = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
    };

    inputs.push(userInfo);
    localStorage.setItem("inputs", JSON.stringify(inputs));
    clear();
    alert("Account created successfully!");
    window.location.href = "index.html";
}

function clear() {
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
}

function Login() {
    const emailLogin = document.getElementById("emailLogin");
    const passLogin = document.getElementById("passLogin");
    if (!emailLogin.value || !passLogin.value) {
        document.getElementById("error").innerHTML = `<p class="text-danger text-center">All fields are required.</p>`;
        return;
    }
    const storedUsers = JSON.parse(localStorage.getItem("inputs")) || [];

    const user = storedUsers.find(
        (user) => user.email === emailLogin.value && user.password === passLogin.value
    );

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "welcome.html";
    } else {
        document.getElementById("error").innerHTML = `<p class="text-danger text-center">Invalid email or password.</p>`;
    }
}

function validateInputs(element) {
    const regex = {
        inputName: /^[a-zA-Z0-9_]{3,20}$/,
        inputEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    };
    const validationRule = regex[element.id];
    if (validationRule) {
        if (validationRule.test(element.value)) {
            element.classList.remove("is-invalid");
            element.nextElementSibling.classList.add("d-none");
        } else {
            element.classList.add("is-invalid");
            element.nextElementSibling.classList.remove("d-none");
        }
    }
}
