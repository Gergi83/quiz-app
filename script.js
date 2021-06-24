const quizData = [
  {
    question: 'Which is the largest continent in the world?',
    a: 'Africa',
    b: 'Asia',
    c: 'Australia',
    d: 'Europe',
    correct: 'b',
  },
  {
    question: 'Which is the highest mountain in the world?',
    a: 'Aconcagua',
    b: 'Denali',
    c: 'Everest',
    d: 'Kilimanjaro',
    correct: 'c',
  },
  {
    question: 'Which is the longest river in the world?',
    a: 'Amazon',
    b: 'Yangtze',
    c: 'Mississippi-Missouri',
    d: 'Nile',
    correct: 'd',
  },
  {
    question: 'Which is the deepest lake in the world?',
    a: 'Baikal',
    b: 'Caspian Sea',
    c: 'Tanganyika',
    d: 'Vostok',
    correct: 'a',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
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
    } else {
      quiz.innerHTML = `
                <h2>Questions correctly answered: ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Play Again!</button>
            `;
    }
  }
});
