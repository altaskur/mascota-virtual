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

mainLoop();
