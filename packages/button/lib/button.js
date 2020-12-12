import React from 'react';
import { ThemeProvider } from '@rete-academy/base';
console.log('### ThemeProvider: ', ThemeProvider);

import './styles';

import styles from './button.css';

const Button = (props) => {
    const {
        children,
        style,
        label,
    } = props;

    return (
        <button
            className={`${styles.wrapper} px-8`}
            style={style}
        >
            {label || children}
        </button>
    );
};

export { Button };
