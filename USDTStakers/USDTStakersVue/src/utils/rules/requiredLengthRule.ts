export default (min: number = -Infinity, max: number = Infinity): (value: string) => boolean | string => {
    const rule = (value: string): boolean | string => {
        value = (value || "").toString()
        if(value.length < min){
            return `This field should be at least ${min} characters long.`
        }
        else if(value.length > max){
            return `This field should be at most ${max} characters long.`
        }
        else return true
    }
    return rule;
}