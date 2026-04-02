function generateError(msg?: string) {
    throw new Error(msg || "Default error message");
}

generateError("An error occurred");

(() => {
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guest';
    };

    let user: User = {
        name: 'Dong',
        age: 20
    };

    console.log(user.name);
    console.log(user.age);
})();


// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.