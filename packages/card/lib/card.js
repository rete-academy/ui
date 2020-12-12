import React from 'react';

export const Card = (props) => {
    const {
        children,
        style,
    } = props;

    return <div style={style}>{children}</div>
};

export default Card;
