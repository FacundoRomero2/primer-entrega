// Declaración de constantes y variables
const MAX_ATTEMPTS = 5; // Número máximo de intentos
let randomNumber = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
let attempts = 0; // Contador de intentos
let guessedNumbers = []; // Array para almacenar los números adivinados

// Función para iniciar el juego
function startGame() {
  alert("¡Bienvenido al juego de adivinanza de números!");
  playGame();
}

// Función principal del juego
function playGame() {
  while (attempts < MAX_ATTEMPTS) {
    let userGuess = prompt("Adivina un número entre 1 y 100:");

    // Verificar si el usuario canceló el prompt
    if (userGuess === null) {
      alert("Juego cancelado. ¡Hasta luego!");
      return;
    }

    // Convertir la entrada a un número
    userGuess = parseInt(userGuess);

    // Validar la entrada
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Por favor, ingresa un número válido entre 1 y 100.");
      continue; // Volver a pedir un número
    }

    // Almacenar el número adivinado
    guessedNumbers.push(userGuess);
    attempts++;

    // Comparar el número adivinado con el número aleatorio
    if (userGuess === randomNumber) {
      alert(
        `¡Felicidades! Adivinaste el número ${randomNumber} en ${attempts} intentos.`
      );
      console.log(`Número adivinado: ${userGuess}`);
      console.log(`Intentos realizados: ${attempts}`);
      console.log(`Números adivinados: ${guessedNumbers}`);
      return; // Terminar el juego
    } else if (userGuess < randomNumber) {
      alert("El número es más alto. Intenta de nuevo.");
    } else {
      alert("El número es más bajo. Intenta de nuevo.");
    }
  }

  // Si se alcanzan los intentos máximos
  alert(`Lo siento, has agotado tus intentos. El número era ${randomNumber}.`);
  console.log(`Número correcto: ${randomNumber}`);
  console.log(`Números adivinados: ${guessedNumbers}`);
}

// Iniciar el juego
startGame();
