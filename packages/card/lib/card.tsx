import React from 'react';

const Card = (props: any) => {
    const {
        children,
        style,
    } = props;

    return <div style={{borderWidth: 1, color: 'red', ...style}}>{children}</div>
};

export default Card;
