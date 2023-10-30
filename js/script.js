var question = [
    {
        question: "Какой язык програмирования вы изучаете ? ",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Что такое HTML?",
        options: ["Гипертекстовый язык разметки", "Язык программирования", "База данных", "Графический редактор"],
        correctAnswer: "Гипертекстовый язык разметки"

    },
    {

        question: "Что такое CSS?",
        options: ["Каскадные таблицы стилей", "Язык программирования", "Система управления базами данных", "Фреймворк"],
        correctAnswer: "Каскадные таблицы стилей"

    }
]

// Текущий вопрос 
var currentQuestion = 0;
// Кол-во правильных ответов  
var correctAnswer = 0;


// Функция перемешивания элементов массива 


function shufflerArray(array) {
    for (let i = array.langth - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i + 1); //Генерация от 0 до i
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}

// Переходник к следуйщему вопросу 

function nextQuestion(answer) {
    if (answer === question[currentQuestion].correctAnswer) {
        correctAnswer++;
    }
    currentQuestion++;
    if (currentQuestion < question.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// Функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    var questionElement = document.getElementById('question');

    questionElement.textContent = "Вопрос " + (currentQuestion + 1) + ":" +
        question[currentQuestion].question;

    var optionsElement = document.getElementById('options');
    optionsElement.innerHTML = "";

    var shuffledOptions = shufflerArray(question[currentQuestion].options)
    for (var i = 0; i < shuffledOptions.length; i++) {
        var options = shuffledOptions[i];
        optionsElement.innerHTML += `<button onclick="nextQuestion('${options}')">${options}</button>`;
    }
}


// Функция отоброжения резульата
function displayResult() {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    var resultElement = document.getElementById('options');

    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    resultElement.textContent = "Правильных ответов: " + correctAnswer + " из" + question.length;
    resultElement.style.display = 'block';

}


// Начало теста 

displayQuestion(); // Запускаем отображение первого вопроса