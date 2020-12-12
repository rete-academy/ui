import React from 'react';

export const Card = (props) => {
    const {
        children,
        style,
    } = props;

    return <div style={{ borderWidth: 1, color: 'red', ...style}}>{children}</div>
};

export default Card;
