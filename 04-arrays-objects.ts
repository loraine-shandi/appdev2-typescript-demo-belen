let hobbies = ["Gaming", "Watching"];


hobbies.push("Reading");


let userList: Array<string | number>;

userList = ["Shandi", "Shan123", 12];
console.log(userList);


let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Shandi",
    age: 20,
    hobbies: ["Gaming", "Watching"],
    role: {
        description: 'student',
        id: 2
    }
};

console.log(user);


let val: {} = "Shandi Belen";
console.log(val);


let data: Record<string, number | string>;

data = {
    id: 1,
    name: 'Shandi'
};

console.log(data);