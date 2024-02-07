let form = document.getElementById("myForm");
let lblS = document.getElementById("lblSuccess");
let lblF = document.getElementById("lblFailure");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let name = formData.get("name");
  let password = formData.get("password");

  let errors = [];

  if (formValidation(name, password, errors)) {
    lblS.style.display = "block";
    console.log(name, password);
    name = "";
    password = "";
    errors = [];
    setTimeout(() => {
      lblS.style.display = "none";
    }, 3000);
  } else {
    lblF.style.display = "block";
    lblF.innerHTML = "Errors:";
    errors.forEach((element) => {
      lblF.innerHTML += ` <li>${element}</li>`;
    });

    setTimeout(() => {
      lblF.style.display = "none";
      lblF.innerHTML = "";
    }, 5000);
  }
}

function formValidation(name, password, errors) {
  if (!name) {
    errors.push(`name can't be empty`);
  }
  if (!password) {
    errors.push(`password can't be empty`);
  } else {
    if (password.toLowerCase === "password") {
      errors.push(`password can't be password`);
    }
    if (password.length <= 6) {
      errors.push(`password length must be greater than 6`);
    }
    if (password.length <= 6) {
      errors.push(`password length must be less than 15`);
    }
  }
  return errors.length > 0 ? false : true;
}
