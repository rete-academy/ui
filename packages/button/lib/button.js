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
            className={`px-10 py-4 bg-purple-600 text-white rounded-2xl`}
            style={style}
        >
            {label || children}
        </button>
    );
};

export { Button };
