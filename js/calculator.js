
class calculator{

    constructor(){
        this.result = 0;
    }

    add(num){
        this.result += num;
    }

    subtract(num){
        this.result -= num;
    }

    multiply(num){
        this.result *= num;
    }

    divide(num){
        if(!num){
            throw new Error("Division is not allowed");
        }
        this.result /= num;
    }

    clear(){
        this.result = 0;
    }

    getResult(){
        return this.result;
    }

    calculate(expression){
        const sanitizedExpression = expression.replace(/\s+/g,'');
        const parsedExpression = eval(sanitizedExpression);

        if(isNaN(parsedExpression)){
            throw new Error("Invalid Expression");
        }
        this.result = parsedExpression;
    }

}

const calc = new calculator();
calc.calculate("10+5/2");
console.log(calc.getResult());  