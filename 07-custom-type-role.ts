
(() => {
   
    type Role = 'admin' | 'guest' | 'teacher' | 'student';

    type User = {
        name: string;
        age: number;
        role: Role;
        permission: string[];
    };

    let userRole: Role = 'admin';

    // change role
    userRole = 'teacher';

    const user: User = {
        name: "Loraine",
        age: 20,
        role: userRole,
        permission: ["read", "write"]
    };

    console.log(user);

    function access(role: Role) {
        console.log("Role accessed:", role);
    }

    access(user.role);
})();