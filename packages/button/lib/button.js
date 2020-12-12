import React from 'react';

export const Button = (props) => {
    const {
        children,
        style,
        label,
    } = props;

    return <button style={style}>{label || children}</button>
};

export default Button;