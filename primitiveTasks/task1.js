export const triangle = (data) =>{
    data.sort((a, b) => b - a);
    if(data.length >=3){
        return {
            a:data[0],
            b:data[1],
            c:data[2]
        }
    }
    return {

    }
}