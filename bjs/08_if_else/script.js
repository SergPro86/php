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

// answerField.innerText = `Вы загадали число ${replace} ?`;
(answerNumber>=0) ?
answerField.innerText = 'Вы загадали число ' + numToWords(answerNumber) + ' ?'
:
    answerField.innerText = 'Вы загадали число ' + minNumToWords(answerNumber) + ' ?';



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
            answerField.innerText = 'Вы загадали число ' + numToWords(answerNumber) + ' ?';
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
            (answerNumber>=0) ?
            answerField.innerText = 'Вы загадали число ' + numToWords(answerNumber) + ' ?'
            :
            answerField.innerText = 'Вы загадали число ' + minNumToWords(answerNumber) + ' ?' : (overPhraseRandom === 2) ?
            (answerNumber>=0) ?
            answerField.innerText = 'Я почти у верен, вы загадали число ' + numToWords(answerNumber) + ' ?'
            :
            answerField.innerText = 'Я почти у верен, вы загадали число ' + minNumToWords(answerNumber) + ' ?' : (overPhraseRandom === 3) ?
            (answerNumber>=0) ?
            answerField.innerText = 'Ну и число вы загадали, это ' + numToWords(answerNumber) + ' ?'
            :
            answerField.innerText = 'Ну и число вы загадали, это ' + minNumToWords(answerNumber) + ' ?' :
            (answerNumber>=0) ?
            answerField.innerText = 'Так я могу и проиграть, это число ' + numToWords(answerNumber) + ' ?'
            :
            answerField.innerText = 'Так я могу и проиграть, это число ' + minNumToWords(answerNumber) + ' ?';
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
            (answerNumber>=0) ?
            answerField.innerText = 'Вы загадали число ' + numToWords(answerNumber) + ' ?'
            :
            answerField.innerText = 'Вы загадали число ' + minNumToWords(answerNumber) + ' ?' : (lessPhraseRandom === 2) ?
            (answerNumber>=0) ?
            answerField.innerText = 'Я почти у верен, вы загадали число ' + numToWords(answerNumber) + ' ?'
            :
            answerField.innerText = 'Я почти у верен, вы загадали число ' + minNumToWords(answerNumber) + ' ?' : (lessPhraseRandom === 3) ?
            (answerNumber>=0) ?
            answerField.innerText = 'Ну и число вы загадали, это ' + numToWords(answerNumber) + ' ?'
            :
            answerField.innerText = 'Ну и число вы загадали, это ' + minNumToWords(answerNumber) + ' ?' :
            (answerNumber>=0) ?
            answerField.innerText = 'Так я могу и проиграть, это число ' + numToWords(answerNumber) + ' ?'
            :
            answerField.innerText = 'Так я могу и проиграть, это число ' + minNumToWords(answerNumber) + ' ?';
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

// let replace = numToWords(answerNumber);
function minNumToWords(n2){
    let n3 = -1 * n2;
    return 'минус ' + numToWords(n3);
}

function numToWords(n) {
    let a = n%10;
    let b = Math.floor(n%100/10);
    let c = Math.floor(n%1000/100);


    Arr1 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']; 
    Arr2 = ['одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    Arr3 = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    Arr4 = ['сто', 'двести', 'тристо', 'четыресто', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    if (n > 0 && n < 10) {
        return Arr1[a-1] ;
    }
    else if (n > 10 && n < 20) {
        return Arr2[a - 1];
    }
    else if (n >= 20 && n < 100) {
        if (a-1 < 0){return Arr3[b - 1] ;}
        else {
            return Arr3[b - 1] + ' ' + Arr1[a - 1];
        }
    }
    else if (n === 0) {
        return n = 0;
    }
    else if (n >= 100 && n < 110)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 110 && n < 120){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 120 && n < 200){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }


    //For 200

    else if (n >= 200 && n < 210)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 210 && n < 220){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 220 && n < 300){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }

     // For 300
     else if (n >= 300 && n < 310)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 310 && n < 320){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 320 && n < 400){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }

    //For 400
    else if (n >= 400 && n < 410)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 410 && n < 420){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 420 && n < 500){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }

    //For 500
    else if (n >= 500 && n < 510)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 510 && n < 520){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 520 && n < 600){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }

    //For 600

    else if (n >= 600 && n < 610)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 610 && n < 620){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 620 && n < 700){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }

    //For 700
    else if (n >= 700 && n < 710)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 710 && n < 720){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 720 && n < 800){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }

    //For 800
    else if (n >= 800 && n < 810)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 810 && n < 820){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 820 && n < 900){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }

    //For 900
    else if (n >= 900 && n < 910)
    if (a-1 < 0){
        return Arr4[c-1] ;}
    else{
        return Arr4[c-1] + ' ' + Arr1[a -1];
    }

    else if (n >= 910 && n < 920){
        if (a-1 < 0){
            return Arr4[c-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr2[a -1];
        }
    }

    else if (n >= 920 && n < 1000){
        if (a-1 < 0){
            return Arr4[c-1] + ' ' + Arr3[b-1] ;}
        else{
            return Arr4[c-1] + ' ' + Arr3[b-1] + ' ' + Arr1[a - 1];
        }
    }
     
}  