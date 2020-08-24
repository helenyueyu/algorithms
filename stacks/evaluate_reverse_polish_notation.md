## Implementation (Cleaned it up a bit)
```js
function evalRPN(input) {
    if (input.length === 1) return parseInt(input[0]); 
    
    const ops = {
        '+': (n1, n2) => n1 + n2, 
        '-': (n1, n2) => n1 - n2, 
        '*': (n1, n2) => n1 * n2, 
        '/': (n1, n2) => n1/n2 < 0 ? Math.ceil(n1/n2) : Math.floor(n1/n2)
    }
    
	const stack = [];  

	let i = 0; 
	while (i < input.length) {
        const char = input[i]; 
        if (ops[char] === undefined) {
            stack.push(parseInt(char)); 
        } else {
            let [second, first] = [stack.pop(), stack.pop()]; 
            stack.push(ops[char](first, second)); 
        }
        i++; 
	}
	return stack[stack.length-1]; 
}
```

## Implementation (Old Version)
```js
function evalRPN(input) {
    if (input.length === 1) return parseInt(input[0])
    
	const operators = new Set(['+', '-', '*', '/']); 
	const stack = [];  

	let i = 0; 
	while (i < input.length) {
		while (!operators.has(input[i])) {
			stack.push(parseInt(input[i])); 
			i++; 
		}
		let [second, first] = [stack.pop(), stack.pop()];  
		stack.push(evaluate(first, second, input[i])); 
		i++; 
	}
	return stack[stack.length-1]; 
}
function evaluate(n1, n2, operator) {
	if (operator === '+') return n1 + n2; 
	else if (operator === '-') return n1 - n2; 
	else if (operator === '*') return n1*n2; 
	else return n1/n2 < 0 ? Math.ceil(n1/n2) : Math.floor(n1/n2); 
}
```

## Complexity
Time: `O(n)`
Space: `O(n)`