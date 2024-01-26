// TIMER

let time = document.getElementById("time");

let count = 600

let timeInterval = setInterval(()=>{
    count--
    if(count <= 0){
        clearInterval(timeInterval)
        time.innerHTML = `Times Up!`
        submitQuiz()
        
    } else{
        let mins = Math.floor(count / 60)
        let sec = count % 60
        time.innerHTML = `${mins}:${sec}`
    }

},1000)

// ---------------------------------------------------------------------------------------------------

// SUBMIT THE QUIZ

function submitQuiz(){
  clearInterval(timeInterval)
  question.innerHTML = `You passed ${score} questions out of ${questions.length}`
  document.getElementById("sub").click()
}

// ---------------------------------------------------------------------------------------------------

// JSON DATA SET  - gen by ChatGPT

let questions = 

[
    {
      "question": "1. What is the name of the Dunder Mifflin regional manager in the first season?",
      "options": {
        "a": "a) Jim Halpert",
        "b": "b) Michael Scott",
        "c": "c) Dwight Schrute"
      },
      "correctAnswer": "b",
      "answered": false
    },
    {
      "question": "2. What is the name of Pam's fiance in the early seasons?",
      "options": {
        "a": "a) Andy Bernard",
        "b": "b) Roy Anderson",
        "c": "c) Ryan Howard"
      },
      "correctAnswer": "b",
      "answered": false
    },
    {
      "question": "3. Which character is known for their eccentric and often inappropriate behavior?",
      "options": {
        "a": "a) Kevin Malone",
        "b": "b) Creed Bratton",
        "c": "c) Oscar Martinez"
      },
      "correctAnswer": "b",
      "answered": false
    },
    {
      "question": "4. What is the name of the company that acquires Dunder Mifflin?",
      "options": {
        "a": "a) Sabre",
        "b": "b) Vance Refrigeration",
        "c": "c) Utica Paper"
      },
      "correctAnswer": "a",
      "answered": false
    },
    {
      "question": "5. Which character is known for their love of beets and identity as a beet farmer?",
      "options": {
        "a": "a) Jim Halpert",
        "b": "b) Dwight Schrute",
        "c": "c) Stanley Hudson"
      },
      "correctAnswer": "b",
      "answered": false
    },
    {
      "question": "6. What is the name of Michael Scott's self-made action movie?",
      "options": {
        "a": "a) Threat Level Midnight",
        "b": "b) The Dundies",
        "c": "c) Scott's Tots"
      },
      "correctAnswer": "a"
    },
    {
      "question": "7. What is the name of Angela's cat?",
      "options": {
        "a": "a) Sprinkles",
        "b": "b) Whiskers",
        "c": "c) Bandit"
      },
      "correctAnswer": "a"
    },
    {
      "question": "8. Who is known for their famous 'Bears, beets, Battlestar Galactica' quote?",
      "options": {
        "a": "a) Jim Halpert",
        "b": "b) Pam Beesly",
        "c": "c) Dwight Schrute"
      },
      "correctAnswer": "c"
    },
    {
      "question": "9. Which character has a beet farm and bed and breakfast?",
      "options": {
        "a": "a) Jim Halpert",
        "b": "b) Angela Martin",
        "c": "c) Dwight Schrute"
      },
      "correctAnswer": "c"
    },
    {
      "question": "10. What is the name of the company's receptionist throughout the series?",
      "options": {
        "a": "a) Erin Hannon",
        "b": "b) Kelly Kapoor",
        "c": "c) Pam Beesly"
      },
      "correctAnswer": "c"
    },
    {
      "question": "11. Who wins the 'Whitest Sneakers' Dundie Award?",
      "options": {
        "a": "a) Jim Halpert",
        "b": "b) Pam Beesly",
        "c": "c) Kevin Malone"
      },
      "correctAnswer": "c"
    },
    {
      "question": "12. What is the name of Michael Scott's paper company that he starts after leaving Dunder Mifflin?",
      "options": {
        "a": "a) Michael Scott Paper Co.",
        "b": "b) Scott Paper",
        "c": "c) Dunder Scott"
      },
      "correctAnswer": "a"
    },
    {
      "question": "13. What is Dwight Schrute's middle name?",
      "options": {
        "a": "a) Kurt",
        "b": "b) Danger",
        "c": "c) Rainn"
      },
      "correctAnswer": "b"
    },
    {
      "question": "14. What is the name of the company's HR representative?",
      "options": {
        "a": "a) Toby Flenderson",
        "b": "b) Holly Flax",
        "c": "c) Jan Levinson"
      },
      "correctAnswer": "a"
    },
    {
      "question": "15. Who becomes the regional manager of Dunder Mifflin after Michael Scott?",
      "options": {
        "a": "a) Jim Halpert",
        "b": "b) Dwight Schrute",
        "c": "c) Andy Bernard"
      },
      "correctAnswer": "b"
    },
    {
      "question": "16. What is the name of the company that buys out Dunder Mifflin?",
      "options": {
        "a": "a) Athlead",
        "b": "b) Sabre",
        "c": "c) Utica Paper"
      },
      "correctAnswer": "a"
    },
    {
      "question": "17. What is the name of Kevin Malone's band?",
      "options": {
        "a": "a) Scrantonicity",
        "b": "b) The Scrantones",
        "c": "c) Kevin and the Zits"
      },
      "correctAnswer": "a"
    },
    {
      "question": "18. What is the name of Jim and Pam's second child?",
      "options": {
        "a": "a) Cece",
        "b": "b) Phillip",
        "c": "c) Luke"
      },
      "correctAnswer": "b"
    },
    {
      "question": "19. Who starts the fire in the office?",
      "options": {
        "a": "a) Michael Scott",
        "b": "b) Dwight Schrute",
        "c": "c) Ryan Howard"
      },
      "correctAnswer": "c"
    },
    {
      "question": "20. What is the name of the documentary crew that films the Dunder Mifflin office?",
      "options": {
        "a": "a) Scranton Docs",
        "b": "b) Dunder Docs",
        "c": "c) The Office Docs"
      },
      "correctAnswer": "b"
    }

  ]
  
