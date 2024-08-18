const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const heigth = parseInt(document.querySelector('#height').value);
    const weigth = parseInt(document.querySelector('#weigth').value);
    const result = document.querySelector('#result');

    if (!heigth) {
        result.innerHTML = `Please give a valid heigth`
    } else if (!weigth) {
        result.innerHTML = `Please give a valid weigth`
    } else { 
        const bmi = (weigth / ((heigth * heigth) / 10000)).toFixed(2)
        
        if (bmi < 18.6) {
            result.innerHTML = `<span>Your BMI is : ${bmi} , That is: Underweigth</span>`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>Your BMI is : ${bmi} , That is: Normal Range</span>`
        }
        else if (bmi > 24.9) { 
            result.innerHTML = `<span>Your BMI is : ${bmi} , That is: Overweigth</span>`
        }
    }
})