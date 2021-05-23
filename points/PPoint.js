export const point = (array) => {
    let answer = []
    let arr1 = []
    for(let i=0;i<array.length;i++)
        arr1[i]=0;
    let k=0
    let sum=0
    for(let i=0;i<array.length;i++) {
        let know=k
        for (let j = i + 1; j < array.length; j++) {
            let a = Math.max(array[i][0], array[j][0])
            let b = Math.min(array[i][1], array[j][1])
            answer[k] = compare(a, b)
            if (answer[k] !== undefined) {
                k++
                arr1[j] = 1
                array[j] = []
            }
        }
        if(know!==k) {
            arr1[i] = 1
            array[i] = []
        }
    }
    for(let i=0;i<arr1.length;i++)
        if(arr1[i]!==1)
            sum++
    if(answer[answer.length-1]===undefined)
        console.log("кол-во стрел = "+(answer.length-1+sum))
    else
        console.log("кол-во стрел = "+(answer.length+sum))
}
const compare = (a, b) => {
    if(a<b)
        return [a,b]
    else if(a===b)
        return [a,a]
}