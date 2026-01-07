/*const jumpTable = {
    add(_code, stack) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(a+b);
    },

    sub(_code, stack) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(a-b);
    },

    mul(_code, stack) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(a*b);
    },

    div(_code, stack) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(a/b);
    },

    eql(_code, stack) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(a==b);
    }
}

function push(code, stack) {
    stack.push(+code);
}*/

function evalHelp(program, stack) {
    for (const code of program) {
        // (jumpTable[code] ?? push)(code, stack);
        switch (code) {
            case "add": {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a+b);
                break;
            }

            case "sub": {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a-b);
                break;
            }

            case "mul": {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a*b);
                break;
            }

            case "div": {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a/b);
                break;
            }

            case "eql": {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a==b);
                break;
            }

            default:
                stack.push(+code);
                break;
        }
    } 
    return stack;
}

function run(program) {
    return console.log(evalHelp(program.split(/\s+/), []));
}

run("1 2 3 add add");
run("1 2 div 5 mul");
run("1 1 eql");


/*
s => z => z 
s => z => z
s => z => s(z) 
s => z => s(z)
s => z => s(s(z)) 
s => z => s(s(z))
const two = s => z => s(s(z)) 
undefined
two(two)
z => s(s(z))
two(two)(n => n + 1)(0)
4
*/