// Constant Variables linking to html page
const currentQuestion = document.querySelector('.current'),
      totalQuestion   = document.querySelector('.total'),
      quizBox         = document.getElementById('questionBox'),
      container       = document.querySelector('.quiz_wrapper'),
      op1             = document.getElementById('op1'),
      op2             = document.getElementById('op2'),
      op3             = document.getElementById('op3'),
      op4             = document.getElementById('op4'),
      ul              = document.getElementById('ul'),
      options         = document.querySelectorAll('li'),
      btn             = document.querySelector('.nextbtn');
     
      let currentScore     =  document.querySelector('.scoreCard');
          firstQuestion       = 1;
          score               = 0;

//  Questions
const  questions = [       {      
                                 q: "Who is the mother of chakra?",
                                 answers: [
                                    "Kaguya",
                                    "Shirayoshi",
                                    "Anko",
                                    "Sarada" ],
                                 correctAnswer : "Kaguya"
                           },
                           {
                                 q: "How long did the 3rd Great Ninja War Last?",
                                 answers: [
                                    "Two Days",
                                    "Three Days",
                                    "Four Days",
                                    "Seven Days" ],
                                 correctAnswer : "Three Days"
                           },
                           {
                                 q: "Which of these characters died trying to protect who they love?",
                                 answers: [
                                    "Sajin",
                                    "Zabuza",
                                    "Aino",
                                    "Kaiza"],
                                 correctAnswer : "Aino"
                           },
                           {q: "How did Kisame die?",
                                 answers: [
                                    "Killed by Konoha Shinobi",
                                    "Seppuku",
                                    "Fell ill",
                                    "Killed by Killer Bee"],
                                 correctAnswer : "Seppuku"
                           },
                           {
                                 q: "Out of the seven great ninja swordsmen, how many were killed by Might Dai?",
                                 answers: [
                                    "Three",
                                    "Five",
                                    "Four",
                                    "Seven" ],
                                 correctAnswer : "Four"
                           }
                              ];


// Show Text
const display = () => {
   currentQuestion.textContent = firstQuestion;
   currentScore.textContent = score;
   totalQuestion.textContent = questions.length;
   quizBox.textContent = questions[firstQuestion - 1].q;
   op1.textContent = questions[firstQuestion - 1].answers[0];
   op2.textContent = questions[firstQuestion - 1].answers[1];
   op3.textContent = questions[firstQuestion - 1].answers[2];
   op4.textContent = questions[firstQuestion - 1].answers[3];
}

display();

const showResult = () => {
   container.classList.add('end');
   const result = (score / questions.length) * 100;
   let remark;
   (result < 40)  ? remark = 'You are not a true shinobi warrior!': 
   (result <= 60) ? remark = 'Not bad, Neither is it impressive. Watch more!':
   (result <= 80) ? remark = 'You have Potential. Hm!' :
   remark = 'You are a true shinobi!';
   container.innerHTML =
   `<h1>${result}%</h1> 
   <h3 class="center">${remark}</h3>
   <a class = "restart" href = "index.html">Play Again?</a>
   `;
}

const disableBtn = () => {
   options.forEach(option => {
      option.classList.add('disabled');
      if (option.textContent === questions[firstQuestion - 1].correctAnswer){
         option.classList.add('correct');
      }
   })
}

const checkop1 = () => {
   if (op1.textContent === questions[firstQuestion - 1].correctAnswer) {
      op1.classList.add('correct');
      score++;
      display();

   } else {
      op1.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');
   
    if (firstQuestion === questions.length) {
      btn.textContent = 'Submit';
   }
   
}

const checkop2 = () => {
   if (op2.textContent === questions[firstQuestion - 1].correctAnswer) {
      op2.classList.add('correct');
      score++;
      display();

   } else {
      op2.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');

    if (firstQuestion === questions.length) {
      btn.textContent = 'Submit';
   }
}

const checkop3 = () => {
   if (op3.textContent === questions[firstQuestion - 1].correctAnswer) {
      op3.classList.add('correct');
      score++;
      display();
   } else {
      op3.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');

    if (firstQuestion === questions.length) {
      btn.textContent = 'Submit';
   }
   
}

const checkop4 = () => {
   if (op4.textContent === questions[firstQuestion - 1].correctAnswer) {
      op4.classList.add('correct');
      score++;
      display();

   } else {
      op4.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');

    if (firstQuestion === questions.length) {
      btn.textContent = 'Submit';
   }
}

const nextQuestion = () => {
   if (firstQuestion < questions.length) {
      firstQuestion++;
      display();
      btn.classList.remove('show');
      options.forEach(option => {
         option.classList.remove('wrong', 'correct', 'disabled');
      })
   } else {
      showResult();
   }
}

// Add Event Listeners
op1.addEventListener('click', checkop1);
op2.addEventListener('click', checkop2);
op3.addEventListener('click', checkop3);
op4.addEventListener('click', checkop4);
btn.addEventListener('click', nextQuestion);