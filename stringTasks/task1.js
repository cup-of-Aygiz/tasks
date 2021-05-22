export const strongString = (string1, string2) => {
    for(let i = 0;i < string2.length;i++) if(string1[i] > string2[i]) return "second"
    return "first"
}