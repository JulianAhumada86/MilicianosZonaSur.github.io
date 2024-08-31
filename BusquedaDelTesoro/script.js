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
