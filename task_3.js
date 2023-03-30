alert('Привет')
let answer = prompt('У квадратного стола отпилили один угол. Сколько теперь углов у него стало?')
function riddle(answer){
    if (answer === '5') {
        alert('Верно!')
    }
    else if(answer === 'пять') {
        alert('Верно!')
    }
    else if (answer === 'Пять') {
        alert('Верно')
    }
    else {
        alert('Ошибка')
    }
}

riddle(answer)