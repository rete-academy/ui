import React from 'react';

const Card = (props) => {
    const {
        children,
        style,
    } = props;

    return <div style={style}>{children}</div>
};

export default Card;
