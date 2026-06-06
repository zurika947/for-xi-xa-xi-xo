const startBtn = document.getElementById("startBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const yesBtn = document.getElementById("yesBtn");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const nextBtn = document.getElementById("nextBtn");
const timeBtns = document.querySelectorAll(".time-btn");

let selectedTime = "";

const messages = [
    "Bảnh chắc chưa 🥺",
    "Nghĩ lại đi bảnh 😭",
    "Tuôi puồn á nha 🥹",
    "Chọn 'Có' điiii 💖",
    "Cho tuôi cơ hội coiiii 👉👈",
    "Đừng bấm KHÔNG mà 😭",
    "Bỏ ý định đó điiii 🥺"
];

startBtn.addEventListener("click", () => {
    screen1.classList.remove("active");
    screen2.classList.add("active");
});

yesBtn.addEventListener("click", () => {
    screen2.classList.remove("active");
    screen3.classList.add("active");
});

let count = 0;

noBtn.addEventListener("mouseenter", () => {
    const card = document.querySelector(".card");
    const maxX = card.offsetWidth - noBtn.offsetWidth - 40;
    const maxY = 250;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    message.textContent = messages[count % messages.length];
    count++;
});

nextBtn.addEventListener("click", () => {
    screen3.classList.remove("active");
    screen4.classList.add("active");
});

timeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        timeBtns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedTime = btn.textContent.trim();

        setTimeout(() => {
            screen4.classList.remove("active");
            screen5.classList.add("active");
        }, 500);
    });
});

const screen5 = document.getElementById("screen5");
const screen6 = document.getElementById("screen6");
const finalTime = document.getElementById("finalTime");
const finalPlace1 = document.getElementById("finalPlace1");
const finalPlace2 = document.getElementById("finalPlace2");
const finishBtn = document.getElementById("finishBtn");

finishBtn.addEventListener("click", () => {
    alert("💖 Vậy là chốt kèo rồi nhaaa 💖");
});

const placeBtns = document.querySelectorAll(".place-btn");
const confirmPlaceBtn = document.getElementById("confirmPlaceBtn");
let selectedPlaces = [];

placeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const place = btn.textContent.trim();

        if(btn.classList.contains("selected")){
            btn.classList.remove("selected");
            selectedPlaces = selectedPlaces.filter(p => p !== place);
            return;
        }

        if(selectedPlaces.length >= 2){
            alert("Chỉ chọn 2 địa điểm thôi nha 😆");
            return;
        }

        btn.classList.add("selected");
        selectedPlaces.push(place);
    });
});

confirmPlaceBtn.addEventListener("click", () => {
    if(selectedPlaces.length !== 2){
        alert("Cậu chọn đủ 2 địa điểm nha 💖");
        return;
    }
    
    finalTime.textContent = "⏰ " + selectedTime;
    finalPlace1.textContent = "📍 " + selectedPlaces[0];
    finalPlace2.textContent = "📍 " + selectedPlaces[1];

    screen5.classList.remove("active");
    screen6.classList.add("active");
});