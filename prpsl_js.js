let ysbttn = document.getElementById("ysbttn");
let nobttn = document.getElementById("nobttn");
let message = document.getElementById("message");

nobttn.addEventListener("click", () => {
    nobttn.textContent = "Yes 🙈";
    message.textContent = "Yay! 💕 I knew you'd say YES!";
    nobttn.disabled = true; // stop further clicks
});

ysbttn.addEventListener("click", () => {
    message.textContent = "Yay! 💕 I knew you'd say YES!";
    ysbttn.disabled = true; // optional: disable Yes button after click
});
