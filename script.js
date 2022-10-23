const input = document.getElementById("input");
const submit = document.getElementById("submit");
const text = document.getElementById("text");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
  let inputText = input.value;
  let reverse = "";

  for (let i = inputText.length - 1; i >= 0; i--) {
    reverse += inputText[i];
  }
  if (inputText === reverse) {
    text.style.display = "block";
    result.style.color = "#38E54D";
    result.innerHTML = `${inputText} is palindrome`;
  } 
  else {
    text.style.display = "block";
    result.style.color = "#FF1E1E";
    result.innerHTML = `${inputText} is not palindrome`;
  }
});
