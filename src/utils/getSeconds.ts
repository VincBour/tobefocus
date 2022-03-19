export const getSeconds = (value: number) => {
    const result = value % 60;
    if(result >= 10){
        return result.toString();
    } else {
        return `0${result}`;
    }
}