// Get element
const inputEl = document.getElementById('user-name') as HTMLInputElement | null;

//  unsafe (commented to show experiment)
// console.log(inputEl.value);

//  Type narrowing (safe check)
if (!inputEl) {
    throw new Error('Element not found!');
}

// Now safe to use
console.log("Input value:", inputEl.value);

//  Optional chaining (safe access)
console.log("Optional chaining:", inputEl?.value);

//  Non-null assertion (you are sure it exists)
const inputEl2 = document.getElementById('user-name')! as HTMLInputElement;
console.log("Non-null assertion:", inputEl2.value);