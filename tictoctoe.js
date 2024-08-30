var turn = 1;
var state = [2,2,2,2,2,2,2,2,2];
var gamestatus = 1;
var winposition = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

function ontap(e,i)
 {
            
           if(state[i]==2 && gamestatus == 1)
                {
           
                    if(turn == 1)
            {

                
                e.innerHTML = "<img src='cross.jpg'/>";
                hint.innerHTML = "X Turn";
                turn =0;
                  state[i]=1;
            }

            else if(turn == 0)
                {
                e.innerHTML= "<img src='zero.jpg'/>";
                hint.innerHTML = "O Turn";
                turn =1;
                state[i]=0;
            }
        }



        //check winner
       var winner = checkwinner();
       if(winner == 0) 
        {
                const msg = new SpeechSynthesisUtterance("O player won");
                window.speechSynthesis.speak(msg);
                hint.innerHTML= "O player win";
                hint.style.color= "skyblue";
                win.play();
                body1.style.backgroundImage="url('win.gif')";
             }   
        
        else if(winner == 1){
            const msg = new SpeechSynthesisUtterance("X player won");
            window.speechSynthesis.speak(msg);
            hint.innerHTML = "X player win";
            hint.style.color="skyblue";
             win.play();
             body1.style.backgroundImage = "url('win.gif')";
        }

    // check draw
    if(winner==2 && !state.includes(2))
    {
        const msg = new SpeechSynthesisUtterance("Game Draw");
        window.speechSynthesis.speak(msg);
    }

        }




function checkwinner() {
    var winner = 2;

     for(x of winposition)    //foreach loop
     {
        if(state[x[0]] == state[x[1]] && state[x[1]] == state[x[2]] && state[x[0]]!= 2)
        {
                winner = state[x[0]];
                gamestatus = 0;
                break;
        }
     }
     return winner;


  }