let ysbttn = document.getElementById ("ysbttn");
let nobttn = document.getElementById ("nobttn");
let message = document.getElementById ("message");

let nosize = 1;

nobttn.addEventListener("click",()=> {
    nosize -= 0.1;
    if (nosize <= 0.2) {
        nobttn.disabled = true;
        nobttn.innerText = "😜";
    }
    nobttn.style.transform = `scale(${nosize})`;
    });
ysbttn.addEventListener("click",()=>{
     message.textContent = "Yay! 💕 I knew you'd say YES!";
});
