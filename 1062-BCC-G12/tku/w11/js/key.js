var ansCode = Math.floor(Math.random() * 99 + 1);
var guessNum;
var minCode=1;
var maxCode=99;
var counter=0;

console.log("ansCode = " + ansCode); 
function setSmoke(counter){
    switch(counter){
        case 1:
            document.img1.src ="img/smoke.png"
            break;
        case 2:
            document.img2.src ="img/smoke.png"
            break;
        case 3:
            document.img3.src ="img/smoke.png"
            break;
        case 4:
            document.img4.src ="img/smoke.png"
            break;
        case 5:
            document.img5.src ="img/smoke.png"
            break;
        case 6:
            document.img6.src ="img/smoke.png"
            alert("馬的法克你全部答錯了，廢物");
            restart();
            break;
    }
}

function doGuess(){
    guessNum = code.value;
    if(guessNum == ansCode){
        alert("恭喜答對了，總共答了"+(counter+1)+"次\n再試一次");
        restart();
    }
    else{
        if(guessNum > ansCode){
            maxCode = guessNum;
        }
        else{
            minCode = guessNum;
        }
        counter++;
        alert(minCode + " ~ " + maxCode);
        setSmoke(counter);
        code.value = "";
    }
}
    
function restart(){
        ansCode = Math.floor(Math.random() * 99 + 1);
        guessNum;
        counter=0;
        minCode=1;
        maxCode=99;
        code.value="";
        var bombs = document.querySelectorAll("bombs img");
        for(var i=0;i<bombs.length;i++){
            bomb[i].src="img/bomber.png"
        }
    }