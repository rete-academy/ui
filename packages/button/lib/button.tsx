import React, {useMemo} from 'react';

export interface ButtonProps {
    children?: React.ReactNode;
    label?: React.ReactNode | any;
    onClick?: (e: any) => void;
    outlined?: boolean;
    size?: string;
    type?: string;
}

const Button = (props: ButtonProps) => {
    const {
        children,
        label,
        onClick,
        size,
        type,
    } = props;

    const btnSize = useMemo(() => {
        switch (size) {
            case 'small':
                return 'px-6 py-2 rounded-xl text-xs';
            case 'medium':
                return 'px-10 py-4 rounded-2xl text-base';
            case 'huge':
                return 'px-14 py-6 rounded-3xl text-xl';
            default:
                return 'px-10 py-4 rounded-2xl text-base';
        }
    }, [size]);

    const btnType = useMemo(() => {
        switch (type) {
            case 'primary':
                return 'bg-blue-700';
            case 'success':
                return 'bg-green-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'info':
                return 'bg-indigo-500';
            case 'error':
                return 'bg-red-600';
            default:
                return 'bg-blue-700';
        }
    }, [type]);

    return (
        <button
            type="button"
            className={`${btnSize} ${btnType} text-white`}
            onClick={onClick}
        >
            {label || children}
        </button>
    );
};

export default Button;
