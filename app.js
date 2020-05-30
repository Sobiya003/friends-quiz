const correctAns = ['B', 'B', 'B', 'B']; 
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const ans = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    ans.forEach((answer, index) => {
        if(answer === correctAns[index]){
            score += 25;
        }
    });

   // console.log(score);

   scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() =>{
        document.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    })

});


