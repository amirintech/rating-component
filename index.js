/* Adding the selection class styles to any
rating button that the user clicks */
let userRating;
const ratingButtons = document.querySelectorAll(".rating-value");
ratingButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    removePreviousSelection();
    button.classList.toggle("selected");
    userRating = Number.parseInt(button.textContent);
  });
});

function removePreviousSelection() {
  /* This function removes the selection style from the
  old rating if the user decided to chose another one */
  Array.from(ratingButtons).some((button) => {
    if (button.classList.contains("selected")) {
      button.classList.remove("selected");
      return true;
    }
  });
}

/* When the user submits his rating */
const ratingCard = document.querySelector("#rating-card");
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => {
  if (userRating == undefined) {
    showWarning();
    return;
  }

  const thanksCardContent = `
  <img class="thanks-img" src="./images/illustration-thank-you.svg" alt="">
  <span class="rating-tag">You selected ${userRating} out of ${ratingButtons.length}</span>
  <h1 class="title">Thank you!</h1>
  <p class="description">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
  `;

  ratingCard.innerHTML = thanksCardContent;
  ratingCard.classList.add("thanks-card");
});

function showWarning() {
  submitBtn.classList.add("warning");
  submitBtn.textContent = "Please select a rating!";
  submitBtn.setAttribute("disabled", "");

  const span = document.createElement("span");
  span.id = "counter";
  submitBtn.appendChild(span);

  let warningTime = 5; // seconds
  const counter = document.querySelector("#counter");
  setInterval(() => {
    console.log("hey");
    if (warningTime === 0) {
      submitBtn.removeChild(counter);
      submitBtn.removeAttribute("disabled");
      submitBtn.textContent = "submit";
      submitBtn.classList.remove("warning");
      return;
    }

    counter.textContent = ` ${warningTime--}`;
  }, 1000);
}
