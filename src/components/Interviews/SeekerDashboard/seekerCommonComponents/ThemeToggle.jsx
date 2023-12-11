import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = ({ currentTheme, setCurrentTheme }) => {

    return (
        <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={currentTheme}
            onChange={() => setCurrentTheme(!currentTheme)}
            size={25}
        />
    );
};

export default ThemeToggle;