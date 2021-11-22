function findLowelCounter(text){
    const lowels = ["а", "о", "е", "и", "ё", "ю", "я"]
    let counter = 0

    for (i in text){
        if (lowels.indexOf(text[i]) !== -1){
            counter++
        }
    }
    console.log(`Количетсво гласных букв - ${counter}`)
    return counter
}

function findLowerNum(num){
    num = num.toString()
    let lower = 9
    for (i in num){
        if (num[i] < lower){
            lower = num[i]
        }
    }

    console.log(`Наименьшее число в строке - ${lower}`)
}

findLowerNum(325)
findLowelCounter('Привет, как дела?')