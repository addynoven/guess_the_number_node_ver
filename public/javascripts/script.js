"use strict";
function ran_num_gen() {
    return Math.trunc(Math.random() * 20 + 1);
}
let rand_num = ran_num_gen();
const real_number = document.querySelector(".number");
const input_area = document.querySelector(".guess");
const btn = document.querySelector(".check");
const again = document.querySelector(".again");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore");
// real_number.textContent = rand_num;

btn.addEventListener("click", () => {
    check(Number(input_area.value));
});

function check(curr_val) {
    curr_val === rand_num ? winner() : loss(score.textContent, curr_val);
}
function winner(val) {
    real_number.textContent = rand_num;
    document.body.style.backgroundColor = "#60b347";
    message.textContent = "🎉 Correct Number!";
    highscore_checker();
}

function loss(curr_scr, curr_val) {
    if (Number(curr_scr) === 0) {
        message.textContent = "💥 u Lost the game...";
    } else {
        score.textContent = --curr_scr;
        try_again();
        hints(curr_val);
    }
}

function try_again() {
    input_area.value = "";
}

function hints(curr_val) {
    if (curr_val > rand_num) {
        message.textContent = "📈 Too high";
    } else {
        message.textContent = "📉 Too low";
    }
}

function highscore_checker() {
    Number(highscore.textContent) < Number(score.textContent)
        ? highscore_update()
        : "";
}

function highscore_update() {
    highscore.textContent = score.textContent;
}

again.addEventListener("click", () => {
    reset();
});

function reset() {
    try_again();
    console.log(document.body.removeAttribute("style"));
    rand_num = ran_num_gen();
    real_number.textContent = "?";
    score.textContent = 20;
    message.textContent = "Start guessing...";
}
