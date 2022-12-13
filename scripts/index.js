const questionDiv = document.getElementById("question");
const btnAnswer = document.getElementById("show");
const answerDiv = document.getElementById("answer");
const exampleDiv = document.getElementById("example");
const btnNext = document.getElementById("next");

const total = questions.length;
let shown = false;

function showRandom() {
    if (questions.length == 0) location.reload();

    const question = questions[getRandomInt(0, questions.length - 1)];

    questions.splice(questions.indexOf(question), 1);
    console.log(questions.length);

    questionDiv.innerText = `${total - questions.length}/${total} - ${question.question}`;
    answerDiv.innerText = question.answer;
    exampleDiv.innerText = question.example ?? '';

    shown = false;
    btnAnswer.classList.remove('hidden');

    answerDiv.classList.add('hidden');
    exampleDiv.classList.add('hidden');
    btnNext.classList.add('hidden');
}

function showAnswer() {
    shown = true;

    btnAnswer.classList.add('hidden');

    answerDiv.classList.remove('hidden');
    exampleDiv.classList.remove('hidden');
    btnNext.classList.remove('hidden');
}

function main() {
    showRandom();
}

main();

btnNext.addEventListener("click", showRandom);
btnAnswer.addEventListener("click", showAnswer);

window.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        shown ? showRandom() : showAnswer();
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
