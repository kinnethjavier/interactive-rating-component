var ratingSelected = 0; // global variable for rating selected value

// event listener on ratings option
document.getElementById("rate-1").addEventListener("click", function () {
  ratingSelected = 1;
  document.getElementById("rate-1").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("rate-1").style.color = "hsl(0, 0%, 100%)";
  IsNotSelected();
});

document.getElementById("rate-2").addEventListener("click", function () {
  ratingSelected = 2;
  document.getElementById("rate-2").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("rate-2").style.color = "hsl(0, 0%, 100%)";
  IsNotSelected();
});

document.getElementById("rate-3").addEventListener("click", function () {
  ratingSelected = 3;
  document.getElementById("rate-3").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("rate-3").style.color = "hsl(0, 0%, 100%)";
  IsNotSelected();
});

document.getElementById("rate-4").addEventListener("click", function () {
  ratingSelected = 4;
  document.getElementById("rate-4").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("rate-4").style.color = "hsl(0, 0%, 100%)";
  IsNotSelected();
});

document.getElementById("rate-5").addEventListener("click", function () {
  ratingSelected = 5;
  document.getElementById("rate-5").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("rate-5").style.color = "hsl(0, 0%, 100%)";
  IsNotSelected();
});

// Method style for not selected rating items
const IsNotSelected = () => {
  if (ratingSelected != 1) {
    document.getElementById("rate-1").style.backgroundColor =
      "hsl(214, 19%, 22%)";
    document.getElementById("rate-1").style.color = "hsl(217, 12%, 63%)";
  }
  if (ratingSelected != 2) {
    document.getElementById("rate-2").style.backgroundColor =
      "hsl(214, 19%, 22%)";
    document.getElementById("rate-2").style.color = "hsl(217, 12%, 63%)";
  }
  if (ratingSelected != 3) {
    document.getElementById("rate-3").style.backgroundColor =
      "hsl(214, 19%, 22%)";
    document.getElementById("rate-3").style.color = "hsl(217, 12%, 63%)";
  }
  if (ratingSelected != 4) {
    document.getElementById("rate-4").style.backgroundColor =
      "hsl(214, 19%, 22%)";
    document.getElementById("rate-4").style.color = "hsl(217, 12%, 63%)";
  }
  if (ratingSelected != 5) {
    document.getElementById("rate-5").style.backgroundColor =
      "hsl(214, 19%, 22%)";
    document.getElementById("rate-5").style.color = "hsl(217, 12%, 63%)";
  }
};

// Submit method
const Submit = () => {
  if (ratingSelected == 0) alert("Please select your rate to be submitted.");
  else {
    document.getElementById("rating-value").innerText = ratingSelected; // getting rating value
    // hides submit form and revealing thank you form
    document.getElementById("card-item-1").style.display = "none";
    document.getElementById("card-item-2").style.display = "block";
  }
};
