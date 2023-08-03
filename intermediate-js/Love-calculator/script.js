
// // function loveCalculation(){
// // const randomNumber = Math.random() * 100;
// // const rangeofNumber = Math.floor(randomNumber) + 1;
// // console.log(rangeofNumber + "%");
// // }

// function messageafterCalculation(){
//     const randomNumber = Math.random() * 100;
//     const rangeofNumber = Math.floor(randomNumber) + 1;
//     console.log(rangeofNumber + "%");
//     if(1 <= rangeofNumber < 10){
//         console.log("Your love is not strong enough");
//     }
//     else if( 10 <= rangeofNumber < 20){
//         console.log("You can still expect something");
//     }
//     else if( 20 <= rangeofNumber < 30){
//         console.log("You are not that bad");
//     }
//     else if( 30 <= rangeofNumber < 40){
//         console.log("Its only from your side, my dear");
//     }
//     else if( 40 <= rangeofNumber < 50){
//         console.log("Don't lose hope! Your love score might be below 100, but there's still a chance for a beautiful connection.");
//     }
//     else if( 50 <= rangeofNumber < 60){
//         console.log("Even if the score isn't perfect, remember that love is about more than just numbers - hope never fades!");
//     }
//     else if( 60 <= rangeofNumber < 70){
//         console.log("A score below 100 doesn't mean it's over! Keep the faith and cherish the love you share");
//     }
//     else if( 70 <= rangeofNumber < 80){
//         console.log("Love is a journey, and your score is just one step. There's still hope for a brighter future together");
//     }
//     else if( 80 <= rangeofNumber < 90){
//         console.log("Hold on to hope! A love score below 100 doesn't define your potential for happiness");
//     }
//     else if( 90 <= rangeofNumber <= 100){
//         console.log("You're a perfect match! Your love score is excellent - congratulations!");
//     }
//     else{
//         console.log("Something went wrong");
//     }
// }

/*
function messageafterCalculation() {
    const randomNumber = Math.random() * 100;
    const rangeofNumber = Math.floor(randomNumber) + 1;
    document.querySelector(".js-love-percent").innerHTML = console.log(rangeofNumber + "%");
    
    if (1 <= rangeofNumber && rangeofNumber < 10) {
        console.log("Your love is not strong enough");
    } 
    else if (10 <= rangeofNumber && rangeofNumber < 20) {
        console.log("You can still expect something");
    } 
    else if (20 <= rangeofNumber && rangeofNumber < 30) {
        console.log("You are not that bad");
    } 
    else if (30 <= rangeofNumber && rangeofNumber < 40) {
        console.log("Its only from your side, my dear");
    } 
    else if (40 <= rangeofNumber && rangeofNumber < 50) {
        console.log("Don't lose hope! Your love score might be below 100, but there's still a chance for a beautiful connection.");
    } 
    else if (50 <= rangeofNumber && rangeofNumber < 60) {
        console.log("Even if the score isn't perfect, remember that love is about more than just numbers - hope never fades!");
    } 
    else if (60 <= rangeofNumber && rangeofNumber < 70) {
        console.log("A score below 100 doesn't mean it's over! Keep the faith and cherish the love you share");
    } 
    else if (70 <= rangeofNumber && rangeofNumber < 80) {
        console.log("Love is a journey, and your score is just one step. There's still hope for a brighter future together");
    } 
    else if (80 <= rangeofNumber && rangeofNumber < 90) {
        console.log("Hold on to hope! A love score below 100 doesn't define your potential for happiness");
    } 
    else if (90 <= rangeofNumber && rangeofNumber <= 100) {
        console.log("You're a perfect match! Your love score is excellent - congratulations!");
    } 
    else {
        console.log("Something went wrong");
    }
}

//document.querySelector(".js-love-percent").innerHTML = console.log(rangeofNumber + "%");
document.querySelector(".js-message-saver").innerHTML = messageafterCalculation();
*/

function messageafterCalculation() {
    const randomNumber = Math.random() * 100;
    const rangeofNumber = Math.floor(randomNumber) + 1;
    const resultElement = document.querySelector(".js-love-percent");
    
    resultElement.innerHTML = rangeofNumber + "%";
    
    if (1 <= rangeofNumber && rangeofNumber < 10) {
        resultElement.innerHTML += " - Your love is not strong enough";
    } 
    else if (10 <= rangeofNumber && rangeofNumber < 20) {
        resultElement.innerHTML += " - You can still expect something";
    } 
    else if (20 <= rangeofNumber && rangeofNumber < 30) {
        resultElement.innerHTML += " - You are not that bad";
    } 
    else if (30 <= rangeofNumber && rangeofNumber < 40) {
        resultElement.innerHTML += " - Its only from your side, my dear";
    } 
    else if (40 <= rangeofNumber && rangeofNumber < 50) {
        resultElement.innerHTML += " - Don't lose hope! Your love score might be below 100, but there's still a chance for a beautiful connection.";
    } 
    else if (50 <= rangeofNumber && rangeofNumber < 60) {
        resultElement.innerHTML += " - Even if the score isn't perfect, remember that love is about more than just numbers - hope never fades!";
    } 
    else if (60 <= rangeofNumber && rangeofNumber < 70) {
        resultElement.innerHTML += " - A score below 100 doesn't mean it's over! Keep the faith and cherish the love you share";
    } 
    else if (70 <= rangeofNumber && rangeofNumber < 80) {
        resultElement.innerHTML += " - Love is a journey, and your score is just one step. There's still hope for a brighter future together";
    } 
    else if (80 <= rangeofNumber && rangeofNumber < 90) {
        resultElement.innerHTML += " - Hold on to hope! A love score below 100 doesn't define your potential for happiness";
    } 
    else if (90 <= rangeofNumber && rangeofNumber <= 100) {
        resultElement.innerHTML += " - You're a perfect match! Your love score is excellent - congratulations!";
    } 
    else {
        resultElement.innerHTML += " - Something went wrong";
    }
}

// Call the function to update the content of the element with the class "js-love-percent"
messageafterCalculation();
