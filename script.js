function Quiz(questions) {
    this.questions = questions;
    this.index = 0;
}
/**
 * Get Question
 */
Quiz.prototype.getQuestion = function () {
    return this.questions[this.index] || false;
};
/**
 * Increase Index
 */
Quiz.prototype.increaseIndex = function () {
    if (this.questions.length - 1 > this.index) {
        this.index += 1;
    }
};
/**
 * Decrease Index
 */
Quiz.prototype.decreaseIndex = function () {
    if (this.index > 0) {
        this.index -= 1;
    }
};
/**
 * Next Question
 */
Quiz.prototype.nextQuestion = function () {
    const obj = this;
    const nextQuestion = document.getElementById("nextQuestion");
    nextQuestion.addEventListener("click", function (e) {
        nextQuestion.classList.add('hidden');
        obj.increaseIndex();
        obj.createQuiz();
    });

};
/**
 * Set Current Question
 */
Quiz.prototype.setCurrentQuestion = function () {
    document.getElementById("currentQuestion").textContent = this.index + 1;
};
/**
 * Set Question Title
 */
Quiz.prototype.setQuestionTitle = function () {
    const question = this.getQuestion();
    document.getElementById("questionTitle").innerHTML = `
        <b>${this.index + 1}</b> ${question.title}
    `;
};
/**
 * Set Question Option
 */
Quiz.prototype.setQuestionOption = function () {
    const optionContent = document.getElementById("questionOption");
    const options = this.getQuestion().options;
    if (this.index < this.questions.length) {
        let optionHTML = "";
        for (option in options) {
            optionHTML += `
                <button onclick="replyAnswer(event, '${option}')" class="answerBtn border disabled:pointer-events-none rounded-[5px] border-[#A7A7A7] px-[12px] py-[8px] flex items-center w-full">
                    <b>${option}.</b> ${options[option]}
                </button>
            `;
        }
        optionContent.innerHTML = optionHTML;
    }
};
/**
 * Set Current Question Number
 */
Quiz.prototype.setCurrentQuestionNumber = function () {
    document.getElementById("currentQuestion").textContent = this.index + 1;
};
/**
 * Set Total Questions
 */
Quiz.prototype.setTotalQuestions = function () {
    document.getElementById("totalQuestion").textContent =
        this.questions.length;
};
/**
 * Reply
 */
Quiz.prototype.reply = function (e, answer) {
    const question = this.getQuestion();

    if (question.correct === answer) {
        e.target.classList.add("bg-[#D4FFBA]");
    } else {
        e.target.classList.add("bg-[#FFDEDE]");
    }

    document.getElementById("nextQuestion").classList.remove("hidden");

    document.querySelectorAll(".answerBtn").forEach(function (i) {
        i.setAttribute("disabled", true);
    });
};
/**
 * Create Quiz
 */
Quiz.prototype.createQuiz = function () {
    quiz.setQuestionTitle();
    quiz.setQuestionOption();
    quiz.setCurrentQuestionNumber();
    quiz.setTotalQuestions();
};

const quiz = new Quiz(questionLists);

function replyAnswer(e, answer) {
    quiz.reply(e, answer);
}

quiz.createQuiz();
quiz.nextQuestion();
