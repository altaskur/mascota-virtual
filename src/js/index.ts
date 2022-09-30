var sleepCounter = 100;
var hungryCounter = 100;

function mainLoop() {
  let clock = window.setInterval(() => {
    sleepCounter--;
    hungryCounter--;

    console.log("sleep: ", sleepCounter);
    console.log("hungry: ", hungryCounter);
  }, 1000);
}

mainLoop();
