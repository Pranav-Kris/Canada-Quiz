// Tough Canadian Quiz by Pranav

// Button Function
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Create Variables
  let ans1 = document.getElementById("user-input1").value.toLowerCase();
  let ans2 = document.getElementById("user-input2").value.toLowerCase();
  let ans3 = document.getElementById("user-input3").value.toLowerCase();
  let ans4 = document.getElementById("user-input4").value.toLowerCase();
  let score = 0;

  //Create Answer Key Variables
  let AnsCorrect1_1 = "john a. macdonald";
  let AnsCorrect1_2 = "george brown";
  let AnsCorrect1_3 = "george etienne cartier";
  let AnsCorrect2 = "15";
  let AnsCorrect3 = "rwanda";
  let AnsCorrect4 = "37";

  // Create Quiz Marking Format for Question 1
  if (
    AnsCorrect1_1 === ans1 ||
    AnsCorrect1_2 === ans1 ||
    AnsCorrect1_3 === ans1
  ) {
    score++;
    document.getElementById("result1").innerHTML = `<p>Correct!</p>`;
    document.getElementById("user-input1").style.border = `2px solid green`;
  } else {
    document.getElementById(
      "result1"
    ).innerHTML = `<p class = "incorrectColor">Incorrect!</p>`;
    document.getElementById("user-input1").style.border = `2px solid red`;
  }
  // Create Quiz Marking Format for Question 2
  if (AnsCorrect2 === ans2) {
    score++;
    document.getElementById(
      "result2"
    ).innerHTML = `<p class = "correctColor">Correct!</p>`;
    document.getElementById("user-input2").style.border = `2px solid green`;
  } else {
    document.getElementById(
      "result2"
    ).innerHTML = `<p class = "incorrectColor">Incorrect!</p>`;
    document.getElementById("user-input2").style.border = `2px solid red`;
  }
  // Create Quiz Marking Format for Question 3
  if (AnsCorrect3 === ans3) {
    score++;
    document.getElementById(
      "result3"
    ).innerHTML = `<p class = "correctColor">Correct!</p>`;
    document.getElementById("user-input3").style.border = `2px solid green`;
  } else {
    document.getElementById(
      "result3"
    ).innerHTML = `<p class = "incorrectColor">Incorrect!</p>`;
    document.getElementById("user-input3").style.border = `2px solid red`;
  }
  // Create Quiz Marking Format for Question 4
  if (AnsCorrect4 === ans4) {
    score++;
    document.getElementById(
      "result4"
    ).innerHTML = `<p class = "correctColor">Correct!</p>`;
    document.getElementById("user-input4").style.border = `2px solid green`;
  } else {
    document.getElementById(
      "result4"
    ).innerHTML = `<p class = "incorrectColor">Incorrect!</p>`;
    document.getElementById("user-input4").style.border = `2px solid red`;
  }
  // Display Score and Comment
  document.getElementById("mark").innerHTML = `${score}/4 (${
    score * 0.25 * 100
  }%)`;

  if (score === 4) {
    document.getElementById(
      "comment"
    ).innerHTML = `<p>Wow, you are a true Canadian indeed!</p>`;
  } else if (score === 3) {
    document.getElementById("comment").innerHTML = `<p>Great Job!</p>`;
  } else if (score === 2) {
    document.getElementById("comment").innerHTML = `<p>Not bad!</p>`;
  } else if (score === 1) {
    document.getElementById("comment").innerHTML = `<p>Could be better!</p>`;
  } else {
    document.getElementById(
      "comment"
    ).innerHTML = `<p>Time to hit the books again!</p>`;
  }
}
