infoText = document.getElementById('info');

num = Math.floor(Math.random() * 100) + 1;

document.getElementById('button').onclick = function () {
  guess = document.getElementById('input').value;
  
  if (guess < 101 && guess > -1) {
    if (guess > num) {
      infoText.textContent = "Thats too big!"
    } else if (guess < num) {
      infoText.textContent = "Thats too small!"
    } else {
      infoText.textContent = "Congratulations you guessed correctly! A new number has been chosen, can you guess that one too?"
      num = Math.floor(Math.random() * 100) + 1;
    }
    
  } else {
    infoText.textContent = "Error: Invalid Input!";
  }
}