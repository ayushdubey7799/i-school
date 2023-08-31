import React from "react";
import "./style.css";
function Loader({message}) {
    return (
        <div className="wrapper">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <div>{message}</div>
        </div>
    );
}

export default Loader;



