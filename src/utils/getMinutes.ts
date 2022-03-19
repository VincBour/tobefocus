export const getMinutes = (value: number) => {
    const result = Math.floor(value / 60);
    if (result >= 10) {
        return result.toString();
    }else{
        return `0${result.toString()}`
    }
};