(() => {

    // Function Return Value Types
    function add(a: number, b: number): number { // you can omit the function type since typescript can infers it
        return a + b
    }

     console.log(add(5, 10));
     console.log(add(20, 30));
    // add("5", 10)

    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
       function log(message: string): void {
        console.log("LOG:", message);
    }

    log("Hello, World!")

    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }

    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb: (m: string) => void) {  // you can also use cb: Function but () => void is the best practice
        // ...
        cb('Job Done!')
    }

    let logMsg = (msg: string): void => {
        console.log("Callback:", msg);
    };

    performJob(logMsg);

    type User = {
        name: string;
        age: number;
        greet: () => string;
    };

    let user: User = {
        name: "Dong",
        age: 25,
        greet() {
            console.log(`Hello, ${this.name}`);
            return this.name;
        }
    };

    user.greet();
})();