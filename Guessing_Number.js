// const rand_generated = Math.floor(Math.random()*10)

// while (true){
//     const usr_input = parseInt(prompt("Enter your Number"))
//     if (rand_generated != usr_input ) 
//     {
//         console.log(rand_generated)
//         alert("Try again Man!")
//     }
//     else{
//         console.log(rand_generated)
//         alert("Congratulation ! You guessed correctly")
//         let attempt = String(console().count())
//         console.log("You have attempted" +{attempt} +"times")
//         break
//     }
// }

let random_number = GenerateRandomNumber()
let attempt = 0;

function GenerateRandomNumber(){
    return Math.floor(Math.random()*10) +1
}


function guessnumber(){
    const usr_guess = document.getElementById('userinput')
    const usr_input = parseInt(usr_guess.value)
    const usr_result = document.getElementById('result')
    const usr_attempts = document.getElementById('attempt')
    // //console.log(usr_input)
    console.log(random_number)  //testing purpose
    if(!usr_guess.value  || usr_guess <= 0)
    {
        usr_result.textContent = "Please enter a valid number greater than 0."
        return
    }
    attempt++
    usr_attempts.textContent = `User Attempts : ${attempt}`


    if(usr_input == random_number)
    {
        usr_result.textContent = `🎉 Congratulations! You guessed the number ${random_number} correctly in ${attempt} attempts.`;
    }
    else if(usr_input < guessnumber)
    {
        usr_result.textContent = "The number is higher. Try again man!";
    }
    else
    {
        usr_result.textContent = "The number is lower. Try again man!";
    }

    usr_guess.value = "" ; 

}


function resetgame()
{
    const usr_result = document.getElementById('result')
    random_number = GenerateRandomNumber()
    attempt = 0;
    document.getElementById('attempt').textContent = "Attempts: 0";
    alert ("Come on man, lets go for another time ! 👍🏻")
    usr_result.textContent = "";

}

// do{

// }
// while{
//         if (rand_generated != usr_input ) 
//     {
//         console.log(rand_generated)
//         alert("Try again Man!")
//     }
//     else{
//         console.log(rand_generated)
//         alert("Congratulation ! You guessed correctly")
//         let attempt = String(console().count())
//         console.log("You have attempted" +{attempt} +"times")
//         break
//     }
// }
//     if (rand_generated != usr_input ) 
//     {
//         console.log(rand_generated)
//         alert("Try again Man!")
//     }
//     else{
//         console.log(rand_generated)
//         alert("Congratulation ! You guessed correctly")
//         let attempt = String(console().count())
//         console.log("You have attempted" +{attempt} +"times")
//         break
//     }