let enterBtn = document.getElementById("enterBtn")
let userString = document.getElementById("userString")

function reversal(userInput) {
	reversalDiv.innerHTML = userInput.split("").reverse().join("");
}

function alphabits(userInput) {
	alphabitsDiv.innerHTML = userInput.split("").sort().join("");
}

function palindrome(userInput) {
	alphabitsDiv.innerHTML = userInput.join("");
}

function palindrome(userInput) {
  var palCheck = userInput.toLowerCase().split('').reverse().join('')
  if (userInput === palCheck) {
  	palindromeDiv.innerHTML = "Your string is a palindrome"
  } else {
  	palindromeDiv.innerHTML = ""
  }
}

function events () {
	var userInput = userString.value;
	reversal(userInput);
	alphabits(userInput);
	palindrome(userInput);
	alphaOnly(event);
}

userString.addEventListener("keyup", function () {
		if (event.keyCode >= 65 && key <= 90) {
			return true;
		} else {
				alert("Enter only letters")
		}
	});

enterBtn.addEventListener("click", function() {
	events();
})

userString.addEventListener('keypress', function() {
	if (event.key === 'Enter') {
			events();
	}
});
