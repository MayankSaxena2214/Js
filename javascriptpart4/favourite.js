let fav="avatar";
let guess=prompt("Guess the favourite movie");
while(true){
    if(guess=='quit'){
        console.log("You are quitting");
        break;
    }
    else if(guess==fav){
        console.log("You guessed correct");
        break;
    }
    else{
        console.log("Wrong answer");
    }
    guess=prompt("Guess again");
}