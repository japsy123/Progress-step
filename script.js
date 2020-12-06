
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentStepCount = 1;

nextButton.addEventListener('click', function() {

    if(currentStepCount < 4) {
        currentStepCount++;
        // update styles for given step
        const currentStep = document.getElementById(`step-${currentStepCount}`)
        const currentStepLine = document.getElementById(`progress-${currentStepCount-1}`)
        currentStep.classList.add('completed')
        currentStepLine.classList.add('completed')
        prevButton.disabled = false
    }
})

prevButton.addEventListener('click', function() {

    if(currentStepCount > 1) {
        if(currentStepCount === 2) {
            prevButton.disabled = true
        }
        const currentStep = document.getElementById(`step-${currentStepCount}`)
        const currentStepLine = document.getElementById(`progress-${currentStepCount-1}`)
        currentStep.classList.remove('completed')
        currentStepLine.classList.remove('completed')
        currentStepCount--;
    }
})
