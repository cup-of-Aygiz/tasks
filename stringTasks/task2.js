function isPalindrom (str) {
    return str === str.split('').reverse().join('');
}

export const largestPalindrome = (string) =>{
    let largest = ''
    for(let i = 0;i <= string.length;i++){
        for(let j = 0;j <= string.length;j++){
            const subString = string.slice(i,j)
            console.log(subString)
            if(isPalindrom(subString)){
                if(subString.length>largest.length){
                    largest = subString;
                }
            }
        }
    }
    return largest
}