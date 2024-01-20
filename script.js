//set initial count to zero
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const button = document.querySelector(".random");
const head = document.getElementsByClassName("header");
const imageAdd = document.getElementById("image");
const dog =
  "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg";
const cat =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt";
const meerkat =
  "https://i.natgeofe.com/k/aa27e94d-8f1d-447e-9dba-15ac242317b0/meerkat-closeup-log_4x3.jpg";

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    const randomNumber = Math.floor(Math.random() * 2001) - 1000;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("random")) {
      count = randomNumber;
    }

    if (count % 2 === 0) {
      value.style.color = "white";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      imageAdd.style.border = "30px solid transparent";
      imageAdd.style.borderImage =
        "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)";
      imageAdd.style.borderImageSlice = 1;
    } else if (count > 0) {
      value.style.color = "green";
      document.body.style.backgroundColor = "lightblue";
      imageAdd.style.border = "none";
    } else if (count < 0) {
      value.style.color = "red";
      document.body.style.backgroundColor = "lightgrey";
      imageAdd.style.border = "none";
    }
    // } else if (count === 0) {
    //   value.style.color = "white";
    //   document.body.style.backgroundColor = "yellow";
    //   document.body.style.color = "white";
    // }

    value.textContent = count;

    if (count < 0) {
      imageAdd.src = dog;
    }
    if (count % 2 === 0) {
      imageAdd.src = meerkat;
    } else if (count > 0) {
      imageAdd.src = cat;
    } else if (count === 0) {
      imageAdd.src = meerkat;
    }
  });
});
