export default (max: number = Infinity, min: number = -Infinity) => {
    const rule = (value: number) => {
        if(value < min)
            return `This field should be at least ${min}`;
        else if(value > max)
            return `This field should be at most ${max}`;
        else return true;
    }
    return rule;
}