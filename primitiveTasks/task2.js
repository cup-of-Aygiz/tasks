const compare = (string1, string2) => {
    return string1.toString() + string2.toString() > string2.toString()+ string1.toString()
}

export const maxNumber = (numbersArray) => {
    if (numbersArray.length === 0) return 0
    for (let i = 0; i < numbersArray.length; i++) {
        for (let j = 0; j < numbersArray.length; j++) {
            if (compare(numbersArray[i], numbersArray[j])) {
                console.log(numbersArray[i],numbersArray[j]);
               [numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]]
            }
        }
    }
    let result = ""
    for(let i of numbersArray){
        result +=i.toString()
    }
    return result
}
