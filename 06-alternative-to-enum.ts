// (() => {
//     // Literal Types (Alternative to Enum)
//     let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'admin'

//     userRole = 'guess'
//     // anotherUserRole = 'superadmin'

//     function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
//         // ...
//     }
// })

(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guest' | 'teacher' | 'student' = 'admin';


    userRole = 'teacher';
    userRole = 'student';

    console.log("Current role:", userRole);

    function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
        console.log("Accessing as:", role);
    }

    access(userRole);
})();