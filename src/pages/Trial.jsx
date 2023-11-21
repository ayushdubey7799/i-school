import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const Trial = () => {
    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };

    const handleSubmit = () => {
        // your submit logic
    };

    return (
        <div>
            <ValidatorForm>
                <TextValidator
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    validators={["required", "isEmail"]}
                    errorMessages={["this field is required", "email is not valid"]}
                />
            </ValidatorForm>
            <button type="submit">Submit</button>
        </div>
    )
}

export default Trial