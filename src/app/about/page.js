import PageHeader from '@/components/PageHeader/PageHeader';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us | Bonding Concepts',
    description: 'Learn about Bonding Concepts, a leading technical services company in Dubai.',
};

export default function About() {
    return (
        <div>
            <PageHeader title="About Us" subtitle="Building Integrity & Trust" />

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Who We Are</h2>
                        <p>
                            Bonding Concepts is a premier technical services company based in Dubai, UAE. We specialize in providing a wide range of maintenance, installation, and contracting solutions for both residential and commercial properties. Our team of skilled professionals is dedicated to delivering excellence in every project we undertake.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Mission</h2>
                        <p>
                            To provide reliable, high-quality technical services that exceed client expectations, ensuring safety, efficiency, and aesthetic appeal in every space we work on.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Values</h2>
                        <ul className={styles.valuesList}>
                            <li><strong>Quality:</strong> We never compromise on the standard of our work.</li>
                            <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
                            <li><strong>Reliability:</strong> We are dependable and deliver on our promises.</li>
                            <li><strong>Customer Satisfaction:</strong> Our clients are at the heart of everything we do.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Approach</h2>
                        <p>
                            We believe in a client-first methodology. This means listening to your specific requirements, providing tailored solutions, and keeping you informed at every stage of the project. Whether it's a minor repair or a major installation, we treat every job with the same level of dedication and attention to detail.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Commitment to Safety</h2>
                        <p>
                            Safety is paramount at Bonding Concepts. Our team adheres to strict health and safety regulations to ensure the wellbeing of our staff and clients. We regularly train our technicians on the latest safety protocols and best practices in the industry.
                        </p>
                    </section>

                    <div className={styles.ctaContainer}>
                        <h3>Ready to work with us?</h3>
                        <Button href="/contact" variant="primary">Get in Touch</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
