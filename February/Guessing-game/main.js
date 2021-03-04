// window.alert('You have 5 guesses. Guess 1-50');

// var answer = Math.floor(Math.random()*10+1)
// var guess = prompt("What's your guess?");
// var limit

// for (i=0; i<10; i++) {
//     if (answer == guess) {
//         window.alert("You got it right!")
//         break;
//     } else {
//         guess = prompt("Please try again");
//     }

//     if (limit == 0) {
//         console.log('You lost :(')
//     }
// }

function guessNumber() {
    var answer = Math.Floor(Math.Random()*51);

    let guess = prompt("What's your guess?")

    let limit = 5

    for(i=0; i<50; i++) {
        if (guess == answer) {
            window.alert("You got it right!")
            break;
        } else if (guess !== answer) {
            limit - 1
            window.alert("That's not the number, please try again. You've got " + limit + " left")
        } else {
            window.alert("Error 420");
        }

        if (limit == 0) {
            window.alert('sorry you have tried too many times');
        }
    }
}
