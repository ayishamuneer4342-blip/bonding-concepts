import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>Reliable Technical Services You Can Trust</h1>
                    <p className={styles.subheading}>
                        Comprehensive maintenance, installation & contracting solutions for residential and commercial spaces.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button href="/services" variant="primary">View Our Services</Button>
                        <Button href="/contact" variant="outline" className={styles.secondaryBtn}>Get a Quote</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
