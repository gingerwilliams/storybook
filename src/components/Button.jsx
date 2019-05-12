import React, { Component } from "react";

const Button = props => {
    return (
        <button onClick={props.onClick} style={props.styles} type="button">
            {props.children}
        </button>
    );
};

export default Button;
