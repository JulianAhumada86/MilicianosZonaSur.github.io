document.getElementById('checkButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const correctAnswer = document.querySelector('.input-section').dataset.correctAnswer;
    const resultMessage = document.getElementById('resultMessage');

    if (userInput === correctAnswer) {
        // Muestra la pista oculta
        document.getElementById('hiddenHint').style.display = 'block';

        // Oculta el contenedor de reto y la sección de entrada
        document.getElementById('retoContainer').style.display = 'none';
        document.getElementById('inputSection').style.display = 'none';

        // Limpia el mensaje de resultado
        resultMessage.innerText = "Bien! A seguir adelante";
    } else if(userInput === "diegoElUltimo10DeLasFlores"){

        document.getElementById('hiddenHint2').style.display = 'block';

        document.getElementById('retoContainer').style.display = 'none';
        document.getElementById('inputSection').style.display = 'none';
    }
    else {
        // Muestra el mensaje de respuesta incorrecta
        resultMessage.innerText = "Respuesta incorrecta. Intenta nuevamente.";
    }
});



function checkAnswer(number) {
    const userInput = document.getElementById(`userInput${number}`);
    const correctAnswer = document.querySelector(`#hintContainer${number} .input-section`).dataset.correctAnswer;

    if (userInput.value.trim().toLowerCase() === correctAnswer) {
        document.getElementById(`hintContainer${number}`).style.display = 'none';
        const nextHint = document.getElementById(`hintContainer${number + 1}`);
        if (nextHint) {
            nextHint.style.display = 'block';
        }
    } else {
        alert('Respuesta incorrecta. Intenta de nuevo.');
        userInput.value = ''; // Limpia el campo de entrada
    }
}
