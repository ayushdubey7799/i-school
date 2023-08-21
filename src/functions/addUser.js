export const addUser = (user) => {
    let userArray = JSON.parse(localStorage.getItem("users"));
    if(!userArray)userArray = [];
    
    let emailExists = userArray.filter((item) => item.email == user.email);
    if(emailExists.length){
        alert("Email already exists");
        return;
    }

    userArray.push(user);
    localStorage.setItem("users", JSON.stringify(userArray));
    return true;
}

