const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Hillary Clinton",
    b: "Donald Trump",
    c: "Joe Bieden",
    d: "Barack Obama",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },

  {
    question: "Which one of these is a JavaScript package manager?",
    a: "Node.js",
    b: "TypeScript",
    c: "npm",
    d:"Firebase",
    correct: "c",
  },
];

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const ansEl = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deSelect();
    const currentQuestion = quizData[currentQuiz];
    questionE1.innerText = currentQuestion.question;

    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
    

}
function getSelected() {
    

    let answer = undefined;
    ansEl.forEach((e) => {
        if (e.checked) {
            answer = e.id;
        }
       
    });

    return answer;
}
function deSelect() {
    ansEl.forEach((e)=> {
        e.checked = false;
    });
    
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
 
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
       
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML =
            ` <h2>
                You answered correctly at ${score}/${quizData.length} questions.
              </h2>`
           
        }
    }
});