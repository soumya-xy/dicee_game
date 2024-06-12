var random1 =Math.floor((Math.random()*6)+1);
if(random1==1){
document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
if(random1==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    }
 if(random1==3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
        }
if(random1==4){
            document.querySelector(".img1").setAttribute("src","./images/dice4.png");
            }
if(random1==5){
                document.querySelector(".img1").setAttribute("src","./images/dice5.png");
                }
if(random1==6){
                    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
 }





 var random2 =Math.floor((Math.random()*6)+1);
 if(random2==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    }
    if(random2==2){
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        }
     if(random2==3){
            document.querySelector(".img2").setAttribute("src","./images/dice3.png");
            }
    if(random2==4){
                document.querySelector(".img2").setAttribute("src","./images/dice4.png");
                }
    if(random2==5){
                    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
                    }
    if(random2==6){
                        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
     }
      


if(random1>random2){
    document.querySelector("h1").textContent="player 1 wins!";

}
if(random1<random2){
    document.querySelector("h1").textContent="player 2 wins!";
    
}
if(random1==random2){
    document.querySelector("h1").textContent="draw!";
}