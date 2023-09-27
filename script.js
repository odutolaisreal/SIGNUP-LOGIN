
const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    })

  })
})

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  })
})



var signup = document.getElementById("signup")

var login = document.getElementById("login")

signup.addEventListener("click", function () {
  var username = document.getElementById("name").value

  var lastName = document.getElementById("lastName").value
  var email = document.getElementById("email").value

  var password = document.getElementById("password").value
  localStorage.setItem("username", Name)
  localStorage.setItem("lastName", lastName)
  localStorage.setItem("email", email)

  localStorage.setItem("username", Name)
  localStorage.setItem("password", password)
  // alert("successful signup")
  if (username == storedUsername && Password == storedPassword) {
    alert("successful")
  }
  else {
    alert("Wrong Credentials")
  }

})