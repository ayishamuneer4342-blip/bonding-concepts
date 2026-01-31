import styles from './Button.module.css';
import Link from 'next/link';

const Button = ({ children, href, variant = 'primary', className, ...props }) => {
    const combinedClassName = `${styles.button} ${styles[variant]} ${className || ''}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
