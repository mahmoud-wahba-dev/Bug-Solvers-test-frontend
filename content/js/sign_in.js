// $(".showPassword").click(function () {
//     var passwordInput = $(this).siblings("input");
//     passwordInput.attr("type", function (index, attr) {
//       return attr === "password" ? "text" : "password";
//     });
//   });

let hidePassword = document.getElementById("hide_password_icon_id");
let password = document.getElementById("password");

hidePassword.addEventListener("click", function () {
    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
        hidePassword.src="/content/assets/images/login/eye-slash.svg"
    } else {
        password.setAttribute("type", "password");
        hidePassword.src="/content/assets/images/login/eye.svg"

    }
});