// ---------------------------------------------------------------------------------------

// QUESTION CHANGER
let question = document.querySelector(".question-container");
let change = document.getElementById("check");

let currentIndex = 0;

function displayNewQues() {
  let currentQues = questions[currentIndex];
  question.innerHTML = `
    <p class="question">${currentQues.question}</p>
    <input type="radio" name="q1" value="a"> ${currentQues.options.a}<br>
    <input type="radio" name="q1" value="b"> ${currentQues.options.b}<br>
    <input type="radio" name="q1" value="c"> ${currentQues.options.c}<br>`;
}

change.addEventListener('click', () => {
  // Check the answer for the current question before moving to the next one
  checkAns();
  currentIndex++;
  if (currentIndex < questions.length) {
    displayNewQues();
  } else {
    question.innerHTML = `You passed ${score} questions out of ${questions.length}`;
  }
});

displayNewQues();

// ANSWER CHECKING 

let ans = document.querySelector(".myAns");
let scoreElem = document.getElementById("score");
let chckBtn = document.getElementById("check");

let score = 0;

function checkAns() {
  const selectedAns = document.querySelector('input[name="q1"]:checked');
  if (selectedAns) {
    const userAnswer = selectedAns.value;
    const correctAnswer = questions[currentIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
      score++;
      scoreElem.textContent = `${score}/${questions.length}`;
      setTimeout(() => {
        ans.textContent = 'Correct Answer';
        setTimeout(() => {
          ans.textContent = '';
        }, 1000);
      }, 0);
    } else {
      setTimeout(() => {
        ans.textContent = 'Incorrect Answer';
        setTimeout(() => {
          ans.textContent = '';
        }, 1000);
      }, 0);
    }
  }
}

chckBtn.addEventListener('click', checkAns);

// MY FIRST PROJECT ENDS HERE 