let countNumber = document.querySelector('.number')
const resetBtn = document.querySelector('.btn-reset')
const addBtn = document.querySelector('.btn-add')
const lowerBtn = document.querySelector('.btn-lower')

let count = 0 
countNumber.innerHTML = 0

function countColor() {
    if (count < 0) {
        console.log('red')
        countNumber.style.color = '#E32636'
    } else if (count > 0) {
        countNumber.style.color = '#84DE02'
    } else countNumber.style.color = ''
}

addBtn.addEventListener('click', () => {
    count ++
    countNumber.innerHTML = count
    countColor()
    console.log(count)
})

lowerBtn.addEventListener('click', () => {
    count -- 
    countNumber.innerHTML = count
    countColor()
    console.log(count)
})

resetBtn.addEventListener('click', () => {
    count = 0
    countNumber.innerHTML = count
    countColor()
    console.log(count)
})