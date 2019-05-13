import React, { Component } from "react";

const Toast = props => {
    return (
        <div className={`toast_box ${props.classname}`}>
            <div className="toast_body">
                <p className="toast_text">{props.children}</p>
            </div>
        </div>
    );
};

export default Toast;

{
    /* <button onClick={props.onClick} style={props.styles} type="button">
            {props.children}
        </button> */
}
