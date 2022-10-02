var sleepCounter = 100;
var hungryCounter = 100;

function mainLoop() {
  let clock = window.setInterval(() => {
    sleepCounter = Math.round(sleepCounter - Math.random() * 5);
    hungryCounter = Math.round(hungryCounter - Math.random() * 5);

    console.log("sleep: ", sleepCounter);
    console.log("hungry: ", hungryCounter);

    if (sleepCounter <= 0) {
      console.log("sleepy");
      sleepCounter = 100;
    }
    if (hungryCounter <= 0) {
      console.log("hungry");
      hungryCounter = 100;
    }
  }, 1000);
}

let pet = document.querySelector(".pet");
let buttons = document.querySelectorAll("input[type=button]");
buttons[0].addEventListener("click", () => {
  // get the current class name
  let currentClass = pet.className;

  console.log(currentClass);
  if (currentClass.includes("ui-sleep")) {
    pet.classList.remove("ui-sleep");
    pet.classList.add("ui-wake-up");

    setTimeout(() => {
      console.log("wake up");
      pet.classList.remove("ui-wake-up");
    }, 1500);
  } else {
    pet.classList.add("ui-sleep");
  }
});

buttons[1].addEventListener("click", () => {
  pet.classList.toggle("ui-eat");
});

buttons[2].addEventListener("click", () => {
  pet.classList.toggle("ui-greeting");
});

buttons[3].addEventListener("click", () => {
  pet.classList.toggle("ui-annoyed");
  let classList = pet.className;
  console.log(classList);
  if (classList.includes("ui-annoyed")) {
    setTimeout(() => {
      pet.classList.remove("ui-annoyed");
    }, 1000);
  }
});
