import styles from './PageHeader.module.css';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className={styles.header}>
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
