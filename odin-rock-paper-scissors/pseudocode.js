/* Desc: Game of RPS has 3 elements (Rock, Paper or Scissor) & 3 outcomes (Winner, Loser(s) & Tie)

   Rock beats Scissors but loses against Paper,
   Paper beats Rock but loses against Scissors,
   Scissors beat Paper but loses against Rock. 

   Scissor < Rock      < Paper
   Rock    < Paper     < Scissors
   Paper   < Scissors  < Rock

   Note: If both players chooses the same element then only the outcome will be a tie
*/

/* Pseudocode
   0. Declare a constant array of RPS
      0. We only have 3 elements Rock, Paper and Scissor. Each pair of two of these will have a winner & loser
            Rock beats Scissors. Winner = Rock. Loser = Scissor
            Paper beats Rock. Winner = Paper. Loser = Rock
            Scissor beats Paper. Winner = Scissor. Loser = Paper
         Each pair will have a winner & a loser. Maybe we can use a data structure to hardcode this constraint
      1. We can define some constraints to work with
            0 = Rock, 1 = Paper, 2 = Scissors
         Now. We can't actually declare that 0 is rock. That's why we need a way to "mimic" this sort of behavior
         Turns out, there is one thing in CS called Arrays. It can store data in it which we can reference/call using numbers or how they like to call it, index
         Thus, we declare an array and PURPOSEFULLY hardcode "ROCK" @ 0th index, "PAPER" @ 1st index, "SCISSORS" @ 2nd(or last) index
            RPS_WINNERS = ["ROCK", "PAPER", "SCISSORS"]

         If we do RPS_WINNERS[0] we get ROCK, RPS_WINNERS[1] we get PAPER.

         Similarly, we can declare an array which contains loser of each pair.
            RPS_LOSERS = ["SCISSORS", "ROCK", "PAPER"]

      

   1. Get the user's choice
      1. Declare a variable & use prompt() to get the input
      2. Check if the input is valid
         1. If the input is either Rock, paper or scissor (Case insensitivity: allowed)
            1. Return this
            2. As per MDN, there is an array object method called indexOf() which returns the index of the given value
         2. Else, Keep asking them for valid input again & again

   2. Get the PC's choice & store it in a variable
      1. Declare a variable to store PC's choice
      2. Store a either Rock or Paper or Scissor chosen at random
         1. JS has built-in method called Math.Random() which returns a value between 0 & 1 (Floating point!)
            1. There is another built-in function called Math.floor() which rounds off the value
            2. We can multiple Math.random return value by 3 (Why? Because there are only 3 elements in RPS)
            3. After that we can round it off using Math.floor()
            4. Don't understand why the math part works. Stackoverflow helped me here
         2. Use this random number to access an element RPS_WINNERS array & store it in a variable
      3. Return this variable, this is the PC's choice

   3. Compare choices to see who won
      1. Check if user & pc has the same choice
         1. Return Tied!
      2. Check if user's choice LOSER contains Pc's choice
         1. Return You won!
      3. Otherwise
         1. Return You lose!

    4. Play 5 matches repeatedly asking the user & PC their choices
    4. Exit out of the program.

    Notes:
            1. Since we have constant elements like Rock, Paper & Scissor. We can hardcode them in our code.
            2. Each element can beat one element & be beaten by some other element
            3. Maybe we can store which element beats whom to find out if the user is winner or loser.
            4. Like: Rock = Scissors, Paper = Rock, Scissors = Paper
            5. We can store it inside of an array: RPS = [Scissors, Rock, Paper]
*/