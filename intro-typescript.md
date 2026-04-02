# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
Demonstrates how to use literal types as an alternative to enums.

## 07-custom-type-role.ts
Shows how to create custom types using the 'type' keyword. It helps define reusable structures like Role and User.

## 08-functions.ts
Explains how functions work in TypeScript, including parameter types and return types.

## 09-special-types.ts
Introduces special types like null and undefined. Shows how variables can be strictly assigned or combined with other types.

## 10-type-narrowing.ts
Type narrowing is used to safely check if an element exists before accessing its value.

## 11-optional.ts
Demonstrates optional parameters and optional object properties using '?'