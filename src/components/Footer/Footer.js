import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <p>&copy; {new Date().getFullYear()} Bonding Concepts. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
