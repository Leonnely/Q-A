import questions from './questions.json' assert { type: 'json' };

let currentIndex = Math.floor(Math.random() * 94);
let score = 0;
let isRepeated = [];
const appDiv = document.getElementById('app');

function loadQuestion() {
    debugger
    if (currentIndex <= questions.length) {
        const question = questions[currentIndex];

        appDiv.innerHTML = `
        <h2>Pregunta:</h2>
        <p class="description">${question.descripcion}</p>
        <p id="feedback"></p>
        <div id="options">
            <button onclick="checkAnswer('LEVE')">LEVE</button>
            <button onclick="checkAnswer('MODERADA')">MODERADA</button>
            <button onclick="checkAnswer('GRAVE')">GRAVE</button>
        </div>
        <p class="score">Preguntas contestadas: <span>${score}</span></p>
        `;
    } else {
        appDiv.innerHTML = `<h2>¡Felicidades!</h2><p>Completaste todas las preguntas. Puntuación: ${score} / ${questions.length}</p>`;
    }
}

window.checkAnswer = function (selectedAnswer) {
    const question = questions[currentIndex];
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.className = ''; 

    if (selectedAnswer === question.tipo_falta) {
        isRepeated.push(currentIndex);
        feedbackDiv.textContent = '¡Correcto!';
        feedbackDiv.classList.add('correct');
        score++;
        currentIndex = checkRepeated();
        setTimeout(loadQuestion, 1000); // Espera 1 segundo antes de cargar la siguiente pregunta
    } else {
        feedbackDiv.textContent = 'Incorrecto. Intenta nuevamente.';
        feedbackDiv.classList.add('incorrect');
    }
};


function checkRepeated() {
    let number = Math.floor(Math.random() * 94)
    let isValid = !isRepeated.find(x => x == number)
    if (isValid) {
        return number
    } else {
        number = checkRepeated()
    }
}

loadQuestion();

