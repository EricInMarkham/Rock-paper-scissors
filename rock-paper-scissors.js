function rockPaperScissor (player1, player2){
	//Convert move to value
  let value1 = 0;
  let value2 = 0;
  
  switch (player1) {
  	case "rock": value1 = 0;
    break;
    case "paper": value1 = 1;
    break;
    case "scissors": value1 = 2;
  };
  
 switch (player2) {
  	case "rock": value2 = 0;
    break;
    case "paper": value2 = 1;
    break;
    case "scissors": value2 = 2;
  };
 
//Determine the winner
 if (value1 === value2) {
 		console.log("Player 1: " + player1 + "   " + "Player 2: " + player2 + " --> " + "Draw!");
 }
 else if (value1 ===0 && value2 ===2){
    console.log("Player 1: " + player1 + "   " + "Player 2: " + player2 + " --> " + "Player 1 wins!");
 }
 else if (value1===2 && value2===0){
    console.log("Player 1: " + player1 + "   " + "Player 2: " + player2 + " --> " + "Player 2 wins!");
 }
 else if (value1 > value2){
    console.log("Player 1: " + player1 + "   " + "Player 2: " + player2 + " --> " + "Player 1 wins!");
 }
 else {
    console.log("Player 1: " + player1 + "   " + "Player 2: " + player2 + " --> " + "Player 2 wins!");
 };
 

 
};

rockPaperScissor("scissors","scissors");
