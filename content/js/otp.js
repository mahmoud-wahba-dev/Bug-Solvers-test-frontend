const inputs = document.querySelectorAll(".otp-field > input");
const button = document.querySelector("#otpSubmit");

window.addEventListener("load", () => inputs[0].focus());
button.setAttribute("disabled", "disabled");

inputs[0].addEventListener("paste", function (event) {
  event.preventDefault();

  const pastedValue = (event.clipboardData || window.clipboardData).getData("text");
  const otpLength = inputs.length;

  for (let i = 0; i < otpLength; i++) {
    if (i < pastedValue.length) {
      inputs[i].value = pastedValue[i];
      inputs[i].removeAttribute("disabled");
      inputs[i].classList.add("finished");
      if (i + 1 < otpLength) inputs[i + 1].focus();
    } else {
      inputs[i].value = "";
      inputs[i].classList.remove("finished");
    }
  }

  // Check if all inputs are filled to enable the button
  checkAllInputs();
});

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    // Ensure only single character
    if (currentInput.value.length > 1) {
      currentInput.value = currentInput.value.charAt(0);
    }

    // Add finished class if input has value
    if (currentInput.value !== "") {
      currentInput.classList.add("finished");
    } else {
      currentInput.classList.remove("finished");
    }

    // Move to next input if available and current input is not empty
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // Handle backspace
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          input.classList.remove("finished");
          prevInput.focus();
        }
      });
    }

    // Check if all inputs are filled to enable the button
    checkAllInputs();
  });
});

function checkAllInputs() {
  const allFilled = Array.from(inputs).every(input => input.value !== "");
  if (allFilled) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
  }
}
