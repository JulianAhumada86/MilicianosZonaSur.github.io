document.getElementById('checkButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const correctAnswer = document.querySelector('.input-section').dataset.correctAnswer;

    if (userInput === correctAnswer) {
        document.getElementById('resultMessage').innerText = "El mensaje es correcto, tu siguiente pista es:";
        document.getElementById('userInput').style.display = 'none';
        document.getElementById('checkButton').style.display = 'none';

        // Muestra la pista oculta
        document.getElementById('hiddenHint').style.display = 'block';
    } else {
        document.getElementById('resultMessage').innerText = "Respuesta incorrecta. Intenta nuevamente.";
    }
});
