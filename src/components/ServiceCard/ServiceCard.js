import Link from 'next/link';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, slug }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href={`/services/${slug}`} className={styles.link}>
                Learn More &rarr;
            </Link>
        </div>
    );
};

export default ServiceCard;
