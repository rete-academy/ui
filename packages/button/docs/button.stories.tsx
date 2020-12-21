import React from 'react';

import {Button} from '../lib';

export default {title: 'Button'};

export const primary = () => (
    <>
        <Button label="Primary" />
        <br />
        <br />
        <Button label="Success" type="success" />
        <br />
        <br />
        <Button label="Error" type="error" />
        <br />
        <br />
        <Button label="Info" type="info" />
        <br />
        <br />
        <Button label="Warning" type="warning" />
    </>
);

export const sizes = () => (
    <>
        <Button label="Small" size="small" />
        <br />
        <br />
        <Button label="Medium" size="medium" />
        <br />
        <br />
        <Button label="Huge" size="huge" />
    </>
);
