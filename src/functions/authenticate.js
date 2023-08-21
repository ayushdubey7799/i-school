export const authenticate = (user) => {
    let userArray = JSON.parse(localStorage.getItem("users"));
    if(!userArray){
        alert("Signup first");
        return;
    }

    let currentUser = userArray.filter((item) => item.email == user.email);
    if(!currentUser.length){
        alert("Email not found")
        return;
    };
    if(currentUser[0].password !== user.password){
        alert("Wrong Password");
        return;
    }

    localStorage.setItem("currentUser",JSON.stringify(currentUser[0]));
    return true;
}