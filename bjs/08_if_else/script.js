    let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    
        if (isNaN(minValue) || isNaN(maxValue)) {
            minValue = 0;
            maxValue = 100;
        }

        (minValue < -999) ? 
            minValue = -999 :
            minValue;

        (maxValue > 999) ?
            maxValue = 999 :
            maxValue;

        
   
    
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
    
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

answerField.innerText = `Вы загадали число ${answerNumber }  ?`;


document.getElementById('btnRetry').addEventListener('click', function () {
        if (!gameRun || gameRun) {
            minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
            maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
            if (isNaN(minValue) || isNaN(maxValue)) {
                minValue = 0;
                maxValue = 100;
            }
            
            (minValue < -999) ? 
                minValue = -999 :
                minValue;
    
            (maxValue > 999) ?
                maxValue = 999 :
                maxValue;
    
            alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber = 1;
            gameRun = true;
    
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    
    })

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
                            
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const overPhraseRandom = Math.round(Math.random() * 4);
            const overAnswerPhrase = (overPhraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?` : (overPhraseRandom === 2) ?
                `Я почти у верен, вы загадали число ${answerNumber }?` : (overPhraseRandom === 3) ?
                `Ну и число вы загадали, это ${answerNumber }?` :
                `Так я могу и проиграть, это число ${answerNumber }?`;
            answerField.innerText = overAnswerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue + 1 === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const lessPhraseRandom = Math.round(Math.random() * 4);
            const lessAnswerPhrase = (lessPhraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?` : (lessPhraseRandom === 2) ?
                `Я почти у верен, вы загадали число ${answerNumber }?` : (lessPhraseRandom === 3) ?
                `Ну и число вы загадали, это ${answerNumber }?` :
                `Так я могу и проиграть, это число ${answerNumber }?`;
            answerField.innerText = lessAnswerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const equalPhraseRandom = Math.round(Math.random() * 3);
        const equalAnswerPhrase = (equalPhraseRandom === 1) ? 
        `Я всегда угадываю\n\u{1F60E}` : (equalPhraseRandom === 2) ?
        `Ну и легко же я отгадываю\n\u{1F601}` :
        `Угадайка непобедим!!!\n\u{1F525}`;

        answerField.innerText = equalAnswerPhrase;
        gameRun = false;
    }
})