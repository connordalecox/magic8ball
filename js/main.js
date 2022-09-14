function timeup(){
    document.getElementById("answer").innerHTML="8";
    document.getElementById("answer").style.fontSize="120px";
    document.getElementById("typehere").value="";
}
function myFunction() {
    let urQuestion = document.getElementById("typehere").value;
    if (urQuestion== "") {
        alert("Please enter a question")
    } else if (urQuestion== "is connor cool") {
        alert("*Of course! Congrats on finding the secret question!!* ");
        setTimeout(timeup, 250);
    } else {
        // getAnswer()
        // document.getElementById("question-asked").innerHTML=urQuestion;
        setTimeout(getAnswer, 500);
        document.getElementById("question-asked").innerHTML=urQuestion;
    }
    
} 
const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];

function getAnswer(){
    answers.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("answer").innerHTML=answers[0];
    document.getElementById("answer").style.fontSize="18px";
    setTimeout(timeup, 2500);

    

}

const askMe = document.getElementById("askme");

askMe.addEventListener('click', myFunction)

document.getElementById("typehere").onkeydown = function(e) {
    if(e.key === "Enter"){
        myFunction()
    }
}