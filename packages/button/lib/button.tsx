import React, {useMemo} from 'react';

export interface ButtonProps {
    size?: string;
    type?: string;
    outlined?: boolean;
    label?: React.ReactNode | any;
    children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const {
        children,
        label,
        type,
    } = props;

    const btnType = useMemo(() => {
        switch (type) {
            case 'primary':
                return 'bg-blue-700';
            case 'success':
                return 'bg-green-500';
            case 'warning':
                return 'bg-orange-400';
            case 'info':
                return 'bg-cyan-400';
            case 'error':
                return 'bg-red-600';
            default:
                return 'bg-blue-700';
        }
    }, []);

    return (
        <button
            type="button"
            className={`px-10 py-4 ${btnType} text-white rounded-2xl`}
        >
            {label || children}
        </button>
    );
};

export default Button;
