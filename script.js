const quizQuestions=[
    {
        question:"What is the full form of html?",
        optionA : "Hyperlinks and Text Markup Language",
        optionB : "Home Tool Markup Language",
        optionC : "Hyper Text Markup Language",
        optionD : "Hyperlink Textual Markup Language",
        correct : "optionC"   
    },
    {
        question:"Which HTML tag is used to define an unordered list?",
        optionA : "<ul>",
        optionB : "<ol>",
        optionC : "<li>",
        optionD : " <list>",
        correct : "optionA"
    },
    {
        question:"What is the purpose of the HTML <head> element?",
        optionA : "It represents the main content of the document.",
        optionB : " It contains metadata about the document.",
        optionC : "It defines a section that is quoted from another source.",
        optionD : "It displays a top-level heading for the document.",
        correct : "optionB"
    },
    {
        question:"Which attribute is used to link an external CSS file to an HTML document?",
        optionA : "src",
        optionB : "link",
        optionC : "href",
        optionD : "rel",
        correct : "optionB"
    },
    {
        question:"What does the HTML <img> tag represent?",
        optionA : " It defines a hyperlink.",
        optionB : "It creates an image element on the page.",
        optionC : " It represents a line break or new paragraph.",
        optionD : "It defines a table in the document.",
        correct : "optionB"
    }
];

const quiz= document.getElementById("myquiz");
const question= document.getElementById("questionn");
const answers= document.querySelectorAll(".answer");

const optionA= document.getElementById("optionAtext");
const optionB= document.getElementById("optionBtext");
const optionC= document.getElementById("optionCtext");
const optionD= document.getElementById("optionDtext");

const submitBtn= document.getElementById("submit");

const currentNum=document.getElementById("currentQ");
const totalQuestions=document.getElementById("totalQ");
const scored=document.getElementById("score");

var currentQuestion= 0
var scoreget= 0 ;


function clearSelection(){
    answers.forEach(answer =>{
        answer.checked=false 
    })   
}  

startQuiz()


function startQuiz(){
    clearSelection()  
    currentNum.innerText= currentQuestion+1;
    totalQuestions.innerText=quizQuestions.length;

    const questionData= quizQuestions[currentQuestion];
    question.innerText=questionData.question;
    optionA.innerText=questionData.optionA;
    optionB.innerText=questionData.optionB;
    optionC.innerText=questionData.optionC;
    optionD.innerText=questionData.optionD;
}  

function getChoice(){             
    let answer
    answers.forEach(choice =>{
        if(choice.checked)
          answer=choice.id
    })
    return answer
}

submitBtn.addEventListener("click",()=>{                          
    const answer = getChoice()   
    if(answer === quizQuestions[currentQuestion].correct){
        scoreget++;                                       
        scored.innerText=scoreget;                          
    }                                                           
    
    currentQuestion++;

    if(currentQuestion < quizQuestions.length){
        startQuiz()
    }
    else{
        quiz.innerHTML=`
        <h2>Your total score:${scoreget}<br>
        You answer ${scoreget} out of ${quizQuestions.length} questions correctly. </h2>
        <button id="submit" onclick="location.reload()">Reload</button>`
    }
})