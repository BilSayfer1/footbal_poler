let score = [0, 0];
const ball = document.getElementById('ball');
const field = document.getElementById('field');
const scoreDisplay = document.getElementById('score');

ball.ondragstart = function(e) {
    e.dataTransfer.setData('text/plain', null);
};

field.ondragover = function(e) {
    e.preventDefault();
};

field.ondrop = function(e) {
    e.preventDefault();
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    const x = e.clientX - fieldRect.left - ballRect.width / 2;
    const y = e.clientY - fieldRect.top - ballRect.height / 2;

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    if (x < 0 && y > fieldRect.height * 0.4 && y < fieldRect.height * 0.6) {
        score[0]++;
        alert("Месси собака");
        updateScore();
        resetBall();
    } else if (x > fieldRect.width - ballRect.width && y > fieldRect.height * 0.4 && y < fieldRect.height * 0.6) {
        score[1]++;
        alert("Месси собака");
        updateScore();
        resetBall();
    } else if ((x < 0 && y < 0) || (x < 0 && y > fieldRect.height - ballRect.height) ||
               (x > fieldRect.width - ballRect.width && y < 0) ||
               (x > fieldRect.width - ballRect.width && y > fieldRect.height - ballRect.height)) {
        alert('Угол!');
    }
};

function updateScore() {
    scoreDisplay.textContent = `Счет: ${score[0]} - ${score[1]}`;
}

function resetBall() {
    ball.style.left = '50%';
    ball.style.top = '50%';
    ball.style.transform = 'translate(-50%, -50%)';
}
