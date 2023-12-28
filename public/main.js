const input = document.querySelector("#operating");
const clilckbutton = document.body.querySelector("#equals");
function cinOperandAndOperation(buttonId) {
  const button = document.querySelector(buttonId);
  button.addEventListener("click", () => {
    if (button.innerText == "C") {
      input.value = "";
    } else if (button.innerText != "C") {
      input.value += button.innerText;
    }
  });
}
cinOperandAndOperation("#plus");
cinOperandAndOperation("#minus");
cinOperandAndOperation("#multipley");
cinOperandAndOperation("#devide");
cinOperandAndOperation("#seven");
cinOperandAndOperation("#eight");
cinOperandAndOperation("#nine");
cinOperandAndOperation("#four");
cinOperandAndOperation("#five");
cinOperandAndOperation("#six");
cinOperandAndOperation("#one");
cinOperandAndOperation("#two");
cinOperandAndOperation("#three");
cinOperandAndOperation("#zero");
cinOperandAndOperation("#fullstop");
cinOperandAndOperation("#clear");

clilckbutton.addEventListener("click", () => {
  const text = document.body.querySelector("#operating");
  let new_text = text.value;
  try {
    let result = math.evaluate(new_text);
    text.value = result;
  } catch {
    text.value = "Syntax error";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  function changeButtonBackgroundColor(buttonId, colorClass) {
    const button = document.querySelector(buttonId);
    button.classList.add(colorClass);
    setTimeout(() => {
      button.classList.remove(colorClass);
    }, 100);

    switch (buttonId) {
      case "#equals":
        const text = document.body.querySelector("#operating");
        let new_text = text.value;
        try {
          let result = math.evaluate(new_text);
          text.value = result;
        } catch {
          text.value = "Syntax error";
        }
        break;
      case "#clear":
        input.value = "";
        break;
    }
  }

  document.addEventListener("keydown", (e) => {
    const keyPressed = e.key;
    if (keyPressed !== "") {
      input.focus();
    }
    switch (keyPressed) {
      case "0":
        changeButtonBackgroundColor("#zero", "opacity-55");
        break;
      case "1":
        changeButtonBackgroundColor("#one", "opacity-55");
        break;
      case "2":
        changeButtonBackgroundColor("#two", "opacity-55");
        break;
      case "3":
        changeButtonBackgroundColor("#three", "opacity-55");
        break;
      case "4":
        changeButtonBackgroundColor("#four", "opacity-55");
        break;
      case "5":
        changeButtonBackgroundColor("#five", "opacity-55");
        break;
      case "6":
        changeButtonBackgroundColor("#six", "opacity-55");
        break;
      case "7":
        changeButtonBackgroundColor("#seven", "opacity-55");
        break;
      case "8":
        changeButtonBackgroundColor("#eight", "opacity-55");
        break;
      case "9":
        changeButtonBackgroundColor("#nine", "opacity-55");
        break;
      case "+":
        changeButtonBackgroundColor("#plus", "opacity-55");
        break;
      case "-":
        changeButtonBackgroundColor("#minus", "opacity-55");
        break;
      case "*":
        changeButtonBackgroundColor("#multipley", "opacity-55");
        break;
      case "/":
        changeButtonBackgroundColor("#devide", "opacity-55");
        break;
      case "Enter":
        changeButtonBackgroundColor("#equals", "opacity-55");
        break;
      case "Delete":
        changeButtonBackgroundColor("#clear", "opacity-55");
        break;
      case ".":
        changeButtonBackgroundColor("#fullstop", "opacity-55");
        break;
      case "Backspace":
        input.focus();
        let currentPosition = input.selectionStart;
        if (currentPosition == 0) {
          input.setSelectionRange(currentPosition - 1, currentPosition - 1);
        }
    }
  });
});
