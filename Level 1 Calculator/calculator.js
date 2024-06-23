let string = "";
let buttons = document.querySelectorAll(".button");
const operators = ['+', '-', '*', '/', '%'];

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    const lastChar = string.slice(-1);

    if (e.target.closest(".button").id === "backspace") {
      string = string.slice(0, -1);
    } else if (value === "=") {
      try {
        if (operators.includes(lastChar)) {
          throw new Error("Invalid Expression");
        }
        string = eval(string).toString();
      } catch (err) {
        string = "Error";
      }
    } else if (value === "C") {
      string = "";
    } else {
      if (
        operators.includes(value) &&
        (string === "" || operators.includes(lastChar))
      ) {
        string = "Error";
      } else {
        if (string === "Error") {
          string = "";
        }
        string += value;
      }
    }

    document.querySelector("input").value = string;
  });
});



