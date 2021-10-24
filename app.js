var Timer = document.getElementById("watch");
var resetbtn = document.getElementById("reset");
var stopbtn = document.getElementById("stop");
var startbtn = document.getElementById("start");

var sCount = 0;
var mCount = 0;
var hCount = 0;
var stopTimer = true;
Timer.innerHTML = "00.00.00";

function resetTime() {
  Timer.innerHTML = "00.00.00";
  if (stopTimer == false) {
    stopTimer = true;
  }
  sCount = 0;
  mCount = 0;
  hCount = 0;
  startbtn.classList.remove("hide");
  stopbtn.classList.add("hide");
}
function stopTime() {
  if (stopTimer == false) {
    stopTimer = true;
  }
  startbtn.classList.remove("hide");
  stopbtn.classList.add("hide");
}
function startTime() {
  if (stopTimer == true) {
    stopTimer = false;
    timeCycle();
  }
  startbtn.classList.add("hide");
  stopbtn.classList.remove("hide");
}
function timeCycle() {
  if (stopTimer == false) {
    sCount = parseInt(sCount);
    mCount = parseInt(mCount);
    hCount = parseInt(hCount);
    sCount += 1;
    if (sCount == 60) {
      mCount += 1;
      sCount = 0;
    }
    if (mCount == 60) {
      hCount += 1;
      mCount = 0;
      sCount = 0;
    }
    if (sCount < 10 || sCount == 0) {
      sCount = "0" + sCount;
    }
    if (mCount < 10 || mCount == 0) {
      mCount = "0" + mCount;
    }
    if (hCount < 10 || hCount == 0) {
      hCount = "0" + hCount;
    }
    Timer.innerHTML = hCount + "." + mCount + "." + sCount;
    setTimeout(timeCycle, 1000);
  }
}
stopbtn.addEventListener("click", stopTime);
startbtn.addEventListener("click", startTime);
resetbtn.addEventListener("click", resetTime);
