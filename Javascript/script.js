const answerOptions = document.querySelector(".choices");
let quizCategory = "Physic";

// Random Questions function
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    return randomQuestion;
}

// Render the current question and its options in the quiz
const renderQuestion = () => {
    const currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    // Update the Ui
    answerOptions.innerHTML = "";
    document.querySelector(".question-box").textContent = currentQuestion.questions;

    //Create options <li> elements and append them
    currentQuestion.options.forEach(option => 
    {
        const li = document.createElement("li");
        li.classList.add("choice");
        li.textContent = option;
        answerOptions.appendChild(li);
    });

}

renderQuestion();
