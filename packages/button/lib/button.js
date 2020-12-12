import React from 'react';

import styles from './button.css';
console.log('### styles: ', styles);

const Button = (props) => {
    const {
        children,
        style,
        label,
    } = props;

    return (
        <button
            className={styles.wrapper}
            style={style}
        >
            {label || children}
        </button>
    );
};

export default Button;
