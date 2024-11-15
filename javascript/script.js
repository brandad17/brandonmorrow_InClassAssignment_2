const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");
const hide1 = document.getElementById("hide1");
const hide2 = document.getElementById("hide2");
const hide3 = document.getElementById("hide3");

// Show functions for A, B, and C buttons
function showImage1() {
  document.getElementById('img1').classList.remove('disappear');
}

function showImage2() {
  document.getElementById("img2").classList.remove("disappear");
}

function showImage3() {
  document.getElementById("img3").classList.remove("disappear");
}

// Hide functions for the hide buttons
function hideImage1() {
    document.getElementById('img1').classList.add('disappear');
}

function hideImage2() {
    document.getElementById('img2').classList.add('disappear');
}

function hideImage3() {
    document.getElementById('img3').classList.add('disappear');
}

btnA.addEventListener('click', showImage1);
btnB.addEventListener("click", showImage2);
btnC.addEventListener("click", showImage3);
hide1.addEventListener("click", hideImage1);
hide2.addEventListener("click", hideImage2);
hide3.addEventListener("click", hideImage3);
