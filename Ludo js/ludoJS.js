/*
    ********   Please DOUBLE CLICK to open my goti.   ********
*/

var clicked = true;
var winningChecks = {
    redWinningCheck0:0,
    redWinningCheck1:0,
    redWinningCheck2:0,
    redWinningCheck3:0,

    blueWinningCheck0:0,
    blueWinningCheck1:0,
    blueWinningCheck2:0,
    blueWinningCheck3:0,

    greenWinningCheck0:0,
    greenWinningCheck1:0,
    greenWinningCheck2:0,
    greenWinningCheck3:0,

    yellowWinningCheck0:0,  
    yellowWinningCheck1:0,
    yellowWinningCheck2:0,
    yellowWinningCheck3:0
};
var clickStatuses = {
    redclick0:0,
    redclick1:0,
    redclick2:0,
    redclick3:0,

    blueclick0:0,
    blueclick1:0,
    blueclick2:0,
    blueclick3:0,

    greenclick0:0,
    greenclick1:0,
    greenclick2:0,
    greenclick3:0,

    yellowclick0:0,  
    yellowclick1:0,
    yellowclick2:0,
    yellowclick3:0
};

var board = {
    red0:0, red1: 0, red2: 0, red3: 0,
    blue0: 0, blue1: 0, blue2: 0, blue3: 0,
    green0: 0, green1: 0, green2: 0, green3: 0,
    yellow0: 0, yellow1: 0, yellow2: 0, yellow3: 0
};

let dieValue = document.getElementById("dice");
let count = 0;
function openYourPawn(color,whichPawn,whichLoc)
{
    var pawn = document.getElementById(color + "Pawn" + whichPawn);
    pawn.addEventListener("click",function()
    {
        var fragment = document.createDocumentFragment();
        let openPawn = document.getElementById(whichLoc);
        fragment.appendChild(pawn);
        openPawn.appendChild(fragment);
        pawn.style.marginTop = 0;
        pawn.style.marginLeft = 0;
        board[color+whichPawn] = 1;
        for(let i=0;i<=3;i++){
            if(i==whichPawn){
                clickStatuses[color+"click"+whichPawn]=1;
            }
            else{
                clickStatuses[color+"click"+i]=0;
            }
        }
    });
}
let flag=0;
function redPathWinning(color,pawnNum,a,b)
{
    let pawn = color + "Pawn" + pawnNum;
    let curPawn = document.getElementById(pawn);
    let goTo = document.getElementById(a+"w"+b);                         //jidr rakhna hai
    var fragment = document.createDocumentFragment();
    fragment.appendChild(curPawn);
    goTo.appendChild(fragment);
    curPawn.style.marginTop = 0;
    curPawn.style.marginLeft = 0;
    winningChecks[color+"WinningCheck"+pawnNum] = 1;
    flag=1;
    for(let i=0;i<=3;i++){
        if(i==pawnNum){
            clickStatuses[color+"click"+pawnNum]=1;
        }
        else{
            clickStatuses[color+"click"+i]=0;
        }
    }
}

