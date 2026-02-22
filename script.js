const surpriseBtn = document.getElementById("btn");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const box = document.getElementById("box1");
const img = document.getElementById("surpriseImg");

// Already unna surprise logic
surpriseBtn.addEventListener("click", () => {
  img.style.display = "block";
  surpriseBtn.style.display = "none";
});

// YES -> auto click surprise
yesBtn.addEventListener("click", () => {
  surpriseBtn.click();   // direct ga click for surprise trigger
});

// NO -> create breakup box
noBtn.addEventListener("click", () => {
  // old box ni dim cheyyi (optional)
  box.style.opacity = "0.2";

  // new breakup box create cheyyadam
  const breakupBox = document.createElement("div");
  breakupBox.id = "breakupBox";
  breakupBox.innerHTML = `
    <h2>It's okay… 💔</h2>
    <p>Some stories end here.</p>
    <p>Wishing you happiness ahead.</p>
  `;

  document.querySelector(".container").appendChild(breakupBox);
});
