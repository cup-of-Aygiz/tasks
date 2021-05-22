export const piless = (array) => {
   array.sort();
    let sum=0
    for(let i=array.length-2;i>=(array.length)/3;i-=2){
        sum+=array[i]
        console.log(array[i])
    }
    console.log("max sum = " + sum)
}
