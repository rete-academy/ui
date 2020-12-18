import React from 'react';

const Button = (props: any) => {
    const {
        children,
        style,
        label,
    } = props;

    return (
        <button
            type="button"
            className="px-10 py-4 bg-purple-600 text-white rounded-2xl"
            style={style}
        >
            {label || children}
        </button>
    );
};

export default Button;
