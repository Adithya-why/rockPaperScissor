let ywin;
let cwin;
let resultmsg;
let ypoint=cpoint=0;


function getcomputerChoice(){
    let compChoice;
    let choices = ["rock","paper","scissor"];
    compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
}



function singleRound(x,y=getcomputerChoice()){
    if (x.toLowerCase() === "rock" && y.toLowerCase() === "rock"){
        cwin = false;
        ywin = false;
        resultmsg = "Tie : rock vs rock";
           
    }

    else if(x.toLowerCase() === "rock" && y.toLowerCase() === "paper"){
        cwin = true;
        ywin = false;
        resultmsg = "Computer wins: rock vs paper";
        
        
    }

    else if(x.toLowerCase() === "rock" && y.toLowerCase() === "scissor"){
        ywin=true;
        cwin=false;
        resultmsg = "You win: rock vs scissor";
        
       
    }

    else if(x.toLowerCase() === "paper" && y.toLowerCase() === "rock"){
        ywin=true;
        cwin=false;
        resultmsg ="You win: paper vs rock";
        
        
    }

    else if(x.toLowerCase() === "paper" && y.toLowerCase() === "paper"){
        cwin = false;
        ywin = false;
        resultmsg ="Tie : paper vs paper";
        
        

    }


    else if(x.toLowerCase() === "paper" && y.toLowerCase() === "scissor"){
        cwin=true;
        ywin=false;
        resultmsg = "Computer wins : paper vs scissor";
        
        
    }


    else if(x.toLowerCase() === "scissor" && y.toLowerCase() === "rock"){
        cwin=true;
        ywin=false;
        resultmsg = "Computer wins: scissor vs rock";
        
    }

    else if(x.toLowerCase() === "scissor" && y.toLowerCase() === "paper"){
        ywin=true;
        cwin=false;
        resultmsg = "You win: scissor vs paper";
        
    }


    else if(x.toLowerCase() === "scissor" && y.toLowerCase() === "scissor"){
        cwin = false;
        ywin = false;
        resultmsg = "Tie: scissor vs scissors";
        
    }

    console.log(resultmsg);

    if(ywin==true && cwin==false){
        ypoint+=1;

       
        ypo.textContent=ypoint;
        cpo.textContent=cpoint;  
    
    
    }

    else if(cwin==true && ywin==false){
        cpoint+=1;
        ypo.textContent=ypoint;
        cpo.textContent=cpoint; 

        
    }

    else if(cwin == false && ywin == false){
        ypo.textContent=ypoint;
        cpo.textContent=cpoint; 
    }

    rest.textContent=resultmsg;


    if(ypoint>=5 || cpoint>=5){
        game();
    }

}




function game(){




   
    


if(ypoint>cpoint){
    gw.textContent="You win the game";
}

else if(cpoint>ypoint){
    gw.textContent="Computer wins the game";
}

else if(cpoint==ypoint){
    gw.textContent="Its a Tie, both win the game";
}


br.removeEventListener('click',function(){
    singleRound('rock');
})

bp.removeEventListener('click',function(){
    singleRound('paper');
})

bs.removeEventListener('click',function(){
    singleRound('scissor');
})


br.disabled=true;
bs.disabled=true;
bp.disabled=true;



}



const br = document.querySelector('#r');
const bp = document.querySelector('#p');
const bs = document.querySelector('#s');


const ypo = document.querySelector('.ypoint')
const cpo = document.querySelector('.cpoint')
const rest = document.querySelector('.rest')

const gw = document.querySelector('.gw');


br.addEventListener('click',function(){
    singleRound('rock');
})

bp.addEventListener('click',function(){
    singleRound('paper');
})

bs.addEventListener('click',function(){
    singleRound('scissor');
})