function WinYourPawn()
{

}
function moveYourPawn(parentId, color, pawnNum, redRollValue)
{ 
    if(color == "red" && parentId>=45 && parentId<=50)
    {
        if(parentId == 45)
        {
            if(redRollValue==6)
            {
                redPathWinning(color,pawnNum,"r","1");
            }
        }
        else if(parentId == 46)
        {
            if(redRollValue == 6 || redRollValue == 5)
            {
                redPathWinning(color, pawnNum, "r", (redRollValue-4));
            }

        }
        else if(parentId==47)
        {
            if(redRollValue == 4 || redRollValue == 5 || redRollValue == 6)
            {
                redPathWinning(color,pawnNum,"r",(redRollValue-3));
            }
        }
        else if(parentId==48)
        {
            if(redRollValue == 3 || redRollValue ==4 || redRollValue==5 || redRollValue==6)
            {
                redPathWinning(color,pawnNum,"r",(redRollValue-2));
            }
        }
        else if(parentId==49)
        {
            if(redRollValue != 1)
            {
                redPathWinning(color,pawnNum,"r",(redRollValue-1));
            }
        }
        else if(parentId=50)
        {
            if(redRollValue!=6)
            {
                redPathWinning(color,pawnNum,"r",redRollValue);
            }
        }
        
    }
    else if(color=="green"&&parentId>=32&&parentId<=37)
    {
        if(parentId==32)
        {
            if(redRollValue==6)
            {
                redPathWinning(color,pawnNum,"g","1");
            }
        }
        else if(parentId==33)
        {
            if(redRollValue == 6 || redRollValue == 5)
            {
                redPathWinning(color,pawnNum,"g",(redRollValue-4));
            }
        }
        else if(parentId==34){
            if(redRollValue == 4 || redRollValue == 5 || redRollValue == 6)
            {
                redPathWinning(color,pawnNum,"g",(redRollValue-3));
            }
        }
        else if(parentId==35){
            if(redRollValue == 3 || redRollValue ==4 || redRollValue==5 || redRollValue==6)
            {
                redPathWinning(color,pawnNum,"g",(redRollValue-2));
            }
        }
        else if(parentId==36){
            if(redRollValue != 1)
            {
                redPathWinning(color,pawnNum,"g",(redRollValue-1));
            }
        }
        else if(parentId==37){
            if(redRollValue!=6)
            {
                redPathWinning(color,pawnNum,"g",redRollValue);
            }
        }
    }
    else if(color=="blue"&&parentId>=6&&parentId<=11)
    {
        if(parentId==6)
        {
            if(redRollValue==6)
            {
                redPathWinning(color,pawnNum,"b","1");
            }
        }
        else if(parentId==7){
            if(redRollValue == 6 || redRollValue == 5)
            {
                redPathWinning(color,pawnNum,"b",(redRollValue-4));
            }
        }
        else if(parentId==8){
            if(redRollValue == 4 || redRollValue == 5 || redRollValue == 6)
            {
                redPathWinning(color,pawnNum,"b",(redRollValue-3));
            }
        }
        else if(parentId==9){
            if(redRollValue == 3 || redRollValue ==4 || redRollValue==5 || redRollValue==6)
            {
                redPathWinning(color,pawnNum,"b",(redRollValue-2));
            }
        }
        else if(parentId==10){
            if(redRollValue != 1)
            {
                redPathWinning(color,pawnNum,"b",(redRollValue-1));
            }
        }
        else if(parentId==11){
            if(redRollValue!=6)
            {
                redPathWinning(color,pawnNum,"b",redRollValue);
            }
        } 
    }
    else if(color=="yellow"&&parentId>=19&&parentId<=24)
    {
        if(parentId==19)
        {
            if(redRollValue==6)
            {
                redPathWinning(color,pawnNum,"y","1");
            }
        }
        else if(parentId==20){
            if(redRollValue == 6 || redRollValue == 5)
            {
                redPathWinning(color,pawnNum,"y",(redRollValue-4));
            }
        }
        else if(parentId==21){
            if(redRollValue == 4 || redRollValue == 5 || redRollValue == 6)
            {
                redPathWinning(color,pawnNum,"y",(redRollValue-3));
            }
        }
        else if(parentId==22){
            if(redRollValue == 3 || redRollValue ==4 || redRollValue==5 || redRollValue==6)
            {
                redPathWinning(color,pawnNum,"y",(redRollValue-2));
            }
        }
        else if(parentId==23){
            if(redRollValue != 1)
            {
                redPathWinning(color,pawnNum,"y",(redRollValue-1));
            }
        }
        else if(parentId==24){
            if(redRollValue!=6)
            {
                redPathWinning(color,pawnNum,"y",redRollValue);
            }
        } 
    }
    if(winningChecks[color+"WinningCheck"+pawnNum] == 0)
    {
        let moveSteps = parseInt(parentId) + redRollValue;
        moveSteps = moveSteps % 52;
        let pawn = color + "Pawn" + pawnNum;
        let curPawn=document.getElementById(pawn);
        let goTo = document.getElementById(moveSteps);              //jidr rakhna hai
        var fragment = document.createDocumentFragment();
        fragment.appendChild(curPawn);
        goTo.appendChild(fragment);
        curPawn.style.marginTop = 0;
        curPawn.style.marginLeft = 0;
        for(let i=0;i<=3;i++){
            if(i==pawnNum){
                clickStatuses[color+"click"+pawnNum]=1;
            }
            else{
                clickStatuses[color+"click"+i]=0;
            }
        }
    }
    if(winningChecks[color+"WinningCheck"+pawnNum] == 1)
    {
        let myPawn = color + "Pawn" + pawnNum;
        let curPawn = document.getElementById(myPawn);
        let myParentID=curPawn.parentElement.id;
        let parLastID = parseInt(myParentID.slice(-1));
        let val = parLastID + redRollValue;
        if(val>6)
        {
            //do nothing
        }
        else if(val==6)
        {
            alert("goti is reached at its destination.");
            curPawn.style.display="none";
        }
        else if(val<6)
        {
            let goTo;
            if(color=="red"){
                goTo = document.getElementById("rw"+val); 
            }
            else if(color=="green"){
                goTo = document.getElementById("gw"+val);              
            }
            else if(color=="blue"){
                goTo = document.getElementById("bw"+val);              //jidr rakhna hai
            }
            else if(color=="yellow"){
                goTo = document.getElementById("yw"+val);              //jidr rakhna hai
            }
            
            var fragment = document.createDocumentFragment();
            fragment.appendChild(curPawn);
            goTo.appendChild(fragment);
            curPawn.style.marginTop = 0;
            curPawn.style.marginLeft = 0;
            for(let i=0;i<=3;i++){
                if(i==pawnNum){
                    clickStatuses[color+"click"+pawnNum]=1;
                }
                else{
                    clickStatuses[color+"click"+i]=0;
                }
            }
        }
    }
}

