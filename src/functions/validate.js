import { toast } from "react-toastify";

const validate = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !password) {
        toast.error("Fill all fields");
        return false;
    }

    if (!emailRegex.test(email)) {
        toast.error("Not Valid Email");
        return false;
    }

    // if (password.length < 4) {
    //     toast.error("Password should be of atleast 8 characters");
    //     return false;
    // }

    return true;
}

export default validate;