// Created an object named "calculate" to store 
const calculate = {
    history: [],  //Created an empty history array to store previous inputs

add(a, b){   //Created the "add" function to add two numbers, save the input to history, and return the answer
    const answer = a + b;  
    this.history.push(`${a} + ${b} = ${answer}`);
    return answer
},

subtract(a, b){   //Created the "subtract" function to subtract two numbers, save the input to history, and return the answer
    const answer = a - b;
    this.history.push(`${a} - ${b} = ${answer}`);
    return answer;
},

multiply(a, b){ //Created the "multiply" function to multiply two numbers, save the input to history, and return the answer
    const answer = a * b;
    this.history.push(`${a} x ${b} = ${answer}`)
    return answer;
},

divide(a, b){ //Created the "divide" function to divide two numbers, save the input to history, and return the answer
    if(b === 0){  //Used if to return an error if the user inputs and number divided by 0
        this.history.push(`Division by zero attempted: ${a} / ${b}`);
        return "Error: Division by Zero";
    }
    const answer = a / b;
    this.history.push(`${a} / ${b} = ${answer}`);
    return answer;
},

viewHistory(){  //Created the "viewHistory" function to send back the previous user inputs as a string
    if(this.history.length === 0){ // Included an output for when nothing has been saved to the history yet
        console.log("no calculations yet."); 
    }
    else{
        console.log("Calculation History:");
        this.history.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry}`);
        })
    }
}
}

//test calculations

calculate.add(94, 20);
calculate.subtract(136, 36);
calculate.multiply(6, 6);
calculate.divide(100, 4);
calculate.divide(3, 0);

calculate.viewHistory();