dieValue.onclick = function(){
            clickStatuses["redclick0"]=0;
            clickStatuses["redclick1"]=0;
            clickStatuses["redclick2"]=0;
            clickStatuses["redclick3"]=0;
            clickStatuses["blueclick0"]=0;
            clickStatuses["blueclick1"]=0;
            clickStatuses["blueclick2"]=0;
            clickStatuses["blueclick3"]=0;
            clickStatuses["greenclick0"]=0;
            clickStatuses["greenclick1"]=0;
            clickStatuses["greenclick2"]=0;
            clickStatuses["greenclick3"]=0;
            clickStatuses["yellowclick0"]=0;
            clickStatuses["yellowclick1"]=0;
            clickStatuses["yellowclick2"]=0;
            clickStatuses["yellowclick3"]=0;

        let turn = document.getElementById("turn");
        count = count % 4;
        if(count == 0)                         //redTurn
        {
            let redRollValue = Math.floor((Math.random() * 6) + 1);
            let b = window.setInterval(displayImage, 50);
            let a=0;
            function displayImage(){
                if(a==20){
                    clearInterval(b);
                    var dice = document.getElementById("dice1");
                    dice.style.backgroundImage = "url(Images/" + redRollValue + ".jpg)";
                    dice.style.backgroundSize="cover";
                }
                else{
                    a++;
                    document.getElementById('dice1').style.backgroundImage = "url(Images/die.gif)";
                    document.getElementById('dice1').style.backgroundSize = "cover";
                }
            }
            

            document.getElementById("dieVal").innerHTML="Next : Blue Turn";
            document.getElementById("dieVal").style.color="#23f5ff";
            turn.innerHTML="-- Red Score --";
            turn.style.color = "#ff3030";
            //stuck(if koi goti nahi khuli)
            
            if(board["red0"] == 0 && board["red1"] == 0 && board["red2"] == 0 && board["red3"] == 0)
            {

                //agr koi b goti nahi khuli
                if(redRollValue == 6)              //goti khul skti
                {
                    //agr player pehli goti kholna chahy
                    var pawn0 = document.getElementById("redPawn0");
                    pawn0.addEventListener("click",function()
                    {
                        if(board["red0"] == 0 && board["red1"] == 0 && board["red2"] == 0 && board["red3"] == 0)
                        {
                            if(redRollValue==6)
                            {
                                openYourPawn("red", "0","0");
                                redRollValue=0;
                            }
                        }
                    });
                    
                    
                    //agr player doosri goti kholna chahy
                    var pawn1 = document.getElementById("redPawn1");
                    pawn1.addEventListener("click",function()
                    {
                        if(board["red0"] == 0 && board["red1"] == 0 && board["red2"] == 0 && board["red3"] == 0)
                        {
                            if(redRollValue==6)
                            {
                                openYourPawn("red", "1","0");
                                redRollValue=0;
                            }
                        }

                    });   
                    
                    //agr player teesri goti kholna chahy
                    var pawn2 = document.getElementById("redPawn2");
                    pawn2.addEventListener("click",function()
                    {
                        if(board["red0"] == 0 && board["red1"] == 0 && board["red2"] == 0 && board["red3"] == 0)
                        {
                            if(redRollValue==6)
                            {
                                openYourPawn("red", "2","0");
                                redRollValue=0;
                            }
                        }
                    });
                    
                    //agr player chothi goti kholna chahy
                    var pawn3 = document.getElementById("redPawn3");
                    pawn3.addEventListener("click",function()
                    {
                        if(board["red0"] == 0 && board["red1"] == 0 && board["red2"] == 0 && board["red3"] == 0)
                        {
                            if(redRollValue==6)
                            {
                                openYourPawn("red", "3","0");
                                redRollValue=0;
                            }
                        }
                    });                             
                }
                else
                {
                   // alert("red ghr ki goti nahi khuli qk 6 nahi aya die pe");
                }
            }
            else     //koi aik goti khuli hai red ghr ki
            {
                
                if(board["red0"]==1)               //red0 goti khuli hai aur player ne is ko chlanay k liye click kia hai
                {
                    var pawn0 = document.getElementById("redPawn0");
                    pawn0.addEventListener("click",function()
                    {
                        let parentId = pawn0.parentElement.id;
                        if(board["red0"] == 1  && clickStatuses["redclick1"]==0 && clickStatuses["redclick2"]==0 && clickStatuses["redclick3"]==0)          //red0 goti khuli hai aur player ne is ko chlanay k liye click kia hai
                        {
                            moveYourPawn(parentId,"red","0",redRollValue);
                            clickStatuses["redclick0"]=1;
                        }
                    });
                }
                else                        //red0 goti nahi khuli
                {
                    //agr player pehli red0 goti kholna chahy
                    if(redRollValue==6)
                    {
                        var pawn0 = document.getElementById("redPawn0");
                        pawn0.addEventListener("click",function()
                        { 
                            if(redRollValue==6 && board["red0"]==0)
                            {
                                openYourPawn("red", "0","0"); 
                                redRollValue=0;
                            }
                            
                        });   
                    }
                }
                if(board["red1"]==1)            //red1 goti khuli hai
                {
                    var pawn1 = document.getElementById("redPawn1");
                    pawn1.addEventListener("click",function()
                    {
                        let parentId = pawn1.parentElement.id;
                        if(board["red1"]==1 && clickStatuses["redclick0"]==0 && clickStatuses["redclick2"]==0 && clickStatuses["redclick3"]==0)            //red1 goti khuli hai
                        {
                            moveYourPawn(parentId,"red","1",redRollValue);
                            clickStatuses["redclick1"]=1;
                        }
                    });
                }
                else                            //red1 goti nahi khuli
                {
                    //agr player doosri red1 goti kholna chahy
                    if(redRollValue==6)
                    {
                        var pawn1 = document.getElementById("redPawn1");
                        pawn1.addEventListener("click",function()
                        {
                            if(redRollValue==6 && board["red1"]==0)
                            {
                                openYourPawn("red", "1","0");
                                redRollValue=0;
                            }
                            
                        });   
                    }

                }
                if(board["red2"]==1)          //red2 goti khuli hai
                {
                    var pawn2 = document.getElementById("redPawn2");
                    pawn2.addEventListener("click",function()
                    {
                        if(board["red2"]==1 && clickStatuses["redclick0"]==0 && clickStatuses["redclick1"]==0 && clickStatuses["redclick3"]==0)          //red2 goti khuli hai
                        {
                            let parentId = pawn2.parentElement.id;
                            moveYourPawn(parentId,"red","2",redRollValue);
                            clickStatuses["redclick2"]=1;
                        }
                    });
                }
                else                         //red3 goti nahi khuli
                {
                    //agr player teesri red1  goti kholna chahy
                    if(redRollValue==6)
                    {
                        var pawn2 = document.getElementById("redPawn2");
                        pawn2.addEventListener("click",function()
                        {
                            if(redRollValue==6 && board["red2"]==0)
                            {
                                openYourPawn("red", "2","0"); 
                                redRollValue=0;
                            }
                        });   
                    }
                }
                if(board["red3"]==1)          //red3 goti khuli hai
                {
                    var pawn3 = document.getElementById("redPawn3");
                    pawn3.addEventListener("click",function()
                    {
                        if(board["red3"]==1 &&  clickStatuses["redclick0"]==0 && clickStatuses["redclick1"]==0 && clickStatuses["redclick2"]==0) 
                        {
                            let parentId = pawn3.parentElement.id;
                            moveYourPawn(parentId,"red","3",redRollValue);
                            clickStatuses["redclick3"]=1;
                        }
                    });
                }
                else                          //red3 goti nahi khuli
                {
                    //agr player chothi red4  goti kholna chahy
                    if(redRollValue==6)
                    {
                        var pawn3 = document.getElementById("redPawn3");
                        pawn3.addEventListener("click",function()
                        {
                            if(redRollValue==6 && board["red3"]==0) 
                            {
                                openYourPawn("red", "3","0"); 
                                redRollValue=0;
                            }
                        });   
                    }
                }
            }
            if(redRollValue!=6){
                count++;
            }
            
        }
        else if(count==1)                      //Blue Turn
        {
            let blueRollValue = Math.floor((Math.random() * 6) + 1);
            let b = window.setInterval(displayImage, 50);
            let a=0;
            function displayImage(){
                if(a==20){
                    clearInterval(b);
                    var dice = document.getElementById("dice1");
                    dice.style.backgroundImage = "url(Images/" + blueRollValue + ".jpg)";
                    dice.style.backgroundSize="cover";
                }
                else{
                    a++;
                    document.getElementById('dice1').style.backgroundImage = "url(Images/die.gif)";
                    document.getElementById('dice1').style.backgroundSize = "cover";
                }
            }

            var dice = document.getElementById("dice1");
            dice.style.backgroundImage = "url(Images/" + blueRollValue + ".jpg)";
            dice.style.backgroundSize="cover";
            document.getElementById("dieVal").innerHTML="Next : Yellow Turn";
            document.getElementById("dieVal").style.color="yellow"
            turn.innerHTML="-- Blue Score --";
            turn.style.color = "#23f5ff";
            if(board["blue0"] == 0 && board["blue1"] == 0 && board["blue2"] == 0 && board["blue3"] == 0)
            {
                //agr koi b goti nahi khuli
                if(blueRollValue == 6)              //goti khul skti
                {
                    //agr player pehli goti kholna chahy
                    var pawn0 = document.getElementById("bluePawn0");
                    pawn0.addEventListener("click",function()
                    {
                        if(board["blue0"] == 0 && board["blue1"] == 0 && board["blue2"] == 0 && board["blue3"] == 0)
                        {
                            if(blueRollValue==6)
                            {
                                openYourPawn("blue", "0","13");
                                blueRollValue=0;
                            }
                        }
                    });
                    
                    
                    //agr player doosri goti kholna chahy
                    var pawn1 = document.getElementById("bluePawn1");
                    pawn1.addEventListener("click",function()
                    {
                        if(board["blue0"] == 0 && board["blue1"] == 0 && board["blue2"] == 0 && board["blue3"] == 0)
                        {
                            if(blueRollValue==6)
                            {
                                openYourPawn("blue", "1","13");
                                blueRollValue=0;
                            }
                        }

                    });   
                    
                    //agr player teesri goti kholna chahy
                    var pawn2 = document.getElementById("bluePawn2");
                    pawn2.addEventListener("click",function()
                    {
                        if(board["blue0"] == 0 && board["blue1"] == 0 && board["blue2"] == 0 && board["blue3"] == 0)
                        {
                            if(blueRollValue==6)
                            {
                                openYourPawn("blue", "2","13");
                                blueRollValue=0;
                            }
                        }
                    });
                    
                    //agr player chothi goti kholna chahy
                    var pawn3 = document.getElementById("bluePawn3");
                    pawn3.addEventListener("click",function()
                    {
                        if(board["blue0"] == 0 && board["blue1"] == 0 && board["blue2"] == 0 && board["blue3"] == 0)
                        {
                            if(blueRollValue==6)
                            {
                                openYourPawn("blue", "3","13");
                                blueRollValue=0;
                            }
                        }
                    });                             
                }
                else
                {
                   // alert("blue ghr ki goti nahi khuli qk 6 nahi aya die pe");
                }
            }
            else     //koi aik goti khuli hai blue ghr ki
            {
                
                if(board["blue0"]==1)               //blue0 goti khuli hai aur player ne is ko chlanay k liye click kia hai
                {
                    var pawn0 = document.getElementById("bluePawn0");
                    pawn0.addEventListener("click",function()
                    {
                        let parentId = pawn0.parentElement.id;
                        if(board["blue0"] == 1  && clickStatuses["blueclick1"]==0 && clickStatuses["blueclick2"]==0 && clickStatuses["blueclick3"]==0)          //blue0 goti khuli hai aur player ne is ko chlanay k liye click kia hai
                        {
                            moveYourPawn(parentId,"blue","0",blueRollValue);
                            clickStatuses["blueclick0"]=1;
                        }
                    });
                }
                else                        //blue0 goti nahi khuli
                {
                    //agr player pehli blue0 goti kholna chahy
                    if(blueRollValue==6)
                    {
                        var pawn0 = document.getElementById("bluePawn0");
                        pawn0.addEventListener("click",function()
                        { 
                            if(blueRollValue==6 && board["blue0"]==0)
                            {
                                openYourPawn("blue", "0","13"); 
                                blueRollValue=0;
                            }
                            
                        });   
                    }
                }
                if(board["blue1"]==1)            //blue1 goti khuli hai
                {
                    var pawn1 = document.getElementById("bluePawn1");
                    pawn1.addEventListener("click",function()
                    {
                        let parentId = pawn1.parentElement.id;
                        if(board["blue1"]==1 && clickStatuses["blueclick0"]==0 && clickStatuses["blueclick2"]==0 && clickStatuses["blueclick3"]==0)            //blue1 goti khuli hai
                        {
                            moveYourPawn(parentId,"blue","1",blueRollValue);
                            clickStatuses["blueclick1"]=1;
                        }
                    });
                }
                else                            //blue1 goti nahi khuli
                {
                    //agr player doosri blue1 goti kholna chahy
                    if(blueRollValue==6)
                    {
                        var pawn1 = document.getElementById("bluePawn1");
                        pawn1.addEventListener("click",function()
                        {
                            if(blueRollValue==6 && board["blue1"]==0)
                            {
                                openYourPawn("blue", "1","13");
                                blueRollValue=0;
                            }
                            
                        });   
                    }

                }
                if(board["blue2"]==1)          //blue2 goti khuli hai
                {
                    var pawn2 = document.getElementById("bluePawn2");
                    pawn2.addEventListener("click",function()
                    {
                        if(board["blue2"]==1 && clickStatuses["blueclick0"]==0 && clickStatuses["blueclick1"]==0 && clickStatuses["blueclick3"]==0)          //blue2 goti khuli hai
                        {
                            let parentId = pawn2.parentElement.id;
                            moveYourPawn(parentId,"blue","2",blueRollValue);
                            clickStatuses["blueclick2"]=1;
                        }
                    });
                }
                else                         //blue3 goti nahi khuli
                {
                    //agr player teesri blue1  goti kholna chahy
                    if(blueRollValue==6)
                    {
                        var pawn2 = document.getElementById("bluePawn2");
                        pawn2.addEventListener("click",function()
                        {
                            if(blueRollValue==6 && board["blue2"]==0)
                            {
                                openYourPawn("blue", "2","13"); 
                                blueRollValue=0;
                            }
                        });   
                    }
                }
                if(board["blue3"]==1)          //blue3 goti khuli hai
                {
                    var pawn3 = document.getElementById("bluePawn3");
                    pawn3.addEventListener("click",function()
                    {
                        if(board["blue3"]==1 &&  clickStatuses["blueclick0"]==0 && clickStatuses["blueclick1"]==0 && clickStatuses["blueclick2"]==0) 
                        {
                            let parentId = pawn3.parentElement.id;
                            moveYourPawn(parentId,"blue","3",blueRollValue);
                            clickStatuses["blueclick3"]=1;
                        }
                    });
                }
                else                          //blue3 goti nahi khuli
                {
                    //agr player chothi blue4  goti kholna chahy
                    if(blueRollValue==6)
                    {
                        var pawn3 = document.getElementById("bluePawn3");
                        pawn3.addEventListener("click",function()
                        {
                            if(blueRollValue==6 && board["blue3"]==0) 
                            {
                                openYourPawn("blue", "3","13"); 
                                blueRollValue=0;
                            }
                        });   
                    }
                }
            }
            if(blueRollValue!=6){
                count++;
            }
        }
        else if(count==2)                   //yellow turn
        {
            let yellowRollValue = Math.floor((Math.random() * 6) + 1);
            let b = window.setInterval(displayImage, 50);
            let a=0;
            function displayImage(){
                if(a==20)
                {
                    clearInterval(b);
                    var dice = document.getElementById("dice1");
                    dice.style.backgroundImage = "url(Images/" + yellowRollValue + ".jpg)";
                    dice.style.backgroundSize="cover";
                }
                else{
                    a++;
                    document.getElementById('dice1').style.backgroundImage = "url(Images/die.gif)";
                    document.getElementById('dice1').style.backgroundSize = "cover";
                }
            }

            
            var dice = document.getElementById("dice1");
            dice.style.backgroundImage = "url(Images/" + yellowRollValue + ".jpg)";
            dice.style.backgroundSize="cover";
            document.getElementById("dieVal").innerHTML="Next : Green Turn";
            document.getElementById("dieVal").style.color="#1dff1d";
            turn.innerHTML="-- Yellow Score --";
            turn.style.color = "yellow";
            if(board["yellow0"] == 0 && board["yellow1"] == 0 && board["yellow2"] == 0 && board["yellow3"] == 0)
            {
                //agr koi b goti nahi khuli
                if(yellowRollValue == 6)              //goti khul skti
                {
                    //agr player pehli goti kholna chahy
                    var pawn0 = document.getElementById("yellowPawn0");
                    pawn0.addEventListener("click",function()
                    {
                        if(board["yellow0"] == 0 && board["yellow1"] == 0 && board["yellow2"] == 0 && board["yellow3"] == 0)
                        {
                            if(yellowRollValue==6)
                            {
                                openYourPawn("yellow", "0","26");
                                yellowRollValue=0;
                            }
                        }
                    });
                    
                    
                    //agr player doosri goti kholna chahy
                    var pawn1 = document.getElementById("yellowPawn1");
                    pawn1.addEventListener("click",function()
                    {
                        if(board["yellow0"] == 0 && board["yellow1"] == 0 && board["yellow2"] == 0 && board["yellow3"] == 0)
                        {
                            if(yellowRollValue==6)
                            {
                                openYourPawn("yellow", "1","26");
                                yellowRollValue=0;
                            }
                        }

                    });   
                    
                    //agr player teesri goti kholna chahy
                    var pawn2 = document.getElementById("yellowPawn2");
                    pawn2.addEventListener("click",function()
                    {
                        if(board["yellow0"] == 0 && board["yellow1"] == 0 && board["yellow2"] == 0 && board["yellow3"] == 0)
                        {
                            if(yellowRollValue==6)
                            {
                                openYourPawn("yellow", "2","26");
                                yellowRollValue=0;
                            }
                        }
                    });
                    
                    //agr player chothi goti kholna chahy
                    var pawn3 = document.getElementById("yellowPawn3");
                    pawn3.addEventListener("click",function()
                    {
                        if(board["yellow0"] == 0 && board["yellow1"] == 0 && board["yellow2"] == 0 && board["yellow3"] == 0)
                        {
                            if(yellowRollValue==6)
                            {
                                openYourPawn("yellow", "3","26");
                                yellowRollValue=0;
                            }
                        }
                    });                             
                }
                else
                {
                   // alert("yellow ghr ki goti nahi khuli qk 6 nahi aya die pe");
                }
            }
            else     //koi aik goti khuli hai yellow ghr ki
            {
                
                if(board["yellow0"]==1)               //yellow0 goti khuli hai aur player ne is ko chlanay k liye click kia hai
                {
                    var pawn0 = document.getElementById("yellowPawn0");
                    pawn0.addEventListener("click",function()
                    {
                        let parentId = pawn0.parentElement.id;
                        if(board["yellow0"] == 1  && clickStatuses["yellowclick1"]==0 && clickStatuses["yellowclick2"]==0 && clickStatuses["yellowclick3"]==0)          //yellow0 goti khuli hai aur player ne is ko chlanay k liye click kia hai
                        {
                            moveYourPawn(parentId,"yellow","0",yellowRollValue);
                            clickStatuses["yellowclick0"]=1;
                        }
                    });
                }
                else                        //yellow0 goti nahi khuli
                {
                    //agr player pehli yellow0 goti kholna chahy
                    if(yellowRollValue==6)
                    {
                        var pawn0 = document.getElementById("yellowPawn0");
                        pawn0.addEventListener("click",function()
                        { 
                            if(yellowRollValue==6 && board["yellow0"]==0)
                            {
                                openYourPawn("yellow", "0","26"); 
                                yellowRollValue=0;
                            }
                            
                        });   
                    }
                }
                if(board["yellow1"]==1)            //yellow1 goti khuli hai
                {
                    var pawn1 = document.getElementById("yellowPawn1");
                    pawn1.addEventListener("click",function()
                    {
                        let parentId = pawn1.parentElement.id;
                        if(board["yellow1"]==1 && clickStatuses["yellowclick0"]==0 && clickStatuses["yellowclick2"]==0 && clickStatuses["yellowclick3"]==0)            //yellow1 goti khuli hai
                        {
                            moveYourPawn(parentId,"yellow","1",yellowRollValue);
                            clickStatuses["yellowclick1"]=1;
                        }
                    });
                }
                else                            //yellow1 goti nahi khuli
                {
                    //agr player doosri yellow1 goti kholna chahy
                    if(yellowRollValue==6)
                    {
                        var pawn1 = document.getElementById("yellowPawn1");
                        pawn1.addEventListener("click",function()
                        {
                            if(yellowRollValue==6 && board["yellow1"]==0)
                            {
                                openYourPawn("yellow", "1","26");
                                yellowRollValue=0;
                            }
                            
                        });   
                    }

                }
                if(board["yellow2"]==1)          //yellow2 goti khuli hai
                {
                    var pawn2 = document.getElementById("yellowPawn2");
                    pawn2.addEventListener("click",function()
                    {
                        if(board["yellow2"]==1 && clickStatuses["yellowclick0"]==0 && clickStatuses["yellowclick1"]==0 && clickStatuses["yellowclick3"]==0)          //yellow2 goti khuli hai
                        {
                            let parentId = pawn2.parentElement.id;
                            moveYourPawn(parentId,"yellow","2",yellowRollValue);
                            clickStatuses["yellowclick2"]=1;
                        }
                    });
                }
                else                         //yellow3 goti nahi khuli
                {
                    //agr player teesri yellow1  goti kholna chahy
                    if(yellowRollValue==6)
                    {
                        var pawn2 = document.getElementById("yellowPawn2");
                        pawn2.addEventListener("click",function()
                        {
                            if(yellowRollValue==6 && board["yellow2"]==0)
                            {
                                openYourPawn("yellow", "2","26"); 
                                yellowRollValue=0;
                            }
                        });   
                    }
                }
                if(board["yellow3"]==1)          //yellow3 goti khuli hai
                {
                    var pawn3 = document.getElementById("yellowPawn3");
                    pawn3.addEventListener("click",function()
                    {
                        if(board["yellow3"]==1 &&  clickStatuses["yellowclick0"]==0 && clickStatuses["yellowclick1"]==0 && clickStatuses["yellowclick2"]==0) 
                        {
                            let parentId = pawn3.parentElement.id;
                            moveYourPawn(parentId,"yellow","3",yellowRollValue);
                            clickStatuses["yellowclick3"]=1;
                        }
                    });
                }
                else                          //yellow3 goti nahi khuli
                {
                    //agr player chothi yellow4  goti kholna chahy
                    if(yellowRollValue==6)
                    {
                        var pawn3 = document.getElementById("yellowPawn3");
                        pawn3.addEventListener("click",function()
                        {
                            if(yellowRollValue==6 && board["yellow3"]==0) 
                            {
                                openYourPawn("yellow", "3","26"); 
                                yellowRollValue=0;
                            }
                        });   
                    }
                }
            }
            if(yellowRollValue!=6){
                count++;
            }
        }
        else if(count==3)                   //green turn
        {
            let greenRollValue = Math.floor((Math.random() * 6) + 1);
            let b = window.setInterval(displayImage, 50);
            let a=0;
            function displayImage(){
                if(a==20){
                    clearInterval(b);
                    var dice = document.getElementById("dice1");
                    dice.style.backgroundImage = "url(Images/" + greenRollValue + ".jpg)";
                    dice.style.backgroundSize="cover";
                }
                else{
                    a++;
                    document.getElementById('dice1').style.backgroundImage = "url(Images/die.gif)";
                    document.getElementById('dice1').style.backgroundSize = "cover";
                }
            }
            var dice = document.getElementById("dice1");
            dice.style.backgroundImage = "url(Images/" + greenRollValue + ".jpg)";
            dice.style.backgroundSize="cover";
            document.getElementById("dieVal").innerHTML="Next : Red Turn";
            document.getElementById("dieVal").style.color="#ff3030";
            turn.innerHTML="-- Green Score --";
            turn.style.color = "#1dff1d";
            if(board["green0"] == 0 && board["green1"] == 0 && board["green2"] == 0 && board["green3"] == 0)
            {
                //agr koi b goti nahi khuli
                if(greenRollValue == 6)              //goti khul skti
                {
                    //agr player pehli goti kholna chahy
                    var pawn0 = document.getElementById("greenPawn0");
                    pawn0.addEventListener("click",function()
                    {
                        if(board["green0"] == 0 && board["green1"] == 0 && board["green2"] == 0 && board["green3"] == 0)
                        {
                            if(greenRollValue==6)
                            {
                                openYourPawn("green", "0","39");
                                greenRollValue=0;
                            }
                        }
                    });
                    
                    
                    //agr player doosri goti kholna chahy
                    var pawn1 = document.getElementById("greenPawn1");
                    pawn1.addEventListener("click",function()
                    {
                        if(board["green0"] == 0 && board["green1"] == 0 && board["green2"] == 0 && board["green3"] == 0)
                        {
                            if(greenRollValue==6)
                            {
                                openYourPawn("green", "1","39");
                                greenRollValue=0;
                            }
                        }

                    });   
                    
                    //agr player teesri goti kholna chahy
                    var pawn2 = document.getElementById("greenPawn2");
                    pawn2.addEventListener("click",function()
                    {
                        if(board["green0"] == 0 && board["green1"] == 0 && board["green2"] == 0 && board["green3"] == 0)
                        {
                            if(greenRollValue==6)
                            {
                                openYourPawn("green", "2","39");
                                greenRollValue=0;
                            }
                        }
                    });
                    
                    //agr player chothi goti kholna chahy
                    var pawn3 = document.getElementById("greenPawn3");
                    pawn3.addEventListener("click",function()
                    {
                        if(board["green0"] == 0 && board["green1"] == 0 && board["green2"] == 0 && board["green3"] == 0)
                        {
                            if(greenRollValue==6)
                            {
                                openYourPawn("green", "3","39");
                                greenRollValue=0;
                            }
                        }
                    });                             
                }
                else
                {
                   // alert("green ghr ki goti nahi khuli qk 6 nahi aya die pe");
                }
            }
            else     //koi aik goti khuli hai green ghr ki
            {
                
                if(board["green0"]==1)               //green0 goti khuli hai aur player ne is ko chlanay k liye click kia hai
                {
                    var pawn0 = document.getElementById("greenPawn0");
                    pawn0.addEventListener("click",function()
                    {
                        let parentId = pawn0.parentElement.id;
                        if(board["green0"] == 1  && clickStatuses["greenclick1"]==0 && clickStatuses["greenclick2"]==0 && clickStatuses["greenclick3"]==0)          //green0 goti khuli hai aur player ne is ko chlanay k liye click kia hai
                        {
                            moveYourPawn(parentId,"green","0",greenRollValue);
                            clickStatuses["greenclick0"]=1;
                        }
                    });
                }
                else                        //green0 goti nahi khuli
                {
                    //agr player pehli green0 goti kholna chahy
                    if(greenRollValue==6)
                    {
                        var pawn0 = document.getElementById("greenPawn0");
                        pawn0.addEventListener("click",function()
                        { 
                            if(greenRollValue==6 && board["green0"]==0)
                            {
                                openYourPawn("green", "0","39"); 
                                greenRollValue=0;
                            }
                            
                        });   
                    }
                }
                if(board["green1"]==1)            //green1 goti khuli hai
                {
                    var pawn1 = document.getElementById("greenPawn1");
                    pawn1.addEventListener("click",function()
                    {
                        let parentId = pawn1.parentElement.id;
                        if(board["green1"]==1 && clickStatuses["greenclick0"]==0 && clickStatuses["greenclick2"]==0 && clickStatuses["greenclick3"]==0)            //green1 goti khuli hai
                        {
                            moveYourPawn(parentId,"green","1",greenRollValue);
                            clickStatuses["greenclick1"]=1;
                        }
                    });
                }
                else                            //green1 goti nahi khuli
                {
                    //agr player doosri green1 goti kholna chahy
                    if(greenRollValue==6)
                    {
                        var pawn1 = document.getElementById("greenPawn1");
                        pawn1.addEventListener("click",function()
                        {
                            if(greenRollValue==6 && board["green1"]==0)
                            {
                                openYourPawn("green", "1","39");
                                greenRollValue=0;
                            }
                            
                        });   
                    }

                }
                if(board["green2"]==1)          //green2 goti khuli hai
                {
                    var pawn2 = document.getElementById("greenPawn2");
                    pawn2.addEventListener("click",function()
                    {
                        if(board["green2"]==1 && clickStatuses["greenclick0"]==0 && clickStatuses["greenclick1"]==0 && clickStatuses["greenclick3"]==0)          //green2 goti khuli hai
                        {
                            let parentId = pawn2.parentElement.id;
                            moveYourPawn(parentId,"green","2",greenRollValue);
                            clickStatuses["greenclick2"]=1;
                        }
                    });
                }
                else                         //green3 goti nahi khuli
                {
                    //agr player teesri green1  goti kholna chahy
                    if(greenRollValue==6)
                    {
                        var pawn2 = document.getElementById("greenPawn2");
                        pawn2.addEventListener("click",function()
                        {
                            if(greenRollValue==6 && board["green2"]==0)
                            {
                                openYourPawn("green", "2","39"); 
                                greenRollValue=0;
                            }
                        });   
                    }
                }
                if(board["green3"]==1)          //green3 goti khuli hai
                {
                    var pawn3 = document.getElementById("greenPawn3");
                    pawn3.addEventListener("click",function()
                    {
                        if(board["green3"]==1 &&  clickStatuses["greenclick0"]==0 && clickStatuses["greenclick1"]==0 && clickStatuses["greenclick2"]==0) 
                        {
                            let parentId = pawn3.parentElement.id;
                            moveYourPawn(parentId,"green","3",greenRollValue);
                            clickStatuses["greenclick3"]=1;
                        }
                    });
                }
                else                          //green3 goti nahi khuli
                {
                    //agr player chothi green4  goti kholna chahy
                    if(greenRollValue==6)
                    {
                        var pawn3 = document.getElementById("greenPawn3");
                        pawn3.addEventListener("click",function()
                        {
                            if(greenRollValue==6 && board["green3"]==0) 
                            {
                                openYourPawn("green", "3","39"); 
                                greenRollValue=0;
                            }
                        });   
                    }
                }
            }
            if(greenRollValue!=6){
                count++;
            }
        
        }
}
