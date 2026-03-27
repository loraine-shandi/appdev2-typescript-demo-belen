
(() => {
    enum Role {
        SuperAdmin = 'SuperAdmin',
        Teacher = 'Teacher',
        Student = 'Student',
    }

    // change role
    let userRole: Role = Role.Student;

    console.log("User role:", userRole);

    // experiment
    userRole = Role.Teacher;
    console.log("Updated role:", userRole);
})();

// (() => {
//     enum Role {
//         // SuperAdmin,
//         // SuperAdmin = 1,
//         SuperAdmin = 'SuperAdmin',
//         // Teacher,
//         Teacher = 'Teacher',
//         // Student,
//         Student = 'Student',
//     }

//     // let userRole: Role = 0;
//     let userRole: Role = Role.SuperAdmin;
// })
