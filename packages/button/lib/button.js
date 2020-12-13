import React from 'react';
// import { ThemeProvider } from '@rete-academy/base'; // can see

import './styles.css';

const Button = (props) => {
    const {
        children,
        style,
        label,
    } = props;

    return (
        <button
            className={`px-8`}
            style={style}
        >
            {label || children}
        </button>
    );
};

export { Button };
