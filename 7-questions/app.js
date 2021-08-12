//using selectors inside the element
const questions = document.querySelectorAll('.question');
const btns = document.querySelectorAll('.question-btn');
questions.forEach(eachQuestion => {
    // console.log(eachQuestion);
    const btn = eachQuestion.querySelector('.question-btn');
    // console.log(btn);
    // functionality setting of close and open
    btn.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== eachQuestion) {
                item.classList.remove('show-text');
            }
        })
        // classList added
        eachQuestion.classList.toggle('show-text');
    })
});

/*
// traversing the dom
const btns = document.querySelectorAll(".question-btn");
btns.forEach(eachBtn => {
    eachBtn.addEventListener('click', e => {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})
*/